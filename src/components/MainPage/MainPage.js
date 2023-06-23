import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import './MainPage.css';
import Comparison from './Comparison/Comparison.jsx';
import { useTheme } from '@mui/material/styles';
import AddressInput from './AddressInput/AddressInput';
import HowItWorks from './HowItWorks/HowItWorks';
import InsuranceOrFinancing from './InsuranceOrFinancing/InsuranceOrFinancing.jsx';

export default function MainPage({ address, setAddress }) {
  const theme = useTheme();

  return (
    <main>
      <Grid container direction="column">
        <Grid
          sx={{
            height: "40rem",
            position: 'relative',
            [theme.breakpoints.up('md')]: {
              height: '50rem'
            }
          }}
        >
          <AddressInput
            address={address}
            setAddress={setAddress}
          />
        </Grid>
        <Grid sx={{
          height: "100%",
          p: '5rem',
          backgroundColor: 'white'
        }}>
          {/* <HowItWorks /> */}
        </Grid>
        <Grid sx={{
          height: "100%",
          position: 'relative',
          px: '1rem',
          py: '4rem',
          [theme.breakpoints.up('lg')]: {
            p: '5rem'
          }
        }}>
          <Comparison />
        </Grid>
        <Grid sx={{
          backgroundColor: "white",
          p: '1rem',
          [theme.breakpoints.up('lg')]: {
            p: '5rem'
          }
        }}>
          <div className="elfsight-app-311f80b0-1119-4605-9f97-ef9b44c14721"></div>
        </Grid>
        <Grid sx={{
          position: 'relative',
          height: '100%',
          [theme.breakpoints.down('xs')]: { height: '100rem' },
          [theme.breakpoints.only('sm')]: { height: '78rem' },
          [theme.breakpoints.up('md')]: { height: '100%' },
        }}>
          <InsuranceOrFinancing />
        </Grid>
        <Grid>
          <img />
        </Grid>
        <Grid sx={{ backgroundColor: 'white', paddingY: '4rem' }}>
          <div className="elfsight-app-7eea6c14-0475-4b7c-bf9d-d722ba87642b"></div>
        </Grid>
      </Grid>
    </main>
  );
}
