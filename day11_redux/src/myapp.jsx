import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterAction from './myaction';

function mapStateToProps(state){
    return {
        counter : state
    };
}

function mapDispatchToProps(dispatch){
    return {
        increment : ()=> dispatch(CounterAction.doIncrement()),
        decrement : ()=> dispatch(CounterAction.doDecrement())
       
    }
}


class MyApp extends Component {
    render()
{
    return (
        <div>
            <div>
            <div>Result is {this.props.counter}</div>
            <div>
                <button onClick={this.props.increment}>increment</button>
                 <button onClick={this.props.decrement}>decrement</button>
                
            </div>
            </div>

        </div>
      )};
}

export default  connect(mapStateToProps,mapDispatchToProps) (MyApp);