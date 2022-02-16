<template>
  <div id="app">
    <micro-app name="son1" :url="url" baseroute="cc" destory @datachange="handleDataChange"></micro-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      url: 'http://192.168.10.70:1779/'
    }
  },
  computed: {
  },
  created() {
    microApp.setData('son1', { data: getToken(), routerName: 'page2' })
  },
  methods: {
    handleDataChange(data) {
      holdChildren(data.detail.data)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
