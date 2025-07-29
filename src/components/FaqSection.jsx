import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  useTheme,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion, AnimatePresence } from 'framer-motion';

import WebIcon from '@mui/icons-material/Language';
import StoreIcon from '@mui/icons-material/Store';
import SeoIcon from '@mui/icons-material/Search';
import CampaignIcon from '@mui/icons-material/Campaign';
import AndroidIcon from '@mui/icons-material/Android';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const allFaqs = [
  {
    question: "How much does a custom website design cost?",
    answer: "Website design pricing varies based on features, pages, and functionality. Basic sites start at around ₹15,000, while advanced, custom solutions may range higher.",
    category: "Website Design",
  },
  {
    question: "What platform do you use for e-commerce websites?",
    answer: "We work with platforms like Shopify, WooCommerce, and custom-coded solutions depending on your needs and budget.",
    category: "E-commerce",
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term strategy. Visible improvements usually take 2–3 months, with stronger results building over time.",
    category: "SEO",
  },
  {
    question: "What channels do you use for digital marketing?",
    answer: "We specialize in Google Ads, Facebook & Instagram campaigns, email marketing, and retargeting strategies.",
    category: "Digital Marketing",
  },
  {
    question: "What’s the cost of developing an Android app?",
    answer: "Basic apps start at ₹25,000. Pricing depends on features like login systems, APIs, payment gateways, and more.",
    category: "Android App",
  },
  {
    question: "What design services do you offer?",
    answer: "We offer logo design, social media creatives, UI/UX design, brochures, banners, and complete branding kits.",
    category: "Graphic Design",
  },
];

const categories = [
  "All",
  "Website Design",
  "E-commerce",
  "SEO",
  "Digital Marketing",
  "Android App",
  "Graphic Design",
];

const categoryIcons = {
  "Website Design": <WebIcon sx={{ color: '#9f7aea' }} />,
  "E-commerce": <StoreIcon sx={{ color: '#63d2ff' }} />,
  "SEO": <SeoIcon sx={{ color: '#ff6b6b' }} />,
  "Digital Marketing": <CampaignIcon sx={{ color: '#f9a825' }} />,
  "Android App": <AndroidIcon sx={{ color: '#66bb6a' }} />,
  "Graphic Design": <DesignServicesIcon sx={{ color: '#ec407a' }} />,
};

const FaqSection = ({isDark}) => {
  const theme = useTheme();
  const [filter, setFilter] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleFilter = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
      setExpandedIndex(null);
    }
  };

  const filteredFaqs =
    filter === "All" ? allFaqs : allFaqs.filter((faq) => faq.category === filter);

  return (
    <Box
    sx={{
    py: 10,
    px: { xs: 2, md: 6 },
    background: isDark ? '#1e1e1e' : '#f9f9f9', 
    color: isDark ? '#f0f0f0' : '#000',
    backdropFilter: "blur(4px)",
    borderRadius: "12px",
    mx: "auto",
    width: "100%",
    maxWidth: "1400px",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
    mt: 4
  }}
    >
      <Container maxWidth="xl">
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              display: 'inline-block',
              background: "linear-gradient(135deg, #9f7aea, #63d2ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>

        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 5, color: theme.palette.mode === "dark" ? "#cbd5e1" : "#555" }}
        >
          Get clear answers to the most common queries we receive from clients.
        </Typography>

        {/* Category Filters */}
      <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  mb={6}
  flexWrap="wrap"
>
  <ToggleButtonGroup
    value={filter}
    exclusive
    onChange={handleFilter}
    aria-label="faq category filter"
    color="primary"
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 1,
      justifyContent: "center",
      p: 1,
      borderRadius: 3,
      backgroundColor: "#ffffffcc",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      maxWidth: "100%",
    }}
  >
    {categories.map((cat) => (
      <ToggleButton
        key={cat}
        value={cat}
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          px: 2,
          py: 1,
          borderRadius: "8px",
          backgroundColor: filter === cat ? "linear-gradient(135deg, #9f7aea, #63d2ff)" : "transparent",
          backgroundImage:
            filter === cat
              ? "linear-gradient(135deg, #9f7aea, #63d2ff)"
              : "none",
          color: filter === cat ? "#fff" : "#333",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundImage: "linear-gradient(135deg, #b798ff, #78d5ff)",
            color: "#fff",
          },
          border: "1px solid #ccc",
        }}
      >
        {cat}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
</Box>

        {/* FAQ List */}
        <AnimatePresence>
          {filteredFaqs.map((item, index) => {
            const isOpen = expandedIndex === index;
            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Accordion
                  expanded={isOpen}
                  onChange={() => setExpandedIndex(isOpen ? null : index)}
                  disableGutters
                  sx={{
                    // mb: 4,
                    mt: 2,
                    mb: 5,
                    borderRadius: 3,
                    overflow: 'hidden',
                    maxWidth: { xs: '100%', md: '90%' },
                    mx: 'auto',
                    background: isOpen
                      ? "linear-gradient(135deg, #9f7aea, #63d2ff)"
                      : "linear-gradient(135deg, #9f7aea, #63d2ff)",
                    color: "#fff",
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                    transition: 'all 0.4s ease',
                    '&::before': { display: 'none' },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
                    <Box display="flex" alignItems="center" gap={1}>
                      {isOpen && (
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 260, damping: 10 }}
                        >
                          {categoryIcons[item.category]}
                        </motion.div>
                      )}
                      <Typography fontWeight="bold">{item.question}</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: "#fff",
                      color: "#333",
                      p: 3,
                      pt: 2,
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.answer}
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default FaqSection;
