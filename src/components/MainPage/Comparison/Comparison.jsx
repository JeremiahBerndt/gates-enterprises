import React from 'react';
import { Typography, Grid, useTheme } from '@mui/material';
import { quoteCompare } from '../../../util/comparison';
import rooferwork from '../../../assets/images/rooferWorking.mp4'

const Comparison = () => {
  const theme = useTheme();

  return (
    <>
      <video autoPlay loop muted style={{
        position: "absolute",
        top: 0,
        left: 0,
        filter: 'brightness(50%)',
        height: 'inherit',
        width: '100%',
        objectFit: 'cover',
        zIndex: -1
      }}>
        <source src={rooferwork} type='video/mp4' />
      </video>
      <Typography variant="h2" align="center" pb={8}>
        Gates is built different
      </Typography>
      <Grid
        container
        sx={{
          width: '100%',
          pt: 0,
          [theme.breakpoints.up('lg')]: {
            p: '0 10rem 5rem 10rem',
          },
          '& > div': {
            p: 0,
            [theme.breakpoints.up('lg')]: {
              p: '8px'
            },
            borderBottom: 'solid white 4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
          '& > div > p': { fontWeight: 'bold', verticalAlign: 'center', padding: '1rem', fontSize: '1rem' }
        }}
      >
        <Grid item xs={4} sx={{ borderTop: 'none', borderLeft: 'none', borderRight: 'solid white 4px'  }}></Grid>
        <Grid item xs={4} sx={{ border: 'solid white 4px', borderTop: 'none', borderLeft: 'none', backgroundColor: 'rgb(6, 40, 65, 0.7)' }}>
          <Typography align='center' fontWeight='bold'>
            Gates Enterprises
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ borderRight: 'none' }}>
          <Typography align='center'>
            Other guys
          </Typography>
        </Grid>
        {quoteCompare.map((option, i) => (
          <React.Fragment key={option.name + i}>
            <Grid item xs={4} sx={{ borderRight: 'solid white 4px' }}>
              <Typography align='center'>
                {option.name}
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ backgroundColor: 'rgb(6, 40, 65, 0.7)', borderRight: 'solid white 4px' }}>
              <Typography align='center' variant='body3'>
                {option.gates}
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ borderRight: 'transparent' }}>
              <Typography align='center' variant='body3'>
                {option.others}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
}

export default Comparison;