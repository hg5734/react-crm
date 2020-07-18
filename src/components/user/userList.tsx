import * as React from "react";
import { AppSevice } from "../../services/app.service";
import { User } from '../../interfaces/interface';
import PubSub from 'pubsub-js'

class UserListComponent extends React.Component<any> {

    state: any = {
        users: [],
        token: ''
    }

    componentDidMount() {
        this.userList();
        this.updateListSubscriber();
    }

    updateListSubscriber() {
        let token = PubSub.subscribe('USER_LIST', () => {
            console.log('user list update')
            this.userList()
        });
        this.setState({ token })
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
    componentWillUnmount() {
        let { token } = this.state;
        if(token) {
            PubSub.unsubscribe(token);
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
