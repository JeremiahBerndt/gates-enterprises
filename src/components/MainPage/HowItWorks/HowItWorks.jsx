
import Image from 'mui-image';
import threeDHouse from '../../../assets/images/3dhouse.jpg'
import handshake from '../../../assets/images/handshake.jpg'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardContent } from '@material-ui/core';
import { fadeUp } from '../../../util/animations';

const HowItWorks = () => (
  <Stack>
    <Typography variant="h2" color="#062841" align="center" padding={8}>
      How it works
    </Typography>
    <Grid container width="100%" spacing={5} margin={0} className={fadeUp}>
      <Grid xs={4}>
        <Card elevation={24} sx={{ height: "36rem", border: "solid 2px #062841", borderRadius: 5 }}>
          <CardContent>
            <Typography variant="h4" fontWeight="900" color="#062841" padding="2rem" align="center">
              Provide an address
            </Typography>
            <Typography variant="h5" color="#062841" align="center">
              We use your address to collect data on your home
            </Typography>
            {/* add icon */}
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={4} >
        <Card elevation={24} sx={{ height: "36rem", border: "solid 2px #062841", borderRadius: 5 }}>
          <CardContent>
            <Typography variant="h4" fontWeight="900" color="#062841" padding="2rem" align="center">
              Select a roof
            </Typography>
            <Typography variant="h5" color="#062841" align="center" paddingBottom="1rem">
              You choose your design, shingle, gutters, and color
            </Typography>
            <Image
              style={{ padding: "3rem 2rem 2rem" }}
              src={threeDHouse}
              height="70%"
              width="100%"
              fit="cover"
              shift="top"
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card elevation={24} sx={{ height: "36rem", border: "solid 2px #062841", borderRadius: 5 }}>
          <CardContent>
            <Typography variant="h4" fontWeight="900" color="#062841" padding="2rem" align="center">
              Get a price
            </Typography>
            <Typography variant="h5" color="primary" align="center" paddingBottom="1rem">
              We provide a price-not-to-exceed and a final price after inspection
            </Typography>
            <Image
              style={{ padding: "3rem 2rem 2rem" }}
              src={handshake}
              height="70%"
              width="100%"
              fit="cover"
              shift="top"
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Stack>
);

export default HowItWorks;