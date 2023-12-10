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
      height: '6rem',
    }}>
      <div style={{ width: '6.4rem', height: '6rem' }}>
        <Logo />
      </div>
      <Grid container direction="column" spacing={1} sx={{
        pl: '2rem',
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
      </Grid>
    </footer>
  )
}
