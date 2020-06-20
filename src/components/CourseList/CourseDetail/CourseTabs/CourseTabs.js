import React, { useState, Fragment } from "react";

import { GmailTabs, GmailTabItem } from "@mui-treasury/components/tabs/gmail";

import { Box, Paper } from "@material-ui/core";

import { Inbox, LocalOffer, People, Info } from "@material-ui/icons";

import Overview from "./Overview";
import Curriculum from "./Curriculum";

function TabPanel({ children, tabNum, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={tabNum !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {tabNum === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const CourseTabs = () => {
  const [tabNum, setTabNum] = useState(0);

  const handleChange = (_, newValue) => {
    setTabNum(newValue);
  };

  return (
    <Fragment>
      <GmailTabs
        value={tabNum}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        aria-label="scrollable force tabs"
      >
        <GmailTabItem icon={<Inbox />} label={"Overview"} {...a11yProps(0)} />
        <GmailTabItem
          icon={<People />}
          label={"Curriculum"}
          {...a11yProps(1)}
        />
        <GmailTabItem icon={<LocalOffer />} label={"FAQ"} {...a11yProps(2)} />
        <GmailTabItem
          icon={<Info />}
          label={"Announcement"}
          {...a11yProps(3)}
        />
        <GmailTabItem icon={<Info />} label={"Reviews"} {...a11yProps(4)} />
      </GmailTabs>

      <Box ml={4}>
        <Paper elevation={0}>
          <TabPanel tabNum={tabNum} index={0}>
            <Overview />
          </TabPanel>

          <TabPanel tabNum={tabNum} index={1}>
            <Curriculum />
          </TabPanel>

          <TabPanel tabNum={tabNum} index={2}>
            FAQ
          </TabPanel>

          <TabPanel tabNum={tabNum} index={3}>
            Announcement
          </TabPanel>

          <TabPanel tabNum={tabNum} index={4}>
            Reviews
          </TabPanel>
        </Paper>
      </Box>
    </Fragment>
  );
};

export default CourseTabs;
