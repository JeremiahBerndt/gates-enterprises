import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import RoofingIcon from '@mui/icons-material/Roofing';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import Collapse from '@mui/material/Collapse';
import wheelbarrow from '../../assets/icons/wheelbarrow.png'
import List from '@mui/material/List';
import { Divider, Icon } from '@material-ui/core';

const ServicesNavigation = () => {

  const manufacturers = ['Owens Corning', 'GAF', 'Malarky'];

  const [openNav, setOpenNav] = useState({
    roof: false,
  })

  const [manuSelected, setManuSelected] = useState('Owens Corning');

  return (
    <List component="nav">
      <ListItemButton onClick={() => setOpenNav({ ...openNav, roof: !openNav.roof })}>
        <ListItemIcon>
          <RoofingIcon />
        </ListItemIcon>
        <ListItemText primary="Roofing" />
        {openNav.roof ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>

      <Collapse in={openNav.roof} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          {manufacturers.map((manu, i) => (
            <>
              <ListItemButton
                sx={{ pl: '74px'  }}
                onClick={() => setManuSelected(manu)}
                selected={manuSelected === manu}
              >
                <ListItemText primary={manu} />
              </ListItemButton>
              <Divider />
            </>
          ))}
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
        <HouseSidingIcon/>
        </ListItemIcon>
        <ListItemText primary="Siding" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Icon>
          <img src={wheelbarrow} height="24px" width="24px" color="#757575"></img>
          </Icon>
        </ListItemIcon>
        <ListItemText primary="Landscaping" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Concrete" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Ligma" />
      </ListItemButton>
    </List>
  )
};

export default ServicesNavigation;