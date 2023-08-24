import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { render } from '@testing-library/react';

const PrivateRoute = ({children}) => {
  const {isAuthenticated,user}=useAuth0();
  const isUser=isAuthenticated && user;
 if(!isUser){
  return <Navigate to="/login"></Navigate>
 }
 return children;
};
export default PrivateRoute;
