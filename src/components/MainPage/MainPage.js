
import { useEffect, useState } from 'react';
import Image from 'mui-image';
// import Accolades from '../Accolades/Accolades';
import Testimonials from '../Testimonials/Testimonials';
// import Inspection from '../Inspection/Inspection';
// import Rooftops from '../Rooftops/Rooftops';
import skyline from '../../assets/images/skyline.jpg'
import pickroof from '../../assets/images/PickRoof.png'
import threeDHouse from '../../assets/images/3dhouse.jpg'
import handshake from '../../assets/images/handshake.jpg'
import homeReport from '../../assets/icons/contract.json'
import materials from '../../assets/icons/website.json'
import typeAddress from '../../assets/images/type-address.mp4'
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
// import './MainPage.css';
import { CardContent } from '@material-ui/core';
import { Player } from '@lottiefiles/react-lottie-player';
import Comparison from './Comparison/Comparison';
import HouseCarousel from './Carousel/Carousel';
import stockroofvid from '../../assets/images/stockroofvid.mp4'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { AddressAutofill } from '@mapbox/search-js-react';

export default function MainPage() {
  const [address, setAddress] = useState('')

  return (
    <main>
      <Grid container direction="column">
        <Grid height="pageSection.height" style={{ position: 'relative', height: 800 }}>
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
              style={{ zIndex: '-1', opacity: '0.3' }}
            />
          </div>
          <div style={{
            position: 'absolute',
            top: '15%',
            height: 200,
            padding: '5em'
          }}>
            <Typography variant="h2">
              Getting a new roof is easier than ever. <br />Get an estimate in &lt;24 hrs.
            </Typography>
            <FormControl
              sx={{
                backgroundColor: 'white',
                borderRadius: 10,
                marginRight: 2,
                width: '80%'
              }}
            >
              <AddressAutofill
                accessToken={process.env.REACT_APP_MAPBOX_API_KEY}
                options={{
                  language: 'en',
                  country: 'US',
                }}
                onRetrieve={({ features }) => setAddress(features[0].properties.place_name)}
              >
                <Input
                  disableUnderline
                  name="address"
                  type="text"
                  autoComplete="address-line1"
                  startAdornment={<InputAdornment position="start"><House /></InputAdornment>}
                  placeholder="Enter your address"
                  sx={{ borderRadius: 10, padding: '1rem', width: '100%' }}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}

                />
              </AddressAutofill>
            </FormControl>

            <Button
              variant="contained"
              sx={{ borderRadius: 10, height: 56, backgroundColor: 'secondary.main', ':hover': { backgroundColor: '#062841' } }}
            >
              Get Quote
            </Button>
            <Typography variant="h4" padding="1em" fontWeight={600}>
              <span style={{ color: "#c9a32c" }}>
                Provide an address &nbsp;
                <span style={{ color: 'white' }}>
                  &gt; &nbsp;
                </span>
                Select a roof &nbsp;
                <span style={{ color: 'white' }}>
                  &gt; &nbsp;
                </span>
                Get a price
              </span>
            </Typography>
          </div>
        </Grid>
        <Grid height='60rem' padding={8} sx={{ backgroundColor: 'white' }}>
          <Stack>
            <Typography variant="h2" color="#062841" align="center" fontWeight={600} padding="1rem">
              How it works
            </Typography>
            <Grid container width="100%" spacing={5} margin={0}>
              <Grid xs={4}>
                <Card elevation={24} sx={{ height: "40rem", border: "solid 2px #062841", borderRadius: 5 }}>
                  <CardContent>
                    <Typography variant="h4" fontWeight="900" color="#062841" padding="2rem" align="center">
                      Provide an address
                    </Typography>
                    <Typography variant="h5" color="#062841" align="center">
                      We use your address to collect data on your home
                    </Typography>
                    <video
                      src={typeAddress}
                      autoPlay
                      loop
                      muted
                      preload='auto'
                      height="70%"
                      width="100%"
                    >
                    </video>
                    {/* <Image
                      src={pickroof}
                      height="70%"
                      width="100%"
                      fit="cover"
                      shift="top"
                    /> */}
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={4} >
                <Card elevation={24} sx={{ height: "40rem", border: "solid 2px #062841", borderRadius: 5 }}>
                  <CardContent>
                    <Typography variant="h4" fontWeight="900" color="#062841" padding="2rem" align="center">
                      We collect data
                    </Typography>
                    <Typography variant="h5" color="#062841" align="center" paddingBottom="1rem">
                      You choose your design, shingle, gutters, and color
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
                <Card elevation={24} sx={{ height: "40rem", border: "solid 2px #062841", borderRadius: 5 }}>
                  <CardContent>
                    <Typography variant="h4" fontWeight="900" color="#062841" padding="2rem" align="center">
                      Final approval
                    </Typography>
                    <Typography variant="h5" color="primary" align="center" paddingBottom="1rem">
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
        <Grid height="60rem">
          <Comparison></Comparison>
        </Grid>
        <Grid height="60rem">
          <Testimonials name='Testimonials' />
        </Grid>
        {/* <HouseCarousel></HouseCarousel> */}
      </Grid>
      {/* <Inspection name='Inspection' />
      <Accolades name='Accolades' />
      <Rooftops name='Rooftops' /> */}
    </main>
  );
}
