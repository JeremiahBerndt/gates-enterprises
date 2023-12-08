import { Grid } from '@mui/material';
import DropDownItem from './DropDownItem';
import './Header.css';

const DropDownMenu = () => {
  return (
    <Grid
      onClick={(e) => e.stopPropagation()}
      sx={{
        backgroundColor: 'white',
        '> div': {
          p: '1rem',
          color: 'primary.main',
          fontSize: '1em'
        }
      }}>
        <DropDownItem name={'Get A Quote'} to={'get-a-quote'}/>
        <DropDownItem name={'Residential Services'} to={'services'}/>
        <DropDownItem name={'Commercial Services'} to={'commercial'}/>
    </Grid>
  )
}

export default DropDownMenu;