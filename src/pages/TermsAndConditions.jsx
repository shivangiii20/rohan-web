import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import BackgroundBubbles from "../components/BackgroundBubbles";

const TermsAndConditions = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      {/* Bubble Background Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          background: "linear-gradient(135deg, #ad59c9ff, #2285c2ff)",
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
                background: "linear-gradient(90deg, #a300b8ff, #2a34c6ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                // backgroundSize: "600% 600%",
                // animation: "shineGradient 6s ease infinite",
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
              Please read our terms and conditions carefully before using our
              services.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* White Card Section Below Hero */}
      <Box
        sx={{
          width: "100%",
          backgroundColor:
            theme.palette.mode === "dark" ? "#0b0b0bff" : "#ffffff",
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 6 },
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          borderTopLeftRadius: { xs: 20, md: 32 },
          borderTopRightRadius: { xs: 20, md: 32 },
          mt: 5,
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
                theme.palette.mode === "dark" ? "#050505ff" : "#ffffff",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Terms of Service
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
                Our services are provided under the assumption that you’ve read
                and agreed to our terms. By using our website or initiating any
                project with us, you acknowledge our policies related to project
                timelines, revisions, payment terms, and responsibilities.
                <br /> Clients are expected to provide clear requirements,
                remain responsive during the project, and make timely payments
                as per agreed invoices. Any delays from the client’s side may
                impact the overall project schedule. <br /> We retain the right
                to decline or terminate services in cases of misuse,
                non-compliance, or unethical behavior. Services are subject to
                availability, and any changes in scope will be communicated
                clearly with revised estimates if necessary.
                <br />
              </Typography>

              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Ownership & Intellectual Property
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
                All designs, code, content, and materials developed during the
                course of the project remain the intellectual property of our
                company until full payment is received. Upon settlement, the
                ownership of final deliverables (as defined in the project
                scope) is transferred to the client. <br /> We reserve the right
                to showcase work for portfolio or promotional purposes unless a
                formal NDA is signed. Unauthorized reproduction, resale, or
                redistribution of our materials, frameworks, or templates is
                strictly prohibited. Clients must ensure that any third-party
                content provided (e.g., logos, images, fonts) is either owned by
                them or properly licensed. <br />
              </Typography>

              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Data Privacy & Confidentiality
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
                We take data privacy seriously. All client data shared with us —
                including files, login credentials, or business documents — is
                treated as confidential and used strictly for the purposes of
                project execution. <br /> We never sell, share, or misuse client
                information. Our website may collect basic cookies for
                analytics, performance tracking, and user experience
                improvements. All systems used to manage your data are secured
                with appropriate digital safeguards. You may request data
                access, edits, or deletion at any time by contacting our team.{" "}
                <br />
              </Typography>

              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Project Delivery, Revisions & Timelines
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
                All projects are initiated after full or partial payment
                confirmation and a mutual agreement on the scope. We strive to
                meet estimated delivery timelines, but project completion may
                vary depending on external factors such as client response
                delays or technical challenges.
                <br /> A fixed number of revisions are included per project —
                typically up to 2 or 3 rounds. Any additional changes beyond the
                original scope may incur extra charges, which will be
                communicated transparently in advance. Timely and clear
                communication from the client is essential for smooth delivery.{" "}
                <br />
              </Typography>

              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Post-Delivery Support Policy
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
                We provide limited post-delivery support (typically 7–14 days)
                for resolving technical issues or bugs directly related to our
                work. This support does not include new feature requests,
                content changes, or third-party issues (such as hosting problems
                or plugin errors). Any additional work after the support window
                must be covered under a new agreement or a separate maintenance
                plan.
                <br />
              </Typography>
              <Typography variant="body1" color="text.secondary" mt={3}>
                If you have any questions about these terms, please contact us.<br/>
                Thank You!
              </Typography>
            </motion.div>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default TermsAndConditions;
