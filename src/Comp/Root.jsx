import React from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from './Drawer';
import Test from './Test';

const Root = () => {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;