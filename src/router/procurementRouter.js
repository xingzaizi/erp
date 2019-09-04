
const procurementRouter = {
    path: '/procurement',
    component: () => import('@/views/home/index.vue'),
    name: 'procurement',
    title: '采购管理',
    icon: 'el-icon-goods',
    isMenu:true,
    children: [
        {
            path: '/procurement/menu1',
            name: 'menu1',
            title: '基本资料',
            components: {
                employeeSetting: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
            },
            children: [
                {
                    path: '/procurement/menu1/menu1-1',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'purchasRequisitionTypeSetting',
                    title: '采购请购类型设定'
                },
                {
                    path: '/procurement/menu1/menu1-2',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'purchaseWarehousingType Setting',
                    title: '采购入库类型设定'
                },
                {
                    path: '/procurement/menu1/menu1-3',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'purchaseOrderTypeSetting',
                    title: '采购订单类型设定'
                }
            ]
        },
        {
            path: '/procurement/menu2',
            name: 'menu2',
            title: '采购作业',
            components: {
                purchaseOrder: () => import('@/views/procurement/menu2/menu2-1/Po.vue'),//采购订单
                purchaseInquiry: () => import('@/views/procurement/menu2/menu2-2/PoInquiry.vue'),//采购询价单
                purchaseRequisition: () => import('@/views/procurement/menu2/menu2-3/PoRequisition.vue'),//采购请购单
                purchaseReceipt: () => import('@/views/procurement/menu2/menu2-4/purchaseReceipt.vue'),//采购入库单
                purchaseReturnOrder: () => import('@/views/procurement/menu2/menu2-5/purchaseReturnOrder.vue'),//采购退货单
                purchaseInvoice: () => import('@/views/procurement/menu2/menu2-7/purchaseInvoice.vue'),//采购发票
                purchaseInvoiceDetail: () => import('@/views/procurement/menu2/menu2-7/purchaseInvoiceDetail.vue'),//采购发票明细4
                payThePaymentSlip: () => import('@/views/procurement/menu2/menu2-8/accountsZhu.vue'),//冲款单
                advanceCharge: () => import('@/views/procurement/menu2/menu2-8/advanceCharge.vue'),//
                advancePayment: () => import('@/views/procurement/menu2/menu2-8/advancePayment.vue'),//
                prepaidatMoney: () => import('@/views/procurement/menu2/menu2-8/prepaidatMoney.vue'),//
            },
            children: [
                {
                    path: '/procurement/menu2/menu2-1',
                    component: () => import('@/views/procurement/menu2/menu2-1/Po.vue'),
                    name: 'purchaseOrder',
                    title: '采购订单'
                },
                {
                    path: '/procurement/menu2/menu2-2',
                    component: () => import('@/views/procurement/menu2/menu2-2/PoInquiry.vue'),
                    name: 'purchaseInquiry',
                    title: '采购询价单'
                },
                {
                    path: '/procurement/menu2/menu2-3',
                    component: () => import('@/views/procurement/menu2/menu2-3/PoRequisition.vue'),
                    name: 'purchaseRequisition',
                    title: '采购请购单'
                },
                {
                    path: '/procurement/menu2/menu2-4',
                    component: () => import('@/views/procurement/menu2/menu2-4/purchaseReceipt.vue'),
                    name: 'purchaseReceipt',
                    title: '采购入库单'
                },
                {
                    path: '/procurement/menu2/menu2-5',
                    component: () => import('@/views/procurement/menu2/menu2-5/purchaseReturnOrder.vue'),
                    name: 'purchaseReturnOrder',
                    title: '采购退货单'
                },
                {
                    path: '/procurement/menu2/menu2-6',
                    component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
                    name: 'purchaseDiscountConfirmationForm',
                    title: '采购折让确认单'
                },
                {
                    path: '/procurement/menu2/menu2-7',
                    component: () => import('@/views/procurement/menu2/menu2-7/purchaseInvoice.vue'),
                    name: 'purchaseInvoice',
                    title: '采购发票'
                },
                {
                    path: '/procurement/menu2/menu2-8',
                    component: () => import('@/views/procurement/menu2/menu2-8/accountsZhu.vue'),
                    name: 'payThePaymentSlip',
                    title: '应付冲款单'
                }
                //自定义添加修改页面路由 不进入左侧菜单栏
                ,
                {
                    path: '/procurement/menu2/menu2-7/detail',
                    name: 'purchaseInvoiceDetail',
                    hidden: true
                },
                //预付
                {
                    path: '/procurement/menu2/menu2-8/charge',
                    name: 'advanceCharge',
                    hidden: true
                },
                {
                    path: '/procurement/menu2/menu2-8/payment',
                    name: 'advancePayment',
                    hidden: true
                },
                {
                    path: '/procurement/menu2/menu2-8/prepaid',
                    name: 'prepaidatMoney',
                    hidden: true
                }
            ]
        },
        {
            path: '/procurement/menu3',
            name: 'menu3',
            title: '分摊作业',
            components: {
                procurementAllocationOperation: () => import('@/views/procurement/menu3/menu3-1/procurementAllocationOperation.vue'),
            },
            children: [
                {
                    path: '/procurement/menu3/menu3-1',
                    component: () => import('@/views/procurement/menu3/menu3-1/procurementAllocationOperation.vue'),
                    name: 'procurementAllocationOperation',
                    title: '采购分摊作业'
                }
            ]
        }
    ]
}
export default procurementRouter