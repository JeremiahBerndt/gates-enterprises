import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material';
import Logo from '../Logo/Logo.jsx';

export default function Footer() {
  const theme = useTheme();

  return (
    <footer style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '8rem',
      // [theme.breakpoints.up('lg')]: {
      //   height: '6rem'
      // }
    }}>
      <Logo />
      <Grid container direction="column" spacing={1} sx={{
        '> div > div': {
          fontSize: '1rem'
        }
      }}>
        <Grid>
          <div>Gates Enterprises LLC</div>
        </Grid>
        <Grid>
          <div>1445 Holland St. Lakewood CO, 80215</div>
        </Grid>
        <Grid>
          <div>(720) 380-4763</div>
        </Grid>
      </Grid>
    </footer>
  )
}
