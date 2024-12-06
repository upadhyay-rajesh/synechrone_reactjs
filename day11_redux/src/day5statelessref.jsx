import React, { useState } from "react";
import SignUpStatelessRef from "./formrelateddata/statelessref/signupstatelessref";

import DisplayStatelessRefComponent from './formrelateddata/statelessref/disstatelessref';

function Day5StatelessRef() {
    const [students, setStudents] = useState([]); // Parent's array state

    // Callback to add data from child
    const addData = (newItem) => {
        setStudents([...students, newItem]); // Update parent state immutably
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <SignUpStatelessRef childtoparent={addData} />
            <DisplayStatelessRefComponent mydata={students}></DisplayStatelessRefComponent>
           
        </div>
    );
}

export default Day5StatelessRef;