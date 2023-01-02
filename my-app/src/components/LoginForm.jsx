import React, { useState } from "react";

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
    <form>
      <h1>Sign In</h1>
      <fieldset>
        <input
          type="email"
          name="email"
          placeholder="Login"
          value={email.value}
          onChange={hancleChange}
        />
        <br />
        {email.wasTouched  && email.hasError && <small>{email.error}</small>}
      </fieldset>
      <fieldset>
        <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={password.value}
            onChange={hancleChange}
        />
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <br />
        {password.wasTouched  && password.hasError && <small>{password.error}</small>}

      </fieldset>
      <fieldset>
        <label htmlFor="remember">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember m    e{' '}
        </label>
        <a href="#">Forget password?</a>
      </fieldset>
      <button
        type="button"
        onClick={handleSubmit}
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm;