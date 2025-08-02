import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { GlobalStyles } from '@mui/material';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  InputAdornment,
  Grid,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BackgroundBubbles from "../components/BackgroundBubbles";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import contactAnimation from "../animation/contact.json"; // Ensure this path is correct

const Contact = () => {
  const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });
  const [success, setSuccess] = useState(false);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d{0,10}$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, project } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !name ||
      !email ||
      !phone ||
      !project ||
      !emailRegex.test(email) ||
      phone.length !== 10
    ) {
      alert("Please fill all fields correctly!");
      return;
    }

    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", project: "" });
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #1f1f2b, #2c3e50)"
            : "linear-gradient(135deg,rgb(122, 78, 204),rgb(88, 165, 201))",
        position: "relative",
        overflow: "hidden",
        py: 10,
        px: 2,
        "@keyframes shinyText": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <BackgroundBubbles />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left: Lottie Animation */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ maxWidth: 400, width: "100%" }}
            >
              <Lottie
                animationData={contactAnimation}
                loop
                autoplay
                style={{ width: "100%", height: 300 }}
              />
            </motion.div>
          </Grid>

          {/* Right: Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <Box
                sx={{
                  background:
                    theme.palette.mode === "dark" ? "#121212cc" : "#ffffffdd",
                  backdropFilter: "blur(12px)",
                  borderRadius: 10,
                  p: { xs: 3, md: 3 },
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  width: { xs: "100%", sm: "90%", md: "85%" },
                  margin: "0 auto",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  textAlign="center"
                  sx={{
                    fontSize: { xs: "1.8rem", md: "2.4rem" },
                    mb: 3,
                    mt: 2,
                    background: "linear-gradient(135deg, #ec2bdcff, #39e6d8ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "200% auto",
                    animation: "shinyText 4s linear infinite",
                    fontFamily: 'semiBold',
                  }}
                >
                  Write Us a Message
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate>
   <GlobalStyles
        styles={{
          'input:-webkit-autofill': {
            boxShadow: `0 0 0 1000px ${
              isDark ? "#121212" : "#fff"
            } inset !important`,
            WebkitBoxShadow: `0 0 0 1000px ${
              isDark ? "#121212" : "#fff"
            } inset !important`,
            WebkitTextFillColor: isDark ? "#fff" : "#000",
            caretColor: isDark ? "#fff" : "#000",
            transition: "background-color 9999s ease-in-out 0s !important",
          },
        }}
      />

                  <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{ my: 2 , "& .MuiInputBase-root": {
    fontFamily: 'semiBold',
    fontSize: { xs: "1.1rem", md: "1.4rem" }, // input text size
  },
  "& .MuiInputLabel-root": {
   
    fontFamily: 'semiBold',
    fontSize: { xs: "1.2rem", md: "1.8rem" }, // label size
  },}}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{ my: 2, "& .MuiInputBase-root": {
    fontFamily: 'semiBold',
    fontSize: { xs: "1.1rem", md: "1.4rem" }, // input text size
  },
  "& .MuiInputLabel-root": {
    fontFamily: 'semiBold',
    fontSize: { xs: "1.2rem", md: "1.8rem" }, // label size
  }, }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Phone"
                    name="phone"
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    sx={{ my: 2,"& .MuiInputBase-root": {
    fontFamily: 'semiBold',
    fontSize: { xs: "1.1rem", md: "1.4rem" }, // input text size
  },
  "& .MuiInputLabel-root": {
    fontFamily: 'semiBold',
    fontSize: { xs: "1.2rem", md: "1.8rem" }, // label size
  }, }}
                    inputProps={{ maxLength: 10 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="About Your Project"
                    name="project"
                    fullWidth
                    multiline
                    rows={4}
                    value={formData.project}
                    onChange={handleChange}
                    required
                    sx={{ my: 2, "& .MuiInputBase-root": {
    fontFamily: 'semiBold',
    fontSize: { xs: "1.1rem", md: "1.4rem" }, // input text size
  },
  "& .MuiInputLabel-root": {
    fontFamily: 'semiBold',
    fontSize: { xs: "1.2rem", md: "1.8rem" }, // label size
  }, }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AssignmentIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      borderRadius: 50,
                      fontFamily: 'semiBold',
                      py: 1.5,
                      background: "linear-gradient(135deg,#9f2dc9,#3796da)",
                      fontWeight: "bold",
                      fontSize: { xs: "0.98rem", md: "1.4rem" },
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "linear-gradient(135deg,rgb(220, 133, 202),rgb(64, 197, 227))",
                        transform: "scale(1.03)",
                        fontFamily: 'semiBold',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ background: "#00c896", fontWeight: "bold" , fontFamily: 'semiBold', }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;