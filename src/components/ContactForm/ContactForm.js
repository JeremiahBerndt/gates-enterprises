import './ContactForm.css';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import Email from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../../util/materialuistyles';

import { toaster } from '../../util/animations';

export default function ContactForm({ displayContactForm, openContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const submitForm = () => {
    const contactInfo = { name, email, phone };
    console.log(contactInfo);
    setName('');
    setEmail('');
    setPhone('');
    displayContactForm();
  };

  const handleChange = (e) => {
    if (e.target.id === 'name') {
      setName(e.target.value);
    }
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.id === 'phone') {
      setPhone(e.target.value);
    }
  };

  const classes = useStyles();

  return (
    <div className={`form-bg ${!openContact ? 'hidden' : ''}`}>
      <div className={`form-container ${toaster}`}>
        <button className='form-close' onClick={displayContactForm}>
          <CloseIcon className={classes.close} />
        </button>
        <h1 className='mp-content-title'>Contact Us!</h1>
        <p className='contact-form-info'>
          Provide us with your contact info, and we'll get in touch with you
          ASAP
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextField
            className={classes.root}
            id='name'
            label='Name'
            variant='filled'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            value={name}
            onChange={handleChange}
          />
          <TextField
            className={`${classes.root} ${classes.textarea}`}
            id='email'
            label='Email'
            variant='filled'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Email />
                </InputAdornment>
              ),
            }}
            value={email}
            onChange={handleChange}
          />
          <TextField
            className={classes.root}
            id='phone'
            label='Phone (optional)'
            variant='filled'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
            value={phone}
            onChange={handleChange}
          />
          <Button
            className={classes.submit}
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
