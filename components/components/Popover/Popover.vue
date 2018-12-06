<template>
	<transition :name="currentTransition">
		<div class="m-pop" v-show="currentValue" :class="[position ? 'm-pop-' + position : '']">
			<div ref="popover" class="m-pop-ct" :class="position==='middle' ? 'm-pop-cnt' : ''">
				<div class="f-flex f-fl-bet f-lib f-pad-1-half" v-if="position==='bottom'">
					<span class="m-pop-tx" v-text="title"></span>
					<span class="m-pop-tx s-fc-ess" v-on:tap="btnClickEvent" v-text="handle" v-if="handle"></span>
				</div>
				<slot></slot>
			</div>
			<div class="m-pop-bj" @click="currentValue=false"></div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'y-popover',
		props: {
			handle:String,
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