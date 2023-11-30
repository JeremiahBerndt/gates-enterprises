import { useTheme } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GatesLogo from '../../assets/images/gatesLogoNew.png';

export default function Logo() {
  const theme = useTheme();
  return (
    <Link to='/'>
      <Box
        component="img"
        width="100%"
        height="100%"
        sx={{
          borderRadius: '50%',
        }}
        src={GatesLogo}
        alt='Gates Enterprises logo'
      />
    </Link>
  );
}
