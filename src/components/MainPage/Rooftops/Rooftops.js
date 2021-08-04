import './Rooftops.css';
import droneshot from '../../../assets/images/droneshot.mp4';

export default function Rooftops({ name }) {
  return (
    <section className={`page-content page-single ${name}`}>
      <p className='mp-title'>
        Locally Owned and Operated{' '}
        <span className='gold'>10+ Years Roofing Houses in Colorado</span>
      </p>
      <div className='video-container mp-content-container'>
        <video className='drone-video' autoPlay loop>
          <source src={droneshot} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}