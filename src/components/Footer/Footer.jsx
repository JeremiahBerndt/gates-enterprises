import { Grid } from '@mui/material';
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
    }}>
      <Grid sx={{ width: '8rem', height: '8rem' }}>
        <Logo />
      </Grid>
      <Grid container direction="column" sx={{
        width: '70%',
        px: '1.5rem',
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
          <div>(720) 766-3377</div>
        </Grid>
        <Grid>
          <div>© 2024 Gates Roof | All Rights Reserved.</div>
        </Grid>
      </Grid>
    </footer>
  )
}
