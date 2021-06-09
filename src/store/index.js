import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
// ?导入自己创建的reducer
import {reducer} from "../reducer"
// 创建store  使用redux提供的createStore创建store
// let store = createStore(reducer)
// // 查看store
// // console.log(store)
// export default store

// 支持异步action
export default createStore(reducer,applyMiddleware(thunk))