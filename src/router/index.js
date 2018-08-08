import Vue from 'vue'
import Router from 'vue-router'
import mainIndex from '@/components/main.index'
import navbar from '@/components/navbar/main.index'
import tabbar from '@/components/tabbar/main.index'
import navbarDetails from '@/components/tabbar/navbar.details'
import navbarDrag from '@/components/tabbar/navbar.drag'
import tabbarDetails from '@/components/tabbar/tabbar.details'
import label from '@/components/label/main.index'
import button from '@/components/button/main.index'
import list from '@/components/list/main.index'
import grid from '@/components/grid/main.index'
import form from '@/components/form/main.index'
import formRadio from '@/components/form/radio'
import formCheck from '@/components/form/check'
import formInput from '@/components/form/input'
import formSlider from '@/components/form/slider'
import formImages from '@/components/form/images'
import popover from '@/components/popover/main.index'
import icon from '@/components/icon/main.index'

Router.prototype.goBack = function() {
	this.isBack = true
	window.history.go(-1)
}
Vue.use(Router)
export default new Router({
	routes: [{
		path: '/',
		name: 'mainIndex',
		component: mainIndex
	},{
		path: '/navbar',
		name: 'navbar',
		component: navbar
	},{
		path: '/tabbar',
		name: 'tabbar',
		component: tabbar
	},{
		path: '/navbarDetails',
		name: 'navbarDetails',
		component: navbarDetails
	},{
		path: '/navbarDrag',
		name: 'navbarDrag',
		component: navbarDrag
	},{
		path: '/tabbarDetails',
		name: 'tabbarDetails',
		component: tabbarDetails
	},{
		path: '/label',
		name: 'label',
		component: label
	},{
		path: '/button',
		name: 'button',
		component: button
	},{
		path: '/list',
		name: 'list',
		component: list
	},{
		path: '/grid',
		name: 'grid',
		component: grid
	},{
		path: '/form',
		name: 'form',
		component: form
	},{
		path: '/formRadio',
		name: 'formRadio',
		component: formRadio
	},{
		path: '/formCheck',
		name: 'formCheck',
		component: formCheck
	},{
		path: '/formInput',
		name: 'formInput',
		component: formInput
	},{
		path: '/formSlider',
		name: 'formSlider',
		component: formSlider
	},{
		path: '/formImages',
		name: 'formImages',
		component: formImages
	},{
		path: '/popover',
		name: 'popover',
		component: popover
	},{
		path: '/icon',
		name: 'icon',
		component: icon
	}]
})