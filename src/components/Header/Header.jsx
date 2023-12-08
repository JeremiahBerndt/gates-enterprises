import { useState } from 'react';
import { Grid, Button, Tooltip, ClickAwayListener } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeaderButton from './HeaderButton/HeaderButton';
import DropDownMenu from './DropDownMenu';
import Logo from '../Logo/Logo.jsx';
import { Link } from 'react-router-dom';
import { email } from '../../util/email';
import './Header.css';

export default function Header({ displayContactForm }) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const onCloseDropdown = (e) => {
    if (e.target.nodeName === "A") {
      return setTimeout(() => setIsOpen(false), 300)
    }
    setIsOpen(false);
  }

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
            <div onMouseLeave={() => setIsOpen(false)}>
              <ClickAwayListener onClickAway={onCloseDropdown} >
                <Tooltip
                  id="basic-menu"
                  open={isOpen}
                  title={<DropDownMenu />}
                  componentsProps={{
                    tooltip: {
                      sx: {
                        marginTop: '0px!important',
                        bgcolor: 'white',
                        '& .MuiTooltip-arrow': {
                          color: 'primary.main',
                        },
                        fontSize: '1rem'
                      },
                    },
                  }}
                  onMouseEnter={() => setIsOpen(true)}
                  onClick={() => setIsOpen(true)}
                >
                  <Button
                    variant='text'
                    sx={{ color: 'white', textTransform: 'none', fontSize: '1em' }}
                  >
                    Services
                  </Button>
                </Tooltip>
              </ClickAwayListener>
            </div>
            <Link to="who-we-are" className='contact-info high-button'>
              <HeaderButton text='Who We Are' />
            </Link>
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