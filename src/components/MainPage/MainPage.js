import { useEffect, useState } from 'react';
import Image from 'mui-image';
// import Accolades from '../Accolades/Accolades';
import Testimonials from './Testimonials/Testimonials';
// import handshake from '../../assets/icons/deal.json'
// import { Grid } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
// import './MainPage.css';
import { CardContent } from '@material-ui/core';
import { Player } from '@lottiefiles/react-lottie-player';
import Comparison from './Comparison/Comparison.jsx';
import { useTheme } from '@mui/material/styles';
import AddressInput from './AddressInput/AddressInput';
import HowItWorks from './HowItWorks/HowItWorks';
import InsuranceOrFinancing from './InsuranceOrFinancing/InsuranceOrFinancing.jsx';

export default function MainPage({ address, setAddress }) {
  const theme = useTheme();

  return (
    <main width={"100%"}>
      <Grid container direction="column">
        <Grid 
        sx={{ 
          height:"38rem",
          position: 'relative',
          height: 800
        }}>
          <div style={{
            background: 'linear-gradient(to bottom, #062841 0%, rgba(0,0,255,0) 50%)'
          }}>
            <Image
              src={skyline}
              height="70%"
              width="100%"
              fit="cover"
              duration={3000}
              easing="ease-in"
              shiftDuration={900}
              bgColor="inherit"
              shift="top"
              style={{ zIndex: '-1', opacity: '0.5' }}
            />
          </div>

          <div style={{
            position: 'absolute',
            top: '15%',
            height: 200,
            padding: '5em'
          }}>
            <Typography variant="h2" padding="1rem">
              Getting a new roof is easier than ever. <br />Get an estimate in &lt; 24 hrs.
            </Typography>
            <TextField
              InputProps={{
                startAdornment: <InputAdornment position="start"><House /></InputAdornment>,
                sx: { borderRadius: 10 }
              }}
              sx={{
                backgroundColor: 'white',
                borderRadius: 10,
                width: '100%'
              }}
              placeholder="Enter your address"
            />
            <Typography variant="h5" padding="1em">
              Tell us what you want. We guarantee a quote at 95% accuracy.
            </Typography>
          </div>
        </Grid>
        <Grid padding={8} sx={{ backgroundColor: 'white', width: "100%"}}>
          <Stack>
            <Typography variant="h2" color="#062841" align="center" padding="1rem">
              How it works
            </Typography>
            <Grid container width="100%" spacing={5} margin={0}>
              <Grid xs={12} md={4}>
                <Card raised sx={{ height: "40rem", border: "solid 2px #062841", borderRadius: 5 }}>
                  <CardContent>
                    <Typography variant="h4" fontWeight="900" color="#062841" padding="2rem" align="center">
                      Choose your roof
                    </Typography>
                    <Typography variant="h5" color="#062841" align="center">
                      You choose your design, shingle, gutters, and color
                    </Typography>
                    {/* <Player
                      autoplay
                      loop
                      src={homeReport}
                      style={{ height: '300px', width: '300px' }}
                      speed={0.25}
                    >
                    </Player> */}
                    <Image
                      src={pickroof}
                      height="70%"
                      width="100%"
                      fit="cover"
                      shift="top"
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} md={4} >
                <Card raised sx={{ height: "40rem", border: "solid 2px #062841", borderRadius: 5 }}>
                  <CardContent>
                    <Typography variant="h4" fontWeight="900" color="#062841" padding="2rem" align="center">
                      We collect data
                    </Typography>
                    <Typography variant="h5" color="#062841" align="center" paddingBottom="1rem">
                      We use your address to pull a report on your home
                    </Typography>
                    <Image
                      style={{ padding: "3rem 2rem 2rem" }}
                      src={threeDHouse}
                      height="70%"
                      width="100%"
                      fit="cover"
                      shift="top"
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} md={4}>
                <Card raised sx={{ height: "40rem", border: "solid 2px #062841", borderRadius: 5 }}>
                  <CardContent>
                    <Typography variant="h4" fontWeight="900" color="#062841" padding="2rem" align="center">
                      Final approval
                    </Typography>
                    <Typography variant="h5" color="#062841" align="center" paddingBottom="1rem">
                      Onsite visit, final contract, and work begins
                    </Typography>
                    <Image
                      style={{ padding: "3rem 2rem 2rem" }}
                      src={handshake}
                      height="70%"
                      width="100%"
                      fit="cover"
                      shift="top"
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid
          height={theme.pageSection.height}
          sx={{
            paddingX: 8,
            backgroundColor: 'white'
          }}>
          <HowItWorks />
        </Grid>
        <Grid height={theme.pageSection.height}>
          <Comparison></Comparison>
        </Grid>
        <Grid sx={{ backgroundColor: "white", padding: theme.spacing(8) }}>

          <div className="elfsight-app-311f80b0-1119-4605-9f97-ef9b44c14721"></div>
        </Grid>
        <Grid height={theme.pageSection.height}>
          <InsuranceOrFinancing />
        </Grid>
        <Grid sx={{ backgroundColor: 'white', paddingY: '4rem' }}>

          <div className="elfsight-app-7eea6c14-0475-4b7c-bf9d-d722ba87642b"></div>
        </Grid>
      </Grid>
    </main>
  );
}
