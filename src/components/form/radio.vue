<template>
	<div class="grid">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="$router.goBack()">
					<i class="ydjy-arrow"></i>
				</div>
				<h1 class="s-fc-we">单选框</h1>
			</div>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				单选框(带头像组织)
			</div>
			<y-radio v-model="value" align="right" :options="options"></y-radio>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn">
					<div class="m-lst-tle">
						选中的项
					</div>
					<div class="f-flex">
						<div class="m-lst-det f-fs-esm">
							{{value}}
						</div>
					</div>
				</div>
			</div>
			<div class="u-tips">
				单选框
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in radioData" :key="index" @click="!lst.disabled?radioActive=lst.label:''">
					<div class="f-flex">
						<div class="u-fm-rd">
							<input type="radio" name="radio" class="u-fm-rd-inp" :value="lst.value" :disabled="lst.disabled?true:false" :checked="lst.label==radioActive?true:false" />
							<span class="u-fm-rd-ico"></span>
						</div>
						<div class="m-lst-tle f-fs-sm">
							{{lst.label}}
						</div>
					</div>
				</div>
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn">
					<div class="m-lst-tle">
						选中的项
					</div>
					<div class="f-flex">
						<div class="m-lst-det f-fs-esm">
							{{radioActive}}
						</div>
					</div>
				</div>
			</div>

			<div class="u-tips">
				单选框(禁用选项)
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in radioDisable" :key="index" @click="!lst.disabled?radioDiActive=lst.label:''">
					<div class="f-flex">
						<div class="u-fm-rd">
							<input type="radio" name="radio1" class="u-fm-rd-inp" :value="lst.value" :disabled="lst.disabled?true:false" :checked="lst.label==radioDiActive?true:false" />
							<span class="u-fm-rd-ico"></span>
						</div>
						<div class="m-lst-tle f-fs-sm">
							{{lst.label}}
						</div>
					</div>
				</div>
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn">
					<div class="m-lst-tle">
						选中的项
					</div>
					<div class="f-flex">
						<div class="m-lst-det f-fs-esm">
							{{radioDiActive}}
						</div>
					</div>
				</div>
			</div>

			<div class="u-tips">
				单选框(右对齐)
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in radioRight" @click="!lst.disabled?radioRiActive=lst.label:''">
					<div class="m-lst-tle">
						{{lst.label}}
					</div>
					<div class="u-fm-rd">
						<input type="radio" name="radio2" class="u-fm-rd-inp" :value="lst.value" :disabled="lst.disabled?true:false" :checked="lst.label==radioRiActive?true:false" />
						<span class="u-fm-rd-ico"></span>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '杨国宝',
				options: [{
					label: '杨国宝',
					nature: '一年级/语文',
					value: '杨国宝',
					img: '../../../static/img/att-head.png'
				}, {
					label: '刘二鹏',
					nature: '一年级/语文',
					value: '刘二鹏',
					img: '../../../static/img/att-head.png'
				}, {
					label: '张文顺',
					nature: '一年级/语文',
					value: '张文顺',
					img: '../../../static/img/att-head.png'
				}],
				radioData: [{
						label: '选项A',
						value: '值A'
					},
					{
						label: '选项B',
						value: '值B',
					}
				],
				radioActive: '选项A',
				radioDisable: [{
						label: '选项A',
						value: '值A'
					},
					{
						label: '选项B',
						value: '值B',
						disabled: true
					},
					{
						label: '选项C',
						value: '值C'
					}
				],
				radioDiActive: '选项A',
				radioRight: [{
						label: '选项A',
						value: '值A'
					},
					{
						label: '选项B',
						value: '值B',
					},
					{
						label: '选项C',
						value: '值C'
					}
				],
				radioRiActive: '选项A',
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