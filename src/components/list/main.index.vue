<template>
	<div class="list">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="$router.goBack()">
					<i class="ydjy-arrow"></i>
				</div>
				<h1 class="s-fc-we">列表</h1>
			</div>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				普通列表
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in 2" :key="index">
					<div class="m-lst-tle">
						列表{{lst}}
					</div>
				</div>
			</div>
			<div class="u-tips">
				箭头列表
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in 2" :key="index">
					<div class="m-lst-tle">
						列表{{lst}}
					</div>
					<div class="m-lst-arr">
						<i class="ydjy-arrow"></i>
					</div>
				</div>
			</div>
			<div class="u-tips">
				文字 + 箭头
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in 2" :key="index">
					<div class="m-lst-tle">
						列表{{lst}}
					</div>
					<div class="f-flex">
						<div class="m-lst-det">
							详情
						</div>
						<div class="m-lst-arr">
							<i class="ydjy-arrow"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="u-tips">
				数字角标
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in 2" :key="index">
					<div class="m-lst-tle">
						列表{{lst}}
					</div>
					<div class="f-flex">
						<div class="u-lab-fig s-bgc-ess">
							{{lst*6}}
						</div>
					</div>
				</div>
			</div>
			<div class="u-tips">
				数字角标 + 箭头
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in 2" :key="index">
					<div class="m-lst-tle">
						列表{{lst}}
					</div>
					<div class="f-flex">
						<div class="u-lab-fig s-bgc-ass">
							{{lst*6}}
						</div>
						<div class="m-lst-arr">
							<i class="ydjy-arrow"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="u-tips">
				图标列表
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in ['我的教案','我的笔记']" :key="index">
					<div class="f-flex">
						<div class="m-lst-ico">
							<i :class="lst=='我的教案'?'ydjy-file-7':'ydjy-pen-4'"></i>
							<span class="ydjy-corner s-fc-ess"></span>
						</div>
						<div class="m-lst-tle">
							{{lst}}
						</div>
					</div>
					
					<div class="f-flex">
						<div class="m-lst-arr">
							<i class="ydjy-arrow"></i>
						</div>
					</div>
				</div>
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