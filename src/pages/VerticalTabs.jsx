import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


//page Nums
import {Numbers} from '../components/Nums'
import {Numbers2} from '../components/Nums'
import {Numbers3} from '../components/Nums'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const myStyle={
           color:'white',
           fontSize:'20px',
           gridGap:'120px',
           borderRight:'none',
       }

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: 224, marginLeft:'5%', marginTop:'10%' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        indicatorColor="none"
      >
        <Tab label={<Numbers />} {...a11yProps(0)} style={myStyle}/>
        <Tab label={<Numbers2 />} {...a11yProps(1)} style={myStyle}/>
        <Tab label={<Numbers3 />} {...a11yProps(2)} style={myStyle}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}























// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// import styled from 'styled-components'

// import { GoPrimitiveDot } from 'react-icons/go';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3, borderRight:'0px solid red' }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };


// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// export default function VerticalTabs() {
//   const [value, setValue] = React.useState(0);
//   const [color, setColor] = React.useState('white')

  
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };


//   const myStyle={
//       color:'white',
//       fontSize:'20px',
//       gridGap:'120px',
//       borderRight:'none',
//   }


//   return (
//     <MyBox>

//       <TabPanel value={value} index={0}>
//          Item  One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//          Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Item Four
//       </TabPanel>
//       <Tabs
//         orientation="vertical grid"
//         value={value}
//         onChange={handleChange}
//         aria-label="vertical tabs example"
//         indicatorColor="none"
//         sx={{wordSpacing:'20px'}}
//         style={{size:'sm'}}
//       >
//         <Tab icon={1} {...a11yProps(0)} style={myStyle}/>
//         <Tab icon={2} {...a11yProps(1)} style={myStyle} />
//         <Tab icon={3} {...a11yProps(2)} style={myStyle}/>
//         <Tab icon={4} {...a11yProps(3)} style={myStyle}/>
//       </Tabs>
//     </MyBox>
//   );
// }


// const MyBox = styled.div`
//     justify-content: start;
//     color: white;
//     margin-left: 10%;
//     margin-top: 23%;
//     align-content: center;
//     border-right: 0px solid red;
// `