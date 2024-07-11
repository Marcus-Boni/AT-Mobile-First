import { Button } from '@mui/material';

export const CustomButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
