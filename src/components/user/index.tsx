import * as React from "react";
import AddUserComponent from "./addUser";
import UserListComponent from "./userList";
import LogoutComponent from "../pre-auth/logout";

const styles = {
    container: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        top: '20%',
        left: 0,
        right: 0,
        margin: 'auto',
        position: 'absolute' as 'absolute'
    },
}
class UserComponent extends React.Component<any> {

    render() {
        return (
            <div style={styles.container} >
                <LogoutComponent/>
                <AddUserComponent />
                <UserListComponent />
            </div>
        );
    }
}

export default UserComponent;
