import goldRoof from '../../assets/images/goldRoof.png';
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@material-ui/core';
import { buildSteps } from '../../util/thebuildprocess';
import BuildProcessStep from './BuildProcessStep';

const TheBuildProcess = () => {
  const theme = useTheme();

  return (
    <Grid container sx={{ pb: '2rem' }}>
      <Grid item xs={12} sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: theme.spacing(32)
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
          <img src={goldRoof} alt="Gold Roof" style={{ width: '12rem' }} />
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
        {buildSteps.map((step, i) =>
          <BuildProcessStep key={step.number} step={step} />
        )}
      </Grid>
    </Grid>
  );
}

export default TheBuildProcess;