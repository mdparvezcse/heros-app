import React from 'react';

const Trusted = () => {
    return (
        <div className='text-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-10 text-white'>
            <h1 className='font-bold text-5xl mb-10'>Trusted by Millions, Built for You</h1>
            <div className='flex justify-center gap-6'>
                <div>
                    <p>Total Download</p>
                    <h3 className='font-extrabold text-6xl'>29.6M</h3>
                    <p>21% More Than Last Month</p>
                </div>
                <div>
                    <p>Total Review</p>
                    <h3 className='font-extrabold text-6xl'>906K</h3>
                    <p>46% More Than Last Month</p>
                </div>
                <div>
                    <p>Active Apps</p>
                    <h3 className='font-extrabold text-6xl'>132+</h3>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Trusted;