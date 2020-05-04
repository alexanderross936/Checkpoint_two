import React from 'react';
import { InputLabel } from '@material-ui/core'
import { Input } from '@material-ui/core'
import { FormControl } from '@material-ui/core';
import { Button } from '@material-ui/core'
function Login() {
  return (
    <div className="App">
        <FormControl>
            <InputLabel htmlFor="my-input">Email:</InputLabel>
            <Input id="my-input" area-describedby="my-helper-text" />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary">Login</Button>
        </FormControl>
    </div>
  );
}

export default Login;
