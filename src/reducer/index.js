/*
    这个文件常见reducer函数 专门用来处理发送过来的action
 */

// 定义reducer函数  

// 先定义一个初始state  //!redux模拟reducer
// const initState ={value:"默认值"}
// const reducer = (state=initState,action) => {
//     // console.log("reducer",state,action)
//     switch(action.type) {
//         case "send_type":
//             return Object.assign({},state,action)
//         default:
//             return state
//     }
// }
// module.exports={reducer:reducer}

//? react-redux 模拟reducer
// 定义初始化state
const initstate = {
    count:0
}
export function reducer(state = initstate, action) {
    // console.log(111,action);
    // 判action.type 是否使我们所需要的
    const {count} = state
    switch (action.type) {
        case "send_type":
            return {
                count:count + 1
            }
        default:
            // 默认返回state
            return state
    }
}