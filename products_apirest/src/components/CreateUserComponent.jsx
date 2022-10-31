import React, { Component } from 'react'
import UsersService from '../services/UsersService';

class CreateUserComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            userName: '',
            password:'',
            role: ''  
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

//    componentDidMount(){
 //       if(this.state.id === '_add'){
 //           return
 //       }else{
 //           UserService.getUserById(this.state.id).then( (res) =>{
 //               let user = res.data;
 //               this.setState({firstName: user.userName,
 //                   password: user.password,
 //                   role : user.role
//                });
//            });
//        }        
//    }

    changeUserNameHandler = (event) => {
        this.setState({userName: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }
    changeRoleHandler = (event) => {
        this.setState({role: event.target.value});
    }

    saveUser = (e) =>{
        e.preventDefault();
        let user = {userName: this.state.userName, password: this.state.password, role: this.state.role};
        console.log('user => ' + JSON.stringify(user));
        UsersService.createUser(user).then(res => {
            this.props.history.push('/');
        });
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className= "row">
                        <div className=" card col-md-6 offset-md-3 offset-md-3">
                            <h3 className= "text-center">Add User</h3>
                            <div className = "card-body">
                                <form>
                                    <div className ="form-group">
                                        <label>User Name:</label>
                                        <input placeholder="User_name" name="userName" className="form-control" 
                                        value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                    </div>

                                    <div className ="form-group">
                                        <label>Password:</label>
                                        <input placeholder="User_password" name="password" type="password" className="form-control" 
                                        value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>

                                    <div className ="form-group">
                                        <label>Role:</label>
                                        <input placeholder="Select User_role" name="role" className="form-control" list="roleOptions" 
                                        value={this.state.role} onChange={this.changeRoleHandler}/>
                                        <datalist id="roleOptions">
                                            <option value="USER"></option>
                                            <option value="ADMIN"></option>
                                        </datalist>
                                    </div>
                                    
                                    <button className='btn btn-success' onClick={this.saveUser}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateUserComponent