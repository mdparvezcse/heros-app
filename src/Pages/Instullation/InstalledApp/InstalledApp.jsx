import React, { use } from 'react';
import InstalledAppCard from './InstalledAppCard';

const InstalledApp = ({allAppsData}) => {
    const insAppData = use(allAppsData)
    return (
        <div>
            {
                insAppData.map(appData => <InstalledAppCard appData={appData} key={appData.id}></InstalledAppCard>)
            }
        </div>
    );
};

export default InstalledApp;