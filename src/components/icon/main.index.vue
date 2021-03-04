<template>
	<div class="list">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-box f-pl f-flex f-fl-cen s-fc-we">
					<div class="m-nav-btn" @click="$router.goBack()">
						<i class="ydjy-arrow"></i>
					</div>
				</div>
				<h1 class="f-of1 s-fc-we">图标</h1>
			</div>
		</div>

		<div class="g-bd">
			<div class="u-tips">
				点击高亮
			</div>
			<div class="f-pad-1-half s-bgc-we f-flex f-fl-wrap">
				<div class="u-ico" v-for="icon in iconData" :class="active==icon?'s-fc-ess':''" @click="active=icon">
					<i :class="icon">
						<i class="path1" v-if="icon=='ydjy-pen-3'"></i>
						<i class="path2" v-if="icon=='ydjy-pen-3'"></i>
					</i>
				</div>

			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active:'',
				iconData: [
					'ydjy-add',
					'ydjy-arrow',
					'ydjy-arrow-2',
					'ydjy-arrow-3',
					'ydjy-arrow-4',
					'ydjy-badge',
					'ydjy-badge-2',
					'ydjy-camera',
					'ydjy-camera-2',
					'ydjy-card',
					'ydjy-chart',
					'ydjy-chart-2',
					'ydjy-chart-3',
					'ydjy-chart-4',
					'ydjy-circle',
					'ydjy-close',
					'ydjy-code',
					'ydjy-corner',
					'ydjy-correct',
					'ydjy-correct-2',
					'ydjy-correct-3',
					'ydjy-date',
					'ydjy-delete',
					'ydjy-dialog',
					'ydjy-dialog-2',
					'ydjy-dialog-4',
					'ydjy-dialog-3',
					'ydjy-doubt',
					'ydjy-download',
					'ydjy-enlarge',
					'ydjy-eraser',
					'ydjy-file',
					'ydjy-file-2',
					'ydjy-file-3',
					'ydjy-file-4',
					'ydjy-file-5',
					'ydjy-file-6',
					'ydjy-file-7',
					'ydjy-find',
					'ydjy-font',
					'ydjy-gesture',
					'ydjy-gesture-2',
					'ydjy-good',
					'ydjy-group',
					'ydjy-hot',
					'ydjy-house',
					'ydjy-image',
					'ydjy-info',
					'ydjy-install',
					'ydjy-lecture',
					'ydjy-lecture-2',
					'ydjy-list',
					'ydjy-list-2',
					'ydjy-location',
					'ydjy-lock',
					'ydjy-love',
					'ydjy-love-2',
					'ydjy-me',
					'ydjy-me-2',
					'ydjy-me-3',
					'ydjy-me-4',
					'ydjy-more',
					'ydjy-narrow',
					'ydjy-narrow-2',
					'ydjy-not-good',
					'ydjy-palette',
					'ydjy-pen',
					'ydjy-pen-2',
					'ydjy-pen-3',
					'ydjy-pen-4',
					'ydjy-position',
					'ydjy-problem',
					'ydjy-refresh',
					'ydjy-refresh-2',
					'ydjy-relation',
					'ydjy-scan',
					'ydjy-school',
					'ydjy-screen',
					'ydjy-send',
					'ydjy-search',
					'ydjy-share',
					'ydjy-show',
					'ydjy-subject',
					'ydjy-time',
					'ydjy-tips',
					'ydjy-video',
					'ydjy-video-2',
					'ydjy-video-3',
					'ydjy-video-4',
					'ydjy-voice',
					'ydjy-wonder',
					'ydjy-ydjy',
					'ydjy-ydjy-2',
				]
			}
		},
		mounted() {

		},
		methods: {}
	}
</script>

<style scoped>

</style>