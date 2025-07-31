import { Box, Typography, Grid, Container } from "@mui/material";
import Lottie from "lottie-react";
import { useTheme } from '@mui/material/styles';
import ecommerce from "../animation/ecommerce.json";
import ewebsite from "../animation/ewebsite.json";
import { motion } from "framer-motion";

const EcommerceWeb = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
          backgroundImage: `url('/images/commerce.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.5)",
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
            flexDirection: { xs: "column", md: "row-reverse" }, // <-- change to `row-reverse` to move animation to left
            alignItems: "center",
            justifyContent: "center",
            textAlign: { xs: "center", md: "left" },
            width: "100%",
            px: 2,
            pt: { xs: 10, sm: 16, md: 0 }, // <-- remove top padding on large, center vertically instead
            minHeight: "100vh",
          }}
        >
          {/* Text Section */}
          <Box sx={{ maxWidth: 500, py: { md: 10 } }}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "1.7rem", sm: "2rem", md: "3rem" },
                fontFamily: 'semiBold'
              }}
            >
              Build Your Dream E-Commerce Store
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                mt: 2,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.7rem" },
                fontFamily: 'Robot'
              }}
            >
              We craft fast, secure, and beautiful online stores tailored for
              your brand. Start selling today.
            </Typography>
          </Box>

          {/* Lottie Animation */}
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "50%" },
              maxWidth: 500,
              mt: { xs: 4, md: 0 },
              pr: { md: 4 }, // optional spacing between animation and text
              transform: { md: "translateX(-30px)" },
            }}
          >
            <Lottie animationData={ecommerce} loop={true} />
          </Box>
        </Box>
      </Box>

      {/*Heading Section */}

      <Box
        sx={{
          backgroundColor: isDark ? '#121212' : '#fff',
          px: 2,
          py: { xs: 6, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {/* Text Section with motion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1, textAlign: "center" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.8rem", md: "2.9rem" },
                background:
                  "linear-gradient(90deg, #6ec7e7e1, #3babf6ff, #e5b5e9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 3,
                fontFamily: 'semiBold'
              }}
            >
              Make Your E-Commerce Website Now!!!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: isDark ? '#fff' : '#000',
                fontSize: { xs: "1rem", md: "1.4rem" },
                maxWidth: "800px",
                mx: "auto",
                mb: 2,
                fontFamily: 'Robot'
              }}
            >
              Launch your online store with stunning design, secure payments,
              fast checkout, and mobile-first experience. We tailor each site
              for growth, conversions, and seamless shopping.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: isDark ? '#fff' : '#000',
                fontSize: { xs: "1rem", md: "1.4rem" },
                maxWidth: "800px",
                mx: "auto",
                fontFamily: 'Robot'
              }}
            >
              Whether you're just starting or scaling up, we’ll help you build a
              high-converting ecommerce platform that works beautifully on every
              device.
            </Typography>
          </motion.div>

          {/* Lottie Animation with motion (right side on md+) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              flex: 1,
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "80%" },
                maxWidth: 500,
                display: "block",
                mt: { xs: 4, md: 0 },
              }}
            >
              <Lottie animationData={ewebsite} loop={true} />
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Cards Section */}

      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: 2,
          backgroundColor: isDark ? '#121212' : '#fff',
        
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {[
            "Product Catalog",
            "Secure Payment Integration",
            "Mobile-First Design",
            "Fast Checkout",
            "Custom Admin Panel",
            "SEO Optimization",
            "Customer Login & Tracking",
            "Scalable Infrastructure",
          ].map((title, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
                "@keyframes fadeInUp": {
                  from: {
                    opacity: 0,
                    transform: "translateY(20px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
                animation: `fadeInUp 0.6s ease ${(i + 1) * 0.1}s both`,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 280,
                  height: "100%",
                  p: 3,
                  borderRadius: "20px",
                  background:
                    "linear-gradient(90deg, #6EE7B7, #3B82F6, #9333EA)",
                  color: "#fff",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.03)",
                    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vel risus commodo.
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
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
                  "linear-gradient(90deg, #85bed3e1, #3b48f6ff, #e5b5e9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
          >
            Our Affordable E-commerce Web Plans
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
                      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                        {title}
                      </Typography>
                      <Box
                        component="button"
                        sx={{
                          backgroundColor: "#fff",
                          color: "#333",
                          border: "none",
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          fontWeight: "bold",
                          cursor: "pointer",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        }}
                      >
                        Order Now
                      </Box>
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
                        "Dynamic E-Commerce Website",
                        "Fully Mobile Optimized",
                        "Payment Gateway Integration",
                        "Services & Categories",
                        "Offer Slider Banner Option",
                        "Discount Coupons",
                        "Upto 50 Products",
                        "GST invoicing & inventory",
                        "1 Year SSD Hosting (inc)",
                        "1 Year Free Technical Support",
                        "Web Admin Panel",
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
                        "Dynamic E-Commerce Website",
                        "Fully Mobile Optimized",
                        "Payment Gateway Integration",
                        "Services & Categories",
                        "Offer Slider Banner Option",
                        "Discount Coupons",
                        "Upto 100 products ",
                        "GST invoicing & inventory",
                        "1 Year NVME Hosting(inc)",
                        "1 Year Free Technical Support",
                        "Web Admin Panel",
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
                        "Variants & Attributes",
                        "Import/Export products",
                        "Live chat Integration",
                        "Whatsapp chat Integration",
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
                            color: isDark ? '#fff' : '#000',
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
                        "Dynamic E-Commerce Website",
                        "Fully Mobile Optimized",
                        "Payment Gateway Integration",
                        "Services & Categories",
                        "Offer Slider Banner Option",
                        "Discount Coupons",
                        "Upto 2000 Products",
                        "GST invoicing & inventory",
                        "1 Year Web Cloud Hosting Plans",
                        "1 Year Free Technical Support",
                        "Variants & Attributes",
                        "Import/Export products",
                        "Live chat Integration",
                        "Whatsapp chat Integration",
                        "Web Admin Panel",
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
                        "Multi-Vender Website",
                        "Free Website Logo Design",
                        "1 Year Free Support",
                        "5 Free Update After Delivery",
                        "SEO module & Tools",
                        "5 Free Update After Delivery",
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
                            color: isDark ? '#fff' : '#000',
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
                        "Dynamic E-Commerce Website",
                        "Fully Mobile Optimized",
                        "Payment Gateway Integration",
                        "Services & Categories",
                        "Offer Slider Banner Option",
                        "Discount Coupons",
                        "Upto 2000 Products",
                        "GST invoicing & inventory",
                        "1 Year Web Cloud Hosting Plans",
                        "1 Year Free Technical Support",
                        "Variants & Attributes",
                        "Import/Export products",
                        "Live chat Integration",
                        "Whatsapp chat Integration",
                        "Web Admin Panel",
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
                        "Multi-Vender Website",
                        "Free Website Logo Design",
                        "1 Year Free Support",
                        "5 Free Update After Delivery",
                        "SEO module & Tools",
                        "5 Free Update After Delivery",
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
                            color: isDark ? '#fff' : '#000',
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
                        "E-COMMERCE ANDROID APP",
                        "OTP Validation",
                        "Poweful Admin Panel",
                        "Push Notification",
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
                            color: isDark ? '#fff' : '#000',
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

export default EcommerceWeb;
