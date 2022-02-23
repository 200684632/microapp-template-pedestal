<template>
  <div class="app_main">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          左侧
        </el-aside>
        <el-main class="layout_main">
          <div class="content">
            <el-card>
              <div slot="header">
                {{ $route.meta.title }}
              </div>
              <router-view />
            </el-card>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  watch: {
  },
  created() {

  },
  methods: {},
  computed: {
  },
};
</script>
<style lang="scss">
.app_main {
  .el-aside {
    height: calc(100vh - 60px);
    overflow-y: auto;
  }
  .el-main.layout_main {
    height: calc(100vh - 60px);
    background: #f9f9f9;
    padding: 20px;
  }
}
</style>
