import './Testimonial.css';
import Rating from '../../../../assets/icons/rating.svg';

export default function Testimonial({ text, reviewerName }) {
  return (
    <div className='mp-content-container testimonial'>
      <div className='testimonial-title'>
        <img className='icon' src={Rating} alt='rating' />
        <h3>{reviewerName}</h3>
      </div>
      <p className='mp-content-text'>{text}</p>
    </div>
  );
}
