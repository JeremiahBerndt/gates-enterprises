import './HeaderButton.css';
import Email from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import useStyles from '../../../util/materialuistyles';

export default function HeaderButton({ name, text, icon, handleClick }) {
  const classes = useStyles();

  return (
    <button
      tabIndex={icon && -1}
      className={icon ? 'low-button' : 'high-button'}
      onClick={handleClick}
    >
      {name === 'phone' && <PhoneIcon className={classes.icon} />}
      {name === 'email' && <Email className={classes.icon} />}
      {name === 'instagram' && (
        <a
          href='https://www.instagram.com/gatesroofing/?hl=en'
          target='_blank'
          rel='noreferrer'
        >
          <InstagramIcon className={classes.icon} />
        </a>
      )}
      {name === 'facebook' && (
        <a
          href='https://www.facebook.com/profile.php?id=100087607205221'
          target='_blank'
          rel='noreferrer'
        >
          <FacebookIcon className={classes.icon} />
        </a>
      )}
      {text && <p>{text}</p>}
    </button>
  );
}
