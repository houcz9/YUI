<template>
	<div class="grid">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-box f-pl f-flex f-fl-cen s-fc-we">
					<div class="m-nav-btn" @click="$router.goBack()">
						<i class="ydjy-arrow"></i>
					</div>
				</div>
				<h1 class="f-of1 s-fc-we">图片上传/展示</h1>
			</div>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				图片上传/展示
			</div>
			<div class="u-upload-img">
				<ul class="f-flex f-fl-wrap">
					<li>
						<div class="u-upload-img-box">
							<img src="../../assets/images/img01.jpg" class="f-img" />
						</div>
					</li>
					<li>
						<div class="u-upload-img-box">
							<img src="../../assets/images/img01.jpg" class="f-img" />
						</div>
					</li>
					<li>
						<div class="u-upload-img-box">
							<img src="../../assets/images/img01.jpg" class="f-img" />
						</div>
					</li>
					<li>
						<div class="u-upload-img-box">
							<img src="../../assets/images/img01.jpg" class="f-img" />
						</div>
					</li>
					<li>
						<div class="u-upload-img-box">
							<img src="../../assets/images/img01.jpg" class="f-img" />
						</div>
					</li>
					<li>
						<div class="u-upload-img-box u-upload-ico">
							<i class="ydjy-add"></i>
							<input class="u-upload-img-inp" type="file" accept="image/*" multiple="">
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {},
		methods: {

		}
	}
</script>

<style scoped>

</style>