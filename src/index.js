import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App.vue';
import Container from './components/Container.vue';
import PageTop from './components/PageTop.vue';
import PageFoo from './components/PageFoo.vue';
import PageNotFound from './components/PageNotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Container,
      children: [
        {
          path: '',
          component: PageTop,
        },
        {
          path: '/foo',
          component: PageFoo,
        },
        {
          path: '*',
          component: PageNotFound,
        },
      ],
    },
  ],
});

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');
});
