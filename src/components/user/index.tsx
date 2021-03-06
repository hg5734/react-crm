import * as React from "react";
import AddUserComponent from "./addUser";
import UserListComponent from "./userList";
import LogoutComponent from "../pre-auth/logout";
import { container } from "../../styles";

const styles = {
    container
}
class UserComponent extends React.Component<any> {

    render() {
        return (
            <div>
                <LogoutComponent />
                <div style={styles.container}>
                    <AddUserComponent />
                    <UserListComponent />
                </div>

            </div>
        );
    }
}

export default UserComponent;
