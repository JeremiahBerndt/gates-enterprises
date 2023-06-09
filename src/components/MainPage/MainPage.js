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

export default function MainPage() {
  const theme = useTheme();
  const [address, setAddress] = useState('')

  return (
    <main>
      <Grid container direction="column">
        <Grid height="50rem" style={{ position: 'relative' }}>
          <AddressInput
            address={address}
            setAddress={setAddress}
          />
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
          {/*REVIEWS*/}
          <div className="elfsight-app-311f80b0-1119-4605-9f97-ef9b44c14721"></div>
        </Grid>
        <Grid height={theme.pageSection.height}>
          <InsuranceOrFinancing />
        </Grid>
        <Grid sx={{ backgroundColor: 'white', paddingY: '4rem' }}>
          {/*COUNTER*/}
          <div className="elfsight-app-7eea6c14-0475-4b7c-bf9d-d722ba87642b"></div>
        </Grid>
      </Grid>
    </main>
  );
}
