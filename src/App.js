import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
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


import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';

import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Theme } from '@mui/material/styles';

// import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
// import DeleteIcon from '@mui/icons-material/Delete';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';


import FormHelperText from '@mui/material/FormHelperText';

import AddIcon from '@mui/icons-material/Add';
import BoltIcon from '@mui/icons-material/Bolt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';


function App() {
  const [ activeScreen, setActiveScreen ] = useState(quickAccess)

  const [ tabValue, setTabValue] = useState(0);

  const  [age, setAge] = useState('');

  const [ budgetInTotal, setBudgetInTotal ] = useState(0)

  const [ budgetInExpenseArray, addBudgetInExpenseArray ] = useState(
    [{ category: 'test in category', title: 'test', cost: 20 }])

  const [ budgetOutExpenseArray, addBudgetOutExpenseArray ] = useState(
    [{ category: 'test out category', title: 'item', cost: 40}])

  const [ budgetInHeader, updateBudgetInHeader ] = useState(0)

// ******* quick access tab - hooks

  const [ quickAccessTodayValue, updateQuickAccessTodayValue ] = useState()
  const [ quickAccessMonthValue, updateQuickAccessMonthValue ] = useState()

// ******* quick access tab - budget % 

  const [ quickAccessBudgetValues, addQuickAccessBudgetValues ] = useState()
  // const [ quickAccessMonthValue, updateQuickAccessMonthValue ] = useState()
  

// ******* mui style

  const icon = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ width: 100, height: 100 }}>
        <Box
          component="polygon"
          sx={{
            fill: (theme: Theme) => theme.palette.common.white,
            stroke: (theme) => theme.palette.divider,
            strokeWidth: 1,
          }}
          points="0,100 50,00, 100,100"
        />
      </Box>
    </Paper>
  );

// ******* handlers

  function budgetInCategoryTitleHandler() {
    const categoryTitles = []
    budgetInExpenseArray.map(x => categoryTitles.push(x.category))
    const updatedCategoryTitles = [...new Set(categoryTitles)]
    // console.log('ddd',updatedCategoryTitles)
    // console.log('vvv',categoryTitles)
    return updatedCategoryTitles
  }

  function budgetOutCategoryTitleHandler() {
    const categoryTitles = []
    budgetOutExpenseArray.map(x => categoryTitles.push(x.category))
    const updatedCategoryTitles = [...new Set(categoryTitles)]
    // console.log('ddd',updatedCategoryTitles)
    // console.log('vvv',categoryTitles)
    return updatedCategoryTitles
  }

// ******* menu

  function menuTabGroup() {
    const handleChange = (event, newValue) => {
      setTabValue(newValue);
    };

    return (  
      <div className='fixed w-screen bottom-0 z-1 bg-white h-20'>  
        <Tabs 
          value={tabValue} 
          onChange={handleChange} 
          aria-label="icon label tabs example" 
          variant="fullWidth"
          sx={{
            '.MuiTabs-indicator': {top: 0}            
          }}>
          <Tab icon={<BoltIcon  />} label="quick access" />
          <Tab icon={<AddIcon />} label="create" />
          <Tab icon={<AttachMoneyIcon />} label="budgets" />
          <Tab icon={<BarChartIcon />} label="overview" />
        </Tabs> 
      </div>     
    );
  }
  
