import { createStore,applyMiddleware} from "redux";
// import { calcreducer } from "./Increment/reducer";
import thunk from "redux-thunk"
import { todoreducer } from "./product/reducer";
// import { headphonereducer } from "./Headphone/reducer";

// const rootReducer=combineReducers({todo:todoreducer})
// export const store=createStore(reducer,{
//     num:0
// })
export const store=createStore(todoreducer,applyMiddleware(thunk))