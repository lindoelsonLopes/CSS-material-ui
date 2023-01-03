import { Button, Checkbox, FormControlLabel, FormGroup, IconButton, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CustomBox, CustomForm, CustomPaper } from "../styles/LoginForm";

function LoginForm() {
  const [email, setEmail] = useState({
    value: '',
    error: '',
    hasError: true,
    wasTouched: false,
  });
  const [password, setPassword] = useState({
    value: '',
    error: '',
    hasError: true,
    wasTouched: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^(.+)@(.+)$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return false;
    }
    return true;
  };

  const hancleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      const isEmailValid = validateEmail(value);
      setEmail({
        value,
        error: !isEmailValid ? 'Enter a valid email' : '',
        hasError: !isEmailValid,
        wasTouched: true,
      });
    } else if (name === 'password') {
      const isPasswordValid = validatePassword(value);
      setPassword({
        value,
        error: !isPasswordValid ? 'Password must be at least 6 characters' : '',
        hasError: !isPasswordValid,
        wasTouched: true,
      });
    }
  };

  const handleSubmit = () => {
    if (email.hasError || password.hasError) {
      alert('Please fix the errors');
    } else {
      alert('Login successful');
    }
  };

  return (
    <CustomForm>
      <CustomPaper elevation={3}>

        <Typography variant="h1" component="div" gutterBottom>
            Sign In
        </Typography>
        
            <TextField
            variant="outlined"
            fullWidth
            label="email"
            type="email"
            name="email"
            placeholder="Login"
            value={email.value}
            onChange={hancleChange}
            helperText={email.wasTouched && email.hasError && email.error}
            error={email.wasTouched && email.hasError}
            />        
            
            <TextField
                type={showPassword ? 'text' : 'password'}
                name="password"
                variant="outlined"
                fullWidth
                label="Password"
                value={password.value}
                onChange={hancleChange}
                helperText={email.wasTouched && email.hasError && email.error}
                error={email.wasTouched && email.hasError}
                InputProps={{
                endAdornment: (
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={ () => setShowPassword(!showPassword)}
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                )
                }}
            />        
            
        <CustomBox>
        <FormGroup>
            <FormControlLabel
            control={<Checkbox checked={remember} />}
            label="Remember me"
            name="remember"
            onChange={(e) => setRemember(e.target.checked)}
            />
        
        </FormGroup>        
            <Link href="#">Forget password?</Link>
        </CustomBox>

        <Button
            variant="contained"
            type="button"
            onClick={handleSubmit}
        >
            Login
        </Button>
      </CustomPaper>
      
    </CustomForm>
  )
}

export default LoginForm;