import React, {memo, ReactNode, useState} from "react";
import Box from "@mui/material/Box";
import {
  ErrorMessage, Field, FieldInputProps, useField,
} from "formik";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {SxProps} from "@mui/system";
import {useTheme} from "@mui/material/styles";
import {SelectIcon} from "@/view/theme/icons";

export interface FormikSelectItem {
  label: string | ReactNode;
  value: string;
}

interface FormikSelectProps {
  id?: string;
  name: string;
  items: FormikSelectItem[];
  label?: string;
  required?: boolean;
  onClick?: (value: string) => void;
  defaultValue?: string;
}

interface MaterialUISelectFieldProps extends FieldInputProps<string> {
  errorString?: string;
  children: ReactNode;
  label: string;
  required: boolean;
  defaultItem?: string;
  sx?: SxProps;
}

function MaterialUISelectField({
  errorString, label, children, name, required, defaultItem, sx,
}: MaterialUISelectFieldProps) {
  const theme = useTheme();
  const [field, meta] = useField(name);
  const [open, setOpen] = useState(false);

  return (
    <FormControl
      sx={{
        ...sx,
        "& .MuiInputBase-root": {
          display: "flex",
          alignItems: "center",
          color: theme.palette.textColor.faded,
          border: "2px solid",
          borderColor: theme.palette.textColor.faded,
          background: theme.palette.textColor.main,
          borderRadius: theme.spacing(2),
          height: 40,
          marginBottom: theme.spacing(1),
          "&:hover": {
            borderColor: theme.palette.textColor.faded,
          },
          "&:focus": {
            borderColor: theme.palette.textColor.faded,
            input: {
              WebkitTextFillColor: theme.palette.textColor.main,
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
        "&.MuiPaper-root": {
          background: theme.palette.bgColor.dark,
        },

        "& .MuiSelect-select": {
          padding: theme.spacing(2.0625, 0.75),
          paddingRight: theme.spacing(0.75),
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
      fullWidth
    >
      <InputLabel required={required} error={meta.touched && Boolean(meta.error)}>
        {label}
      </InputLabel>
      <Select
        {...field}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        defaultValue={defaultItem}
        MenuProps={{
          sx: {
            "& .MuiPaper-root": {
              background: theme.palette.textColor.main,
              color: theme.palette.textColor.main,
              border: "2px solid #322A49",
              borderRadius: theme.spacing(2),
              marginTop: theme.spacing(1),
              maxHeight: 290,
              borderSpacing: "12px",

              "&::-webkit-scrollbar": {
                width: 4,
                mx: theme.spacing(1),
              },
              "&::-webkit-scrollbar-track": {
                width: 4,
                background: theme.palette.bgColor.extraLight,
                borderRadius: "2px",
                my: theme.spacing(1.5),
              },
              "&::-webkit-scrollbar-thumb": {
                width: 4,
                background: theme.palette.bgColor.light,
                borderRadius: "2px",
              },

              "& .MuiMenuItem-root": {
                color: theme.palette.textColor.main,
                "&:hover": {
                  background: theme.palette.textColor.lightFaded,
                },
              },
            },
          },
        }}
        /* eslint-disable-next-line react/no-unstable-nested-components */
        IconComponent={() => (
          <Box
            onClick={() => setOpen(!open)}
            sx={{
              position: "relative",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: theme.spacing(1),
            }}
          >
            <SelectIcon />
          </Box>
        )}
        error={meta.touched && Boolean(meta.error)}
      >
        {children}
      </Select>
    </FormControl>
  );
}

function SelectField({
  id, name, items, label, required = false, onClick, defaultValue,
}: FormikSelectProps) {
  const theme = useTheme();
  const [defaultItem] = useState<string | number | undefined>(defaultValue || undefined);
  console.log()
  const handleClick = (item: string) => {
    if (onClick) {
      onClick(item);
    }
  };

  return (
    <Field
      id={id}
      name={name}
      as={MaterialUISelectField}
      label={label}
      errorString={<ErrorMessage name={name}>{(msg: string) => <div>{msg}</div>}</ErrorMessage>}
      required={required}
      defaultItem={defaultItem}
    >
      {items.map((item, index) => (
        <MenuItem
          key={index}
          value={item.value}
          onClick={() => handleClick(item.value)}
          sx={{
            m: theme.spacing(1),
            borderRadius: theme.spacing(1),

            "&.Mui-selected": {
              background: theme.palette.textColor.lightFaded,
            },
          }}
        >
          {item.label}
        </MenuItem>
      ))}
    </Field>
  );
}

export default memo(SelectField);
