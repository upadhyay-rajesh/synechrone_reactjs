import React from "react";
import { Routes, Route, Link ,useParams, useNavigate } from "react-router-dom";

function About() {
      const {mydata}= useParams();
      const mdata=JSON.parse(mydata);


      const navigate = useNavigate();

      const handleRedirect = () => {
          navigate("/"); // Redirect to /home
      };
  



    return  <div className="mymaindiv">
    <h1 className="hh">Student Record</h1>

    <button onClick={handleRedirect}>Go to Home</button>
   
    <table border="5">
        <tr>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Student Age</th>
            <th>Student_City</th>
        </tr>
        
        {
            mdata.map((s1)=>(
                <tr>
                    <td>{s1.st_id}</td>
                    <td>{s1.st_name}</td>
                    <td>{s1.st_age}</td>
                    <td>{s1.st_city}</td>
                </tr>
            ))
           
        }
    </table>
    <nav>
                <Link to="analytics">Analytics</Link> | <Link to="reports">Reports</Link>
            </nav>
            <Routes>
                <Route path="analytics" element={<h2>Analytics Page</h2>} />
                <Route path="reports" element={<h2>Reports Page</h2>} />
            </Routes>
</div>
}

export default About;
