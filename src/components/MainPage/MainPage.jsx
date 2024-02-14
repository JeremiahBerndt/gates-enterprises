import { useEffect, useState, lazy, Suspense } from 'react';
import { Grid, CircularProgress, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ArrowDropDown from '@material-ui/icons/KeyboardArrowDown';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import roofsystem from '../../assets/images/roofsystem.jpg'
import solarpro from '../../assets/images/solar-pro.png'
import solarlearn from '../../assets/images/solar-learn.png'
const Comparison = lazy(() => import('./Comparison/Comparison.jsx'));
const InsuranceOrFinancing = lazy(() => import('./InsuranceOrFinancing/InsuranceOrFinancing.jsx'));
const HowItWorks = lazy(() => import('./HowItWorks/HowItWorks.jsx'));
import AddressInput from './AddressInput/AddressInput';
import './MainPage.css';

export default function MainPage({ displayContactForm }) {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [hoverState, setHoverState] = useState(false);

  // console.log('hover', hoverState)

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
        <title>Gates Enterprises The #1 Choice for Roofing | Repair and Replacement</title>
        <meta name="description" content="Get a free roof inspection or quote from the most trusted, relaible, and best roofer in Colorado. Top-quality materials, expert installation, and guaranteed satisfaction!" />
        <link rel="canonical" href="https://www.gatesroof.com/" />
      </Helmet>
      <Grid container direction="column">
        <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)} sx={{ bgcolor: 'secondary.main' }}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{
            '> div': {
              margin: '8px!important',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }
          }}>
            <ArrowDropDown aria-label='chevron drop down' />
            <Typography variant="h5" color="primary.main">GO SOLAR! - GET THE FACTS FROM A PRO</Typography>
            <ArrowDropDown aria-label='chevron drop down' />
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "white" }}>
            {/* <Typography align="center" variant="h4" fontSize="1.5rem" color="white">DITCH THE ELECTRIC BILL - GO GREEN</Typography> */}
            <Grid container
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                '> div': {
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: 'solid 12px',
                  borderRadius: '32px',
                  height: '32em',
                  my: '1em'
                }
              }}>
              <Grid item sm={12} lg={5}
                color={hoverState === 'pro' ? 'secondary.main' : 'primary.main'}
                onMouseEnter={() => setHoverState('pro')}
                onMouseLeave={() => setHoverState(false)}
                onClick={displayContactForm}
              >
                <Typography variant="h2" fontSize="48px" color="primary.main" p="0" >Talk to a Pro</Typography>
                <Typography variant="h5" align="center" color="primary.main" >Find out how solar can work for you</Typography>

                <img
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  src={solarpro}
                />
              </Grid>
              <Grid item sm={12} lg={5}
                color={hoverState === 'learn' ? 'secondary.main' : 'primary.main'}
                cursor="pointer"
                onMouseEnter={() => setHoverState('learn')}
                onMouseLeave={() => setHoverState(false)}
                onClick={displayContactForm}
              >
                <Typography variant="h2" fontSize="48px" color="primary.main" p="0" >Learn More</Typography>
                <Typography variant="h5" align="center" color="primary.main" >Get more info and see what you could save</Typography>

                <img
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  src={solarlearn}
                />
              </Grid>

            </Grid>
          </AccordionDetails>
        </Accordion>
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
