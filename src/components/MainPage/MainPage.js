import './MainPage.css';
import Services from './Services/Services';
import Accolades from './Accolades/Accolades';
import Testimonials from './Testimonials/Testimonials';
import WhoWeAre from './WhoWeAre/WhoWeAre';

export default function MainPage() {
  return (
    <main>
      <Services name='Services' />
      <Accolades name='Accolades' />
      <Testimonials name='Testimonials' />
      <WhoWeAre name='Who We Are' />
    </main>
  );
}
