import React from "react";
import { Box, Typography, Container, useTheme, Paper } from "@mui/material";
import { motion } from "framer-motion";
import BackgroundBubbles from "../components/BackgroundBubbles";

const TermsAndConditions = () => {
  const theme = useTheme();

  return (
    <>
      {/* Bubble Background Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          background: "linear-gradient(135deg, #c039ef, #60c2ff)",
          position: "relative",
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
                background:
                  "linear-gradient(270deg, #ff6ec4, #7873f5, #ff6ec4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "600% 600%",
                animation: "shineGradient 6s ease infinite",
                fontSize: { xs: "2.5rem", md: "4rem" },
              }}
            >
              TERMS <span style={{ color: "#fff" }}>AND CONDITIONS</span>
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
              Please read our terms and conditions carefully before using our services.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* White Card Section Below Hero */}
      <Box
        sx={{
          width: "100%",
          backgroundColor:
            theme.palette.mode === "dark" ? "#1e1e2f" : "#ffffff",
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
          <Paper
            elevation={3}
            sx={{
              borderRadius: 4,
              p: { xs: 4, md: 6 },
              backgroundColor:
                theme.palette.mode === "dark" ? "#1a1a2e" : "#ffffff",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                General Terms
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                By accessing or using our website and services, you agree to be bound by these Terms and Conditions.
              </Typography>

              <Typography variant="h5" fontWeight="bold" gutterBottom>
                User Responsibilities
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Users must provide accurate information and follow all applicable laws while using our platform. Misuse or unauthorized access may lead to suspension.
              </Typography>

              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Intellectual Property
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                All content, branding, and code are the intellectual property of RS Web Solutions. Unauthorized reproduction or distribution is strictly prohibited.
              </Typography>

              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Service Limitations
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                We reserve the right to modify or discontinue services at any time without prior notice.
              </Typography>

              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Governing Law
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                These terms shall be governed in accordance with the laws of India, and any disputes will be handled by courts within India.
              </Typography>

              <Typography variant="body1" color="text.secondary" mt={3}>
                If you have any questions about these terms, please contact us.
              </Typography>
            </motion.div>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default TermsAndConditions;
