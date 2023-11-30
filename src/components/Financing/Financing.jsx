import { Grid, Stack, Typography, useTheme } from '@mui/material';
import Image from 'mui-image';
import financingHouse from '../../assets/images/financingHouse.jpg';
import handshake from '../../assets/images/handshake.jpg'
import { slideFromRight } from '../../util/animations';
import { Helmet } from 'react-helmet-async';

export default function Financing({ name }) {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Apply for Construction Financing</title>
        <meta name="description" content="How to apply for financing for a new roof or exterior construction." />
        <link rel="canonical" href="https://www.gatesroof.com/financing" />
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
            top="0"
            alt="handshake agreement"
            src={handshake}
            height="100%"
            width="100%"
            fit="cover"
            bgColor="inherit"
            style={{ zIndex: '-1', opacity: '0.3', position: 'absolute' }}
          />
          <Typography variant="h1" align="center" sx={{
            fontSize: '4rem',
            [theme.breakpoints.up('lg')]: {
              fontSize: '6rem'
            },
            position: 'absolute'
          }}>
            Financing
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
              src={financingHouse}
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
              We Can Help with Financing
            </Typography>
            <Typography variant="body1" color="primary.main">
              Limited, or no insurance coverage? No problem!
              When it is determined that your roof has significant damage, your first choice should always
              be to file a claim with your insurance company, but when this is not an option there are
              alternative resources to fund your investment. Gates Enterprises has built partnerships with
              brokers who are eager to assist you with securing a low, or no interest loan to fit your
              unique situation, even if your credit is less than perfect.
            </Typography>
            <Typography variant="h5" color="primary.main" sx={{ pt: '2rem' }}>
              Ask your Gates Enterprises representative to learn more about how we can help finance your roof.
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}