import React from "react";
import Lottie from "lottie-react";
import { useTheme } from "@mui/material/styles"
import animation from "../animation/developer.json";
import { Box, Typography, Button, Grid } from "@mui/material";
import BackgroundBubbles from "../components/BackgroundBubbles";
import Services from "../components/Services";
import OurPlans from "../components/Ourplans";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import FaqSection from "../components/FaqSection";
import ContactCardSection from "../components/ContactCardSection";
import CodeIcon from "@mui/icons-material/Code";
import DevicesIcon from "@mui/icons-material/Devices";
import BrushIcon from "@mui/icons-material/Brush";
import WebIcon from "@mui/icons-material/Language";
import AppIcon from "@mui/icons-material/PhoneIphone";
import MaintenanceIcon from "@mui/icons-material/Build";
import OptimizationIcon from "@mui/icons-material/Speed";
import SeoIcon from "@mui/icons-material/Search";
import MarketingIcon from "@mui/icons-material/Campaign";
import EcommerceIcon from "@mui/icons-material/ShoppingCart";
import UiUxIcon from "@mui/icons-material/Brush";


const Home = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        color: "white",
        p: 0,
        m: 0,
        zIndex: 0,
        position: "relative",
        overflow: "hidden",
        background : isDark ? "linear-gradient(135deg, #121212, #1e1e1e)" // or any dark version 
        : "linear-gradient(135deg, rgb(122, 78, 204), rgb(88, 165, 201))",
      }}
    >
      {/* Bubbles Background */}
      <BackgroundBubbles />

      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          position: "relative",
          zIndex: 2,
          px: { xs: 2, md: 10 },
          py: { xs: 6, md: 4 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Centered Top Heading */}
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          mb={6}
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          {/* Empower Your Digital Presence */}
        </Typography>

        {/* Lottie + Text Grid */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ flexGrow: 1 }}
        >
          {/* Left Side: Animation */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              mt: { xs: 0, md: -4 },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "80%", md: "100%" },
                maxWidth: { xs: 300, sm: 400, md: 550, lg: 600 },
              }}
            >
              <Lottie animationData={animation} loop={true} />
            </Box>
          </Grid>

          {/* Right Side: Subtext + Buttons */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h6" sx={{ mb: 4, maxWidth: 500 }}>
              We craft stunning websites, mobile apps, and digital solutions to
              grow your business online.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: 5, px: 4, py: 1.5, fontWeight: "bold" }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: 5,
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                  borderColor: theme.palette.text.primary,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                View Services
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          py: 8,
          width: "100%",
          backgroundColor: isDark ? "#121212" : "#fff",  // ✅ Fix: dynamic background,
           color: isDark ? "#f0f0f0" : "#000",
          zIndex: 3,
          position: "relative",
          
        }}
      >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
  <Typography
    variant="h4"
    fontWeight="bold"
    sx={{
      background: "linear-gradient(135deg,rgb(145, 25, 205),rgb(96, 172, 223))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
      mb: 4,
    }}
  >
    Our Expertise
  </Typography>

</Box>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            px: { xs: 2, md: 4 },
          }}
        >
          {[
            {
              icon: <WebIcon />,
              title: "Web Development",
              description: "Modern, scalable and high-performance websites.",
            },
            {
              icon: <AppIcon />,
              title: "App Development",
              description: "Fast and user-friendly mobile applications.",
            },
            {
              icon: <MaintenanceIcon />,
              title: "Website Maintenance",
              description:
                "Keep your website updated, secure, and running smoothly.",
            },
            {
              icon: <OptimizationIcon />,
              title: "Website Optimization",
              description: "Improve speed, SEO, and usability of your site.",
            },
            {
              icon: <SeoIcon />,
              title: "SEO Optimization",
              description:
                "Boost visibility and rank higher on search engines.",
            },
            {
              icon: <MarketingIcon />,
              title: "Digital Marketing",
              description: "Drive traffic and grow your brand online.",
            },
            {
              icon: <EcommerceIcon />,
              title: "E-commerce Services",
              description: "Build secure and engaging online stores.",
            },
            {
              icon: <UiUxIcon />,
              title: "UI/UX Design",
              description: "Beautiful and user-centric design experiences.",
            },
          ].map((service, index) => (
            <Grid
              item
              key={index}
              sx={{
                width: {
                  xs: "100%",
                  sm: "48%",
                  md: "23%", // Ensures 4 cards per row with spacing
                },
                minHeight: 250,
              }}
            >
              <Services
                icon={service.icon}
                title={service.title}
                description={service.description}
                 isDark={isDark}
              />
            </Grid>
          ))}
        </Grid>

        {/* Our Plans Section */}
        <OurPlans isDark={isDark} />
        
        {/* Testimonials Section */}
        <Testimonials/>

        {/* Why Choose us Section */}
        <WhyChooseUs/>

        {/*FAQ Section*/}
        <FaqSection isDark={isDark}/>

        {/* Contact Card Section */}
        <ContactCardSection/>
      </Box>
    </Box>
  );
};

export default Home;
