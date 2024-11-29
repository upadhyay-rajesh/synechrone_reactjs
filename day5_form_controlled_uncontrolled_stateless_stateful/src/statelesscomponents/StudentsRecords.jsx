import React, {useState} from "react";



 function StudentRecords({s,name,sendtoparent}) {
    const[gg,setGg]=useState(s);
    const[myname,setMyname]=useState(name);

    const myFunction=()=>{
        alert('i am function in react');
    }

    const addItem = () => {
        const newdata={id:5,name:'rajesh',age:41};
        sendtoparent(newdata);
       
    };
    const removeItem = (index) => {
        setGg(gg.filter((_, i) => i !== index)); // Remove item by index
    };
  
    return (
        <div>
            <button onClick={myFunction}>use me</button>

            <h2>Student Records</h2>
            <ul>
                {name}
                {myname}
                {s.map((student) => (
                    <li key={student.id}>
                        {student.name} - {student.age} years old
                    </li>
                ))}
            </ul>
            <ul>
                <button onClick={addItem}>Add Item</button>

                {gg.map((student,index) => (
                    <li key={student.id}>
                        {student.name} - {student.age} years old   <button onClick={() => removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentRecords;
