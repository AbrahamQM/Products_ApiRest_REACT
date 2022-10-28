
import './App.css';
import ListUsersComponent from './components/ListUsersComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent  />
                    <div className="container">
                        <Switch> 
                            <Route path = '/' component = {ListUsersComponent}></Route>
                            <Route path = '/users' component = {ListUsersComponent}></Route>
                            <ListUsersComponent />
                        </Switch>
                    </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
