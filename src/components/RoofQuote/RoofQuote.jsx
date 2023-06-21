import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ServicesNavigation from './ServicesNavigation';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { ocHouseColors, ocSelectColors } from '../../util/ocColors';
import ocLogo from '../../assets/images/oc-logo.svg'
import { useTheme } from '@mui/material/styles';
import GetQuote from './GetQuote';

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: 240,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: 60,
      }),
    },
  }),
);

const RoofQuote = ({ address }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [totalPrice, setTotalPrice] = useState(1500);
  const [selectedHouse, setSelectedHouse] = useState(ocHouseColors[0])

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Toolbar>
        <Divider />
        <ServicesNavigation />
      </Drawer>
      <Box
        component="section"
        sx={{
          backgroundColor: 'white',
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Container fixed maxWidth="xl" sx={{ margin: 0, height: '100%' }}>
          <Grid container spacing={3} sx={{ height: '100%' }}>
            <Grid item xs={12} lg={9} sx={{ height: '100%' }}>
              <Box
                sx={{
                  p: 1,
                  [theme.breakpoints.up('md')]: {
                    p: 2
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  width: '100%'
                }}
              >
                <Grid container>
                  <Grid container xs={4} paddingLeft={theme.spacing(2)}>
                    <Grid xs={12} s={12}>
                      <img src={ocLogo} height="48px" style={{ float: 'left', paddingRight: '8px' }}></img>
                      <Typography
                        color="black"
                        fontWeight="800"
                        fontSize="16px"
                      >
                        Owens Corning <br />
                        TruDefinition® Duration®
                      </Typography>
                    </Grid>
                    <Grid xs={12}>
                      <Typography variant="h4" fontWeight="800" color="primary" fontSize="40px">
                        {selectedHouse.name.toUpperCase()}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    md={8} lg={8} xl={8}
                    sx={{
                      '> div': {
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column'
                      },
                      '> div > p': {
                        color: 'gray',
                      }
                    }}
                  >
                    <Grid xs={3}>
                      <Typography variant="body2" align="center">
                        $/sq ft
                      </Typography>
                    </Grid>
                    <Grid xs={3}>
                      <Typography variant="body2" align="center">
                        sq ft area
                      </Typography>
                    </Grid>
                    <Grid xs={3}>
                      <Typography variant="body2" align="center">
                        Total
                      </Typography>
                    </Grid>
                    <Grid xs={3}>
                      <Typography variant="body2" align="center">
                        $/month
                      </Typography>
                    </Grid>
                    <Grid xs={3}>
                      <Typography variant="h5" color="black" align='center'>
                        $7.50
                      </Typography>
                    </Grid>
                    <Grid xs={3}
                      sx={{
                        pt: '22px',
                        height: '32px'
                      }}>
                      <TextField
                        variant="outlined"
                        type="number"
                        defaultValue={totalPrice}
                        sx={{
                          '> div > input': {
                            ...(theme.typography.h5),
                            py: '4px',
                          }
                        }}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">
                            <Typography variant="h5">
                              x
                            </Typography>
                          </InputAdornment>,
                          endAdornment: <InputAdornment position="end">sqft</InputAdornment>
                        }}
                        onChange={(e) => { setTotalPrice(e.target.value) }}
                      />
                    </Grid>
                    <Grid xs={3}>
                      <Typography variant="h5" color='gray' align="center">
                        ${(totalPrice * 7.50)}
                      </Typography>
                    </Grid>
                    <Grid xs={3}>
                      <Typography variant="h5" color='black' align="center">
                        ${(totalPrice * 7.50 / 120)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <div style={{ width: 'inherit', overflow: 'hidden', padding: '8px 0 8px 1rem', marginRight: '1rem' }}>
                  <img
                    src={selectedHouse.image}
                    style={{
                      height: '100%', width: 'calc(100% + 1px)', borderRadius: '25px', objectFit: 'cover'
                    }}
                  />
                </div>
                <Typography
                  variant="h5"
                  sx={{
                    backgroundColor: '#062841',
                    color: 'white',
                    marginLeft: '16px',
                    paddingX: '16px'
                  }}
                >
                  Shingle Colors
                </Typography>

                <Grid container columns='16' sx={{ width: 'auto', ml: '-8px', mr: '-24px' }}>
                  {ocSelectColors.map((color) => {
                    return (
                      <Grid
                        key={color.id}
                        xs={2}
                        sx={{ display: 'flex', height: '6.5em', justifyContent: 'center', paddingX: '1rem' }}
                      >
                        <Button
                          onClick={() => setSelectedHouse(ocHouseColors.find((h) => h.name === color.name))}
                          sx={{
                            padding: 0,
                            '> img': {
                              borderRadius: '10px'
                            },
                            '&:hover': {
                              '> img': {
                                border: 'solid 3px #c9a32c',
                                boxSizing: 'unset',
                              },
                            }
                          }}>
                          <img src={color.image} style={{ width: '5.5rem', height: '5.5rem' }}></img>
                        </Button>
                      </Grid>
                    )
                  })}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} lg={3}>
              <GetQuote address={address} selectedHouse={selectedHouse} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default RoofQuote;
