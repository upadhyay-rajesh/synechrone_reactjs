import React, { Component } from 'react';

class ThemeToggler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false,
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: Deciding to re-render');
        return nextState.isDarkMode !== this.state.isDarkMode;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate: Capturing the current theme');
        return prevState.isDarkMode ? 'Dark Mode' : 'Light Mode';
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: Theme has updated');
        console.log(`Previous theme: ${snapshot}`);
    }

    toggleTheme = () => {
        this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
    };

    render() {
        console.log('Render: Rendering theme UI');
        const { isDarkMode } = this.state;

        const themeStyles = {
            backgroundColor: isDarkMode ? '#333' : '#FFF',
            color: isDarkMode ? '#FFF' : '#000',
            padding: '10px',
            margin: '10px',
            borderRadius: '5px',
        };

        return (
            <div>
                <button onClick={this.toggleTheme}>
                    Toggle to {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <div style={themeStyles}>
                    <p>The current theme is {isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
                </div>
            </div>
        );
    }
}

export default ThemeToggler;
