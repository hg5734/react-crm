import * as React from "react";
import Button from '@material-ui/core/Button';

const styles = {
}

class UserComponent extends React.Component<any> {
    state = {
        isSubmitting: true,
    }
    login() {
        console.log('control in login')

    }
    render() {
        const { isSubmitting } = this.props;

        return (
            <div >
                <Button variant="contained" color="primary"  onClick={() => this.login()} disabled={isSubmitting}>
                    User
                </Button>
            </div>
        );
    }
}

export default UserComponent;
