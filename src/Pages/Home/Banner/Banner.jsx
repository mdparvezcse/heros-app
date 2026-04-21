import React from 'react';
import bannerImg from '../../../assets/hero.png'
const Banner = () => {
    return (
        <div className='text-center md:space-y-5 bg-gray-200 px-5 space-y-4 pt-5'>
            <h1 className='font-bold md:text-7xl'>We Build <br /> <span className='text-[#632EE3]'>Productive</span> Apps</h1>
            <p>AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <button className='border border-gray-300 px-2 py-0.5'><a href="https://play.google.com/store/apps?hl=en" target='blank'>Google Play</a></button>
            <button className='border border-gray-300 px-2 py-0.5'><a href="https://www.apple.com/app-store/" target='blank'>App Store</a></button>
            <img className='mx-auto' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;