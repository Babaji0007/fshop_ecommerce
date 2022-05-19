const initialState={
   
    todo:[],
    data:[]
}
export const todoreducer=(store=initialState,{type,payload})=>{
   switch(type){
           case "ADD_TODO":
           return{...store,todo:[...payload]} 
           case "DEL_TODO":
           return{...store,payload} 
           case "ADD_DATA":
         return {...store,data:payload}
           default:
               return store
   }
}