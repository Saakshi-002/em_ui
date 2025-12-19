import { Box, TextField, Typography, Collapse, IconButton } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

// Styled component for the rotating arrow
const ExpandMore = styled((props: any) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props {
  title: string;
  defaultExpanded?: boolean;
}

const Section1GeneralInfo = ({ title, defaultExpanded = false }: Props) => {
  const [expanded, setExpanded] = useState(defaultExpanded);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Form field data
  const formFields = [
    { label: "Requestor", type: "text", placeholder: "Enter requestor name" },
    { label: "Date of Request", type: "date" },
    { label: "Proposal Due Date", type: "date" },
    { label: "Offer Owner", type: "text", placeholder: "Enter offer owner" },
    { label: "Offer Number", type: "text", placeholder: "Enter offer number" },
    { label: "Purchaser", type: "text", placeholder: "Enter purchaser name" },
    { label: "End User (if different from Purchaser)", type: "text", placeholder: "Enter end user" },
    { label: "Plant Name", type: "text", placeholder: "Enter plant name" },
    { label: "Unit", type: "text", placeholder: "Enter unit" },
    { label: "Customer Contact Name", type: "text", placeholder: "Enter contact name" },
    { label: "CRM # (must provide for all pursuits above $1000k)", type: "text", placeholder: "Enter CRM number" },
    { label: "SMS ID", type: "text", placeholder: "Enter SMS ID" },
    { label: "Has a System Registration Utility been run in the past 6 months? (Version 2.3.2 and above)", type: "date" },
  ];

  return (
    <Box sx={{ marginBottom: 2 }}>
      {/* Section header with dropdown arrow */}
      <Box
        sx={{
          backgroundColor: "#8fa5c3",
          padding: "6px 12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          borderRadius: expanded ? "4px 4px 0 0" : "4px",
        }}
        onClick={handleExpandClick}
      >
        <Typography fontWeight="bold" color="white">
  {title}
</Typography>

        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ color: "white", padding: 0 }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>

      {/* Collapsible content */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ padding: 2, backgroundColor: "#f5f5f5" }}>
          {/* Two-column layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {formFields.map((field, index) => (
              <Box
                key={index}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
                  gap: 2,
                  alignItems: "center",
                }}
              >
                {/* Label column */}
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "0.95rem",
                  }}
                >
                  {field.label}
                </Typography>

                {/* Input column */}
                <TextField
                  type={field.type}
                  fullWidth
                  size="small"
                  placeholder={field.placeholder}
                  InputLabelProps={field.type === "date" ? { shrink: true } : undefined}
                  sx={{
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Section1GeneralInfo;