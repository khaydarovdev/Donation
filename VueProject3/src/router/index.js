import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import DonationView from '../views/DonationView.vue';
import BlogView from '../views/BlogView.vue';
import PagesView from '../views/PagesView.vue'
import ContactView from '../views/ContactView.vue'
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
		  path: '/',
		  name: 'home',
		  component: HomeView
		},
		{
		  path: '/about',
		  name: 'about',
		  component: AboutView,
		},
    {
      path: '/donation',
      name: 'donation',
      component: DonationView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/pages',
      name: 'pages',
      component: PagesView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
	],
});

export default router;
