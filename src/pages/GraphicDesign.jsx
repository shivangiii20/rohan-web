import React from "react";
import { Box, Typography, useTheme, Grid, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import graphicdesign2 from "../animation/graphicdesign2.json"; 
import Lottie from "lottie-react";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WebAssetIcon from '@mui/icons-material/WebAsset';
const GraphicDesign = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      {/* Background Image Section */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('images/graphic.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Text Section Below the Image */}
      <Box
        sx={{
          px: 3,
          py: { xs: 6, md: 10 },
          textAlign: "center",
          backgroundColor: isDark ? "#121212" : "#fff",
          color: isDark ? "#fff" : "#000",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontFamily: "semiBold",
              background: "linear-gradient(90deg, #5cadcbff, #dd2476)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Strategic Design That Builds Brand Authority
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Typography
            sx={{
              mt: 2,
              fontFamily: "Robot",
              fontSize: { xs: "1rem", md: "1.4rem" },
              opacity: 0.85,
            }}
          >
            We don’t just design for aesthetics we design for intention. Our
            approach combines market insight with creative execution to build
            visual assets that position your brand as a leader in its industry.
            <br /> Whether it’s a complete identity system or a single visual
            asset, we ensure every design element reinforces trust, clarity, and
            consistency across all customer touchpoints.
          </Typography>
        </motion.div>
        <br />
        <br />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontFamily: "semiBold",
              background: "linear-gradient(90deg, #51a5bcff, #dd2474ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sophisticated Visual Identity for Modern Brands
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Typography
            sx={{
              mt: 2,
              fontFamily: "Robot",
              fontSize: { xs: "1rem", md: "1.4rem" },
              opacity: 0.85,
            }}
          >
            In a digital-first world, your visual identity is often your first
            impression. We specialize in crafting modern, professional, and
            highly adaptable brand visuals that align with your business goals.
            <br /> From color palettes and typography to logo systems and brand
            guides, we help you create an identity that’s not only beautiful but
            also strategically aligned with your audience.
          </Typography>
        </motion.div>
        <br />
        <br />



        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontFamily: "semiBold",
              background: "linear-gradient(90deg, #51a5bcff, #dd2474ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Transforming Ideas Into Visual Masterpieces
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Typography
            sx={{
              mt: 2,
              fontFamily: "Robot",
              fontSize: { xs: "1rem", md: "1.4rem" },
              opacity: 0.85,
            }}
          >
            Whether you come to us with a rough sketch, a detailed concept, or
            just a vision in mind — we bring your ideas to life through
            professionally crafted designs that truly speak volumes.
            <br /> Our team thrives on creative challenges, combining strategic
            thinking with artistic precision to deliver visuals that are not
            only stunning but also aligned with your brand's message and goals.
            <br /> From digital platforms to print media, we create design
            experiences that engage, inform, and inspire — helping your brand
            leave a powerful and lasting impression.
          </Typography>
        </motion.div>
        <br />
      </Box>

      {/* Text + Animation  */}
     {/* Text + Animation Section */}
<Box
  sx={{
    px: 3,
    py: { xs: 6, md: 10 },
    backgroundColor: isDark ? "#0f0f0f" : "#fdfdfd",
  }}
>
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" }, // Stack on small screens
      alignItems: "center",
      justifyContent: "space-between",
      gap: { xs: 6, md: 4 },
      px: { xs: 2, md: 4 },
      mt: { xs: 4, md: 0 },
    }}
  >
    {/* Left Side Text */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        flex: 1,
        width: "100%",
        textAlign: "center",
        maxWidth: "600px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "2.5rem" },
          background: "linear-gradient(to right, #8e2de2, #1ee9e9ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
          fontFamily: 'semiBold',
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Bringing Your Vision to Life
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.4rem" },
          color: isDark ? "#e0e0e0" : "#555",
          lineHeight: 1.7,
          fontFamily: 'Robot',
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Every brand has a story — we help you tell yours visually. <br />
        Our expert designers use a blend of creativity and strategy to transform your ideas into meaningful designs that connect with your audience. <br />
        Whether it’s digital or print, we ensure your message stands out in style.
      </Typography>
    </motion.div>

    {/* Right Side Lottie Animation */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        maxWidth: "600px",
      }}
    >
      <Lottie
        animationData={graphicdesign2}
        style={{
          width: "100%",
          maxWidth: "550px",
          minWidth: "260px",
        }}
      />
    </motion.div>
  </Box>
</Box>


{/* Card Section */}

<Box
  sx={{
    px: 3,
    py: { xs: 6, md: 10 },
    backgroundColor: isDark ? "#0f0f0f" : "#fdfdfd",
  }}
>
  <Typography
    variant="h4"
    sx={{
      textAlign: "center",
      mb: 6,
      fontWeight: "bold",
      fontSize: { xs: "2rem", md: "2.5rem" },
      background: "linear-gradient(to right, #8e2de2, #1ee9e9ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: 'semiBold',
    }}
  >
    Graphic Design Essentials
  </Typography>

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
    {/* Card 1 */}
    <Box
      sx={{
        background: "linear-gradient(to right, #1ee9e9, #8e2de2)",
        color: "#fff",
        borderRadius: "20px",
        p: 4,
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
        },
      }}
    >
      <DesignServicesIcon sx={{ fontSize: 50, mb: 2 }} />
      <Typography variant="h6" sx={{ fontFamily: 'semiBold', fontSize: { xs: "1.3rem", md: "1.5rem" }, }}>Website Logo</Typography>
    </Box>

    {/* Card 2 */}
    <Box
      sx={{
        background: "linear-gradient(to right, #1ee9e9, #8e2de2)",
        color: "#fff",
        borderRadius: "20px",
        p: 4,
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
        },
      }}
    >
      <CropOriginalIcon sx={{ fontSize: 50, mb: 2 }} />
      <Typography variant="h6" sx={{ fontFamily: 'semiBold', fontSize: { xs: "1.3rem", md: "1.5rem" },}}>Website Banner</Typography>
    </Box>

    {/* Card 3 */}
    <Box
      sx={{
        background: "linear-gradient(to right, #1ee9e9, #8e2de2)",
        color: "#fff",
        borderRadius: "20px",
        p: 4,
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
        },
      }}
    >
      <CreditCardIcon sx={{ fontSize: 50, mb: 2 }} />
      <Typography variant="h6" sx={{ fontFamily: 'semiBold', fontSize: { xs: "1.3rem", md: "1.5rem" }, }}>Business Cards</Typography>
    </Box>

    {/* Card 4 */}
    <Box
      sx={{
        background: "linear-gradient(to right, #1ee9e9, #8e2de2)",
        color: "#fff",
        borderRadius: "20px",
        p: 4,
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
        },
      }}
    >
      <WebAssetIcon sx={{ fontSize: 50, mb: 2 }} />
      <Typography variant="h6" sx={{ fontFamily: 'semiBold', fontSize: { xs: "1.3rem", md: "1.5rem" }, }}>Web Ads</Typography>
    </Box>
  </Box>
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
              fontFamily: 'semiBold',
              background:
                  "linear-gradient(90deg, #ef0fe0e1, #73ccdcff, #162be8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
          >
            Checkout Our Graphic Designing Plans
          </Typography>

          {/* 4 Plan Cards */}
          <Grid
            container
            spacing={{ xs: 3, md: 5 }}
            justifyContent="center"
            alignItems="stretch"
          >
            {["Website Logo", "website  Banner", "Business card", "SVG Logo"].map(
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
                        background: "linear-gradient(135deg, #d04fd6ff, #3ecfdfff)",
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
                      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, fontFamily: 'semiBold', fontSize: { xs: "1.4rem", md: "1.7rem" }, }}>
                        {title}
                      </Typography>
                      {/* 💸 Price detail added here */}
  <Typography
    variant="body2"
    sx={{
      mb: 1,
      fontWeight: 600,
      fontSize: "1rem",
      color: "#ffffff",
      opacity: 0.9,
      fontFamily: 'semiBold',
      fontSize: { xs: "0.95rem", md: "1.3rem"},
        }}
  >
    {title === "Website Logo"
      ? "Starting at ₹499"
      : title === "website  Banner"
      ? "Starting at ₹799"
      : title === "Business card"
      ? "Starting at  ₹1499"
      : "Starting at ₹1499"}
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
                          fontFamily: 'semiBold',
                          fontSize: { xs: "0.85rem", md: "1rem"},
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
                        backgroundColor: isDark ? '#1f1d1dff' : '#fff',
                        borderRadius: 3,
                        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                        p: 3,
                      }}
                    >
                      {[
                        "Web and Print Ready formats",
"5 Design Concepts Option",
"3 Revisions on the selected design",
"Material & Modern Logos Design",
"File Formate .png ,jpg ,.psd",
"Original Files",
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
                            color: isDark ? '#fff' : '#000',
                            fontFamily: 'Robot',
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
                        backgroundColor: isDark ? '#1f1d1dff' : '#fff',
                        borderRadius: 3,
                        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                        p: 3,
                      }}
                    >
                      {[
                        "Web and Print Ready formats",
"5 Design Concepts Option",
"3 Revisions on the selected design",
"Material & Modern Logos Design",
"File Formate .png ,jpg ,.psd",
"Original Files",
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
                            color: isDark ? '#fff' : '#000',
                            fontFamily: 'Robot',
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
                        backgroundColor: isDark ? '#1f1d1dff' : '#fff',
                        borderRadius: 3,
                        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                        p: 3,
                      }}
                    >
                      {[
                        
                        "Web and Print Ready formats",
"5 Design Concepts Option",
"3 Revisions on the selected design",
"Material & Modern Logos Design",
"File Formate .png ,jpg ,.psd",
"Original Files",
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
                            color: isDark ? '#fff' : '#000',
                            fontFamily: 'Robot',
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
                        backgroundColor: isDark ? '#1f1d1dff' : '#fff',
                        borderRadius: 3,
                        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                        p: 3,
                      }}
                    >
                      {[
                        
                        "Web and Print Ready formats",
"5 Design Concepts Option",
"3 Revisions on the selected design",
"Material & Modern Logos Design",
"File Formate .png ,jpg ,.psd",
"Original Files",
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
                            color: isDark ? '#fff' : '#000',
                            fontFamily: 'Robot',
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

export default GraphicDesign;
