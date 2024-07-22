import { useState } from "react";
import { callcred } from "./axios";
import { TextField, Button, Box, Container, Card, CardContent, Typography, InputAdornment } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import Clear from '@mui/icons-material/Clear';
import LoginIcon from '@mui/icons-material/Login';


export const Login = () => {
  const [users, setUsers] = useState({
    username: "",
    password: ""
  });



  const collect = (eve) => {
    const { name, value } = eve.target;
    setUsers((old) => ({
      ...old,
      [name]: value
    }));
  };

  const sub = async () => {
    const res = await callcred(users);
    alert(JSON.stringify(res));
    if (res.data) {
      sessionStorage.setItem("logged", JSON.stringify(users));
      window.location.assign("/")
    }
  };

  const clearFields = () => {
    setUsers({
      username: "",
      password: ""
    });
  };

  return (
   <>

    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card sx={{ boxShadow: 6, borderRadius: 2, background: 'linear-gradient(135deg, #e3f2fd 30%, #f3e5f5 90%)', width: '100%' }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" component="div" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center', color: '#3f51b5' }}>
            Login
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              label="Username"
              name="username"
              onChange={collect}
              value={users.username}
              variant="outlined"
              fullWidth
              InputProps={{
                sx: { borderRadius: 1, backgroundColor: '#ffffff' },
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle color="primary" />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              onChange={collect}
              value={users.password}
              variant="outlined"
              fullWidth
              InputProps={{
                sx: { borderRadius: 1, backgroundColor: '#ffffff' },
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                )
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={sub}
                startIcon={<LoginIcon />}
                sx={{
                  minWidth: '100px',
                  borderRadius: 1,
                  backgroundColor: '#3f51b5',
                  '&:hover': {
                    backgroundColor: '#303f9f'
                  }
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={clearFields}
                startIcon={<Clear />}
                sx={{
                  minWidth: '100px',
                  borderRadius: 1,
                  borderColor: '#f50057',
                  color: '#f50057',
                  '&:hover': {
                    backgroundColor: '#f50057',
                    color: '#ffffff'
                  }
                }}
              >
                Clear
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container></>
  );
};
