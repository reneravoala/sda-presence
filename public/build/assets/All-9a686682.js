import{T as p,o as r,c as n,d,a as t,t as s,w as h,e as f,v as x,u as a,F as m,g as u}from"./app-9d315fbe.js";import{_ as y}from"./NavBar-07c15b9e.js";import{r as b}from"./MagnifyingGlassIcon-49a3dd72.js";import"./Logo-7ddd8e25.js";import"./_plugin-vue_export-helper-c27b6911.js";const g={class:"px-4 sm:px-6 lg:px-8 m-5"},_={class:"sm:flex sm:items-center"},v={class:"sm:flex-auto"},w={class:"text-xl font-semibold leading-6 text-gray-900"},k={class:"flex flex-wrap gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},T=["href"],N={class:"absolute inset-y-0 right-0 flex py-1.5 pr-1.5"},B={class:"inline-flex items-center rounded px-2 font-sans text-sm font-medium text-gray-400 transition-all hover:text-blue-100"},S={class:"mt-8 flow-root"},V={class:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},A={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},D={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"},F={class:"min-w-full divide-y divide-gray-300"},M=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6"}," Identifiant "),t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6"},"Nom "),t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6"},"Téléphone "),t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6"},"Adresse ")])],-1),$={class:"divide-y divide-gray-200 bg-white"},j={class:"whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6"},E={class:"whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6"},I={class:"whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6"},L={class:"whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6"},G={__name:"All",props:{contacts:Object,total:Number,search:String},setup(l){const i=p({search:l.search});return(c,o)=>(r(),n(m,null,[d(y),t("div",g,[t("div",_,[t("div",v,[t("h1",w,"Tous les contacts ("+s(l.total??0)+" au total)",1)]),t("div",k,[t("a",{href:c.route("contacts.download"),target:"_blank",class:"rounded-md bg-primary px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-primary/95 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"}," Télécharger (xls) ",8,T),t("form",{class:"relative mt-1 flex items-center",onSubmit:o[1]||(o[1]=h(e=>a(i).get(c.route("contacts.all")),["prevent"]))},[f(t("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>a(i).search=e),type:"text",name:"search",id:"search",class:"block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-primary focus:ring-primary sm:text-sm",placeholder:"Rechercher..."},null,512),[[x,a(i).search]]),t("div",N,[t("button",B,[d(a(b),{class:"w-5"})])])],32)])]),t("div",S,[t("div",V,[t("div",A,[t("div",D,[t("table",F,[M,t("tbody",$,[(r(!0),n(m,null,u(l.contacts,e=>(r(),n("tr",{key:e.id,class:"hover:bg-gray-50"},[t("td",j,s(e.id),1),t("td",E,s(e.name),1),t("td",I,s(e.phone),1),t("td",L,s(e.address),1)]))),128))])])])])])])])],64))}};export{G as default};
