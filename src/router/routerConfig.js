//一级数据
import main from '../layout/main'
import page from '../layout/page'

//二级数据

import List from '../pages/List'
import Login from '../pages/Login'
import Xq from '../pages/Xq'
import Bb from '../pages/Bb'

import Car from '../pages/Car'
let routerList=[
    {
        path:'/main',
        com:main,
        children:[
            {
                to:'/main/list',
                from :'/main',
            },
            {
            path:'/main/list',
            com:List,
            title:'列表页'
        },
        {
            path:'/main/bb',
            com:Bb,
            title:'首页'
        },
        {
            path:'/main/car',
            com:Car,
            title:"购物车"
        }]
    },
    {
        path:'/page',
        com:page,
        children:[]
    },{
        path:'/xq/:id',
        com:Xq
    },
    {
        to:'/main',
        from:'/'
    },
]
export default routerList