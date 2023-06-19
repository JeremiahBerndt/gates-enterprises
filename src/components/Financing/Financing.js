import './Financing.css';
import { Grid, Stack, Typography } from '@mui/material';
import Image from 'mui-image';
import { useTheme } from '@material-ui/core';
import financingHouse from '../../assets/images/financingHouse.jpg';
import financeImg from '../../assets/images/Financing.png'
import handshake from '../../assets/images/handshake.jpg'


export default function Financing({ name }) {
  const theme = useTheme();

  return (
    <Stack>
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: theme.spacing(32)
      }}>
        <Image
          top='0'
          src={handshake}
          height="100%"
          width="100%"
          fit="cover"
          bgColor="inherit"
          style={{ zIndex: '-1', opacity: '0.3', position: 'absolute' }}
        />
        <Typography variant="h1" align="center" sx={{ position: 'absolute' }}>
          Financing
        </Typography>
      </div>
      <Grid container backgroundColor='white'>
        <Grid xs={6}>
          <img
            src={financingHouse}
            alt="Services"
            style={{ padding: '8rem 4rem 4rem 4rem', width: '100%', objectFit: 'cover' }}
          />
        </Grid>
        <Grid xs={6} sx={{ padding: '8rem' }}>
          <Typography variant="h4" color="primary.main">
            We Can Help with Financing
          </Typography>
          <Typography variant="body1" color="primary.main">
            Limited, or no insurance coverage? No problem!
            When it is determined that your roof has significant damage, your first choice should always 
            be to file a claim with your insurance company, but when this is not an option there are 
            alternative resources to fund your investment. Gates Enterprises has built partnerships with 
            brokers who are eager to assist you with securing a low, or no interest loan to fit your 
            unique situation, even if your credit is less than perfect.
          </Typography>
          <Typography variant="h5" color="primary.main" sx={{ pt: '2rem'}}>
            Ask your Gates Enterprises representative to learn more about how we can help finance your roof.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}