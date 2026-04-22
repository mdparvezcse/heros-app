
import React from 'react';
import { Download, Star, UserStar } from 'lucide-react';

const Details = ({details}) => {
    // console.log(details)
    const {image, companyName, title, downloads, ratingAvg, reviews, size} = details;
    
    return (
        <div className='flex md:gap-6' >
            <div className='flex-1/4'>
                <img className='h-full' src={image} alt="" />
            </div>
            <div className='flex-3/4'>
                <h1 className='font-semibold text-4xl'>{title}</h1>
                <h2 className='font-semibold'>Developed By{companyName}</h2>
                <hr className='my-2 md:my-4'/>
                <div className='flex gap-10'>
                    <div className='md:space-y-2'>
                        <Download className='text-green-500'/>
                        <p>Downloads</p>
                        <h3>{downloads}</h3>
                    </div>
                    <div className='md:space-y-2'>
                        <Star className='text-yellow-300'></Star>
                        <p>Average Rating</p>
                        <h3>{ratingAvg}</h3>
                    </div>
                    <div className='md:space-y-2'>
                        <UserStar className='text-purple-500'></UserStar>
                        <p>Reviews</p>
                        <h3>{reviews}</h3>
                    </div>
                </div>
                <button className='md:mt-4 bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn' >Install Now ({size}MB)</button>
                <hr className='md:mt-4'/>
            </div>
        </div>
    );
};

export default Details;