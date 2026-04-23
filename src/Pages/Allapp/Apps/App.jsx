import React from 'react';
import { NavLink } from 'react-router';

const App = ({ app }) => {
    const { image, title, downloads, ratingAvg } = app;
    return (
        <NavLink to={`/appDetails/${app.id}`}>
            <div className='border-none bg-white p-4 shadow-md rounded-xl mb-4 md:mb-4 mx-4 md:mx-0'>
                <img src={image} alt="" className='mx-auto h-60 md:w-70 md:h-60 md:p-4 rounded-2xl' />
                <h1>{title}</h1>
                <div className='flex justify-between'>
                    <h1>{downloads}</h1>
                    <h1>{ratingAvg}</h1>
                </div>
            </div>
        </NavLink>
    );
};

export default App;