import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProtectedRoutes from "./pages/auth/ProtectedRoutes";
import Layout from "./layout";
import { useEffect } from "react";

export default function Router() {
   
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={
                <ProtectedRoutes>
                    <Layout />
                </ProtectedRoutes>
            } />
        </Routes>
    )
}