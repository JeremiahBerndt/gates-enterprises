import './ContactForm.css';
import { toaster } from '../../util/animations';

export default function ContactForm({ displayContactForm, src, title }) {

  return (
    <div className='form-bg'>
      <div className={`connect-form-and-close ${toaster}`}>
        <button className='form-close' onClick={displayContactForm}>X</button>
        <iframe
          style={{ height: '100vh', width: '99%' }} 
          title={title}
          src={src}
        >
        </iframe>
      </div>
    </div>
  );
}
