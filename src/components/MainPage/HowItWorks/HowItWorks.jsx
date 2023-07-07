import { CardContent, Stack, Grid, Typography, Card } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as Inspect } from '../../../assets/icons/home-inspection.svg';
import { ReactComponent as Claim } from '../../../assets/icons/video-call.svg';
import { ReactComponent as MakeWhole } from '../../../assets/icons/construction.svg';
import { ReactComponent as Hail } from '../../../assets/icons/hail.svg';
import { zoomDown } from '../../../util/animations';
import { useInView } from 'react-intersection-observer'
import HowItWorksScroll from './HowItWorksScroll';

const HowItWorks = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    delay: 1000
  });

  const minWidth = useMediaQuery('(min-width:900px)');

  if (!minWidth) {
    return (
      <HowItWorksScroll />
    )
  }

  return (
    <Stack>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} ref={ref} >
        <Hail height="100" width="100" fill="#c9a32c" className={inView ? zoomDown : null} />
        <Typography variant="h2" color="#062841" align="center" pb={8}>
          Hail Claim?
        </Typography>
      </div>
      <Grid container width="100%" spacing={5} margin={0} sx={{
        '> div > div': {
          height: "40rem",
          border: "solid 2px #062841",
          borderRadius: 5,
          background: 'linear-gradient(to bottom, #062841 25%, white 0%)',
          '> div': {
            height: '100%'
          },
          '> div > div:first-of-type': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(25% - 1rem)'
          },
        }
      }}>
        <Grid item xs={12} md={4}>
          <Card elevation={24}>
            <CardContent>
              <div>
                <Typography variant="h4" fontWeight="900" color="white" p="1rem" align="center">
                  Get an Inspection
                </Typography>
              </div>
              <Typography variant="h5" color="primary" align="center" p='1rem' pt='2rem'>
                We inspect your roof and home for possible storm damage
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                <Inspect fill="#062841" height="250" width="250" />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={24}>
            <CardContent>
              <div>
                <Typography variant="h4" fontWeight="900" color="white" p="1rem" align="center">
                  File a Claim
                </Typography>
              </div>
              <Typography variant="h5" color="primary" align="center" p='1rem' pt='2rem'>
                If it has been damaged, insurance may cover the cost of repair or replacement
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '1rem' }}>
                <Claim height="250" width="250" fill="#062841" color="#062841" />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={24}>
            <CardContent>
              <div>
                <Typography variant="h4" fontWeight="900" color="white" p="1rem" align="center">
                  We Make it Whole
                </Typography>
              </div>
              <Typography variant="h5" color="primary" align="center" p='1rem' pt='2rem'>
                If your claim is approved, we do the work to make your home whole again
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', p: '2rem' }}>
                <MakeWhole height="250" width="250" fill="#062841" />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HowItWorks;