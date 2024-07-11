import { IconButton } from "@mui/material";

export const CustomIconButton = ({ icon, ...props }) => {
  return <IconButton {...props}>{icon}</IconButton>;
};
