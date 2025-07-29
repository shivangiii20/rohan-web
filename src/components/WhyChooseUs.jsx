import React from 'react';
import { Box, Grid, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import { LaptopMac, Build, Speed, Security, SupportAgent, TrendingUp } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const features = [
  { icon: <LaptopMac fontSize="large" />, title: 'Proven Expertise', desc: 'Years of experience in delivering robust digital solutions.' },
  { icon: <Build fontSize="large" />, title: 'Custom Development', desc: 'We tailor every project based on your unique needs.' },
  { icon: <Speed fontSize="large" />, title: 'Fast Performance', desc: 'Our sites are lightning-fast and optimized for all devices.' },
  { icon: <Security fontSize="large" />, title: 'Top-Notch Security', desc: 'Your data is protected with best-in-class security practices.' },
  { icon: <SupportAgent fontSize="large" />, title: '24/7 Support', desc: 'Reliable support whenever you need assistance.' },
  { icon: <TrendingUp fontSize="large" />, title: 'Result-Oriented', desc: 'We focus on delivering measurable business results.' },
];

const WhyChooseUs = ({isDark}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        position: 'relative',
        background: theme.palette.mode === 'dark'
          ? '#000000'
          : '#eef4ff', // light soft background
        overflow: 'hidden',
      }}
    >
      {/* Gradient Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{
            background: 'linear-gradient(135deg,rgb(110, 47, 234), #63d2ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Why Choose Us
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: 6,
            maxWidth: 600,
            mx: 'auto',
            fontSize: '1.1rem',
            color: theme.palette.mode === 'dark' ? '#cbd5e1' : 'blue',
          }}
        >
          We don’t just build websites — we build your digital growth engine. Here’s why businesses trust us.
        </Typography>
      </motion.div>

      {/* Card layout */}
      {isMobile ? (
        <Slider {...sliderSettings}>
          {features.map((item, i) => (
            <Box key={i} px={1}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #9f7aea, #63d2ff)',
                  color: '#fff',
                  minHeight: '280px',
                }}
              >
                <Box mb={2}>{item.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff' }}>
                  {item.desc}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Slider>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {features.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #9f7aea, #63d2ff)',
                    color: '#fff',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: '0.3s ease',
                      boxShadow: `0 10px 20px #63d2ff80`,
                    },
                  }}
                >
                  <Box mb={2}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">
                    {item.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default WhyChooseUs;
