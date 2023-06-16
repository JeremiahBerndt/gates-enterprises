import './Financing.css';
import { Grid, Stack, Typography } from '@mui/material';
import Image from 'mui-image';
import { useTheme } from '@material-ui/core';
import houseImage from '../../assets/images/WhoWeAre.png';
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
      <div style={{ padding: '6rem' }}>
        <img
          src={financeImg}
          alt="Financing"
          style={{
            width: '100%'
          }}
        />

      </div>
    </Stack>
    // <section className={`page-content page-single ${name}`}>
    // </section>
  );
}