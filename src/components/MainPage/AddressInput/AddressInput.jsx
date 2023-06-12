
import { useEffect, useState } from 'react';
import Image from 'mui-image';
import skyline from '../../../assets/images/skyline.jpg'
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import House from '@mui/icons-material/House';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import { AddressAutofill } from '@mapbox/search-js-react';
import { slideFromLeft } from '../../../util/animations';
import { useTheme } from '@mui/material';
import { useHistory } from 'react-router-dom';

const AddressInput = ({ address, setAddress }) => {
  const theme = useTheme();
  const history = useHistory();
  const redirect = (path) => {
    history.push(`/${path}`);
  };

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
          // height: 200,
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
          Get an estimate in &lt;24 hrs.
        </Typography>
        <FormControl
          sx={{
            backgroundColor: 'white',
            borderRadius: 10,
            marginRight: 2,
            width: '60%',
            [theme.breakpoints.up('md')]: {
              width: '80%'
            }
          }}
        >
          <AddressAutofill
            accessToken={process.env.REACT_APP_MAPBOX_API_KEY}
            options={{ language: 'en', country: 'US' }}
            onRetrieve={({ features }) => setAddress(features[0].properties.place_name)}
          >
            <Input
              disableUnderline
              name="address"
              type="text"
              autoComplete="address-line1"
              startAdornment={<InputAdornment position="start"><House /></InputAdornment>}
              placeholder="Enter your address"
              sx={{ borderRadius: 10, padding: '1rem', width: '100%' }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </AddressAutofill>
        </FormControl>
        <Button
          variant="contained"
          sx={theme.yellowButton}
          onClick={() => redirect('roof-quote')}
        >
          Get Quote
        </Button>
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