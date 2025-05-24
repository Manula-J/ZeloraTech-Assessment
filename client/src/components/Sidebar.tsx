import React from "react";
import { Box, Divider, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  return (
    <Box
      sx={{
        width: "60px",
        backgroundColor: "#FEFEFE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        gap: 2,
        justifyContent: "space-between",
      }}
    >
      <Box>
        <IconButton sx={{ color: "#1D1F2A" }}>
          <HomeIcon />
        </IconButton>
        <IconButton sx={{ color: "#1D1F2A" }}>
          <HomeIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Divider variant="fullWidth" />
        <IconButton sx={{}}>
          <SettingsIcon />
        </IconButton>
        <IconButton sx={{}}>
          <AnnouncementIcon />
        </IconButton>
        <IconButton sx={{ color: "#FEFEFE", backgroundColor: "#1D1F2A" }}>
          <QuestionMarkIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Sidebar;
