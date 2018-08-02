const menuObj = {
  menus: [
    {
      menuName: "海报",
      sub:[
        {
          menuName:"海报管理",
          path:"/poster/manager"
        },
        {
          menuName:"认领海报管理",
          path:"/poster/claimManager"
        },
        {
          menuName:"海报模板管理",
          path:"/posterTemplate/manager"
        },


      ]
    },
    {
      menuName: "商品管理",
      sub:[
        {
          menuName:"商品列表-客户经理",
          path:"/product/saleManager"
        },
        {
          menuName:"商品列表-运营管理",
          path:"/product/manager"
        },
        {
          menuName:"商品分组",
          path:"/product/category"
        },
        {
          menuName:"商品同步",
          path:"/product/synchronize"
        },
        {
          menuName: "商品详情-模板管理",
          path:"/product/detailTemplateManager"
        },
        {
          menuName: "商品表单-模板管理",
          path:"/product/formTemplateManager"
        },

      ]
    },

    {
      menuName: "二维码管理",
      sub:[
        {
          menuName:"模板管理",
          path:"/qrcode/template/list"
        },{
          menuName:"认领模板管理",
          path:"/qrcode/template/claimManager"
        },
        {
          menuName:"二维码查询",
          path:"/qrcode/qrcode/list"
        }/*,
        {
          menuName:"统计分析",
          path:"/qrcode/statics"
        },
        {
          menuName:"统计分析-二维码扫描统计",
          path:"/qrcode/staticsScanning"
        },
        {
          menuName:"统计分析-接口调用统计",
          path:"/qrcode/staticsInterface"
        }*/
      ]
    },
    {
      menuName: "页面管理",
      path:"/page/manager"
    },
    {
      menuName: "资源管理",
      path:"/ResourcesManager"
    },
    {
      menuName: "我的资源",
      path:"/UserResources"
    }
  ]
}
export default menuObj
