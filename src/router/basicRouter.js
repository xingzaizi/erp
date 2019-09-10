
const basicRouter = {
  path: '/basic',
  component: () => import('@/views/home/index.vue'),
  name: 'basic',
  title: '共用资料',
  icon: 'el-icon-s-grid',
  isMenu:true,
  children: [
    {
      path: '/basic/menu1',
      name: 'menu1',
      title: '基本资料',
      components: {
        employeeSetting: () => import('@/views/basic/menu1/menu1-5/employees.vue'),
        departmentSetting: () => import('@/views/basic/menu1/menu1-1/department.vue'),
        saveDepartment: () => import('@/views/basic/menu1/menu1-1/saveDepartment.vue'),
        updateDepartment: () => import('@/views/basic/menu1/menu1-1/updateDepartment.vue'),
      },
      children: [
        {
          path: '/basic/menu1/menu1-1',
          component: () => import('@/views/basic/menu1/menu1-1/department.vue'),
          name: 'departmentSetting',
          title: '部门设定'
        },
        {
          path: '/basic/menu1/menu1-2',
          component: () => import('@/views/home/index.vue'),
          name: 'projectSetting',
          title: '项目设定'
        },
        {
          path: '/basic/menu1/menu1-3',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'currencySetting',
          title: '币别设定'
        },
        {
          path: '/basic/menu1/menu1-4',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'areaSetting',
          title: '地区设定'
        },
        {
          path: '/basic/menu1/menu1-5',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'educationSetting',
          title: '学历设定'
        },
        {
          path: '/basic/menu1/menu1-6',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'bankSetting',
          title: '银行设定'
        },
        {
          path: '/basic/menu1/menu1-7',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'taxItemsSetting',
          title: '税目设定'
        },
        {
          path: '/basic/menu1/menu1-8',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'invoiceTypeSetting',
          title: '发票类型设定'
        },
        {
          path: '/basic/menu1/menu1-9',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'bankTypeSetting',
          title: '银行类别设定'
        },
        {
          path: '/basic/menu1/menu1-10',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'accountSetting',
          title: '现金账户设定'
        },
        {
          path: '/basic/menu1/menu1-11',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'bankAccountSetting',
          title: '银行存款账户设定'
        },
        {
          path: '/basic/menu1/menu1-12',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'settlementModeSetting',
          title: '结算方式设定'
        },
        {
          path: '/basic/menu1/menu1-13',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'employeeSetting',
          title: '人员主文件设定'
        },
        {
          path: '/basic/menu1/menu1-14',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'RevenueAndExpenseSetting',
          title: '收入费用类别设定'
        },
        {
          path: '/basic/menu1/menu1-15',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'holidaysSetting',
          title: '节假日设定'
        },
        {
          path: '/basic/menu1/menu1-16',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'calendarSetting',
          title: '行事历设定'
        },
        //自定义路由
        {
          path: '/basic/menu1/menu1-1/save',
          name: 'saveDepartment',
          hidden: true
        },
        {
          path: '/basic/menu1/menu1-1/update',
          name: 'updateDepartment',
          hidden: true
        },

      ]
    },
    {
      path: '/basic/menu2',
      name: 'menu2',
      title: '物料资料',
      components: {
        warehouseSetting: () => import('@/views/basic/menu2/menu2-1/cangkuchaxun.vue'),
        measurementUnitSetting: () => import('@/views/basic/menu2/menu2-3/jiliangchaxun.vue'),
        materialCategorySetting: () => import('@/views/basic/menu2/menu2-2/wuliaoleibiechaxun.vue'),
        materialMasterFileSetting: () => import('@/views/basic/menu2/menu2-4/wuliaoweihuchaxun.vue'),
        wuliaoleibietianjia: () => import('@/views/basic/menu2/menu2-2/wuliaoleibietianjia.vue'),
        wuliaoleibiexiugai: () => import('@/views/basic/menu2/menu2-2/wuliaoleibiexiugai.vue'),
        jiliangtianjia: () => import('@/views/basic/menu2/menu2-3/jiliangtianjia.vue'),
        jiliangxiugai: () => import('@/views/basic/menu2/menu2-3/jiliangxiugai.vue'),
        wuliaoweihutianjia: () => import('@/views/basic/menu2/menu2-4/wuliaoweihutianjia.vue'),
        wuliaoweihuxiugai: () => import('@/views/basic/menu2/menu2-4/wuliaoweihuxiugai.vue'),
      },
      children: [
        {
          path: '/basic/menu2/menu2-1',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'warehouseSetting',
          title: '仓库设定'
        },
        {
          path: '/basic/menu2/menu2-2',
          component: () => import('@/views/basic/menu2/menu2-2/wuliaoleibiechaxun.vue'),
          name: 'materialCategorySetting',
          title: '物料类别设定'
        },
        {
          path: '/basic/menu2/menu2-3',
          component: () => import('@/views/basic/menu2/menu2-3/jiliangchaxun.vue'),
          name: 'measurementUnitSetting',
          title: '计量单位设定'
        },
        {
          path: '/basic/menu2/menu2-4',
          component: () => import('@/views/basic/menu2/menu2-4/wuliaoweihuchaxun.vue'),
          name: 'materialMasterFileSetting',
          title: '物料主文件设定'
        },
        {
          path: '/basic/menu2/menu2-5',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'priceOfBatchSetting',
          title: '价格批次设定'
        },
        {
          path: '/basic/menu2/menu2-6',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'listOfMaterials',
          title: '物料组合一览表'
        },
        {
          path: '/basic/menu2/menu2-7',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'originalFactoryNumberQuerySetting',
          title: '原厂编号查询设定'
        },
        {
          path: '/basic/menu2/menu2-8',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'listOfSubcomponentsSetting',
          title: '子件一览表'
        }
        //自定义添加修改页面路由 不进入左侧菜单栏
        ,
        {
          path: '/basic/menu2/menu2-2/add',
          component: () => import('@/views/basic/menu2/menu2-2/wuliaoleibietianjia.vue'),
          name: 'wuliaoleibietianjia',
          title: '添加物料类别',
          hidden: true
        },
        {
          path: '/basic/menu2/menu2-2/update',
          component: () => import('@/views/basic/menu2/menu2-2/wuliaoleibiexiugai.vue'),
          name: 'wuliaoleibiexiugai',
          title: '修改物料类别',
          hidden: true
        }, {
          path: '/basic/menu2/menu2-3/add',
          component: () => import('@/views/basic/menu2/menu2-3/jiliangtianjia.vue'),
          name: 'jiliangtianjia',
          title: '添加计量',
          hidden: true
        }, {
          path: '/basic/menu2/menu2-3/update',
          component: () => import('@/views/basic/menu2/menu2-3/jiliangxiugai.vue'),
          name: 'jiliangxiugai',
          title: '修改计量',
          hidden: true
        }, {
          path: '/basic/menu2/menu2-4/add',
          component: () => import('@/views/basic/menu2/menu2-4/wuliaoweihutianjia.vue'),
          name: 'wuliaoweihutianjia',
          title: '添加物料主文件',
          hidden: true
        }, {
          path: '/basic/menu2/menu2-4/update',
          component: () => import('@/views/basic/menu2/menu2-4/wuliaoweihuxiugai.vue'),
          name: 'wuliaoweihuxiugai',
          title: '修改物料主文件',
          hidden: true
        }
      ]
    },
    {
      path: '/basic/menu3',
      name: 'menu3',
      title: '往来资料',
      components: {
        customerCategorySetting: () => import('@/views/basic/menu3/menu3-1/kehuleibiechaxun.vue'),
        customerMasterFileSetting: () => import('@/views/basic/menu3/menu3-5/kehuziliaochaxun.vue'),
        supplierCategorySetting: () => import('@/views/basic/menu3/menu3-7/gongyingshangleibiechaxun.vue'),
        supplierMasterFileSetting: () => import('@/views/basic/menu3/menu3-8/gongyingshangziliaochaxun.vue'),
        kehuleibietianjia: () => import('@/views/basic/menu3/menu3-1/kehuleibietianjia.vue'),
        kehuleibiexiugai: () => import('@/views/basic/menu3/menu3-1/kehuleibiexiugai.vue'),
        kehuzhuwenjiantianjia: () => import('@/views/basic/menu3/menu3-5/kehuzhuwenjiantianjia.vue'),
        kehuzhuwenjianxiugai: () => import('@/views/basic/menu3/menu3-5/kehuzhuwenjianxiugai.vue'),
        gongyingshangleibietianjia: () => import('@/views/basic/menu3/menu3-7/gongyingshangleibietianjia.vue'),
        gongyingshangleibiexiugai: () => import('@/views/basic/menu3/menu3-7/gongyingshangleibiexiugai.vue'),
        gongyingshangziliaotianjia: () => import('@/views/basic/menu3/menu3-8/gongyingshangziliaotianjia.vue'),
        gongyingshangziliaoxiugai: () => import('@/views/basic/menu3/menu3-8/gongyingshangziliaoxiugai.vue'),
      },
      children: [
        {
          path: '/basic/menu3/menu3-1',
          component: () => import('@/views/basic/menu3/menu3-1/kehuleibiechaxun.vue'),
          name: 'customerCategorySetting',
          title: '客户类别设定'
        },
        {
          path: '/basic/menu3/menu3-2',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'customerLevelSetting',
          title: '客户等级设定'
        },
        {
          path: '/basic/menu3/menu3-3',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'negotiationStageSetting',
          title: '洽谈阶段设定'
        },
        {
          path: '/basic/menu3/menu3-4',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'potentialCustomerMasterFileSetting',
          title: '潜在客户主文件设定'
        },
        {
          path: '/basic/menu3/menu3-5',
          component: () => import('@/views/basic/menu3/menu3-5/kehuziliaochaxun.vue'),
          name: 'customerMasterFileSetting',
          title: '客户主文件设定'
        },
        {
          path: '/basic/menu3/menu3-6',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'qianzaiTozhengshi',
          title: '潜在客户转正式客户设定'
        },
        {
          path: '/basic/menu3/menu3-7',
          component: () => import('@/views/basic/menu3/menu3-7/gongyingshangleibiechaxun.vue'),
          name: 'supplierCategorySetting',
          title: '供应商类别设定'
        },
        {
          path: '/basic/menu3/menu3-8',
          component: () => import('@/views/basic/menu3/menu3-8/gongyingshangziliaochaxun.vue'),
          name: 'supplierMasterFileSetting',
          title: '供应商主文件设定'
        }
        //自定义添加修改页面路由 不进入左侧菜单栏
        ,
        {
          path: '/basic/menu3/menu3-1/add',
          name: 'kehuleibietianjia',
          hidden: true
        },
        {
          path: '/basic/menu3/menu3-1/update',
          name: 'kehuleibiexiugai',
          hidden: true
        },
        {
          path: '/basic/menu3/menu3-5/add',
          name: 'kehuzhuwenjiantianjia',
          hidden: true
        },
        {
          path: '/basic/menu3/menu3-5/update',
          name: 'kehuzhuwenjianxiugai',
          hidden: true
        },
        {
          path: '/basic/menu3/menu3-7/add',
          name: 'gongyingshangleibietianjia',
          hidden: true
        },
        {
          path: '/basic/menu3/menu3-7/update',
          name: 'gongyingshangleibiexiugai',
          hidden: true
        },
        {
          path: '/basic/menu3/menu3-8/add',
          name: 'gongyingshangziliaotianjia',
          hidden: true
        },
        {
          path: '/basic/menu3/menu3-8/update',
          name: 'gongyingshangziliaoxiugai',
          hidden: true
        }
      ]
    },
    {
      path: '/basic/menu4',
      name: 'menu4',
      title: '科目资料',
      components: {
        employee: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
      },
      children: [
        {
          path: '/basic/menu4/menu4-1',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'subjectTypeSetting',
          title: '科目种类设定'
        },
        {
          path: '/basic/menu4/menu4-2',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'subjectCategorySetting',
          title: '科目类别设定'
        },
        {
          path: '/basic/menu4/menu4-3',
          component: () => import('@/views/basic/menu1/menu1-1/employees.vue'),
          name: 'accountingAccountSetting',
          title: '会计科目设定'
        }
      ]
    }
  ]
}
export default basicRouter