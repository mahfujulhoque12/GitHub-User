import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      </BrowserRouter>
 
      </AuthWrapper>
  );
}

export default App;
