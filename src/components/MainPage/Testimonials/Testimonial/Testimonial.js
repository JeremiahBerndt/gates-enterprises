import './Testimonial.css';
import Rating from '../../../../assets/icons/rating.svg';

export default function Testimonial({ text }) {
  return (
    <div className='mp-content-container testimonial'>
      <img className='icon' src={Rating} alt='rating' />
      <p className='mp-content-text'>{text}</p>
    </div>
  );
}
