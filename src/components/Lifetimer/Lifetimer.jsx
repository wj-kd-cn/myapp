import React  from 'react'
import ReactDOM  from 'react-dom'
import './Lifetimer.css'




export default class Lifetimer extends React.Component{

    constructor(props){
      console.log('Lifetimer--->constructor')
      super(props)
       //初始化组件状态
      this.state = {count:0}

    }
   


    //累计计算
    count = () => {

      const {count} = this.state
      this.setState({count:count + 1})

    }

    //卸载组件
    delete = () => {

      ReactDOM.unmountComponentAtNode(document.getElementById("app"))

    }
    //强制更新组件
    forceUpd = () => {
      this.forceUpdate()
    }

    //组件挂载完成
    componentDidMount(){
      console.log('Lifetimer--->componentDidMount')
    }
    //组件将要卸载
    componentWillUnmount(){
      console.log('Lifetimer--->componentWillUnmount')
    }
    //组件是否可以更新，需要返回true或false
    shouldComponentUpdate(){        
      console.log('Lifetimer--->shouldComponentUpdate')
      return true
    }

    componentDidUpdate(prevProps,prevState,snapshot){
      console.log('Lifetimer--->componentDidUpdate',prevProps,prevState,snapshot)
    }
    //若state的值取决于props.则可以使用本钩子函数
    static getDerivedStateFromProps(props,state){
      console.log('Lifetimer--->getDerivedStateFromProps',props,state)
      return null

    }
    //在页面完成更新之前，获取快照对象
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('Lifetimer--->getSnapshotBeforeUpdate',prevProps,prevState)
      return {name:'wangjun',age:30,company:"ansuo"}

    }

    //渲染组件  
    render(){
      console.log('Lifetimer--->render')
      const {count} = this.state
      return(
        <div id='app'>

          <h2 className='h2'>当前页面合计{count}</h2>
          <button onClick={this.count} className='button'>点我+1</button>
          <button onClick={this.delete} className='button'>卸载</button>
          <button onClick={this.forceUpd} className='button'>强制更新</button>
        </div>
       


      )
    }
  }