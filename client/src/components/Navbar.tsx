import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1D1F2A" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Left section */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Box display="flex">
              <Box
                component="img"
                src="/logo.png"
                alt="logo"
                sx={{ width: 100, height: "auto" }}
              ></Box>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ borderColor: "#2E2F3C", borderWidth: 1.5 }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  ml: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  alignItems: "center",
                }}
              >
                Recruitment
              </Typography>
            </Box>

            {/* Middle section */}
            <Box>
              <Stack spacing={2} direction="row">
                <Button
                  sx={{
                    textTransform: "none",
                    color: "#E7E9EF",
                    backgroundColor: "#343846",
                    px: 3,
                    position: "relative",
                    display: "flex",
                  }}
                >
                  <Box component="span" sx={{ flexShrink: 0 }}>
                    Jobs
                  </Box>
                  <Box>
                    <Badge badgeContent={8} showZero sx={{ padding: "0 6px" }}>
                      <Box sx={{ width: 0, height: 0 }} />
                    </Badge>
                  </Box>
                </Button>
                <Button
                  sx={{
                    textTransform: "none",
                    color: "#787A85",
                    px: 3,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box component="span" sx={{ flexShrink: 0 }}>
                    Candidate
                  </Box>

                  <Badge
                    badgeContent={551}
                    showZero
                    max={999}
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "#E34908",
                        color: "#E7E9EF",
                        padding: "0 6px",
                        borderRadius: 2,
                      },
                      ml: 3.5,
                    }}
                  >
                    <span />
                  </Badge>
                </Button>
                <Button sx={{ color: "#787A85", px: 3, textTransform: "none" }}>
                  Career Site
                </Button>
              </Stack>
            </Box>

            {/* Right side items */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                aria-label="search"
                sx={{
                  backgroundColor: "#F8D653",
                  color: "#000000",
                  minWidth: "1.5rem",
                  height: "2.5rem",
                  borderRadius: 2,
                }}
              >
                <AddIcon />
              </Button>

              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ borderColor: "#2E2F3C", borderWidth: 1.5, mx: 2 }}
              />

              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Button
                  aria-label="search"
                  sx={{
                    backgroundColor: "#343846",
                    color: "#E7E9EF",
                    minWidth: "1.5rem",
                    height: "2.5rem",
                    borderRadius: 2,
                  }}
                >
                  <SearchIcon />
                </Button>

                <Button
                  aria-label="notifications"
                  sx={{
                    backgroundColor: "#343846",
                    color: "#E7E9EF",
                    minWidth: "1.5rem",
                    height: "2.5rem",
                    borderRadius: 2,
                  }}
                >
                  <Badge
                    badgeContent={4}
                    variant="dot"
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "#DF4D13",
                        right: 7,
                        top: 7,
                      },
                      borderRadius: 2,
                    }}
                  >
                    <NotificationsIcon />
                  </Badge>
                </Button>
                <Avatar
                  alt="John Doe"
                  src="/profile-icon.png"
                  sx={{ width: 60, height: 60 }}
                />
              </Stack>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
