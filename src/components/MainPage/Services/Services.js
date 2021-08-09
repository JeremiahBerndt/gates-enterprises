import './Services.css';
import Fix from '../../../assets/icons/fix.svg';

export default function Services({ name }) {
  return (
    <section className={`page-content page-single ${name}`}>
      <div>
        <h2 className='mp-content-title'>A Warranty You Can Count On</h2>
        <p>Gates Enterprises is proud to stand by our work and materials by offering our
          clients an industry leading 5-year workmanship warranty!
          As a reliable, established local company we are here for the long haul, so unlike
          storm chases who will leave town after the storm you’ll be able to count on us
          to guarantee our workmanship warranty.<br></br><br></br><br></br>
        </p>
        <h2 className='gold mp-content-title'>We Know Colorado</h2>
        <p>Our team lives, works and knows Colorado weather and this understanding of
          our unique climate allows our roofing professionals to help you select the
          products that will provide the best protection for your home.
          We understand that a roof system is so much more than just the shingles, and
          will help you maximize your roof’s performance by hand selecting the best
          components for each layer.
        </p>
      </div>
      <div className='service-list-container mp-content-container'>
        <h2 className='mp-content-title column-title'>
          Services
          <img className='icon' src={Fix} alt={name} />
        </h2>
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
