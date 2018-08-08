<template>
	<div id="app">
		<transition :name="transitionName">
			<router-view/>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				transitionName: 'yui-right'
			}
		},
		watch: {　　　
			'$route' (to, from) {　　　　
				let isBack = this.$router.isBack //  监听路由变化时的状态为前进还是后退
				if(isBack) {　　　　　　　　
					this.transitionName = 'yui-left'　　　　　　
				} else {　　　　　　
					this.transitionName = 'yui-right'　　　　　
				}　　
				this.$router.isBack = false　　
			}　
		}
	}
</script>

<style>
	.yui-right-enter-active,
	.yui-left-enter-active {
		transition: all .3s ease;
		transform: translateX(100%);
		position: absolute;
		top: 0;
		bottom:0;
		background-color:#f8f8f8;
		width: 100%;
	}
	.yui-left-enter-active {
		transform: translateX(-100%);
	}
	.yui-right-enter-to,
	.yui-left-enter-to {
		transform: translateX(0);
	}
	.yui-right-leave-active,
	.yui-left-leave-active {
		transition: all .3s ease;
		transform: translateX(0);
	}
</style>