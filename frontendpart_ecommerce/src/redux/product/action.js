import axios from "axios"
export const ADD_TODO="ADD_TODO"
export const DEL_TODO="DEL_TODO"


export const ADD_DATA="ADD_DATA"
export const addData=(data)=>({type:ADD_DATA,payload:data})

// we are dispatching action here
export const addTodo=(payload)=>({type:ADD_TODO,payload})
export const getMendata=(dispatch)=>{
    axios.get("https://beckendfshop.herokuapp.com/men").then((res)=>{
        dispatch(addTodo(res.data))
        })
}
export const getWomendata=(dispatch)=>{
    axios.get("https://beckendfshop.herokuapp.com/women").then((res)=>{
        dispatch(addTodo(res.data))
        })
}
export const getKidsdata=(dispatch)=>{
    axios.get("https://beckendfshop.herokuapp.com/kids").then((res)=>{
        dispatch(addTodo(res.data))
        })
}
export const delTodo=(payload)=>({type:DEL_TODO,payload})