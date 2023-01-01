import {useEffect,useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import Filters from "./Filters"
import axios from 'axios'
import { DataAction } from '../Actions';
import Cards from './Cards'
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import IconButton from '@mui/material/IconButton';


const BASE_URL = 'https://api.spacexdata.com/v3/launches';

const CardList = () => {
     const [fetched, setFetched] = useState([])
     const [showFilter,setShowFilter] = useState(false)
     const allData = useSelector(state => state.myData)
     const dispatch = useDispatch();


    useEffect(()=>{
    axios.get(BASE_URL)
      .then(response => response.data)
      .then(data => { 
          setFetched(data)
          dispatch(DataAction(data))
      })
      .catch(err => console.log(err))
    },[])

    const handleChange = e =>{
      let ip = e.target.value.toLowerCase()
      if(ip === '' || ip.trim()===''){
        setFetched(allData)
      }
      else{
        let filteredData = allData.filter(ele => {
          let rocketNames = ele.rocket.rocket_name.toLowerCase();
          return rocketNames.match(ip)
        })
        setFetched(filteredData)
      }          
    }

    const toggleFilter = ()=>{
      setShowFilter(!showFilter)
    }

    const applyFilters = (launchStatus) =>{
      let {DATE_FILTER, LAUNCH_STATUS, UPCOMING} = launchStatus;
      let requiredData = allData.filter(ele => {

        let eleDate = new Date(ele.launch_date_utc).toString()
        let launchValue = LAUNCH_STATUS === "true" ? true : false;
        let upcomingValue = UPCOMING === "true" ? true : false;
        return ((DATE_FILTER==="ALL" || DATE_FILTER < eleDate) && (LAUNCH_STATUS==="ALL" || ele.launch_success===launchValue) && (UPCOMING==="ALL" || ele.upcoming===upcomingValue))

      })
      setFetched(requiredData)
    }

   // console.log(fetched);
  return (
    <div>
      <Box
        display='flex'  justifyContent='space-between'
        sx={{
          m:2,
          width: 500,
          maxWidth: '100%',
        }}
        sm={{
          m:2,
          width:350,
          maxWidth:'100%',
        }}
      >
        <TextField onChange={handleChange} fullWidth label="Enter Rocket Name" id="fullWidth" />
        <IconButton sx={{ml:3}} sm={{ml:2}} aria-label="filter" onClick={toggleFilter}>            
              <FilterAltIcon color='primary' fontSize='large' />           
        </IconButton>
      </Box>

      {showFilter && <Filters applyFilters={applyFilters}/>}

      <Divider sx={{mb:3}} sm={{mb:2}} variant="middle" />
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 , lg : 4}} >
          {fetched.map((data,i) => {
              return (
                <Grid item xs={6} sm={3} md={2.4} lg={2}>
                  <Cards key={i} data={data}/>
                </Grid>
              )
          })}
      </Grid>
    </div>
  )
}

export default CardList