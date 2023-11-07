import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Classes from './login.module.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginRequest } from './actions';
import { Button, TextField, Typography } from '@mui/material';
import { useLogin } from '../../hooks/useLogin';

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '', form: '' });
  useLogin()

  
  const validateForm = () => {
    let valid = true;
    // Reset errors
    setErrors({ email: '', password: '', form: '' });

    if (!credentials.email) {
      setErrors(errors => ({ ...errors, email: 'Email is required' }));
      valid = false;
    }
    if (!credentials.password) {
      setErrors(errors => ({ ...errors, password: 'Password is required' }));
      valid = false;
    } else if (credentials.password.length < 6) {
      setErrors(errors => ({ ...errors, password: 'Password must be at least 6 characters' }));
      valid = false;
    }

    return valid;
  };

  
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      dispatch(loginRequest(credentials, navigate));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  return (
    <div className={Classes.logincontainer}>
    <Typography variant="h6">Login</Typography>
    <form onSubmit={handleLogin} noValidate>
        <TextField
          error={!!errors.email}
          helperText={errors.email}
          label="Email"
          type="email"
          required
          fullWidth
          name="email"
          margin="normal"
          value={credentials.email}
          onChange={handleChange}
        />
        <TextField
          error={!!errors.password}
          helperText={errors.password}
          label="Password"
          type="password"
          name='password'
          required
          fullWidth
          margin="normal"
          value={credentials.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          Login
        </Button>
        <Typography sx={{ textAlign: 'center', marginTop: 2 }}>Don&apos;t have an account? <Link to={'/register'}>Klik Here</Link></Typography>
        {errors.form && <Typography color="error">{errors.form}</Typography>}
    </form>
</div>
      
  );
};

export default LoginPage;
