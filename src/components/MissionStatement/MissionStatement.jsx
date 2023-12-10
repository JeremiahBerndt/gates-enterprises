import { useRef } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import Image from 'mui-image';
import { useTheme } from '@material-ui/core';
import { ReactComponent as Medal } from '../../assets/icons/medal.svg';
import { ReactComponent as Roof } from '../../assets/icons/roof.svg';
import { ReactComponent as Snowing } from '../../assets/icons/snowing.svg';
import skyline from '../../assets/images/skyline.jpg';
import { slideFromRight, useIsVisible, slideFromLeft } from '../../util/animations';
import { Helmet } from 'react-helmet-async';

export default function MissionStatement({ name }) {
  const theme = useTheme();
  const refQuality = useRef(null);
  const refEquipped = useRef(null);

  return (
    <>
      <Helmet>
        <title>The Gates Enterprises Mission Statement</title>
        <meta name="description" content="The Gates Enterprises mission statement" />
        <link rel="canonical" href="https://www.gatesroof.com/who-we-are" />
      </Helmet>
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
            alt="Gates employees in front of building"
            src={skyline}
            height="100%"
            width="100%"
            fit="cover"
            bgColor="inherit"
            style={{ zIndex: '-1', opacity: '0.3', position: 'absolute' }}
          />
          <Typography
            variant="h1"
            align="center"
            sx={{
              position: 'absolute',
              fontSize: '3rem',
              [theme.breakpoints.up('lg')]: {
                fontSize: '6rem'
              },
            }}>
            Mission Statement
          </Typography>
        </div>
        <Grid container backgroundColor='white'>
          <Grid item xs={12} lg={6}
            sx={{
              padding: '2rem',
              [theme.breakpoints.up('lg')]: {
                p: '8rem 4rem 8rem 8rem',
              },
            }}>
            <img src={skyline} alt="Services" style={{ width: '100%', objectFit: 'cover' }} />
          </Grid>
          <Grid item xs={12} lg={6} ref={refEquipped} className={slideFromRight}
            sx={{
              padding: '0 2rem 2rem 2rem',
              fontSize: '2rem',
              [theme.breakpoints.up('lg')]: {
                p: '8rem 8rem 8rem 4rem',
                fontSize: '5rem'
              },
            }}>
            <Typography variant="h4" color="primary.main">
              Our Mission:
            </Typography>
            <Typography variant="h5" color="black" fontSize="1.2rem" sx={{ pb: '32px' }}>
              "At Gates Enterprises, our mission is to deliver exceptional roofing services with an unwavering
              commitment to quality and customer satisfaction.
              <br /><br />
              We build more than just roofs – we build trust. Our teams focus on superior craftsmanship, using
              top-quality materials, ensuring every project meets our high standards.
              <br /><br />
              We value relationships, tailoring our services to individual needs, and honest communication.
              We're not just a service provider, but a reliable partner in protecting your home or business."
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          ref={refQuality}
          className={useIsVisible(refQuality) ? slideFromLeft : ''}
          sx={{
            display: 'flex',
            alignItems: 'center',
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
              <Roof fill={"#c9a32c"} width="64px" height="64px" />
            </div>
            <Typography variant="h4" fontWeight="900" padding="2rem" align="center">
              Quality
            </Typography>
            <Typography variant="h6" align="center" sx={{ '> span': { padding: '2rem' } }}>
              <div>Industry leading products</div><br />
              <div>Hand selected for Colorado</div><br />
              <div>Top performing roof systems</div><br />
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Medal fill={"#c9a32c"} width="64px" height="64px" />
            </div>
            <Typography variant="h4" fontWeight="900" padding="2rem" align="center">
              Excellence
            </Typography>
            <Typography variant="h6" align="center" sx={{ '> span': { padding: '2rem' } }}>
              <div>Dedicated professional team</div><br />
              <div>Trained on the latest products</div><br />
              <div>Perfecting the roofing process</div><br />
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Snowing fill={"#c9a32c"} width="64px" height="64px" />
            </div>
            <Typography variant="h4" fontWeight="900" padding="2rem" align="center">
              Reliability
            </Typography>
            <Typography variant="h6" align="center" sx={{ '> span': { padding: '2rem' } }}>
              <div>Locally owned and operated</div><br />
              <div>Focus on quality workmanship</div><br />
              <div>Warranties you can count on</div><br />
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ backgroundColor: 'white', py: 4 }}></Grid>
      </Stack>
    </>
  );
}
