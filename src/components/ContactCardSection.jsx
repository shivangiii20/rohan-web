import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
  Snackbar,
  useTheme,
  useMediaQuery,
  Alert,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactCardSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setSnackbarText(`${text} copied!`);
    setSnackbarOpen(true);
  };

  return (
    <Box
      sx={{
        mt: 12, // Adds space from previous section (accordion)
        py: 10,
        px: 2,
        background: isDark
          ? 'linear-gradient(135deg, #000000ff, #000000ff)'
          : 'linear-gradient(135deg, #ffffffff, #ffffffff)',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: 6,
          background: 'linear-gradient(135deg, #9f7aea, #63d2ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'semiBold',
        }}
      >
        Write Us a Message
      </Typography>

      <Grid container spacing={8} justifyContent="center">
        {[
          {
            icon: <EmailIcon sx={{ fontSize: 40, color: '#fff' }} />,
            title: 'Email Us',
            description: 'Reach us anytime via email' ,
            contact: 'hello@example.com',
          },
          {
            icon: <PhoneIcon sx={{ fontSize: 40, color: '#fff' }} />,
            title: 'Call Us',
            description: "We're available 9am – 7pm" ,
            
            contact: '+91 98765 43210',
          },
        ].map((item, idx) => (
          <Grid item xs={12} sm={10} md={6} lg={6} xl={5} key={idx}>
            <Card
              elevation={6}
              sx={{
                // height: 180,
                minHeight: 250, // Allow more room for text
                borderRadius: 4,
                flexDirection: 'column',
    justifyContent: 'space-between',
                background: isDark
                  ? 'linear-gradient(135deg, #1e293b, #334155)'
                  : 'linear-gradient(135deg, #dbeafe, #e0f2fe)',
                transition: '0.3s',
                '&:hover': {
                  background: isDark
                    ? 'linear-gradient(135deg, #0f172a, #1e293b)'
                    : 'linear-gradient(135deg, #bcd9ff, #c7f2ff)',
                  transform: 'scale(1.02)',
                },
              }}
            >
              <CardContent  sx={{ flexGrow: 1, overflow: 'visible' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #9f7aea, #63d2ff)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    background: 'linear-gradient(135deg, #9f7aea, #63d2ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'semiBold',
                     fontSize: { xs: "1rem", md: "1.4rem" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color={isDark ? '#cbd5e1' : 'text.secondary'}
                  gutterBottom
                  sx={{fontFamily: 'Robot',  fontSize: { xs: "0.85rem", md: "1.6rem" },}}
                >
                  {item.description}
                </Typography>
                
                
              
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 3,
                  }}
                >
                  <Typography
                    variant="subtitle1"
      
                    sx={{ mr: 1, fontFamily: 'Robot', fontSize: { xs: "0.85rem", md: "1.5rem" },  }}
                  >
                    {item.contact}
                  </Typography>
                  <IconButton onClick={() => handleCopy(item.contact)}>
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{
            background: 'linear-gradient(to right, #0f9d58, #0b7d45)',
            color: '#fff',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }}
        >
          {snackbarText}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactCardSection;
