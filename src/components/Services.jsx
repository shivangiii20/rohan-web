import React from 'react';
import { Card, Typography, Box } from '@mui/material';

const Services = ({ icon, title, description }) => {
  return (
    <Card
      sx={{
        background: 'linear-gradient(135deg, #7b4cb7, #6ec1e4)',
        color: 'white',
        borderRadius: 3,
        height: '100%',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow:  4 ,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: 15,
        },
      }}
    >
      <Box sx={{ mb: 2 }}>
        {React.cloneElement(icon, { fontSize: 'large', sx: { color: 'white' } })}
      </Box>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </Card>
  );
};

export default Services;
