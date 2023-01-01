import React,{useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grow from '@mui/material/Grow';

const Filters = ({applyFilters,showFilter}) => {

    const initialValues = {
        DATE_FILTER:"ALL",
        LAUNCH_STATUS:"ALL",
        UPCOMING:"ALL"
    }

    const [storeFilterValues, setStoreFilterValues] = useState(initialValues)

    function getRequiredDate(currValue) {
        let today = new Date();
        let required;
        if(currValue === "Last Week"){
            required = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        }
        else if(currValue === "Last Month"){
            required = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
        }
        else if(currValue === "Last Year"){
            required = new Date(today.getFullYear()-1, today.getMonth(), today.getDate());
        }
        return required.toString();
    }
    
    const handleFilterChanges = e =>{
        const currValue = e.target.value
       // console.log(currValue);

        if(currValue === "Last Week"){
            let lastWeekDate = getRequiredDate(currValue)
            setStoreFilterValues({...storeFilterValues, DATE_FILTER:lastWeekDate})
        }
        else if(currValue === "Last Month"){
            let lastMonthDate = getRequiredDate(currValue)
            setStoreFilterValues({...storeFilterValues, DATE_FILTER:lastMonthDate})
        }
        else if(currValue === "Last Year"){
            let lastYearDate = getRequiredDate(currValue)
            setStoreFilterValues({...storeFilterValues, DATE_FILTER:lastYearDate})
        }
        else if(currValue === "Success"){
            setStoreFilterValues({...storeFilterValues, LAUNCH_STATUS:"true"})
        }
        else if(currValue === "Failure"){
            setStoreFilterValues({...storeFilterValues, LAUNCH_STATUS:"false"})
        }
        else if(currValue === "Yes"){
            setStoreFilterValues({...storeFilterValues, UPCOMING:"true"})
        }
        else if(currValue === "No"){
            setStoreFilterValues({...storeFilterValues, UPCOMING:"false"})
        }
        else if(currValue === "date_all"){
            setStoreFilterValues({...storeFilterValues, DATE_FILTER:"ALL"})
        }
        else if(currValue === "launch_all"){
            setStoreFilterValues({...storeFilterValues, LAUNCH_STATUS:"ALL"})
        }
        else if(currValue === "upcoming_all"){
            setStoreFilterValues({...storeFilterValues, UPCOMING:"ALL"})
        }

    }

    function sendFilterValues(){
        applyFilters(storeFilterValues)
    }

  return (
    <Grow in={showFilter}>
   <Card>
    <CardContent>
    <Box  display='flex'  flexDirection= 'column'  justifyContent='space-around'>
       
        <FormControl m='2'>
        <FormLabel  id="launch-date">Launch Date</FormLabel>
        <RadioGroup    
            row   
            aria-labelledby="launch-date"
            name="row-radio-buttons-group"
            onChange={handleFilterChanges}
        >
            <FormControlLabel value="Last Week" control={<Radio />} label="Last Week" />
            <FormControlLabel value="Last Month" control={<Radio />} label="Last Month" />
            <FormControlLabel value="Last Year" control={<Radio />} label="Last Year" />
            <FormControlLabel value="date_all" control={<Radio />} label="All" />
        </RadioGroup>
        </FormControl>

        <Divider sx={{mb:3}} sm={{mb:2}} variant="middle" />

        <FormControl m='2'>
        <FormLabel id="launch-Status">Launch Status</FormLabel>
        <RadioGroup
            row
            aria-labelledby="launch-Status"
            name="row-radio-buttons-group"
            onChange={handleFilterChanges}
        >
            <FormControlLabel value="Success" control={<Radio />} label="Success" />
            <FormControlLabel value="Failure" control={<Radio />} label="Failure" />
            <FormControlLabel value="launch_all" control={<Radio />} label="All" />
        </RadioGroup>
        </FormControl>

        <Divider sx={{mb:3}} sm={{mb:2}} variant="middle" />
        
        <FormControl m='2'>
        <FormLabel id="Upcoming">Is it Upcoming?</FormLabel>
        <RadioGroup
            row
            aria-labelledby="Upcoming"
            name="row-radio-buttons-group"
            onChange={handleFilterChanges}
        >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
            <FormControlLabel value="upcoming_all" control={<Radio />} label="All" />
        </RadioGroup>
        </FormControl>
        <Button onClick = {sendFilterValues} variant="contained">Apply Filter</Button>
    </Box>
    </CardContent>
    </Card>
    </Grow>
  )
}

export default Filters