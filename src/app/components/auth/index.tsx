import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthUser } from 'react-auth-kit'

const Index = () => {
  const auth = useAuthUser();
  const location = useLocation();

  if (auth()) 
    return <Navigate to="/" state={{ from: location }} />;
  
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default Index;