const initialState = {
    labels:[]
};

const coreReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'GET_LABELS':
            return {...state,labels:action.payload};
        default:
            return state;
    }
}

export default coreReducer;