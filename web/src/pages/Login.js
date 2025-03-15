import React from 'react';
import axios from 'axios';
import Grid2 from '@mui/material/Grid2';
import { Button, Stack, Typography } from '@mui/material';

class Login extends React.Component {


    loginWithAuthly = async () => {
        try {
            const response = await axios.get('http://localhost:4000/oauth/authly/login');
            if (response?.data?.link) {
                window.location.href = response.data.link;
            }
        } catch (error) {
            console.error(error.message);
        }
    }


    render() {
        return (


            <Grid2 container justifyContent={'center'} alignItems={'center'} sx={{height: '100vh'}}>
                <Stack spacing={2} alignItems={'center'}>
                    <Typography variant={'h4'}>Welcome</Typography>
                    <Typography variant={'h6'} sx={{ color: 'gray' }}>Please login to continue</Typography>
                    <Button
                        size='small'
                        variant={'outlined'}
                        onClick={this.loginWithAuthly}
                        startIcon={<img src="https://authly.me/images/logo/logo.png" alt="Authly Icon" style={{ width: '30px', height: '30px' }} />}
                        sx={{
                            borderColor: '#FF5722',
                            color: '#FF5722',
                            fontWeight: 'bold'
                        }}
                    >
                        Login with Authly.ME
                    </Button>
                </Stack>
                
            </Grid2>

        );
    }
}

export default Login;
