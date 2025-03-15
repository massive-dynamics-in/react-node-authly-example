import React from 'react';
import axios from 'axios';
import { Button, Grid2, Stack, Typography } from '@mui/material';

class LoggedIn extends React.Component {


    componentDidMount() {
        this.isAuthenticated();
    }


    isAuthenticated = async () => {
        let token = localStorage.getItem('authly_token');
        console.log(token);
        if (!token || token === '' || token === 'undefined') {
            localStorage.removeItem('authly_token');
            localStorage.removeItem('authly_email');
            window.location.href = '/login';
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/oauth/authly/verify', {
                token
            });
            if (response?.data?.success) {
                return;
            } else {
                localStorage.removeItem('authly_token');
                localStorage.removeItem('authly_email');
                window.location.href = '/login';
                return;
            }
        } catch (error) {
            console.error(error.message);
            localStorage.removeItem('authly_token');
            localStorage.removeItem('authly_email');
            window.location.href = '/login';
            return;
        }
    }


    logoutFromAuthly = async () => {
        try {
            const response = await axios.post('http://localhost:4000/oauth/authly/logout', {
                token: localStorage.getItem('authly_token')
            });
            if (response?.data?.success) {
                alert('Logout success');
                localStorage.removeItem('authly_token');
                localStorage.removeItem('authly_email');
                window.location.href = '/login';
            } else {
                alert('Logout failed');
            }
        } catch (error) {
            console.error(error.message);
        }
    }


    render() {
        return (
            <Grid2 container justifyContent={'center'} alignItems={'center'} sx={{height: '100vh'}}>
                <Stack spacing={2} alignItems={'center'}>
                    <Typography variant={'h4'} sx={{ color: 'gray' }}>Heyyy</Typography>
                    <Typography variant={'h6'} sx={{ color: 'gray' }}>You are logged in</Typography>
                    <Button
                        size='small'
                        variant={'outlined'}
                        onClick={this.logoutFromAuthly}
                        sx={{
                            borderColor: '#FF5722',
                            color: '#FF5722',
                            fontWeight: 'bold'
                        }}
                    >
                        Logout
                    </Button>
                </Stack>
                
            </Grid2>
        );
    }
}

export default LoggedIn;
