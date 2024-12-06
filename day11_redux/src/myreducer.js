export default function employeeReducer(state=0,action){

    switch (action.type) {
      case 'INCREMENT':
        return state+1;
        break;
      case 'DECREMENT':
        return state-1;
        break;
    
      default:
        break;
    }
}