'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useStore } from '../lib/store/store';

const Login = () => {
    const logIn = useStore((state) => state.logIn);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [waiting, setWaiting] = useState(false);
    const [codeRes, setCodeRes] = useState('');
    const [error, setError] = useState(0);

  const handleLogin = (e) => {
    e.preventDefault();
    setWaiting(true);
    axios.get('http://127.0.0.1:8000/code')
      .then(response => {
          setCodeRes(response.data);
          console.log(codeRes);
      })
      .catch(error => {
          console.error(error);
      });
    console.log(`Logging in with ${phoneNumber}`);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if(code === codeRes) {
        logIn();
    } else {
        setError(error + 1);
    };
  };


  return (
    <div className='bg-white flex justify-center items-center h-screen w-screen'>
        <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-2xl w-96">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <form onSubmit={waiting ? handleConfirm : handleLogin}>
          <label className="block mb-6">
            <p>Phone Number:</p>
            <small>Format: +7 (700) 000 0000</small>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border p-3 rounded mt-1"
              required
            />
          </label>
          {waiting && <label className="block mb-6">
            <p>Enter the code that was sent to your Whatsapp</p>
            <input
              type="tel"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full border p-3 rounded mt-1"
              required
            />
          </label>}
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
          >
            Login
          </button>
          <small className='text-red-600'>Code isn't correct!</small>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
