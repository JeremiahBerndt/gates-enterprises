
import { CardContent } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { ReactComponent as Inspect } from '../../../assets/icons/home-inspection.svg';
import { ReactComponent as Claim } from '../../../assets/icons/video-call.svg';
import { ReactComponent as MakeWhole } from '../../../assets/icons/construction.svg';
import { ReactComponent as Hail } from '../../../assets/icons/hail.svg';
import { fadeUp } from '../../../util/animations';

const HowItWorks = () => (
  <Stack>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Hail height="6rem" width="6rem" fill="#c9a32c" />
      <Typography variant="h2" color="#062841" align="center" pb={8}>
        Hail Claim?
      </Typography>
    </div>
    <Grid container width="100%" spacing={5} margin={0} className={fadeUp} sx={{
      '> div > div': {
        height: "36rem",
        border: "solid 2px #062841",
        borderRadius: 5,
        background: 'linear-gradient(to bottom, #062841 19%, white 0%)',
        '> div > h5': {
          p: '1rem',
          pt: '2rem'
        }
      }
    }}>
      <Grid xs={4}>
        <Card elevation={24}>
          <CardContent>
            <Typography variant="h4" fontWeight="900" color="white" p="1rem 2rem 2rem 3rem" align="center">
              Get an Inspection
            </Typography>
            <Typography variant="h5" color="primary" align="center" p='1rem' pt='2rem'>
              We inspect your roof and home for possible storm damage
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 2rem 2rem 2rem' }}>
              <Inspect height="16rem" width="15rem" fill="#062841" />
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={4} >
        <Card elevation={24}>
          <CardContent>
            <Typography variant="h4" fontWeight="900" color="white" p="1rem 2rem 2rem 3rem" align="center">
              File a Claim
            </Typography>
            <Typography variant="h5" color="primary" align="center" paddingBottom="1rem">
              If it has been damaged, insurance may cover the cost of repair or replacement
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
              <Claim height="16rem" width="16rem" fill="#062841" color="#062841" />
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card elevation={24}>
          <CardContent>
            <Typography variant="h4" fontWeight="900" color="white" p="1rem 2rem 2rem 3rem" align="center">
              We Make it Whole
            </Typography>
            <Typography variant="h5" color="primary" align="center" paddingBottom="1rem">
              If your claim is approved, we do the work to make your home whole again
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
              <MakeWhole height="14rem" width="14rem" fill="#062841" />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Stack>
);

export default HowItWorks;