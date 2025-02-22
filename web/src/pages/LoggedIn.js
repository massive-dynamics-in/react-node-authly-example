import React from 'react';
import axios from 'axios';

class LoggedIn extends React.Component {


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
            <div>
                <h1>Logged In</h1>
                <button
                    onClick={this.logoutFromAuthly}
                >Logout from Authly.ME</button>
            </div>
        );
    }
}

export default LoggedIn;
