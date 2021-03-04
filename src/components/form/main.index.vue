<template>
	<div class="grid">
		<div class="g-hd">
			<y-header title="表单">
				<div slot="left" class="m-nav-btn" @click="$router.goBack()">
					<i class="ydjy-arrow"></i>
				</div>
			</y-header>
		</div>
		<div class="g-bd">
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(list,index) in listData" :key="index"  @click="goDetails(list)">
					<div class="m-lst-tle f-fs-esm">
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
					'单选框',
					'复选框',
					'输入框',
					'滑块',
					'图片上传/展示',
				]
			}
		},
		mounted() {

		},
		methods: {
			goDetails:function(data){
				var navigate;
				switch(data){
					case '单选框':
						navigate='formRadio';
						break;
					case '复选框':
						navigate='formCheck';
						break;
					case '输入框':
						navigate='formInput';
						break;
					case '滑块':
						navigate='formSlider';
						break;
					default:
						navigate='formImages';
				}
				this.$router.push({
					name:navigate
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>