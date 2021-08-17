import './ContactForm.css';
// import { useState } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import PersonIcon from '@material-ui/icons/Person';
// import Email from '@material-ui/icons/Email';
// import PhoneIcon from '@material-ui/icons/Phone';
// import CloseIcon from '@material-ui/icons/Close';
// import useStyles from '../../util/materialuistyles';

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
