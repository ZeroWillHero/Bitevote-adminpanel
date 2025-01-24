import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Add from "./pages/Add/Add"
import List from "./pages/List/List"
import Orders from "./pages/Orders/Orders"

import { useSelector } from 'react-redux';



export default function Layout() {
    const url = "http://localhost:4000";
    const page = useSelector((state) => state.sideBar.page);
    console.log("From main Wrapper",page);
    return (
        <div>
            <Navbar />
            <hr />
            <div className="app-content">
            <Sidebar />
            {
                page === "add" ? <Add url={url} /> : page === "list" ? <List url={url} /> : <Orders url={url}/>
            }
            
        </div>
        </div>
        
    )
}