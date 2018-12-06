# YUI
> Mobile UI elements for **Vue 2.0**

> [DEMO](https://969723815.github.io/YUI/dist/index.html)


## 安装
```
npm i ydjyui -S
```
## 使用
```javascript
import Vue from 'vue'
import YdjyUi from 'ydjyui'
import '../static/css/yui.css'

Vue.use(YdjyUi)
```

## 说明
> **Radio(单选)**
- 基本用法
```
<y-radio
  v-model="value"
  :options="['选项A', '选项B', '选项C']">
</y-radio>
```
- 单选框右对齐
```
<y-radio
  align="right"
  v-model="value"
  :options="['选项A', '选项B', '选项C']">
</y-radio>
```
- 单选框设置禁用选项
```
<y-radio
  v-model="value"
  :options="options">
</y-radio>
```
script部分
```
return {
  value：'选项A',
  options:[{
        label: '被禁用',
        value: '值F',
        disabled: true
      },{
        label: '选项A',
        value: '值A'
      },{
        label: '选项B',
        value: '值B'
      }]
 }
```
- 单选框带头像组织
```
<y-radio
  v-model="value"
  align="right"
  :options="options">
 </y-radio>
```
script部分
```
return {
  value：'选项A',
  options:[{
		label: '杨国宝',
		nature:'一年级/语文',
		value: '1',
		img:'./images/attend/att-head.png'
	},{
		label: '刘二鹏',
		nature:'一年级/语文',
		value: '2',
		img:'./images/attend/att-head.png'
	},{
		label: '张文顺',
		nature:'一年级/语文',
		value: '3',
		img:'./images/attend/att-head.png'
	}]
}
```
- API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:----:|:----:|:----:|----:|
|options | 选择项(必填项) | Array | | |


## CDN
- https://969723815.github.io/YUI/static/css/yui.css
- https://969723815.github.io/YUI/components/dist/ydjy-ui.min.js


## Development
```shell
npm run dev
```
