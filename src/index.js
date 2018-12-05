import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './components/App.vue';
import Container from './components/Container.vue';
import PageTop from './components/PageTop.vue';
import PageFoo from './components/PageFoo.vue';
import PageNotFound from './components/PageNotFound.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
  state: {count: 0},
  getters: {
    message: state => `Count is ${state.count} !`,
  },
  mutations: {
    increment(state, {value}) {
      state.count += value;
    },
  },
  actions: {
    async asyncIncrement({commit}, {value}) {
      commit('increment', {
        value: await Promise.resolve(value),
      });
    },
  },
});

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
    store,
    render: h => h(App),
  }).$mount('#app');
});
