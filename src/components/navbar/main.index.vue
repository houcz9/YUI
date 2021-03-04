<template>
	<div class="list">
		<div class="g-hd">
			<y-header title="导航栏">
				<div slot="left" class="m-nav-btn"  @click="back">
					<i class="ydjy-arrow"></i>
				</div>
			</y-header>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				基础版
			</div>
			<y-header title="导航栏"></y-header>
			<div class="u-tips">
				超出固定宽度部分...
			</div>
			<y-header title="这是段内容很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长">
				<div slot="left" class="m-nav-btn"  @click="back">
					<i class="ydjy-arrow"></i>
				</div>
				<div slot="right" class="m-nav-btn">
					<i class="ydjy-share"></i>
				</div>
			</y-header>
			<div class="u-tips">
				带返回箭头
			</div>
			<y-header title="导航栏">
				<div slot="left" class="m-nav-btn"  @click="back">
					<i class="ydjy-arrow"></i>
				</div>
			</y-header>
			<div class="u-tips">
				右侧图标
			</div>
			<y-header title="导航栏">
				<div slot="left" class="m-nav-btn"  @click="back">
					<i class="ydjy-arrow"></i>
				</div>
				<div slot="right" class="m-nav-btn">
					<i class="ydjy-share"></i>
				</div>
			</y-header>
			<div class="u-tips">
				右侧文字
			</div>
			<y-header title="导航栏">
				<div slot="left" class="m-nav-btn"  @click="back">
					<i class="ydjy-arrow"></i>
				</div>
				<div slot="right" class="m-nav-btn">
					分享
				</div>
			</y-header>
			<div class="u-tips">
				右侧双图标
			</div>
			<y-header title="导航栏">
				<div slot="left" class="m-nav-btn"  @click="back">
					<i class="ydjy-arrow"></i>
				</div>
				<div slot="right" class="m-nav-btn">
					<i class="ydjy-share"></i>
				</div>
				<div slot="right" class="m-nav-btn">
					<i class="ydjy-love"></i>
				</div>
			</y-header>
			
			<div class="u-tips">
				选项卡导航栏
			</div>
			<y-header>
				<div class="m-nav-tab" slot="tab">
					<a class="f-ib s-fc-we" :class="active=='听课'?'z-sel':''" @click="active='听课'">听课</a>
					<a class="f-ib s-fc-we" :class="active=='检查'?'z-sel':''" @click="active='检查'">检查</a>
				</div>
			</y-header>
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