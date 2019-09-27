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
//Вызывается при нажатии кнопки
    change(event) {
        event.preventDefault();
        getUser({value: this.state.value}).then(({ data:user }) => this.setState({list: user }));
    }
//Вызывается для изменения state.value
    update(event) {
        this.setState({value: event.target.value});
    }

    render() {
//Рендерим массив в виде списка
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