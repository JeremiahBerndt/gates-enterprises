import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import rooferwork from '../../../assets/images/rooferwork.mp4'
import { useTheme } from '@mui/material';

const InsuranceOrQuote = () => {
  const theme = useTheme();
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{ position: "absolute", filter: 'brightness(60%) opacity(0.7)', height: 'inherit', width: '100%', objectFit: 'cover', zIndex: -1 }}>
        <source src={rooferwork} type='video/mp4' />
      </video>
      <Grid container sx={{ margin: 0, ...theme.twoRow }}>
        <Grid xs={12} sm={6}>
          <Typography variant="h2" align="center">
            Insurance
          </Typography>
          <Typography variant="h3" sx={{ paddingY: '2rem' }}>
            Our team simplifies the insurance claim process
          </Typography>
          <Typography variant="h5">
            Our expertise working with insurance providers allows us to help you navigate the claims process with ease. We are there to assist along every step of the process to make sure you get the repairs your home needs.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6}>
          <Typography variant="h2" align="center">
            Financing
          </Typography>
          <Typography variant="h3" sx={{ paddingY: '2rem' }}>
            We can help with financing
          </Typography>
          <Typography variant="h5">
            Limited, or no insurance coverage? No problem!
            When it is determined that your roof has significant damage, your first choice
            should always be to file a claim with your insurance company, but when this is
            not an option there are alternative resources to fund your investment.
            <br /><br />
            Ask your Gates Enterprises representative to learn more about how we can
            help finance your roof.
          </Typography>
        </Grid>
      </Grid>
    </>
  )
};

export default InsuranceOrQuote;