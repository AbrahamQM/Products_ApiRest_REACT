import React, { Component } from 'react'
import UsersService from '../services/UsersService'
import { withRouter } from 'react-router'



class ListUsersComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
                users: [ ]
        }
        this.createUser = this.createUser.bind(this);
    }
    
    componentDidMount(){
        UsersService.getUsers().then( (res) => {
            this.setState({users: res.data});
        });
    }

    createUser(){
        this.props.history.replace('/users/createUser');
        console.log("Ir a crear usuario");
        //this.props.history.replace(redirectPath);

    }

    render() {
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                <div className= "row">
                    <button className="btn btn-primary" onClick={this.createUser.bind(this)}>Add User</button>
                </div>
                <div className= "row">
                    <table className= "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>User Name</th>
                                <th>User Role</th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key = {user.idUser}>
                                        <td> {user.idUser} </td>
                                        <td> {user.userName} </td>
                                        <td> {user.role} </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>
            </div>
        )
    }
}

export default withRouter(ListUsersComponent)