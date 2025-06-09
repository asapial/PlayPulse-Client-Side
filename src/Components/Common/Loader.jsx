import React from 'react';
import loading from "../../assets/LottiAnimation/loading.json"
import Lottie from 'lottie-react';
const Loader = () => {
    return (
        <div className=' flex justify-center items-center min-h-screen'>
            <Lottie animationData={loading} loop={true} className=' w-1/5 '/>
        </div>
    );
};

export default Loader;