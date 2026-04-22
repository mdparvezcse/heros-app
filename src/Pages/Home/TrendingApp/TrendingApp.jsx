import React from 'react';
import TopApp from './TopApp';
import { useNavigate } from 'react-router';

const TrendingApp = ({ trendingData }) => {
    const navigate = useNavigate();
    return (
        <div className='bg-gray-200 md:px-10 p-2 text-center'>
            <h1 className='font-bold md:text-4xl md:mb-6'>Trending Apps</h1>
            <div className='grid grid-cols-1   md:grid md:grid-cols-4 bg-gray-200  md:gap-5'>
                {
                    trendingData.map(topAppData => <TopApp topAppData={topAppData} key={topAppData.id}></TopApp>)
                }
            </div>
            <button onClick={()=> navigate('/apps')} className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font font-semibold md:mt-5">See All</button>
        </div>


    );
};

export default TrendingApp;