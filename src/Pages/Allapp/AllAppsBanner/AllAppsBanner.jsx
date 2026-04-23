import React from 'react';

const AllAppsBanner = ({ allApps, searchText, setSearchText}) => {
    return (
        <div className='md:px-10'>
            <div className=' text-center md:pt-15 md:pb-10 '>
                <h3 className='font-semibold md:text-4xl'>All Our Applications</h3>
                <p className='text-gray-600'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between pb-5 items-center'>
                <h3 className='font-bold'>({allApps.length}) Apps Found</h3>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search app" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                </label>
            </div>
        </div>
    );
};

export default AllAppsBanner;