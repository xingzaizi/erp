
const repertoryRouter = {
    path: '/repertory',
    component: () => import('@/views/home/index.vue'),
    name: 'repertory',
    title: '库存管理',
    icon: 'el-icon-coin',
    isMenu:true,
    children: [
        {
            path: '/repertory/menu1',
            name: 'menu1',
            title: '基本资料', 
            components: {
                employeeSetting: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
            },
            children: [
                {
                    path: '/repertory/menu1/menu1-1',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'storageTypeSetting',
                    title: '入库类型设定'
                },
                {
                    path: '/repertory/menu1/menu1-2',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'outboundTypeSetting',
                    title: '出库类型设定' 
                }
            ]
        },
        {
            path: '/repertory/menu2',
            name: 'menu2',
            title: '其他出入库作业', 
            components: {
                employeeSetting: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
            },
            children: [
                {
                    path: '/repertory/menu2/menu2-1',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'otherWarehousingDocuments',
                    title: '其他入库单'
                },
                {
                    path: '/repertory/menu2/menu2-2',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'otherOutboundOrders',
                    title: '其他出库单'
                }
            ]
        },
        {
            path: '/repertory/menu3',
            name: 'menu3',
            title: '调拨盘点作业',
            components: {
                transferringOrder: () => import('@/views/repertory/menu3/menu3-1/TransferSlip.vue'),
                inventoryList: () => import('@/views/repertory/menu3/menu3-3/InventoryList.vue'),
            },
            children: [
                {
                    path: '/repertory/menu3/menu3-1',
                    component: () => import('@/views/repertory/menu3/menu3-1/TransferSlip.vue'),
                    name: 'transferringOrder',
                    title: '调拨单'
                },
                {
                    path: '/repertory/menu3/menu3-2',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'takeStockOrder',
                    title: '打印盘点卡' 
                },
                {
                    path: '/repertory/menu3/menu3-3',
                    component: () => import('@/views/repertory/menu3/menu3-3/InventoryList.vue'),
                    name: 'inventoryList',
                    title: '盘点单' 
                }
            ]
        },
        {
            path: '/repertory/menu4',
            name: 'menu4',
            title: '调价作业', 
            components: {
                readjustPricesOrder: () => import('@/views/repertory/menu4/menu4-1/PriceAdjustmentSheet.vue'),
            },
            children: [
                {
                    path: '/repertory/menu4/menu4-1',
                    component: () => import('@/views/repertory/menu4/menu4-1/PriceAdjustmentSheet.vue'),
                    name: 'readjustPricesOrder',
                    title: '调价单'
                }
            ]
        }
    ]
}
export default repertoryRouter