// ******* quick access tab

  function QuickAccessHeader() {
    const allowanceValueToday = 80
    const allowanceValueMonth = 200

    return (
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
              fontWeight: 'light' }}>${allowanceValueToday}</Typography>
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
    )
  }



  function QuickAccessCards() {

    function SingleCard() {
      return (
        <div className='bg-white w-[85%] rounded-2xl mt-5 p-4'>
            <div>
              <div className='flex flex-row justify-between'>
                <Typography>Entertainment</Typography>
                <Typography>$180</Typography>
              </div>
              <div className='my-2'>
                <LinearProgress variant="determinate" value={50} />
              </div>
              <div className='flex flex-row justify-end font-thin'>
                <Typography 
                  variant="subtitle2"
                  sx={{
                    fontWeight: '300'
                  }}>spent $20 / $1,200</Typography>
              </div>
            </div>
          </div>
      )
    }

    

    return (
        <div className='flex flex-col items-center w-screen text-center'>
          {}
          


          {/* item blurbs */}
          
          {/* item blurbs */}


          <div className='bg-white w-[85%] rounded-2xl mt-5 p-4'>
            <div>
              <div className='flex flex-row justify-between'>
                <Typography>Entertainment</Typography>
                <Typography>$180</Typography>
              </div>
              <div className='my-2'>
                <LinearProgress variant="determinate" value={50} />
              </div>
              <div className='flex flex-row justify-end font-thin'>
                <Typography 
                  variant="subtitle2"
                  sx={{
                    fontWeight: '300'
                  }}>spent $20 / $1,200</Typography>
              </div>
            </div>
          </div>


          <div className='bg-white w-[85%] rounded-2xl mt-5 p-4 drop-shadow-[-11px_11px_47px_rgba(0,0,0,0.2)]'>
            <div>
              <div className='flex flex-row justify-between'>
                <Typography>Entertainment</Typography>
                <Typography>$180</Typography>
              </div>
              <div className='my-2'>
                <LinearProgress variant="determinate" value={50} />
              </div>
              <div className='flex flex-row justify-end font-thin'>
                <Typography 
                  variant="subtitle2"
                  sx={{
                    fontWeight: '300'
                  }}>spent $20 / $1,200</Typography>
              </div>
            </div>
          </div>

        </div>
    )
  }


// ******* create tab


  function CreateTabForm() {

    const [ open, setOpen ] = useState(false);
    const [ inputTitle, setInputTitle ] = useState('')
    const [ inputValue, setInputValue ] = useState()
    const [ inputCategory, setInputCategory ] = useState('')

    const [age, setAge] = React.useState('Placeholder');

    const handleChange = (event) => {
      setAge(event.target.value);
      setInputCategory(event.target.value);
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);      
    };    

    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Budget
        </Button>
        <Dialog open={open} onClose={handleClose}>
          {/* <DialogTitle>Expense</DialogTitle> */}
          
          <DialogContent>
            {/* <FormControl sx={{ width: '100%' }}>
              <Select
                sx={{ width: '100%' }}
                value={age}
                onChange={handleChange}
                displayEmpty
                label="Category Name"
                inputProps={{ 'aria-label': 'Main Header' }}
              >                
                <MenuItem disabled value='Placeholder'><em>Choose Category</em></MenuItem>
                <MenuItem value=''>--Add New Category--</MenuItem>
                {budgetInCategoryTitleHandler().map((x, index) => <MenuItem value={x} key={index}>{x}</MenuItem>)}                
              </Select>
              
            </FormControl>
            <Collapse in={collapseHeaderInput()}>{headerInput()}</Collapse>             */}
            
            <TextField 
              sx={{ margin: '1rem 0' }}
              fullWidth
              id="outlined-basic" 
              label="Expense Name" 
              variant="outlined" 
              type='string'
              onChange={(i) => setInputTitle(i.target.value)}              
            />
            <TextField 
              sx={{ margin: '1rem 0' }}
              fullWidth
              id="outlined-basic" 
              label="Cost" 
              variant="outlined" 
              type='number'
              onChange={(i) => setInputValue(parseFloat(i.target.value))}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />           
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>exit</Button>
            {/* <Button onClick={handleAddExpense}>Add</Button> */}
            {/* <Button onClick={handleClose}>Subscribe</Button> */}
          </DialogActions>
        </Dialog>
      </div>
    )
  }
  

  


// ******* budget tab

  function BudgetHeader() {
    const quickAccessTitle = 'surplus'
    const quickAccessTitleValue = 1

    const quickAccessTitleInValue = 99
    const quickAccessTitleIn = 'in'
    
    const quickAccessTitleOutValue = 100
    const quickAccessTitleOut = 'out'

    
    

    return (
      <div className='flex flex-col items-center w-screen text-center'>
          <Typography variant='h3' gutterBottom>{quickAccessTitle}</Typography>
          <Typography variant='h3' gutterBottom>${quickAccessTitleValue}</Typography>        
      </div>
    )
  }

