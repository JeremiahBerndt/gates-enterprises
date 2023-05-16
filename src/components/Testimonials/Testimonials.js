import './Testimonials.css';
import Testimonial from './Testimonial/Testimonial';
import {reviewOne, reviewTwo, reviewThree} from '../../../util/reviews.js'


export default function Testimonials({ name }) {
  return (
    <section className={name}>
      <div className='testimonial-list'>
        <Testimonial text={reviewOne.review} reviewerName = {reviewOne.name}/>
        <Testimonial text={reviewTwo.review} reviewerName = {reviewTwo.name} />
        <Testimonial text={reviewThree.review} reviewerName = {reviewThree.name} />
      </div>
    </section>
  );
}
