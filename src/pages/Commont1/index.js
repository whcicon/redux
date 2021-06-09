import React, { Component } from 'react'
import {connect} from "react-redux"
class Commont1 extends Component {
    addNum=() => {
        console.log(111,this.props)
        // 发送action
        //*  this.props就可以拿到发送action的方法了
        this.props.sendAction();
    }
    render() {
        return (
            <div>
                <button onClick={this.addNum}>+1</button>
            </div>
        )
    }
} 
// 定义 mapDispatchToProps函数 该函数必须return一个对象 
// 函数传递一个参数dispatch  dispatch传递action 
function mapDispatchToProps(dispatch) {
    // TODOS 把方法的返回值传递给了内部
    return {
        sendAction:() =>{
            dispatch({type:"send_type",value:"react-redux发送action"})
        }
    }
}
export default connect(null, mapDispatchToProps)(Commont1)
