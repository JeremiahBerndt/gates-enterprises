import { Link } from 'react-router-dom';
import GatesLogo from '../../assets/images/GatesLogo.jpg';
import './Logo.css';

export default function Logo({ disabled }) {
  return (
    <Link className={`logo ${disabled ? 'disable' : ''}`} to='/'>
      <img
        src={GatesLogo}
        alt='Gates Enterprises logo'
        width={'100%'}
      />
    </Link>
  );
}
