import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Moon from '../components/Moon'
import Europe from '../components/Europe'
import Mars from '../components/Mars'
import Titan from '../components/Titan'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
         
       <Typography>{children}</Typography>
      </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Select() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //styles
  const myStyle = {
    color: "#ccc6c6",
    fontSize:'18px',
    fontWeight:'600',
    textTransform:'none',
  
  }


  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered sx={{borderBottom:'white'}}> 
          <Tab label="MOON" {...a11yProps(0)} style={myStyle}/>
          <Tab label="MARS" {...a11yProps(1)} style={myStyle} />
          <Tab label="EUROPA" {...a11yProps(2)} style={myStyle} />
          <Tab label="TITAN" {...a11yProps(3)} style={myStyle} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <Moon />
      </TabPanel>
      <TabPanel value={value} index={1}>
           <Mars />
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Europe />
      </TabPanel>
      <TabPanel value={value} index={3}>
           <Titan />
      </TabPanel>
    </Box>
  );
}

