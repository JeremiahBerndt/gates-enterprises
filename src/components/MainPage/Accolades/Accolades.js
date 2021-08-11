import './Accolades.css';
import Medal from '../../../assets/icons/medal.svg';
import BBBLogo from '../../../assets/icons/accolades/bbb.svg';
import googLogo from '../../../assets/icons/accolades/google5star.png';
import masterLogo from '../../../assets/icons/accolades/masterelite.jpg';
import platLogo from '../../../assets/icons/accolades/platinumcontractor.jpg';
import shingleLogo from '../../../assets/icons/accolades/shinglemaster.jpg';
import nrcaLogo from '../../../assets/icons/accolades/nrca.png';
import oshaLogo from '../../../assets/icons/accolades/oshacert.png';
import homeadviseLogo from '../../../assets/icons/accolades/homeadvise.png';

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
          <img className='accolade' src={googLogo} alt='accolade' />
          <img className='accolade' src={masterLogo} alt='accolade' />
          <img className='accolade' src={platLogo} alt='accolade' />
          <img className='accolade' src={shingleLogo} alt='accolade' />
          <img className='accolade' src={nrcaLogo} alt='accolade' />
          <img className='accolade' src={oshaLogo} alt='accolade' />
          <img className='accolade' src={homeadviseLogo} alt='accolade' />
        </div>
      </div>
      <p className='accolade-title'>Our team has worked hard to achieve the highest credentials and
        awards from major roofing manufacturers for adhering to strict standards of customer service,
        professionalism, fiscal responsibility and training.<br/><br/>
        These certifications mean you can rely on Gates Enterprises to provide expert level
        installation, and when we are done you will receive the best extended warranty available
        from the manufacturer.</p>
    </section>
  );
}
