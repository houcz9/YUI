<template>
	<div class="list">
		<div class="g-hd">
			<y-header title="选项卡">
				<div slot="left" class="m-nav-btn"  @click="back">
					<i class="ydjy-arrow"></i>
				</div>
			</y-header>
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
	import Header from '../../../components/components/Header/Header.vue'
	export default {
		components: {
			'y-header': Header /*注册自定义标签*/
		},
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
				console.log(data)
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