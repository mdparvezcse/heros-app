import React from 'react';
import InstalledAppCard from './InstalledAppCard';
import { removeApp } from '../../../Utility/LocalStorage';

const InstalledApp = ({ allAppsData, setAllAppsData }) => {

    const handleUninstallBtn = id => {
        const result = allAppsData.filter(item => item.id !== id); 
        setAllAppsData(result)
        removeApp(id);
    }
    return (
        <div>
            {
                allAppsData.map(appData => <InstalledAppCard appData={appData} key={appData.id} setAllAppsData={setAllAppsData} handleUninstallBtn={handleUninstallBtn}></InstalledAppCard>)
            }
        </div>
    );
};

export default InstalledApp;