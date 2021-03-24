import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/StartLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/runs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Runs/Index.vue') }
    ]
  },
  {
    path: '/runs',
    component: () => import('layouts/RunEditLayout.vue'),
    children: [
      { path: 'create', component: () => import('pages/Runs/Create.vue') },
      { path: 'edit', component: () => import('pages/Runs/Edit.vue') }
    ]
  },
  {
    path: '/setup',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Setup/Index.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
