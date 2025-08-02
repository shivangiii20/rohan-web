import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import BackgroundBubbles from "../components/BackgroundBubbles";
import { useTheme } from "@mui/material/styles";
import Lottie from "lottie-react";
import portfolio from "../animation/portfolio.json";

const Portfolio = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <>
      {/* Hero Bubble Section */}
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

        {/* here paste the code */}
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
            Our Portfolio
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
            This portfolio showcases a range of tailored digital solutions —
            from responsive websites and scalable apps to impactful branding and
            marketing tools.
            <br /> Each project reflects a commitment to quality, performance,
            and client-focused results. Let’s create something exceptional for
            your business.
            <br />
          </Typography>
        </motion.div>
      </Box>

      {/* Centered Animation Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%", // Take full width of parent
          mt: 4, // optional margin top
        }}
      >
        <Box
          sx={{
            width: {
              xs: "90%",
              sm: "80%",
              md: "60%",
              lg: "60%",
              xl: "50%",
            },
            maxWidth: "800px",
          }}
        >
          <Lottie
            animationData={portfolio}
            loop
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>

      {/* Portfolio Cards Grid */}
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{
            mb: 4,
            background: "linear-gradient(to right, #54e9eeff, #ae52d5ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "semiBold",
          }}
        >
          Our Work Showcase
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            rowGap: { xs: 3, sm: 4 },
          }}
        >
          {[
            "/images/pl1.png",
            "/images/pl2.png",
            "/images/pl3.png",
            "/images/pl4.png",
            "/images/pl5.png",
            "/images/pl6.png",
            "/images/pl7.png",
            "/images/pl8.png",
            "/images/pl9.png",
            // "/images/pl10.png",
            // "/images/portfolio11.png",
            // "/images/portfolio12.png",
          ].map((img, i) => (
            <Grid
              item
              key={i}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              xl={2}
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                elevation={4}
                sx={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  aspectRatio: "1/1",
                  maxWidth: 140,
                  mx: "auto",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={img}
                  alt={`Portfolio ${i + 1}`}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Rectangle Image Grid Section (No Title/Description) */}
      <Box
        sx={{
          py: 8,
          px: { xs: 2, md: 6 },
          backgroundColor: isDark ? "#121212" : "#f9f9f9",
        }}
      >
        <Grid container spacing={3}>
          {[
            "/images/pr1.png",
            "/images/pr2.png",
            "/images/pr3.png",
            "/images/pr4.png",
            "/images/pr5.png",
            "/images/pr6.png",
            "/images/pr7.png",
            "/images/pr8.png",
            "/images/pr9.png",
            "/images/pr10.png",
            "/images/pr11.png",
            "/images/pr12.png",
          ].map((img, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                style={{ borderRadius: 12, overflow: "hidden" }}
              >
                <Card
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: isDark
                      ? "0 2px 10px rgba(255,255,255,0.08)"
                      : "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={img}
                    alt={`Project ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
