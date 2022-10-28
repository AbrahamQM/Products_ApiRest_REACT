import React, { Component } from 'react'
import UsersService from '../services/UsersService'


class ListUsersComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
                users: [ ]
        }
    }
    
    componentDidMount(){
        UsersService.getUsers().then( (res) => {
            this.setState({users: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Users List</h2>
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

export default ListUsersComponent