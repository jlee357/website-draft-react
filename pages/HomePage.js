import { Instagram, LinkedIn } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import background_photo from './img/Title_Photo.jpg';
import lyncfit_logo from "./img/LyncFit_Logo.jpg";
import couple_cyclist_photo from "./img/Couple_Cyclists.jpg";
import real_connections_photo from "./img/Real_Connections.jpg";
import consistency_reward_photo from "./img/Consistency_Reward.jpg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';


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


const AccordionList = () => {
  const questions = [
    "What is LyncFit?",
    "Who is LyncFit designed for?",
    "Can universities, corporate organisations, and gyms use LyncFit for wellness programs?",
    "How is Artificial Intelligence incorporated into LyncFit?",
    "Does LyncFit support group workouts?",
    "When is LyncFit launching?",
    "How does LyncFit contribute to environmental sustainability?",
    "What types of rewards or gamification does LyncFit offer?",
  ];

  const answers = [
    "LyncFit is an AI-powered fitness app that matches users with compatible workout partners to boost motivation, accountability, and long-term fitness consistency.",
    "LyncFit is tailored for fitness enthusiasts, including university students, young professionals, and newcomers who are seeking support, accountability, and companionship in their fitness journey.",
    "Yes, LyncFit partners with universities, corporate organisations, and gyms to enhance wellness and productivity through personalised fitness programs tailored to students, employees, and gym members.",
    "Our AI algorithm matches users based on factors such as fitness goals, preferences, location, and personality traits to ensure compatibility and optimal workout results.",
    "Yes! In addition to one-on-one matching, LyncFit supports group workouts where users can join or create workout groups based on shared interests and goals.",
    "LyncFit is scheduled to launch in the summer of 2025.",
    "For every new user or milestone achieved on the platform, we plant a tree through our partnership with Ecologi, promoting both personal health and environmental well-being.",
    "LyncFit rewards users with points based on the consistency of their connections, redeemable for fitness gear, food, and everyday essentials to keep them motivated.",
  ];

  return (
    <Grid container spacing={2} style={{ padding: '20px', justifyContent: 'center' }}>
      {questions.map((question, index) => (
        <Grid item xs={12} sm={6} key={index} style={{ maxWidth: '500px' }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                {question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{answers[index]}</Typography>
            </AccordionDetails>
            <Divider />
          </Accordion>
        </Grid>
      ))}
    </Grid>
  );
};

const ScreenYui = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Box sx={{ width: "100%", bgcolor: "#dedede" }}>

      {/* Menu Bar */}
      <AppBar position="static" sx={{ bgcolor: "white", boxShadow: 1 }}>
        <Toolbar>
            <Link to="/pages/HomePage.js" style={{ textDecoration: 'none' }}>
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
            <Link to="/pages/TeamPage.js" style={{ color: "#3f3f3f", textDecoration: 'none' }}> 
              The Team
            </Link>
           </Typography>

           <Typography
              variant="h6"
              component="div"
              sx={{ color: "#315fd9", textAlign: "right" }}
           >
            <Link to="/pages/ContactUs.js" style={{ color: "#315fd9", textDecoration: 'none' }}>
              Contact Us
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Home Page */}
      <Box
        sx={{
          height: 839,
          backgroundImage: `url(${background_photo})`,
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{ color: "white", fontWeight: "medium", textAlign: "center" }}
        >
          Connect, Train, Succeed Together.
        </Typography>
      </Box>

      <Container>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "medium" }}>
              Perfect Workout Partners.
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Find{" "}
              <span style={{ color: "#fc7032" }}>
                like-minded fitness buddies
              </span>{" "}
              who keep you motivated and on track.
            </Typography>
            
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{ width: "100%" }}
              alt="Beautiful athletic"
              src={couple_cyclist_photo}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{ width: "100%" }}
              alt="Unsplash image fieg"
              src={real_connections_photo              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "medium", textAlign: "right" }}>
              Real Connections.
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, textAlign: "right"}}>
              Build lasting fitness friendships, from{" "}
              <span style={{ color: "#315fd9" }}>long-term</span> buddies to{" "}
              <span style={{ color: "#fc7032" }}>real-time</span> workout
              partners.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "medium" }}>
              Consistency Rewards.
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Stay active, earn points, and unlock exclusive rewards for your{" "}
              <span style={{ color: "#315fd9" }}>dedication</span>.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{ width: "100%" }}
              alt="Unsplash image"
              src={consistency_reward_photo}
            />
          </Grid>
        </Grid>


        <Typography variant="h3" sx={{ fontWeight: "medium", mt: 4 }}>
          Learn More
        </Typography>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px'}} >
          <AccordionList />
        </div>

        <Box sx={{ mt: 4, bgcolor: "white", p: 4, borderRadius: 2 }}>
          <Grid container spacing = {4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: "medium" }}>
                Join the waitlist!
              </Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Be the first to know what we’re up to!
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="form" sx={{ mt: 4 }} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ bgcolor: "#315fd9", color: "white" }}
                    >
                      JOIN
                    </Button>
                  </Grid>
                </Grid>
                {submitted && (
                  <Typography
                    variant="body1"
                    sx={{ color: "green", mt: 2, textAlign: "center" }}
                  >
                    You have successfully enrolled into our waitlist!
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/*Footer*/}
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
