import React from "react";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";

function NotFoundPage() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.bgColor.light,
      }}
      >
        NotFoundPage
      </Box>
    </>
  );
}

export default NotFoundPage;
