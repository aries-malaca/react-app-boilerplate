import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthUser } from 'react-auth-kit'
import { Box, Container, CssBaseline, Toolbar } from '@mui/material';
import { Copyright } from '@mui/icons-material';
import Header from './Header';
import SideBar from './SideBar';

const Index = () => {  
  const [open, setOpen] = React.useState(true);
  return (
    <RequireAuth>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header toggleDrawer={ () => setOpen(!open) } drawerOpen={ open } />
        <SideBar toggleDrawer={ () => setOpen(!open) } drawerOpen={ open } />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Outlet />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </RequireAuth>
  );
};

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuthUser();
  let location = useLocation();

  if (!auth()) 
    return <Navigate to="/login" state={{ from: location }} />;

  return children;
}

export default Index;