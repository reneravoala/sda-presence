import{T as d,o as r,k as u,f as i,d as t,u as s,Z as c,c as _,t as f,l as p,a,h as w,n as g,w as y}from"./app-9d315fbe.js";import{_ as b}from"./GuestLayout-ebb9f21a.js";import{_ as k}from"./InputError-0520e9f8.js";import{_ as x}from"./InputLabel-67685a97.js";import{_ as h}from"./PrimaryButton-985d9dbc.js";import{_ as V}from"./TextInput-d3c31edb.js";import"./ApplicationLogo-88d47a95.js";import"./_plugin-vue_export-helper-c27b6911.js";const v=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},D={__name:"ForgotPassword",props:{status:String},setup(o){const e=d({email:""}),m=()=>{e.post(route("password.email"))};return(S,l)=>(r(),u(b,null,{default:i(()=>[t(s(c),{title:"Forgot Password"}),v,o.status?(r(),_("div",N,f(o.status),1)):p("",!0),a("form",{onSubmit:y(m,["prevent"])},[a("div",null,[t(x,{for:"email",value:"Email"}),t(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(k,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",B,[t(h,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{D as default};