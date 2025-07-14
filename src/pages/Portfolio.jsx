import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import BackgroundBubbles from "../components/BackgroundBubbles"; // your existing bubble component

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern, scalable online shopping platform with secure payments and product management.",
    image: "/images/corevalues.jpg",
  },
  {
    title: "Real Estate App",
    description: "Beautiful UI to showcase properties with search, filter, and contact agent features.",
    image: "/images/corevalues.jpg",
  },
  {
    title: "Food Delivery App",
    description: "Responsive web and mobile app for ordering food from nearby restaurants.",
    image: "/images/corevalues.jpg",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing skills, experience, and contact section.",
    image: "/images/corevalues.jpg",
  },
  {
    title: "CRM Dashboard",
    description: "Analytics-rich CRM for client management, sales tracking, and reporting.",
    image: "/images/corevalues.jpg",
  },
  {
    title: "Educational LMS",
    description: "Learning Management System with quizzes, student dashboards, and course progress tracking.",
    image: "/images/corevalues.jpg",
  },
];

const Portfolio = () => {
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
                background: "linear-gradient(270deg, #ff6ec4, #7873f5, #ff6ec4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "600% 600%",
                animation: "shineGradient 6s ease infinite",
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

      {/* Project Cards Section */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 6 },
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          borderTopLeftRadius: { xs: 20, md: 32 },
          borderTopRightRadius: { xs: 20, md: 32 },
          mt: 0,
          zIndex: 3,
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {projects.map((project, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      overflow: "hidden",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 28px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      height="200"
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Portfolio;
