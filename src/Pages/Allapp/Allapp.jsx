
import { useLoaderData, useNavigation } from 'react-router';
import AllAppsBanner from './AllAppsBanner/AllAppsBanner';
import Apps from './Apps/Apps';
import { useState } from 'react';

const Allapp = () => {
    const allApps = useLoaderData();
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState("");
    return (
        <div className='bg-gray-200'>
            <AllAppsBanner
                allApps={allApps}
                setSearchText={setSearchText}
                searchText={searchText}
            ></AllAppsBanner>

            {
                navigation.state == 'loading' && <h1 className='text-center'>L<span className="loading loading-dots loading-xl"></span>ading</h1>
            }
            <Apps
                allApps={allApps}
                searchText={searchText}
            ></Apps>
        </div>
    );
};

export default Allapp;