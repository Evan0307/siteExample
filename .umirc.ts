import { defineConfig } from 'umi';

export default defineConfig({
  base: '/siteExample/',
  publicPath: '/siteExample/',
  title: 'Frontend Blog',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
