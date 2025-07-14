import React from "react";
import { Box, Typography, Container, useTheme, Paper } from "@mui/material";
import { motion } from "framer-motion";
import BackgroundBubbles from "../components/BackgroundBubbles";

const CancellationAndRefund = () => {
  const theme = useTheme();

  return (
    <>
      {/* Hero Section with Bubbles */}
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
                background:
                  "linear-gradient(270deg, #ff6ec4, #7873f5, #ff6ec4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "600% 600%",
                animation: "shineGradient 6s ease infinite",
                fontSize: { xs: "2.5rem", md: "4rem" },
              }}
            >
              CANCELLATION <span style={{ color: "#fff" }}>AND REFUNDS</span>
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
              Our policy ensures transparency and fairness in every transaction.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* White Content Card Section */}
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
                Cancellation Policy
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                RS Web Solutions allows cancellations only within 24 hours of placing the order. Once the development or design process has started, cancellations are no longer accepted.
              </Typography>

              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Refund Policy
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                We do not offer refunds for services that are already delivered or partially completed. Refunds may only be issued if a project has not been started and the cancellation request is approved within 24 hours.
              </Typography>

              <Typography variant="h5" fontWeight="bold" gutterBottom>
                No Refunds in These Cases
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                • Client delays or lack of communication<br />
                • Change of mind after work has begun<br />
                • Customizations or change in scope after project initiation<br />
              </Typography>

              <Typography variant="h5" fontWeight="bold" gutterBottom>
                How to Request a Refund
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Please contact our support team at support@rswebsolutions.com with your order details. Refunds, if approved, will be processed within 7 working days via the original payment method.
              </Typography>

              <Typography variant="body1" color="text.secondary" mt={3}>
                For further clarity, feel free to reach out. We're here to help.
              </Typography>
            </motion.div>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default CancellationAndRefund;
