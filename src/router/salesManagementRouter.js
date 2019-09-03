
const salesManagementRouter = {
    path: '/salesManagement',
    component: () => import('@/views/home/index.vue'),
    name: 'salesManagement',
    meta: {
        title: '销售管理',
        icon: 'el-icon-truck',
        permissions: '这里是权限'
    },
    children: [
        {
            path: '/salesManagement/menu1',
            name: 'menu1',
            meta: { title: '基本资料', permissions: '这里是权限' },
            components: {
                employeeSetting: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
            },
            children: [
                {
                    path: '/salesManagement/menu1/menu1-1',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'salesOrderTypeSetting',
                    meta: { title: '销售订单类型设定' }
                },
                {
                    path: '/salesManagement/menu1/menu1-2',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'salesOutboundTypeSetting',
                    meta: { title: '销售出库类型设定' }
                }
            ]
        },
        {
            path: '/salesManagement/menu2',
            name: 'menu2',
            meta: { title: '销售作业', permissions: '这里是权限' },
            components: {
                sellQuotationList: () => import('@/views/sales/menu2/menu2-8/sellQuotationList.vue'),
                salesQuotation: () => import('@/views/sales/menu2/menu2-2/SalesQuotation.vue'),
                salesOrder: () => import('@/views/sales/menu2/menu2-1/SalesOrder.vue'),
                salesSlip: () => import('@/views/sales/menu2/menu2-6/salesSlip.vue'),
                salesSlipDetail: () => import('@/views/sales/menu2/menu2-6/salesSlipDetail.vue'),
                singleReceivable: () => import('@/views/sales/menu2/menu2-7/singleReceivable.vue'),
                singleReceivableReceivable:() => import('@/views/sales/menu2/menu2-7/singleReceivableReceivable.vue'),
                singleReceivableCollectInAdvance:() => import('@/views/sales/menu2/menu2-7/singleReceivableCollectInAdvance.vue'),
                singleReceivableFlush:() => import('@/views/sales/menu2/menu2-7/singleReceivableFlush.vue'),
                salesReleaseOrder:() => import('@/views/sales/menu2/menu2-3/sellingOutWarehouseReceipt.vue'),
                salesReturnOrder:() => import('@/views/sales/menu2/menu2-4/salesReturn.vue'),
                sellOrderList:() => import('@/views/sales/menu2/menu2-9/sellOrderList.vue'),
            },
            children: [
                {
                    path: '/salesManagement/menu2/menu2-8',
                    component: () => import('@/views/sales/menu2/menu2-8/sellQuotationList.vue'),
                    name: 'sellQuotationList',
                    meta: { title: '销售报价单' }
                },
                {
                    path: '/salesManagement/menu2/menu2-3',
                    component: () => import('@/views/sales/menu2/menu2-3/sellingOutWarehouseReceipt.vue'),
                    name: 'salesReleaseOrder',
                    meta: { title: '销售出库单' }
                },
                {
                    path: '/salesManagement/menu2/menu2-9',
                    component: () => import('@/views/sales/menu2/menu2-9/sellOrderList.vue'),
                    name: 'sellOrderList',
                    meta: { title: '销售订单' }
                },
                {
                    path: '/salesManagement/menu2/menu2-4',
                    component: () => import('@/views/sales/menu2/menu2-4/salesReturn.vue'),
                    name: 'salesReturnOrder',
                    meta: { title: '销售退货单' }
                },
                {
                    path: '/salesManagement/menu2/menu2-5',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'salesDiscountConfirmation',
                    meta: { title: '销售折让确认单' }
                },
                {
                    path: '/salesManagement/menu2/menu2-6',
                    component: () => import('@/views/sales/menu2/menu2-6/salesSlip.vue'),
                    name: 'salesSlip',
                    meta: { title: '销售发票' }
                },
                {
                    path: '/salesManagement/menu2/menu2-7',
                    component: () => import('@/views/sales/menu2/menu2-7/singleReceivable.vue'),
                    name: 'singleReceivable',
                    meta: { title: '应收冲款单' }
                },
                //自定义添加修改页面路由 不进入左侧菜单栏
                {
                    path: '/salesManagement/menu2/menu2-6/detail',
                    name: 'salesSlipDetail',
                    hidden: true
                },
                {
                    path: '/salesManagement/menu2/menu2-7/receivable',
                    name: 'singleReceivableReceivable',
                    hidden: true
                },
                {
                    path: '/salesManagement/menu2/menu2-7/advance',
                    name: 'singleReceivableCollectInAdvance',
                    hidden: true
                },
                {
                    path: '/salesManagement/menu2/menu2-7/flush',
                    name: 'singleReceivableFlush',
                    hidden: true
                },
            ]
        },
        {
            path: '/salesManagement/menu3',
            name: 'menu3',
            meta: { title: '金税接口', permissions: '这里是权限' },
            components: {
                employeeSetting: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
            },
            children: [
                {
                    path: '/salesManagement/menu3/menu3-1',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'exportOfSalesInvoice',
                    meta: { title: '销售发票导出' }
                }
            ]
        }
    ]
}
export default salesManagementRouter