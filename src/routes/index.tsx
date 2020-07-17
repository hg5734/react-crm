import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginComponent from "../components/pre-auth/login";
import LeadComponent from "../components/lead/lead";
import UserComponent from "../components/user";
import NotFoundComponent from "../components/common/notfound";
import ProtectedRoute from '../components/common/protected';

class Routes extends React.Component<any> {
  
  render() {
    return (
      <div >
        <Switch>  
          <Route path="/login" component={LoginComponent}/>
          <ProtectedRoute path="/app/lead" component={LeadComponent} />
          <ProtectedRoute path="/app/user" component={UserComponent} />
          <ProtectedRoute path="/404" component={NotFoundComponent} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
