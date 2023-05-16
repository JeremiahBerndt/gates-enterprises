import './Financing.css';
import financeImg from '../../assets/images/Financing.png'

export default function Financing({ name }) {
  return (
    <section className={`page-content page-single ${name}`}>
      <img src={financeImg} alt="Financing"></img>
    </section>
  );
}