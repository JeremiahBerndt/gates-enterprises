import { useState } from 'react';
import { Grid, Button, Tooltip, ClickAwayListener } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeaderButton from './HeaderButton/HeaderButton';
import DropDownButton from './DropDownButton';
import Logo from '../Logo/Logo.jsx';
import { Link } from 'react-router-dom';
import { email } from '../../util/email';
import './Header.css';

export default function Header({ displayContactForm }) {
  const theme = useTheme();

  return (
    <header>
      <div style={{ width: '20%', height: 'auto', display: 'flex', alignItems: 'center' }}>
        <Logo />
      </div>
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
      }}>
        <nav className='page-buttons'>
          <div className='page-buttons-list' >
            <HeaderButton
              color='#c9a32c'
              text='Schedule Inspection'
              displayContactForm={displayContactForm} />
            <DropDownButton name={'Services'} menu={[
              {name: 'Get A Quote', to: 'get-a-quote'},
              {name: 'Residential Services', to: 'services'},
              {name: 'Commercial Services', to: 'commercial'}
            ]}/>
            <DropDownButton name={'About Us'} menu={[
              {name: 'Who We Are', to: 'who-we-are'},
              {name: 'Mission Statement', to: 'mission-statement'},
            ]}/>
            <Link to="financing" className='contact-info high-button'>
              <HeaderButton text='Financing' />
            </Link>
            <Link to="careers" className='contact-info high-button'>
              <HeaderButton text='Careers' />
            </Link>
            <Link to="roof-faq" className='contact-info high-button'>
              <HeaderButton text='Roofing FAQ' />
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