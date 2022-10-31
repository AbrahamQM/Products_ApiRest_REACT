
import './App.css';
import ListUsersComponent from './components/ListUsersComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateUserComponent from './components/CreateUserComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent  />
                    <div className="container">
                        <Switch> 
                            <Route path = '/' exact component = {ListUsersComponent}></Route>
                            <Route path = '/users/allUsers' component = {ListUsersComponent}></Route>
                            <Route path = '/users/createUser' component = {CreateUserComponent}></Route>
                        </Switch>
                    </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
