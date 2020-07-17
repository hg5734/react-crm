import * as React from "react";
import Button from '@material-ui/core/Button';
import { AppSevice } from "../../services/app.service";

class AddUserComponent extends React.Component<any> {
    state = {
        isSubmitting: true,
    }

    async addUser() {
        console.log('control in add user')
        try {
            let response = await AppSevice.addUser({
                "name": "staff",
                "email": "staff1@gmail.com",
                "password": "testpassword",
                "role": "STAFF"
            })
            if (response) {
                let { result } = response;
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message || 'error in add user')
        }

    }
    render() {
        const { isSubmitting } = this.props;
        return (
            <div >
                <Button variant="contained" color="primary" onClick={() => this.addUser()} disabled={isSubmitting}>
                    Add User
                </Button>
            </div>
        );
    }
}

export default AddUserComponent;
