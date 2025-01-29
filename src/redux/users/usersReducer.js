
const INITIAL_STATE = {
users:JSON.parse(localStorage.getItem("users")) ?? []
}

export const usersReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
case "users/addUser":{
    return {
        ...state, 
        users:[...state.users, action.payload]
    };
}
case "users/deleteUser":{
   return {
    ...state,
    users:state.users.filter((user) => user.id !== action.payload)
};
}
default: return state;
    }
    
};