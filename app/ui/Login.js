'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useStore } from '../lib/store/store';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const logIn = useStore((state) => state.logIn);
    const handle = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {'email': email, 'password': password})
        .then(function (response) {
            const {log} = response.data;
            console.log(log);
            if(log){
                logIn();
            }
        })
        .catch(function (err) {
            console.log(err)
        })
    }
  return (
    <div className='bg-white flex justify-center items-center h-screen w-screen'>
        <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-2xl w-96">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <form onSubmit={handle}>
          <label className="block mb-6">
            <p>Email</p>
            <input
              type="tel"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded mt-1"
              required
            />
          </label>
          <label className='mb-6 block]'>
            <p>Password</p>
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded mt-1"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
