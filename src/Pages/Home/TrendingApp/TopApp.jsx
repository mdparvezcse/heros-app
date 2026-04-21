import React from 'react';

const TopApp = ({topAppData}) => {
    const {image, title, downloads, ratingAvg} = topAppData;
    return (
        <div className='border-none bg-white p-4 shadow-md rounded-xl mb-4 md:mb-0'>
            <img src={image} alt="" className='md:w-70 md:h-60 p-4 rounded-2xl'/>
            <h1>{title}</h1>
            <div className='flex justify-between'>
                <h1>{downloads}</h1>
                <h1>{ratingAvg}</h1>
            </div>
        </div>
    );
};

export default TopApp;