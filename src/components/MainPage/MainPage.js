
import Image from 'mui-image';
// import Accolades from '../Accolades/Accolades';
// import Testimonials from './Testimonials/Testimonials';
// import Inspection from '../Inspection/Inspection';
// import Rooftops from '../Rooftops/Rooftops';
import skyline from '../../assets/images/skyline.jpg'
import pickroof from '../../assets/images/PickRoof.png'
import threeDHouse from '../../assets/images/3dhouse.jpg'
import handshake from '../../assets/images/handshake.jpg'
import homeReport from '../../assets/icons/contract.json'
import materials from '../../assets/icons/website.json'
// import handshake from '../../assets/icons/deal.json'
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
import { Player } from '@lottiefiles/react-lottie-player';
import Comparison from './Comparison/Comparison';
import HouseCarousel from './Carousel/Carousel';
import stockroofvid from '../../assets/images/stockroofvid.mp4'

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
        <Grid height='60rem' padding={8} sx={{ backgroundColor: 'white' }}>
          <Stack>
            <Typography variant="h2" color="#062841" align="center" padding="1rem">
              How it works
            </Typography>
            <Grid container width="100%" spacing={5} margin={0}>
              <Grid xs={4}>
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
              <Grid xs={4} >
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
              <Grid xs={4}>
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
          // sx={{ backgroundImage: `src(${stockroofvid})` }}
        >
          <Comparison></Comparison>
        </Grid>
        <Grid>
          {/* <HouseCarousel></HouseCarousel> */}
        </Grid>
      </Grid>
      {/* <Inspection name='Inspection' />
      <Accolades name='Accolades' />
      <Testimonials name='Testimonials' />
      <Rooftops name='Rooftops' /> */}
    </main>
  );
}
