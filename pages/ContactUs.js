import { Instagram, LinkedIn } from "@mui/icons-material";
import lyncfit_logo from "./img/LyncFit_Logo.jpg";
import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";


const TikTokIcon = ({ color = "none", stroke_color = "#dedede" }) => {
  return (
    <svg
      fill={color}
      stroke={stroke_color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="5%"
      height="5%"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

const ScreenYui = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ width: "100%", height: "100%", bgcolor: "background.paper" }}>
      
      {/* Menu Bar */}
      <AppBar position="static" sx={{ bgcolor: "white", boxShadow: 1 }}>
        <Toolbar>
          <Link to="/pages/HomePage.js" style={{ textDecoration: "none" }}>
            <Box
              component="img"
              sx={{ height: 75, width: 203 }}
              alt="Logo"
              src={lyncfit_logo}
            />
          </Link>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#3f3f3f", textAlign: "center" }}
          >
            <Link
              to="/pages/TeamPage.js"
              style={{ color: "#3f3f3f", textDecoration: "none" }}
            >
              The Team
            </Link>
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ color: "#315fd9", textAlign: "right" }}
          >
            <Link
              to="/pages/ContactUs.js"
              style={{ color: "#315fd9", textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>


      <Box sx={{ mt: 4, bgcolor: "white", p: 4, borderRadius: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "medium" }}>
              Contact Us
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Get in touch with us. We'd love to hear from you!
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: "medium", mb: 2 }}>
              Join the Waitlist
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Be the first to know what we're up to!
            </Typography>

            {/* Contact Form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" required>
                    <FormLabel component="legend">
                      Do you represent a business or organisation? (required)
                    </FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>

              {submitted && (
                <Typography
                  variant="h6"
                  sx={{ mt: 2, color: "green"}}
                >
                  Thank you for your submission! Please check your email.
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>


      {/* Footer */}
      <Box sx={{ bgcolor: "#dedede", p: 4, mt: 4 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" sx={{ fontWeight: "medium" }}>
                ©LyncFit. 2024
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: "medium" }}>
                Keep updated
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <IconButton
                  href="https://www.linkedin.com/in/lyncfit-48776932b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedIn fontSize="large" />
                </IconButton>

                <IconButton
                  href="https://www.instagram.com/lyncfit/profilecard/?igsh=cmJ5M3BjZ3VpN3Bh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram fontSize="large" />
                </IconButton>

                <TikTokIcon color="none" stroke="#dedede" />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: "medium" }}>
                Contact
              </Typography>
              <Link
                href="mailto:info@lyncfit.co.uk"
                underline="none"
                sx={{ display: "block", mt: 2 }}
              >
                info@lyncfit.co.uk
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ScreenYui;
