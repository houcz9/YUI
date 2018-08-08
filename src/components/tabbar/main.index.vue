<template>
	<div class="list">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="back">
					<i class="ydjy-arrow"></i>
				</div>
				<h1 class="s-fc-we">选项卡</h1>
			</div>
		</div>
		<div class="g-bd">
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(list,index) in listData" :key="index" @click="goDetails(list)">
					<div class="m-lst-tle f-fs-sm">
						{{list}}
					</div>
					<div class="m-lst-arr">
						<i class="ydjy-arrow"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				listData: [
					'顶部选项卡',
					'底部选项卡',
				],
			}
		},
		mounted() {

		},
		methods: {
			goDetails: function(data) {
				var navigate;
				switch(data) {
					case '顶部选项卡':
						navigate = 'navbarDetails';
						break;
					case '底部选项卡':
						navigate = 'tabbarDetails';
						break;
				}
				this.$router.push({
					name: navigate
				})
			},
			back: function() {
				this.$router.goBack();
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>