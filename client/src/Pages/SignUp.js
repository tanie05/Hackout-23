import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";
import { FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';

const defaultTheme = createTheme();

export default function SignUp() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        role: "Buyer",
        phone: "",
        address: ""
    })

    function updateUser(e) {
        const { name, value } = e.target

        setUser(prevState => {
            return (
                {
                    ...prevState,
                    [name]: value
                }
            )
        })
    }

    function signUp() {
        fetch("/auth/signup", {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: user.username,
                            email: user.email,
                            password: user.password,
                            role: user.role,
                            address: user.address,
                            phoneno: user.phone
                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.Error) {
                            alert(data.Error);
                        }
                        else {
                            console.log(data.Message);
                            navigate("/auth/signin");
                        }
                    })
                    .catch(err => {
                        
                        console.log(err)
                    })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="username"
                                    value={user.username}
                                    label="Name"
                                    autoFocus
                                    onChange={updateUser}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="email"
                                    value={user.email}
                                    label="Email Address"
                                    type="email"
                                    onChange={updateUser}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    value={user.password}
                                    label="Password"
                                    type="password"
                                    onChange={updateUser}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="phone"
                                    value={user.phone}
                                    label="Phone Number"
                                    type="tel"
                                    onChange={updateUser}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="address"
                                    value={user.address}
                                    label="Address"
                                    onChange={updateUser}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Role</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="role"
                                        value={user.role}
                                        defaultValue="Buyer"
                                        onChange={updateUser}
                                    >
                                        <FormControlLabel value="Buyer" control={<Radio />} label="Buyer" />
                                        <FormControlLabel value="Artisan" control={<Radio />} label="Artisan" />
                                        <FormControlLabel value="Guide" control={<Radio />} label="Guide" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            onClick={signUp}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <NavLink style={{ textDecoration: "none", color: "rgb(8,38,74)" }} to="/auth/signin">Already have an account? Sign In</NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
