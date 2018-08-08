<template>
	<div class="list">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="back">
					<i class="ydjy-arrow"></i>
				</div>
				<h1 class="s-fc-we">顶部选项卡</h1>
			</div>
		</div>
		<div class="g-bd">
			<div class="m-tab">
				<div class="m-tab-hd">
					<ul class="f-flex">
						<li class="f-fl-dv" v-for="title in listTitle" @click="active=title">
							<a class="f-ib" :class="active==title?'z-sel':''">{{title}}</a>
						</li>
					</ul>
				</div>
				<div class="m-tab-bd">
					<div class="m-tab-lst" v-for="title in listTitle" v-if="active==title">
						<scroll :page="page" :on-refresh="onRefresh" :on-pull="onPull">
							<div class="m-lst" slot="scrollList">
								<div class="f-flex f-fl-bet m-lst-mn" v-for="(list,index) in listData" :key="index">
									<div class="m-lst-tle f-fs-sm">
										{{title}}{{list}}
									</div>
									<div class="m-lst-arr">
										<i class="ydjy-arrow"></i>
									</div>
								</div>
							</div>
						</scroll>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import scroll from '@/components/scroll/main.index.vue'
	export default {
		data() {
			return {
				active:'教研活动',
				listTitle:[
					'教研活动',
					'共读任务',
					'课堂切片'
				],
				listData:[],
				page: {
					counter: 1,
					pageStart: 1,
					pageEnd: 1,
					total: 2
				}
			}
		},
		components: {
			scroll
		},
		mounted() {
			for(let i = 0; i < 1 * 20; i++) {
				this.listData.push('列表' + i)
			}
		},
		methods: {
			back: function() {
				this.$router.goBack();
			},
			onRefresh(mun) { //刷新回调
				setTimeout(() => {
					this.$root.$emit('setState', 3)
				}, 500)
			},
			onPull(mun) { //加载回调
				if(this.page.counter <= this.page.total) {
					setTimeout(() => {
						this.page.counter++
							this.$root.$emit('setState', 5)
						for(let i = 0; i < 10; i++) {
							this.listData.push('列表' + i)
						}
					}, 500)
				} else {
					this.$root.$emit('setState', 7)
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>