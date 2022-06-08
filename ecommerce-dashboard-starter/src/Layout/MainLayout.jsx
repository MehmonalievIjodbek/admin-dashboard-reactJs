import React from 'react';
import './main-layout.scss';
import Sidebar from "../Component/sidebar/Sidebar";
import {Outlet} from 'react-router-dom';
import TopNav from "../Component/topnav/TopNav";

const MainLayout = () => {
    return (
        <div>
            <Sidebar/>
            <div className="main">
                <div className="main__content">
                    <TopNav />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;