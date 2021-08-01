import './MainPage.css';
import Services from './Services/Services';
import Accolades from './Accolades/Accolades';
import Testimonials from './Testimonials/Testimonials';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Inspection from './Inspection/Inspection';

export default function MainPage() {
  return (
    <main>
      <Inspection name = 'Inspection'/>
      <Services name='Services' />
      <Accolades name='Accolades' />
      <Testimonials name='Testimonials' />
      <WhoWeAre name='Who We Are' />
    </main>
  );
}
