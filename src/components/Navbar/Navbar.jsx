import * as React from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { NavLink, Outlet } from 'react-router-dom';
import { routes } from '../../routes/index.routes';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer } from '@mui/material';

const logoStyle = {
  width: '10%',
  height: '32px',
  cursor: 'pointer',
  objectFit: 'contain'
};

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                '0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)'
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                px: 0
              }}
            >
              <img
                src={
                  'https://cdn3.iconfinder.com/data/icons/business-and-office-paper-vol-2/150/cart__shopping__baby__ecommerce-512.png'
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <NavLink
                  to={routes.home.path}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '1rem',
                    padding: '6px 12px'
                  }}
                >
                  {routes.home.title}
                </NavLink>
                <NavLink
                  to={routes.form.path}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '1rem',
                    padding: '6px 12px'
                  }}
                >
                  {routes.form.title}
                </NavLink>
                <NavLink
                  to={routes.list.path}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '1rem',
                    padding: '6px 12px'
                  }}
                >
                  {routes.list.title}
                </NavLink>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center'
              }}
            >
              <NavLink to={routes.login.path}>
                <Button
                  color="primary"
                  variant="outlined"
                  sx={{ width: '100%' }}
                >
                  {routes.login.title}
                </Button>
              </NavLink>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <NavLink
                    to={routes.home.path}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontSize: '1rem',
                      padding: '6px 12px'
                    }}
                  >
                    {routes.home.title}
                  </NavLink>
                  <NavLink
                    to={routes.form.path}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontSize: '1rem',
                      padding: '6px 12px'
                    }}
                  >
                    {routes.form.title}
                  </NavLink>
                  <NavLink
                    to={routes.list.path}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontSize: '1rem',
                      padding: '6px 12px'
                    }}
                  >
                    {routes.list.title}
                  </NavLink>
                  <Divider />
                  <NavLink to={routes.login.path}>
                    <Button
                      color="primary"
                      variant="outlined"
                      sx={{ width: '100%', marginTop: 2 }}
                    >
                      {routes.login.title}
                    </Button>
                  </NavLink>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
          <Outlet />
        </Container>
      </AppBar>
    </div>
  );
};
