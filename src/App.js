import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




function App() {
  const [ activeScreen, setActiveScreen ] = useState(quickAccess)
  const [tabValue, setTabValue] = useState(0);

  const [age, setAge] = useState('');
  
  

  function BasicSelect() {
    
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div className='fixed w-[50%] bottom-[79px]'>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              value={age}             
              onChange={handleChange}
              variant='filled'
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    );
  }
  

  // function menuButtonGroup() {
  //   return (
  //     <div className='w-screen h-[100px] fixed bottom-0'>            
  //         <ButtonGroup  
  //           size='large'          
  //           fullWidth='true'
  //           variant="contained" 
  //           aria-label="text button group">
  //           <Button icon={<PhoneMissedIcon />} iconPosition="start">One</Button>
  //           <Button startIcon={<DeleteIcon />}>Two</Button>
  //           <Button>Three</Button>
  //         </ButtonGroup>        
  //     </div>
  //   );
  // }

  function menuTabGroup() {
    const handleChange = (event, newValue) => {
      setTabValue(newValue);
    };
  
    return (  
      <div className='fixed w-screen bottom-0 h-[80px]'>  
        <Tabs 
          value={tabValue} 
          onChange={handleChange} 
          aria-label="icon label tabs example" 
          variant="fullWidth"
          sx={{
            '.MuiTabs-indicator': {top: 0}            
          }}>
          <Tab icon={<PhoneIcon />} label="RECENTS" />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs> 
      </div>     
    );
  }

  function quickAccess() {
    return (
      <div>
        <BasicSelect />
        <h1>
          Quick Access
        </h1>
      </div>
    )
  }

  function budgets() {
    return (
      <div>
        <h1>
          Budgets
        </h1>
      </div>
    )
  }

  console.log(tabValue)

  const showActiveScreen = () => tabValue === 0 ? quickAccess()
                              : tabValue === 1 ? budgets()
                              : tabValue === 2 ? <h1>test</h1>
                              : ''

  return (
    <div className="App">
      {showActiveScreen()}
      {menuTabGroup()}
      
    </div>
  );
}

export default App;
