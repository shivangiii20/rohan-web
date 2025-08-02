// import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import seopoints from "../animation/seopoints.json";
import {
  Search,
  Group,
  TrendingUp,
  PhoneIphone,
  Stars,
  EmojiEmotions,
  GpsFixed,
  MonetizationOn,
} from "@mui/icons-material";

const SeoOptimization = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const plans = [
    {
      title: "Basic Plan",
      features: [
        "5 Keyword SEO",
        "Keyword Research",
        "5 On-Page SEO",
        "Meta Tags Optimization",
        "Internal Linking",
        "H Tags Optimization",
        "URL Structure Optimization",
        "SEO Audit Report",
        "Sitemap Submission",
        "Robots Optimization",
        "Alt Text for Images",
        "Canonical Tags",
      ],
    },
    {
      title: "Starter Plan",
      features: [
        "5 Keyword SEO",
        "Keyword Research",
        "5 On-Page SEO",
        "Meta Tags Optimization",
        "Internal Linking",
        "H Tags Optimization",
        "URL Structure Optimization",
        "SEO Audit Report",
        "Sitemap Submission",
        "Robots Optimization",
        "Alt Text for Images",
        "Canonical Tags",
        "Schema Markup Implementation",
        "Image Optimization",
        "Content Rewriting",
        "Google Analytics Setup",
        "Content Optimization",
      ],
    },
    {
      title: "Business Plan",
      features: [
        "5 Keyword SEO",
        "Keyword Research",
        "5 On-Page SEO",
        "Meta Tags Optimization",
        "Internal Linking",
        "H Tags Optimization",
        "URL Structure Optimization",
        "SEO Audit Report",
        "Sitemap Submission",
        "Robots Optimization",
        "Alt Text for Images",
        "Canonical Tags",
        "Schema Markup Implementation",
        "Image Optimization",
        "Content Rewriting",
        "Google Analytics Setup",
        "Content Optimization",
        "Broken Links Check",
        "Content Readability",
        "301 Redirects Setup",
        "Rich Snippets Implementation",
        "Content Duplication Check",
        "URL Parameter Handling",
        "Competitor Analysis",
        "Long-Tail Keyword Integration",
        "FAQs Implementation",
        "(UX) Optimization",
      ],
    },
    {
      title: "Pro Plan",
      features: [
        "All Features of Business Plan",
        "Custom SEO Strategy",
        "Voice Search Optimization",
        "Multilingual SEO",
        "Video SEO",
        "Conversion Rate Optimization",
        "Dedicated SEO Manager",
        "Weekly Reporting",
        "Backlink Building Strategy",
        "Advanced Analytics Integration",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage: "url('/images/seob2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 6 },
        }}
      >
        <Container maxWidth="lg"></Container>
      </Box>

      {/* Scrolling SEO Footer Strip */}
      <Box
        sx={{
          width: "100%",
          background: "linear-gradient(to right, #ca63e9ff, #73cde9ff)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          py: 6,
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            animation: "scroll-left 40s linear infinite",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              display: "inline-block",
              color: "#fff",
              fontWeight: 500,
              fontSize: "1.5rem",
              px: 4,
              fontFamily: "Robot",
            }}
          >
            🔍 On-Page SEO &nbsp; • &nbsp; 📝 Content Optimization &nbsp; •
            &nbsp; 🛠️ Technical SEO Audit &nbsp; • &nbsp; ✍️ Blog Posting &nbsp;
            • &nbsp; 🔗 High-Quality Backlinks &nbsp; • &nbsp; 🚀 Mobile
            Optimization &nbsp; • &nbsp; 📈 Google Ranking Boost &nbsp; • &nbsp;
            🎯 Keyword Research &nbsp; • &nbsp; 🌐 Local SEO Services
          </Typography>
        </Box>
      </Box>
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

      {/* Text and Lottie Section */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: isDark ? "#100f0fff" : "#fff",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 6,
            }}
          >
            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "2rem", md: "2.9rem" },
                  color: isDark ? "#fff" : "#000",
                  mb: 2,
                  fontFamily: "semiBold",
                  background: "linear-gradient(90deg, #df37bbff, #0984e3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our SEO Optimization Strategy
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.98rem", md: "1.4rem" },
                  color: isDark ? "#fff" : "#000",
                  maxWidth: "800px",
                  marginX: { xs: "auto", md: 0 },
                  fontFamily: "Robot",
                }}
              >
                Our SEO optimization strategy is designed to boost online
                visibility, attract targeted traffic, and improve search engine
                rankings through a combination of on-page and off-page
                techniques.
                <br /> We begin by conducting thorough keyword research to
                identify high-volume, low-competition keywords relevant to your
                niche. Next, we focus on optimizing website structure, meta
                tags, headings, and content for both users and search engines.
                <br />
                High-quality content creation is prioritized to establish
                authority and relevance. Off-page strategies like link building,
                social bookmarking, and local SEO are employed to enhance domain
                credibility. <br /> We also ensure mobile responsiveness, fast
                loading speed, and proper indexing through technical SEO audits.
                Regular performance tracking using analytics tools allows us to
                refine and adapt our strategies for maximum results.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                maxWidth: 400,
              }}
            >
              <Lottie animationData={seopoints} loop={true} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Feature Cards */}
      <Box
        sx={{
          py: 8,
          px: { xs: 2, md: 6 },
          background: isDark ? "#121212" : "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr 1fr",
              },
              gap: 4,
            }}
          >
            {[
              { icon: <Search fontSize="large" />, title: "Local SEO" },
              { icon: <Group fontSize="large" />, title: "Real Audience" },
              {
                icon: <TrendingUp fontSize="large" />,
                title: "Organic Traffic",
              },
              {
                icon: <PhoneIphone fontSize="large" />,
                title: "Mobile Optimization",
              },
              { icon: <Stars fontSize="large" />, title: "Google Ranking" },
              { icon: <EmojiEmotions fontSize="large" />, title: "Better UX" },
              {
                icon: <GpsFixed fontSize="large" />,
                title: "Keyword Targeting",
              },
              {
                icon: <MonetizationOn fontSize="large" />,
                title: "Affordable Price",
              },
            ].map((card, index) => (
              <Box
                key={index}
                sx={{
                  background: "linear-gradient(135deg, #7a4ecc, #58a5c9)",
                  color: "white",
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Box sx={{ mb: 1 }}>{card.icon}</Box>
                <Box
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.4rem" },
                    fontWeight: "bold",
                    fontFamily: "semiBold",
                  }}
                >
                  {card.title}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Low Cost SEO Plans Section (Adapted) */}

      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 4 },
          backgroundColor: isDark ? "#121212" : "#fff",
        }}
      >
        {/*because of this container layout was clashing to fix this use "xl" */}
        <Container
          maxWidth="xl"
          sx={{ px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 } }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "2rem", md: "2.9rem" },
              fontFamily: "semiBold",
              background: "linear-gradient(90deg, #df37bbff, #0984e3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Affordable SEO plans
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
                        background: "linear-gradient(135deg, #7b2ff7, #22c1c3)",
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
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          mb: 2,
                          fontFamily: "semibold",
                          fontSize: { xs: "1.4rem", md: "1.7rem" },
                        }}
                      >
                        {title}
                      </Typography>
                      {/* 💸 Price detail added here */}
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 1,
                          fontWeight: 600,
                          color: "#ffffff",
                          opacity: 0.9,
                          fontFamily: "semiBold",
                          fontSize: { xs: "0.95rem", md: "1.3rem" },
                        }}
                      >
                        {title === "Basic Plan"
                          ? "Starting at ₹8999"
                          : title === "Starter Plan"
                          ? "Starting at ₹19,999"
                          : title === "Business Plan"
                          ? "Starting at  ₹34,999"
                          : title === "Pro Plan"
                          ? "Starting at ₹49,999"
                          : ""}
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
                            fontFamily: "semiBold",
                            fontSize: { xs: "0.85rem", md: "1rem" },
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
                        "5 Keyword SEO",
                        "Keyword Research",
                        "5 On-Page SEO",
                        "Meta Tags Optimization",
                        "Internal Linking",
                        "H Tags Optimization",
                        "URL Structure Optimization",
                        "SEO Audit Report",
                        "Sitemap Submission",
                        "Robots Optimization",
                        "URL Structure Optimization",
                        "Alt Text for Images",
                        "Canonical Tags",
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
                            fontFamily: "Robot",
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
                        "5 Keyword SEO",
                        "Keyword Research",
                        "5 On-Page SEO",
                        "Meta Tags Optimization",
                        "Internal Linking",
                        "H Tags Optimization",
                        "URL Structure Optimization",
                        "SEO Audit Report",
                        "Sitemap Submission",
                        "Robots Optimization",
                        "URL Structure Optimization",
                        "Alt Text for Images",
                        "Canonical Tags",
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
                            fontFamily: "Robot",
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
                        "Schema Markup Implementation",
                        "Image Optimization",
                        "Content Rewriting",
                        "Google Analytics Setup",
                        "Content Optimization",
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
                            fontFamily: "Robot",
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
                        "5 Keyword SEO",
                        "Keyword Research",
                        "5 On-Page SEO",
                        "Meta Tags Optimization",
                        "Internal Linking",
                        "H Tags Optimization",
                        "URL Structure Optimization",
                        "SEO Audit Report",
                        "Sitemap Submission",
                        "Robots Optimization",
                        "URL Structure Optimization",
                        "Alt Text for Images",
                        "Canonical Tags",
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
                            fontFamily: "Robot",
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
                        "Schema Markup Implementation",
                        "Image Optimization",
                        "Content Rewriting",
                        "Google Analytics Setup",
                        "Content Optimization",
                        "Broken Links Check",
                        "Content Readability",
                        "301 Redirects Setup",
                        "Rich Snippets Implementation",
                        "Content Duplication Check",
                        "URL Parameter Handling",
                        "Competitor Analysis",
                        "Long-Tail Keyword Integration",
                        "FAQs Implementation",
                        "(UX) Optimization",
                        "Rich Snippets Implementation",
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
                            fontFamily: "Robot",
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
                        "5 Keyword SEO",
                        "Keyword Research",
                        "5 On-Page SEO",
                        "Meta Tags Optimization",
                        "Internal Linking",
                        "H Tags Optimization",
                        "URL Structure Optimization",
                        "SEO Audit Report",
                        "Sitemap Submission",
                        "Robots Optimization",
                        "URL Structure Optimization",
                        "Alt Text for Images",
                        "Canonical Tags",
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
                            fontFamily: "Robot",
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
                        "Schema Markup Implementation",
                        "Image Optimization",
                        "Content Rewriting",
                        "Google Analytics Setup",
                        "Content Optimization",
                        "Broken Links Check",
                        "Content Readability",
                        "301 Redirects Setup",
                        "Rich Snippets Implementation",
                        "Content Duplication Check",
                        "URL Parameter Handling",
                        "Competitor Analysis",
                        "Long-Tail Keyword Integration",
                        "FAQs Implementation",
                        "(UX) Optimization",
                        "Rich Snippets Implementation",
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
                            fontFamily: "Robot",
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
                        "Publishing Guest Posts",
                        "Manual Backlink Building",
                        "Article Posting",
                        "Blog Post",
                        "Infographic Submission",
                        "Blog Comments",
                        "Social Bookmarking",
                        "Monthly Reporting",
                        "Content Gap Analysis",
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
                            fontFamily: "Robot",
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
    </>
  );
};

export default SeoOptimization;
