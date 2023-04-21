import './Accolades.css';
import simplify from '../../../assets/images/Simplify.png';
import accolades from '../../../assets/images/Accolades.png';

export default function Accolades({ name }) {
  return (
    <section className={name}>
      <img className='accolade' src={simplify} alt='simplify the process'></img>
      <img className='accolade' src={accolades} alt='accolades'></img>
    </section>
  );
}
