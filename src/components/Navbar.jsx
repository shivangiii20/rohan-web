import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Switch,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import {
  DesignServices,
  TrendingUp,
  ShoppingCart,
  Campaign,
  Android,
  Brush,
} from '@mui/icons-material';

const Navbar = ({ toggleTheme, mode }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorElServices, setAnchorElServices] = useState(null);
  const handleOpenServices = (e) => setAnchorElServices(e.currentTarget);
  const handleCloseServices = () => setAnchorElServices(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [sidebarServicesOpen, setSidebarServicesOpen] = useState(false);
  const handleSidebarServicesToggle = () => setSidebarServicesOpen((prev) => !prev);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: isScrolled
            ? 'linear-gradient(135deg, rgb(130, 46, 203), rgb(125, 200, 209))'
            : 'transparent',
          transition: 'background 3s ease-in-out',
          boxShadow: isScrolled ? 0.8 : 'none',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          color: '#fff',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
          >
            YourBrand
          </Typography>

          {isMobile ? (
            <Box>
              <IconButton color="inherit" onClick={toggleTheme}>
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button
                color="inherit"
                onClick={handleOpenServices}
                endIcon={anchorElServices ? <ExpandLess /> : <ExpandMore />}
              >
                Services
              </Button>
             <Menu
  anchorEl={anchorElServices}
  open={Boolean(anchorElServices)}
  onClose={handleCloseServices}
  MenuListProps={{
    sx: {
      background: 'linear-gradient(135deg, #7f00ff, #e100ff)',
      color: '#fff',
      px: 1,
       width: { xs: 220, sm: 240, md: 260, lg: 300 }, // width adjusts by screen size
    },
  }}
>
  <MenuItem
    onClick={() => { handleCloseServices(); navigate('/website-designing'); }}
    sx={{ gap: 1 }}
  >
    <DesignServices sx={{ fontSize: 20 }} />
    Website Designing
  </MenuItem>
  <MenuItem
    onClick={() => { handleCloseServices(); navigate('/seo-optimization'); }}
    sx={{ gap: 1 }}
  >
    <TrendingUp sx={{ fontSize: 20 }} />
    SEO Optimization
  </MenuItem>
  <MenuItem
    onClick={() => { handleCloseServices(); navigate('/ecommerce-website'); }}
    sx={{ gap: 1 }}
  >
    <ShoppingCart sx={{ fontSize: 20 }} />
    E-Commerce Website
  </MenuItem>
  <MenuItem
    onClick={() => { handleCloseServices(); navigate('/digital-marketing'); }}
    sx={{ gap: 1 }}
  >
    <Campaign sx={{ fontSize: 20 }} />
    Digital Marketing
  </MenuItem>
  <MenuItem
    onClick={() => { handleCloseServices(); navigate('/android-app-development'); }}
    sx={{ gap: 1 }}
  >
    <Android sx={{ fontSize: 20 }} />
    Android App Development
  </MenuItem>
  <MenuItem
    onClick={() => { handleCloseServices(); navigate('/graphic-designing'); }}
    sx={{ gap: 1 }}
  >
    <Brush sx={{ fontSize: 20 }} />
    Graphic Designing
  </MenuItem>
</Menu>


              <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>

              <IconButton color="inherit" onClick={toggleTheme}>
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            <ListItem button component={Link} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button onClick={handleSidebarServicesToggle}>
              <ListItemText primary="Services" />
              {sidebarServicesOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={sidebarServicesOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding
               sx={{
      background: 'linear-gradient(135deg, #7f00ff, #e100ff)',
      color: '#fff',
      borderRadius: 1,
      mt: 1,
      mb: 2,
      py: 1,
    }}
              >
                {[
      { text: 'Website Designing', path: '/website-designing', icon: <DesignServices sx={{ fontSize: 20, mr: 1 }} /> },
      { text: 'SEO Optimization', path: '/seo-optimization', icon: <TrendingUp sx={{ fontSize: 20, mr: 1 }} /> },
      { text: 'E-Commerce Website', path: '/ecommerce-website', icon: <ShoppingCart sx={{ fontSize: 20, mr: 1 }} /> },
      { text: 'Digital Marketing', path: '/digital-marketing', icon: <Campaign sx={{ fontSize: 20, mr: 1 }} /> },
      { text: 'Android App Development', path: '/android-app-development', icon: <Android sx={{ fontSize: 20, mr: 1 }} /> },
      { text: 'Graphic Designing', path: '/graphic-designing', icon: <Brush sx={{ fontSize: 20, mr: 1 }} /> },
    ].map(({ text, path, icon }) => (
      <ListItem
        key={path}
        button
        onClick={() => {
          toggleDrawer();
          navigate(path);
        }}
        sx={{
          pl: 3,
          py: 1,
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {icon}
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
</Collapse>
                  

            <ListItem button component={Link} to="/portfolio" onClick={toggleDrawer}>
              <ListItemText primary="Portfolio" />
            </ListItem>

            <ListItem button component={Link} to="/contact" onClick={toggleDrawer}>
              <ListItemText primary="Contact" />
            </ListItem>

            <ListItem>
              <Brightness4 sx={{ mr: 1 }} />
              <Switch checked={mode === 'dark'} onChange={toggleTheme} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
