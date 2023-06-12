import './Footer.css';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Logo from '../Logo/Logo.jsx';

export default function Footer() {
  return (
    <footer style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      bottom: 0,
      left: 0,
      height: '6rem',
    }}>
      <Logo />
      <Grid container direction="column" spacing={1}>
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
