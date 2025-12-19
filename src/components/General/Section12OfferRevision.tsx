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

const Section12OfferRevision = ({ title, defaultExpanded = false }: Props) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [formData, setFormData] = useState({
    previousRevisionOfferNumber: "",
    previousRevisionOfferDate: "",
    changesRequested: "",
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Previous Revision Offer Number */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
                gap: 2,
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: "0.95rem" }}>
                Previous Revision Offer Number
              </Typography>
              <TextField
                type="text"
                fullWidth
                size="small"
                placeholder="Enter offer number"
                value={formData.previousRevisionOfferNumber}
                onChange={(e) => handleFieldChange("previousRevisionOfferNumber", e.target.value)}
                sx={{
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                  },
                }}
              />
            </Box>

            {/* Previous Revision Offer Date */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
                gap: 2,
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: "0.95rem" }}>
                Previous Revision Offer Date
              </Typography>
              <TextField
                type="date"
                fullWidth
                size="small"
                value={formData.previousRevisionOfferDate}
                onChange={(e) => handleFieldChange("previousRevisionOfferDate", e.target.value)}
                InputLabelProps={{ shrink: true }}
                sx={{
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                  },
                }}
              />
            </Box>

            {/* List changes requested for this revision */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
                gap: 2,
                alignItems: "flex-start",
              }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: "0.95rem", pt: 1 }}>
                List changes requested for this revision:
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                size="small"
                placeholder="Notes ..."
                value={formData.changesRequested}
                onChange={(e) => handleFieldChange("changesRequested", e.target.value)}
                sx={{
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Section12OfferRevision;