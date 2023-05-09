
import Image from 'mui-image';
import Accolades from './Accolades/Accolades';
import Testimonials from './Testimonials/Testimonials';
import Inspection from './Inspection/Inspection';
import Rooftops from './Rooftops/Rooftops';
import skyline from '../../assets/images/skyline.jpg'
import homeReport from '../../assets/icons/contract.json'
import materials from '../../assets/icons/website.json'
import handshake from '../../assets/icons/deal.json'
// import { Grid } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import House from '@mui/icons-material/House';
import Card from '@mui/material/Card';
import './MainPage.css';
import { CardContent } from '@material-ui/core';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function MainPage() {
  return (
    <main>
      <Grid container direction="column">
        <Grid style={{
          position: 'relative',
          height: 800
        }}>
          <div style={{
            background: 'linear-gradient(to bottom, #062841 0%, rgba(0,0,255,0) 50%)'
          }}>
            <Image
              src={skyline}
              height="100%"
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
            top: '20%',
            height: 200,
            padding: '2em'
          }}>
            <Typography variant="h2" padding="1rem">
              Home improvement is easier than ever. <br />Get an instant quote.
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
              Get a quote in less than 1 day. We're diamond certified. See our reviews on Google
            </Typography>
          </div>
        </Grid>
        <Grid height='800px' sx={{ backgroundColor: 'white' }}>
          <Stack>
            <Typography variant="h2" color="#062841" align="center" padding="1em">
              Three steps start to finish
            </Typography>
            <Grid container width="100%" spacing={5} margin={0}>
              <Grid xs={4}>
                <Card raised sx={{ height: "32rem", border: "solid 10px #062841", borderRadius: 5 }}>
                  <CardContent>
                    <Typography variant="h5" color="#062841" padding="2rem">
                      We pull data for dimensions, measurements, and a report on your home
                    </Typography>
                    <Player
                      autoplay
                      loop
                      src={homeReport}
                      style={{ height: '300px', width: '300px' }}
                      speed={0.25}
                    >
                    </Player>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={4} >
                <Card raised sx={{ height: "32rem", border: "solid 10px #062841", borderRadius: 5 }}>
                  <CardContent>
                    <Typography variant="h5" color="#062841" padding="2rem">
                      Material selection and financing
                    </Typography>
                    <Player
                      autoplay
                      loop
                      src={materials}
                      style={{ height: '300px', width: '300px' }}
                      speed={0.25}
                    >
                    </Player>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={4}>
                <Card raised sx={{ height: "32rem", border: "solid 10px #062841", borderRadius: 5 }}>
                  <CardContent>
                    <Typography variant="h5" color="#062841" padding="2rem">
                      Final contract and work begins
                    </Typography>
                    <Player
                      autoplay
                      loop
                      src={handshake}
                      style={{ height: '300px', width: '300px' }}
                      speed={0.25}
                    >
                    </Player>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

          </Stack>
        </Grid>
        <Grid height='800px'>
          <Paper>
            <Grid container>
            <Grid container xs={6} spacing={2} sx={{padding: '5rem', '& > div': { border: 'solid black 5px'} }}>
              <Grid xs={6}>
                <Typography>
                  Gates
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography>
                  Other guys
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography>
                  Cool
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography>
                  Gay
                </Typography>
              </Grid>
            </Grid>

            <Grid xs={6}>

            </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {/* <Inspection name='Inspection' />
      <Accolades name='Accolades' />
      <Testimonials name='Testimonials' />
      <Rooftops name='Rooftops' /> */}
    </main>
  );
}
