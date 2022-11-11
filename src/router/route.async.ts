// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const metaRouters = import.meta.glob('@/post/*.md', { eager: true }) as any;

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/list',
    name: 'list',
    meta: {
      title: 'Template configuration process',
      icon: '',
    },
    component: () => import('@/views/list/index.vue'),
  },
  {
    path: '/project',
    name: 'project',
    meta: {
      title: 'Template configuration process',
      icon: '',
    },
    component: () => import('@/views/project/index.vue'),
  },
];

const routeList = Object.keys(metaRouters);

routeList.forEach((item) => {
  asyncRoutes.push({
    // eslint-disable-next-line no-underscore-dangle
    path: `/${metaRouters[item].default.__name}`,
    // eslint-disable-next-line no-underscore-dangle
    name: metaRouters[item].default.__name,
    meta: {
      title: metaRouters[item].title,
      icon: '',
    },
    component: () => import('@/views/example/MarkdownPage.vue'),
  });
});

export default asyncRoutes;
