export default class CounterAction{
    static doIncrement(){
        return {
            type:'INCREMENT'
        }
    }

    static doDecrement(){
        return {
            type:'DECREMENT'
        }
    }
    
}

