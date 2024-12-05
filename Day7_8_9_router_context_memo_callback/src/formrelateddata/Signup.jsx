import React, { Component } from 'react';

class SignupStatefulComponent extends Component {
    state = { 
        name : '',
        password : '',
        email : '',
        address : ''
     } 


     handleChange=(event)=>{
      const{name,value}   =  event.target;
      this.setState({
        [name]: value,
      })
     }

     handleSubmit=(event)=>{
       const{name,password,email,address} = this.state;
       var neData={name,password,email,address};
       console.log(neData);
       this.props.changedata(neData);
       this.setState({name:"",password:"", email:"",address:""})
     }

    render() { 
        return (
            <div>
                <form>

                    <div>
                        <label>Name : </label>
                        <input 
                         type="text"
                         name="name"
                         value={this.state.name}
                         onChange={this.handleChange}
                        />
                    </div>
                    <div>
                    <label>Password : </label>
                    <input 
                     type="password"
                     name="password"
                     value={this.state.password}
                     onChange={this.handleChange}
                     />
                </div>
                <div>
                <label>Email : </label>
                <input 
                 type="email"
                 name="email"
                 value={this.state.email}
                 onChange={this.handleChange}
                 />
            </div>
            <div>
            <label>Address : </label>
            <input 
             type="text"
             name="address"
             value={this.state.address}
             onChange={this.handleChange}
             />
        </div>
        <button type="button" onClick={this.handleSubmit}>Register Me</button>

                </form>


            </div>
        );
    }
}
 
export default SignupStatefulComponent;