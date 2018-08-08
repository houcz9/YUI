<template>
	<div class="m-drag" ref="drag" :style="slideEffect" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
		<slot name='dragList'></slot>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'drag',
		data() {
			return {
				pageX: 0,
				slideEffect:''
			}
		},
		created() {
			
		},
		methods: {
			touchStart(e) { //触摸事件
				this.pageX = e.targetTouches[0].pageX
				console.log("滑动开始")
			},
			touchMove(e) { //触摸滑动事件
				let diffX = e.targetTouches[0].pageX - this.pageX;
                this.slideEffect = 'transform:translateX('+diffX+'px)';
//				console.log("滑动中")
				console.log(diffX)
//				console.log(this.$parent.$refs.drag.offsetWidth)
			},
			touchEnd(e) {
				console.log("滑动结束")
			}
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
</style>