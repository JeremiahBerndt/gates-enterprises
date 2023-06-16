import './WhoWeAre.css';
import { Grid, Stack, Typography } from '@mui/material';
import Image from 'mui-image';
import { useTheme } from '@material-ui/core';
import houseImage from '../../assets/images/WhoWeAre.png';
import house1 from '../../assets/images/house1.png';
import house2 from '../../assets/images/house2.png';
import house3 from '../../assets/images/house3.png';
import house4 from '../../assets/images/house4.png';
import house5 from '../../assets/images/house5.png';
import house6 from '../../assets/images/house6.png';
import house7 from '../../assets/images/house7.png';
import house8 from '../../assets/images/house8.png';
import house11 from '../../assets/images/house11.png';

export default function WhoWeAre({ name }) {
  const theme = useTheme();

  return (
    <Stack>
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: theme.spacing(32)
      }}>
        <Image
          top='0'
          src={house6}
          height="100%"
          width="100%"
          fit="cover"
          bgColor="inherit"
          style={{ zIndex: '-1', opacity: '0.3', position: 'absolute' }}
        />
        <Typography variant="h1" align="center" sx={{ position: 'absolute' }}>
          Who We Are
        </Typography>
      </div>
      <Grid container backgroundColor='white'>
        <Grid xs={6}>
          <img
            src={houseImage}
            alt="Services"
            style={{
              width: '100%',
              padding: '6rem',
              objectFit: 'cover'
            }}
          />
        </Grid>
        <Grid xs={6} sx={{ padding: '6rem' }}>
          <Typography variant="h4" color="primary.main">
            The Most Equipped Company for the Job
          </Typography>
          <Typography variant="body1" color="primary.main" sx={{ pb: '32px' }}>
            Gates Enterprises LLC is committed to providing our customers with an
            unparalleled level of expertise and customer service in all our
            re-roofing projects. We are a small team hand picked for their
            expertise in exteriors construction and insurance claim management.
          </Typography>
          <Typography variant="h4" color="primary.main">
            Roofing with Values
          </Typography>
          <Typography variant="body1" color="primary.main">
            If you are overwhelmed or stressed about hail damage to your
            property; or simply have high expectations for anyone providing work
            or services on your largest investment; you have found the most
            equipped company for the job. Call or email us now for a complimentary
            and honest inspection at your property.
          </Typography>
        </Grid>
      </Grid>
    </Stack>

    //   <div className='mp-content-container'>
    //     <p className='mp-content-text'>
    //       Gates Enterprises LLC is committed to providing our customers with an
    //       unparalleled level of expertise and customer service in all our
    //       re-roofing projects. We are a small team hand picked for their
    //       expertise in exteriors construction and insurance claim management.
    //       <br />
    //       <br /> If you are overwhelmed or stressed about hail damage to your
    //       property; or simply have high expectations for anyone providing work
    //       or services on your largest investment; you have found the most
    //       equipped company for the job. Call or email us now for a complimentary
    //       and honest inspection at your property.
    //     </p>
    //   </div>
    // </div>
    // <div className='collage'>
    //   <img src={house6} alt={"Photos of our work 1"}></img>
    //   <img src={house2} alt={"Photos of our work 2"}></img>
    //   <img src={house11} alt={"Photos of our work 3"} style={{ margin: 1 }}></img>
    //   <img src={house3} alt={"Photos of our work 4"}></img>
    //   <img src={house4} alt={"Photos of our work 5"}></img>
    //   <img src={house5} alt={"Photos of our work 6"} style={{ objectFit: 'none' }}></img>
    //   <img src={house8} alt={"Photos of our work 7"}></img>
    //   <img src={house1} alt={"Photos of our work 8"}></img>
    //   <img src={house7} alt={"Photos of our work 9"}></img>
    // </div>
  );
}
