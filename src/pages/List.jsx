import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { CustomTableList } from '../components/TableList/CustomTableList';

const rows = [
  { id: 1, name: 'Marcus', email: 'Marcus@example.com', role: 'Admin' },
  { id: 2, name: 'Lucas', email: 'Lucas@example.com', role: 'User' },
  {
    id: 3,
    name: 'Pedro',
    email: 'Pedro@example.com',
    role: 'User'
  },
  {
    id: 4,
    name: 'Mateus',
    email: 'Mateusbrown@example.com',
    role: 'Admin'
  },
  { id: 5, name: 'Eva', email: 'eva@example.com', role: 'User' }
];

export const List = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            User List
          </Typography>
          <CustomTableList rows={rows} />
        </Paper>
      </Box>
    </Container>
  );
};
