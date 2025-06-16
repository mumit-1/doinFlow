import React from 'react';
import { useLoaderData } from 'react-router-dom';

const View = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default View;