export const menus = [{
      menuName: "海报",
      key: 'poster',
      sub:[
        {
          menuName:"海报管理",
          path:"/cc/manager/poster",
          key: 'posterManager',
        },
        {
          menuName:"认领海报管理",
          path:"/cc/manager/claimPoster",
          key: 'claimPosterManager'
        },
        {
          menuName:"海报模板管理",
          path:"/cc/manager/posterTemplate",
          key:'posterTemplateManager'
        },
      ]
    },
    {
      menuName: "商品管理",
      key: 'productManager',
      sub:[
        {
          menuName: "商品详情-模板管理",
          path:"/cc/manager/productDetailTemplate",
          key: 'productDetailManager',
        },
        {
          menuName: "商品表单-模板管理",
          path:"/cc/manager/productFormTemplate",
          key: 'productFormManager'
        },

      ]
    },

    {
      menuName: "页面管理",
      path:"/cc/manager/page",
      key: 'pageManager'
    },
    {
      menuName: "资源管理",
      path:"/cc/manager/resource",
      key: 'resourceManager'
    },
]
