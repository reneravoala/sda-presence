import{T as u,g as c,w as r,o as i,a as t,u as s,Z as d,c as _,t as f,j as p,b as a,e as w,n as g,h as b}from"./app-ea5ae317.js";import{_ as y}from"./GuestLayout-41df1df7.js";import{_ as x}from"./InputError-09f61fe6.js";import{_ as h}from"./InputLabel-cacc2589.js";import{_ as k}from"./PrimaryButton-53055854.js";import{_ as V}from"./TextInput-ddcc7071.js";import"./ApplicationLogo-8b016d7a.js";import"./_plugin-vue_export-helper-c27b6911.js";const v=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},D={__name:"ForgotPassword",props:{status:String},setup(o){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(S,l)=>(i(),c(y,null,{default:r(()=>[t(s(d),{title:"Forgot Password"}),v,o.status?(i(),_("div",N,f(o.status),1)):p("",!0),a("form",{onSubmit:b(m,["prevent"])},[a("div",null,[t(h,{for:"email",value:"Email"}),t(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(x,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",B,[t(k,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{D as default};
