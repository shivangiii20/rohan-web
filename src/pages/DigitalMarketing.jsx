import { Box, Typography, Grid, Container, Button } from "@mui/material";
import Lottie from "lottie-react";
import { useTheme } from '@mui/material/styles';
import dmarketing from "../animation/dmarketing.json";
import { motion } from "framer-motion";
import {
  Campaign,
  Insights,
  Public,
  AttachMoney,
  MarkEmailRead,
  YouTube,
  AutoGraph,
  ShieldOutlined,
} from "@mui/icons-material";

const footerGradient = "linear-gradient(135deg, #d240e5ff, #4fdbeaff)";

const marketingCards = [
  { title: "Instagram Marketing" },
  { title: "Facebook Marketing" },
  { title: "Google Adwords" },
  { title: "Email Marketing" },
];

const DigitalMarketing = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
          backgroundImage: `url('/images/digitalmarketing.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.6)",
            top: 0,
            left: 0,
            zIndex: 1,
            backdropFilter: "blur(2px)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            textAlign: { xs: "center", md: "left" },
            width: "100%",
            px: 2,
            pt: { xs: 10, sm: 16, md: 0 },
            minHeight: "100vh",
          }}
        >
          {/* Left: Text */}
          <Box sx={{ maxWidth: 500, py: { md: 10 } }}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "1.7rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              Supercharge Your Brand with{" "}
              <span style={{ color: "#00e5ff" }}>Digital Marketing</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                mt: 2,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              Boost traffic, increase leads, and grow your business with smart,
              results-driven digital marketing strategies tailored for you.
            </Typography>
          </Box>

          {/* Right: Animation */}
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "50%" },
              maxWidth: 500,
              mt: { xs: 4, md: 0 },
              pl: { md: 4 },
              transform: { md: "translateX(20px)" },
              background: "transparent",
              "& canvas": {
                background: "transparent !important",
              },
            }}
          >
            <Lottie animationData={dmarketing} loop={true} />
          </Box>
        </Box>
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          bgcolor: isDark ? '#121212' : '#fff',
          py: 10,
          px: { xs: 2, md: 6 },
          color: "text.primary",
          transition: "all 0.4s ease",
        }}
      >
        <Container maxWidth="lg">
          {/* Animated Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Promote Your Business Across Top Channels
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color:  isDark ? '#fff' : '#000',
                textAlign: "center",
                maxWidth: "700px",
                mx: "auto",
                fontSize: { xs: "0.95rem", md: "1.1rem" },
              }}
            >
              Get your message out on Instagram, Facebook, Google, and more —
              where your audience already lives.
            </Typography>
          </motion.div>

          {/* Centered Cards Grid */}
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 6 }}>
            {marketingCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    background: footerGradient,
                    borderRadius: "16px",
                    p: 3,
                    height: "100%",
                    transition: "transform 0.3s ease",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                    textAlign: "center",
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {card.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Extra Headings Section After Cards */}
      <Box sx={{ mt: 10 }}>
        {/* Block 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
              background: "linear-gradient(135deg, #d240e5, #4fdbea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            We Help Brands Build Trust, Get Noticed, and Stay Ahead in the
            Digital World
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color:  isDark ? '#fff' : '#000',
              textAlign: "center",
              maxWidth: "700px",
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
            }}
          >
            Our expert strategies focus on creating visibility and long-term
            engagement. We don’t chase vanity metrics — we help your brand
            create meaningful impact where it matters.
          </Typography>
        </motion.div>

        {/* Block 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginTop: "60px" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
              background: "linear-gradient(135deg, #701accff, #6fe0c6ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            We Don’t Just Market — We Grow Your Business from the Ground Up
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color:  isDark ? '#fff' : '#000',
              textAlign: "center",
              maxWidth: "700px",
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
            }}
          >
            Our full-funnel digital campaigns are built to deliver traffic,
            leads, and long-term results across all platforms — no guesswork,
            just strategy that works.
          </Typography>
        </motion.div>

        {/* Block 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginTop: "60px" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
              background: "linear-gradient(135deg, #a31fb8dc, #43d7d4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Reach the Right Audience with the Right Message at the Right Time
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color:  isDark ? '#fff' : '#000',
              textAlign: "center",
              maxWidth: "700px",
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
            }}
          >
            With hyper-targeted ad campaigns, precision SEO, and creative
            content, we make sure your brand is where it matters most — in front
            of your ideal customers.
          </Typography>
        </motion.div>
      </Box>

      {/* Feature Cards */}
      <Box sx={{ py: 8, px: { xs: 2, md: 6 }, background: isDark ? '#121212' : '#fff', }}>
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
              {
                icon: <Campaign fontSize="large" />,
                title: "Campaign Strategy",
                desc: "Plan tailored marketing campaigns that deliver results.",
              },
              {
                icon: <Insights fontSize="large" />,
                title: "Performance Tracking",
                desc: "Track KPIs and metrics to improve ROI effectively.",
              },
              {
                icon: <Public fontSize="large" />,
                title: "Social Media Reach",
                desc: "Expand your brand's visibility across major platforms.",
              },
              {
                icon: <AttachMoney fontSize="large" />,
                title: "Paid Ads",
                desc: "Run budget-friendly ads on Google & Facebook.",
              },
              {
                icon: <MarkEmailRead fontSize="large" />,
                title: "Email Marketing",
                desc: "Send automated campaigns that convert leads.",
              },
              {
                icon: <YouTube fontSize="large" />,
                title: "Video Promotions",
                desc: "Use reels & video ads to engage wider audiences.",
              },
              {
                icon: <AutoGraph fontSize="large" />,
                title: "Conversion Optimization",
                desc: "Improve landing pages to boost customer actions.",
              },
              {
                icon: <ShieldOutlined fontSize="large" />,
                title: "Brand Trust",
                desc: "Build reputation and authority in your niche.",
              },
            ].map((card, index) => (
              <Box
                key={index}
                sx={{
                  background: "linear-gradient(135deg, #ca72e1ff, #aceaebff)",
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
                <Box sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                  {card.title}
                </Box>
                <Box sx={{ fontSize: "0.9rem", opacity: 0.9 }}>{card.desc}</Box>
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
          backgroundColor: isDark ? '#121212' : '#fff',
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
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Our Affordable Digital Marketing plans
          </Typography>

          {/* 4 Plan Cards */}
          <Grid
            container
            spacing={{ xs: 3, md: 5 }}
            justifyContent="center"
            alignItems="stretch"
          >
            {[
              "Google or Facebook or Instagram Pack",
              "Google + Facebook + Instagram",
              "Google+FB+Insta+Email Campaign",
            ].map((title, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      background: "linear-gradient(135deg, #974bb3ff, #22c1c3)",
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
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                      {title}
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
                      backgroundColor: isDark ? '#121212' : '#fff',
                      borderRadius: 3,
                      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                      p: 3,
                    }}
                  >
                    {[
                     "Approx Reach/View 10,000+",
"Approx Click 250-500",
"keyword Planning & Research",
"Engaging Ads content",
"Content Writing",
"Mobile/Desktop Banner",
"Competitor research",
"Google Banner Ads",
"Google Search Campaign",
                    ].map((feature, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          borderBottom: idx !== 8 ? "1px dashed #ddd" : "none",
                          pb: 1,
                          mb: 1,
                          fontSize: "0.95rem",
                          color:  isDark ? '#fff' : '#000',
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
                      backgroundColor: isDark ? '#121212' : '#fff',
                      borderRadius: 3,
                      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                      p: 3,
                    }}
                  >
                    {[
                     "Approx Reach/View 25,000+",
"Approx Click 800-1500",
"keyword Planning & Research",
"Engaging Ads content",
"Content Writing",
"Mobile/Desktop Banner",
"Competitor research",
"Google Banner Ads",
"Google Search Campaign",
                    ].map((feature, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          borderBottom: idx !== 8 ? "1px dashed #ddd" : "none",
                          pb: 1,
                          mb: 1,
                          fontSize: "0.95rem",
                          color:  isDark ? '#fff' : '#000',
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
                      backgroundColor: isDark ? '#121212' : '#fff',
                      borderRadius: 3,
                      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                      p: 3,
                    }}
                  >
                    {[
                     "Instagram Banner Ads",
"Facebook Banner Ads",
"Deep Competitor research",
"Deep Keyword Analysis",
"Monthly Website Report",
                    ].map((feature, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          borderBottom: idx !== 3 ? "1px dashed #ddd" : "none",
                          pb: 1,
                          mb: 1,
                          fontSize: "0.95rem",
                          color:  isDark ? '#fff' : '#000',
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
                      backgroundColor: isDark ? '#121212' : '#fff',
                      borderRadius: 3,
                      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                      p: 3,
                    }}
                  >
                    {[
                     "Approx Reach/View 35,000+",
"Approx Click 2000-5000",
"keyword Planning & Research",
"Engaging Ads content",
"Content Writing",
"Mobile/Desktop Banner",
"Competitor research",
"Google Banner Ads",
"Google Search Campaign",
                    ].map((feature, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          borderBottom: idx !== 8 ? "1px dashed #ddd" : "none",
                          pb: 1,
                          mb: 1,
                          fontSize: "0.95rem",
                          color:  isDark ? '#fff' : '#000',
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
                      backgroundColor: isDark ? '#121212' : '#fff',
                      borderRadius: 3,
                      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                      p: 3,
                    }}
                  >
                    {[
                         "Instagram Banner Ads",
                        "Facebook Banner Ads",
                    "Deep Competitor research",
                        "Deep Keyword Analysis",
                         "Monthly Website Report",
                      
                    ].map((feature, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          borderBottom: idx !== 3 ? "1px dashed #ddd" : "none",
                          pb: 1,
                          mb: 1,
                          fontSize: "0.95rem",
                          color:  isDark ? '#fff' : '#000',
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
                      backgroundColor: isDark ? '#121212' : '#fff',
                      borderRadius: 3,
                      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                      p: 3,
                    }}
                  >
                    {[
                         "Instagram Banner Ads",
                        "Facebook Banner Ads",
                    "Deep Competitor research",
                        "Deep Keyword Analysis",
                         "Monthly Website Report",
                      
                    ].map((feature, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          borderBottom: idx !== 3 ? "1px dashed #ddd" : "none",
                          pb: 1,
                          mb: 1,
                          fontSize: "0.95rem",
                          color:  isDark ? '#fff' : '#000',
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DigitalMarketing;
