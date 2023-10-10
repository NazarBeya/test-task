import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker as MuiDatePicker} from "@mui/x-date-pickers/DatePicker";
import {useTheme} from "@mui/material/styles";
import {CalendarIcon} from "@/view/theme/icons";

interface Props {
  date: Date | null;
  setDate: (date: Date | null) => void;
  views?: ("year" | "month" | "day")[];
}

function DatePicker({
  date, setDate, views = ["year", "month", "day"], ...props
}: Props) {
  const theme = useTheme();

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MuiDatePicker
          value={date}
          onChange={(newDate) => setDate(newDate)}
          slots={{
            // eslint-disable-next-line react/no-unstable-nested-components
            openPickerIcon: () => <CalendarIcon />,
          }}
          showDaysOutsideCurrentMonth
          views={views}
          slotProps={{
            popper: {
              sx: {
                "& .MuiPaper-root": {
                  marginTop: theme.spacing(1),
                  boxShadow: "0px 4px 8px rgba(1, 1, 27, 0.24)",
                  borderRadius: "16px",
                  background: theme.palette.bgColor.dark,
                  color: theme.palette.textColor.main,
                },
                "& .MuiTypography-root": {
                  color: theme.palette.textColor.faded,
                },
                "& .MuiPickersDay-root": {
                  color: theme.palette.textColor.faded,
                  border: "none",
                  background: "none",

                  "&:hover": {
                    background: theme.palette.bgColor.extraLight,
                    color: theme.palette.accent.orange,
                  },
                  "&.Mui-selected": {
                    background: theme.palette.accent.orange,
                    color: theme.palette.textColor.main,

                    "&:hover": {
                      background: theme.palette.accent.orange,
                      color: theme.palette.textColor.main,
                    },

                    "&:focus": {
                      background: theme.palette.accent.orange,
                      color: theme.palette.textColor.main,
                    },
                  },
                },
                "& .MuiIconButton-root": {
                  color: theme.palette.accent.orange,
                },
                "&.Mui-selected": {
                  background: theme.palette.accent.orange,
                  color: theme.palette.textColor.main,

                  "&:hover": {
                    background: theme.palette.accent.orange,
                    color: theme.palette.textColor.main,
                  },

                  "&:focus": {
                    background: theme.palette.accent.orange,
                    color: theme.palette.textColor.main,
                  },
                },
                "& .MuiPickersCalendarHeader-root": {
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                },
                "& .MuiPickersArrowSwitcher-root": {
                  display: "inline-flex",
                },
                "& .MuiPickersCalendarHeader-labelContainer": {
                  position: "absolute",
                  left: "110px",
                  right: "110px",
                },
                "& .MuiPickersCalendarHeader-label": {
                  textAlign: "center",
                  width: "100%",
                  color: theme.palette.textColor.main,
                  userSelect: "none",
                },
                "& .MuiPickersArrowSwitcher-spacer": {
                  width: "220px",
                },
                "& .MuiPickersDay-dayOutsideMonth": {
                  color: theme.palette.textColor.faded,
                  opacity: 0.2,

                  "&:hover": {
                    opacity: 1,
                  },

                  "&:focus": {
                    opacity: 1,
                  },

                  "&.Mui-selected": {
                    opacity: 1,
                  },
                },
              },
            },
          }}
          sx={{
            "& .MuiInputBase-root": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.palette.textColor.faded,
              height: 40,
              background: theme.palette.bgColor.dark,
              border: `2px solid ${theme.palette.bgColor.light}`,
              borderRadius: "16px",
              margin: 0,
              padding: 0,

              "&:hover": {
                border: `2px solid ${theme.palette.bgColor.light}`,
              },
              "&:focus": {
                border: `2px solid ${theme.palette.bgColor.light}`,
              },
              "&:active": {
                border: `2px solid ${theme.palette.bgColor.light}`,
              },
              input: {
                px: theme.spacing(1),
                WebkitTextFillColor: theme.palette.textColor.faded,
                border: "none",
                "&:-webkit-autofill": {
                  WebkitBackgroundOrigin: "content-box",
                  WebkitTextFillColor: theme.palette.textColor.faded,
                  WebkitBackgroundClip: "text",
                },
                "&::selection": {
                  background: theme.palette.bgColor.light,
                  border: "none",
                },
                "&::-webkit-outer-spin-button": {
                  WebkitAppearance: "none",
                  border: "none",
                },
                "&::-webkit-inner-spin-button": {
                  WebkitAppearance: "none",
                  border: "none",
                },
              },
            },
            "& .MuiInputAdornment-root": {
              marginRight: theme.spacing(1.75),
            },
            "& .MuiOutlinedInput-input": {
              color: theme.palette.textColor.faded,
              border: "none",
              height: 0,
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
          {...props}
        />
      </LocalizationProvider>
    </>
  );
}

export default DatePicker;
