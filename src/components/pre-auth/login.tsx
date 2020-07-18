import * as React from "react";
import Button from '@material-ui/core/Button';
import { AuthSevice } from "../../services/auth.service";
import { roles } from "../../utils/constant";
import { Field, reduxForm } from 'redux-form'
import { email, required } from "../../utils/validations";
import { renderField } from "../common/form/field";
import { LoginInterface } from '../../interfaces/interface';

const styles = {
    loginContainer: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        top: '20%',
        left: 0,
        right: 0,
        margin: 'auto',
        position: 'absolute' as 'absolute'
    },
}

class LoginComponent extends React.Component<any> {
    constructor(props: any) {
        super(props)
        this.authGuard(AuthSevice.getUserData());
    }

    authGuard(result: any) {
        if (result) {
            if (roles.ADMIN === result.role) {
                this.props.history.push("/app/user");
            } else {
                this.props.history.push("/app/lead");
            }
        }
    }

    login = async (values: LoginInterface) => {
        console.log('control in login', values)
        try {
            let response = await AuthSevice.login(values)
            if (response) {
                let { result } = response;
                AuthSevice.setUserData(result);
                this.authGuard(result);
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message || 'error in login')
        }
    }

    render() {
        const { submitting, handleSubmit } = this.props
        return (
            <div style={styles.loginContainer}>
                <form onSubmit={handleSubmit(this.login).bind(this)}>
                    <Field name="email" type="email" component={renderField} label="Email" validate={[email, required]}  />
                    <Field name="password" type="password" component={renderField} label="Password" validate={[required]} />
                    <div> <Button variant="contained" color="primary" type="submit" disabled={submitting}> Login</Button></div>
                </form>
            </div>
        );
    }
}

export default reduxForm({ form: 'loginForm' })(LoginComponent);
