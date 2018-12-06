<template>
  	<div class="m-lst" @change="$emit('change', currentValue)">
	  	<div class="f-flex f-fl-bet m-lst-mn" v-for="option in options">
			<label class="f-wd-100" :class="align === 'right'?'':'f-flex'">
				<span class="u-fm-rd" :class="{'f-fr': align === 'right'}">
					<input type="radio" class="u-fm-rd-inp" v-model="currentValue" :value="option.value ||option.label || option" :disabled="option.disabled" />
					<span class="u-fm-rd-ico"></span>
				</span>
				<span class="f-flex">
					<span class="u-head" v-if="option.img" :style="align === 'right'?'':'margin-left:1rem'"><img :src="option.img" class="f-img" /></span>
					<span :class="option.img?'u-head-name':'m-lst-tle'" :style="!option.img && align === 'right'?'':'margin-left:1rem'" v-text="option.label || option"></span>
					<span class="f-fs-eesm s-fc-95 f-mar-lf-half" v-text="'（'+option.nature+'）'" v-if="option.nature"></span>
				</span>
			</label>
		</div>
	</div>
  
</template>

<script>
  export default {
  	name: 'y-radio',
    props: {
	    align: String,
	    options: {
	      	type: Array,
	      	required: true
	    },
	    value: String
	},
	data() {
    	return {
      		currentValue: this.value
    	};
  	},
  	watch: {
	    value(val) {
	      	this.currentValue = val;
	    },
	    currentValue(val) {
	      	this.$emit('input', val);
	    }
  	}
}
</script>
