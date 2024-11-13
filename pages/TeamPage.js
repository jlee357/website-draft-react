import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Instagram, LinkedIn } from "@mui/icons-material"
import {
    AppBar,
    Avatar,
    Box,
    Container,
    Grid,
    IconButton,
    Link,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import lyncfit_logo from "./img/LyncFit_Logo.jpg";
import Emmanuel from "./img/Team/Emmanuel.jpg";
import Inheritance from "./img/Team/Inheritance.jpg";
import Olamide from "./img/Team/Olamide.jpg";
import Joseph from "./img/Team/Joseph.jpg";
import Dharmanshi from "./img/Team/Dharmanshi.jpg"
import Anthony from "./img/Team/Anthony.png"
import Joanne from "./img/Team/Joanne.jpg"

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

const teamMembers = [
  {
    name: "Emmanuel Dei",
    title: "Co-Founder & CEO",
    image: Emmanuel,
    linkedIn: true,
    linkedInUrl: "https://www.linkedin.com/in/emmanuel-dei/"
  },
  {
    name: "Inheritance Odili",
    title: "Co-Founder & COO",
    image: Inheritance,
    linkedIn: true,
    linkedInUrl: "https://www.linkedin.com/in/inheritance-odili/"
  },
  {
    name: "Olamide Batula",
    title: "CMO",
    image: Olamide,
    linkedIn: true,
    linkedInUrl: "https://www.linkedin.com/in/olamide-batula-71480a1b0/"
  },
  {
    name: "Joseph Gbadebo",
    title: "Marketing Lead",
    image: Joseph,
    linkedIn: true,
    linkedInUrl: "https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.lyncfit.co.uk/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjoseph-gbadebo09%2F"
  },
  {
    name: "Dharmanshi Sangani",
    title: "CTO",
    image: Dharmanshi,
    linkedIn: true,
    linkedInUrl: "https://www.linkedin.com/in/dharmanshi-sangani-172b9719b/"
  },
  {
    name: "Anthony Imafidon",
    title: "Backend Engineer Intern",
    image: Anthony,
    linkedIn: true,
    linkedInUrl: "https://www.linkedin.com/in/anthony-imafidon-127482130/"
  },
  {
    name: "Joanne Lee",
    title: "Frontend Engineer Intern",
    image: Joanne,
    linkedIn: true,
    linkedInUrl: "https://www.linkedin.com/in/joan-lee-668b4a235/"
  },
];

const ScreenYui = () => {
    return (
        <Box sx={{ width: "100%", height: "100%", bgcolor: "background.paper" }}>
          
          {/*Menu Bar*/}
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

        <Box
          sx={{
            width: "75%",
            position: "relative",
            margin: "0 auto",
            mt: 4,
          }}
        >
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h2" sx={{ fontWeight: 500 }}>
              Meet the LyncFit team...
            </Typography>
          </Box>
          <Grid container spacing={4} sx={{ mt: 4, justifyContent: "center" }}>
            {teamMembers.map((member, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={
                index < 2 || index > 4
                  ? 6
                  : 4
              }
              md={
                index < 2 || index > 4
                  ? 6
                  : 4
              }
              sx={{ textAlign: "center" }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 241, height: 241, margin: "0 auto" }}
              />
              <Typography variant="h4" sx={{ fontWeight: 500, mt: 2 }}>
                {member.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "#212020" }}>
                {member.title}
              </Typography>
              {member.linkedIn && (
                <Link
                  href={member.linkedInUrl}
                  target="_blank"
                  rel="noopener"
                  sx={{ mt: 1, display: 'inline-flex' }}
                >
                  <LinkedInIcon />
                </Link>
              )}
            </Grid>  
          ))}
        </Grid>
      </Box>

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