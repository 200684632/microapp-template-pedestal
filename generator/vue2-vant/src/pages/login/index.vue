<template>
	<div class="login-container_web" :style='`background-image: url("${$route.meta.bgUrl}")`'>
		<div class="bg_login"></div>
		<div class="login-weaper animated bounceInDown" :style='`background: #ffffff url("${$route.meta.centerUrl}") no-repeat;`'>
			<div class="login-main login-new">
				<div>
					<div class="login-main-right">
						<div class="img" :style='`background: url("${$route.meta.icon}") no-repeat;background-size: 100% 100%;`'/>
					</div>
					<basic-login></basic-login>
				</div>
			</div>
		</div>
		<div class="copyright">
			建议使用360浏览器(极速模式)，Chrome浏览器，Edge浏览器
			<br />&copy; 2020 朝阳区房管局
		</div>
	</div>
</template>

<script>

  export default {
    data() {
			return {}
		},
    created() {
    },
    mounted() {
    },
    computed: {},
    props: [],
    methods: {},
  };
</script>

<style lang="scss">
  @import "./login.scss";
</style>
