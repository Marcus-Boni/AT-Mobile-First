import { Typography } from '@mui/material';

export const CustomTypography = ({children, variant, ...props}) => {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  )
}
