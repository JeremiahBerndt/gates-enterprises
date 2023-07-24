import { Typography, Paper, Box } from '@mui/material';
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
          <div className='container'>
          <img src={commercialroof} alt="Commercial roof"></img>
          <Box className={"box"} square>
          
          <Typography variant="h4" color="primary.main">
            Commercial Roofing Solutions
          </Typography>
            <Typography variant="body1" color="primary.main" display='block'>
              From humble beginnings, Gates Enterprises has evolved into a commercial roofing leader by bringing a wealth of industry experience and knowledge to complex and unique commercial projects. Since 2014 Gates has assisted small businesses, property owners, management companies, HOA communities, muti-family dwellings, churches, schools and government agencies with roof repair and replacement.
              <br></br>
              <br></br>
              Our dedicated team has earned us a strong reputation for offering premium roofing solutions that you can depend on.
              <br></br>
              <br></br>
              <div>
              <Typography variant='body2' >
              Commited project manger on every commercial project, to oversee the project from start to finish. This ensures that every stage of the process complies with Gates high quality standards.
              <br></br>
              <br></br>
              The Gates Enterprises crew is committed to providing world-class craftsmanship during roof installation which allows us to confidently guarantee long term quality.
              <br></br>
              <br></br>
              We offer customized preventative maintenance programs, which include scheduled inspections and access to our roofing experts for quick response emergency repairs.
              </Typography>
              </div>
            </Typography>
          
          </Box>
          </div>
          </div>
        <div className='commercial-section'>
          {/* <img className='slides' src={commercialslides} alt="Commercial roof 1"></img> */}
          <Box sx={{
            width: '48%',
            backgroundColor: 'red'
          }}>
          </Box>
          {/* <img className='slides' src={clientsatisfaction} alt="Commercial roof 2"></img> */}
          <Box sx={{
            padding: '2em',
            backgroundColor: 'white'
          }}>
          <Typography variant='h4' color="primary.main" sx={{
              fontWeight: 'thin',
          }}>
            OUR GOAL %100 CLIENT SATISFACTION
          </Typography>
          <Typography variant='body2' color='primary.main' display='block'>
            Andrew Gates has perfomed countless roofing jobs for me over the last five years or so. His level of quality, service, and follow-through is head and shoulders above any roofing resource I have used prior to meeting Andrew. I would not hesitate to send any friend or client of mine his way for any kind of roofing job. <br></br>- Clem  Rinehart<br></br><br></br>Wouldn't work with any other roofer! These guys have never let me down personally or professionaly with my real estate clients. Andrew is an expert at negotiating with insurance companies to get your dammaged roof covered. If they say they're going to do something they do it! Thank you for your professionalism, responsiveness, and exellent customer service GE.<br></br>-Brianne Smith
          </Typography>
          </Box>
        </div>
      </section>
    </>
  );
}
