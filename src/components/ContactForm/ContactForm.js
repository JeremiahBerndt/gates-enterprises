import './ContactForm.css';
import TextField from '@material-ui/core/TextField';

export default function ContactForm({ displayContactForm }) {
  const body = (
    <div className='form-container'>
      <form onSubmit={(e) => e.preventDefault()}>
        <button className='form-close' onClick={displayContactForm}>
          x
        </button>
        <TextField
          className='form-input'
          id='name'
          label='Name'
          variant='filled'
          onChange={(e) => e.preventDefault()}
        />
        <TextField
          className='form-input'
          id='email'
          label='Email'
          variant='filled'
        />
      </form>
    </div>
  );
  return body;
}
