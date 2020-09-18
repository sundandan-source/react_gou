
import React, { Component } from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
export default class RouterView extends Component {
    render() {
         let {routerList}=this.props
        let list =routerList.filter(item=>item.path)
        let redirect =routerList.filter(item=>item.to)[0]
        return (
            <Switch>
            {
                list.map((item,index)=>{
                    return <Route key={index} path={item.path} render={(props)=>{
                        let Com=item.com
                        if(item.children){
                            return <Com {...props} child={item.children} navLink={item.children.filter(item=>item.path)}></Com>
                        }
                        return <Com {...props}></Com>
                    }}></Route>
                })
            }
                
            {
                redirect?<Redirect to={redirect.to} from={redirect.from}></Redirect>:<></>
            }
            </Switch>
        )
    }
}
