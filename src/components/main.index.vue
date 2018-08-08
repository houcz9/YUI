<template>
	<div class="index">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<h1 class="s-fc-we">YUI列表</h1>
			</div>
		</div>
		<div class="g-bd">
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(list,index) in listData" :key="index"  @click="goDetails(list)">
					<div class="m-lst-tle">
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
				listData:[
					'导航栏',
					'选项卡',
					'徽章/角标',
					'表单',
					'按钮',
					'图标',
					'列表',
					'网格',
					'弹出菜单',
				]
			}
		},
		created:function(){
			
		},
		mounted:function(){
			
		},
		methods:{
			goDetails:function(data){
				var navigate;
				switch(data){
					case '导航栏':
						navigate='navbar';
						break;
					case '选项卡':
						navigate='tabbar';
						break;
					case '徽章/角标':
						navigate='label';
						break;
					case '按钮':
						navigate='button';
						break;
					case '列表':
						navigate='list';
						break;
					case '网格':
						navigate='grid';
						break;
					case '表单':
						navigate='form';
						break;
					case '弹出菜单':
						navigate='popover';
						break;
					default:
						navigate='icon';
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