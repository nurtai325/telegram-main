import { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                name,
                email,
                password
            });
            console.log(response.data); // You can handle success response here
        } catch (error) {
            console.error('Registration failed:', error);
            // You can handle error responses here
        }
    };

    return (
        <div className='bg-white flex justify-center items-center h-screen w-screen'>
            <div className="flex items-center justify-center bg-gray-100">
                <div className="bg-white p-12 rounded-lg shadow-2xl w-96">
                    <h1 className="text-3xl font-bold mb-8">Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-6">
                            <p>Name</p>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border p-3 rounded mt-1"
                                required
                            />
                        </label>
                        <label className="block mb-6">
                            <p>Email</p>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border p-3 rounded mt-1"
                                required
                            />
                        </label>
                        <label className="block mb-6">
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
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
