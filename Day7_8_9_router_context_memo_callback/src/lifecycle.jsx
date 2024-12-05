import React, { Component } from 'react';

class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.state = { time: 0, running: false };
    }

    componentDidMount() {
        console.log('componentDidMount: Stopwatch ready');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.running !== this.state.running) {
            console.log(`Stopwatch ${this.state.running ? 'started' : 'stopped'}`);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Cleaning up stopwatch');
        clearInterval(this.timer);
    }

    startStop = () => {
        if (this.state.running) {
            clearInterval(this.timer);
        } else {
            this.timer = setInterval(() => {
                this.setState((prevState) => ({ time: prevState.time + 1 }));
            }, 1000);
        }
        this.setState((prevState) => ({ running: !prevState.running }));
    };

    reset = () => {
        clearInterval(this.timer);
        this.setState({ time: 0, running: false });
    };

    render() {
        return (
            <div>
                <h1>StopWatch</h1>
                <p>Time: {this.state.time} seconds</p>
                <button onClick={this.startStop}>
                    {this.state.running ? 'Stop' : 'Start'}
                </button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default StopWatch;
