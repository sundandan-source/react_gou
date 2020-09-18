import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Car extends Component {
    state={
        val:''
    }
    render() {
        let {val}=this.state
             let {cardata,jia,jian,allNum,allPrice}=this.props
        return (
            <div>
    
    
            <input value={val} onChange={(e)=>{
                this.setState({
                    val:e.target.value
                })
            }}></input>
                  {
                    cardata.map((item,index)=>{
                        return  item.name.indexOf(val)>-1? <li key={index}>


                        <img src={item.img} />
                        
                        {item.name}
                        <button onClick={()=>{jia(item.id,item)}}>++</button>
                        <span>{item.num}</span>
                          <button onClick={()=>{jian(item.id,item)}}>--</button>

                            <p>{item.price}元</p>
                         
                        </li>:''
                                
                    })
            
                }
                 <b>{allNum}</b>
                 <b>{allPrice}</b>

                 <button onClick={()=>{this.props.history.push('/page')}}>付款</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let {cardata,jia,jian,allNum,allPrice}=state
    
 return {
cardata,jia,jian,allNum,allPrice
 }   
}

const mapDispatchToProps =(dispatch)=> {
    return {
        //加加数量
        jia(id,item){
            dispatch({type:'JIA',id,item})
        },
        //减减数量
        jian(id,item){
            dispatch({type:'JIAN',id,item})
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Car)
