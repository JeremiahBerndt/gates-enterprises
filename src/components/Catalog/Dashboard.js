import React, { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Deposits from './Deposits';
import Image from 'mui-image';
import ServicesNavigation from './ServicesNavigation';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

function DashboardContent() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
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
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  width: '100%'
                }}
              >
                <Grid sx={{ display: 'flex' }}>
                  <Grid paddingX={theme.spacing(2)} sx={{ display: 'flex' }}>
                    <img src={ocLogo} height="48px" style={{ paddingRight: theme.spacing(2) }}></img>
                    <Typography
                      color="black"
                      fontFamily="Roboto"
                      fontWeight="700"
                      fontSize="16px"
                    >
                      Owens Corning <br />
                      TruDefinition® Duration®
                    </Typography>
                  </Grid>
                  <Grid sx={{ display: 'flex' }}>
                    <Typography variant="h4" fontWeight="800" color="primary" lineHeight="initial">
                      {selectedHouse.name}
                    </Typography>
                  </Grid>
                    <Typography variant="h5" align="right">
                      $20/sq ft
                    </Typography>
                </Grid>
                <div style={{ width: 'inherit', overflow: 'hidden', padding: '8px 0 1rem 1rem', marginRight: '1rem' }}>
                  <img
                    src={selectedHouse.image}
                    style={{
                      height: '100%', width: 'calc(100% + 1px)', borderRadius: '25px', objectFit: 'cover'
                    }}
                  />
                </div>
                <Grid container columns='16' sx={{ width: 'auto', ml: '-8px', mr: '-24px'}}>
                  {ocSelectColors.map((color) => {
                    return (
                      <Grid xs={2} sx={{ display: 'flex', height: '6.5em', justifyContent: 'center', paddingX: '1rem' }}>
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
              <GetQuote />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
