<template>
  <div id="app">
    <Form/>
    <Display/>
  </div>
</template>

<script>
import Form from './components/form.vue'
import Display from './components/display.vue'
import { store } from './store/store'

export default {
  name: 'app',
  store,
  components: {
    Form,
    Display
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
