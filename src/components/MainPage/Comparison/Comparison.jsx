import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { quoteCompare } from '../../../util/comparison';
import stockroofvid from '../../../assets/images/stockroofvid.mp4'

function Comparison() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{ position: "absolute", filter: 'brightness(50%)', height: 'inherit', width: '100%', objectFit: 'cover', zIndex: -1 }}>
        <source src={stockroofvid} type='video/mp4' />
      </video>
      <Typography variant="h2" align="center" padding={8}>
        Gates is built different
      </Typography>
      <Grid
        container
        xs={12}
        spacing={2}
        padding={'0 15em 10em 15em'}
        position="relative"
        sx={{
          '& > div': {
            borderBottom: 'solid white 4px',
            borderRight: 'solid white 4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
          '& > div > p': { fontWeight: 'bold', verticalAlign: 'center', padding: '1rem', fontSize: '1rem' }
        }}
        height='800px'
        width="100%"
      >
        <Grid xs={4} style={{ borderTop: 'none', borderLeft: 'none' }}>
        </Grid>
        <Grid xs={4} style={{ borderTop: 'none', backgroundColor: 'rgb(2, 48, 32, 0.7)' }}>
          <Typography align='center' fontWeight='bold'>
            Gates Quote
          </Typography>
        </Grid>
        <Grid xs={4} style={{ backgroundColor: 'rgb(139, 0, 0, 0.7)' }}>
          <Typography align='center'>
            Other guys
          </Typography>
        </Grid>

        {quoteCompare.map((option) => (
          <>
            <Grid xs={4}>
              <Typography align='center'>
                {option.name}
              </Typography>
            </Grid>
            <Grid xs={4} sx={{ backgroundColor: 'rgb(2, 48, 32, 0.7)' }}>
              <Typography align='center' variant='body3'>
                {option.gates}
              </Typography>
            </Grid>
            <Grid xs={4} sx={{ backgroundColor: 'rgb(139, 0, 0, 0.7)' }}>
              <Typography align='center' variant='body3'>
                {option.others}
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}

export default Comparison;