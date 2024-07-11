import React, { useState } from 'react';
import { Box, Container, Paper, FormControlLabel } from '@mui/material';
import { CustomButton } from '../components/Button/CustomButton';
import { CustomCheckbox } from '../components/Checkbox/CustomCheckbox';
import { CustomTextField } from '../components/TextField/CustomTextField';
import { CustomTypography } from '../components/Typography/CustomTypography';

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <CustomTypography variant="h4" gutterBottom>
          Registro Form
        </CustomTypography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
          onSubmit={handleSubmit}
        >
          <CustomTextField
            label="Name"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <CustomTextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <CustomTextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
            }
            label="Eu aceito os termos de uso."
          />
          <CustomButton type="submit" variant="contained" color="primary">
            Registrar
          </CustomButton>
        </Box>
      </Paper>
    </Container>
  );
};
