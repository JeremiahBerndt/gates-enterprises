
import { CardContent, Stack, Typography, Card } from '@mui/material';
import { ReactComponent as Inspect } from '../../../assets/icons/home-inspection.svg';
import { ReactComponent as Claim } from '../../../assets/icons/video-call.svg';
import { ReactComponent as MakeWhole } from '../../../assets/icons/construction.svg';
import { ReactComponent as Hail } from '../../../assets/icons/hail.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './HowItWorks.css';

const HowItWorksScroll = () => {

  return (
    <Stack sx={{ '.carousel-root': { maxWidth: '80vw' }, p: '2rem 0 2rem 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Hail height="6rem" width="6rem" fill="#c9a32c" />
        <Typography variant="h2" color="#062841" align="center" pb={8}>
          Hail Claim?
        </Typography>
      </div>
      <Carousel maxWidth="90vw" showThumbs={false}>
        <Card elevation={24} sx={{
          height: "48rem",
          border: "solid 2px #062841",
          borderRadius: 5,
          background: 'linear-gradient(to bottom, #062841 19%, white 0%)'
        }}>
          <CardContent>
            <Typography variant="h4" fontWeight="900" color="white" p="1rem 2rem 3rem 2rem" align="center">
              Get an Inspection
            </Typography>
            <Typography variant="h5" color="primary" align="center" p='1rem' pt='4rem'>
              We inspect your roof and home for possible storm damage
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 2rem 2rem 2rem' }}>
              <Inspect height="350" width="350" fill="#062841" />
            </div>
          </CardContent>
        </Card>
        <Card elevation={24} sx={{
          height: "48rem",
          border: "solid 2px #062841",
          borderRadius: 5,
          background: 'linear-gradient(to bottom, #062841 19%, white 0%)'
        }}>
          <CardContent>
            <Typography variant="h4" fontWeight="900" color="white" p="1rem 2rem 3rem 2rem" align="center">
              File a Claim
            </Typography>
            <Typography variant="h5" color="primary" align="center" p='1rem' pt='4rem'>
              If it has been damaged, insurance may cover the cost of repair or replacement
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
              <Claim height="350" width="350" fill="#062841" color="#062841" />
            </div>
          </CardContent>
        </Card>
        <Card elevation={24} sx={{
          height: "48rem",
          border: "solid 2px #062841",
          borderRadius: 5,
          background: 'linear-gradient(to bottom, #062841 19%, white 0%)'
        }}>
          <CardContent>
            <Typography variant="h4" fontWeight="900" color="white" p="1rem 2rem 2rem 2rem" align="center">
              We Make it Whole
            </Typography>
            <Typography variant="h5" color="primary" align="center" padding="1rem" pt="4rem">
              If your claim is approved, we do the work to make your home whole again
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
              <MakeWhole height="350" width="350" fill="#062841" />
            </div>
          </CardContent>
        </Card>
      </Carousel>
    </Stack>
  );
};

export default HowItWorksScroll;