// ******* budget tab - budget IN   
  
  function BudgetInHeader() {
    const budgetInExpenseValuesArray = budgetInExpenseArray.map(x => x.cost)    
  
    const budgetInExpenseTotal = () => {
      let sum = 0
      for (const x of budgetInExpenseValuesArray) {
        sum += x
      }
      return sum
    }    
    
    return (
      <div className='text-white m-2'>
        <Typography variant='h5' sx={{ fontWeight: '100' }}>in</Typography>
        <Typography variant='h4'>${budgetInExpenseTotal()}</Typography>
      </div>
    )
  }

  function BudgetInCollapse() {   
    const [ categoryCollapseToggle, addCategoryCollapseToggle ] = useState([ {index: 'default', toggle: 'default'} ])  
     
    function handleCollapseButtonClick(index) {      
      if (categoryCollapseToggle.length === 0) {        
        addCategoryCollapseToggle([{ index: index, toggle: true }])   
      } else {        
        const filterArray = categoryCollapseToggle.filter(x => x.index === index)
        if (filterArray.length === 0) {
          addCategoryCollapseToggle(previous => previous.concat({ index: index, toggle: true }))
        } else {
          const addValue = categoryCollapseToggle.map((c, i) => {
            if (c.index === index) {    
              return { index: i, toggle: !c.toggle }
            } else {                    
              return c            
            }     
          })
          console.log('addValue', addValue)
          addCategoryCollapseToggle(addValue)
        }             
      }         
    }     
    
   function expandIcon(index) {    
    const filterArray = categoryCollapseToggle.filter(x => x.index === index && x.toggle === true)    
    if (filterArray.length === 0) {
      return <ExpandMoreIcon />
    } else {
      return <ExpandLessIcon />
    }
   }

  function expandCollapse(index) {    
    const filterArray = categoryCollapseToggle.filter(x => x.index === index && x.toggle === true)    
    if (filterArray.length === 0) {
      return false
    } else {
      return true
    }
   }   
  
  const budgetInCategoryTotal = (x) => {      
    let sum = 0
    budgetInExpenseArray.map(y => {
      if (x === y.category) {
        sum =+ y.cost  
      }  return sum    
    })      
    return sum
  }   

    return (
      <div className='flex flex-col items-center w-screen'> 
        <div className='w-[90%] px-4 p-4 bg-white rounded-2xl flex flex-col items-center text-center'>

          <div className='flex flex-col justify-between w-full'>   
            {budgetInCategoryTitleHandler().map((x, index) => {               
              return( 
                <div className='mb-4' key={index}>

                  <div className='flex flex-row'>
                    <div className='w-[60%] text-left'>
                      <Typography variant='h6'>                        
                        {x}
                      </Typography>
                      {console.log(x)}
                    </div>

                    <div className='w-[30%]'>
                      <Typography variant='h6'>
                        ${budgetInCategoryTotal(x)}
                      </Typography>
                    </div>
                    
                    <div className='w-[10%]'>
                      <IconButton 
                        aria-label="expand"                        
                        onClick={() => handleCollapseButtonClick(index)}>
                        {expandIcon(index)}
                      </IconButton>
                    </div>  

                  </div>
                  
                  <div className='flex flex-col w-full'>                       
                    {budgetInExpenseArray.map(y => {
                      if (x === y.category) {
                        return (
                          <div>
                            <Collapse in={expandCollapse(index)}>                              
                              {<div>
                                {y.title}
                                {y.cost}
                                <DeleteIcon fontSize='small' />
                                <EditIcon fontSize='small' />
                              </div>}     
                            </Collapse>
                          </div>
                        )
                      }})}      
                  </div>                   

                  <Divider varient='fullWidth' sx={{ borderBottomWidth: '.1rem' }}/>                  

                </div>
              )
            })}

          </div>         

          <div>
            <AddExpenseFormBudgetIn /> 
          </div>

        </div>
      </div>
    );
  }

  function AddExpenseFormBudgetIn() {
    const [ open, setOpen ] = useState(false);
    const [ inputTitle, setInputTitle ] = useState('')
    const [ inputValue, setInputValue ] = useState()
    const [ inputCategory, setInputCategory ] = useState('')

    const [age, setAge] = React.useState('Placeholder');

    const handleChange = (event) => {
      setAge(event.target.value);
      setInputCategory(event.target.value);
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);      
    };

    const handleAddExpense = () => {
      // addBudgetInExpenseArray(previous => {previous.concat({[inputTitle] : inputValue}))      
      addBudgetInExpenseArray(previous => previous.concat({ category: inputCategory, title: inputTitle, cost: inputValue }))
      setOpen(false); 
    }

    const headerInput = () => (age === '') ? <div>
                                              <TextField 
                                                  // disabled='false' 
                                                  sx={{ margin: '1rem 0'}}             
                                                  autoFocus              
                                                  fullWidth
                                                  variant="outlined"
                                                  type='string'
                                                  label="Category Name"
                                                  onChange={(i) => setInputCategory(i.target.value)}
                                                  value={inputCategory}
                                                  // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                />
                                                {/* <FormHelperText>Category Header</FormHelperText> */}
                                              </div>
                                            : <div>
                                                <TextField  
                                                  sx={{ margin: '1rem 0'}}
                                                  disabled={true}           
                                                  autoFocus              
                                                  fullWidth
                                                  variant="outlined"
                                                  type='string'
                                                  label="Category Name"
                                                  value={age}
                                                  // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                />
                                                {/* <FormHelperText>Category Header</FormHelperText> */}
                                              </div>
      
    

    const collapseHeaderInput = () => age === '' ? true : false      

    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Expense
        </Button>
        <Dialog open={open} onClose={handleClose}>
          {/* <DialogTitle>Expense</DialogTitle> */}
          
          <DialogContent>
            <FormControl sx={{ width: '100%' }}>
              <Select
                sx={{ width: '100%' }}
                value={age}
                onChange={handleChange}
                displayEmpty
                label="Category Name"
                inputProps={{ 'aria-label': 'Main Header' }}
              >                
                <MenuItem disabled value='Placeholder'><em>Choose Category</em></MenuItem>
                <MenuItem value=''>--Add New Category--</MenuItem>
                {budgetInCategoryTitleHandler().map((x, index) => <MenuItem value={x} key={index}>{x}</MenuItem>)}                
              </Select>
              
            </FormControl>
            <Collapse in={collapseHeaderInput()}>{headerInput()}</Collapse>            
            
            <TextField 
              sx={{ margin: '1rem 0' }}
              fullWidth
              id="outlined-basic" 
              label="Expense Name" 
              variant="outlined" 
              type='string'
              onChange={(i) => setInputTitle(i.target.value)}              
            />
            <TextField 
              sx={{ margin: '1rem 0' }}
              fullWidth
              id="outlined-basic" 
              label="Cost" 
              variant="outlined" 
              type='number'
              onChange={(i) => setInputValue(parseFloat(i.target.value))}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />           
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>exit</Button>
            <Button onClick={handleAddExpense}>Add</Button>
            {/* <Button onClick={handleClose}>Subscribe</Button> */}
          </DialogActions>
        </Dialog>
      </div>
    )
  }  
  
