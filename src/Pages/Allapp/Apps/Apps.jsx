import React from 'react';
import App from './App';

const Apps = ({allApps, searchText}) => {
    const filteredApps = allApps.filter(app => app.title.toLowerCase().includes(searchText.toLowerCase()));
    return (
        <div className='grid grid-cols-1   md:grid md:grid-cols-4 bg-gray-200  md:gap-5 md:px-10 md:pb-5'>
            {
                filteredApps.map(app => <App app={app} key={app.id}></App>)
            }
        </div>
    );
};

export default Apps;