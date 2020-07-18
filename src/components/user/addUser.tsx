import * as React from "react";
import Button from '@material-ui/core/Button';
import { AppSevice } from "../../services/app.service";
import { email, required } from "../../utils/validations";
import { renderField } from "../common/form/field";
import { Field, reduxForm } from 'redux-form'
import { User } from '../../interfaces/interface';
import PubSub from 'pubsub-js'


class AddUserComponent extends React.Component<any> {

    constructor(props: any) {
        super(props)
    }

    addUser = async (values: User) => {
        console.log('control in add user')
        try {
            let response = await AppSevice.addUser(values);
            if (response) {
                this.props.reset();
                PubSub.publish('USER_LIST', '');
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message || 'error in add user')
        }
    }
    
    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div >
                <form onSubmit={handleSubmit(this.addUser).bind(this)}>
                    <Field name="name" type="text" component={renderField} label="name" validate={[required]} />
                    <Field name="email" type="email" component={renderField} label="Email" validate={[email, required]} />
                    <Field name="password" type="password" component={renderField} label="Password" validate={[required]} />
                    <Field name="role" component='select' label="Role" validate={[required]} >
                        <option value="STAFF">STAFF</option>
                        <option value="ADMIN">ADMIN</option>
                    </Field>
                    <div> <Button variant="contained" color="primary" type="submit" disabled={submitting}> Add User</Button></div>
                </form>
            </div>
        );
    }
}

export default reduxForm({ form: 'userForm' })(AddUserComponent);

