import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/users";
class UsersService {
    getUsers(){
        return axios.get(USER_API_BASE_URL + '/allUsers/');
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL + "/createUser/", user);
    }

}

export default new UsersService()