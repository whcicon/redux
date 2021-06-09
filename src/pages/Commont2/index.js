import React, { Component } from 'react'
// 导入connect方法
import {connect} from "react-redux"
 class Commont2 extends Component {
     render() {
        console.log("111",this.props);
        //TODOS 组件内部通过this.props拿到数据
        const {count} = this.props
        return (
            <div>
                <span>{count}</span>
            </div>
        )
    }
}
//TODOS 这个函数拿到最新值
const mapStateToProps = (state) => {
    console.log("map",state);
    //? return 把值返回给组件内部
    return state
    
} 
export default connect(mapStateToProps)(Commont2)
