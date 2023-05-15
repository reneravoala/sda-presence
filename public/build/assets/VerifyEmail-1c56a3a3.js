import{T as m,m as f,o as a,k as _,f as s,d as o,u as e,Z as g,c as p,l as h,a as i,h as n,n as y,j as v,w as b}from"./app-9d315fbe.js";import{_ as k}from"./GuestLayout-ebb9f21a.js";import{_ as x}from"./PrimaryButton-985d9dbc.js";import"./ApplicationLogo-88d47a95.js";import"./_plugin-vue_export-helper-c27b6911.js";const w=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},$={__name:"VerifyEmail",props:{status:String},setup(r){const c=r,t=m({}),d=()=>{t.post(route("verification.send"))},l=f(()=>c.status==="verification-link-sent");return(u,N)=>(a(),_(k,null,{default:s(()=>[o(e(g),{title:"Email Verification"}),w,l.value?(a(),p("div",V," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),i("form",{onSubmit:b(d,["prevent"])},[i("div",E,[o(x,{class:y({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[n(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o(e(v),{href:u.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:s(()=>[n("Log Out")]),_:1},8,["href"])])],40,B)]),_:1}))}};export{$ as default};
