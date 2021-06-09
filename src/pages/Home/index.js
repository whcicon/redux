import React,{Component} from 'react'

import store from "../../store"
import {sendAction}from "../../action"
export default class Home extends Component {
    handleClick=() => {
        // store.subscribe(() =>console.log(111))
        // 发送action
        store.dispatch(sendAction("red"));
    }
    componentDidMount() {
        store.subscribe(() => {console.log(111,store.getSate())})
        this.setState({})
    }
    render() {
        return (
            <>
                <button onClick={this.handleClick}>点我发送一个action</button>
                <span>{store.getState().value}</span>
            </>
        )
    }
}
