import * as React from "react";
import Button from '@material-ui/core/Button';

const styles = {
}

class LeadComponent extends React.Component<any> {
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
                    Lead
                </Button>
            </div>
        );
    }
}

export default LeadComponent;
