import React from 'react';
import errorImg from '../../assets/error-404.png'
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center md:space-y-3'>
            <img className='mx-auto md:h-80' src={errorImg} alt="" />
            <h1 className='font-semibold text-5xl'>Oops, page not found</h1>
            <p className='text-gray-600'>The page looking for is not available.</p>
            <button onClick={() => navigate(-1)} className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font font-semibold">Go Back</button>
        </div>
    );
};

export default Error;