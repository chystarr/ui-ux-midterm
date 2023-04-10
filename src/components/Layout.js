import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

function Layout({ theme }) {
  const pages = ['about', 'appointments', 'reviews'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="absolute">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/*Larger screen sizes*/}
            <Typography variant='h6' component={Link} to='/' sx={{
                display: { xs: 'none', md: 'flex' },
                textDecoration: 'none',
                textTransform: 'none',
              }}
            >
              NYC Frog Clinic
            </Typography>
            <Box sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                mx: 2,
              }}
            >
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} component={Link} to={page} sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    textDecoration: 'none',
                    textTransform: 'none',
                  }}
                >
                  <Typography variant='subtitle1'>
                    {page.substring(0, 1).toUpperCase() + page.substring(1)}
                  </Typography>
                </Button>
              ))}
            </Box>

            {/*Smaller screen sizes*/}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size='large' onClick={handleOpenNavMenu} color='inherit'>
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={page}>
                    <Typography variant='body1' textAlign="center">
                      {page.substring(0, 1).toUpperCase() + page.substring(1)}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Typography variant='h6' noWrap component={Link} to='/' sx={{
                display : { xs: 'flex', md: 'none' },
                mx: 2,
                flexGrow: 1,
                alignSelf: 'center',
                textAlign: 'center',
                textDecoration: 'none',
                }}
              >
                NYC Frog Clinic
              </Typography>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </ThemeProvider>
  );
}

export default Layout;