import './ContactForm.css';

import { toaster } from '../../util/animations';

export default function ContactForm({ displayContactForm, openContact }) {

  return (
    <div className={`form-bg ${!openContact ? 'hidden' : ''}`}>
      <div className={`connect-form-and-close ${toaster}`}>
        <button className='form-close' onClick={displayContactForm}>X</button>
        <iframe frameborder="0" style={{ height: '100vh', width: '99%' }} title="contact form"
        src='https://forms.zohopublic.com/nstovall/form/Scheduleyourinspection/formperma/hRJK0od7mzbe8KZb1b8FmxM8UTPAMxuvKbqwQ5w5Yf4'></iframe>
      </div>
    </div>
  );
}
