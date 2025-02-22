import React from 'react';
import axios from 'axios';

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
            <div>
                <h1>Login</h1>
                <button
                    onClick={this.loginWithAuthly}
                >Login with Authly.ME</button>
            </div>
        );
    }
}

export default Login;
