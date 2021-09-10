import './ContactForm.css';

import { toaster } from '../../util/animations';

export default function ContactForm({ displayContactForm, openContact }) {

  return (
    <div className={`form-bg ${!openContact ? 'hidden' : ''}`}>
      <div className={`connect-form-and-close ${toaster}`}>
        <button className='form-close' onClick={displayContactForm}>X</button>
        <iframe className='form-container' title="emailForm"
          src='https://forms.zohopublic.com/nstovall/form/EmailContact/formperma/-rFYspqYwcc9i7PEtVrDNxgPQF4bqIBmeSILkVCo96c'></iframe>
      </div>
    </div>
  );
}
