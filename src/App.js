// import Home from "./pages/Home"
import {Provider} from "react-redux"
import store from "./store"
import Commont1 from "./pages/Commont1"
import Commont2 from "./pages/Commont2"
import React from "react";
function App() {
  return (
    // <Home/>
    <Provider store={store}>
      <Commont1 />
      <Commont2 />
    </Provider>
  );
}

export default App;
export class Add extends React.Component {
  constructor(props) {
    super(props)
    // 创建ref
    this.myRef = React.createRef()
  }
  state={count:0}
  add =() => {
  let value = this.myRef.current.value
    console.log(this.myRef);
    let {count} = this.state
        this.setState({
      count: count + value*1
    })
  }
    min =() => {
    let {current} = this.myRef;
    let {count} = this.state;
    this.setState({
      count: Number(count - current.value)
    })
  }
    addAsync = () => {
    let {current} = this.myRef;
    let {count} = this.state
    // setTimeout(() => {
    //      this.setState({
    //        count: count + current.value*1
    //      })
    // },3000)

  }
   render() {
      return (
      <div style={{width:300,height:300,color:"skyblue"}}>
        add...{this.state.count}
        <select ref={this.myRef}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button onClick={this.add}>+</button>&nbsp;
        <button onClick={this.min}>-</button>&nbsp;
        <button onClick={this.addAsync}>异步++</button>
      </div>
    )
   }
}

