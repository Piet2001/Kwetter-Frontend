import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home"
import React from "react";
import {
  useIsAuthenticated,
} from '@azure/msal-react';

import './App.css';
import NotFound from "./components/Default/NotFound";
import Profile from "./components/Profile/Profile";
import Login from "./components/Default/Login";


function App() {

  const ProtectedRoute = ({ children }) => {
    if (!useIsAuthenticated()) {
      return <Layout><Login /></Layout>;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Kwetter-Frontend' element={
          <ProtectedRoute>
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
        />
        <Route path='/Kwetter-Frontend/profile' element={
          <ProtectedRoute>
            <Layout>
              <Profile />
            </Layout>
          </ProtectedRoute>
        }
        />
        <Route path="*" element={
          <Layout>
            <NotFound />
          </Layout>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
