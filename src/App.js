import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home"
import React from "react";
import './App.css';
import NotFound from "./components/Default/NotFound";
import Profile from "./components/Profile/Profile";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Kwetter-Frontend' element={
          <Layout>
            <Home />
          </Layout>}
        />
        <Route path='/Kwetter-Frontend/profile' element={
          <Layout>
            <Profile />
          </Layout>}
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
