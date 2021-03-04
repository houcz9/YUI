<template>
	<div class="list">
		<div class="g-hd">
			<y-header title="按钮">
				<div slot="left" class="m-nav-btn" @click="$router.goBack()">
					<i class="ydjy-arrow"></i>
				</div>
			</y-header>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				有底色
			</div>
			<div class="f-pad-1-half s-bgc-we">
				<button type="button" class="u-btn">默认</button>
				<button type="button" class="u-btn u-btn-ess">主要</button>
				<button type="button" class="u-btn u-btn-suc">成功</button>
				<button type="button" class="u-btn u-btn-war">警告</button>
			</div>
			<div class="u-tips">
				浅底色
			</div>
			<div class="f-pad-1-half s-bgc-we">
				<button type="button" class="u-btn u-btn-sha">默认</button>
				<button type="button" class="u-btn u-btn-ess u-btn-sha">主要</button>
				<button type="button" class="u-btn u-btn-suc u-btn-sha">成功</button>
				<button type="button" class="u-btn u-btn-war u-btn-sha">警告</button>
			</div>
			<div class="u-tips">
				无底色
			</div>
			<div class="f-pad-1-half s-bgc-we">
				<button type="button" class="u-btn u-btn-not">默认</button>
				<button type="button" class="u-btn u-btn-ess u-btn-not">主要</button>
				<button type="button" class="u-btn u-btn-suc u-btn-not">成功</button>
				<button type="button" class="u-btn u-btn-war u-btn-not">警告</button>
			</div>
			<div class="u-tips">
				圆角
			</div>
			<div class="f-pad-1-half s-bgc-we">
				<button type="button" class="u-btn u-btn-rad">默认</button>
				<button type="button" class="u-btn u-btn-ess u-btn-rad">主要</button>
				<button type="button" class="u-btn u-btn-suc u-btn-rad">成功</button>
				<button type="button" class="u-btn u-btn-war u-btn-rad">警告</button>
			</div>
			<div class="u-tips">
				图标
			</div>
			<div class="f-pad-1-half s-bgc-we">
				<button type="button" class="u-btn">
					<i class="ydjy-lecture"></i>
					<span>图标</span>
				</button>
				<button type="button" class="u-btn u-btn-ess">
					<i class="ydjy-lecture"></i>
					<span>图标</span>
				</button>
				<button type="button" class="u-btn u-btn-suc">
					<i class="ydjy-lecture"></i>
					<span>图标</span>
				</button>
				<button type="button" class="u-btn u-btn-war">
					<i class="ydjy-lecture"></i>
					<span>图标</span>
				</button>
			</div>
			<div class="u-tips">
				禁用
			</div>
			<div class="f-pad-1-half s-bgc-we">
				<button type="button" disabled="disabled" class="u-btn z-dis">默认</button>
				<button type="button" disabled="disabled" class="u-btn u-btn-ess z-dis">主要</button>
				<button type="button" disabled="disabled" class="u-btn u-btn-suc z-dis">成功</button>
				<button type="button" disabled="disabled" class="u-btn u-btn-war z-dis">警告</button>
			</div>
			<div class="u-tips">
				块级
			</div>
			<div class="f-pad-1-half s-bgc-we">
				<button type="button" class="u-btn u-btn-box">默认</button>
				<button type="button" class="u-btn u-btn-box u-btn-ess">主要</button>
				<button type="button" class="u-btn u-btn-box u-btn-suc">成功</button>
				<button type="button" class="u-btn u-btn-box u-btn-war">警告</button>
			</div>
			<div class="u-tips">
				不同尺寸
			</div>
			<div class="f-pad-1-half s-bgc-we">
				<button type="button" class="u-btn u-btn-max">大型按钮</button>
				<button type="button" class="u-btn u-btn-mid">中型按钮</button>
				<button type="button" class="u-btn">默认按钮</button>
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