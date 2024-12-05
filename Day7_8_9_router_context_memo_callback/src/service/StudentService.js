import axios from 'axios';

class StudentService{
    getAllRecord(){
       return axios.get("https://jsonplaceholder.typicode.com/users");
     }

     deleteRecord(id){
        return axios.delete("http://localhost:9090/deleteRecord"+"/"+id);
    }
    editRecord(emp,id){
        return axios.put("http://localhost:9090/updateRecord"+"/"+id,emp);
    }

    createEmployeeRecord(emp){
        return axios.post("http://localhost:9090/createRecord",emp);
    }
}
export default new StudentService();