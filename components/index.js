import Radio from './components/Radio/Radio.vue';
import Check from './components/Check/Check.vue';
import Popover from './components/Popover/Popover.vue';
const install = function(Vue) {
	if(install.installed) return;
	// 此处注意：组件中需要添加name属性，代表注册的组件名，也可修改成其他
	Vue.component(Radio.name, Radio);
	Vue.component(Check.name, Check);
	Vue.component(Popover.name, Popover);
}
// Vue 是全局变量时，自动 install
if(typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
};
module.exports = {
	install,
	Radio,
	Check,
	Popover
}