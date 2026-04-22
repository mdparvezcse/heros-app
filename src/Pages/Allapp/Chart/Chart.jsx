import React from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Chart = ({ details }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                layout="vertical"
                data={details?.ratings}
            >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="count" fill="#ff4d4f" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Chart;