import './Services.css';
import services from '../../assets/images/services.png';
import system from '../../assets/images/system.png';
import ventilation from '../../assets/images/ventilation.png';
import roofersonroof from '../../assets/images/roofersonroof.jpg';
import roofOptimized from '../../assets/images/roof-optimized.png';
import Fix from '../../assets/icons/fix.svg';
import { Grid, Stack, Typography } from '@mui/material';
import Image from 'mui-image';
import { useTheme } from '@material-ui/core';

export default function Services2({ name }) {
  const theme = useTheme();

  return (
    <>
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
            src={roofersonroof}
            height="100%"
            width="100%"
            fit="cover"
            bgColor="inherit"
            style={{ zIndex: '-1', opacity: '0.3', position: 'absolute' }}
          />
          <Typography variant="h1" align="center" sx={{ position: 'absolute' }}>
            Services
          </Typography>
        </div>
        <Grid container backgroundColor='white'>
          <Grid xs={6}>
            <img
              src={services}
              alt="Services"
              style={{
                width: '100%',
                padding: '4rem',
                paddingTop: '8rem',
                objectFit: 'cover'
              }}
            />
          </Grid>
          <Grid xs={6} sx={{ padding: '8rem' }}>
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
        <Grid container backgroundColor='white'>

          <Grid xs={6} sx={{ padding: '8rem' }}>
            <Typography variant="h4" color="primary.main">
              Roofing systems optimized
            </Typography>
            <Typography variant="body1" color="primary.main">
              The Gates Team is here to help you
              select the best roofing components to
              build a complete roof system which will
              defend against forces of nature outside
              while controlling temperature and
              humidity inside.
            </Typography>

          </Grid>
          <Grid xs={6}>
            <img
              src={roofOptimized}
              alt="Roofing optimized"
              style={{
                width: '100%',
                padding: '4rem',
                objectFit: 'cover'
              }}
            />
          </Grid>
        </Grid>
        <Grid container
          direction="column"
          sx={{
            backgroundColor: 'white',
            '> div > img': {
              width: '100%',
              padding: '2rem',
              objectFit: 'cover'
            }
          }}>
          <Grid >
          </Grid>
          <Grid xs={6}>
            <img src={ventilation} alt="Ventilation"></img>
          </Grid>
        </Grid>
      </Stack>

      <div className='service-section'>
      </div>
      {/* <div className={`page-single section2`}>
          <h2 className='mp-content-title column-title'>
            Services
            <img className='icon' src={Fix} alt={name} />
          </h2>
          <ul className='service-list mp-content-text'>
            <li>Commercial & Residential</li>
            <li>Impact resistant shingles</li>
            <li>Luxury asphalt shingles</li>
            <li>Tile roofing</li>
            <li>Solar powered ventilation</li>
            <li>Wood Shake</li>
            <li>Rolled roofing</li>
            <li>Modified bitumen</li>
            <li>TPO</li>
            <li>EPDM</li>
          </ul>
        </div> */}
      <div className='service-section'>

      </div>
    </>

  );
}
