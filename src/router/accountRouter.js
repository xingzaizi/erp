
const accountRouter = {
    path: '/account',
    component: () => import('@/views/home/index.vue'),
    name: 'account',
    meta: {
        title: '账款管理',
        icon: 'el-icon-bank-card',
        permissions: '这里是权限'
    },
    children: [
        {
            path: '/account/menu1',
            name: 'menu1',
            meta: { title: '冲款作业', permissions: '这里是权限' },
            components: {
                payThePaymentSlip: () => import('@/views/account/menu1/menu1-2/accountsZhu.vue'),
                advanceCharge: () => import('@/views/account/menu1/menu1-2/advanceCharge.vue'),
                advancePayment: () => import('@/views/account/menu1/menu1-2/advancePayment.vue'),
                prepaidatMoney: () => import('@/views/account/menu1/menu1-2/prepaidatMoney.vue'),
                singleReceivable: () => import('@/views/account/menu1/menu1-1/singleReceivable.vue'),
                singleReceivableReceivable:() => import('@/views/account/menu1/menu1-1/singleReceivableReceivable.vue'),
                singleReceivableCollectInAdvance:() => import('@/views/account/menu1/menu1-1/singleReceivableCollectInAdvance.vue'),
                singleReceivableFlush:() => import('@/views/account/menu1/menu1-1/singleReceivableFlush.vue')
            },
            children: [
                {
                    path: '/account/menu1/menu1-1',
                    component: () => import('@/views/account/menu1/menu1-1/singleReceivable.vue'),
                    name: 'singleReceivable',
                    meta: { title: '应收冲款单' }
                },
                {
                    path: '/account/menu1/menu1-2',
                    component: () => import('@/views/account/menu1/menu1-2/accountsZhu.vue'),
                    name: 'payThePaymentSlip',
                    meta: { title: '应付冲款单' }
                }
                //自定义添加修改页面路由 不进入左侧菜单栏
                //预收
                ,
                {
                    path: '/account/menu1/menu1-1/receivable',
                    name: 'singleReceivableReceivable',
                    hidden: true
                },
                {
                    path: '/account/menu1/menu1-1/advance',
                    name: 'singleReceivableCollectInAdvance',
                    hidden: true
                },
                {
                    path: '/account/menu1/menu1-1/flush',
                    name: 'singleReceivableFlush',
                    hidden: true
                },
                //预付
                {
                    path: '/account/menu1/menu1-2/charge',
                    name: 'advanceCharge',
                    hidden: true
                },
                {
                    path: '/account/menu1/menu1-2/payment',
                    name: 'advancePayment',
                    hidden: true
                },
                {
                    path: '/account/menu1/menu1-2/prepaid',
                    name: 'prepaidatMoney',
                    hidden: true
                }
            ]
        },
        {
            path: '/account/menu2',
            name: 'menu2',
            meta: { title: '其他应收付作业', permissions: '这里是权限' },
            components: {
                employeeSetting: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
            },
            children: [
                {
                    path: '/account/menu2/menu2-1',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'otherReceivables',
                    meta: { title: '其他应收单' }
                },
                {
                    path: '/account/menu2/menu2-2',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'otherNotesPayable',
                    meta: { title: '其他应付单' }
                }
            ]
        }
    ]
}
export default accountRouter