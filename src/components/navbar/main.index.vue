<template>
	<div class="list">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="back">
					<i class="ydjy-arrow"></i>
				</div>
				<h1 class="s-fc-we">导航栏</h1>
			</div>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				基础版
			</div>
			<div class="m-nav s-bgc-ess">
				<h1 class="s-fc-we">导航栏</h1>
			</div>
			<div class="u-tips">
				超出固定宽度部分...
			</div>
			<div class="m-nav s-bgc-ess">
				<h1 class="s-fc-we f-of1">这是段内容很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长</h1>
			</div>
			<div class="u-tips">
				带返回箭头
			</div>
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="back">
					<i class="ydjy-arrow"></i>
				</div>
				<h1 class="s-fc-we">导航栏</h1>
			</div>
			<div class="u-tips">
				右侧图标
			</div>
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="back">
					<i class="ydjy-arrow"></i>
				</div>
				<div class="m-nav-btn f-pr s-fc-we">
					<i class="ydjy-share"></i>
				</div>
				<h1 class="s-fc-we">导航栏</h1>
			</div>
			<div class="u-tips">
				右侧文字
			</div>
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="back">
					<i class="ydjy-arrow"></i>
				</div>
				<div class="m-nav-btn f-pr s-fc-we">
					分享
				</div>
				<h1 class="s-fc-we f-of1">导航栏</h1>
			</div>
			
			<div class="u-tips">
				右侧双图标
			</div>
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="back">
					<i class="ydjy-arrow"></i>
				</div>
				<div class="m-nav-btn f-pr s-fc-we">
					<i class="ydjy-share"></i>
				</div>
				<div class="m-nav-btn m-nav-btn2 s-fc-we">
					<i class="ydjy-love"></i>
				</div>
				<h1 class="s-fc-we f-of1">导航栏</h1>
			</div>
			<div class="u-tips">
				选项卡导航栏
			</div>
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-tab">
					<a class="f-ib s-fc-we" :class="active=='听课'?'z-sel':''" @click="active='听课'">听课</a>
					<a class="f-ib s-fc-we" :class="active=='检查'?'z-sel':''" @click="active='检查'">检查</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active:'听课'
			}
		},
		methods:{
			back:function(){
				this.$router.goBack();
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>