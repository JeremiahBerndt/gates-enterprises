import './Header.css';
import HeaderButton from './HeaderButton/HeaderButton';
import Logo from '../Logo/Logo.jsx';
import { email } from '../../util/email';
import { useNavigate } from 'react-router-dom';

export default function Header({ displayContactForm, screenWidth }) {
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
            text='Roof Quote'
            handleClick={() => redirect('roof-quote')}
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
        </div>
      </nav>
      {/* <div className='contact-info-container'>
        <div className='contact-info'>
          {screenWidth > 991 && (
            <>
              <a href='tel:17203804763'>
                <HeaderButton name='phone' text='(720) 380-4763' icon={true} />
              </a>
              <a
                href={`mailto:${email.address}?&subject=${email.subject}&body=${email.body}`}
              >
                <HeaderButton
                  name='email'
                  text='GatesEnterprisesLLC@gmail.com'
                  icon={true}
                />
              </a>
              <HeaderButton name='instagram' icon={true} />
              <HeaderButton name='facebook' icon={true} />
            </>
          )}
          {screenWidth <= 991 && (
            <>
              <a
                href={`mailto:${email.address}?&subject=${email.subject}&body=${email.body}`}
              >
                <HeaderButton
                  name='email'
                  text='GatesEnterprisesLLC@gmail.com'
                  icon={true}
                />
              </a>
              <a href='tel:17203804763'>
                <HeaderButton name='phone' text='(720) 380-4763' icon={true} />
              </a>
              <div className='social-media-container'>
                <HeaderButton name='instagram' icon={true} />
                <HeaderButton name='facebook' icon={true} />
              </div>
            </>
          )}
        </div>
      </div> */}
    </header>
  );
}
