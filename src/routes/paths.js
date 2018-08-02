export default [
  { path: '/', component: () => import('../views/pages/home_page')}, // 主页面
  { path: '/cc/manager/poster', component: () => import('../views/pages/home_page') }, // 主页面
  { path: '/cc/manager/detail', component: () => import('../views/pages/home_page_detail') },
  { path: '/cc/manager/phone', component: () => import('../views/pages/phone_page') },
];
