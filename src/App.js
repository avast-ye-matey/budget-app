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


function App() {
  const [ activeScreen, setActiveScreen ] = useState(quickAccess)
  const [tabValue, setTabValue] = useState(0);

  const [age, setAge] = useState('');
  
  const [ budgetInTotal, setBudgetInTotal ] = useState(0)
  const [ budgetInExpenseArray, addBudgetInExpenseArray ] = useState([{ category: 'test category', title: 'test', cost: 20 }])

  const [ budgetInHeader, updateBudgetInHeader ] = useState(0)

  // const [ budgetInCategoryTitles, updateBudgetInCategoryTitles ] = useState(() => () => {
  //   const categoryTitles = []
  //   budgetInExpenseArray.map(x => categoryTitles.push(x.category))
  //   const updatedCategoryTitles = [...new Set(categoryTitles)]
  //   // console.log('ddd',updatedCategoryTitles)
  //   // console.log('vvv',categoryTitles)
  //   return updatedCategoryTitles
  // })
  
  // console.log(budgetInCategoryTitles())
  // console.log('titles',budgetInCategoryTitles)

  function budgetInCategoryTitleHandler() {
    const categoryTitles = []
    budgetInExpenseArray.map(x => categoryTitles.push(x.category))
    const updatedCategoryTitles = [...new Set(categoryTitles)]
    // console.log('ddd',updatedCategoryTitles)
    // console.log('vvv',categoryTitles)
    return updatedCategoryTitles
  }


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

  // console.log(Array.isArray(budgetInExpenseArray))
  // console.log(typeof(budgetInExpenseArray))
  console.log(budgetInExpenseArray)

  const [ expense, setExpense ] = useState([])
  function AddExpenseForm() {
    const [open, setOpen] = React.useState(false);
    const [ inputTitle, setInputTitle ] = useState('')
    const [ inputValue, setInputValue ] = useState()
    const [ inputCategory, setInputCategory ] = useState('')

    // console.log(typeof(inputTitle))
    // console.log(typeof(inputValue))

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
      
    // console.log(age)

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


  function BudgetInCollapse() {   
    const [ whatsHere, addWhatsHere ] = useState([ {index: 'default', toggle: 'default'} ])  
     
    function handleCollapseButtonClick(index) {      
      if (whatsHere.length === 0) {        
        addWhatsHere([{ index: index, toggle: true }])   
      } else {        
        const filterArray = whatsHere.filter(x => x.index === index)
        if (filterArray.length === 0) {
          addWhatsHere(previous => previous.concat({ index: index, toggle: true }))
        } else {
          const addValue = whatsHere.map((c, i) => {
            if (c.index === index) {    
              return { index: i, toggle: !c.toggle }
            } else {                    
              return c            
            }     
          })
          console.log('addValue', addValue)
          addWhatsHere(addValue)
        }             
      }         
    }     
    
   function expandIcon(index) {    
    const filterArray = whatsHere.filter(x => x.index === index && x.toggle === true)    
    if (filterArray.length === 0) {
      return <ExpandMoreIcon />
    } else {
      return <ExpandLessIcon />
    }
   }

  function expandCollapse(index) {    
    const filterArray = whatsHere.filter(x => x.index === index && x.toggle === true)    
    if (filterArray.length === 0) {
      return false
    } else {
      return true
    }
   }

  

  function collapseDetail(x) { 
    // console.log('x',x) 
    // let detailArray = []
    budgetInExpenseArray.map((y,index) => {
      // console.log('y',y) 
      // console.log('y category',y.category) 
      if (y.category === x) {
        // console.log('true')
        // console.log(x)        
          return (
            <div>
              <h1>hi</h1>
              <div className='mb-4'>
                {/* <DeleteIcon />
                <EditIcon /> */}
                <AddCircleIcon />
              </div>
              
              <div className='flex flex-row w-full mb-4'>
                <div className='w-[40%]'>
                  <Typography variant='body2'>
                    {y.title}
                  </Typography>
                </div>
                <div className='w-[30%]'>
                  <Typography variant='body2'>
                    {y.cost}
                  </Typography>
                </div>
                <div className='flex w-[30%] justify-evenly'>
                  <DeleteIcon fontSize='small' />
                  <EditIcon fontSize='small' />
                </div>
              </div>
            </div>  
          )         
      }                       
    })    
  }

  const foobar = (x) => {
    budgetInExpenseArray.map(x => {
     
      
        <h1>{x.category}</h1>
      
    })
  }

  {console.log('yoyoyo',collapseDetail('test category'))}
  // {console.log('ssssss',collapseDetail('test category').map(x => console.log(x)))}


    // const budgetInExpenseValuesArray = budgetInExpenseArray.map(y => y.cost)    
    
    // const budgetInExpenseTotal = () => {
    //   let sum = 0
    //   for (const i of budgetInExpenseValuesArray) {
    //     sum += icon
    //   }
    //   return sum
    // }   

    const budgetInCategoryTotal = (x) => {
      // console.log(x.cost)
      let sum = 0
      budgetInExpenseArray.map(y => {
        if (x === y.category) {
          sum =+ y.cost  
        }  return sum    
      })
      // console.log('sum', sum)
      return sum
    }
    
  
    // const budgetInCategoryTitleArray = () => {
    //   const categoryTitles = []
    //   budgetInExpenseArray.map(x => categoryTitles.push(x.category))
    //   const updatedCategoryTitles = [...new Set(categoryTitles)]
    //   // console.log('ddd',updatedCategoryTitles)
    //   // console.log('vvv',categoryTitles)
    //   return updatedCategoryTitles
    // }

    // console.log(budgetInCategoryTitleArray())

    const foobar2 = (x, index) => {
      budgetInExpenseArray.map(y => {
        if (x === y.category) {
          return <Collapse in={expandCollapse(index)}>{y.title}</Collapse>
        }
      })
    }



    return (
      <div className='flex flex-col items-center w-screen'> 
        <div className='w-[90%] px-4 p-4 bg-white rounded-2xl flex flex-col items-center text-center'>

          <div className='flex flex-col justify-between w-full'>            

            {/* {budgetInExpenseArray.map((x, index) => { */}
            {budgetInCategoryTitleHandler().map((x, index) => {

              
              
              return( 
                <div className='mb-4' key={index}>

                  <div className='flex flex-row'>
                    <div className='w-[60%] text-left'>
                      <Typography variant='h6'>
                        {/* {Object.keys(x)} */}
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

                  {/* {console.log('yoyoyo',collapseDetail(x))} */}
                  <div className='flex flex-col w-full'>
                    {/* <Collapse in={expandCollapse(index)}>{icon}</Collapse> */}

                    <Collapse in={expandCollapse(index)}>{collapseDetail(x)}</Collapse>

                    {/* <Collapse in={checked}>{testtest1()}</Collapse>                 */}
                    {budgetInExpenseArray.map(y => {
                      if (x === y.category) {
                        return <Collapse in={expandCollapse(index)}>{y.title}</Collapse>
                      }})}
                    <Collapse in={expandCollapse(index)}>{foobar(x)}</Collapse>
                    <Collapse in={expandCollapse(index)}>{<h1>sup</h1>}</Collapse>

                  </div>          
                  

                  <Divider varient='fullWidth' sx={{ borderBottomWidth: '.1rem' }}/>
                  

                </div>
              )
            })}

          </div>          

          {/* <Box>
            <div>
              <Collapse in={checked}>{icon}</Collapse>
              <Collapse in={checked}>{testtest1()}</Collapse>                
            </div>          
          </Box> */}

          <div>
            <AddExpenseForm /> 
          </div>

        </div>
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
      <div className='fixed w-screen bottom-0 z-1 bg-white h-20'>  
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

  function BudgetInAccordion() {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} 
        sx={{ borderRadius: '1rem', margin: '0 7.5%'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className='flex flex-row w-full'>
              <Typography sx={{ width: '60%', flexShrink: 0 }}>
                one-time
              </Typography>
              <Typography sx={{ width: '40%', color: 'text.secondary' }}>20%</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
       
    )
  }

  function BudgetOutHeader() {
    
    return (
      <div className='text-white m-2'>
        <Typography variant='h5' sx={{ fontWeight: '100' }}>out</Typography>
        <Typography variant='h4'>$2,000</Typography>
      </div>
    )
  }

  function QuickAccessCards() {
    const allowanceValueDay = 80
    const allowanceValueMonth = 200

    return (
        <div className='flex flex-col items-center w-screen text-center'>

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

  function BudgetOutAccordion() {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className='flex flex-row w-full'>
              <Typography sx={{ width: '60%', flexShrink: 0 }}>
                one-time
              </Typography>
              <Typography sx={{ width: '40%', color: 'text.secondary' }}>20%</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <div className='flex flex-row w-full'>            
              <Typography sx={{ width: '60%', flexShrink: 0 }}>subscriptions</Typography>
              <Typography sx={{ width: '40%',color: 'text.secondary' }}>
                30%
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit. Pellentesque convallis laoreet
              laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className='flex flex-row w-full'>
              <Typography sx={{ width: '60%', flexShrink: 0 }}>
                bills
              </Typography>
              <Typography sx={{ width: '40%',color: 'text.secondary' }}>
                40%
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </div>
    );
  }

  const [testNumber, addTestNumber] = useState(0)

  function TestField() {
    const [textFieldValue, updateTextFieldValue] = useState()
    return (
      <div>
        {testNumber}
        <TextField 
          id="outlined-basic" 
          label="Outlined" 
          variant="outlined" 
          onChange={(i) => updateTextFieldValue(i.target.value)}/>
        <Button variant='contained' onClick={() => {addTestNumber(textFieldValue)}}>enter</Button>
      </div>
    )
  }


  const FRUITS = [
    '🍏 Apple',
    '🍌 Banana',
    '🍍 Pineapple',
    '🥥 Coconut',
    '🍉 Watermelon',
  ];
  
  function renderItem({ item, handleRemoveFruit }) {
    return (
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            title="Delete"
            onClick={() => handleRemoveFruit(item)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText primary={item} />
      </ListItem>
    );
  }
  
  function TransitionGroupExample() {
    const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));
  
    const handleAddFruit = () => {
      const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
      if (nextHiddenItem) {
        setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
      }
    };
  
    const handleRemoveFruit = (item) => {
      setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
    };
  
    const addFruitButton = (
      <Button
        variant="contained"
        disabled={fruitsInBasket.length >= FRUITS.length}
        onClick={handleAddFruit}
      >
        Add fruit to basket
      </Button>
    );
  
    return (
      <div>
        {addFruitButton}
        <Box sx={{ mt: 1 }}>
          <List>
            <TransitionGroup>
              {fruitsInBasket.map((item) => (
                <Collapse key={item}>
                  {renderItem({ item, handleRemoveFruit })}
                </Collapse>
              ))}
            </TransitionGroup>
          </List>
        </Box>
      </div>
    );
  }

  function quickAccess() {
    return (
      <div className='overflow-y-auto h-full'>
        {/* <BasicSelect /> */}
        
        {/* <h1>
          Quick Access
        </h1> */}
        {/* <QuickAccessHeader /> */}
        <QuickAccessCards />
        <div className='h-24'></div>
      </div>
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
        <BudgetOutAccordion />
        <TransitionGroupExample />
        <TestField />
        <AddExpenseForm />
        <div className='h-24'></div>
      </div>
    )
  }

  // console.log(tabValue)

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
