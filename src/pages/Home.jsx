import React from "react";
import Lottie from "lottie-react";
import { useTheme } from "@mui/material/styles";
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
  const isDark = theme.palette.mode === "dark";
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
        background: isDark
          ? "linear-gradient(135deg, #121212, #1e1e1e)" // or any dark version
          : "linear-gradient(135deg, rgb(122, 78, 204), rgb(88, 165, 201))",
      }}
    >
      {/* Bubbles Background */}
      <BackgroundBubbles />

      {/* Hero Section */}
<Box
  sx={{
    minHeight: "100vh",
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
        alignItems: "center",
        mt: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: 280, sm: 350, md: 500, lg: 600 },
        }}
      >
        <Lottie animationData={animation} loop={true} />
      </Box>
    </Grid>

    {/* Right Side: Subtext + Button */}
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },
        mt: { xs: 2, md: 0 },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          maxWidth: 500,
          fontFamily: "semiBold",
          fontSize: { xs: "1rem", md: "1.7rem" },
        }}
      >
        Your One-Stop Digital Growth Partner -
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#fff",
          maxWidth: 600,
          mt: 2,
          fontSize: { xs: "0.95rem", md: "1.4rem" },
          fontFamily: "Robot",
        }}
      >
        From eye-catching websites and powerful SEO to mobile apps, branding,
        and marketing — we deliver everything your business needs to shine
        online. With a blend of creativity, technology, and strategy, we craft
        digital experiences that captivate, convert, and grow your brand.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 4,
          borderRadius: 5,
          px: 4,
          py: 1.5,
          fontWeight: "bold",
          alignSelf: { xs: "center", md: "flex-start" },
          fontFamily: 'semiBold',
           fontSize: { xs: "0.65rem", md: "1.2rem" },
        }}
      >
        Get Started
      </Button>
    </Grid>
  </Grid>
</Box>

      {/* Services Section */}
      <Box
        sx={{
          py: 8,
          width: "100%",
          backgroundColor: isDark ? "#121212" : "#fff", // ✅ Fix: dynamic background,
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
              background:
                "linear-gradient(135deg,rgb(145, 25, 205),rgb(96, 172, 223))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              mb: 4,
              fontFamily: "semiBold",
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
        <Testimonials />

        {/* Why Choose us Section */}
        <WhyChooseUs />

        {/*FAQ Section*/}
        <FaqSection isDark={isDark} />

        {/* Contact Card Section */}
        <ContactCardSection />
      </Box>
    </Box>
  );
};

export default Home;
