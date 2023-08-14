import { useRef } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import { fadeDown, useIsVisible } from '../../util/animations';

const BuildProcessStep = ({ step }) => {
  const theme = useTheme();
  const ref = useRef();
  const stepVisible = useIsVisible(ref);

  return (
    <Grid xs={12} md={6} item ref={ref} className={stepVisible ? fadeDown : null}
      sx={{
        display: 'flex',
        alignItems: 'center',
        pb: '1rem',
        [theme.breakpoints.up('lg')]: {
          p: '0 4rem 4rem 4rem',
          flexDirection: 'row'
        }
      }}>
      <Typography
        variant="h3"
        sx={{
          p: 0,
          mt: '1rem',
          border: 'solid white 5px',
          borderRadius: '50%',
          boxSizing: 'content-box',
          textAlign: 'center',
          lineHeight: '4rem',
          width: '4rem',
          height: '4rem',
          '> div': {
            width: '4rem',
            height: '4rem'
          },
          [theme.breakpoints.up('lg')]: {
            p: 0,
            width: '6rem',
            height: '6rem',
            lineHeight: '6rem',
            '> div': {
              height: '6rem',
              width: '6rem'
            }
          }
        }}>
        <div>
          {step.number}
        </div>
      </Typography>
      <div style={{ paddingLeft: '2rem' }}>
        <Typography variant="h5" color="secondary.main">
          {step.title}
        </Typography>
        <Typography variant="h6">
          {step.step}
        </Typography>
      </div>
    </Grid>
  );
}

export default BuildProcessStep;