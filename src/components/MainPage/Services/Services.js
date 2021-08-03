import './Services.css';
import Fix from '../../../assets/icons/fix.svg';

export default function Services({ name }) {
  return (
    <section className={`page-content page-single ${name}`}>
      <p className='mp-title'>
        Locally Owned and Operated{' '}
        <span className='gold'>10+ Years Roofing Houses in Colorado</span>
      </p>
      <div className='service-list-container mp-content-container'>
        <p className='mp-content-title column-title'>
          Services
          <img className='icon' src={Fix} alt={name} />
        </p>
        <ul className='service-list mp-content-text'>
          <li>Commercial & Residential</li>
          <li>Impact resistant shingles</li>
          <li>Luxury asphalt shingles</li>
          <li>Tile roofing</li>
          <li>Solar powered roof ventilation</li>
          <li>Wood Shake</li>
          <li>Rolled roofing</li>
          <li>Modified bitumen</li>
          <li>TPO</li>
          <li>EPDM</li>
        </ul>
      </div>
    </section>
  );
}
