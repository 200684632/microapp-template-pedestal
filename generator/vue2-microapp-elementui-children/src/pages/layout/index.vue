<template>
  <div class="app_main">
    <el-container>
      <el-header><basic-sidebar mode="horizontal"></basic-sidebar></el-header>
      <el-container>
        <el-aside width="200px">
          <basic-sidebar></basic-sidebar>
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
  .content {
    height: calc(100vh - 100px);
    .el-card {
      height: 100%;
      .el-card__body {
        height: calc(100% - 100px);
        overflow-y: auto;
      }
    }
    .el-pagination {
      text-align: center;
      margin: 12px 0 0 0;
    }
  }
}
</style>
