import React from "react";
import { Box, Divider, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AddIcon from "@mui/icons-material/Add";
import DescriptionIcon from "@mui/icons-material/Description";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import FolderIcon from "@mui/icons-material/Folder";
import NotionIcon from "./../assets/icons/Notion_icon.png";
import GoogleDriveIcon from "./../assets/icons/Google_Drive_icon.png";
import GoogleCalendarIcon from "./../assets/icons/Google_Calendar_icon.png";

function Toolbar() {
  return (
    <Box
      sx={{
        width: "60px",
        height: "100%",
        flex: 1,
        backgroundColor: "#F2F4F8",
        display: "grid",
        gridTemplateRows: "60px 1fr 60px",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <IconButton sx={{ bgcolor: "transparent" }}>
        <AddIcon />
      </IconButton>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          borderBottom: "2px solid #E6E8EB",
          borderTop: "2px solid #E6E8EB",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <IconButton sx={{ color: "#9B9EAB" }}>
          <AssignmentTurnedInIcon />
        </IconButton>
        <IconButton sx={{ color: "#9B9EAB" }}>
          <DescriptionIcon />
        </IconButton>
        <IconButton sx={{ color: "#9B9EAB" }}>
          <FolderIcon />
        </IconButton>

        <Divider variant="middle" flexItem />

        <IconButton sx={{ color: "#9B9EAB" }}>
          <img
            src={GoogleDriveIcon}
            alt="Google Drive"
            style={{ width: 18, height: 18 }}
          />
        </IconButton>
        <IconButton sx={{ color: "#9B9EAB" }}>
          <img
            src={NotionIcon}
            alt="Notion"
            style={{ width: 24, height: 24 }}
          />
        </IconButton>
        <IconButton sx={{ color: "#9B9EAB" }}>
          <img
            src={GoogleCalendarIcon}
            alt="Google Calendar"
            style={{ width: 18, height: 18 }}
          />
        </IconButton>
      </Box>
      <IconButton sx={{ bgcolor: "transparent" }}>
        <KeyboardArrowLeftIcon />
      </IconButton>
    </Box>
  );
}

export default Toolbar;
