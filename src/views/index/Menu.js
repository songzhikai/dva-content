export const menus = [
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
