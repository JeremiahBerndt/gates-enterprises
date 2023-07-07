import './Header.css';
import HeaderButton from './HeaderButton/HeaderButton';
import Logo from '../Logo/Logo.jsx';
import { Link } from 'react-router-dom';

export default function Header({ displayContactForm }) {

  return (
    <header>
      <Logo />
      <nav className='page-buttons'>
        <div className='page-buttons-list'>
          <HeaderButton
            text='Schedule Inspection'
            displayContactForm={displayContactForm} />
          <Link to="get-a-quote" className='contact-info'>
            <HeaderButton text='Get a Quote' />
          </Link>
          <Link to="services" className='contact-info'>
            <HeaderButton text='Services' />
          </Link>
          <Link to="who-we-are" className='contact-info'>
            <HeaderButton text='Who We Are' />
          </Link>
          <Link to="financing" className='contact-info'>
            <HeaderButton text='Financing' />
          </Link>
          <Link to="commercial" className='contact-info'>
            <HeaderButton text='Commercial' />
          </Link>
          <Link to="roof-faq" className='contact-info'>
            <HeaderButton text='Roof FAQ' />
          </Link>
        </div>
      </nav>
    </header>
  );
}