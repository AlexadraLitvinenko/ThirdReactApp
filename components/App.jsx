import React, {Component} from 'react';

import List from './List';
import UsersList from './UsersList';

import {getList} from '../sources/list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            count: 6
        };
    }

    componentDidMount() {
        
        console.log('PROMISE: ', getList());

        getList({ count: this.state.count })
            .then(({ data }) => this.setState({ list: data }));
    }

    render() {
        const { list } = this.state;

        return (
            <div>
                <h3>ToDo List</h3>
                <List list={list}/>
                {/*TODO рендер компонента здесь*/}
                <h3>Find the person you want</h3>
                <UsersList />
            </div>
        );
    }
}

export default App;
