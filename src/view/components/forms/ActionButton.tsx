import React from "react";
import {SxProps} from "@mui/system";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material/styles";

interface Props {
  label: string;
  disabled?: boolean;
  sx?: SxProps
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  error?: boolean;
}

export default function ActionButton({
  label, disabled, sx, type = "submit", onClick, error = false, ...props
}: Props) {
  const theme = useTheme();

  return (
    <>
      <Button
        type={type}
        disabled={disabled}
        variant="contained"
        disableRipple
        disableElevation
        disableTouchRipple
        disableFocusRipple
        fullWidth
        onClick={onClick}
        sx={{
          ...sx,
          backgroundColor: error ? theme.palette.error.main : theme.palette.textColor.faded,
          borderRadius: "19px",
          fontWeight: 700,
          height: 32,
          fontSize: "16px",
          lineHeight: "19px",
          color: theme.palette.textColor.main,
          textTransform: "capitalize",
          fontStyle: "italic",
          "&:hover": {
            backgroundColor: error ? theme.palette.error.main : theme.palette.textColor.faded,
          },
          "&:active": {
            backgroundColor: error ? theme.palette.error.main : theme.palette.textColor.faded,
          },
          "&:focus": {
            backgroundColor: error ? theme.palette.error.main : theme.palette.textColor.faded,
          },
        }}
        {...props}
      >
        {label}
      </Button>
    </>
  );
}
