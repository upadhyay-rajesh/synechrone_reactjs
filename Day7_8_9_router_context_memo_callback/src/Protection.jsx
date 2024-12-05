import {Navigate } from "react-router-dom";


function Protection({test1, children}) {
   
        if(!test1){
          return <Navigate to="/" />;
        }
        return children;
  
}

export default Protection;