import { Box, Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { useState } from "react";

import Section1GeneralInfo from "./Section1GeneralInfo";
import Section12OfferRevision from "./Section12OfferRevision";
import Section13NewOffer from "./Section13NewOffer";

const ExpandMore = styled((props: any) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  transition: "0.2s",
}));

const Section1 = () => {
  // DATA FOR ALL SECTIONS
  const sectionData = [
    {
      mainTitle: "Section – 1",
      subSections: [
        { title: "1.1 General Information", component: Section1GeneralInfo },
        { title: "1.2 Offer Revision Request", component: Section12OfferRevision },
        { title: "1.3 New Offer Request", component: Section13NewOffer },
      ],
    },
    {
      mainTitle: "Section – 2",
      subSections: [
        { title: "2.1 CPU Specs", component: Section1GeneralInfo },
        { title: "2.2 Memory Specs", component: Section1GeneralInfo },
      ],
    },
    {
      mainTitle: "Section – 3",
      subSections: [
        { title: "3.1 VLAN Details", component: Section1GeneralInfo },
        { title: "3.2 IP Allocation", component: Section1GeneralInfo },
        { title: "3.3 Firewall Rules", component: Section1GeneralInfo },
      ],
    },
  ];

  return (
    <Box>
      {sectionData.map((section, index) => {
        const [expanded, setExpanded] = useState(false);

        return (
          <Box key={index} sx={{ mb: 2 }}>
            {/* PARENT COLLAPSIBLE */}
            <Box
              sx={{
                backgroundColor: "#5e7597",
                color: "white",
                padding: "10px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: expanded ? "4px 4px 0 0" : "4px",
              }}
              onClick={() => setExpanded(!expanded)}
            >
              <Typography fontWeight="bold">{section.mainTitle}</Typography>
              <ExpandMore expand={expanded}>
                <ExpandMoreIcon />
              </ExpandMore>
            </Box>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              {section.subSections.map((sub, i) => {
                const SubComponent = sub.component;
                return (
                  <Box key={i} sx={{ mt: 2 }}>
                    <SubComponent title={sub.title} />
                  </Box>
                );
              })}
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
};

export default Section1;