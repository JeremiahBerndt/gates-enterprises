import './Header.css';
import HeaderButton from './HeaderButton/HeaderButton';
import Logo from '../Logo/Logo.jsx';
import { useNavigate } from 'react-router-dom';

export default function Header({ displayContactForm }) {
  const navigate = useNavigate();
  const redirect = (path) => {
    navigate(`/${path}`);
  };

  return (
    <header>
      <Logo />
      <nav className='page-buttons'>
        <div className='page-buttons-list'>
          <HeaderButton
            text='Schedule Inspection'
            handleClick={displayContactForm} />
          <HeaderButton
            text='Get a Quote'
            handleClick={() => redirect('get-a-quote')}
          />
          <HeaderButton
            text='Services'
            handleClick={() => redirect('services')}
          />
          <HeaderButton
            text='Who We Are'
            handleClick={() => redirect('who-we-are')}
          />
          <HeaderButton
            text='Financing'
            handleClick={() => redirect('financing')}
          />
          <HeaderButton
            text='Commercial'
            handleClick={() => redirect('commercial')}
          />
          <HeaderButton
            text='Roof FAQ'
            handleClick={() => redirect('roof-faq')}
          />
        </div>
      </nav>
    </header>
  );
}