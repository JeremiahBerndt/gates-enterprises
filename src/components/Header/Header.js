import './Header.css';
import HeaderButton from './HeaderButton/HeaderButton';
import Logo from '../Logo/Logo';
import { email } from '../../util/email';

export default function Header({ displayContactForm, screenWidth }) {
  const scrollToElement = (e) => {
    const target = e.target.innerText.split(' ').join('');
    const targetEl = document.querySelector(`.${target}`);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header>
      <Logo disabled={false} />
      <nav className='page-buttons'>
        <div className='page-buttons-list'>
          <HeaderButton text='Contact Us' handleClick={displayContactForm} />
          <HeaderButton text='Services' handleClick={scrollToElement} />
          <HeaderButton text='Testimonials' handleClick={scrollToElement} />
          <HeaderButton text='Who We Are' handleClick={scrollToElement} />
        </div>
      </nav>
      <div className='contact-info-container'>
        <div className='contact-info'>
          {screenWidth > 480 && (
            <>
              <a href='tel:17207758369'>
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
          {screenWidth <= 480 && (
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
              <a href='tel:17207758369'>
                <HeaderButton name='phone' text='(720) 380-4763' icon={true} />
              </a>
              <div className='social-media-container'>
                <HeaderButton name='instagram' icon={true} />
                <HeaderButton name='facebook' icon={true} />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
