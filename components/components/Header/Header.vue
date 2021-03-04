<template>
	<div class="m-nav" :class="color === 'dark'?'s-bgc-ess':'s-bgc-we'">
		<slot name="tab"></slot> 
		<div class="m-nav-box f-pl f-flex f-fl-cen" :class="color === 'dark'?'s-fc-we':'s-fc-49'" v-if="this.$slots.left">
			<slot name="left"></slot>
		</div>
		<div class="m-nav-box f-pr f-flex f-fl-cen" :class="color === 'dark'?'s-fc-we':'s-fc-49'" v-if="this.$slots.right">
			<slot name="right"></slot>
		</div>
		<h1 class="f-of1" v-text="title" :class="color === 'dark'?'s-fc-we':'s-fc-49'" v-if="!this.$slots.tab"></h1>
	</div>
</template>

<script>
	export default {
		name: 'y-header',
		props: {
			title: String,
			color: {
				type: String,
				default: 'dark'
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>