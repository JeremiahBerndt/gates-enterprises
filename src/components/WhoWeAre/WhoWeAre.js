import './WhoWeAre.css';
import houseImage from '../../assets/images/WhoWeAre.png';
import house1 from '../../assets/images/house1.png';
import house2 from '../../assets/images/house2.png';
import house3 from '../../assets/images/house3.png';
import house4 from '../../assets/images/house4.png';
import house5 from '../../assets/images/house5.png';
import house6 from '../../assets/images/house6.png';
import house7 from '../../assets/images/house7.png';
import house8 from '../../assets/images/house8.png';
import house11 from '../../assets/images/house11.png';

export default function WhoWeAre({ name }) {
  return (
    <section className='WhoWeAre page-content'>
      <div className='wwa-container'>
        <div>
          <h1 className='wwa-title'>{name}</h1>
          <img src={houseImage} alt="Who We Are"></img>
        </div>
        <div className='mp-content-container'>
          <p className='mp-content-text'>
            Gates Enterprises LLC is committed to providing our customers with an
            unparalleled level of expertise and customer service in all our
            re-roofing projects. We are a small team hand picked for their
            expertise in exteriors construction and insurance claim management.
            <br />
            <br /> If you are overwhelmed or stressed about hail damage to your
            property; or simply have high expectations for anyone providing work
            or services on your largest investment; you have found the most
            equipped company for the job. Call or email us now for a complimentary
            and honest inspection at your property.
          </p>
        </div>
      </div>
      <div className='collage'>
        <img src={house6} alt={"Photos of our work 1"}></img>
        <img src={house2} alt={"Photos of our work 2"}></img>
        <img src={house11} alt={"Photos of our work 3"} style={{ margin: 1 }}></img>
        <img src={house3} alt={"Photos of our work 4"}></img>
        <img src={house4} alt={"Photos of our work 5"}></img>
        <img src={house5} alt={"Photos of our work 6"} style={{ objectFit: 'none' }}></img>
        <img src={house8} alt={"Photos of our work 7"}></img>
        <img src={house1} alt={"Photos of our work 8"}></img>
        <img src={house7} alt={"Photos of our work 9"}></img>
      </div>
    </section>
  );
}
