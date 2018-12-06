<template>
	<transition :name="currentTransition">
		<div class="m-pop" v-show="currentValue" :class="[position ? 'm-pop-' + position : '']">
			<div ref="popover" class="m-pop-ct" :class="position==='middle' ? 'm-pop-cnt' : ''">
				<div class="f-flex f-fl-bet f-lib f-pad-1-half" v-if="position==='bottom'">
					<span class="m-pop-tx" v-text="title"></span>
					<span class="m-pop-tx s-fc-ess" v-on:click="btnClickEvent">完成</span>
				</div>
				<slot></slot>
				<div class="m-pop-arr" v-if="!position"></div>
			</div>
			<div class="m-pop-bj" @click="currentValue=false"></div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'y-popup',
		props: {
			coord: String,
			title: String,
			position: {
				type: String,
				default: ''
			},
			value: Boolean
		},
		data() {
			return {
				currentValue: false,
				currentTransition: "popup-fade"
			};
		},
		watch: {
			currentValue(val) {
				this.$emit('input', val);
			},
			value(val) {
				this.currentValue = val;
			},
			coord(val){
				this.btnclickCoord(val);
			}
		},
		mounted() {
			if(this.value) {
				this.currentValue = true;
			}
		},
		methods: { //绑定事件的关键代码
			btnClickEvent: function() {
				this.currentValue = false;
				this.$emit('click-event'); //关键代码父组件触发自定义事件
			},
			//定位弹出框位置
			btnclickCoord:function(val){
				this.$nextTick(function() {
					var bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
					var bodyWidth = document.documentElement.clientWidth || document.body.clientWidth;
					var popover=this.$refs.popover;
					var rectEl=JSON.parse(val);
					var distHeight = rectEl.top + popover.offsetHeight;
					var distLeft = rectEl.left + popover.offsetWidth;
					if((bodyHeight - distHeight) < 30) {
						popover.style.top = rectEl.top - popover.offsetHeight - 10 + "px";
						popover.lastElementChild.style.top="auto";
						popover.lastElementChild.style.bottom="-6px";
					} else {
						popover.style.top = rectEl.top + 30 + "px";
						popover.lastElementChild.style.bottom="auto";
						popover.lastElementChild.style.top="-6px";
					}
					if(distLeft > bodyWidth) {
						popover.style.left = bodyWidth - popover.offsetWidth - 10 + "px";
						popover.lastElementChild.style.left='auto';
						popover.lastElementChild.style.right='4%';
					} else {
						if((rectEl.width/2 + rectEl.left - (popover.offsetWidth/2)) < 0){
							popover.style.left = rectEl.left + "px";
							popover.lastElementChild.style.left='4%';
						}else{
							popover.style.left = rectEl.width/2 + rectEl.left - (popover.offsetWidth/2) + "px";
							popover.lastElementChild.style.left='46%';
						}
					}
				})
			}
		}
	}
</script>
<style>
	.popup-fade-enter,
	.popup-fade-leave-active {
		opacity: 0;
	}
	
	.m-pop.m-pop-bottom .m-pop-ct {
		animation: popOpen 0.5s;
		-webkit-animation: popOpen 0.5s;
	}
	
	@-webkit-keyframes popOpen {
		0% {
			-webkit-transform: translateY(50%);
			transform: translateY(50%);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}
	
	@keyframes popOpen {
		0% {
			-webkit-transform: translateY(50%);
			transform: translateY(50%);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>