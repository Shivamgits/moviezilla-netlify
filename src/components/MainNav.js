import * as React from 'react';
import { useEffect} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Paper from '@mui/material/Paper';
import {  useNavigate } from 'react-router-dom';





export default function LabelBottomNavigation() {
  // const [value, setValue] = React.useState('recents');
  const [value, setValue] = React.useState("0");

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
   
  };

 
  useEffect(() => {
   if(value === "0"){
     navigate("/")
    
   }
   else if (value === "1"){
     navigate("/movies")
   }
   else if (value === "2"){
     navigate("/series")
   }
   else if (value === "3"){
     navigate("/search")
   }
  }, [value,navigate])
  


  return (
  

    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 , }} elevation={3}>
    <BottomNavigation sx={{  width: "100%" , backgroundColor: '#282c34',zIndex: 1000,bottom:0 }} value={value} onChange={handleChange} >
      <BottomNavigationAction
      style={{ color:"white"}}
    
     
        label="Trending"
        value="0"
        icon={<WhatshotIcon />}
        
       
        />
      <BottomNavigationAction
       style={{ color:"white"}}
        label="Movies"
        value="1"
        icon={<MovieIcon />}
      
        
        />
      <BottomNavigationAction
       style={{ color:"white"}}
        label="TV Series"
        value="2"
        icon={<TvIcon />}
       
       
        />
      <BottomNavigationAction
       style={{ color:"white"}}
        label="Search" value="3" icon={<SearchIcon />}
       
        />
    </BottomNavigation>
    </Paper>
      
  );
}