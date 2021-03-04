<template>
	<div class="list">
		<div class="g-hd">
			<y-header title="徽章/角标">
				<div slot="left" class="m-nav-btn" @click="$router.goBack()">
					<i class="ydjy-arrow"></i>
				</div>
			</y-header>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				有底色
			</div>
			<div class="f-flex f-pad-1-half s-bgc-we">
				<span class="u-lab s-fc-we s-bgc-ess">听评课</span>
				<span class="u-lab s-fc-we s-bgc-ass">听评课</span>
				<span class="u-lab s-fc-we s-bgc-gr">听评课</span>
			</div>
			<div class="u-tips">
				无底色
			</div>
			<div class="f-flex f-pad-1-half s-bgc-we">
				<span class="u-lab u-lab-bor s-fc-ess">听评课</span>
				<span class="u-lab u-lab-bor s-fc-ass">听评课</span>
				<span class="u-lab u-lab-bor s-fc-gr">听评课</span>
			</div>
			<div class="u-tips">
				无底色(虚线)
			</div>
			<div class="f-flex f-pad-1-half s-bgc-we">
				<span class="u-lab u-lab-bor u-lab-das s-fc-ess">听评课</span>
				<span class="u-lab u-lab-bor u-lab-das s-fc-ass">听评课</span>
				<span class="u-lab u-lab-bor u-lab-das s-fc-gr">听评课</span>
			</div>
			<div class="u-tips">
				特殊
			</div>
			<div class="f-flex f-pad-1-half s-bgc-we">
				<div class="u-lab-spe">
					<span class="s-fc-we f-pa-cen">
						进行中
					</span>
				</div>
				<div class="u-lab-spe s-bgc-gr">
					<span class="s-fc-we f-pa-cen">
						未开始
					</span>
				</div>
				<div class="u-lab-spe s-bgc-gr">
					<span class="s-fc-we f-pa-cen">
						已结束
					</span>
				</div>
			</div>
			<div class="u-tips">
				角标
			</div>
			<div class="f-rlt f-pad-1-half s-bgc-we f-lib">
				主色角标
				<span class="u-cmk s-bgc-ess">
					LIVE
				</span>
			</div>
			<div class="f-rlt f-pad-1-half s-bgc-we f-lib">
				辅助色角标
				<span class="u-cmk s-bgc-ass">
					LIVE
				</span>
			</div>
			<div class="f-rlt f-pad-1-half s-bgc-we f-lib">
				辅助色角标
				<span class="u-cmk s-bgc-ass1">
					AI
				</span>
			</div>
			<div class="f-rlt f-pad-1-half s-bgc-we">
				灰色角标
				<span class="u-cmk s-bgc-gr">
					AI
				</span>
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