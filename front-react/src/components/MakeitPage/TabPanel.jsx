import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DetailsImg from './../../assets/img/제품 정보.png'
import QnAImg from './../../assets/img/문의하기.png'
import ReviewImg from './../../assets/img/리뷰 보기.png'
import { Container } from '@mui/material';


export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100vw', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} variant="fullWidth" sx={{bgcolor : "#FFE664"}} textColor="inherit">
        <Tab label="상세정보" {...a11yProps(0)}>
          
        </Tab>
        <Tab label="문의하기" {...a11yProps(1)}>
        
        </Tab>
        <Tab label="리뷰" {...a11yProps(2)}>
        
        </Tab>
      </Tabs>
    </Box>
    <Container sx={{mt: 10}}>
    <TabPanel value={value} index={0}>
      <img src={DetailsImg} alt="details"></img>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <img src={QnAImg} alt="QnA"></img>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <img src={ReviewImg} alt="Review"></img>
    </TabPanel>
    </Container>
    </>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
        <Box sx={{ p: 3, maxWidth: 'lg' }}>
          {children}
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
