import React, { Component } from 'react'

import {NavLink} from 'react-router-dom'
import RouterView from '../router/RouterView'
import '../css/index.scss'
export default class main extends Component {
    render() {
        let {child,navLink}=this.props
        return (
            <div className='div'>
      

            <header>我是头部</header>


            <main>
            <RouterView routerList={child}></RouterView>
            </main>
            <footer>
            {
                navLink.map((item,index)=>{
                    return <NavLink key={index} to={item.path}>{item.title}</NavLink>
                })
            }
            </footer>
            </div>
        )
    }
}
