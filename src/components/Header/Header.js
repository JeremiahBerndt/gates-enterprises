import './Header.css';
import PhoneIcon from '../../assets/icons/phone-call.svg';
import EmailIcon from '../../assets/icons/email.svg';
import HeaderButton from './HeaderButton/HeaderButton';
import Logo from '../Logo/Logo';

export default function Header() {
  const displayContactForm = () => {
    console.log('hi');
  };

  return (
    <header>
      <Logo disabled={false} />
      <nav className='page-buttons'>
        {/* <HeaderButton text='Home' /> */}
        <HeaderButton text='Services' />
        <HeaderButton text='Contact' handleClick={displayContactForm} />
        <HeaderButton text='Testimonials' />
        <HeaderButton text='Who We Are' />
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
