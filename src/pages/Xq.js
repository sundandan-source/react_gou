import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Xq extends Component {
    render() {
        let {img,num,name,title,price}=this.props.location.state
        let {gou}=this.props
   
        return (
            <div>
              <img src={img} />
              
                 <b>{name}</b>
                  <p>{price}元</p>
                 <button onClick={()=>{gou(this.props.location.state.id,this.props.location.state)}}>加入购物车</button>
                 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let {gou}=state
return {
gou
} 
}

const mapDispatchToProps =(dispatch)=> {
    return {
gou(id,item){
    dispatch({type:'SET_CARDATA',id,item})
}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Xq)
