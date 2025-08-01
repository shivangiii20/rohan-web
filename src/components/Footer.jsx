import React from 'react';
import { Box, Typography, Link as MuiLink, Stack, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import FooterBubbles from './FooterBubbles'; // Import correctly

const Footer = () => {
  
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #9f7aea, #63d2ff)',
        color: '#fff',
        py: 6,
        mt: 8,
        textAlign: 'center',
         position: 'relative',
          overflow: 'visible', // Ensures bubbles stay within
      }}
    >

<FooterBubbles/>
    
      <Container maxWidth="lg">
        {/* Link Section */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{
            mb: 3,
            fontSize: { xs: '1rem', md: '1.3rem' },
            fontWeight: 'bold',
          }}
        >
          <MuiLink component={Link} to="/about-us" sx={{ color: '#fff', textDecoration: 'none', fontFamily: 'semiBold', fontSize: { xs: "1.3rem", md: "1.8rem" }, }}>
            About Us      |
          </MuiLink>
          <MuiLink component={Link} to="/terms-and-conditions" sx={{ color: '#fff', textDecoration: 'none', fontFamily: 'semiBold', fontSize: { xs: "1.3rem", md: "1.8rem" }, }}>
            Terms & Conditions |
          </MuiLink>
          <MuiLink component={Link} to="/cancellation-and-refund" sx={{ color: '#fff', textDecoration: 'none', fontFamily: 'semiBold', fontSize: { xs: "1.3rem", md: "1.8rem" }, }}>
            Cancellation & Refund
          </MuiLink>
        </Stack>

        {/* Copyright */}
        <Typography variant="body2" sx={{ color: '#f3e8e8ff', fontFamily: 'Robot', fontSize: { xs: "1.3rem", md: "1.6rem" }, }}>
          © {new Date().getFullYear()} YourCompanyName. All rights reserved.
        </Typography>
        
      </Container>
    </Box>
  );
};

export default Footer;
