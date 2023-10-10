import React, {memo} from "react";
import TextareaAutosize, {TextareaAutosizeProps} from "@mui/material/TextareaAutosize";
import {useTheme} from "@mui/material/styles";

type Props = {
  placeholder?: string
} & TextareaAutosizeProps;

function TextArea({
  placeholder, ...props
}: Props) {
  const theme = useTheme();
  return (
    <>
      <TextareaAutosize
        {...props}
        aria-label="maximum height"
        placeholder={placeholder}
        style={{
          width: "100%",
          height: "100%",
          resize: "none",
          background: theme.palette.bgColor.extraLight,
          border: `2px solid ${theme.palette.textColor.faded}`,
          color: theme.palette.textColor.faded,
          borderRadius: "16px",
          padding: theme.spacing(2),
        }}
      />
    </>
  );
}

export default memo(TextArea);
