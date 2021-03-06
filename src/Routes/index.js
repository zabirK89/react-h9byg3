import { useSelector } from 'react-redux';
import React from 'react';
import Registerpage from '../Components/Registerpage';
import Myprofile from '../Components/Myprofile';
import AllProfile from '../Components/AllProfile';
import { Redirect, Route, BrowserRouter, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import LoginPage from '../Components/LoginPage';

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  return token ? children : <Navigate to="/login" />;
};
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Myprofile />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/register"
          element={
            <ProtectedRoute>
              <Registerpage />{' '}
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/allprofile"
          element={
            <ProtectedRoute>
              <AllProfile />{' '}
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
