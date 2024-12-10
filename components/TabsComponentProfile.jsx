import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { stepData } from '../stepData'; 

import styles from '../pages/styles/style.module.scss'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
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
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function TabsComponentProfile() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="">
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Horizontal tabs example"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        {stepData.map((step, index) => (
          <Tab key={index} label={step.label} {...a11yProps(index)} />
        ))}
      </Tabs>
      {stepData.map((step, index) => (
        <div className={styles.profileStatsBlock}>
        <TabPanel key={index} value={value} index={index} className={styles.profileStats}>
          {step.content} stars 😼
          </TabPanel>
        </div>
      ))}
    </Box>
      {/* <div className="">s</div> */}
    </div>
  );
}
