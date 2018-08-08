<template>
	<div class="grid">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="$router.goBack()">
					<i class="ydjy-arrow"></i>
				</div>
				<h1 class="s-fc-we">滑块</h1>
			</div>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				滑块
			</div>
			<div class="f-pad1-5 s-bgc-we f-flex">
				<input type="range" class="u-fm-sd" :value="slider" :style="'background-size:'+slider+'% 100%'" min="0" max="100" @change="sliderPrice('slider',$event)" @touchmove="sliderPrice('slider',$event)">
				<div class="u-fm-sd-cou">
					{{slider}}
				</div>
			</div>
			<div class="u-tips">
				滑块(设置滑动间隔)
			</div>
			<div class="f-pad1-5 s-bgc-we f-flex">
				<input type="range" class="u-fm-sd" :value="slider1" step="10" :style="'background-size:'+slider1+'% 100%'" min="0" max="100" @change="sliderPrice('slider1',$event)" @touchmove="sliderPrice('slider1',$event)">
				<div class="u-fm-sd-cou">
					{{slider1}}
				</div>
			</div>
			<div class="u-tips">
				滑块(设定区间)
			</div>
			<div class="f-pad1-5 s-bgc-we">
				<div class="f-flex">
					<div class="u-fm-sd-cou">
						{{inMin}}
					</div>
					<input type="range" class="u-fm-sd" :value="slider2" :style="'background-size:'+slider2Hold+'% 100%'" :min="inMin" :max="inMax" @change="sliderPrice('slider2',$event)" @touchmove="sliderPrice('slider2',$event)">
					<div class="u-fm-sd-cou">
						{{inMax}}
					</div>
				</div>
				<div class="u-fm-sd-tips">
					当前值：{{slider2}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				slider:20,
				slider1:10,
				slider2:10,
				slider2Hold:0,
				inMin:10,
				inMax:90,
			}
		},
		mounted() {
		},
		methods: {
			sliderPrice:function(data,el){
				this[data]=el.target.value;
				if(data=="slider2"){
					this.slider2Hold=parseInt((this.slider2 - 10) / (this.inMax - this.inMin) * 100)
				}
			},
		}
	}
</script>

<style scoped>

</style>