import React, { useEffect, useState } from 'react';
import InstallBanner from './InstallBanner/InstallBanner';
import InstalledApp from './InstalledApp/InstalledApp';
import { getStoredAppsData } from '../../Utility/LocalStorage';

const Instullation = () => {
    const [allAppsData, setAllAppsData] = useState([])
    const getApps = getStoredAppsData();
    useEffect(() => {
        fetch('allAppsData.json')
            .then(res => res.json())
            .then(data => {
                const result = data.filter(item => getApps.includes(item.id));
                setAllAppsData(result)
            });
    }, []);

    return (
        <div className='bg-gray-200 md:px-10'>
            <InstallBanner></InstallBanner>
            <InstalledApp allAppsData={allAppsData} setAllAppsData={setAllAppsData}></InstalledApp>
        </div>
    );
};

export default Instullation;