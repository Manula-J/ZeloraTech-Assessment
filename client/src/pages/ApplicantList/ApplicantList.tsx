import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const positions = [
  "Research and Development Officer",
  "Software Engineer",
  "Marketing Specialist",
];

function ApplicantList() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedPosition, setSelectedPosition] = useState<string>(
    positions[0]
  );
  const [status, setStatus] = useState<string>("open");
  const [tab, setTab] = useState<number>(0);

  const handleDropDownClose = (position?: string) => {
    if (position) {
      setSelectedPosition(position);
    }
    setAnchorEl(null);
  };

  const handlePrevPosition = () => {
    if (positions.indexOf(selectedPosition) > 0) {
      setSelectedPosition(positions[positions.indexOf(selectedPosition) - 1]);
    }
  };

  const handleNextPosition = () => {
    if (positions.indexOf(selectedPosition) < positions.length - 1) {
      setSelectedPosition(positions[positions.indexOf(selectedPosition) + 1]);
    }
  };

  return (
    <Box sx={{ p: "2rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <IconButton
            aria-label="back"
            sx={{
              bgcolor: "#FEFEFE",
              border: "1px solid #E9E9EB",
            }}
          >
            <KeyboardBackspaceIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              }}
              variant="h5"
            >
              {selectedPosition}
            </Typography>

            <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
              <KeyboardArrowDownIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => handleDropDownClose()}
            >
              {positions.map((position) => (
                <MenuItem
                  key={position}
                  selected={position === selectedPosition}
                  onClick={() => handleDropDownClose(position)}
                >
                  {position}
                </MenuItem>
              ))}
            </Menu>

            <Divider orientation="vertical" variant="middle" flexItem />

            <IconButton
              onClick={handlePrevPosition}
              sx={{ bgcolor: "#FEFEFE", border: "1px solid #E9E9EB" }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>

            <IconButton
              onClick={handleNextPosition}
              sx={{ bgcolor: "#FEFEFE", border: "1px solid #E9E9EB" }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>

            <Typography
              variant="subtitle2"
              sx={{
                color: "#929498",
                fontSize: {
                  xs: "0.675rem",
                  sm: "0.75rem",
                  md: "0.875rem",
                },
              }}
            >
              {positions.indexOf(selectedPosition) + 1} of {positions.length}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <IconButton
            sx={{
              bgcolor: "#FEFEFE",
              border: "1px solid #E9E9EB",
              borderRadius: 2,
            }}
          >
            <MoreHorizIcon />
          </IconButton>

          <Divider orientation="vertical" variant="middle" flexItem />

          <Button
            sx={{
              textTransform: "none",
              bgcolor: "#376965",
              color: "#FEFEFE",
              minHeight: "41.6px",
              gap: 0.5,
              alignItems: "center",
              borderRadius: 2,
            }}
          >
            <ShareOutlinedIcon sx={{ fontSize: "1.125rem" }} />
            <Typography variant="subtitle2">Share & Promote</Typography>
          </Button>
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", ml: 8, mt: 1, alignItems: "center", gap: 0.5 }}
      >
        <FormControl size="small">
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            IconComponent={KeyboardArrowDownOutlinedIcon}
            sx={{
              height: "24px",
              fontSize: 12,
              borderRadius: 4,
              bgcolor: status === "open" ? "#99BF80" : "red",
              color: "#FEFEFE",
              "& .MuiSelect-icon": {
                color: "#FEFEFE",
              },
            }}
          >
            <MenuItem value="open">Open</MenuItem>
            <MenuItem value="closed">Closed</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="body2">
          •{" "}
          <SearchIcon
            sx={{ fontSize: 16, color: "#99BF80", verticalAlign: "middle" }}
          />{" "}
          Researcher
        </Typography>

        <Typography variant="body2">
          •{" "}
          <WorkOutlineOutlinedIcon
            sx={{ fontSize: 16, verticalAlign: "middle" }}
          />{" "}
          Onsite
        </Typography>

        <Typography variant="body2">
          •{" "}
          <PersonOutlineOutlinedIcon
            sx={{ fontSize: 16, verticalAlign: "middle" }}
          />{" "}
          Created by
        </Typography>

        <Avatar
          alt="John Doe"
          src="/profile-icon.png"
          sx={{ width: 30, height: 30 }}
        />
        <Typography variant="body2" sx={{ textDecoration: "underline" }}>
          Bagus Fikri
        </Typography>
      </Box>

      <Box sx={{ mt: 2, borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={(e: React.SyntheticEvent, val: number) => setTab(val)}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#25272C",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#25272C",
            },
          }}
        >
          <Tab label="Candidates" />
          <Tab label="Job Info" />
          <Tab label="Calendar" />
          <Tab label="Score Card" />
          <Tab label="Activity" />
          <Tab label="Application Form" />
          <Tab label="Automation" />
        </Tabs>
      </Box>
    </Box>
  );
}

export default ApplicantList;
