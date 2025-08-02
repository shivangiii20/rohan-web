import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button
} from "@mui/material";
import { motion } from "framer-motion";
import BackgroundBubbles from "../components/BackgroundBubbles";
import { FaJava, FaPhp, FaBootstrap, FaCuttlefish } from "react-icons/fa";
import Lottie from "lottie-react";
import websitedesign from "../animation/websitedesign.json";
import ContactCardSection from "../components/ContactCardSection";



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
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          color: isDark ? "#fff" : "#000",
          background: isDark
            ? "linear-gradient(135deg, #121212, #1c1c1c)" // Dark mode gradient
            : "linear-gradient(135deg, rgba(180, 120, 233, 1), rgba(86, 190, 216, 1))",
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
              background: "linear-gradient(270deg, #e515c6ff, #3443e8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              mb: 4,
              fontFamily: "semiBold",
            }}
          >
            Low Cost Web Designing
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.98rem", md: "1.4rem" },
              color: isDark ? "#fff" : "#fff",
              maxWidth: "800px",
              marginX: { xs: "auto", md: 0 },
              fontFamily: "Robot",
            }}
          >
            Get a professional, mobile-friendly, and SEO-ready website at a
            pocket-friendly price! Our low-cost web designing services are
            perfect for startups, small businesses, and individuals looking to
            make a strong online impact without spending big. We blend creative
            design with smart functionality to deliver high-quality websites
            that look great and perform even better — all within your budget.
          </Typography>
        </motion.div>
      </Box>

      {/* Tech Cards Section */}
      <Box
        sx={{
          backgroundColor: isDark ? "#121212" : "#fff",
          borderTopLeftRadius: { xs: 10, md: 32 },
          borderTopRightRadius: { xs: 10, md: 32 },
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
                      <Typography sx={{fontFamily: 'Robot'}}>
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
          backgroundColor: isDark ? "#1e1e1e" : "#fff",
          color: isDark ? "#fff" : "#000",
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
                  color: isDark ? "#fff" : "#000",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontFamily: 'semiBold'
                }}
              >
                Looking for{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#00b894",
                    fontWeight: 600,
                    fontFamily: 'semiBold'
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
                  fontFamily: 'semibold'
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
                  color: isDark ? "#fff" : "#000",
                  maxWidth: 500,
                  fontSize: { xs: "1rem", md: "1.4rem" },
                  fontFamily: 'Robot'
                }}
              >
                Web design is an art form that reflects your business acumen. As
                the saying goes, "First impressions last,” and on the web, your
                site is the visitor’s first encounter with your brand.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: isDark ? "#fff" : "#000",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  fontStyle: "italic",
                  fontFamily: 'Bitter',
                  
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
          backgroundColor: isDark ? "#121212" : "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "2rem", md: "2.9rem" },
              background: "linear-gradient(270deg, #b1239cff, #279cbaff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "semiBold",
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
                        "linear-gradient(135deg, rgba(207, 102, 233, 1), rgba(107, 164, 222, 1))",
                      borderRadius: 4,
                      p: { xs: 3, md: 4 },
                      color: isDark ? "#fff" : "#000",
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
                    <Typography variant="h6" sx={{fontFamily: 'Robot' , fontSize: { xs: "1.4rem", md: "1.7rem" },}} mb={1}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.95, fontFamily: 'semiBold', fontSize: { xs: "1rem", md: "1rem" }, }}>
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
          backgroundColor: isDark ? "#0e0e0eff" : "#fff",
          color: isDark ? "#fff" : "#000",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "2rem", md: "2.9rem" },
               background: "linear-gradient(90deg, #df37bbff, #0984e3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: 'semiBold'
                
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
                        background: "linear-gradient(135deg, #c86ad5ff, #5d96e6ff)",
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
                      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, fontFamily: 'semiBold', fontSize: { xs: "1.4rem", md: "1.7rem" }, }}>
                        {title}
                      </Typography>
                      {/* 💸 Price detail added here */}
                                              <Typography
                                                variant="body2"
                                                sx={{
                                                  mb: 1,
                                                  fontWeight: 600,
                                                  fontSize: "1rem",
                                                  color: "#ffffff",
                                                  opacity: 0.9,
                                                  fontFamily: 'semiBold',
                                                  fontSize: { xs: "0.95rem", md: "1.3rem"},
                                                    }}
                                              >
                                                {title === "Basic Plan"
                                                  ? "Starting at ₹4999"
                                                  : title === "Starter Plan"
                                                  ? "Starting at ₹9999"
                                                  : title === "Business Plan"
                                                  ? "Starting at  ₹14,999"
                                                  : title === "Pro Plan"
                                                  ? "Starting at ₹24,999"
                                                  :""   
                                                }
                                              </Typography>
                      {/* made changes here for button */}
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        backgroundColor: "#fff",
                        color: "#333",
                        fontWeight: "bold",
                        px: 3,
                        py: 1,
                        borderRadius: 2,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#56e297ff",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        },
                      }}
                    >
                      Order Now
                    </Button>
                    </Box>
                  </motion.div>

                  {/* Feature Cards Under Plan */}
                  {i === 0 && (
                    <Box
                      sx={{
                        mt: 3,
                        backgroundColor: isDark ? "#1f1d1dff" : "#fff",

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
                            // fontSize: "0.95rem",
                            color: isDark ? "#fff" : "#000",
                            fontFamily: 'Robot',
                            fontSize: { xs: "0.85rem", md: "1rem" },
                            
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
                        backgroundColor: isDark ? "#1f1d1dff" : "#fff",
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
                            color: isDark ? "#fff" : "#000",
                            fontFamily: 'Robot',
                            fontSize: { xs: "0.85rem", md: "1rem" },
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
                        backgroundColor: isDark ? "#1f1d1dff" : "#fff",
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
                            color: isDark ? "#fff" : "#000",
                            fontFamily: 'Robot',
                            fontSize: { xs: "0.85rem", md: "1rem" },
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
                        backgroundColor: isDark ? "#1f1d1dff" : "#fff",
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
                            borderBottom:
                              idx !== 3 ? "1px dashed #ddd" : "none",
                            pb: 1,
                            mb: 1,
                            fontSize: "0.95rem",
                            color: isDark ? "#fff" : "#000",
                            fontFamily: 'Robot',
                            fontSize: { xs: "0.85rem", md: "1rem" },
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
                        backgroundColor: isDark ? "#1f1d1dff" : "#fff",
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
                            color: isDark ? "#fff" : "#000",
                            fontFamily: 'Robot',
                            fontSize: { xs: "0.85rem", md: "1rem" },
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
                        backgroundColor: isDark ? "#1f1d1dff" : "#fff",
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
                            borderBottom:
                              idx !== 3 ? "1px dashed #ddd" : "none",
                            pb: 1,
                            mb: 1,
                            fontSize: "0.95rem",
                            color: isDark ? "#fff" : "#000",
                            fontFamily: 'Robot',
                            fontSize: { xs: "0.85rem", md: "1rem" },
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
                        backgroundColor: isDark ? "#1f1d1dff" : "#fff",
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
                            borderBottom:
                              idx !== 3 ? "1px dashed #ddd" : "none",
                            pb: 1,
                            mb: 1,
                            fontSize: "0.95rem",
                            color: isDark ? "#fff" : "#000",
                            fontFamily: 'Robot',
                            fontSize: { xs: "0.85rem", md: "1rem" },
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

      {/* EXTRA SERVICES SECTION */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 0 },
          backgroundColor: isDark ? "#0a0909ff" : "#fff",
          mt: 8, // adds space after plans
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "2rem", md: "2.9rem" },
               background: "linear-gradient(90deg, #df37bbff, #0984e3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: 'semiBold'
                
            }}
          >
            Extra Web Services
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {[
              {
                title: "Social Media Setup",
                description:
                  "We create and optimize your FB, Insta & LinkedIn profiles.",
              },
              {
                title: "Content Writing",
                description:
                  "SEO-friendly, engaging content tailored to your industry.",
              },
              {
                title: "Premium Stock Images",
                description:
                  "Access to high-quality visuals that enhance your brand.",
              },
              {
                title: "Basic Video Animation",
                description: "Intro/outro videos for homepage or social media.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  flex: "1 1 calc(24% - 24px)", // 4 in row, minus gap
                  minWidth: "260px",
                }}
              >
                <Box
                  sx={{
                    background: "linear-gradient(135deg, #dd76e7ff, #437ae1ff)",
                    borderRadius: 4,
                    p: 4,
                    color: "#fff",
                    textAlign: "center",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease",
                    height: { xs: 230, md: 260 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.05)",
                      boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" sx={{fontFamily: 'semibold', fontSize: { xs: "1rem", md: "1.3rem" },}} mb={1}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, fontFamily: 'Robot', fontSize: { xs: "1rem", md: "1.2rem" }, }}>
                    {service.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
      <ContactCardSection/>
    </>
  );
};

export default WebsiteDesign;
