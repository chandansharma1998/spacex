const DataReducer = (state=[], action)=>{
    switch(action.type){
        case 'SHOW ALL':
            return [...action.payload];
        default:
            return state;
    }
}

export default DataReducer