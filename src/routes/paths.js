export default [
  { path: '/', component: () => import('../views/pages/HomePage')}, // 主页面
  { path: '/cc/manager/productDetailTemplate', component: () => import('../views/pages/product/ProductDetailTemplateManager') }, // 主页面
];
