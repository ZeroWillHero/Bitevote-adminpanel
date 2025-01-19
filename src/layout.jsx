import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"


export default function Layout() {
    return (
        <div>
            <Navbar />
            <hr />
            <div className="app-content">
            <Sidebar />
        </div>
        </div>
        
    )
}