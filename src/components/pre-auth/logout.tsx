import * as React from "react";
import Button from '@material-ui/core/Button';
import { AuthSevice } from "../../services/auth.service";
import { withRouter } from "react-router";

class LogoutComponent extends React.Component<any> {
    constructor(props: any) {
        super(props)
    }

    logout() {
        AuthSevice.clearUser();
        this.props.history.push("/login");
    }

    render() {
        return (
            <Button variant="contained" color="primary" onClick={() => this.logout()} >
                Logout
             </Button>
        );
    }
}

export default withRouter(LogoutComponent);
