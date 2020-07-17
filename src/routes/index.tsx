import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginComponent from "../components/pre-auth/login";
import LeadComponent from "../components/lead/lead";
import UserComponent from "../components/user/user";

class Routes extends React.Component {
  state = {
    isSubmitting: true,
  }
  componentDidMount() {
    console.log('Routers')
  }
  render() {
    return (
      <div >
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/app/lead" component={LeadComponent} />
          <Route path="/app/user" component={UserComponent} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
