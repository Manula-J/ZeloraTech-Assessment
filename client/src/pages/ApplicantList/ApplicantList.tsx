import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import axios from "axios";
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
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import KanbanColumn from "./KanbanColumn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  positionId: number;
  applicationStage?: string;
  overallScore: number;
  assessmentStatus?: string;
  createdAt: string;
  refferalStatus: string;
}

const positions = [
  "Research and Development Officer",
  "Software Engineer",
  "Marketing Specialist",
];

function ApplicantList() {
  // State to manage dropdown anchor element for position selection
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // State to track currently selected job position
  const [selectedPosition, setSelectedPosition] = useState<string>(
    positions[0]
  );

  // State to track the status filter (e.g., "open", "closed")
  const [status, setStatus] = useState<string>("open");

  // State to manage the currently selected tab index
  const [tab, setTab] = useState<number>(0);

  // State to store user input from the search field
  const [query, setQuery] = useState<string>("");

  // State to store the selected date range for filtering candidates
  const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([
    dayjs("2025-05-01"),
    dayjs("2025-05-28"),
  ]);

  // State to store the list of candidates fetched from the backend
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  // Fetch candidate data from the backend when the component mounts
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get<Candidate[]>(
          "http://localhost:4000/candidate/get-candidates"
        );
        setCandidates(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching candidates: ", error);
      }
    };

    fetchCandidates();
  }, []);

  // Helper function to filter candidates by their application stage
  const getCandidatesByStage = (stage: string) => {
    return candidates.filter((c) => c.applicationStage === stage);
  };

  // Event handler to update the search query when user types in search field
  const handleSearch = (e: any) => {
    const value = e.target.value;
    setQuery(value);
  };

  // Handler to close the dropdown and optionally update the selected position
  const handleDropDownClose = (position?: string) => {
    if (position) {
      setSelectedPosition(position);
    }
    setAnchorEl(null);
  };

  // Navigate to the previous position in the positions list
  const handlePrevPosition = () => {
    if (positions.indexOf(selectedPosition) > 0) {
      setSelectedPosition(positions[positions.indexOf(selectedPosition) - 1]);
    }
  };

  // Navigate to the next position in the positions list
  const handleNextPosition = () => {
    if (positions.indexOf(selectedPosition) < positions.length - 1) {
      setSelectedPosition(positions[positions.indexOf(selectedPosition) + 1]);
    }
  };

  return (
    <Box sx={{ p: "2rem", backgroundColor: "#F2F4F8" }}>
      {/* Header section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: 1,
        }}
      >
        {/* Header left section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 3,
            flexGrow: 1,
            minWidth: 0,
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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexShrink: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              }}
              variant="h5"
            >
              {selectedPosition}
            </Typography>

            <IconButton
              onClick={(event) => setAnchorEl(event.currentTarget)}
              size="small"
            >
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

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                borderRightWidth: "2px",
              }}
            />

            <IconButton
              onClick={handlePrevPosition}
              sx={{
                bgcolor: "#FEFEFE",
                border: "1px solid #E9E9EB",
                display: { xs: "none", md: "flex" },
              }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>

            <IconButton
              onClick={handleNextPosition}
              sx={{
                bgcolor: "#FEFEFE",
                border: "1px solid #E9E9EB",
                display: { xs: "none", md: "flex" },
              }}
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

        {/* Header right section */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 3, flexShrink: 1 }}
        >
          <IconButton
            sx={{
              bgcolor: "#FEFEFE",
              border: "1px solid #E9E9EB",
              borderRadius: 2,
            }}
          >
            <MoreHorizIcon />
          </IconButton>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderRightWidth: "2px" }}
          />

          <Button
            sx={{
              textTransform: "none",
              bgcolor: "#376965",
              color: "#FEFEFE",
              minHeight: "41.6px",
              gap: 0.5,
              alignItems: "center",
              borderRadius: 2,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              minWidth: { sm: 40, md: 100 },
              px: { sm: 0, md: 2 },
            }}
          >
            <ShareOutlinedIcon sx={{ fontSize: "1.125rem" }} />
            <Typography
              variant="subtitle2"
              sx={{ display: { xs: "none", md: "inline" } }}
            >
              Share & Promote
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* Position details section */}
      <Box
        sx={{
          display: "flex",
          ml: { xs: 0, md: 8 },
          mt: 1,
          alignItems: "center",
          gap: 0.5,
        }}
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
            sx={{ fontSize: 16, verticalAlign: "middle", color: "#B4B6BC" }}
          />{" "}
          Onsite
        </Typography>

        <Typography variant="body2">
          •{" "}
          <PersonOutlineOutlinedIcon
            sx={{ fontSize: 16, verticalAlign: "middle", color: "#B4B6BC" }}
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

      {/* Tab menu section */}
      <Box
        sx={{
          mt: 2,
          borderBottom: 1,
          borderColor: "divider",
          width: {
            xs: "30%",
            sm: "50%",
            md: "75%",
            lg: "100%",
          },
        }}
      >
        <Tabs
          value={tab}
          onChange={(e: React.SyntheticEvent, val: number) => setTab(val)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mt: 4,
            "& .MuiTabs-indicator": {
              backgroundColor: "#25272C",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#25272C",
            },
            "& .MuiTab-root": {
              minHeight: "40px",
              color: "#7E8084",
            },
          }}
        >
          <Tab
            icon={<GroupOutlinedIcon />}
            label="Candidates"
            iconPosition="start"
          />
          <Tab
            icon={<WorkOutlineOutlinedIcon />}
            label="Job Info"
            iconPosition="start"
          />
          <Tab
            icon={<CalendarTodayOutlinedIcon />}
            label="Calendar"
            iconPosition="start"
          />
          <Tab
            icon={<AssignmentTurnedInOutlinedIcon />}
            label="Score Card"
            iconPosition="start"
          />
          <Tab
            icon={<MonitorHeartOutlinedIcon />}
            label="Activity"
            iconPosition="start"
          />
          <Tab
            icon={<ToggleOnOutlinedIcon />}
            label="Application Form"
            iconPosition="start"
          />
          <Tab
            icon={<SettingsSuggestOutlinedIcon />}
            label="Automation"
            iconPosition="start"
          />
        </Tabs>
      </Box>

      {/* Filter options section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        {/* Fileter options left section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Paper
            component="form"
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              width: 200,
              height: 38,
              borderRadius: "8px",
              border: "1px solid #EBEDEF",
            }}
          >
            <IconButton sx={{ p: "5px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Paper>

          <Button
            sx={{
              width: 160,
              height: 38,
              fontSize: 15,
              textTransform: "none",
              bgcolor: "#E8EBF0",
              color: "#1B1D22",
              alignItems: "center",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <CalendarTodayIcon sx={{ fontSize: 15, mr: 1, color: "#999EB0" }} />
            Date Range
            <KeyboardArrowDownIcon
              sx={{
                color: "#A8A8AC",
                bgcolor: "#FEFEFE",
                borderRadius: 1,
                ml: 1,
              }}
            />
          </Button>

          <Button
            sx={{
              width: 160,
              height: 38,
              fontSize: 15,
              textTransform: "none",
              bgcolor: "#E8EBF0",
              color: "#1B1D22",
              alignItems: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            <AssignmentTurnedInIcon
              sx={{ fontSize: 15, mr: 1, color: "#999EB0" }}
            />
            Score Range
            <KeyboardArrowDownIcon
              sx={{
                color: "#A8A8AC",
                bgcolor: "#FEFEFE",
                borderRadius: 1,
                ml: 1,
              }}
            />
          </Button>

          <Button
            sx={{
              width: 190,
              height: 38,
              fontSize: 15,
              textTransform: "none",
              bgcolor: "#E8EBF0",
              color: "#1B1D22",
              alignItems: "center",
              display: { xs: "none", lg: "flex" },
            }}
          >
            <FilterAltIcon sx={{ fontSize: 15, mr: 1, color: "#999EB0" }} />
            Advanced Filter
            <KeyboardArrowDownIcon
              sx={{
                color: "#A8A8AC",
                bgcolor: "#FEFEFE",
                borderRadius: 1,
                ml: 1,
              }}
            />
          </Button>
        </Box>

        {/* Filter options right section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Button
            sx={{
              minWidth: 40,
              width: { md: 40, lg: 130 },
              px: { md: 0, lg: 8 },
              height: 38,
              fontSize: 15,
              textTransform: "none",
              bgcolor: "transparent",
              color: "#1B1D22",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#E8EBF0",
              },
              gap: 1,
            }}
          >
            <PersonAddAltOutlinedIcon
              sx={{ fontSize: 15, mr: 1, color: "#252525", m: 0 }}
            />
            <Typography
              sx={{
                display: { sm: "none", lg: "flex" },
                fontSize: 15,
                whiteSpace: "nowrap",
              }}
            >
              Refer People
            </Typography>
          </Button>

          <IconButton
            sx={{
              width: 38,
              height: 38,
              bgcolor: "#FEFEFE",
              border: "1px solid #E9E9EB",
              borderRadius: 2,
            }}
          >
            <SettingsOutlinedIcon />
          </IconButton>

          <Divider orientation="vertical" variant="middle" flexItem />

          <Button
            sx={{
              width: 130,
              height: 38,
              fontSize: 15,
              textTransform: "none",
              bgcolor: "#E8EBF0",
              color: "#1B1D22",
              alignItems: "center",
            }}
          >
            <ViewKanbanOutlinedIcon
              sx={{ fontSize: 15, mr: 1, color: "#999EB0" }}
            />
            Kanban
            <KeyboardArrowDownIcon
              sx={{
                color: "#A8A8AC",
                bgcolor: "#FEFEFE",
                borderRadius: 1,
                ml: 1,
              }}
            />
          </Button>
        </Box>
      </Box>

      {/* Kanban style column layout of candidates */}
      <Box
        sx={{
          display: "grid",
          justifyContent: "space-between",
          alignItems: "start",
          mt: 3,
          gap: 1,
          gridTemplateColumns: {
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
        }}
      >
        <KanbanColumn
          title="Applying Period"
          candidates={getCandidatesByStage("Applying Period")}
        />
        <KanbanColumn
          title="Screening"
          candidates={getCandidatesByStage("Screening")}
        />
        <KanbanColumn
          title="Interview"
          candidates={getCandidatesByStage("Interview")}
        />
        <KanbanColumn title="Test" candidates={getCandidatesByStage("Test")} />
      </Box>
    </Box>
  );
}

export default ApplicantList;
