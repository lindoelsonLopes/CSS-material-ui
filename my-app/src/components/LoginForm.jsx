import { Button, Checkbox, FormControlLabel, FormGroup, IconButton, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CustomBox, CustomForm, CustomPaper } from "../styles/LoginForm";

function LoginForm() {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const validateEmail = (email) => {};

  const validatePassword = (password) => {};

  const hancleChange = (event) => {};

  const handleSubmit = () => {};

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