import { ChevronDown } from 'lucide-react';
import React from 'react';

const InstallBanner = () => {
    return (
        <div >
            <div className=' text-center md:pt-15 md:pb-10'>
                <h3 className='font-semibold md:text-4xl'>Your Installed Apps</h3>
                <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between pb-5 items-center'>
                <h3 className='font-bold'>Apps Found</h3>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Filter <ChevronDown></ChevronDown></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InstallBanner;