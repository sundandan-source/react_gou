import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
let initView={
    list:[],
    cardata:[],//保存购物车的数据
    allPrice:0,
    allNum:0
}
let reacter=(state=initView,action)=>{
    let newState=JSON.parse(JSON.stringify(state))
    switch (action.type) {
    //获取数据
    case 'SET_LIST':
    newState.list=action.data
           console.log(newState.list)
    return newState

    //加入购物车
    case 'SET_CARDATA':
    newState.cardata.push(action.item)
    console.log('res',newState.cardata)
return newState
    

    //加加
    case 'JIA':
    newState.cardata.map((item,index)=>{//循环cardata中的每一项
        if(+item.id===+action.id){//判断cardata中的id等于传过来的id
            item.num++//如果判断等于就++
            console.log(item.num)
            newState.allPrice++
            newState.allNum++
        }
    })
    return newState

    //减减
    case 'JIAN':
    newState.cardata.map((item,index)=>{//循环cardata中的每一项
        if(+item.id===+action.id){//判断cardata中的id等于传过来的id
           if(item.num>0){//如果每一项的数量大于0的话就--
                item.num--
           }
        }
    })
    return newState
        default:
        return state
    }
}
export default createStore(reacter,applyMiddleware(thunk))