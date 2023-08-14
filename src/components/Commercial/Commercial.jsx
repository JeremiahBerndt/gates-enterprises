import { useRef } from 'react';
import { Typography, Grid, useTheme } from '@mui/material';
import Image from 'mui-image';
import commercial from '../../assets/images/commercial.png';
import commercialroof from '../../assets/images/commercialroof.png';
import clientsatisfaction from '../../assets/images/clientsatisfaction.png';
import threeDHouse from '../../assets/images/3dhouse.jpg'
import commercialslides from '../../assets/images/commercialslides.png';
import { ReactComponent as Checked } from '../../assets/icons/checked.svg';
import { Helmet } from 'react-helmet-async';
import { slideFromRight, useIsVisible, slideFromLeft } from '../../util/animations';
import './Commercial.css';

export default function Commercial({ name }) {
  const theme = useTheme();
  const refQuality = useRef(null);

  return (
    <>
      <Helmet>
        <title>Commercial Roofing Solutions</title>
        <meta name="description" content="Information on commercial roofing products and services" />
        <link rel="canonical" href="https://www.gatesroof.com/commercial" />
      </Helmet>
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: theme.spacing(32)
      }}>
        <Image
          top='0'
          src={threeDHouse}
          height="100%"
          width="100%"
          fit="cover"
          bgColor="inherit"
          style={{ zIndex: '-1', opacity: '0.3', position: 'absolute' }}
        />
        <Typography variant="h1" align="center" sx={{
          position: 'absolute',
          fontSize: '3rem',
          [theme.breakpoints.up('lg')]: {
            fontSize: '6rem'
          }
        }}>
          Commercial
        </Typography>
      </div>
      <Grid
        container
        sx={{
          backgroundColor: 'white',
          [theme.breakpoints.down('md')]: { flexDirection: 'column' }
        }}>
        <Grid item xs={12} lg={6} sx={{
          p: '2rem',
          [theme.breakpoints.up('lg')]: {
            p: '8rem 4rem 8rem 8rem'
          }
        }}
        >
          <img
            src={commercialroof}
            alt="Services"
            style={{ width: '100%', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={12} lg={6} className={slideFromRight} sx={{
          p: '2rem',
          pt: 0,
          [theme.breakpoints.up('lg')]: {
            p: '8rem 8rem 8rem 4rem'
          }
        }}>
          <Typography variant="h4" color="primary.main">
            Commercial Roofing Solutions
          </Typography>
          <Typography variant="body1" color="primary.main">
            From humble beginnings, Gates Enterprises has evolved into a commercial roofing leader by bringing a wealth of industry
            experience and knowledge to complex and unique commercial projects. Since 2014 Gates has assisted small businesses, property
            owners, management companies, HOA communities, muti-family dwellings, churches, schools and government agencies with roof
            repair and replacement.
          </Typography>
          <Typography variant="h5" color="secondary.main" sx={{ pt: '2rem' }}>
            Our dedicated team has earned us a strong reputation for offering premium roofing solutions that you can depend on.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        ref={refQuality}
        className={useIsVisible(refQuality) ? slideFromLeft : ''}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
          },
          '> div': {
            padding: '2rem',
            [theme.breakpoints.up('md')]: {
              padding: '4rem'
            },
          }
        }}>
        <Grid item xs={12} lg={4}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Checked fill={"#c9a32c"} width="64px" height="64px" />
          </div>
          <Typography variant="h6" align="center" sx={{ '> span': { p: '2rem' }, pt: '2rem' }}>
            Committed project manager on every commercial project, to oversee the project form start to finish.
            This ensures that every stage of the process complies with Gates high quality standards.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Checked fill={"#c9a32c"} width="64px" height="64px" />
          </div>
          <Typography variant="h6" align="center" sx={{ '> span': { p: '2rem' }, pt: '2rem' }}>
            The Gates Enterprises crew is committed to providing world-class craftsmanship during roof installation
            which allows us to confidentially guarantee long term quality.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Checked fill={"#c9a32c"} width="64px" height="64px" />
          </div>
          <Typography variant="h6" align="center" sx={{ '> span': { p: '2rem' }, pt: '2rem' }}>
            We offer customized preventative maintenance programs, which include scheduled inspections and access
            to our roofing experts for quick response emergency repairs.
          </Typography>
        </Grid>
      </Grid>
        <div className='commercial-section'>
          <img className='slides' src={commercialslides} alt="Commercial roof 1"></img>
          <img className='slides' src={clientsatisfaction} alt="Commercial roof 2"></img>
        </div>
      {/* <div className='container'>
        <img src={commercialroof} alt="Commercial roof"></img>
      </div> */}
    </>
  );
}
