export const front_routes = [
  {
    path: '/',
    component: () => import('@/zems/Front/Layout/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/zems/Front/Pages/HomePage.vue'),
      },
      {
        path: 'services',
        name: 'services',
        component: () => import('@/zems/Front/Pages/ServicesPage.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/zems/Front/Pages/AboutPage.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/zems/Front/Pages/ContactPage.vue'),
      },
    ],
  },
]
