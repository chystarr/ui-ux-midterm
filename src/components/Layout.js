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

function Layout() {
  const pages = ['about', 'appointments', 'reviews'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/*Larger screen sizes*/}
            <Typography component={Link} to='/' sx={{ display : { xs: 'none', md: 'flex' } }}>
              Business Name
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Link to={page}>{page}</Link>
                </Button>
              ))}
            </Box>

            {/*Smaller screen sizes*/}
            <Typography component={Link} to='/' sx={{ display : { xs: 'flex', md: 'none' } }}>
              Business Name
            </Typography>
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
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
}

export default Layout;