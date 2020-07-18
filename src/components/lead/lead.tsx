import * as React from "react";
import Button from '@material-ui/core/Button';
import { AppSevice } from "../../services/app.service";
import LogoutComponent from "../pre-auth/logout";

const styles = {
}

class LeadComponent extends React.Component<any> {
    state = {
        isSubmitting: true,
    }
    async addLead() {
        console.log('control in add lead');
        try {
            let response = await AppSevice.addLead({
                "clientEmail": "test@gmail.com",
                "clientName": "test",
                "clientPhone": "737373737"
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
                <LogoutComponent/>
                <Button variant="contained" color="primary" onClick={() => this.addLead()} disabled={isSubmitting}>
                    Add Lead
                </Button>
            </div>
        );
    }
}

export default LeadComponent;
