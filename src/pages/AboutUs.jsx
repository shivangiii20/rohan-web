import React from "react";
import { Box, Typography, Container,  Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import BackgroundBubbles from "../components/BackgroundBubbles";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SecurityIcon from "@mui/icons-material/Security";
import MemoryIcon from "@mui/icons-material/Memory";
import {
  FaCogs,
  FaHistory,
  FaClock,
  FaMoneyBillWave,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa"; // At top with other imports

const zigzagContent = [
  
  {
    title: "Who We Are:",
    text: `RS Web Solutions is a premier software development company with over 7 years of experience in crafting innovative digital solutions. We specialize in building custom applications that drive business growth, leveraging our expertise to deliver scalable, secure, and user-friendly software tailored to your unique requirements.
    
With a proven track record of successful projects across various industries, our dedicated team of experienced developers combines technical excellence with creative thinking to transform your ideas into powerful digital experiences.`,
    img: "/images/whoim.jpeg",
  },
  {
    title: "Where Creativity Meets Technology:",
    text: `At RS Web Solutions, we bridge imagination and innovation, transforming visionary concepts into cutting-edge digital solutions. Our 7+ years of expertise shines through in every project as we blend artistic design with robust engineering. We don't just write code — we craft digital experiences that captivate users while delivering measurable business results.`,
    img: "/images/creativity.png",
  },
  {
    title: "Our Vision & Mission:",
    text: `At RS Web Solutions, we see a world where technology unlocks new possibilities. Our vision is to be the catalyst for digital transformation that goes beyond functionality — solutions that inspire users and elevate businesses to new heights.

Our mission? To craft software with soul. Where every line of code serves a purpose, every interface delights, and every solution tells your unique story.`,
    img: "/images/vision.png",
  },
  {
    title: "Our Core Values",
    text: `At RS Web Solutions, our work is guided by four fundamental pillars:
Integrity, Innovation, Collaboration & Excellence.
Every project reflects our commitment to ethical practices, creative problem-solving, teamwork, and uncompromising quality.
These values shape our culture and client relationships – we don't just build software, we build trust. From transparent communication to solutions that stand the test of time, our principles ensure we consistently deliver beyond expectations.`,
    img: "/images/corevalues.jpg",
  },
];

const AboutUs = () => {
  const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

  return (
    <>
      {/* Top Bubble Section */}
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
                  "linear-gradient(270deg, #b60d70ff, #270de8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                // backgroundSize: "600% 600%",
                // animation: "shineGradient 6s ease infinite",
                fontSize: { xs: "2.5rem", md: "4rem" },
              }}
            >
              ABOUT <span style={{ color: "#fff" }}>US</span>
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
              We are a full-stack digital agency that believes being a favorite
              brand is more valuable than just being a famous one.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* White Card Content Section */}
      <Box
        sx={{
          width: "100%",
          backgroundColor:
            theme.palette.mode === "dark" ? "#0f0f10ff" : "#ffffff",
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
          {zigzagContent.map((section, index) => {
            const isEven = index % 2 === 0;

            return (
              <Grid
                container
                spacing={4}
                alignItems="center"
              
                sx={{ mt: index === 0 ? 0 : 8 }}
                key={index}
                direction={{
                  xs: "column",
                  md: isEven ? "row" : "row-reverse",
                }}
              >
                {/* Image */}
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box
                      component="img"
                      src={section.img}
                      alt={section.title}
                      sx={{
                        width: { xs: 200, sm: 250, md: 300 },
                        height: { xs: 200, sm: 250, md: 300 },
                        objectFit: "cover",
                        borderRadius: "50%",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                      }}
                    />
                  </motion.div>
                </Grid>

                {/* Text */}
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Typography variant="h5" fontWeight="bold" gutterBottom
                    sx={{
    color: isDark ? "#ffffff" : "#111111",
  }}
                    >
                      {section.title}
                    </Typography>
                    <Typography
  variant="body1"
  sx={{
    color: isDark ? "#dddddd" : "text.secondary",
    lineHeight: 1.9,
    fontSize: { xs: "1rem", md: "1.125rem" },
    letterSpacing: 0.2,
  }}
>
  {section.text}
</Typography>
<br/><br/>

                  </motion.div>
                </Grid>
              </Grid>
            );
          })}

          {/* Advantages Section with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              align="center"
              gutterBottom
              sx={{
                background: "linear-gradient(135deg, #13bee4ff, #ed0c93ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 4,
              }}
            >
              Why Choose Us?
            </Typography>

            <Grid container spacing={4}   columns={{ xs: 12, sm: 12, md: 12 }} sx={{ 
    // width:  '100%',
    maxWidth: '1400px',
    mx: " auto", 
    px: { xs: 2, sm: 4, md: 6 },
  }}
            
  wrap="wrap">
              {[
                {
                  icon: <FaCogs size={36} color="#fff" />,
                  title: "Everything Under One Roof",
                  text: "We handle design, development, SEO, and more – all in one place.",
                },
                {
                  icon: <FaHistory size={36} color="#fff" />,
                  title: "Years of Trusted Experience",
                  text: "Over 7+ years of delivering powerful and secure digital solutions.",
                },
                {
                  icon: <FaClock size={36} color="#fff" />,
                  title: "On Time, Every Time",
                  text: "We respect deadlines and deliver your projects punctually.",
                },
                {
                  icon: <FaMoneyBillWave size={36} color="#fff" />,
                  title: "Affordable Pricing",
                  text: "Get top-tier services without breaking your budget.",
                },
                {
                  icon: <FaShieldAlt size={36} color="#fff" />,
                  title: "Secure & Safe",
                  text: "We prioritize your data security and platform reliability.",
                },
                {
                  icon: <FaRocket size={36} color="#fff" />,
                  title: "Latest Tech",
                  text: "We use cutting-edge technologies to future-proof your product.",
                },
              ].map((item, i) => (
                <Grid item xs={12} sm={6} lg={4}  key={i} sx={{display: "flex" , justifyContent: "center"}}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    style={{ width: "100%" }}
                  >
                    <Box
                      sx={{
                        background: "linear-gradient(135deg, #9f2dc9, #3796da)",
                        borderRadius: 4,
                        p: 4,
                        textAlign: "center",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-6px)",
                          boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
                        },
                      }}
                    >
                      <Box mb={2}>{item.icon}</Box>
                      <Typography variant="h6" fontWeight="bold" color="#fff">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="#f0f0f0" mt={1}>
                        {item.text}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
