import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/auth/Login';
import Home from '../components/pages/Home';
import Settings from '../components/pages/Settings';
import Auth from '../components/auth';
import Layout from '../components/layout';

const index: React.FC = () => {
  return (
    <Routes>
      <Route element={ <Auth /> }>
        <Route element={ <Login /> } path="/login" />
      </Route>
      <Route element={ <Layout /> }>
        <Route element={ <Home /> } path="/" />
        <Route element={ <Home /> } path="/test" />
        <Route element={ <Settings /> } path="/settings" />
      </Route>
      <Route element={ <div>not found</div> } />
    </Routes>
  );
}

export default index;