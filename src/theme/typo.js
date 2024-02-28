import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import { secondary } from "./colors";

export const AppMainheading = styled(Typography)({
  fontWeight: 700,
  fontSize: "72px",
  color: "white",
});

export const Appheading = styled(Typography)({
  fontWeight: 600,
  fontSize: "38px",
  lineHeight: "40.87px",
  color: "white",
});

export const Appfont = styled(Typography)({
  fontWeight: 400,
  color: secondary,
  fontSize: "16px",
  lineHeight: "24px",
});

export const AppLabel = styled(Typography)({
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "16px",
  color: "white",
});

export const Appcaption = styled(Typography)({
  fontFamily: "Urbanist",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "22.4px",
  color: "white",
});
