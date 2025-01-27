// filepath: /home/chameera/Desktop/projects/Bitevote-adminpanel/src/layout.jsx
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Account from './pages/account/account';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import getShop from './firebase/shop/getShop';

export default function Layout() {
    const url = "http://localhost:4000";
    const page = useSelector((state) => state.sideBar.page);
    console.log("From main Wrapper", page);

    useEffect(() => {
        const fetchShop = async () => {
            const uid = localStorage.getItem("uid");
            if (uid) {
                const response = await getShop(uid); 
                 
            }
        };

        fetchShop();
    }, []);

    return (
        <div>
            <Navbar />
            <hr />
            <div className="app-content">
                <Sidebar />
                {
                    page === "add" 
                    ? <Add url={url} /> 
                    : page === "list" 
                    ? <List url={url} /> 
                    : page === "orders" 
                    ? <Orders url={url} /> 
                    : page === "account" 
                    ? <Account url={url} /> 
                    : null
                }
            </div>
        </div>
    );
}