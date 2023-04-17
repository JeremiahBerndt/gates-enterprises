import './Commercial.css';
import commercial from '../../../assets/images/commercial.png';
import commercialroof from '../../../assets/images/commercialroof.png';
import clientsatisfaction from '../../../assets/images/clientsatisfaction.png';
import commercialslides from '../../../assets/images/commercialslides.png';

export default function Commercial({ name }) {
  return (
    <>
      <section className={`page-content page-single ${name}`}>
        <div className='commercial-section'>
          <img src={commercialroof}></img>
          <img src={commercial}></img>
        </div>
        <div className='commercial-section'>
          <img className='slides' src={commercialslides}></img>
          <img className='slides' src={clientsatisfaction}></img>
        </div>
      </section>
    </>
  );
}
