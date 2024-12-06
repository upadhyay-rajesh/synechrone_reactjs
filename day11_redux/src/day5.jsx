import React, { Component } from 'react';

import SignupStatefulComponent from './formrelateddata/Signup';
import DisplayStatefulComponent from './formrelateddata/DisplayStatefulComponent';

class Day5 extends Component {
    state = { 
students :[
    {name:'Mohan',password:'ancd',email:'zz@gmail.com',address:'Chennai'}
]
 } 
addData=(dd)=>{
    console.log("parent "+dd);
    this.setState((olderstate)=>({
        students :[...olderstate.students,dd]
    }))
}
    render() { 
        return (
            <div>
                <SignupStatefulComponent changedata={this.addData}></SignupStatefulComponent>

                <DisplayStatefulComponent mydata={this.state.students}></DisplayStatefulComponent>
            </div>
        );
    }
}
 
export default Day5;