import React from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
} from "@mui/material";

import Section1 from "./Section1";

const General = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (_: any, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Header */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Section 1: General Purpose Information
      </Typography>

      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          mb: 2,
        }}
      >
        <Tab label="General" />
        <Tab label="Workstation" />
        <Tab label="Controller" />
        <Tab label="Network" />
        <Tab label="Miscellaneous" />
        <Tab label="Software" />
      </Tabs>

      {/* Tab Content */}
      {tabValue === 0 && <Section1 />}

      {tabValue === 1 && <Box>Workstation content coming soon...</Box>}
      {tabValue === 2 && <Box>Controller content coming soon...</Box>}
      {tabValue === 3 && <Box>Network content coming soon...</Box>}
      {tabValue === 4 && <Box>Miscellaneous content coming soon...</Box>}
      {tabValue === 5 && <Box>Software content coming soon...</Box>}
    </Box>
  );
};

export default General;