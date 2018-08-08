<template>
	<div class="grid">
		<div class="g-hd">
			<div class="m-nav s-bgc-ess">
				<div class="m-nav-btn f-pl s-fc-we" @click="$router.goBack()">
					<i class="ydjy-arrow"></i>
				</div>
				<h1 class="s-fc-we">输入框</h1>
			</div>
		</div>
		<div class="g-bd">
			<div class="u-tips">
				输入框
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						用户名
					</div>
					<div class="f-fl-dv f-flex">
						<input type="text" class="u-fm-inp" placeholder="请输入用户名" v-model="formData.userName" />
						<div class="u-fm-inp-cle" v-show="formData.userName!=''" @click="clearContent('userName')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						邮箱
					</div>
					<div class="f-fl-dv f-flex">
						<input type="email" class="u-fm-inp" placeholder="请输入邮箱" v-model="formData.emali" />
						<div class="u-fm-inp-cle" v-show="formData.emali!=''" @click="clearContent('emali')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						密码
					</div>
					<div class="f-fl-dv f-flex">
						<input type="password" class="u-fm-inp" placeholder="请输入密码" v-model="formData.password" />
						<div class="u-fm-inp-cle" v-show="formData.password!=''" @click="clearContent('password')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						手机号
					</div>
					<div class="f-fl-dv f-flex">
						<input type="tel" class="u-fm-inp" placeholder="请输入手机号" v-model="formData.mobile" />
						<div class="u-fm-inp-cle" v-show="formData.mobile!=''" @click="clearContent('mobile')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						数字
					</div>
					<div class="f-fl-dv f-flex">
						<input type="number" class="u-fm-inp" placeholder="请输入数字" v-model="formData.numbers" />
						<div class="u-fm-inp-cle" v-show="formData.numbers!=''" @click="clearContent('numbers')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						日期
					</div>
					<div class="f-fl-dv f-flex">
						<input type="date" class="u-fm-inp" placeholder="请输入日期" v-model="formData.date" />
						<div class="u-fm-inp-cle" v-show="formData.date!=''" @click="clearContent('date')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						时间
					</div>
					<div class="f-fl-dv f-flex">
						<input type="time" class="u-fm-inp" placeholder="请输入日期" v-model="formData.time" />
						<div class="u-fm-inp-cle" v-show="formData.time!=''" @click="clearContent('time')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						段落
					</div>
					<div class="f-fl-dv f-flex">
						<textarea class="u-fm-inp" rows="4" v-model="formData.section" placeholder="请输入内容">
							
						</textarea>
					</div>
				</div>
			</div>
			<div class="u-tips">
				输入框(右对齐)
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						用户名
					</div>
					<div class="f-fl-dv f-flex">
						<input type="text" class="u-fm-inp u-fm-inp-rg" placeholder="请输入用户名" v-model="formData.userName" />
						<div class="u-fm-inp-cle" v-show="formData.userName!=''" @click="clearContent('userName')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						邮箱
					</div>
					<div class="f-fl-dv f-flex">
						<input type="email" class="u-fm-inp u-fm-inp-rg" placeholder="请输入邮箱" v-model="formData.emali" />
						<div class="u-fm-inp-cle" v-show="formData.emali!=''" @click="clearContent('emali')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						密码
					</div>
					<div class="f-fl-dv f-flex">
						<input type="password" class="u-fm-inp u-fm-inp-rg" placeholder="请输入密码" v-model="formData.password" />
						<div class="u-fm-inp-cle" v-show="formData.password!=''" @click="clearContent('password')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						手机号
					</div>
					<div class="f-fl-dv f-flex">
						<input type="tel" class="u-fm-inp u-fm-inp-rg" placeholder="请输入手机号" v-model="formData.mobile" />
						<div class="u-fm-inp-cle" v-show="formData.mobile!=''" @click="clearContent('mobile')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						数字
					</div>
					<div class="f-fl-dv f-flex">
						<input type="number" class="u-fm-inp u-fm-inp-rg" placeholder="请输入数字" v-model="formData.numbers" />
						<div class="u-fm-inp-cle" v-show="formData.numbers!=''" @click="clearContent('numbers')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						日期
					</div>
					<div class="f-fl-dv f-flex">
						<input type="date" class="u-fm-inp u-fm-inp-rg" placeholder="请输入日期" v-model="formData.date" />
						<div class="u-fm-inp-cle" v-show="formData.date!=''" @click="clearContent('date')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						时间
					</div>
					<div class="f-fl-dv f-flex">
						<input type="time" class="u-fm-inp u-fm-inp-rg" placeholder="请输入日期" v-model="formData.time" />
						<div class="u-fm-inp-cle" v-show="formData.time!=''" @click="clearContent('time')">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-tt">
						段落
					</div>
					<div class="f-fl-dv f-flex">
						<textarea class="u-fm-inp" rows="4" v-model="formData.section" placeholder="请输入内容"></textarea>
					</div>
				</div>
			</div>
			<div class="u-tips">
				登录框
			</div>
			<div class="m-lst">
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-ico">
						<i class="ydjy-me-2 f-fs-or s-fc-ess"></i>
					</div>
					<div class="f-fl-dv f-flex">
						<input type="text" class="u-fm-inp" placeholder="请输入帐号" v-model="loginData.userName" />
						<div class="u-fm-inp-cle" v-show="loginData.userName!=''" @click="loginData.userName=''">
							<i class="ydjy-close"></i>
						</div>
					</div>
				</div>
				<div class="f-flex f-fl-bet m-lst-mn u-fm-mu">
					<div class="m-lst-tle u-fm-ico">
						<i class="ydjy-lock f-fs-or s-fc-ess"></i>
					</div>
					<div class="f-fl-dv f-flex">
						<input type="password" class="u-fm-inp" placeholder="请输入密码" v-model="loginData.password" />
						<div class="u-fm-inp-cle" v-show="loginData.password!=''" @click="loginData.password=''">
							<i class="ydjy-close"></i>
						</div>
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
				loginData:{
					userName:'',
					password:'',
				},
				formData:{
					userName:'',
					emali:'',
					password:'',
					mobile:'',
					numbers:'',
					date:'',
					time:'',
					section:''
				}
			}
		},
		mounted() {

		},
		methods: {
			clearContent:function(data){
				console.log(this.formData[data])
				this.formData[data]="";
			},
			clearShow:function(data,el){
				if(this.formData[data]!=""){
					el.target.nextElementSibling.style.display="block";
				}else{
					el.target.nextElementSibling.style.display="none";
				}
				console.log(el.target.nextElementSibling)
			}
		}
	}
</script>

<style scoped>

</style>