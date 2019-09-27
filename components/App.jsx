import React, {Component} from 'react';
//import './style.css';
import UsersList from './UsersList';

class App extends Component {

    render() {
//Рендерим все компоненты
        return (
            <div>
                <h3>Find the person you want</h3>
                <UsersList />
            </div>
        );
    }
}

export default App;