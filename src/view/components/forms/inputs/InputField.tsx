import React, {ChangeEvent, memo} from "react";
import OutlinedInput, {OutlinedInputProps} from "@mui/material/OutlinedInput";
// eslint-disable-next-line import/no-extraneous-dependencies
import {useField} from "formik";
import {SxProps} from "@mui/system";
import {useTheme} from "@mui/material/styles";
// eslint-disable-next-line import/no-extraneous-dependencies
import {FormikErrors} from "formik/dist/types";

type InputFieldProps = {
  placeholder?: string;
  name: string;
  type?: string;
  label?: string;
  disabled?: boolean;
  value?: string;
  required?: boolean;
  sx?: SxProps;
  setErrors?: (errors: FormikErrors<Record<string, string>>) => void;
} & OutlinedInputProps;

function InputField({
  placeholder, required = false, setErrors, label, name, type, sx, value, disabled, ...props
}: InputFieldProps) {
  const [field, meta, helpers] = useField(name);
  const theme = useTheme();

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
      onChange={(event) => handleChanging(event)}
      type={type}
      fullWidth
      disabled={disabled}
      value={value}
      sx={{
        ...sx,
        color: theme.palette.textColor.faded,
        border: disabled ? "none" : `2px solid ${theme.palette.textColor.faded}`,
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
            WebkitTextFillColor: theme.palette.textColor.main,
          },
        },
        "&.Mui-error": {
          borderColor: disabled ? "none" : theme.palette.error.main,
          background: disabled ? theme.palette.bgColor.extraLight : theme.palette.textColor.main,
          input: {
            WebkitTextFillColor: disabled ? theme.palette.textColor.faded : theme.palette.error.main,
          },
          "& path": {
            stroke: disabled ? theme.palette.bgColor.extraLight : theme.palette.error.main,
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
            background: theme.palette.bgColor.light,
          },
          "&::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
          },
          "&::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
          },
        },
        "& .MuiOutlinedInput-input": {
          color: theme.palette.textColor.faded,
          border: "none",
          height: 0,

          "&.Mui-disabled": {
            color: theme.palette.textColor.faded,
            WebkitTextFillColor: theme.palette.textColor.faded,
            userSelected: "none",
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
          color: theme.palette.textColor.faded,
        },
        "& .MuiOutlinedInput-inputMultiline": {
          color: theme.palette.textColor.faded,
          border: "none",
        },
      }}
      inputProps={{
        ...props.inputProps,
        placeholder,
        required,
        label,
      }}
      required={required}
      label={label}
      placeholder={`${placeholder || ""} ${required ? "*" : ""}`}
      error={meta.touched && Boolean(meta.error)}
    />
  );
}

export default memo(InputField);
