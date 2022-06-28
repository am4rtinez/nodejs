<script>
	import SidebarLink from './SidebarLink.vue'
	import { collapsed, toggleSidebar, sidebarWidth } from './state'
	export default {
		props: {},
		components: {  SidebarLink },
		setup() {
			return { collapsed, toggleSidebar, sidebarWidth }
		}
	}
</script>

<template>
	<aside class="sidebar" :style="{ width: sidebarWidth }">
		<img src="../../assets/logo.png" alt="logo vue">
		<h1>
			<span v-if="!collapsed">Brand Name</span>
		</h1>
		<h3>Menu</h3>
		<SidebarLink to="/" icon="fa-solid fa-home">Home</SidebarLink>
		<SidebarLink to="/dashboard" icon="fa-solid fa-columns">Dashboard</SidebarLink>
		<SidebarLink to="/about" icon="fa-solid fa-chart-bar">About</SidebarLink>
		<SidebarLink to="/contact" icon="fa-solid fa-envelope">Contacto</SidebarLink>

		<span class="collapse-icon" :class="{ 'rotate-180' : collapsed }" @click="toggleSidebar"> 
			<fa icon="fa-solid fa-angle-double-left" />
		</span>
	</aside>
</template>

<style>
	
</style>

<style scoped>
	.sidebar {
		color: white;
		background-color: var(--sidebar-bg);
		float: left;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		bottom: 0;
		padding: 0.5em;
		transition: 0.3s ease;
		display: flex;
		flex-direction: column;
	}
	.sidebar h1 {
		height: 2.5em;
	}
	.collapse-icon {
		position: absolute;
		bottom: 0;
		padding: 0.75em;
		color: rgba(255, 255, 255, 0.7);
		transition: 0.2s linear;
	}

	.collapse-icon:hover {
		color: var(--sidebar-color-item-hover);
	}
	.rotate-180 {
		transform: rotate(180deg);
		transition: 0.2s linear;
	}

	h3 {
		transition: opacity 0.3s ease-in-out;
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
</style>