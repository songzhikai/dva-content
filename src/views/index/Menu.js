export const menus = [
    {
      menuName: "商品管理",
      key: 'productManager',
      sub:[
        {
          menuName: "商品详情-模板管理",
          path:"/cc/manager/productDetailTemplate",
          key: '/cc/manager/productDetailTemplate',
        },
        {
          menuName: "商品表单-模板管理",
          path:"/cc/manager/productFormTemplate",
          key: '/cc/manager/productFormTemplate'
        },

      ]
    },
    {
      menuName: "页面管理",
      path:"/cc/manager/page",
      key: '/cc/manager/page'
    },
    {
      menuName: "资源管理",
      path:"/cc/manager/resource",
      key: '/cc/manager/resource'
    },
]
