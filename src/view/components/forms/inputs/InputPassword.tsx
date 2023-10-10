import React, {ChangeEvent, memo, useState} from "react";
import OutlinedInput, {OutlinedInputProps} from "@mui/material/OutlinedInput";
// eslint-disable-next-line import/no-extraneous-dependencies
import {useField} from "formik";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import {useTheme} from "@mui/material/styles";
import {SxProps} from "@mui/system";
import Box from "@mui/material/Box";
// eslint-disable-next-line import/no-extraneous-dependencies
import {FormikErrors} from "formik/dist/types";
import {CloseEyeIcon, KeyIcon, OpenEyeIcon} from "../../../theme/icons";

type InputPasswordProps = {
  placeholder?: string;
  name: string;
  label?: string;
  required?: boolean;
  sx?: SxProps;
  endAdornment?: boolean;
  showUserPassword?: boolean;
  setErrors?: (errors: FormikErrors<Record<string, string>>) => void;
} & OutlinedInputProps;

function InputPassword({
  placeholder,
  required = false,
  label,
  name,
  sx,
  endAdornment = true,
  showUserPassword = true,
  setErrors,
  ...props
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(showUserPassword);
  const theme = useTheme();

  const [field, meta, helpers] = useField(name);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChanging = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    field.onChange(event);
    if (meta.touched && meta.error) {
      helpers.setTouched(false);
      helpers.setError("");
      if (setErrors) {
        setErrors({});
      }
    }
  };

  return (
    <OutlinedInput
      {...props}
      {...field}
      type={showPassword ? "password" : "text"}
      fullWidth
      onChange={(event) => handleChanging(event)}
      value={field.value}
      required={required}
      label={label}
      sx={{
        ...sx,
        "&.MuiInputBase-root": {
          color: theme.palette.textColor.faded,
          border: `2px solid ${theme.palette.textColor.faded}`,
          borderRadius: theme.spacing(2),
          marginBottom: theme.spacing(1),
          background: theme.palette.bgColor.extraLight,
          height: 40,

          "&:hover": {
            borderColor: theme.palette.textColor.faded,
          },
          "&:focus": {
            borderColor: theme.palette.textColor.faded,
            input: {
              WebkitTextFillColor: theme.palette.textColor.faded,
            },
          },
          "&.Mui-error": {
            borderColor: theme.palette.error.main,
            input: {
              WebkitTextFillColor: theme.palette.error.main,
            },
            "& path": {
              stroke: theme.palette.error.main,
            },
            "& circle": {
              stroke: theme.palette.error.main,
            },
            "& rect": {
              stroke: theme.palette.error.main,
              fill: theme.palette.error.main,
            },
          },

          input: {
            WebkitTextFillColor: theme.palette.textColor.faded,
            "&:-webkit-autofill": {
              WebkitBackgroundOrigin: "content-box",
              WebkitTextFillColor: theme.palette.textColor.faded,
              WebkitBackgroundClip: "text",
            },
            "&::selection": {
              background: theme.palette.bgColor.extraLight,
            },
          },
        },
        "& .MuiInputBase-input": {
          color: theme.palette.textColor.faded,
          border: "none",
          height: 0,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
          color: theme.palette.textColor.faded,
        },
      }}
      endAdornment={
        endAdornment ? (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
              {showPassword ? <CloseEyeIcon /> : <OpenEyeIcon />}
            </IconButton>
          </InputAdornment>
        ) : null
      }
      startAdornment={(
        <Box
          sx={{
            marginRight: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <KeyIcon />
        </Box>
      )}
      placeholder={placeholder}
      error={meta.touched && Boolean(meta.error)}
    />
  );
}

export default memo(InputPassword);
