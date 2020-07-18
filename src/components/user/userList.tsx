import * as React from "react";
import { AppSevice } from "../../services/app.service";
import {User} from '../../interfaces/interface';

class UserListComponent extends React.Component<any> {

    state: any = {
        users: []
    }

    componentDidMount() {
        this.userList();
    }

    async userList() {
        try {
            let response = await AppSevice.userList()
            if (response) {
                let { result } = response;
                this.setState({ users: result || [] })
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message || 'error in user list')
        }
    }

    render() {
        let { users } = this.state;
        return (
            <ul>
                {users.map((user: User) => (
                    <li key={user._id}>
                        <div>{user.email}</div>
                        <div>{user.name}</div>
                        <div>{user.role}</div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default UserListComponent;
