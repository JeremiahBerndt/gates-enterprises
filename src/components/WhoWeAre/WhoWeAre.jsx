import { useRef } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import Image from 'mui-image';
import { useTheme } from '@material-ui/core';
import houseImage from '../../assets/images/WhoWeAre.png';
import { ReactComponent as Medal } from '../../assets/icons/medal.svg';
import { ReactComponent as Roof } from '../../assets/icons/roof.svg';
import { ReactComponent as Snowing } from '../../assets/icons/snowing.svg';
import gatesStaff from '../../assets/images/gatesStaff.png';
import { slideFromRight, useIsVisible, slideFromLeft } from '../../util/animations';
import './WhoWeAre.css';
import { Helmet } from 'react-helmet-async';

export default function WhoWeAre({ name }) {
  const theme = useTheme();
  const refQuality = useRef(null);
  const refEquipped = useRef(null);

  return (
    <>
      <Helmet>
        <title>Gates Enterprises: Your Roofing Contractor for Every Project</title>
        <meta name="description" content="From repairs to replacements, Gates Enterprises LLC is a premier roofing contractor. Get a free quote and experience the Gates Enterprises difference!" />
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
            src={gatesStaff}
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
              }
            }}>
            Who We Are
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
            <img src={houseImage} alt="Services" style={{ width: '100%', objectFit: 'cover' }} />
          </Grid>
          <Grid item xs={12} lg={6} ref={refEquipped} className={slideFromRight}
            sx={{
              padding: '0 2rem 2rem 2rem',
              [theme.breakpoints.up('lg')]: {
                p: '8rem 8rem 8rem 4rem',
              },
            }}>
            <Typography variant="h4" color="primary.main">
              The Most Equipped Company for the Job
            </Typography>
            <Typography variant="body1" color="black" sx={{ pb: '32px' }}>
              Gates Enterprises LLC is committed to providing our customers with an
              unparalleled level of expertise and customer service in all our
              re-roofing projects. We are a small team hand picked for their
              expertise in exteriors construction and insurance claim management.
            </Typography>
            <Typography variant="h4" color="primary.main">
              Roofing with Values
            </Typography>
            <Typography variant="body1" color="black">
              If you are overwhelmed or stressed about hail damage to your
              property; or simply have high expectations for anyone providing work
              or services on your largest investment; you have found the most
              equipped company for the job. Call or email us now for a complimentary
              and honest inspection at your property.
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
        <Grid sx={{
          padding: '2rem',
          backgroundColor: 'white',
          [theme.breakpoints.up('lg')]: {
            p: '8rem',
            py: '4rem'
          }
        }}>
          <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
          <div className="elfsight-app-bf7eac58-17cc-49e4-98d4-e5d64ba64e4b"></div>
        </Grid>
      </Stack>
    </>
  );
}
