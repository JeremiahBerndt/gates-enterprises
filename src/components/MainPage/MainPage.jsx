import { useEffect, useState, lazy, Suspense } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import roofsystem from '../../assets/images/roofsystem.jpg'
const Comparison = lazy(() => import('./Comparison/Comparison.jsx'));
const InsuranceOrFinancing = lazy(() => import('./InsuranceOrFinancing/InsuranceOrFinancing.jsx'));
const HowItWorks = lazy(() => import('./HowItWorks/HowItWorks.jsx'));
import AddressInput from './AddressInput/AddressInput';
import './MainPage.css';

export default function MainPage({ displayContactForm }) {
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
      <Helmet>
        <title>Gates Enterprises #1 Choice for Best Roofer | Repair and Replacement</title>
        <meta name="description" content="Get a free roof inspection and quote from the best roofers. Top-quality materials, expert installation, and guaranteed satisfaction!" />
        <link rel="canonical" href="https://www.gatesroof.com/" />
      </Helmet>
      <Grid container direction="column">
        {/*ROOFLE*/}
        <Grid item id="placeForRoofle"></Grid>
        <Grid item
          sx={{
            height: "40rem",
            position: 'relative',
            [theme.breakpoints.up('md')]: {
              height: '50rem'
            }
          }}
        >
          <AddressInput />
        </Grid>
        <Grid item sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          p: '1rem',
          [theme.breakpoints.up('lg')]: {
            p: '5rem'
          },
          background: 'repeating-radial-gradient( circle at 75% 100%, #fff, lightgray 32rem)'
        }}>
          <Suspense
            fallback={
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem' }}>
                <CircularProgress sx={{ p: '10rem' }} size={32} color="inherit" />
              </div>
            }>
            <HowItWorks />
          </Suspense>
        </Grid>
        <Grid item sx={{
          height: "100%",
          position: 'relative',
          px: '1rem',
          py: '4rem',
          [theme.breakpoints.up('lg')]: {
            p: '5rem'
          }
        }}>
          <Suspense
            fallback={
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem' }}>
                <CircularProgress sx={{ p: '10rem' }} size={32} color="inherit" />
              </div>
            }>
            <Comparison />
          </Suspense>
        </Grid>
        <Grid item sx={{
          backgroundColor: 'white',
          p: '1rem',
          [theme.breakpoints.up('lg')]: {
            p: '5rem'
          }
        }}>
          <div style={{ maxWidth: 'calc(100vw - 2rem)' }} className="elfsight-app-311f80b0-1119-4605-9f97-ef9b44c14721"></div>
        </Grid>
        <Grid item sx={{
          position: 'relative',
          height: '100%',
          [theme.breakpoints.down('xs')]: { height: '100rem' },
          [theme.breakpoints.only('sm')]: { height: '78rem' },
          [theme.breakpoints.up('md')]: { height: '100%' },
        }}>
          <Suspense
            fallback={
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem' }}>
                <CircularProgress sx={{ p: '10rem' }} size={32} color="inherit" />
              </div>
            }>
            <InsuranceOrFinancing />
          </Suspense>
        </Grid>
        <Grid item sx={{
          backgroundColor: "white",
          p: '1rem',
          [theme.breakpoints.up('lg')]: {
            px: '5rem'
          }
        }}>
          <img width="100%" src={roofsystem} alt="roof system and accolades" />
        </Grid>
        <Grid item sx={{ backgroundColor: 'white', paddingY: '4rem' }}>
          <div className="elfsight-app-7eea6c14-0475-4b7c-bf9d-d722ba87642b"></div>
        </Grid>
      </Grid>
    </main>
  );
}
