import { useSelector } from 'react-redux';
import React from 'react';
import Registerpage from '../Components/Registerpage';
import Myprofile from '../Components/Myprofile';
import AllProfile from "../Components/AllProfile"
import {
  Redirect,
  Route,
  BrowserRouter,
  Routes,
  Outlet,
} from 'react-router-dom';
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
          path="/"
          element={
            <ProtectedRoute>
              <Myprofile />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<Registerpage />}></Route>
        <Route path="/allprofile" element={<AllProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