// ******* budget tab - budget OUT 

  function BudgetOutHeader() {
    const budgetOutExpenseValuesArray = budgetOutExpenseArray.map(x => x.cost)    
  
    const budgetInExpenseTotal = () => {
      let sum = 0
      for (const x of budgetOutExpenseValuesArray) {
        // sum += x
        sum = (sum.toFixed(2) * 100 + x.toFixed(2) * 100) / 100
      }
      return sum
    }    
    
    return (
      <div className='text-white m-2'>
        <Typography variant='h5' sx={{ fontWeight: '100' }}>out</Typography>
        <Typography variant='h4'>${budgetInExpenseTotal()}</Typography>
      </div>
    )
  }

  function BudgetOutCollapse() {   
    const [ categoryCollapseToggle, addCategoryCollapseToggle ] = useState([ {index: 'default', toggle: 'default'} ])  
     
    function handleCollapseButtonClick(index) {      
      if (categoryCollapseToggle.length === 0) {        
        addCategoryCollapseToggle([{ index: index, toggle: true }])   
      } else {        
        const filterArray = categoryCollapseToggle.filter(x => x.index === index)
        if (filterArray.length === 0) {
          addCategoryCollapseToggle(previous => previous.concat({ index: index, toggle: true }))
        } else {
          const addValue = categoryCollapseToggle.map((c, i) => {
            if (c.index === index) {    
              return { index: i, toggle: !c.toggle }
            } else {                    
              return c            
            }     
          })
          console.log('addValue', addValue)
          addCategoryCollapseToggle(addValue)
        }             
      }         
    }     
    
   function expandIcon(index) {    
    const filterArray = categoryCollapseToggle.filter(x => x.index === index && x.toggle === true)    
    if (filterArray.length === 0) {
      return <ExpandMoreIcon />
    } else {
      return <ExpandLessIcon />
    }
   }

  function expandCollapse(index) {    
    const filterArray = categoryCollapseToggle.filter(x => x.index === index && x.toggle === true)    
    if (filterArray.length === 0) {
      return false
    } else {
      return true
    }
   }   
  
  const budgetOutCategoryTotal = (x) => {      
    let sum = 0
    for (const i of budgetOutExpenseArray) {
      console.log(i)
      if (x === i.category) {
        console.log('y.cost',i.cost)
        console.log('sum1',sum)
        // sum += i.cost 
        sum = (sum.toFixed(2) * 100 + i.cost.toFixed(2) * 100) / 100 
        console.log('sum2',sum)         
      }     
    }
    console.log('sum3',sum)    
    return sum        
  }   

    return (
      <div className='flex flex-col items-center w-screen'> 
        <div className='w-[90%] px-4 p-4 bg-white rounded-2xl flex flex-col items-center text-center'>

          <div className='flex flex-col justify-between w-full'>   
            {budgetOutCategoryTitleHandler().map((x, index) => {               
              return( 
                <div className='mb-4' key={index}>

                  <div className='flex flex-row'>
                    <div className='w-[60%] text-left'>
                      <Typography variant='h6'>                        
                        {x}
                      </Typography>
                      {console.log(x)}
                    </div>

                    <div className='w-[30%]'>
                      <Typography variant='h6'>
                        ${budgetOutCategoryTotal(x)}
                      </Typography>
                    </div>
                    
                    <div className='w-[10%]'>
                      <IconButton 
                        aria-label="expand"                        
                        onClick={() => handleCollapseButtonClick(index)}>
                        {expandIcon(index)}
                      </IconButton>
                    </div>  

                  </div>
                  
                  <div className='flex flex-col w-full'>                       
                    {budgetOutExpenseArray.map(y => {
                      if (x === y.category) {
                        return (
                          <div>
                            <Collapse in={expandCollapse(index)}>                              
                              {<div>
                                {y.title}
                                {y.cost}
                                <DeleteIcon fontSize='small' />
                                <EditIcon fontSize='small' />
                              </div>}     
                            </Collapse>
                          </div>
                        )
                      }})}      
                  </div>                   

                  <Divider varient='fullWidth' sx={{ borderBottomWidth: '.1rem' }}/>                  

                </div>
              )
            })}

          </div>         

          <div>
            <AddExpenseFormBudgetOut /> 
          </div>

        </div>
      </div>
    );
  }  
  
  function AddExpenseFormBudgetOut() {
    const [ open, setOpen ] = useState(false);
    const [ inputTitle, setInputTitle ] = useState('')
    const [ inputValue, setInputValue ] = useState()
    const [ inputCategory, setInputCategory ] = useState('')

    const [age, setAge] = React.useState('Placeholder');

    const handleChange = (event) => {
      setAge(event.target.value);
      setInputCategory(event.target.value);
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);      
    };

    const handleAddExpense = () => {
      // addBudgetInExpenseArray(previous => {previous.concat({[inputTitle] : inputValue}))      
      addBudgetOutExpenseArray(previous => previous.concat({ category: inputCategory, title: inputTitle, cost: inputValue }))
      setOpen(false); 
    }

    const headerInput = () => (age === '') ? <div>
                                              <TextField 
                                                  // disabled='false' 
                                                  sx={{ margin: '1rem 0'}}             
                                                  autoFocus              
                                                  fullWidth
                                                  variant="outlined"
                                                  type='string'
                                                  label="Category Name"
                                                  onChange={(i) => setInputCategory(i.target.value)}
                                                  value={inputCategory}
                                                  // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                />
                                                {/* <FormHelperText>Category Header</FormHelperText> */}
                                              </div>
                                            : <div>
                                                <TextField  
                                                  sx={{ margin: '1rem 0'}}
                                                  disabled={true}           
                                                  autoFocus              
                                                  fullWidth
                                                  variant="outlined"
                                                  type='string'
                                                  label="Category Name"
                                                  value={age}
                                                  // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                />
                                                {/* <FormHelperText>Category Header</FormHelperText> */}
                                              </div>
      
    

    const collapseHeaderInput = () => age === '' ? true : false      

    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Expense
        </Button>
        <Dialog open={open} onClose={handleClose}>
          {/* <DialogTitle>Expense</DialogTitle> */}
          
          <DialogContent>
            <FormControl sx={{ width: '100%' }}>
              <Select
                sx={{ width: '100%' }}
                value={age}
                onChange={handleChange}
                displayEmpty
                label="Category Name"
                inputProps={{ 'aria-label': 'Main Header' }}
              >                
                <MenuItem disabled value='Placeholder'><em>Choose Category</em></MenuItem>
                <MenuItem value=''>--Add New Category--</MenuItem>
                {budgetOutCategoryTitleHandler().map((x, index) => <MenuItem value={x} key={index}>{x}</MenuItem>)}                
              </Select>
              
            </FormControl>
            <Collapse in={collapseHeaderInput()}>{headerInput()}</Collapse>            
            
            <TextField 
              sx={{ margin: '1rem 0' }}
              fullWidth
              id="outlined-basic" 
              label="Expense Name" 
              variant="outlined" 
              type='string'
              onChange={(i) => setInputTitle(i.target.value)}              
            />
            <TextField 
              sx={{ margin: '1rem 0' }}
              fullWidth
              id="outlined-basic" 
              label="Cost" 
              variant="outlined" 
              type='number'
              onChange={(i) => setInputValue(parseFloat(i.target.value))}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />           
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>exit</Button>
            <Button onClick={handleAddExpense}>Add</Button>
            {/* <Button onClick={handleClose}>Subscribe</Button> */}
          </DialogActions>
        </Dialog>
      </div>
    )
  } 
 
