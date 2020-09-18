import React, { Component } from 'react'
import { connect } from 'react-redux'
import routerList from './router/routerConfig'
import RouterView from './router/RouterView'
import {BrowserRouter} from 'react-router-dom'
import Axios from 'axios'
export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <RouterView routerList={routerList}></RouterView>
        </BrowserRouter>
      </>
    )
  }
  
  componentDidMount(){
    this.props.getUser()
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps =(dispatch)=> {
  return {
    getUser(){
      dispatch((next)=>{
        Axios.get('/getlist').then(res=>{
          dispatch({type:"SET_LIST",data:res.data.data})
          
        })
      })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
