// page.tsx
import { Box, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* WILL VENTURES Text */}
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "4rem",
          fontFamily: "Helvetica neue",
          transform: "scaleX(1.5)",
        }}
      >
        WANDERERS
      </Typography>

      {/* "KNOW NOTHING OF THE IMPOSSIBLE" Text */}
      <Typography
        variant="body2"
        sx={{
          color: "white",
          position: "absolute",
          bottom: "20px",
          left: "20px",
          fontSize: "0.875rem",
        }}
      >
        KNOW NOTHING OF THE IMPOSSIBLE
      </Typography>

      {/* WV Logo at top-right */}
      <Typography
        variant="h5"
        sx={{
          color: "white",
          position: "absolute",
          top: "20px",
          right: "20px",
          fontWeight: "bold",
        }}
      >
        WV
      </Typography>
    </Box>
  );
}
