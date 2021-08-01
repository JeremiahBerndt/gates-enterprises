import './Testimonial.css';
import Rating from '../../../../assets/icons/rating.svg';

export default function Testimonial({ text, reviewerName }) {
  return (
    <div className='mp-content-container testimonial'>
      <img className='icon' src={Rating} alt='rating' />
      <h3>{reviewerName}</h3>
      <p className='mp-content-text'>{text}</p>
    </div>
  );
}
