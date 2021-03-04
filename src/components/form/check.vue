<template>
	<div class="grid">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-box f-pl f-flex f-fl-cen s-fc-we">
					<div class="m-nav-btn" @click="$router.goBack()">
						<i class="ydjy-arrow"></i>
					</div>
				</div>
				<h1 class="f-of1 s-fc-we">复选框</h1>
			</div>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				复选框(带头像组织)
			</div>
			<y-check v-model="value" align="right" :options="options"></y-check>
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
				复选框
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in checkData" :key="index" @click="!lst.disabled?clickCheck(lst.label):''">
					<div class="f-flex">
						<div class="u-fm-rd">
							<input type="checkbox" name="check" class="u-fm-ch-inp" :disabled="lst.disabled" :checked="checkActive.indexOf(lst.label)<0?false:true" />
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
							{{checkActive}}
						</div>
					</div>
				</div>
			</div>

			<div class="u-tips">
				复选框(禁用选项)
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in checkDisable" :key="index" @click="!lst.disabled?clickDisable(lst.label):''">
					<div class="f-flex">
						<div class="u-fm-rd">
							<input type="checkbox" name="check1" class="u-fm-ch-inp" :value="lst.value" :disabled="lst.disabled" :checked="checkDiActive.indexOf(lst.label)<0?false:true" />
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
							{{checkDiActive}}
						</div>
					</div>
				</div>
			</div>
			<div class="u-tips">
				复选框(右对齐)
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn" v-for="(lst,index) in checkRight" :key="index" @click="!lst.disabled?clickRight(lst.label):''">
					<div class="m-lst-tle f-fs-sm">
						{{lst.label}}
					</div>

					<div class="u-fm-rd">
						<input type="checkbox" name="check2" class="u-fm-ch-inp" :value="lst.value" :disabled="lst.disabled" :checked="checkRiActive.indexOf(lst.label)<0?false:true" />
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
				value: ['杨国宝'],
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
				checkData: [{
						label: '选项A',
						value: '值A'
					},
					{
						label: '选项B',
						value: '值B',
					},
					{
						label: '选项C',
						value: '值C',
					}
				],
				checkActive: ['选项A'],
				checkDisable: [{
					label: '禁用',
					value: '禁用',
					disabled: true
				}, {
					label: '选中禁用',
					value: '选中禁用',
					disabled: true
				}, {
					label: '选项A',
					value: '值A',
				}, {
					label: '选项B',
					value: '值B',
				}],
				checkDiActive: ['选中禁用'],
				checkRight: [{
						label: '选项A',
						value: '值A'
					},
					{
						label: '选项B',
						value: '值B',
					},
					{
						label: '选项C',
						value: '值C',
					}
				],
				checkRiActive: ['选项A'],
			}
		},
		mounted() {

		},
		methods: {
			clickCheck: function(data) {
				if(this.checkActive.indexOf(data) < 0) {
					this.checkActive.push(data)
				} else {
					this.checkActive.splice(this.checkActive.indexOf(data), 1)
				}
			},
			clickDisable: function(data) {
				if(this.checkDiActive.indexOf(data) < 0) {
					this.checkDiActive.push(data)
				} else {
					this.checkDiActive.splice(this.checkDiActive.indexOf(data), 1)
				}
			},
			clickRight: function(data) {
				if(this.checkRiActive.indexOf(data) < 0) {
					this.checkRiActive.push(data)
				} else {
					this.checkRiActive.splice(this.checkDiActive.indexOf(data), 1)
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>