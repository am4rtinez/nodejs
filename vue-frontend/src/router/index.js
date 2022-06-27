import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  { 
		path: "/", 
		name: "Home",
		component: Home 
	},
	{ 
		path: "/about", 
		name: "About",
		component: About 
	},
  { 
		path: "/dashboard",
		name: "Dashboard",
		component: Dashboard },
];

const history = createWebHistory();

const router = createRouter({
	history,
	routes,
});

export default router