<template>
	<div class="grid">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="$router.goBack()">
					<i class="ydjy-arrow"></i>
				</div>
				<h1 class="s-fc-we">网格布局</h1>
			</div>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				九宫格
			</div>
			<div class="m-grid f-flex f-fl-wrap">
				<div class="m-grid-lst">
					<div class="m-grid-ico">
						<i class="ydjy-file-6"></i>
						<span class="ydjy-corner s-fc-ess"></span>
					</div>
					<div class="m-grid-text">评课记录</div>
				</div>
				<div class="m-grid-lst">
					<div class="m-grid-ico">
						<i class="ydjy-lecture-2"></i>
						<span class="ydjy-corner s-fc-ass"></span>
					</div>
					<div class="m-grid-text">讲课反馈</div>
				</div>
				<div class="m-grid-lst">
					<div class="m-grid-ico">
						<i class="ydjy-file-7"></i>
						<span class="ydjy-corner s-fc-ess"></span>
					</div>
					<div class="m-grid-text">我的教案</div>
				</div>
				<div class="m-grid-lst">
					<div class="m-grid-ico">
						<i class="ydjy-pen-4"></i>
						<span class="ydjy-corner s-fc-ess"></span>
					</div>
					<div class="m-grid-text">我的笔记</div>
				</div>
				<div class="m-grid-lst">
					<div class="m-grid-ico">
						<i class="ydjy-love-2"></i>
						<span class="ydjy-corner s-fc-ass1"></span>
					</div>
					<div class="m-grid-text">我的收藏</div>
				</div>
				<div class="m-grid-lst">
					<div class="m-grid-ico">
						<i class="ydjy-download"></i>
						<span class="ydjy-corner s-fc-ass"></span>
					</div>
					<div class="m-grid-text">版本更新</div>
				</div>
				<div class="m-grid-lst">
					<div class="m-grid-ico">
						<i class="ydjy-dialog-3"></i>
						<span class="ydjy-corner s-fc-ass1"></span>
					</div>
					<div class="m-grid-text">其他-01</div>
				</div>
				<div class="m-grid-lst">
					<div class="m-grid-ico">
						<i class="ydjy-font"></i>
						<span class="ydjy-corner s-fc-ess"></span>
					</div>
					<div class="m-grid-text">其他-02</div>
				</div>
				<div class="m-grid-lst">
					<div class="m-grid-ico">
						<i class="ydjy-me-3"></i>
						<span class="ydjy-corner s-fc-ess"></span>
					</div>
					<div class="m-grid-text">其他-03</div>
				</div>
			</div>
			<div class="u-tips">
				图片网格(1张图片)
			</div>
			<div class="m-grid">
				<ul class="f-flex f-fl-wrap m-grid-img">
					<li><img src="../../assets/images/img01.jpg" class="f-img" /></li>
				</ul>
			</div>
			<div class="u-tips">
				图片网格(2张图片)
			</div>
			<div class="m-grid">
				<ul class="f-flex f-fl-wrap m-grid-img">
					<li><img src="../../assets/images/img01.jpg" class="f-img" /></li>
					<li><img src="../../assets/images/img01.jpg" class="f-img" /></li>
				</ul>
			</div>
			<div class="u-tips">
				图片网格(多张图片)
			</div>
			<div class="m-grid">
				<ul class="f-flex f-fl-wrap m-grid-img">
					<li><img src="../../assets/images/img01.jpg" class="f-img" /></li>
					<li><img src="../../assets/images/img01.jpg" class="f-img" /></li>
					<li><img src="../../assets/images/img01.jpg" class="f-img" /></li>
					<li><img src="../../assets/images/img01.jpg" class="f-img" /></li>
					<li><img src="../../assets/images/img01.jpg" class="f-img" /></li>
					<li><img src="../../assets/images/img01.jpg" class="f-img" /></li>
				</ul>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
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