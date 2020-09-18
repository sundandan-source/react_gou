import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/index.scss'

export class List extends Component {
state={
ind:0,
val:''
}
    render() {
        let {list,add}=this.props
        let {ind,val}=this.state
        return (
            <div>

            <input value={val} onChange={(e)=>{
                this.setState({
                    val:e.target.value
                })
            }}></input>
            <ul className='ul1'> {
                    list.map((i,j)=>{
                        return <li key={j} className={ind===j?'active':''} onClick={()=>{this.setState({ind:j})}}>
                    {i.title}
                        </li>
                    })
                }
                </ul>

                <ul  className='ul2'>
                {
                list.length&& list[ind].children.map((item,index)=>{
                       return item.name.indexOf(val)>-1?  <li key={index}>
                       <img src={item.img} onClick={()=>{this.props.history.push('/xq/'+item.id,item)}}/>
                       <b>{item.name}</b>
                       <p>{item.price}元</p>

                       <button className='button' onClick={()=>{add(item.id,item)}}>加入购物车</button>
                       </li>:''
                   }) 
                }</ul>
                
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let {list,add}=state
 return {
     list,
     add

 }   
}

const mapDispatchToProps =(dispatch)=> {
    return {
        add(id,item){
            dispatch({type:'SET_CARDATA',id,item})
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
