import { createRouter, createWebHashHistory, RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router';
type _ScrollPositionNormalized = {
  behavior?: ScrollOptions['behavior'];
  left: number;
  top: number;
};
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'List',
    component: () => import('../List'),
    meta: {keepAlive: true},
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../Detail'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, savedPosition: _ScrollPositionNormalized | null) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    }
  },
})