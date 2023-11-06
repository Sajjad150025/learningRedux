import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const useAuthenticate = () =>{
    return false;
}

const PrivateRoute = () => {
    const isAuthenticate = useAuthenticate();
  return isAuthenticate ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute