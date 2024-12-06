import { createStore } from "redux";
import  employeeReducer  from "./myreducer";

const store = createStore(employeeReducer);

export default store;
