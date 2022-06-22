<script>

	import {collapsed, toggleSidebar, sidebarWidth} from './state'
	export default {
		props: {},
		setup() {
			return { collapsed, toggleSidebar, sidebarWidth }
		}
	}
</script>

<template>
	<div class="sidebar" :style="{ width: sidebarWidth}">
		<h1>
			
		</h1>
		<span class="collapse-icon" :class="{ 'rotate-180' : collapsed }" @click="toggleSidebar">
			<fa icon="fa-solid fa-angle-double-left" />
		</span>
	</div>
</template>

<style>
:root {
	--sidebar-bg-color: #2f855a;
	--sidebar-item-hover: #38a169;
	--sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
	color: white;
	background: var(--sidebar-bg-color);

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
.collapse-icon {
	position: absolute;
	bottom: 0;
	padding: 0.75em;

	color: white;
	transition: 0.2s linear;
}

.rotate-180 {
	transform: rotate(180deg);
	transition: 0.2s linear;
}
</style>