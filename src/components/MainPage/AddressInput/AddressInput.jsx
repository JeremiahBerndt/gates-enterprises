import { useTheme } from '@mui/material';
import Image from 'mui-image';
import skyline from '../../../assets/images/skyline.jpg'
import { Typography, Box } from '@mui/material';
import { slideFromLeft } from '../../../util/animations';
import { useInView } from 'react-intersection-observer';

const AddressInput = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({
    threshold: 1,
    delay: 2,
    triggerOnce: true
  });

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
        ref={ref}
        className={inView ? slideFromLeft : null}
        sx={{
          position: 'absolute',
          top: '10%',
          [theme.breakpoints.up('sm')]: {
            top: '15%',
          },
          p: '1rem',
          [theme.breakpoints.up('md')]: {
            p: '5rem',
          },
        }}>
        <Typography
          component="h1"
          variant="h2"
          sx={{
            pb: 2,
            [theme.breakpoints.up('md')]: {
              pb: 0,
            },
          }}
        >
          Getting a new roof is easier than ever. <br />
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