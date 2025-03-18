import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import GuestForm from '../views/GuestForm.vue';
import EventInfo from '../views/EventInfo.vue';

const routes = [
  { path: '/', component: GuestForm },
  { path: '/home', component: Home },
  { path: '/guest-form', component: GuestForm },
  { path: '/event-info', component: EventInfo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
