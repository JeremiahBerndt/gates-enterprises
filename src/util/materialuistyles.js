import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFilledInput-root': {
      background: 'rgb(232, 241, 250)',
    },
  },
	textarea: {
		width: '100%'
	},
	submit: {
		marginTop: '2em',
		padding: '20px'
	},
	close: {
		width: '.8em',
    alignSelf: 'center',
    height: 'auto',
		'@media screen and (max-width: 480px)': {
			width: '.6em',
			padding: '30px 0'
		}
	},
	icon: {
		fontSize: '1.3em'
	}
}));

export default useStyles
