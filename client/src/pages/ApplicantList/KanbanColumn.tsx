import React from "react";
import { Avatar, Box, Button, Divider, Paper, Typography } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import StarIcon from "@mui/icons-material/Star";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

// Interface for props passed
interface KanbanColumnProps {
  title: string;
  candidates: Candidate[];
}

// Interface defining the shape of a Candidate object
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

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, candidates }) => {
  // Map to assign specific colors to each column title
  const titleColorMap: Record<string, string> = {
    "Applying Period": "#FD8400",
    Screening: "#BF6EC6",
    Interview: "#1876BB",
    Test: "#4FCDC5",
  };

  return (
    <Box
      sx={{
        minWidth: 280,
        maxWidth: 400,
        height: "auto",
        bgcolor: "#E8EBF0",
        borderRadius: 2,
        p: 2,
      }}
    >
      {/* Column header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#FEFEFE",
              bgcolor: titleColorMap[title],
              px: 1,
              borderRadius: 4,
            }}
          >
            {title}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#92969C" }}>
            {candidates.length}
          </Typography>
        </Box>
        <Typography
          variant="subtitle2"
          sx={{
            color: "#92969C",
            display: "flex",
            alignItems: "center",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Detail <KeyboardArrowRightOutlinedIcon />
        </Typography>
      </Box>

      {/* Each candidate information displayed */}
      {candidates.map((candidate, index) => (
        <Paper key={index} elevation={2} sx={{ my: 1.5, p: 1.5 }}>
          {/* Top section with candidate avatar and basic info */}
          <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1 }}>
            <Avatar
              src={undefined}
              alt={candidate.firstName}
              sx={{ width: 40, height: 40, mt: 0.75 }}
            >
              {candidate.firstName.charAt(0).toUpperCase()}
            </Avatar>

            <Box>
              <Typography variant="subtitle1" sx={{ height: 24 }}>
                {candidate.firstName} {candidate.lastName}
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ mr: 0.5, height: 18 }}
                >
                  Applied at
                </Typography>
                <Typography variant="subtitle2">
                  {new Date(candidate.createdAt).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Divider between candidate info and actions */}
          <Divider sx={{ mb: 1.5 }} />

          {/* Bottom section with overall score and referral status */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "#FEFEFF",
                color: "#2C2B2C",
                maxHeight: "24px",
                alignItems: "center",
                borderRadius: 4,
                gap: 0.5,
                border: "1px solid #EAEAEA",
              }}
            >
              <StarIcon sx={{ fontSize: "0.875rem", color: "#F9C103" }} />
              3.5 Overall
            </Button>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {candidate.refferalStatus === "Referred" && (
                <Button
                  sx={{
                    textTransform: "none",
                    bgcolor: "#EBF2F6",
                    maxHeight: "20px",
                    alignItems: "center",
                    borderRadius: 1,
                    gap: 0.5,
                    fontSize: "0.75rem",
                  }}
                >
                  <PersonAddAltOutlinedIcon sx={{ fontSize: "0.875rem" }} />{" "}
                  Referred
                </Button>
              )}
              <MoreHorizIcon sx={{ color: "#BFC1C2" }} />
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default KanbanColumn;
