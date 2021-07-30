import './Header.css';
import PhoneIcon from '../../assets/icons/phone-call.svg';
import EmailIcon from '../../assets/icons/email.svg';
import HeaderButton from './HeaderButton/HeaderButton';
import Logo from '../Logo/Logo';

export default function Header({ displayContactForm }) {
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
          {/* <HeaderButton text='Home' /> */}
          <HeaderButton text='Services' handleClick={scrollToElement} />
          <HeaderButton text='Contact Us' handleClick={displayContactForm} />
          <HeaderButton text='Testimonials' handleClick={scrollToElement} />
          <HeaderButton text='Who We Are' handleClick={scrollToElement} />
        </div>
      </nav>
      <div className='contact-info-container'>
        <div className='contact-info'>
          <HeaderButton text='(720) 380-4763' icon={PhoneIcon} />
          <HeaderButton text='GatesEnterprisesLLC@gmail.com' icon={EmailIcon} />
        </div>
      </div>
    </header>
  );
}
