<script>
	import Sidebar from './components/sidebar/Sidebar.vue'
	export default {
		components: { Sidebar }
	}
</script>

<template>
	<Sidebar />
	<div>
		<router-view />
	</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#logo{
	width: 40%;
}
</style>
