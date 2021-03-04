# YUI

[![npm](https://img.shields.io/npm/v/ydjyui.svg?maxAge=3600)](https://www.npmjs.com/package/ydjyui)
[![NPM downloads](http://img.shields.io/npm/dm/ydjyui.svg)](https://www.npmjs.com/package/ydjyui)
[![github](https://img.shields.io/badge/github-start-brightgreen.svg)](https://github.com/969723815/YUI/)


> Mobile UI elements for **Vue 2.0**
> [DEMO](https://969723815.github.io/YUI/dist/)


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
> **Radio(单选框)**
- 单选框基本用法
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
  value：'值A',
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
  value：'杨国宝',
  options:[{
		label: '杨国宝',
		nature:'一年级/语文',
		value: '杨国宝',
		img:'./images/attend/att-head.png'
	},{
		label: '刘二鹏',
		nature:'一年级/语文',
		value: '刘二鹏',
		img:'./images/attend/att-head.png'
	},{
		label: '张文顺',
		nature:'一年级/语文',
		value: '张文顺',
		img:'./images/attend/att-head.png'
	}]
}
```
- API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|:----|:----|:----:|:----:|:----:|
|options | 选择项(必填项) | Array |
|label | 选项标题 | String |
|nature | 选项组织（选填） | String |
|img | 选项图片（例如老师头像，选填） | String |
|value | 绑定值 | String |
|align | 单选框对齐位置	 | String | left, right |	left |
  
    
> **Check(复选框)**
- 复选框基本用法
```
<y-check
  v-model="value"
  :options="['选项A', '选项B', '选项C']">
</y-check>
```
- 复选框设置最多选中数
```
<y-check
  v-model="value"
  :max=2
  :options="['选项A', '选项B', '选项C']">
</y-check>
```
- 复选框右对齐
```
<y-check
  v-model="value"
  align="right"
  :options="['选项A', '选项B', '选项C']">
</y-check>
```
- 复选框设置禁用选项
```
<y-check
  v-model="value"
  :options="options">
</y-check>
```
script部分
```
return {
  value:['值A'],
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
- 复选框带头像组织
```
<y-check
  v-model="value"
  align="right"
  :options="options">
</y-check>
 ```
script部分
```
return {
  value:['杨国宝'],
  options:[{
		label: '杨国宝',
		nature:'一年级/语文',
		value: '杨国宝',
		img:'./images/attend/att-head.png'
	},{
		label: '刘二鹏',
		nature:'一年级/语文',
		value: '刘二鹏',
		img:'./images/attend/att-head.png'
	},{
		label: '张文顺',
		nature:'一年级/语文',
		value: '张文顺',
		img:'./images/attend/att-head.png'
	}]
}
```
- API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|:----|:----|:----:|:----:|:----:|
|options | 选择项(必填项) | Array |
|label | 选项标题 | String |
|nature | 选项组织（选填） | String |
|img | 选项图片（例如老师头像，选填） | String |
|value | 绑定值 | String |
|max | 最多可选个数 | String |
|align | 单选框对齐位置	 | String | left, right |	left |

> **Popover(弹出框)**

###### position 属性指定了 Popover 的位置（position 可选值‘middle’、‘bottom’）。
###### 比如，position 为 'bottom' 时，Popover 会从屏幕下方移入，并最终固定在屏幕下方。
###### 移入/移出的动效会根据 position 的不同而自动改变，无需手动配置。
###### 将 v-model 绑定到一个本地变量，通过操作这个变量即可控制 Popover 的显示与隐藏。

- 居中弹出
```
<y-popover v-model="popupVisible">
	<div class="m-pop-ct-del">
		<p class="f-pad-1-half f-fs-esm">这是居中弹出框，始终显示在屏幕中间</p>
	</div>
</y-popover>
```
- 底部弹出

###### title是提示框的标题，仅position的属性为bottom时有效
```
<y-popover v-model="popoverBottom" v-on:click-event="doSth" title="底部弹出" handle="完成" position="bottom">
  <div class="m-pop-ct-del">
		<p class="f-pad-1-half f-fs-esm">这是底部弹出框，始终显示在屏幕底部</p>
	</div>
</y-popover>
```

- API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|:----|:----|:----:|:----:|:----:|
|position | 弹出框位置	 | String | bottom,middle | middle |
|title | 标题，仅限position值为bottom时有效 | String |
|handle | 右侧完成按钮，仅限position值为bottom时有效 | String |
|v-on:click-event | 底部弹出框时点击“完成”事件，默认事件关闭当前弹出框 | Function |

## CDN
- https://969723815.github.io/YUI/static/css/yui.css
- https://969723815.github.io/YUI/components/dist/ydjy-ui.min.js


## Development
```shell
npm run dev
```
