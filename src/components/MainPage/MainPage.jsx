import { useEffect, useState, lazy, Suspense } from 'react';
import { Grid, CircularProgress, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
// import ArrowDropDown from '@material-ui/icons/KeyboardArrowDown';
import roofsystem from '../../assets/images/roofsystem.jpg'
// import { ReactComponent as Iowa } from '../../assets/images/Iowa.svg';
// import { ReactComponent as Colorado } from '../../assets/images/Colorado.svg';
// import { ReactComponent as Nebraska } from '../../assets/images/Nebraska.svg';
// import { ReactComponent as Missouri } from '../../assets/images/Missouri.svg';
const Comparison = lazy(() => import('./Comparison/Comparison.jsx'));
const InsuranceOrFinancing = lazy(() => import('./InsuranceOrFinancing/InsuranceOrFinancing.jsx'));
const HowItWorks = lazy(() => import('./HowItWorks/HowItWorks.jsx'));
import AddressInput from './AddressInput/AddressInput';
import './MainPage.css';

export default function MainPage({ displayContactForm }) {
  const theme = useTheme();
  // const [expanded, setExpanded] = useState(false);
  // const [hoverState, setHoverState] = useState(false);

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
        <title>Gates Enterprises Homepage | Roofing with Values </title>
        <meta name="description" content="Instant roof quote, company reviews, hail damage, and info on filing a claim." />
        <link rel="canonical" href="https://www.gatesroof.com/" />
      </Helmet>
      <Grid container direction="column">
        {/* <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)} sx={{
        }}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{
            '> div': {
              margin: '8px!important',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }
          }}>
            <ArrowDropDown aria-label='chevron drop down' />
            <Typography variant="h5" color="primary.main">GATES IS GROWING - STATES WE SERVE</Typography>
            <ArrowDropDown aria-label='chevron drop down' />
          </AccordionSummary>
          <AccordionDetails sx={{
            backgroundColor: "tertiary.main",
          }}>
            <Typography align="center" variant="h4" fontSize="1.5rem" color="white">Get connected with a pro in your area!</Typography>
            <Grid sx={{
              display: 'flex',
              '> div': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }
            }}>
              <Grid item xs={6} lg={3}>
                <Colorado alt="state of Colorado" width="200px" height="200px" fill={hoverState === 'colorado' ? '#c9a32c' : 'white'}
                  cursor="pointer"
                  onMouseEnter={() => setHoverState('colorado')}
                  onMouseLeave={() => setHoverState(false)}
                  onClick={displayContactForm}
                />
                <Typography variant="h4" color={hoverState === 'colorado' ? "primary.main" : "white"} pt="0">COLORADO</Typography>
              </Grid>
              <Grid item xs={6} lg={3}>
                <Iowa alt="state of Iowa" width="200px" height="200px" fill={hoverState === 'iowa' ? '#c9a32c' : 'white'}
                  cursor="pointer"
                  onMouseEnter={() => setHoverState('iowa')}
                  onMouseLeave={() => setHoverState(false)}
                  onClick={displayContactForm}
                />
                <Typography variant="h4" color={hoverState === 'iowa' ? "primary.main" : "white"} pt="0">IOWA</Typography>
              </Grid>
              <Grid item xs={6} lg={3}>
                <Nebraska alt="state of Nebraska" width="200px" height="200px" fill={hoverState === 'nebraska' ? '#c9a32c' : 'white'}
                  cursor="pointer"
                  onMouseEnter={() => setHoverState('nebraska')}
                  onMouseLeave={() => setHoverState(false)}
                  onClick={displayContactForm}
                />
                <Typography variant="h4" color={hoverState === 'nebraska' ? "primary.main" : "white"} pt="0">NEBRASKA</Typography>
              </Grid>
              <Grid item xs={6} lg={3}>
                <Missouri alt="state of Missouri" width="200px" height="200px" fill={hoverState === 'missouri' ? '#c9a32c' : 'white'}
                  cursor="pointer"
                  onMouseEnter={() => setHoverState('missouri')}
                  onMouseLeave={() => setHoverState(false)}
                  onClick={displayContactForm}
                />
                <Typography variant="h4" color={hoverState === 'missouri' ? "primary.main" : "white"} pt="0">MISSOURI</Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion> */}
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
