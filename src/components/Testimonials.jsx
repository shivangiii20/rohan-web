import React from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Container,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Ravi Sharma",
    title: "Founder, TechNova",
    message:
      "Amazing service! The team built our website from scratch and it exceeded our expectations.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Priya Singh",
    title: "CEO, DigitalKart",
    message:
      "Their support and design quality is top-notch. We’re seeing real business growth now.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Aman Kapoor",
    title: "CTO, GreenTech",
    message:
      "Truly professional and creative. Delivered on time and with exceptional quality.",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Meena Rathi",
    title: "Manager, Edusoft",
    message:
      "Their work boosted our traffic and branding. Highly recommended for startups!",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Rohit Verma",
    title: "Entrepreneur",
    message:
      "The designs and UX they delivered were modern and super fast to load.",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    name: "Neha Joshi",
    title: "Marketing Head, Bloom",
    message:
      "Their communication, updates, and delivery were always on point. Loved the experience.",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Kunal Mehta",
    title: "Freelancer",
    message:
      "I got a full website + SEO done and I can already see better rankings. 10/10!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 10, background: "offwhite" }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
  <Typography
    variant="h4"
    fontWeight="bold"
    sx={{
      background: "linear-gradient(135deg,rgb(180, 60, 228),rgb(116, 123, 214))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
      fontFamily: 'semiBold'
    }}
  >
    What our Client say
  </Typography>
</Box>


        <Box mt={6}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 1 },
              960: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    height: "100%",
                    background: "linear-gradient(135deg,rgb(182, 155, 236), #63d2ff)",
                    color: "white",
                    fontWeight: "bold",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold" sx={{fontFamily: 'semiBold', fontSize: { xs: "1.4rem", md: "1.7rem" },}}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="white" fontWeight="bold" sx={{fontFamily: 'semiBold', fontSize: { xs: "1rem", md: "1.2rem" },}}>
                        {testimonial.title}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{fontFamily: 'Robot', fontSize: { xs: "1.4rem", md: "1.2rem" },}}>
                    “{testimonial.message}”
                  </Typography>
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
