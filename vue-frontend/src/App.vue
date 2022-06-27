<script>
	import Sidebar from './components/sidebar/Sidebar.vue'
	import { sidebarWidth } from './components/sidebar/state'
	export default {
		components: { Sidebar },
		setup () {
			return { sidebarWidth }
		}
	}
</script>

<template>
	<Sidebar />
	<div class="content" :style="{ 'margin-left': sidebarWidth }">
		<router-view />
	</div>
</template>

<style>
#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
	box-sizing: border-box;
}

#logo{
	width: 40%;
}

</style>
