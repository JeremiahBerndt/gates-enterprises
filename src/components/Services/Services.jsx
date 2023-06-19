import services from '../../assets/images/services.png';
import system from '../../assets/images/system.png';
import diagramDrawing from '../../assets/images/diagramDrawing.jpg';
import roofersonroof from '../../assets/images/roofersonroof.jpg';
import goldRoof from '../../assets/images/goldRoof.png';
import wholeRoof from '../../assets/images/wholeRoof.png';
import Image from 'mui-image';
import { Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@material-ui/core';
import TheBuildProcess from './TheBuildProcess';

export default function Services2({ name }) {
  const theme = useTheme();

  return (
    <>
      <Stack
        sx={{
          '> div > div > img': {
            width: '100%',
            objectFit: 'cover'
          }
        }}>
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: theme.spacing(32)
        }}>
          <Image
            top='0'
            src={roofersonroof}
            height="100%"
            width="100%"
            fit="cover"
            bgColor="inherit"
            style={{ zIndex: '-1', opacity: '0.3', position: 'absolute' }}
          />
          <Typography variant="h1" align="center"
            sx={{
              position: 'absolute',
              fontSize: '5rem',
              [theme.breakpoints.up('sm')]: {
                fontSize: '6rem'
              }
            }}>
            Services
          </Typography>
        </div>
        <Grid container backgroundColor='white'>
          <Grid xs={12} lg={6} sx={{
            padding: '2rem',
            [theme.breakpoints.up('lg')]: {
              p: '8rem 4rem 8rem 8rem',
            }
          }}>
            <img src={services} alt="Services" />
          </Grid>
          <Grid xs={12} lg={6} sx={{ p: '2rem', pt: 0, [theme.breakpoints.up('lg')]: { padding: '8rem' } }}>
            <Typography variant="h4" color="primary.main">
              A Warranty You Can Count On
            </Typography>
            <Typography variant="body1" color="primary.main">
              Gates Enterprises is proud to stand by our work and materials by offering our
              clients an industry leading 5-year workmanship warranty!
              As a reliable, established local company we are here for the long haul, so unlike
              storm chases who will leave town after the storm you’ll be able to count on us
              to guarantee our workmanship warranty.
            </Typography>
            <Typography variant="h4" color="primary.main">
              We Know Colorado
            </Typography>
            <Typography variant="body1" color="primary.main">
              Our team lives, works and knows Colorado weather and this understanding of
              our unique climate allows our roofing professionals to help you select the
              products that will provide the best protection for your home.
              We understand that a roof system is so much more than just the shingles, and
              will help you maximize your roof’s performance by hand selecting the best
              components for each layer.
            </Typography>
          </Grid>
        </Grid>
        <TheBuildProcess/>
        <Grid container sx={{ [theme.breakpoints.down('md')]: { flexDirection: 'column-reverse' } }}>
          <Grid xs={12} lg={6} sx={{
            display: 'flex',
            alignItems: 'center',
            p: '2rem',
            pt: 0,
            [theme.breakpoints.up('lg')]: {
              padding: '0 4rem 4rem 4rem'
            }
          }}>
            <div>
              <Typography variant="h4" color="white">
                Roofing systems optimized
              </Typography>
              <Typography variant="body1" color="white">
                The Gates Team is here to help you
                select the best roofing components to
                build a complete roof system which will
                defend against forces of nature outside
                while controlling temperature and
                humidity inside.
              </Typography>
            </div>
          </Grid>
          <Grid xs={12} lg={6} sx={{
            padding: '2rem',
            [theme.breakpoints.up('lg')]: {
              padding: '8rem 4rem 4rem 4rem'
            }
          }}>
            <img src={diagramDrawing} alt="Roofing optimized" />
          </Grid>
        </Grid>
        <Grid container sx={{ backgroundColor: 'white' }}>
          <Grid xs={12} lg={6}>
            <img src={wholeRoof} alt="Ventilation" style={{ padding: '2rem' }}></img>
          </Grid>
          <Grid xs={12} lg={6} sx={{
            display: 'grid',
            alignItems: 'center',
            p: '2rem',
            pt: 0,
            [theme.breakpoints.up('lg')]: {
              padding: '0 4rem 4rem 4rem'
            }
          }}>
            <div>
              <Typography variant="h4" color="primary.main">
                Roof Decking
              </Typography>
              <Typography variant="body1" color="primary.main">
                Once our crews remove all existing shingle layers
                we evaluate your roof deck and all rotten or
                cracked decking is replaced.
              </Typography>
              <Typography variant="h4" color="primary.main">
                Ice & Water Shield
              </Typography>
              <Typography variant="body1" color="primary.main">
                Designed to provide an additional layer of protection in
                areas such as valleys, eaves, chimneys and skylights
                where water has a tendency to collect and flow.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container sx={{ backgroundColor: 'primary.main' }}>
          <Grid xs={12} lg={6} sx={{
            p: '2rem',
            pt: 0,
            [theme.breakpoints.up('lg')]: {
              padding: '0 4rem 4rem 4rem'
            },
            display: 'flex',
            alignItems: 'center'
          }}>
            <div>
              <Typography variant="h4" color="white">
                Underlayment
              </Typography>
              <Typography variant="body1" color="white">
                High performance synthetic roof underlayments
                work with shingles to shield your home from moisture
                infiltration and are the last line of defense against
                leaks due to harsh Colorado weather.
              </Typography>
              <Typography variant="h4" color="white">
                Ventilation
              </Typography>
              <Typography variant="body1" color="white">
                Managing attic temperature with proper ventilation
                can increase the longevity and performance of your
                roof. Our team is here to help you select the best vents
                to enhance your roof system.
              </Typography>
            </div>
          </Grid>
          <Grid xs={12} lg={6}>
            <img src={wholeRoof} alt="Ventilation" style={{ padding: '2rem' }}></img>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
