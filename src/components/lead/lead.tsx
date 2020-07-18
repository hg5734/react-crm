import * as React from "react";
import Button from '@material-ui/core/Button';
import { AppSevice } from "../../services/app.service";
import LogoutComponent from "../pre-auth/logout";
import { Field, reduxForm } from 'redux-form'
import { renderField } from "../common/form/field";
import { Lead } from '../../interfaces/interface';
import { email, required } from "../../utils/validations";
import { container } from "../../styles";

const styles = {
    container
}

class LeadComponent extends React.Component<any> {

    constructor(props: any) {
        super(props)
    }
    addLead = async (values: Lead) => {
        console.log('control in add lead');
        try {
            let response = await AppSevice.addLead(values)
            if (response) {
                this.props.reset();
                alert('lead added successfuly');
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
                <LogoutComponent />
                <div style={styles.container}>
                    <form onSubmit={handleSubmit(this.addLead)}>
                        <Field name="clientName" type="text" component={renderField} label="client name" validate={[required]} />
                        <Field name="clientEmail" type="email" component={renderField} label="client email" validate={[email, required]} />
                        <Field name="clientPhone" type="number" component={renderField} label="client phone" validate={[required]} />
                        <div> <Button variant="contained" color="primary" type="submit" disabled={submitting}> Add Lead</Button></div>
                    </form>
                </div>
            </div>
        );
    }
}
export default reduxForm({ form: 'leadForm' })(LeadComponent);
