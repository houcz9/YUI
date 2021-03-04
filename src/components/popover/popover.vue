<template>
	<div class="list">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-box f-pl f-flex f-fl-cen s-fc-we">
					<div class="m-nav-btn" @click="$router.goBack()">
						<i class="ydjy-arrow"></i>
					</div>
				</div>
				<h1 class="f-of1 s-fc-we">移动教研定制弹窗</h1>
			</div>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				居中弹出
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" @click="popoverMiddle=true">
					<div class="f-flex">
						<div class="m-lst-tle">
							居中弹出
						</div>
					</div>
				</div>
			</div>
			<div class="u-tips">
				底部弹出
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" @click="popoverBottom=true">
					<div class="f-flex">
						<div class="m-lst-tle">
							底部弹出
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!--居中弹出-->
		<y-popover v-model="popoverMiddle"> 
			<div class="m-pop-ct-del">
				<p class="f-pad-1-half f-fs-esm">这是居中弹出框，始终显示在屏幕中间</p>
			</div>
		</y-popover>
		<!--底部弹出-->
		<y-popover v-model="popoverBottom" v-on:click-event="doSth" title="底部弹出" handle="完成" position="bottom">
			<div class="m-pop-ct-del">
				<div class="u-sha f-flex">
					<a class="f-fl-dv s-fc-ass">
						<span class="ydjy-dialog-3"></span>
						<p>abc</p>
					</a>
					<a class="f-fl-dv s-fc-ess">
						<span class="ydjy-me-3"></span>
						<p>abc</p>
					</a>
					<a class="f-fl-dv s-fc-gr">
						<span class="ydjy-ydjy"></span>
						<p>abc</p>
					</a>
				</div>	
			</div>
		</y-popover>
	</div>
</template>

<script>
//	import Popover from '../../../components/components/Popover/Popover.vue'
	export default {
//		components: {
//			'y-popover': Popover /*注册自定义标签*/
//		},
		data() {
			return {
				popoverArrows: false,
				popoverMiddle:false,
				popoverBottom:false,
				coordValue:'',//点击位置坐标
			}
		},
		mounted() {

		},
		methods: {
			doSth: function(){
		        console.log('你点击了组件的click:btnClickEvent');
		    },
			tableScale: function(el) {
				this.popoverArrows = true;
				//点击位置坐标
				this.coordValue=JSON.stringify(el.target.getBoundingClientRect());
			}
		}
	}
</script>

<style scoped>

</style>