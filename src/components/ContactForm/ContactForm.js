import './ContactForm.css';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { toaster } from '../../util/animations';

export default function ContactForm({ displayContactForm, openContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = () => {
    const contactInfo = { name, email };
    console.log(contactInfo);
    setName('');
    setEmail('');
    displayContactForm();
  };

  const handleChange = (e) => {
    if (e.target.id === 'name') {
      setName(e.target.value);
    }
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    }
  };

  return (
    <div className={`form-bg ${!openContact ? 'hidden' : ''}`}>
      <div className={`form-container ${toaster}`}>
        <button className='form-close' onClick={displayContactForm}>
          x
        </button>
        <h1 className='mp-content-title'>Contact Us!</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextField
            className='form-input'
            id='name'
            label='Name'
            variant='filled'
            value={name}
            onChange={handleChange}
          />
          <TextField
            className='form-input'
            id='email'
            label='Email'
            variant='filled'
            value={email}
            onChange={handleChange}
          />
          <Button
            variant='contained'
            onClick={submitForm}
            size='large'
            color='primary'
            disabled={!name || !email ? true : false}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
