import Mock from 'mockjs'
let data = [{
        title: '动物',
        children: [{
            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3147581193,2343426644&fm=15&gp=0.jpg',
            name: '皮卡丘',
            num: '0',
            price: '4235',
            id:0
            
        },
        {
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2689302883,1326782389&fm=16&gp=0.jpg',
            name: '老母鸡',
            num: '0',
            price: '45234',
            id:347
            
        },
        {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600266719404&di=543ba9c366b9e5ccda3d87c244034d6d&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170803%2Fdcb33b5129324d2aac55120f085c62c1.jpg',
            name: '大熊猫',
            num: '0',
            price: '345',
            id:395743895
            
        }
    ]
    },
    {
        title: '骚包',
        children: [{
            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=161045275,2122969925&fm=16&gp=0.jpg',
            name: '打死你',
            num: '0',
            price: '3212',
            id:1

        },
        
        {
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2285708597,3377362310&fm=16&gp=0.jpg',
            name: '蜡笔小新',
            num: '0',
            price: '1342',
            id:44

        },
         {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600266875999&di=b2560aa0c1785bccb9b030b394f2318d&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1795264730%2C2651757782%26fm%3D214%26gp%3D0.jpg',
            name: '我最美',
            num: '0',
            price: '1452',
            id:444

        }]
    },
    {
        title: '不要脸',
        children: [{
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1213973402,2816640606&fm=26&gp=0.jpg',
            name: '我来啦',
            num: '0',
            price: '233',
            id:2

        },
        {
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2286401702,3569928755&fm=26&gp=0.jpg',
            name: '共产党接班人',
            num: '0',
            price: '243',
            id:55

        },
         {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600266939717&di=4191829ff1c8ff5d8cfbb11431aaa360&imgtype=0&src=http%3A%2F%2Fimg.wxcha.com%2Ffile%2F201911%2F22%2F888fba6e44.gif',
            name: '看似简单',
            num: '0',
            price: '24353',
            id:555

        }]
    },
    {
        title: '贱货',
        children: [{
            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1580632096,2604010005&fm=26&gp=0.jpg',
            name: '龙虾呀',
            num: '0',
            price: '13452',
            id:3

        },
        {
            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2275474476,2483597990&fm=26&gp=0.jpg',
            name: '狗子',
            num: '0',
            price: '1452',
            id:33

        },{
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600266939712&di=e2105753ab7419c15b55354e533d3a04&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190825%2F16%2F1566720475-hUWStXBdnD.jpg',
            name: '狗蛋',
            num: '0',
            price: '12345',
            id:333

        }]
    }
]
Mock.mock('/getlist','get',{
    code:200,
    data:data
    
    
    
})
