import './Testimonials.css';
import Testimonial from './Testimonial/Testimonial';
const jibberish =
  'Nostrud sint culpa ut labore excepteur amet ad dolore deserunt voluptate ex anim enim laborum. Voluptate qui velit magna dolor eiusmod ex quis adipisicing irure. Irure non qui amet ipsum id in sint officia do proident in amet.';

export default function Testimonials({ name }) {
  return (
    <section className={name}>
      <p className='mp-title'>Testimonials</p>
      <div className='testimonial-list'>
        <Testimonial text={jibberish} />
        <Testimonial text={jibberish} />
        <Testimonial text={jibberish} />
      </div>
    </section>
  );
}
