<template>
	<div class="m-scroll" ref="myScroll" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
		<div class="m-scroll-t" :style="{height:top+'px'}">
			<div v-if="aspect==2">
				<p v-if="state==6">
					下拉刷新
				</p>
				<p v-if="state==1">
					<i><img :src="Load"/></i>
					刷新中
				</p>
				<p v-if="state==2">松开刷新</p>
				<p v-if="state==3">
					<i><img :src="Load"/></i>
					刷新完成
				</p>
			</div>
		</div>
		<!-- top -->
		<div class="scroll-list" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)'}">
			<slot name='scrollList'></slot>
			<div class="scroll-bottom">
				<div v-if="state==4">加载中</div>
				<div v-if="state==5">加载完成</div>
				<div v-if="state==7">没有更多</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Load from '../../assets/images/logo.gif'
	export default {
		name: 'myScroll',
		props: {
			'page': {
				type: Object, //counter:当前页  pageStart:开始页数  pageEnd:结束页数  total:总页数
				require: true,
			},
			'onRefresh': { //刷新回调
				type: Function,
				require: true
			},
			'onPull': { //加载回调
				type: Function,
				require: true
			},
			'getScrollTop': { //获取滚动条位置
				type: Function
			},
			'setScrollPage': { //改变滚动条位置
				type: Function
			},
		},
		data() {
			return {
				Load,
				pageX: 0,
				pageY: 0,
				state: 0,
				scrollPosition: 0,
				myScroll: null,
				myScrollList: null,
				top: 0,
				aspect: 0, //1:向下 2:向上
				listHeight: 0,
			}
		},
		created() {
			this.$root.$on('setState', (index) => { //修改状态
				this.state = index
				if(index == 5 || index == 3) {
					setTimeout(() => {
						this.state = 0
						this.top = 0
					}, 300)
				}
			})
			this.$root.$on('ScrollTop', (top) => { //修改滚动条位置
				this.myScroll.scrollTop = top
			})
		},
		methods: {
			touchStart(e) { //触摸事件
				this.pageX = e.targetTouches[0].pageX
				this.pageY = e.targetTouches[0].pageY
			},
			touchMove(e) { //触摸滑动事件
				this.scrollPosition = this.myScroll.scrollTop //获取滚动条位置
				if(e.targetTouches[0].pageY > this.pageY) { //向上滑动
					this.aspect = 2
					if(this.myScroll.scrollTop == 0) {
						let diff = e.targetTouches[0].pageY - this.pageY - this.scrollPosition
						this.top = Math.pow(diff, 0.9)
						let ranget = diff / document.body.clientHeight * 100 //计算在屏幕上滑动了多少
						if(ranget > 110) {
							this.state = 2
						} else if(ranget < 105) {
							this.state = 6
						}
						e.preventDefault()
					}
				} else if(this.state != 4) { //向上滑动
					this.aspect = 1
				}

			},
			touchEnd(e) {
				if(this.aspect == 2 && this.state == 2 || this.state == 1) { //上拉处理
					this.top = 100
					this.state = 1
					this.topCallback()
				} else if(this.aspect == 2) {
					this.state = 0
					this.top = 0
				}
			},
			topCallback() { //刷新回调
				this.onRefresh(this.state)
			},
			bottomCallback() { //加载回调
				this.state = 4
				this.onPull(this.state)
			}
		},
		mounted() {
			this.myScroll = this.$refs.myScroll //获取滑条dom
			this.myScrollList = this.myScroll.children[1] //获取列表dom

			this.myScroll.addEventListener('scroll', (e) => { //监听滚动条事件
				let listHeight = this.myScrollList.offsetHeight //列表总高度
				let listScrollTop = e.target.scrollTop + this.myScroll.offsetHeight //当前滚动条位置

				if(this.state == 0 && listHeight - listScrollTop < 100) {
					this.bottomCallback()
				}

				if(this.getScrollTop) this.getScrollTop(e.target.scrollTop) //返回X，Y

			})
		}
	}
</script>
<style scoped>
	.m-scroll {
		max-width: 100%;
		max-height: 100%;
		height: 100%;
		overflow: hidden;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		will-change: transform;
		transition: all 450ms;
		backface-visibility: hidden;
		perspective: 1000;
		position: relative;
	}
	
	.m-scroll .m-scroll-t {
		text-align: center;
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		font-size:1.4rem;
		color:#666666;
	}
	
	.m-scroll .m-scroll-t div {
		display: flex;
		height: auto;
		width: 100%;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	
	.m-scroll .m-scroll-t div i {
		flex: 1 0 100%;
		display: block;
		margin:0 auto;
		margin-bottom:0.6rem;
	}
	
	.m-scroll .m-scroll-t div img {
		width: 4rem;
	}
	
	.m-scroll .m-scroll-t div p {
		flex: 1 0 100%;
	}
	
	.m-scroll .scroll-list {
		overflow: hidden;
	}
	
	.m-scroll .scroll-bottom {
		text-align: center;
		line-height: 40px;
		font-size:1.4rem;
	}
</style>