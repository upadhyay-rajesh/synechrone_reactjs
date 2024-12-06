import React, { useState } from "react";
import SignUpStateless from "./formrelateddata/signupStateless";

import DisplayStatelessComponent from './formrelateddata/disstateless';

function Day5Stateless() {
    const [students, setStudents] = useState([]); // Parent's array state

    // Callback to add data from child
    const addData = (newItem) => {
        setStudents([...students, newItem]); // Update parent state immutably
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <SignUpStateless childtoparent={addData} />
            <DisplayStatelessComponent mydata={students}></DisplayStatelessComponent>
           
        </div>
    );
}

export default Day5Stateless;