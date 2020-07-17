import * as React from "react";
import AddUserComponent from "./addUser";
import UserListComponent from "./userList";

class UserComponent extends React.Component<any> {

    render() {
        return (
            <div >
                <AddUserComponent />
                <UserListComponent />
            </div>
        );
    }
}

export default UserComponent;
