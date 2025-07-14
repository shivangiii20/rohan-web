import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import BackgroundBubbles from "../components/BackgroundBubbles";
import { FaJava, FaPhp, FaBootstrap, FaCuttlefish } from "react-icons/fa";
import Lottie from "lottie-react";
import websitedesign from "../animation/websitedesign.json";

const techCards = [
  {
    title: "Java",
    icon: <FaJava size={40} color="#fff" />,
    gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
  },
  {
    title: "PHP",
    icon: <FaPhp size={40} color="#fff" />,
    gradient: "linear-gradient(135deg, #6441a5, #2a0845)",
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap size={40} color="#fff" />,
    gradient: "linear-gradient(135deg, #6f42c1, #9f2dc9)",
  },
  {
    title: "C++",
    icon: <FaCuttlefish size={40} color="#fff" />,
    gradient: "linear-gradient(135deg, #004e92, #000428)",
  },
];

const WebsiteDesign = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          background: "linear-gradient(135deg, #c039ef, #60c2ff)",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          px: 2,
        }}
      >
        <BackgroundBubbles />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 2 }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(270deg, #ff6ec4, #7873f5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              mb: 4,
            }}
          >
            Low Cost Web Designing
          </Typography>
        </motion.div>
      </Box>

      {/* Tech Cards Section */}
      <Box
        sx={{
          backgroundColor: "#fff",
          borderTopLeftRadius: { xs: 20, md: 32 },
          borderTopRightRadius: { xs: 20, md: 32 },
          mt: -8,
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 6 },
          boxShadow: "0 -8px 20px rgba(0,0,0,0.08)",
          zIndex: 3,
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {techCards.map((card, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      background: card.gradient,
                      color: "#fff",
                      borderRadius: 4,
                      p: 2,
                      textAlign: "center",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
                      },
                    }}
                  >
                    <CardContent>
                      <Box mb={2}>{card.icon}</Box>
                      <Typography variant="h6" fontWeight="bold">
                        {card.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Lottie Animation Section */}
     {/* Olycoder-style Animation + Text Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 8 },
          backgroundColor: "#f9f9f9",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left: Animation/Image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  mx: "auto",
                }}
              >
                <Lottie
                  animationData={websitedesign}
                  loop
                  autoplay
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Grid>

            {/* Right: Text Content */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  color: "#444",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Looking for{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#00b894",
                    fontWeight: 600,
                  }}
                >
                  Low Price
                </Box>{" "}
                Website Design in Delhi
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2.2rem", md: "3.2rem" },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                WEBSITE{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(90deg, #00b894, #0984e3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  DESIGNING
                </Box>
              </Typography>

              <Box
                sx={{
                  borderBottom: "2px solid #eee",
                  width: { xs: "100%", md: "70%" },
                  mb: 2,
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: "#444",
                  maxWidth: 500,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Web design is an art form that reflects your business acumen. As
                the saying goes, "First impressions last,” and on the web, your
                site is the visitor’s first encounter with your brand.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  fontStyle: "italic",
                }}
              >
                We pioneered low price website design specifically for{" "}
                <Box component="span" fontWeight="bold">
                  “Startups”
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>


      {/* Website Features Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 4 },
          backgroundColor: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Website Designing Features
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: "Responsive Design",
                text: "Looks great on all devices.",
                icon: "📱",
              },
              {
                title: "Fast Loading",
                text: "Pages load in under 3 seconds.",
                icon: "⚡",
              },
              {
                title: "SEO Optimized",
                text: "Boosts your Google ranking.",
                icon: "🔍",
              },
              {
                title: "User-Friendly UI",
                text: "Clean and intuitive layouts.",
                icon: "🧠",
              },
              {
                title: "Secure Code",
                text: "Protected from vulnerabilities.",
                icon: "🔒",
              },
              {
                title: "Custom Design",
                text: "Tailored to your brand needs.",
                icon: "🎨",
              },
              {
                title: "Affordable Pricing",
                text: "High quality, low cost.",
                icon: "💰",
              },
              {
                title: "Ongoing Support",
                text: "We're with you post-launch.",
                icon: "🛠️",
              },
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: "flex" }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={{ width: "100%" }}
                >
                  <Box
                    sx={{
                      background:
                        "linear-gradient(135deg, rgb(122, 78, 204), rgb(88, 165, 201))",
                      borderRadius: 4,
                      p: { xs: 3, md: 4 },
                      color: "#fff",
                      textAlign: "center",
                      minHeight: { xs: 220, md: 280 },
                      width: "100%",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                      transition: "transform 0.3s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      "&:hover": {
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    <Typography variant="h4" mb={1}>
                      {item.icon}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" mb={1}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.95 }}>
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Affordable Web Design Plans Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 4 },
          backgroundColor: "#f7f9fc",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Our Affordable Web Design Plans
          </Typography>

          {/* 4 Plan Cards */}
          <Grid
            container
            spacing={{ xs: 3, md: 5 }}
            justifyContent="center"
            alignItems="stretch"
          >
            {["Basic Plan", "Starter Plan", "Business Plan", "Pro Plan"].map(
              (title, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        background: "linear-gradient(135deg, #7b2ff7, #22c1c3)",
                        color: "#fff",
                        borderRadius: 4,
                        p: 4,
                        textAlign: "center",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                        },
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                        {title}
                      </Typography>
                      <Box
                        component="button"
                        sx={{
                          backgroundColor: "#fff",
                          color: "#333",
                          border: "none",
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          fontWeight: "bold",
                          cursor: "pointer",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        }}
                      >
                        Order Now
                      </Box>
                    </Box>
                  </motion.div>

                  {/* Feature Cards Under Plan */}
                  {i === 0 && (
                    <Box
                      sx={{
                        mt: 3,
                        backgroundColor: "#fff",
                        borderRadius: 3,
                        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                        p: 3,
                      }}
                    >
                      {[
                        "1 Page Basic Info Website",
                        "Home | Services & Categories",
                        "Slider Banner | About Us",
                        "Contact Us | Contact Form",
                        "Gallery | Social Media Linking",
                        "SSL | 5 NVME GB Hosting",
                        "5 Business Email",
                        "Basic 1 Logo Design",
                        "Live Chat Integration",
                      ].map((feature, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            borderBottom:
                              idx !== 8 ? "1px dashed #ddd" : "none",
                            pb: 1,
                            mb: 1,
                            fontSize: "0.95rem",
                            color: "#333",
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  {i === 1 && (
                    <Box
                      sx={{
                        mt: 3,
                        backgroundColor: "#fff",
                        borderRadius: 3,
                        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                        p: 3,
                      }}
                    >
                      {[
                        "8 Page Basic Info Website",
                        "Home | Services & Categories",
                        "Slider Banner | About Us",
                        "Contact Us | Contact Form",
                        "Gallery | Social Media Linking",
                        "SSL | 5 NVME GB Hosting",
                        "5 Business Email",
                        "Basic 5 Logo Design",
                        "Live Chat Integration",
                      ].map((feature, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            borderBottom:
                              idx !== 8 ? "1px dashed #ddd" : "none",
                            pb: 1,
                            mb: 1,
                            fontSize: "0.95rem",
                            color: "#333",
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  {i === 2 && (
                    <Box
                      sx={{
                        mt: 3,
                        backgroundColor: "#fff",
                        borderRadius: 3,
                        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                        p: 3,
                      }}
                    >
                      {[
                        "15 Page Basic Info Website",
                        "Home | Services & Categories",
                        "Slider Banner | About Us",
                        "Contact Us | Contact Form",
                        "Gallery | Social Media Linking",
                        "SSL | 10 NVME GB Hosting",
                        "5 NVME Business Email",
                        "Basic 10 Logo Design",
                        "Live Chat Integration",
                      ].map((feature, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            borderBottom:
                              idx !== 8 ? "1px dashed #ddd" : "none",
                            pb: 1,
                            mb: 1,
                            fontSize: "0.95rem",
                            color: "#333",
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  { i === 2 && (
  <Box
    sx={{
      mt: 3,
      backgroundColor: "#fff",
      borderRadius: 3,
      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
      p: 3,
    }}
  >
    {[
      "Live Chat | Whatsapp Chat",
      "Payment Gateway Integration",
      "1 Year Free Support",
      "3 Free Update After Delivery",
    ].map((feature, idx) => (
      <Typography
        key={idx}
        variant="body2"
        sx={{
          borderBottom: idx !== 3 ? "1px dashed #ddd" : "none",
          pb: 1,
          mb: 1,
          fontSize: "0.95rem",
          color: "#333",
        }}
      >
        {feature}
      </Typography>
    ))}
  </Box>
)}


                  {i === 3 && (
                    <Box
                      sx={{
                        mt: 3,
                        backgroundColor: "#fff",
                        borderRadius: 3,
                        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                        p: 3,
                      }}
                    >
                      {[
                        "20 Page Basic Info Website",
                        "Home | Services & Categories",
                        "Slider Banner | About Us",
                        "Contact Us | Contact Form",
                        "Gallery | Social Media Linking",
                        "SSL | 20 NVME GB Hosting",
                        "10 NVME Business Email",
                        "10 Logo Design & Revision",
                        "Live Chat Integration",
                      ].map((feature, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            borderBottom:
                              idx !== 8 ? "1px dashed #ddd" : "none",
                            pb: 1,
                            mb: 1,
                            fontSize: "0.95rem",
                            color: "#333",
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  )}
  
          { i === 3 && (
  <Box
    sx={{
      mt: 3,
      backgroundColor: "#fff",
      borderRadius: 3,
      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
      p: 3,
    }}
  >
    {[
      "Live Chat | Whatsapp Chat",
      "Payment Gateway Integration",
      "1 Year Free Support",
      "5 Free Update After Delivery",
    ].map((feature, idx) => (
      <Typography
        key={idx}
        variant="body2"
        sx={{
          borderBottom: idx !== 3 ? "1px dashed #ddd" : "none",
          pb: 1,
          mb: 1,
          fontSize: "0.95rem",
          color: "#333",
        }}
      >
        {feature}
      </Typography>
    ))}
  </Box>
)}


{ i === 3 && (
  <Box
    sx={{
      mt: 3,
      backgroundColor: "#fff",
      borderRadius: 3,
      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
      p: 3,
    }}
  >
    {[
      "Basic OnPage SEO",
      "Free .com or .in Domain",
      "Poweful Admin Panel",
      "2x More Faster Website",
    ].map((feature, idx) => (
      <Typography
        key={idx}
        variant="body2"
        sx={{
          borderBottom: idx !== 3 ? "1px dashed #ddd" : "none",
          pb: 1,
          mb: 1,
          fontSize: "0.95rem",
          color: "#333",
        }}
      >
        {feature}
      </Typography>
    ))}
  </Box>
)}





                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WebsiteDesign;
