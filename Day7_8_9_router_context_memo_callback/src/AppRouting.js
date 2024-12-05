import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Protection from './Protection';

const students= [
    {st_id:'ss001', st_name:'Rajesh',st_age:41,st_city:'Bengeluru'},
    {st_id:'ss002', st_name:'Rajesh1',st_age:23,st_city:'Chennai'},
    {st_id:'ss003', st_name:'Rajesh2',st_age:22,st_city:'Mumbai'},
    {st_id:'ss004', st_name:'Rajesh3',st_age:21,st_city:'Hyderabad'},
]
function App() {
   const st= JSON.stringify(students);

   const auth=true;


  

  // console.log(st);
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link> | <Link to={`/about/${st}`}>About</Link> | <Link to="/contact">Contact</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about/:mydata/*" element={
                        <Protection test1={auth}>
                            <About />
                        </Protection>
                        
                        } />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
