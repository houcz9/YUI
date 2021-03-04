<template>
	<div class="list">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-box f-pl f-flex f-fl-cen s-fc-we">
					<div class="m-nav-btn" @click="$router.goBack()">
						<i class="ydjy-arrow"></i>
					</div>
				</div>
				<div class="m-nav-box f-pr f-flex f-fl-cen s-fc-we">
					<div class="m-nav-btn" @click="tableScale('',$event)">
						<i class="ydjy-share"></i>
					</div>
				</div>
				<h1 class="f-of1 s-fc-we">弹出菜单</h1>
			</div>
		</div>
		<div class="g-mn">
			<div class="m-bar f-flex">
				<a class="f-fl-dv" @click="tableScale('',$event)">
					<p>下方箭头弹出</p>
				</a>
			</div>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				箭头指向弹出
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in 2" :key="index">
					<div class="f-flex" @click="tableScale(lst,$event)">
						<div class="m-lst-tle">
							箭头指向弹出{{lst}}
						</div>
						<div class="f-fs-lg s-fc-cc f-mar-lf-half">
							<i class="ydjy-info"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="u-tips">
				居中弹出
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn">
					<div class="f-flex" @click="popoverShow2=true">
						<div class="m-lst-tle">
							居中弹出
						</div>
						<div class="f-fs-lg s-fc-cc f-mar-lf-half">
							<i class="ydjy-info"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="u-tips">
				底部弹出
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn">
					<div class="f-flex" @click="popoverShow3=true">
						<div class="m-lst-tle">
							底部弹出
						</div>
						<div class="f-fs-lg s-fc-cc f-mar-lf-half">
							<i class="ydjy-info"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--箭头指向弹出-->
		<div class="m-pop" v-show="popoverShow">
			<div id="popover" class="m-pop-ct">
				<div class="m-pop-ct-del">
					<div class="m-lst">
						<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in 2" :key="index">
							<div class="m-lst-tle">
								列表{{lst}}
							</div>
						</div>
					</div>
				</div>
				<div class="m-pop-arr"></div>
			</div>
			<div class="m-pop-bj" @click="popoverShow=false"></div>
		</div>
		<!--居中弹出-->
		<div class="m-pop" v-show="popoverShow2">
			<div id="popover" class="m-pop-ct m-pop-cnt">
				<div class="m-pop-ct-del">
					<p class="f-pad-1-half f-fs-esm">这是居中弹出框，始终显示在屏幕中间</p>
				</div>
			</div>
			<div class="m-pop-bj" @click="popoverShow2=false"></div>
		</div>
		<!--底部弹出-->
		<div class="m-pop" v-show="popoverShow3">
			<div id="popover" class="m-pop-ct m-pop-btt">
				<div class="m-pop-ct-del">
					<div class="u-sha f-flex">
						<a class="f-fl-dv s-fc-ass">
							<span class="ydjy-dialog-3"></span>
							<p>abc</p>
						</a>
						<a class="f-fl-dv s-fc-ess">
							<span class="ydjy-me-3"></span>
							<p>abc</p>
						</a>
						<a class="f-fl-dv s-fc-gr">
							<span class="ydjy-ydjy"></span>
							<p>abc</p>
						</a>
					</div>	
				</div>
			</div>
			<div class="m-pop-bj" @click="popoverShow3=false"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				popoverShow: false,
				popoverShow2:false,
				popoverShow3:false
			}
		},
		mounted() {

		},
		methods: {
			tableScale: function(data, el) {
				this.popoverShow = true;
				this.$nextTick(function() {
					var bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
					var bodyWidth = document.documentElement.clientWidth || document.body.clientWidth;
					var popover=document.getElementById("popover");
					var rectEl=el.target.getBoundingClientRect();
					var distHeight = rectEl.top + popover.offsetHeight;
					var distLeft = rectEl.left + popover.offsetWidth;
					if((bodyHeight - distHeight) < 30) {
						popover.style.top = rectEl.top - popover.offsetHeight - 10 + "px";
						popover.lastElementChild.style.top="auto";
						popover.lastElementChild.style.bottom="-6px";
					} else {
						popover.style.top = rectEl.top + 30 + "px";
						popover.lastElementChild.style.bottom="auto";
						popover.lastElementChild.style.top="-6px";
					}
					if(distLeft > bodyWidth) {
						popover.style.left = bodyWidth - popover.offsetWidth - 10 + "px";
						popover.lastElementChild.style.left='auto';
						popover.lastElementChild.style.right='4%';
					} else {
						if((rectEl.width/2 + rectEl.left - (popover.offsetWidth/2)) < 0){
							popover.style.left = rectEl.left + "px";
							popover.lastElementChild.style.left='4%';
						}else{
							popover.style.left = rectEl.width/2 + rectEl.left - (popover.offsetWidth/2) + "px";
							popover.lastElementChild.style.left='46%';
						}
					}
				})
			}
		}
	}
</script>

<style scoped>

</style>