import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Container,
} from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import DevicesIcon from "@mui/icons-material/Devices";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const plans = [
  {
    icon: <AndroidIcon fontSize="large" />,
    title: "Android App Development",
    desc: "Want to start your own business by Android app? Our affordable app services can help!",
    features: [
      "Shopping App",
      "Grocery App",
      "Music App",
      "Food Ordering",
      "Education App",
      "Classified Ads",
    ],
    price: "₹24,999",
    link: "/services/app-development",
  },
  {
    icon: <DevicesIcon fontSize="large" />,
    title: "Website Designing & Development",
    desc: "Looking for website design in India for Startups or your business at affordable price?",
    features: [
      "1–25 Pages Website",
      "Mobile Optimized",
      "Contact Form",
      "Logo Design",
      "SEO Basic",
      "Free Updates",
    ],
    price: "₹4,999",
    link: "/services/web-development",
  },
  {
    icon: <SettingsIcon fontSize="large" />,
    title: "Website Maintenance Services",
    desc: "Is your hosting provider not helping with your website issues?",
    features: [
      "Error Fixing",
      "Bug Fixes",
      "WordPress Issues",
      "Weekly Backups",
      "Hack Prevention",
      "Suggestions",
    ],
    price: "₹399/month",
    link: "/services/website-maintenance",
  },
];

const OurPlans = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
   <Box sx={{ display: "flex", justifyContent: "center" }}>
  <Typography
    variant="h4"
    fontWeight="bold"
    sx={{
      background: "linear-gradient(135deg,rgb(42, 63, 219),rgb(119, 68, 131))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
    }}
  >
    Our Plans
  </Typography>
</Box>

      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "stretch",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          {plans.map((plan, index) => (
            <Paper
              key={index}
              elevation={5}
              sx={{
                flex: "1 1 32%", // Exactly 3 cards in a row
                minWidth: "300px", // For mobile fallback
                maxWidth: "420px", // Limit maximum width
                height: "100%",
                background: "linear-gradient(135deg, #9f7aea, #63d2ff)",
                color: "#fff",
                borderRadius: 4,
                p: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
"&:hover": {
  transform: "scale(1.03)",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
},
              }}
            >
              <Box textAlign="center">
                <Box mb={1}>{plan.icon}</Box>
                <Typography variant="h6" fontWeight="bold">
                  {plan.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                  {plan.desc}
                </Typography>
              </Box>

              <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                {plan.features.map((item, i) => (
                  <li key={i}>
                    <Typography variant="body2">• {item}</Typography>
                  </li>
                ))}
              </Box>

              <Box textAlign="center">
                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                  <strong>Price Start {plan.price}</strong>
                </Typography>
                <Link to={plan.link} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#fff",
                      color: "#000",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#eee",
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Link>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurPlans;
