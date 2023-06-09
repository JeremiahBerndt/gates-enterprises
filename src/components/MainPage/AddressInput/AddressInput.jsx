
import { useEffect, useState } from 'react';
import Image from 'mui-image';
import skyline from '../../../assets/images/skyline.jpg'
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import House from '@mui/icons-material/House';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { AddressAutofill } from '@mapbox/search-js-react';
import { slideFromLeft } from '../../../util/animations';

const AddressInput = ({ address, setAddress }) => {
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
      <div
        className={slideFromLeft}
        style={{
          position: 'absolute',
          top: '15%',
          height: 200,
          padding: '5em'
        }}>
        <Typography variant="h2">
          Getting a new roof is easier than ever. <br />Get an estimate in &lt;24 hrs.
        </Typography>
        <FormControl
          sx={{
            backgroundColor: 'white',
            borderRadius: 10,
            marginRight: 2,
            width: '80%'
          }}
        >
          <AddressAutofill
            accessToken={process.env.REACT_APP_MAPBOX_API_KEY}
            options={{
              language: 'en',
              country: 'US',
            }}
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
          sx={{ borderRadius: 10, height: 56, backgroundColor: 'secondary.main', ':hover': { backgroundColor: '#062841' } }}
        >
          Get Quote
        </Button>
        <Typography variant="h4" padding="1em" fontWeight={600}>
          <span style={{ color: "#c9a32c" }}>
            Provide an address &nbsp;
            <span style={{ color: 'white' }}>
              &gt; &nbsp;
            </span>
            Select a roof &nbsp;
            <span style={{ color: 'white' }}>
              &gt; &nbsp;
            </span>
            Get a price
          </span>
        </Typography>
      </div>
    </>
  );
}

export default AddressInput;