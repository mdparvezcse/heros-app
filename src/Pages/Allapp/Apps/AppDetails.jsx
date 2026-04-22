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
        <div className='bg-gray-200 md:p-10 space-y-6'>
            <Details details={details}></Details>
            <Chart details={details}></Chart>
            <div>
                <h1 className='font-semibold'>Description</h1>
                <p className='text-gray-600'>{details.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;