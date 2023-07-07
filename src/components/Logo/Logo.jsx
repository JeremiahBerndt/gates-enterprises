import { useTheme } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GatesLogo from '../../assets/images/GatesLogo.jpg';

export default function Logo() {
  const theme = useTheme();
  return (
    <Link to='/'>
      <Box
        component="img"
        sx={{
          width:"8rem",
          borderRadius: '50%',
        }}
        src={GatesLogo}
        alt='Gates Enterprises logo'
      />
    </Link>
  );
}
