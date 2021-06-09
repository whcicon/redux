// 定义action 对象
// const sendAction = {
//     type:"send_type",
//     value: "发送一个action"
// }
// action 构造函数 并向外暴露
export function sendAction(txt) {
    return {
        type:"send_type",
        value:txt
    }
}
