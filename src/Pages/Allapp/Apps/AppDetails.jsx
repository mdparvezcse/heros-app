import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Details from './Details';
import Chart from '../Chart/Chart';

const AppDetails = () => {
    const {id} = useParams();
    const allData = useLoaderData();
    const details = allData.find(app => id == app.id);
    // console.log(details);
    
    return (
        <div className='bg-gray-200 md:p-10'>
            <Details details={details}></Details>
            <Chart details={details}></Chart>
        </div>
    );
};

export default AppDetails;