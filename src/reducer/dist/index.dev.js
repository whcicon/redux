"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = reducer;

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
var initstate = {
  count: 0
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initstate;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  // console.log(111,action);
  // 判action.type 是否使我们所需要的
  var count = state.count;

  switch (action.type) {
    case "send_type":
      return {
        count: count + 1
      };

    default:
      // 默认返回state
      return state;
  }
}