// ******* tabs

  function quickAccess() {
    return (
      <div className='overflow-y-auto h-full'>
        <div className='flex flex-col items-center w-screen text-center'>
          {/* <BasicSelect /> */}
          
          {/* <h1>
            Quick Access
          </h1> */}
          {/* <QuickAccessHeader /> */}
          <QuickAccessHeader />
          <QuickAccessCards />
        </div>
        <div className='h-24'></div>
      </div>
    )
  }

  function create() {
    return (
      <CreateTabForm />
    )
  }

  function budgets() {
    return (
      <div>        
        {/* <FormDialog /> */}
        <BudgetHeader />        
        <BudgetInHeader />
        {/* <BudgetInAccordion /> */}
        <BudgetInCollapse />
        <BudgetOutHeader />
        <BudgetOutCollapse />
        {/* <BudgetOutAccordion /> */}
        {/* <TransitionGroupExample />
        <TestField />
        <AddExpenseForm /> */}
        <div className='h-24'></div>
      </div>
    )
  }
  
// ******* app layout

  const showActiveScreen = () => tabValue === 0 ? quickAccess()
                              : tabValue === 1  ? create()
                              : tabValue === 2  ? budgets()
                              : tabValue === 3  ? <h1>overview</h1>
                              : ''

// ******* storage 

  useEffect(() => {
    localStorage.setItem('budgetIn', JSON.stringify(budgetInExpenseArray))
  }, [budgetInExpenseArray])

  useEffect(() => {
    localStorage.setItem('budgetOut', JSON.stringify(budgetOutExpenseArray))
  }, [budgetOutExpenseArray])

  

  return (
    <div className="App bg-[#2196f3] h-screen">
      {showActiveScreen()}
      {menuTabGroup()}
      
    </div>
  );
}

export default App;