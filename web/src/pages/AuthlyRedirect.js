import React from 'react';
import axios from 'axios';

class AuthlyRedirect extends React.Component {

    async componentDidMount() {
        // get query params
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const email = urlParams.get('email');

        if (!token || !email) {
            console.error('Token or email not found');
            return;
        }

        this.verifyToken(token, email);

    }

    verifyToken = async (token, email) => {
        try {
            const response = await axios.post('http://localhost:4000/oauth/authly/verify', {
                token
            });
            if (response?.data?.success) {
                localStorage.setItem('authly_token', token);
                localStorage.setItem('authly_email', email);
                window.location.href = '/loggedin';
                return;
            } else {
                alert('Login failed');
                window.location.href = '/login';
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    render() {
        return (
            <div>
                <h1>Verifying</h1>
            </div>
        );
    }
}

export default AuthlyRedirect;
