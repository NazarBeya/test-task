import MenuItem from "@mui/material/MenuItem";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {ReactElement, ReactNode, useState} from "react";
import IconButton from "@mui/material/IconButton";
import {Body} from "../typography";
import theme from "@/view/theme";
import useToggle from "@/hooks/useToggle";

export interface Item {
  label: string | ReactNode;
  value: string;
}

interface Props {
  icon:ReactElement;
  items: Item[];
  color?: "primary" | "secondary";
  onSelectChange?: (selectedItems: string[], filterType?: string) => void;
  selectType?: string;
  oneChoice ?: boolean
  currentSelectedItems?: string[];
}

export default function IconSelect({
  icon, items, color = "primary", onSelectChange, selectType, oneChoice, currentSelectedItems,
}: Props) {
  const [select, setSelect] = useState<string[]>(currentSelectedItems || []);
  const [open, toggleOpen] = useToggle(false);

  const handleChange = (event: SelectChangeEvent<typeof select>) => {
    const {target: {value}} = event;
    let updatedSelect = typeof value === "string" ? value.split(",") : value;

    if (updatedSelect.includes("All")) {
      updatedSelect = ["All"];
    } else if (oneChoice) {
      updatedSelect = [updatedSelect[updatedSelect.length - 1]];
    }

    setSelect(updatedSelect);

    if (onSelectChange) {
      onSelectChange(updatedSelect, selectType);
    }
  };

  return (
    <>
      <IconButton
        disableRipple
        onClick={toggleOpen}
        disableFocusRipple
        sx={{
          padding: 0,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          justifyContent: "space-between",
        }}
      >
        <Body
          sx={{
            color: color === "primary" ? theme.palette.textColor.faded : theme.palette.accent.white,
            textTransform: "capitalize",
            whiteSpace: "nowrap",
          }}
        >
          {icon}
        </Body>
      </IconButton>
      <Select
        multiple
        open={open}
        value={select}
        onChange={handleChange}
        onClose={toggleOpen}
        sx={{
          width: 0,
          height: 0,
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
            sx={{
              paddingInline: theme.spacing(0.5),
              m: theme.spacing(0.5),
              borderRadius: theme.spacing(1),
              display: "flex",
              gap: theme.spacing(1),
              backgroundColor: theme.palette.bgColor.extraLight,
              color: select.includes(item.value)
                ? theme.palette.primary.contrastText
                : theme.palette.textColor.faded,
              minWidth: "132px",
              "&:hover": {
                backgroundColor: theme.palette.textColor.lightFaded,
              },
              "&.Mui-selected": {
                background: theme.palette.textColor.faded,
                "&:hover": {
                  background: theme.palette.textColor.faded,
                },
                "&:focus": {
                  background: theme.palette.textColor.faded,
                },
              },
              "& svg": {
                "& path": {
                  fill: select.includes(item.value)
                    ? theme.palette.primary.contrastText
                    : theme.palette.textColor.faded,
                },
              },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
