import { createStore} from "redux";
// import { calcreducer } from "./Increment/reducer";
import { todoreducer } from "./product/reducer";
// import { headphonereducer } from "./Headphone/reducer";

// const rootReducer=combineReducers({todo:todoreducer})
// export const store=createStore(reducer,{
//     num:0
// })
export const store=createStore(todoreducer,window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())