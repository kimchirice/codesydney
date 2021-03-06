import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Friends from '../views/Friends.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/friends',
    name: 'friends',
    component: Friends,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
