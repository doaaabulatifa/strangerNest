import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [location, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem value={10}>uk</MenuItem>
          <MenuItem value={20}>us</MenuItem>
          <MenuItem value={30}>canada</MenuItem>
          <MenuItem value={40}>sweden</MenuItem>
          <MenuItem value={50}>Danemark</MenuItem>
          <MenuItem value={60}>uae</MenuItem>
          <MenuItem value={70}>Jordan</MenuItem>
          <MenuItem value={80}>Norway</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
