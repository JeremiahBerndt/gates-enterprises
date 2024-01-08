import { useRef } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import stockroofvid from '../../../assets/images/panOverRoof.mp4'
import { useIsVisible, slideFromLeft, slideFromRight } from '../../../util/animations';

const InsuranceOrQuote = () => {
  const theme = useTheme();
  const refInsurance = useRef();
  const refFinancing = useRef();

  return (
    <>
      <video autoPlay loop muted playsinline style={{
        position: "absolute",
        filter: 'brightness(80%) opacity(0.5)',
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        zIndex: -1
      }}>
        <source src={stockroofvid} type='video/mp4' />
      </video>
      <Grid container sx={{
        py: '5rem',
        '> div': {
          p: '1rem',
          [theme.breakpoints.up('lg')]: {
            p: '5rem'
          }
        },
        margin: 0,
      }}>
        <Grid item xs={12} lg={6}>
          <Typography variant="h2" align="center">
            Insurance
          </Typography>
          <Typography
            ref={refInsurance}
            variant="h3"
            color="secondary.main"
            className={useIsVisible(refInsurance) ? slideFromLeft : null}
            sx={{ py: '2rem' }}
          >
            Our team simplifies the insurance claim process
          </Typography>
          <Typography variant="h5">
            Our expertise working with insurance providers allows us to help you navigate the claims process with ease. We are there to assist along every step of the process to make sure you get the repairs your home needs.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h2" align="center">
            Financing
          </Typography>
          <Typography
            ref={refFinancing}
            variant="h3"
            color="secondary.main"
            className={useIsVisible(refFinancing) ? slideFromRight : null}
            sx={{ py: '2rem' }}
          >
            We can help with financing
          </Typography>
          <Typography variant="h5">
            Limited, or no insurance coverage? No problem!
            When it is determined that your roof has significant damage, your first choice
            should always be to file a claim with your insurance company, but when this is
            not an option there are alternative resources to fund your investment.
            <br /><br />
            Ask your Gates Enterprises representative to learn more about how we can
            help finance your roof.
          </Typography>
        </Grid>
      </Grid>
    </>
  )
};

export default InsuranceOrQuote;