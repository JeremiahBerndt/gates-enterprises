import { useState } from 'react';
import { Button, Tooltip, ClickAwayListener } from '@mui/material';
import DropDownMenu from './DropDownMenu';

const DropDownButton = ({ name, menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseDropdown = (e) => {
    if (e.target.nodeName === "A") {
      return setTimeout(() => setIsOpen(false), 300)
    }
    setIsOpen(false);
  }

  return (
    <div onMouseLeave={() => setIsOpen(false)}>
      <ClickAwayListener onClickAway={onCloseDropdown} >
        <Tooltip
          id="basic-menu"
          open={isOpen}
          title={<DropDownMenu menu={menu}/>}
          componentsProps={{
            tooltip: {
              sx: {
                marginTop: '0px!important',
                bgcolor: 'white',
                '& .MuiTooltip-arrow': {
                  color: 'primary.main',
                },
                fontSize: '1rem'
              },
            },
          }}
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(true)}
        >
          <Button
            variant='text'
            sx={{ color: 'white', textTransform: 'none', fontSize: '1em' }}
          >
            {name}
          </Button>
        </Tooltip>
      </ClickAwayListener>
    </div>
  );
}

export default DropDownButton;