import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Dashboard from "../views/Dashboard.vue";
import Contact from "../views/Contact.vue";
import MapVue from "../views/Map.vue";

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
		component: Dashboard 
	},
	{ 
		path: "/contact",
		name: "Contact",
		component: Contact 
	},
	{ 
		path: "/map",
		name: "Map",
		component: MapVue 
	},
];

const history = createWebHistory();

const router = createRouter({
	history,
	routes,
});

export default router