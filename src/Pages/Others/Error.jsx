import Lottie from 'lottie-react/build';
import React from 'react';
import { useNavigate } from 'react-router';
import error from '../../assets/LottiAnimation/error.json';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
            <div className="w-full max-w-md flex flex-col items-center bg-white rounded-lg shadow-lg p-8">
                <div className="w-60 h-60 mb-4">
                    <Lottie animationData={error} loop={true} />
                </div>
                <h1 className="text-3xl font-bold text-red-600 mb-2">Oops! Something went wrong.</h1>
                <p className="text-gray-700 mb-6 text-center">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Go Home
                </button>
            </div>
        </div>
    );
};

export default Error;