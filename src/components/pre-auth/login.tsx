import * as React from "react";
import Button from '@material-ui/core/Button';
import { AuthSevice } from "../../services/auth.service";
import { roles } from "../../utils/constant";

// const styles = {
// }

class LoginComponent extends React.Component<any> {

    state = {
        isSubmitting: true,
    }

    // login function
    async login() {
        console.log('control in login')
        try {
            let response = await AuthSevice.login({ email: 'superadmin@gmail.com', password: 'testpassword' })
            if (response) {
                let { result } = response;
                if (roles.ADMIN == result.role) {
                    this.props.history.push("/app/user");
                } else {
                    this.props.history.push("/app/lead");
                }
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message || 'error in login')
        }
    }

    render() {
        const { isSubmitting } = this.props;
        return (
            <div >
                <Button variant="contained" color="primary" onClick={() => this.login()} disabled={isSubmitting}>
                    Login
                </Button>
            </div>
        );
    }
}

export default LoginComponent;
