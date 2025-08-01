import { Box, Typography, Container } from "@mui/material";
import Lottie from "lottie-react";
import { useTheme } from '@mui/material/styles';
import androidan from "../animation/androidan.json"; 
import {  Grid } from "@mui/material";
import { Code, Android, IntegrationInstructions } from "@mui/icons-material"; 
import kotlin from "../animation/kotlin.json";
import { motion } from "framer-motion";
import {  Business, School, LocalMall, SportsEsports, Favorite, FlightTakeoff, LocalHospital, Security, Group, Restaurant, ShoppingCart } from "@mui/icons-material";

const Andriodapp = () => {
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
        backgroundImage: `url('/images/android.png')`, 
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
          px: 2,
          py: { xs: 10, md: 0 },
          minHeight: "100vh",
        }}
      >
        {/* Left: Lottie Animation */}
        <Box
          sx={{
            width: { xs: "100%", sm: "85%", md: "60%" },
            maxWidth: 600,
            mt: { xs: 4, md: 0 },
            pr: { md: 4 },
            transform: { md: "translateX(-20px)" },
          }}
        >
          <Lottie animationData={androidan} loop={true} />
        </Box>

        {/* Right: Text */}
        <Box sx={{ maxWidth: 500, py: { md: 10 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
              background: "linear-gradient(135deg, #00e5ff, #00c6ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontFamily: 'semiBold'
            }}
          >
            Build Your Custom Android App
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: { xs: "0.98rem", md: "1.4rem" },
              lineHeight: 1.6,
              fontFamily: 'Robot'
            }}
          >
            We develop fast, secure, and user-friendly Android applications that
            help your business grow. From idea to launch, we've got you covered!
          </Typography>
        </Box>
      </Box>
    </Box>
    
    {/*Insert this below your main section*/}
<Box
  sx={{
    py: 10,
    px: { xs: 2, md: 6 },
    backgroundColor: isDark ? '#121212' : '#fff',
    color: isDark ? '#fff' : '#000',
  }}
>
  {/* Heading */}
  <Typography
    variant="h4"
    sx={{
      textAlign: "center",
      fontWeight: "bold",
      mb: 4,
      fontSize: { xs: "2rem", md: "2.9rem" },
      background: "linear-gradient(135deg, #b066deff, #34cdbbff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: 'semiBold'
    }}
  >
    Technologies We Use to Build Scalable Android Apps
  </Typography>

  {/* Grid of Cards */}
  <Grid
    container
    spacing={4}
    justifyContent="center"
    sx={{ mt: 4 }}
  >
    {[
      {
        icon: <IntegrationInstructions fontSize="large" />,
        title: "Flutter",
        desc: "Cross-platform, beautiful UI and fast performance.",
      },
      {
        icon: <Code fontSize="large" />,
        title: "Java",
        desc: "Robust and secure native Android app development.",
      },
      {
        icon: <Android fontSize="large" />,
        title: "Kotlin",
        desc: "Modern, concise, and fully supported by Google.",
      },
    ].map((tech, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #ce5fedff, #78d7eeff)",
            borderRadius: 3,
            p: 3,
            textAlign: "center",
            color: "white",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Box sx={{ mb: 1 }}>{tech.icon}</Box>
          <Typography variant="h6" sx={{  fontFamily: 'Robot',
                            fontSize: { xs: "1rem", md: "2rem" }, mb: 1 }}>
            {tech.title}
          </Typography>
          <Typography variant="body2" sx={{  fontFamily: 'semiBold',
                            fontSize: { xs: "0.95rem", md: "1.2rem" }, }}>
            {tech.desc}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>



<Box
  sx={{
    py: 10,
    px: { xs: 2, md: 6 },
    backgroundColor:  isDark ? '#121212' : '#fff',
    color:  isDark ? '#fff' : '#000',
  }}
>
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "space-between",
      gap: 4,
    }}
  >
    {/* Left: Animation */}
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        width: { xs: "100%", md: "50%" },
        maxWidth: 500,
        mx: "auto",
      }}
    >
      <Lottie animationData={kotlin} loop={true} />
    </Box>

    {/* Right: Text */}
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      sx={{ flex: 1 }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "2.7rem" },
          background: "linear-gradient(135deg, #ce4fbfff, #3a96a8ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
          fontFamily: 'semiBold'
        }}
      >
        Scalable Apps. Smarter Growth.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", md: "1.4rem" },
          color:  isDark ? '#fff' : '#000',
          fontFamily: 'Robot'
        }}
      >
        We don’t just build apps — we create experiences. Reach more users,
        streamline your business, and dominate the Play Store with our expert Android development services.<br/>
        Whether you're a startup looking to validate your idea or an enterprise in need of a scalable mobile solution — we’ve got you covered. Our Android apps are built using powerful technologies like Flutter, Java, and Kotlin to ensure fast performance, great user experience, and robust security.  
  <br /><br />
  We focus on clean code, stunning UI, and seamless functionality so your app stands out in the crowded Play Store. Our team handles everything from planning and prototyping to publishing and post-launch support.  
  <br /><br />
  Get an app that not only looks amazing but also helps drive growth, increase engagement, and boost revenue. Let’s build something extraordinary together.
      </Typography>
    </Box>
  </Box>
</Box>



<Box
  sx={{
    py: 10,
    px: { xs: 2, md: 6 },
    backgroundColor: isDark ? '#121212' : '#fff',
    color: isDark ? '#fff' : '#000',
  }}
>
  {/* Gradient Heading */}
  <Typography
    variant="h4"
    sx={{
      textAlign: "center",
      fontWeight: "bold",
      mb: 4,
      fontSize: { xs: "2rem", md: "2.9rem" },
      background: "linear-gradient(135deg, #dd5eeeff, #4fdbea)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: 'semiBold'
    }}
  >
    Types of Android App We Build 🔧
  </Typography>

  {/* Cards Grid */}
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
      { icon: <Business fontSize="large" />, title: "Business Apps" },
      { icon: <School fontSize="large" />, title: "Educational Apps" },
      { icon: <LocalMall fontSize="large" />, title: "E-Commerce Apps" },
      { icon: <SportsEsports fontSize="large" />, title: "Gaming Apps" },
      { icon: <Favorite fontSize="large" />, title: "Fitness & Health" },
      { icon: <FlightTakeoff fontSize="large" />, title: "Travel Apps" },
      { icon: <LocalHospital fontSize="large" />, title: "Healthcare Apps" },
      { icon: <Security fontSize="large" />, title: "Utility & Security" },
      { icon: <Group fontSize="large" />, title: "Social Networking" },
      { icon: <Restaurant fontSize="large" />, title: "Food Delivery" },
      { icon: <ShoppingCart fontSize="large" />, title: "Shopping Apps" },
      { icon: <Android fontSize="large" />, title: "Custom Android Apps" },
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
        <Typography sx={{ fontWeight: "bold",  fontFamily: 'semiBold',
                            fontSize: { xs: "0.85rem", md: "1.4rem" }, }}>
          {card.title}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>


    
    </>
  );
};

export default Andriodapp;
