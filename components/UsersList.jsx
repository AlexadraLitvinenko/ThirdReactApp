import React, { Component } from 'react';
import { getUser } from '../sources/users';

class UsersList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
            value: ''
        };
        this.update = this.update.bind(this);
        this.change= this.change.bind(this);
    }

    change(event) {
        event.preventDefault();
        console.log(this.state.value);
        //console.log('PROMISE in User: ', getUser());
        getUser({value: this.state.value}).then(({ data:user }) => this.setState({list: user }));
        console.log(this.state.list);
       
    }

    update(event) {
        this.setState({value: event.target.value});
    }

    render() {
        console.log('test: ', this.state);

        const items = this.state.list.map((item, key) =>
        <li key={key}><p>{item.firstName} {item.lastName}</p></li>);

        return (
            <div>
                <form onSubmit={this.change}>
                    <input type='text' value={this.state.value} onChange={this.update} />
                    <button>Find!</button>
                </form>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default UsersList;