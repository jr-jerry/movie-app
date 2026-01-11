import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  's2',
  'Show1',
  'Hide',
  'Hide ',
];

export default function GenreMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="category"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{
            margin:0,
            padding:0,

          }}
        >
          <ListItemText
            primary="Category"
            secondary={options[selectedIndex]}
            sx={{
                '& .MuiListItemText-primary':{
                    color:'white',
                    fontWeight:500
                },
                '& .MuiListItemText-secondary':{
                    color:'rgba(255,255,255,0.7)'
                }
            }}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
