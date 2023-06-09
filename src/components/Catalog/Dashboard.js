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
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Container fixed maxWidth="xl" sx={{ margin: 0, height: '100%' }}>
          <Grid container spacing={3} sx={{ height: '100%' }}>
            <Grid item xs={12} lg={9} sx={{ height: '100%' }}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  width: '100%'
                }}
              >
                <Grid sx={{ display: 'flex' }}>
                  <Grid container paddingX={theme.spacing(2)} sx={{ display: 'flex' }} xs={6}>
                    <img src={ocLogo} height="64px" style={{ paddingRight: theme.spacing(2) }}></img>
                    <Typography
                      fontFamily="Roboto"
                      fontWeight="700"
                      fontSize="24px"
                    >
                      Owens Corning <br />
                      TruDefinition® Duration®
                    </Typography>
                  </Grid>
                  <Grid container xs={6}>
                    <Grid xs={12}>
                      <Typography variant="h5">
                        Chateau Green
                      </Typography>
                    </Grid>
                    <Grid xs={6}>
                      <Typography variant="h5">
                        $20/sq ft
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <div style={{ maxWidth: '60em', width: 'inherit', overflow: 'hidden', padding: '1rem' }}>
                  <img src={selectedHouse.image} style={{ width: '120em', height: 'auto', objectPosition: '-30em 0' }}></img>
                </div>
                <Grid container columns='16'>
                  {ocSelectColors.map((color) => {
                    return (
                      <Grid xs={2} style={{ display: 'flex', justifyContent: 'center', height: '6em' }}>
                        <Button sx={{
                          padding: 0,
                          '&:hover': {
                            '> img': {
                              border: 'solid 3px #c9a32c'
                            },
                          }
                        }}>
                          <img src={color.image} style={{ width: '4em', height: '4em' }}></img>
                        </Button>
                      </Grid>
                    )
                  })}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  // position: 'fixed',
                  flexDirection: 'column',
                  height: '20%',
                  right: '20px'
                }}
              >
                {/* <Deposits /> */}
                <Button variant="contained" sx={{ borderRadius: 10, height: 56, backgroundColor: "#c9a32c" }}>
                  <Typography fontWeight={600}>
                    Get Quote
                  </Typography>
                </Button>
              </Paper>
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
