
const salesManagementRouter = {
    path: '/salesManagement',
    component: () => import('@/views/home/index.vue'),
    name: 'salesManagement',
    title: '销售管理',
    icon: 'el-icon-truck',
    isMenu:true,
    children: [
        {
            path: '/salesManagement/menu1',
            name: 'menu1',
            title: '基本资料',
            components: {
                employeeSetting: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
            },
            children: [
                {
                    path: '/salesManagement/menu1/menu1-1',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'salesOrderTypeSetting',
                    title: '销售订单类型设定' 
                },
                {
                    path: '/salesManagement/menu1/menu1-2',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'salesOutboundTypeSetting',
                    title: '销售出库类型设定'
                }
            ]
        },
        {
            path: '/salesManagement/menu2',
            name: 'menu2',
            title: '销售作业', 
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
                    path: '/salesManagement/menu2/menu2-1',
                    component: () => import('@/views/sales/menu2/menu2-1/SalesOrder.vue'),
                    name: 'salesQuotation',
                    title: '销售报价单' 
                },
                {
                    path: '/salesManagement/menu2/menu2-2',
                    component: () => import('@/views/sales/menu2/menu2-2/SalesQuotation.vue'),
                    name: 'salesOrder',
                    title: '销售订单'
                },
                {
                    path: '/salesManagement/menu2/menu2-3',
                    component: () => import('@/views/sales/menu2/menu2-3/sellingOutWarehouseReceipt.vue'),
                    name: 'salesReleaseOrder',
                    title: '销售出库单' 
                },
                {
                    path: '/salesManagement/menu2/menu2-9',
                    component: () => import('@/views/sales/menu2/menu2-9/sellOrderList.vue'),
                    name: 'sellOrderList',
                    title: '销售订单'
                },
                {
                    path: '/salesManagement/menu2/menu2-4',
                    component: () => import('@/views/sales/menu2/menu2-4/salesReturn.vue'),
                    name: 'salesReturnOrder',
                    title: '销售退货单' 
                },
                {
                    path: '/salesManagement/menu2/menu2-5',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'salesDiscountConfirmation',
                    title: '销售折让确认单' 
                },
                {
                    path: '/salesManagement/menu2/menu2-6',
                    component: () => import('@/views/sales/menu2/menu2-6/salesSlip.vue'),
                    name: 'salesSlip',
                    title: '销售发票' 
                },
                {
                    path: '/salesManagement/menu2/menu2-7',
                    component: () => import('@/views/sales/menu2/menu2-7/singleReceivable.vue'),
                    name: 'singleReceivable',
                    title: '应收冲款单'
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
            title: '金税接口', 
            components: {
                employeeSetting: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
            },
            children: [
                {
                    path: '/salesManagement/menu3/menu3-1',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'exportOfSalesInvoice',
                    title: '销售发票导出' 
                }
            ]
        }
    ]
}
export default salesManagementRouter