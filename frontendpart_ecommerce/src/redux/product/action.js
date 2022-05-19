export const ADD_TODO="ADD_TODO"
export const DEL_TODO="DEL_TODO"

export const ADD_DATA="ADD_DATA"
export const addData=(data)=>({type:ADD_DATA,payload:data})

// we are dispatching action here
export const addTodo=(payload)=>({type:ADD_TODO,payload})
export const delTodo=(payload)=>({type:DEL_TODO,payload})