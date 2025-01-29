const INITIAL_STATE = {
    filter:""
};

export const filterReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case"filter/setFilter":{
            return{
                ...state, filter:action.payload
            }
        }
        default:
            return state;
    }
}