
import { useLoaderData, useNavigation } from 'react-router';
import AllAppsBanner from './AllAppsBanner/AllAppsBanner';
import Apps from './Apps/Apps';

const Allapp = () => {
   const allApps = useLoaderData();
   const navigation = useNavigation();
    return (
        <div className='bg-gray-200'>
            <AllAppsBanner allApps={allApps}></AllAppsBanner>
            {
                navigation.state == 'loading' && <h1 className='text-center'>L<span className="loading loading-dots loading-xl"></span>ading</h1>
            }
            <Apps allApps={allApps}></Apps>
        </div>
    );
};

export default Allapp;