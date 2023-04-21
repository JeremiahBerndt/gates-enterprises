import './MainPage.css';
import Accolades from './Accolades/Accolades';
import Testimonials from './Testimonials/Testimonials';
import Inspection from './Inspection/Inspection';
import Rooftops from './Rooftops/Rooftops';

export default function MainPage() {
  return (
    <main>
      <Inspection name='Inspection' />
      <Accolades name='Accolades' />
      <Testimonials name='Testimonials' />
      <Rooftops name='Rooftops' />
    </main>
  );
}
