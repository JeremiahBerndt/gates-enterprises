import './HeaderButton.css';
import useStyles from '../../../util/materialuistyles';
import Email from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function HeaderButton({ name, text, icon, handleClick }) {
  const classes = useStyles();

  return (
    <button
      tabIndex={icon && -1}
      className={icon ? 'low-button' : 'high-button' + ' headerButton'}
      onClick={handleClick}
      style={icon ? { display: 'flex', paddingLeft: '1rem' } : {}}
    >
      {name === 'phone' && <PhoneIcon sx={{ color: 'white' }} />}
      {name === 'email' && <Email className={classes.icon} />}
      {name === 'instagram' && (
        <a
          href='https://www.instagram.com/gatesroofing/?hl=en'
          target='_blank'
          rel='noreferrer'
        >
          <InstagramIcon className={classes.icon} style={{ fill: "#c9a32c" }}/>
        </a>
      )}
      {name === 'facebook' && (
        <a
          href='https://www.facebook.com/profile.php?id=100087607205221'
          target='_blank'
          rel='noreferrer'
        >
          <FacebookIcon className={classes.icon} style={{ fill: "#c9a32c" }}/>
        </a>
      )}
      {text && <p>{text}</p>}
    </button>
  );
}
