
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Image from 'mui-image';
import skyline from '../../../assets/images/skyline.jpg'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { slideFromLeft } from '../../../util/animations';

const AddressInput = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <div style={{
        background: 'linear-gradient(to bottom, #062841 0%, rgba(0,0,255,0) 30%)',
        height: 'inherit'
      }}>
        <Image
          src={skyline}
          height="100%"
          width="100%"
          fit="cover"
          duration={3000}
          easing="ease-in"
          bgColor="inherit"
          style={{ zIndex: '-1', opacity: '0.3' }}
        />
      </div>
      <Box
        className={slideFromLeft}
        sx={{
          position: 'absolute',
          top: 0,
          [theme.breakpoints.up('sm')]: {
            top: '15%',
          },
          p: '1rem',
          [theme.breakpoints.up('md')]: {
            p: '5rem',
          },
        }}>
        <Typography
          variant="h2"
          sx={{
            pb: 2,
            [theme.breakpoints.up('md')]: {
              pb: 0,
            },
          }}
        >
          Getting a new roof is easier than ever. <br />
        </Typography>
        <Typography variant="h2" paddingTop="0">
          Get an instant estimate.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            p: '1rem',
            '> span': {
              color: 'secondary.main',
              display: 'block',
              [theme.breakpoints.up('sm')]: {
                display: 'inline',
              },
            }
          }}
        >
          <span>
            Provide an address
            <span style={{ color: 'white' }}>&nbsp;&gt;&nbsp;</span>
          </span>
          <span>
            Select a roof
            <span style={{ color: 'white' }}>&nbsp;&gt;&nbsp;</span>
          </span>
          <span>
            Get a price
          </span>
        </Typography>
      </Box>
    </>
  );
}

export default AddressInput;