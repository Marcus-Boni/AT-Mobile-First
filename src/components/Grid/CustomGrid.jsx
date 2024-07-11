import { Grid } from '@mui/material';

export const CustomGrid = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};
