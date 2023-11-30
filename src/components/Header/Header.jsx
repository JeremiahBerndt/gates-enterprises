import { useState } from 'react';
import { Grid, Menu, MenuItem, ListItemText, Button, Tooltip } from '@mui/material';
import HeaderButton from './HeaderButton/HeaderButton';
import Logo from '../Logo/Logo.jsx';
import { Link } from 'react-router-dom';
import { email } from '../../util/email';
import { useTheme } from '@mui/material/styles';
import './Header.css';

export default function Header({ displayContactForm }) {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  // const open = anchorEl;
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <div style={{ width: '10rem' }}>
        <Logo />
      </div>
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
      }}>
        <nav className='page-buttons'>
          <div className='page-buttons-list'>
            <HeaderButton
              text='Schedule Inspection'
              displayContactForm={displayContactForm} />
            <Link to="get-a-quote" className='contact-info high-button'>
              <HeaderButton text='Get a Quote' />
            </Link>
            <div>

              <Tooltip
                id="basic-menu"
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={handleClose}
                sx={{
                  ' div:nth-child(3)': {
                    backgroundColor: 'secondary.main'
                  }
                }}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                              <Button
                aria-controls={anchorEl ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={anchorEl ? 'true' : undefined}
                // to="services"
                className='contact-info'
                onMouseOver={(e) => setAnchorEl(e.currentTarget)}
                onMouseLeave={() => setAnchorEl(null)}
              >
                <HeaderButton text='Services' />
              </Button>
                <MenuItem>
                  <Link to="services" className='contact-info high-button'>
                    <HeaderButton text='Residential' />
                  </Link>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Residential</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Commercial</ListItemText>
                </MenuItem>
              </Tooltip>
            </div>
            <Link to="who-we-are" className='contact-info high-button'>
              <HeaderButton text='Who We Are' />
            </Link>
            <Link to="financing" className='contact-info high-button'>
              <HeaderButton text='Financing' />
            </Link>
            <Link to="commercial" className='contact-info high-button'>
              <HeaderButton text='Commercial' />
            </Link>
            <Link to="roof-faq" className='contact-info high-button'>
              <HeaderButton text='Roof FAQ' />
            </Link>
          </div>
        </nav>
        <Grid container
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 2,
          }}
          sx={{
            [theme.breakpoints.down(400)]: {
              top: '10rem!important'
            }
          }}
        >
          <Grid item>
            <a href='tel:17207663377' className="contact-info">
              <HeaderButton name='phone' text='(720)-ROOFERS' icon={true} />
            </a>
          </Grid>
          <Grid item>
            <a href={`mailto:${email.address}?&subject=${email.subject}&body=${email.body}`} className="contact-info">
              <HeaderButton
                name='email'
                text='info@gatesroof.com'
                icon={true}
              />
            </a>
          </Grid>
          <Grid item sx={{ display: 'flex' }}>
            <HeaderButton name='instagram' icon={true} />
            <HeaderButton name='facebook' icon={true} />
          </Grid>
        </Grid>
      </div>
    </header>
  );
}