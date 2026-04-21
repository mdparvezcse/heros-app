import React from 'react';
import Banner from './Banner/Banner';
import Trusted from './Banner/Trusted';
import { useLoaderData } from 'react-router';
import TrendingApp from './TrendingApp/TrendingApp';

const Home = () => {
    const trendingData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Trusted></Trusted>
            <TrendingApp trendingData = {trendingData}></TrendingApp>
        </div>
    );
};

export default Home;