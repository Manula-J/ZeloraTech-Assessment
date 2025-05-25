import React from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BusinessIcon from "@mui/icons-material/Business";
import AssignmentIcon from "@mui/icons-material/Assignment";

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
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        {/* Top most icon */}
        <Box sx={{ position: "relative", width: 40, height: 40, mb: 2 }}>
          {/* Box for shadow - behind */}
          <Box
            sx={{
              position: "absolute",
              left: 6,
              top: 4,
              width: 28,
              height: 40,
              bgcolor: "#9196AF",
              borderRadius: 2,
              zIndex: 0,
            }}
          />
          {/* Top box (F1K) - in front */}
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#25235F",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#9BC8D4",
                fontWeight: "bold",
              }}
            >
              F1K
            </Typography>
          </Box>
        </Box>

        <IconButton sx={{ color: "#9B9EAB" }}>
          <HomeIcon />
        </IconButton>
        <IconButton sx={{ color: "#9B9EAB" }}>
          <CalendarTodayIcon />
        </IconButton>
        <IconButton sx={{ color: "#9B9EAB" }}>
          <QuestionAnswerIcon />
        </IconButton>
        <IconButton
          sx={{ color: "#303B49", bgcolor: "#ECF2F6", borderRadius: 2 }}
        >
          <AccountCircleIcon />
        </IconButton>

        <Divider variant="fullWidth" />

        <IconButton sx={{ color: "#9B9EAB" }}>
          <PersonIcon />
        </IconButton>
        <IconButton sx={{ color: "#9B9EAB" }}>
          <ScheduleIcon />
        </IconButton>

        <Divider variant="fullWidth" />

        <IconButton sx={{ color: "#9B9EAB" }}>
          <ShoppingBagIcon />
        </IconButton>
        <IconButton sx={{ color: "#9B9EAB" }}>
          <BusinessIcon />
        </IconButton>
        <IconButton sx={{ color: "#9B9EAB" }}>
          <AssignmentIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Divider variant="fullWidth" />
        <IconButton sx={{ color: "#9B9EAB" }}>
          <SettingsIcon />
        </IconButton>
        <IconButton sx={{ color: "#9B9EAB" }}>
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
