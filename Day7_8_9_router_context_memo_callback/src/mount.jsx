import React, { Component } from 'react';

class FetchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: true,
        };
        console.log('Constructor: Initializing component');
    }

    componentDidMount() {
        console.log('componentDidMount: Fetching user data'); 
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((data) => this.setState({ user: data, isLoading: false }))
            .catch((error) => console.error('Error fetching user:', error));
    }

    render() {
        console.log('Render: Rendering UI');
        const { user, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
        );
    }
}

export default FetchUser;
