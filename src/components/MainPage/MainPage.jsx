import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import './MainPage.css';
import { useTheme } from '@mui/material/styles';
import roofsystem from '../../assets/images/roofsystem.jpg'
import moreHail from '../../assets/images/moreHail.png'
import Comparison from './Comparison/Comparison.jsx';
import AddressInput from './AddressInput/AddressInput';
import InsuranceOrFinancing from './InsuranceOrFinancing/InsuranceOrFinancing.jsx';
import HowItWorks from './HowItWorks/HowItWorks';

export default function MainPage({ address, setAddress }) {
  const theme = useTheme();

  useEffect(() => {
    const script = document.createElement('script');
    const insertHere = document.getElementById('placeForRoofle')
    script.src = "https://app.roofle.com/roof-quote-pro-widget.js?id=Y3dZuVyicM3rboTdAfQ_S";
    script.async = true;
    insertHere.appendChild(script);

    return () => {
      insertHere.removeChild(script);
    }
  }, []);

  return (
    <main>
      <Grid container direction="column">
        {/*ROOFLE*/}
        <Grid id="placeForRoofle"></Grid>
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
          p: '1rem',
          [theme.breakpoints.up('lg')]: {
            p: '5rem'
          },
          background: 'repeating-radial-gradient( circle at 75% 100%,  #fff, lightgray 32rem)'
        }}>
          <HowItWorks/>
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
        <Grid sx={{
          backgroundColor: "white",
          p: '1rem',
          [theme.breakpoints.up('lg')]: {
            px: '5rem'
          }
        }}>
          <img width="100%" src={roofsystem} alt="roof system and accolades" />
        </Grid>
        <Grid sx={{ backgroundColor: 'white', paddingY: '4rem' }}>
          <div className="elfsight-app-7eea6c14-0475-4b7c-bf9d-d722ba87642b"></div>
        </Grid>
      </Grid>
    </main>
  );
}
