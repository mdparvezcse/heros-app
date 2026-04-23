import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const InstallBanner = ({allAppsData, setAllAppsData}) => {
    const [sort, setSort] = useState([]);
    const handleSort = type => {
        setSort(type)
        if(type === "size"){
            const sortedSize = [...allAppsData].sort((a,b) => a.size - b.size);
            setAllAppsData(sortedSize)
        }
        if(type == "rating"){
            const sortedRating = [...allAppsData].sort((a,b) => a.ratingAvg - b.ratingAvg);
            setAllAppsData(sortedRating)
        }
    }
    return (
        <div >
            <div className=' text-center md:pt-15 md:pb-10'>
                <h3 className='font-semibold md:text-4xl'>Your Installed Apps</h3>
                <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between pb-5 items-center'>
                <h3 className='font-bold'>Apps Found</h3>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by {sort? sort: ""} <ChevronDown></ChevronDown></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("size")}>Size</a></li>
                        <li><a onClick={() => handleSort("rating")}>Rating</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InstallBanner;