import{T as u,o as l,c as n,b as d,a as t,w as x,d as h,v as f,u as a,F as p,f as _,t as c}from"./app-2e1ee27b.js";import{_ as y}from"./NavBar-fedd11fb.js";import{_ as b}from"./Pagination-57db6f04.js";import{_ as g}from"./TextInput-69fc78cd.js";import{r as w}from"./MagnifyingGlassIcon-ab0d73da.js";import"./Logo-c559dcc1.js";import"./_plugin-vue_export-helper-c27b6911.js";const v={class:"px-4 sm:px-6 lg:px-8 m-5"},k={class:"sm:flex sm:items-center"},V=t("div",{class:"sm:flex-auto"},[t("h1",{class:"text-xl font-semibold leading-6 text-gray-900"},"Résultats")],-1),$={class:"flex flex-wrap gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},N=["href"],S={class:"absolute inset-y-0 right-0 flex py-1.5 pr-1.5"},j={class:"inline-flex items-center rounded px-2 font-sans text-sm font-medium text-gray-400 transition-all hover:text-blue-100"},B={class:"mt-8 flow-root"},M={class:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},P={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},R={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"},T={class:"min-w-full divide-y divide-gray-300"},D=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6"}," Identifiant "),t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6"},"Nom "),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-base font-semibold text-gray-900"}," Présence "),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-base font-semibold text-gray-900"}," Présences ")])],-1),F={class:"divide-y divide-gray-200 bg-white"},U={class:"whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6"},A={class:"whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6"},C={key:0,class:"whitespace-nowrap px-3 py-4 text-base"},E=t("span",{class:"bg-green-600 text-white p-2 rounded-xl"},"Parfaite",-1),I=[E],L={key:1,class:"whitespace-nowrap px-3 py-4 text-base"},O=t("span",{class:"bg-gray-600 text-white p-2 rounded-xl"},"Moyenne",-1),q=[O],z={key:2,class:"whitespace-nowrap px-3 py-4 text-base text-red-500r"},G=t("span",{class:"bg-red-600 text-white p-2 rounded-xl"},"Aucune",-1),H=[G],J={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-base font-medium sm:pr-6 flex"},et={__name:"Result",props:{contacts:Object,date:String,search:String,days:Number},setup(i){const m=i,o=u({date:m.date,search:m.search});return(r,s)=>(l(),n(p,null,[d(y),t("div",v,[t("div",k,[V,t("div",$,[t("a",{href:r.route("attendance.result.download"),target:"_blank",class:"rounded-md bg-primary px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-primary/95 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"}," Télécharger (xls) ",8,N),t("form",{class:"relative mt-1 flex items-center",onSubmit:s[1]||(s[1]=x(e=>a(o).get(r.route("attendance.result")),["prevent"]))},[h(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>a(o).search=e),type:"text",name:"search",id:"search",autofocus:"",class:"block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-primary focus:ring-primary sm:text-sm",placeholder:"Rechercher..."},null,512),[[f,a(o).search]]),t("div",S,[t("button",j,[d(a(w),{class:"w-5"})])])],32),d(g,{type:"date",modelValue:a(o).date,"onUpdate:modelValue":s[2]||(s[2]=e=>a(o).date=e),onChange:s[3]||(s[3]=e=>a(o).get(r.route("attendance.result")))},null,8,["modelValue"])])]),t("div",B,[t("div",M,[t("div",P,[t("div",R,[t("table",T,[D,t("tbody",F,[(l(!0),n(p,null,_(i.contacts.data,e=>(l(),n("tr",{key:e.id,class:"hover:bg-gray-50"},[t("td",U,c(e.id),1),t("td",A,c(e.name),1),e.attendances_count==i.days?(l(),n("td",C,I)):e.attendances_count>0&&e.attendances_count<i.days?(l(),n("td",L,q)):(l(),n("td",z,H)),t("td",J,c(e.attendances_count),1)]))),128))])]),d(b,{objects:i.contacts},null,8,["objects"])])])])])])],64))}};export{et as default};