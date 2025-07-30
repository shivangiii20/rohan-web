import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
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
          height: "60vh",
          position: "relative",
          background: "linear-gradient(135deg, #c039ef, #60c2ff)",
          overflow: "hidden",
        }}
      >
        <BackgroundBubbles />
        <Container
          maxWidth="lg"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "left",
            position: "relative",
            zIndex: 2,
            pt: { xs: 8, md: 15 },
            pl: { xs: 2, md: 8 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                background: "linear-gradient(270deg, #181c95ff, #ae358eff, #3b1dcfff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                // backgroundSize: "600% 600%",
                // animation: "shineGradient 6s ease infinite",
                fontSize: { xs: "2.5rem", md: "4rem" },
              }}
            >
              OUR <span style={{ color: "#fff" }}>PORTFOLIO</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: "#fff",
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: 600,
              }}
            >
              Explore our latest projects that blend creativity, functionality, and innovation.
            </Typography>
          </motion.div>
        </Container>
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
      background: "linear-gradient(to right, #21a1a6ff, #7c0e59ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
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
<Box sx={{ py: 8, px: { xs: 2, md: 6 }, backgroundColor: isDark ? "#121212" : "#f9f9f9" }}>
  <Grid container spacing={3}>
    {[
      "/images/portfolio/rect1.jpg",
      "/images/portfolio/rect2.jpg",
      "/images/portfolio/rect3.jpg",
      "/images/portfolio/rect4.jpg",
      "/images/portfolio/rect5.jpg",
      "/images/portfolio/rect6.jpg",
      "/images/portfolio/rect7.jpg",
      "/images/portfolio/rect8.jpg",
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
