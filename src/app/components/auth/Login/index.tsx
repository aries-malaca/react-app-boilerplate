import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Avatar, Box, Checkbox, Container, CssBaseline, FormControlLabel, TextField, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

const Index: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const signIn = useSignIn()
  const { register, handleSubmit } = useForm();
  const from = location.state?.from?.pathname || '/';
  const [loading, setLoading] = useState(false);

  const onSubmit = (formData : any) => {
    setLoading(true);
    axios.post('/api/auth/login', { ...formData, device_name: 'web'} )
      .then(( { data } ) => {
        if(signIn({token: data.token,
          expiresIn: 60,
          tokenType: 'Bearer',
          authState: data.user
        }))
        { // Only if you are using refreshToken feature
          navigate(from);
        }
      })
      .catch(() => setLoading(false));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box 
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5"> Sign in </Typography>
        <Box component="form" onSubmit={ handleSubmit(onSubmit) } noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            {...register('email')}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            {...register('password')}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={ loading }
          >
            Sign In
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;