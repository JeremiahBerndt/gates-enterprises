import './Testimonial.css';
import { ReactComponent as Star } from '../../../../assets/icons/star.svg';

export default function Testimonial({ text, reviewerName }) {
  return (
    <div className='mp-content-container testimonial'>
      <div className='testimonial-title'>
        <h3>{reviewerName}</h3>
        <div>
          <Star className='icon' fill={'#c9a32c'}/>
          <Star className='icon' fill={'#c9a32c'}/>
          <Star className='icon' fill={'#c9a32c'}/>
          <Star className='icon' fill={'#c9a32c'}/>
          <Star className='icon' fill={'#c9a32c'}/>
        </div>
      </div>
      <blockquote className='mp-content-text'>&quot;{text}&quot;</blockquote>
    </div>
  );
}
