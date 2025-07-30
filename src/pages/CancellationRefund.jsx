import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";
import BackgroundBubbles from "../components/BackgroundBubbles";
import { useTheme } from "@mui/material/styles";

const CancellationAndRefund = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

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
                  "linear-gradient(270deg, #a727bbff, #0d5461ff, #2328c0ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                // backgroundSize: "600% 600%",
                // animation: "shineGradient 6s ease infinite",
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
            theme.palette.mode === "dark" ? "#0a0a0aff" : "#ffffff",
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
                theme.palette.mode === "dark" ? "#0e0e0fff" : "#ffffff",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Project Cancellation by Client
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" }, // Larger text
                  fontWeight: 500, // Semi-bold
                  color: isDark ? "#e0e0e0" : "text.secondary", // Dark mode compatible
                  lineHeight: 1.8,
                }}
              >
                Clients may request cancellation of a project at any stage by
                providing written notice. However, work completed up to the date
                of cancellation will be chargeable.
                <br /> If the project is canceled before work has started, a
                partial refund may be processed after deducting administrative
                or consultation charges. No full refund will be issued for
                cancellations after project initiation. <br />
              </Typography>

              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Non-Refundable Services
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" }, // Larger text
                  fontWeight: 500, // Semi-bold
                  color: isDark ? "#e0e0e0" : "text.secondary", // Dark mode compatible
                  lineHeight: 1.8,
                }}
              >
                All digital services, including but not limited to website
                design, SEO, app development, and branding, involve creative and
                time-based resources. Therefore, once work has begun, payments
                made are non-refundable. This includes any upfront payments or
                part payments made toward the project scope. <br />
              </Typography>

              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Company-Initiated Cancellations
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" }, // Larger text
                  fontWeight: 500, // Semi-bold
                  color: isDark ? "#e0e0e0" : "text.secondary", // Dark mode compatible
                  lineHeight: 1.8,
                }}
              >
                We reserve the right to cancel a project in situations such as:
                repeated client unresponsiveness, violation of terms, misuse of
                our services, or unforeseen technical/legal circumstances. In
                such cases, the client will be notified in writing, and any
                refund (if applicable) will be at our sole discretion based on
                work completed. <br />
              </Typography>

              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Refund Timeline & Process
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" }, // Larger text
                  fontWeight: 500, // Semi-bold
                  color: isDark ? "#e0e0e0" : "text.secondary", // Dark mode compatible
                  lineHeight: 1.8,
                }}
              >
                If a refund is approved, it will be processed within 7 to 10
                working days via the original payment method. We may deduct
                applicable fees for consultations, payment gateway charges, or
                partial work already delivered. Refund decisions are final and
                at the discretion of the company.
                <br />
              </Typography>

              <Typography variant="body1" color="text.secondary" mt={3}>
                For further clarity, feel free to reach out. We're here to help.
                <br />
                Thank You!
              </Typography>
            </motion.div>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default CancellationAndRefund;
