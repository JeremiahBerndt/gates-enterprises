import './MainPage.css';
import Accolades from './Accolades/Accolades';
import Testimonials from './Testimonials/Testimonials';
import Inspection from './Inspection/Inspection';

export default function MainPage() {
  return (
    <main className='page-content'>
      <Inspection name='Inspection' />
      <Accolades name='Accolades' />
      <Testimonials name='Testimonials' />
    </main>
  );
}
