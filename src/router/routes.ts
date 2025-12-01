import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ButtonPage.vue') },
      { path: 'radio', component: () => import('pages/RadioInputPage.vue') },
      { path: 'tab', component: () => import('pages/TabPage.vue') },
      { path: 'itemList', component: () => import('pages/ItemListPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
