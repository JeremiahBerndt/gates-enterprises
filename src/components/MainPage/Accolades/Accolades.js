import './Accolades.css';
import Medal from '../../../assets/icons/medal.svg';
import BBBLogo from '../../../assets/icons/accolades/bbb.svg';

export default function Accolades({ name }) {
  return (
    <section className={name}>
      <div className='accolades-container mp-content-container'>
        <p className='mp-content-title column-title'>
          Accolades
          <img className='icon' src={Medal} alt={name} />
        </p>
        <div className='accolades-list'>
          <img className='accolade' src={BBBLogo} alt='accolade' />
          <img className='accolade' src={BBBLogo} alt='accolade' />
          <img className='accolade' src={BBBLogo} alt='accolade' />
          <img className='accolade' src={BBBLogo} alt='accolade' />
          <img className='accolade' src={BBBLogo} alt='accolade' />
          <img className='accolade' src={BBBLogo} alt='accolade' />
          <img className='accolade' src={BBBLogo} alt='accolade' />
          <img className='accolade' src={BBBLogo} alt='accolade' />
        </div>
      </div>
      <p className='mp-title'>We Guarantee Satisfaction on Every Job</p>
    </section>
  );
}
