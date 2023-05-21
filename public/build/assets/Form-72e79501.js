import{T as b,o as d,c as m,b as i,a as e,t as y,k as g,d as l,v as r,u as t,e as _,w as x,F as h,g as v,h as k}from"./app-4bc3e4ef.js";import{_ as w}from"./NavBar-c5f62459.js";import{_ as c}from"./InputError-8d39c094.js";import"./Logo-e592dace.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"space-y-12"},N={class:"border-b border-gray-900/10 pb-12"},U={key:0,class:"my-5"},A={key:0,class:"block text-2xl font-medium leading-6 text-gray-900"},B=e("h2",{class:"text-base font-semibold leading-7 text-gray-900"},"Information personnelle",-1),F={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},S={class:"sm:col-span-3"},T=e("label",{for:"first-name",class:"block text-base font-medium leading-6 text-gray-900"},"Prénom",-1),$={class:"mt-2"},j={class:"sm:col-span-3"},C=e("label",{for:"last-name",class:"block text-base font-medium leading-6 text-gray-900"},"Nom",-1),D={class:"mt-2"},E={class:"sm:col-span-4"},I=e("label",{for:"phone",class:"block text-base font-medium leading-6 text-gray-900"},"Numéro téléphone",-1),M={class:"mt-2"},q={class:"col-span-full"},z=e("label",{for:"street-address",class:"block text-base font-medium leading-6 text-gray-900"},"Adresse",-1),O={class:"mt-2"},P={class:"sm:col-span-4"},G=e("label",{for:"email",class:"block text-base font-medium leading-6 text-gray-900"},"Adresse email",-1),H={class:"mt-2"},J={class:"mt-6 flex items-center justify-end gap-x-6"},K=["disabled"],L={key:0},Z={__name:"Form",props:{type:{type:String,default:"create"},contact:{type:Object,default:{first_name:"",last_name:"",email:"",phone:"",address:""}}},setup(u){const a=u,s=b({first_name:a.contact.first_name,last_name:a.contact.last_name,email:a.contact.email,phone:a.contact.phone,address:a.contact.address}),p=()=>{a.type==="create"?s.post(route("contacts.store")):a.type==="update"&&s.post(route("contacts.update",a.contact.id))};return(f,o)=>(d(),m(h,null,[i(w),e("form",{class:"flex flex-col items-center mb-5",onSubmit:o[5]||(o[5]=x(n=>p(),["prevent"]))},[e("div",V,[e("div",N,[a.type==="update"?(d(),m("div",U,[a.type==="update"?(d(),m("h3",A,"Identifiant : "+y(a.contact.id),1)):g("",!0)])):g("",!0),B,e("div",F,[e("div",S,[T,e("div",$,[l(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=n=>t(s).first_name=n),id:"first-name",autocomplete:"given-name",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"},null,512),[[r,t(s).first_name]])])]),e("div",j,[C,e("div",D,[l(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=n=>t(s).last_name=n),id:"last-name",autocomplete:"family-name",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"},null,512),[[r,t(s).last_name]])]),i(c,{message:t(s).errors.last_name},null,8,["message"])]),e("div",E,[I,e("div",M,[l(e("input",{id:"phone","onUpdate:modelValue":o[2]||(o[2]=n=>t(s).phone=n),type:"text",autocomplete:"phone",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"},null,512),[[r,t(s).phone]])]),i(c,{message:t(s).errors.phone},null,8,["message"])]),e("div",q,[z,e("div",O,[l(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=n=>t(s).address=n),id:"street-address",autocomplete:"street-address",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"},null,512),[[r,t(s).address]])]),i(c,{message:t(s).errors.address},null,8,["message"])]),e("div",P,[G,e("div",H,[l(e("input",{id:"email","onUpdate:modelValue":o[4]||(o[4]=n=>t(s).email=n),type:"email",autocomplete:"email",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"},null,512),[[r,t(s).email]])]),i(c,{message:t(s).errors.email},null,8,["message"])])])])]),e("div",J,[i(t(k),{href:f.route("contacts.index"),class:"text-base font-semibold leading-6 text-gray-900"},{default:_(()=>[v("Annulez")]),_:1},8,["href"]),e("button",{type:"submit",class:"rounded-md bg-primary px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-primary/95 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",disabled:t(s).processing}," Enregistrer ",8,K),u.type==="create"?(d(),m("span",L,"(et marquer comme présent)")):g("",!0)])],32)],64))}};export{Z as default};