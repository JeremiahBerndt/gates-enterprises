import { Typography } from '@mui/material';
import Image from 'mui-image';
import { useTheme } from '@material-ui/core';
import commercial from '../../assets/images/commercial.png';
import commercialroof from '../../assets/images/commercialroof.png';
import clientsatisfaction from '../../assets/images/clientsatisfaction.png';
import threeDHouse from '../../assets/images/3dhouse.jpg'
import commercialslides from '../../assets/images/commercialslides.png';
import { Helmet } from 'react-helmet-async';
import './Commercial.css';

export default function Commercial({ name }) {
  const theme = useTheme();

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
      <section className={`page-content page-single ${name}`}>
        <div className='commercial-section'>
          <img src={commercialroof} alt="Commercial roof"></img>
          <img src={commercial} alt="Commercial roof writeup"></img>
        </div>
        <div className='commercial-section'>
          <img className='slides' src={commercialslides} alt="Commercial roof 1"></img>
          <img className='slides' src={clientsatisfaction} alt="Commercial roof 2"></img>
        </div>
      </section>
    </>
  );
}
