import React, { useState } from 'react';
import { fakeLogin } from '../utils/fakeLogin';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { CustomTextField } from '../components/TextField';
import { CustomButton } from '../components/Button';
import { CustomTypography } from '../components/Typography';
import { CustomAlert } from '../components/Alert/CustomAlert';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const result = fakeLogin(username, password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20%',
          padding: 2,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'white'
        }}
      >
        <CustomTypography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
          Login
        </CustomTypography>
        {error && (
          <CustomAlert severity="error" sx={{ marginBottom: 2 }}>
            {error}
          </CustomAlert>
        )}
        <CustomTextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <CustomTextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 3 }}
          onClick={handleLogin}
        >
          Login
        </CustomButton>
      </Box>
    </Container>
  );
};
