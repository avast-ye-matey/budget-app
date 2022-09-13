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

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';


// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




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

  function FormDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
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
      <div className='fixed w-screen bottom-0 z-1 bg-white'>  
        <Tabs 
          value={tabValue} 
          onChange={handleChange} 
          aria-label="icon label tabs example" 
          variant="fullWidth"
          sx={{
            '.MuiTabs-indicator': {top: 0}            
          }}>
          <Tab icon={<PhoneIcon />} label="quick access" />
          <Tab icon={<FavoriteIcon />} label="budgets" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs> 
      </div>     
    );
  }

  // function quickAccessHeader() {
  //   return (
  //     <div>

  //     </div>
  //   )
  // }

  function QuickAccessHeader() {
    const quickAccessTitle = 'surplus'
    const quickAccessTitleValue = 1

    const quickAccessTitleInValue = 99
    const quickAccessTitleIn = 'in'
    
    const quickAccessTitleOutValue = 100
    const quickAccessTitleOut = 'out'

    const allowanceValueDay = 80
    const allowanceValueMonth = 200
    

      return (
        <div className='flex flex-col items-center w-screen text-center'>
            <Typography variant='h3' gutterBottom>{quickAccessTitle}</Typography>
            <Typography variant='h3' gutterBottom>${quickAccessTitleValue}</Typography>

          <div className='flex flex-row w-screen justify-evenly items-center'>
            <div>
              <Typography variant='h5' gutterBottom>${quickAccessTitleInValue}</Typography>
              <Typography variant='h5' gutterBottom>{quickAccessTitleIn}</Typography>              
            </div>
            {/* <div>
              <Typography variant='h5' gutterBottom>vs</Typography>
            </div> */}
            <div>
              <Typography variant='h5' gutterBottom>${quickAccessTitleOutValue}</Typography>
              <Typography variant='h5' gutterBottom>{quickAccessTitleOut}</Typography>              
            </div>
          </div>

          <div className='bg-white w-[85%] rounded-2xl mt-5 py-2'>
            <Typography variant='h5' gutterBottom
              sx={{
                fontWeight: 'light'
              }}>you can spend</Typography>
            <div className='flex flex-row w-full'>
              <Typography variant='h6' gutterBottom 
                sx={{ 
                  width: '50%', 
                  textAlign: 'right', 
                  paddingRight: '2%',
                  fontWeight: 'light' }}>${allowanceValueDay}</Typography>
              <Typography variant='h6' gutterBottom 
                sx={{ 
                  width: '50%', 
                  textAlign: 'left', 
                  paddingLeft: '2%',
                  fontWeight: 'regular' }}>today</Typography>
            </div>
            <div  className='flex flex-row w-full'>
              <Typography variant='h6' gutterBottom 
                sx={{ 
                  width: '50%', 
                  textAlign: 'right', 
                  paddingRight: '2%',
                  fontWeight: 'light' }}>${allowanceValueMonth}</Typography>
              <Typography variant='h6' gutterBottom 
                sx={{ 
                  width: '50%', 
                  textAlign: 'left', 
                  paddingLeft: '2%',
                  fontWeight: 'regular' }}>month</Typography>
            </div>
          </div>


          <div className='bg-white w-[85%] rounded-2xl mt-5 p-4'>
            <div>
              <div className='flex flex-row justify-between'>
                <Typography>Entertainment</Typography>
                <Typography>$180</Typography>
              </div>
              <div>
                {/* bar line */}
              </div>
              <div className='flex flex-row justify-end'>
                <Typography variant="overline">spent $20 / $1,200</Typography>
              </div>
            </div>
          </div>
         


        </div>
      )
    }

  function quickAccess() {
    return (
      <div>
        {/* <BasicSelect /> */}
        <FormDialog />
        <h1>
          Quick Access
        </h1>
        <QuickAccessHeader />
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
    <div className="App bg-[#2196f3] h-screen">
      {showActiveScreen()}
      {menuTabGroup()}
      
    </div>
  );
}

export default App;
