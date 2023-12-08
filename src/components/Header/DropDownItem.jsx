import { useState } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css';

const DropDownItem = ({ name, to }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Grid item
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        backgroundColor: hovered ? 'secondary.main' : 'white'
      }}
    >
      <Link to={to}
        style={{
          textDecoration: 'none',
          padding: '1em',
          color: '#062841'
        }}>
        {name}
      </Link>
    </Grid>
  );
}

export default DropDownItem;