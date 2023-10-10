import React, {ReactNode} from "react";
import {Typography} from "@mui/material";
import {Variant} from "@mui/material/styles/createTypography";
import {SxProps} from "@mui/system";

interface HeaderProps {
  text: string | number
  centered?: boolean
  sx?: SxProps
  fontStyle?: "normal" | "italic"
}

interface HeaderRendererProps extends HeaderProps {
  variant: Variant
}

export function Header({
  text, variant, centered, sx, fontStyle = "normal",
}: HeaderRendererProps) {
  const align = centered ? "center" : undefined;

  return (
    <Typography variant={variant} sx={sx} align={align} fontStyle={fontStyle}>
      {text}
    </Typography>
  );
}

export function Header1(props: HeaderProps) {
  return <Header variant="h1" fontStyle="italic" {...props} />;
}

export function Header2(props: HeaderProps) {
  return <Header variant="h2" fontStyle="italic" {...props} />;
}

export function Header3(props: HeaderProps) {
  return <Header variant="h3" {...props} />;
}

export function Header4(props: HeaderProps) {
  return <Header variant="h4" {...props} />;
}

interface BodyProps {
  sx?: SxProps
  children: ReactNode | ReactNode[]
}

export function Body({
  sx, children, ...props
}: BodyProps) {
  return (
    <Typography variant="body1" sx={sx} {...props}>
      {children}
    </Typography>
  );
}

export function Body2({sx, children}: BodyProps) {
  return (
    <Typography variant="body2" sx={sx}>
      {children}
    </Typography>
  );
}

interface TitleProps {
  sx?: SxProps
  text: string
}

export function Title({sx, text}: TitleProps) {
  return (
    <Typography variant="title" sx={sx}>
      {text}
    </Typography>
  );
}

interface SubtitleTextProps {
  sx?: SxProps
  text: string
}

export function Subtitle2({sx, text}: SubtitleTextProps) {
  return (
    <Typography variant="subtitle2" sx={sx} fontStyle="italic">
      {text}
    </Typography>
  );
}

export function Subtitle1({sx, text}: SubtitleTextProps) {
  return (
    <Typography variant="subtitle1" sx={sx} fontStyle="italic">
      {text}
    </Typography>
  );
}
