import React from "react";
import { Avatar, Box, Button, Divider, Paper, Typography } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import StarIcon from "@mui/icons-material/Star";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

interface KanbanColumnProps {
  title: string;
  users: string[];
}

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
  createdAt: Date;
  refferalStatus: string | null;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, users }) => {
  const titleColorMap: Record<string, string> = {
    "Applying Period": "#FD8400",
    Screening: "#BF6EC6",
    Interview: "#1876BB",
    Test: "#4FCDC5",
  };

  const candidates = [
    {
      id: 1,
      firstName: "Ayesha",
      lastName: "Fernando",
      email: "ayesha.fernando@example.com",
      telephone: "+94712345678",
      positionId: 101, // Assume this matches a Position in your DB
      applicationStage: "Applying Period",
      overallScore: 85.5,
      assessmentStatus: "Completed",
      createdAt: "2025-05-10T10:00:00Z",
      refferalStatus: "Referred",
      // position and interviews would typically be handled through relations
    },
    {
      id: 2,
      firstName: "Tharindu",
      lastName: "Perera",
      email: "tharindu.perera@example.com",
      telephone: "+94798765432",
      positionId: 102, // Assume this matches another Position in your DB
      applicationStage: "Interview",
      overallScore: 78.2,
      assessmentStatus: "Pending",
      createdAt: "2025-05-12T14:30:00Z",
      refferalStatus: null,
    },
  ];

  return (
    <Box
      sx={{
        minWidth: 300,
        maxWidth: 400,
        bgcolor: "#E8EBF0",
        borderRadius: 2,
        p: 2,
      }}
    >
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
            {users.length}
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

      {candidates.map((candidate, index) => (
        <Paper key={index} elevation={2} sx={{ my: 1, p: 1.5 }}>
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

          <Divider sx={{ mb: 1.5 }} />

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
              {candidate.refferalStatus !== null && (
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
