<template>
	<div class="list">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="$router.goBack()">
					<i class="ydjy-arrow"></i>
				</div>
				<h1 class="s-fc-we">底部选项卡</h1>
			</div>
		</div>
		<div class="g-mn">
			<div class="m-bar f-flex">
				<a class="f-fl-dv" v-for="(bar,index) in tabbar" :key="index" :class="active==bar.label?'z-sel':''" @click="active=bar.label">
					<span>
						<i :class="bar.icon"></i>
					</span>
					<p>{{bar.label}}</p>
				</a>
			</div>
		</div>
		<div class="g-bd">
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabbar:[{
					label:'发现',
					icon:'ydjy-find'
				},{
					label:'教研',
					icon:'ydjy-ydjy'
				},{
					label:'共读',
					icon:'ydjy-file-5'
				},{
					label:'圈子',
					icon:'ydjy-circle'
				},{
					label:'我的',
					icon:'ydjy-me-2'
				}],
				active:'发现'
			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>