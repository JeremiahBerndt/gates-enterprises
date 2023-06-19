import { Link } from 'react-router-dom';
import GatesLogo from '../../assets/images/GatesLogo.jpg';
import { useTheme } from '@material-ui/core';
import { Box } from '@mui/material';

export default function Logo() {
  const theme = useTheme();
  return (
    <Link
      className={`logo`}
      to='/'
    >
      <Box
        component="img"
        width="50%"
        sx={{
          borderRadius: '50%',
        }}
        src={GatesLogo}
        alt='Gates Enterprises logo'
      />
    </Link>
  );
}
