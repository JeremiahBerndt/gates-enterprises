import './Partners.css';
import OurPartners from '../../assets/images/OurPartners.png'

export default function Partners({ name }) {
  return (
    <section className={`page-content page-single ${name}`}>
      <img alt="Our Partners" src={OurPartners}></img>
    </section>
  );
}