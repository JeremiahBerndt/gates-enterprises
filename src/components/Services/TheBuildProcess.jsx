import goldRoof from '../../assets/images/goldRoof.png';
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@material-ui/core';
import { buildSteps } from '../../util/thebuildprocess';

const TheBuildProcess = () => {
  const theme = useTheme();

  return (
    <Grid container>
      <Grid xs={12} sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: theme.spacing(32)
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
          <img src={goldRoof} alt="Gold Roof" style={{ width: '12rem' }}/>
          <Typography variant="h2" align="center">
            The Build Process
          </Typography>
        </div>
      </Grid>
      <Grid container sx={{
        px: '1rem',
        [theme.breakpoints.up('lg')]: {
          px: '8rem'
        }
      }}>
        {buildSteps.map((step) =>
          <Grid xs={12} md={6} sx={{
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
              <Typography variant="h5" color="secondary.main">{step.title}</Typography>
              <Typography variant="h6">
                {step.step}
              </Typography>
            </div>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default TheBuildProcess;