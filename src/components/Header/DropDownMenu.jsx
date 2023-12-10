import { Grid } from '@mui/material';
import DropDownItem from './DropDownItem';
import { useTheme } from '@mui/material/styles';

const DropDownMenu = ({ menu }) => {
  const theme = useTheme();

  return (
    <Grid
      onClick={(e) => e.stopPropagation()}
      sx={{
        backgroundColor: 'white',
        '> div': {
          p: '0.5rem',
          color: 'primary.main',
          fontSize: '0.8em'
        },
        [theme.breakpoints.up('md')]: {
          '> div': {
            fontSize: '1em'
          }
        }
      }}>
        {menu.map((item, i) => <DropDownItem name={item.name} to={item.to} key={`${i + item.to}`}/>)}
    </Grid>
  )
}

export default DropDownMenu;