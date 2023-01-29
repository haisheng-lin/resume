import{c as M,d,a as I,b as a,e as l,u as v,o as c,f as L,g as y,t as r,r as P,F as b,h as w,i as u,w as f,j as V,k as H,l as j,m as S}from"./vendor-831c6c45.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const m of i)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(i){const m={};return i.integrity&&(m.integrity=i.integrity),i.referrerpolicy&&(m.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?m.credentials="include":i.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(i){if(i.ep)return;i.ep=!0;const m=o(i);fetch(i.href,m)}})();const N={print:e=>{const{normalize:t}=e;return t(["打印"])},resumeTitle:e=>{const{normalize:t,interpolate:o,list:s}=e;return t([o(s(0)),"个人简历"])},male:e=>{const{normalize:t}=e;return t(["男"])},female:e=>{const{normalize:t}=e;return t(["女"])},summary:e=>{const{normalize:t}=e;return t(["概要"])},profile:e=>{const{normalize:t}=e;return t(["基本信息"])},education:e=>{const{normalize:t}=e;return t(["教育背景"])},experience:e=>{const{normalize:t}=e;return t(["工作经历"])},name:e=>{const{normalize:t}=e;return t(["姓名"])},phone:e=>{const{normalize:t}=e;return t(["电话"])},email:e=>{const{normalize:t}=e;return t(["邮箱"])},skills:e=>{const{normalize:t}=e;return t(["专业技能"])},links:e=>{const{normalize:t}=e;return t(["其他链接"])},now:e=>{const{normalize:t}=e;return t(["至今"])},resume:{summary:e=>{const{normalize:t}=e;return t(["四年前端开发经验，有意向于广州寻找新的前端工程师岗位"])},name:e=>{const{normalize:t}=e;return t(["林海晟"])},job:e=>{const{normalize:t}=e;return t(["前端工程师"])},master:e=>{const{normalize:t}=e;return t(["硕士"])},bachelor:e=>{const{normalize:t}=e;return t(["学士"])},asu:e=>{const{normalize:t}=e;return t(["亚利桑那州立大学"])},gdufs:e=>{const{normalize:t}=e;return t(["广东外语外贸大学"])},computerScience:e=>{const{normalize:t}=e;return t(["计算机科学"])},finance:e=>{const{normalize:t}=e;return t(["金融学"])},tuling:{company:e=>{const{normalize:t}=e;return t(["广州图灵网络科技有限公司"])},department:e=>{const{normalize:t}=e;return t(["技术部"])},achievement1:e=>{const{normalize:t}=e;return t(["独自承担公司内部管理平台搭建与开发维护"])},achievement2:e=>{const{normalize:t}=e;return t(["负责开发游戏 app 包内嵌 h5 webview 相关功能"])}},xiao:{company:e=>{const{normalize:t}=e;return t(["广东世纪晓教育科技有限公司"])},department:e=>{const{normalize:t}=e;return t(["销售运营部 & C 端用户产品部"])},achievement1:e=>{const{normalize:t}=e;return t(["搭建前端错误日志收集上报，及对接监控追踪平台，监控脚本执行错误、接口错误、资源错误，使线上问题定位效率得到提升，通过统计数据分析错误类型的出现频率，并修复错误，使错误率从 16% 降至 11%"])},achievement2:e=>{const{normalize:t}=e;return t(["参与制定部门 js bridge 方案、接口规范与开发维护，统一 sdk 接入，降低多套代码维护成本"])},achievement3:e=>{const{normalize:t}=e;return t(["参与部门前端工程化方案制定并开发脚手架，提高业务项目构建脚本复用性，同时保留定制化构建需求的自由度以及极强的扩展性"])},achievement4:e=>{const{normalize:t}=e;return t(["使用多种方案优化项目性能，提高开发环境与构建时的编译速度 25%"])},achievement5:e=>{const{normalize:t}=e;return t(["维护代码使用说明文档，降低开发成员间的沟通成本；协助同事进行 code review，建立团队的代码规范"])}},kingsoft:{company:e=>{const{normalize:t}=e;return t(["珠海金山办公软件有限公司"])},department:e=>{const{normalize:t}=e;return t(["wps+"])},achievement1:e=>{const{normalize:t}=e;return t(["参与多语言自动化解决方案，项目构建阶段前自动拉取并生成多语言资源，降低手动维护多语言资源的成本，并推广至其他业务使用"])},achievement2:e=>{const{normalize:t}=e;return t(["参与开发公司级别脚手架项目，为前端项目提供统一的脚手架及通用项目命令功能，降低项目上手成本"])},achievement3:e=>{const{normalize:t}=e;return t(["项目构建优化，使构建时间从 161s 缩短至 103s，时间降低 36%"])},achievement4:e=>{const{normalize:t}=e;return t(["作为项目指导人，提供技术方案、项目规范、任务拆分协作等指导，编写项目上手文档并分享，使新同学快速上手项目，共同负责独立模块开发"])},achievement5:e=>{const{normalize:t}=e;return t(["利用 eslint, commitlint, prettier, lint-staged 等工具，规范项目质量；编写单元测试，降低 bug 出现概率；利用 Gitlab CI 实现流程规范的自动化检查"])}}}},n=M({legacy:!1,locale:"zh-CN",messages:{"zh-CN":N}}),O=["width","height"],D=["xlink:href","fill"],$=d({__name:"svg-icon",props:{name:null,size:{default:20},fill:{default:"#333"}},setup(e){const t=e,o=I(()=>`#icon-${t.name}`);return(s,i)=>(c(),a("svg",{width:e.size,height:e.size,"aria-hidden":"true"},[l("use",{"xlink:href":v(o),fill:e.fill},null,8,D)],8,O))}}),q={class:"resume-section"},R={class:"section-header"},G={class:"section-header--container"},J={class:"section-header--title"},K=d({__name:"section",props:{icon:null,title:null},setup(e){return(t,o)=>(c(),a("section",q,[l("div",R,[l("div",G,[e.icon?(c(),L($,{key:0,name:e.icon,size:16,fill:"var(--text-color-secondary)"},null,8,["name"])):y("",!0),l("h2",J,r(e.title),1)])]),P(t.$slots,"default",{},void 0,!0)]))}});const _=(e,t)=>{const o=e.__vccOpts||e;for(const[s,i]of t)o[s]=i;return o},g=_(K,[["__scopeId","data-v-0c9a5c4b"]]),Q={class:"resume-profile"},U={class:"resume-profile--middle"},W={class:"resume-profile--right"},X=d({__name:"profile",props:{profile:null},setup(e){return(t,o)=>(c(),a("div",Q,[l("span",null,r(t.$t("name"))+": "+r(e.profile.name),1),l("span",U,r(t.$t("phone"))+": "+r(e.profile.phone),1),l("span",W,r(t.$t("email"))+": "+r(e.profile.email),1)]))}});const Y=_(X,[["__scopeId","data-v-d4f1bf98"]]),Z={class:"resume-education--left"},ee={class:"resume-education--middle"},te={class:"resume-education--right"},ne=d({__name:"educations",props:{educations:null},setup(e){return(t,o)=>(c(),a("ul",null,[(c(!0),a(b,null,w(e.educations,s=>(c(),a("li",{key:s.school,class:"resume-education"},[l("strong",Z,r(s.major)+" ("+r(s.degree)+") ",1),l("strong",ee,r(s.school),1),l("span",te,r(s.startTime)+"-"+r(s.endTime),1)]))),128))]))}});const oe=_(ne,[["__scopeId","data-v-ad5d5866"]]),se={class:"resume-experience--base"},ie={class:"resume-experience--company"},re={class:"resume-experience--time"},ce={class:"resume-experience-achievements"},le={class:"resume-achievement"},ae=d({__name:"experience",props:{experience:null},setup(e){return(t,o)=>(c(),a("ul",null,[(c(!0),a(b,null,w(e.experience,s=>(c(),a("li",{key:s.company,class:"resume-experience"},[l("div",se,[l("h3",ie,r(s.company)+" - "+r(s.title),1),l("strong",re,r(s.startTime)+"-"+r(s.endTime),1)]),l("ul",ce,[(c(!0),a(b,null,w(s.achievements,i=>(c(),a("li",le,r(i),1))),256))])]))),128))]))}});const me=_(ae,[["__scopeId","data-v-ef0448e6"]]),ue={class:"resume-links"},de={class:"resume-link"},he=d({__name:"links",props:{links:null},setup(e){return(t,o)=>(c(),a("ul",ue,[(c(!0),a(b,null,w(e.links,s=>(c(),a("li",de,r(s),1))),256))]))}});const _e=_(he,[["__scopeId","data-v-cba4e2de"]]),pe={class:"resume-container"},fe={class:"resume-title"},ge={key:0,class:"resume-subtitle"},ze=d({__name:"index",props:{resume:null},setup(e){return(t,o)=>(c(),a("article",pe,[l("h2",fe,r(t.$t("resumeTitle",[e.resume.profile.name])),1),e.resume.url?(c(),a("h3",ge,r(e.resume.url),1)):y("",!0),u(g,{icon:"comment",title:t.$t("summary")},{default:f(()=>[l("span",null,r(e.resume.summary),1)]),_:1},8,["title"]),u(g,{icon:"user",title:t.$t("profile")},{default:f(()=>[u(Y,{profile:e.resume.profile},null,8,["profile"])]),_:1},8,["title"]),u(g,{icon:"graduation-cap",title:t.$t("education")},{default:f(()=>[u(oe,{educations:e.resume.educations},null,8,["educations"])]),_:1},8,["title"]),u(g,{icon:"briefcase",title:t.$t("experience")},{default:f(()=>[u(me,{experience:e.resume.experience},null,8,["experience"])]),_:1},8,["title"]),e.resume.skills?(c(),L(g,{key:1,icon:"book",title:t.$t("skills")},{default:f(()=>[l("span",null,r(e.resume.skills.join(", ")),1)]),_:1},8,["title"])):y("",!0),e.resume.links?(c(),L(g,{key:2,icon:"link",title:t.$t("links")},{default:f(()=>[u(_e,{links:e.resume.links},null,8,["links"])]),_:1},8,["title"])):y("",!0)]))}});const ve=_(ze,[["__scopeId","data-v-7ca511dd"]]),ye={url:"https://haisheng-lin.github.io/resume",summary:n.global.t("resume.summary"),profile:{name:n.global.t("resume.name"),gender:"male",age:29,phone:"13802720439",email:"504405161@qq.com"},educations:[{school:n.global.t("resume.asu"),degree:n.global.t("resume.master"),major:n.global.t("resume.computerScience"),startTime:"2015",endTime:"2017"},{school:n.global.t("resume.gdufs"),degree:n.global.t("resume.bachelor"),major:n.global.t("resume.computerScience"),startTime:"2011",endTime:"2015"},{school:n.global.t("resume.gdufs"),degree:n.global.t("resume.bachelor"),major:n.global.t("resume.finance"),startTime:"2011",endTime:"2015"}],experience:[{company:n.global.t("resume.kingsoft.company"),title:n.global.t("resume.job"),startTime:"2020.08",endTime:n.global.t("now"),department:n.global.t("resume.kingsoft.department"),achievements:[n.global.t("resume.kingsoft.achievement1"),n.global.t("resume.kingsoft.achievement2"),n.global.t("resume.kingsoft.achievement3"),n.global.t("resume.kingsoft.achievement4"),n.global.t("resume.kingsoft.achievement5")]},{company:n.global.t("resume.xiao.company"),title:n.global.t("resume.job"),startTime:"2019.04",endTime:"2020.06",department:n.global.t("resume.xiao.department"),achievements:[n.global.t("resume.xiao.achievement1"),n.global.t("resume.xiao.achievement2"),n.global.t("resume.xiao.achievement3"),n.global.t("resume.xiao.achievement4"),n.global.t("resume.xiao.achievement5")]},{company:n.global.t("resume.tuling.company"),title:n.global.t("resume.job"),startTime:"2018.07",endTime:"2019.04",department:n.global.t("resume.tuling.department"),achievements:[n.global.t("resume.tuling.achievement1"),n.global.t("resume.tuling.achievement2")]}],skills:["git","html","css","JavaScript","TypeScript","webpack"],links:["https://github.com/haisheng-lin"]},be={"primary-color":"#18A058","background-color":"#FFFFFF","text-color":"#000000","text-color-secondary":"#FFFFFF"},we={"primary-color":"#44C790","background-color":"#24292E","text-color":"#E1E4E8","text-color-secondary":"#D9EBE9"},k=document.createElement("style");k.setAttribute("id","css-var-definition");k.setAttribute("type","text/css");document.head.appendChild(k);const z=k.sheet,ke=(z==null?void 0:z.insertRule(":root{}"))||0;var F,T;const C=(T=(F=z==null?void 0:z.cssRules)==null?void 0:F[ke])==null?void 0:T.style;function xe(){const t=window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light",o=V(t),s=I(()=>o.value==="dark"),i={light:be,dark:we},m=(h,x)=>(h&&(C==null||C.setProperty(`--${h}`,x)),`--${h}`),p=h=>{o.value=h},A=()=>{p(o.value==="light"?"dark":"light")};return H(o,h=>{const x=i[h];Object.entries(x).forEach(([B,E])=>{m(B,E)})},{immediate:!0}),{theme:j(o),isDarkTheme:s,setTheme:p,switchTheme:A}}const Ce={class:"app-container"},Le={class:"app-header"},$e={class:"app-main"},Fe=d({__name:"App",setup(e){const{isDarkTheme:t,switchTheme:o}=xe();function s(){window.print()}return(i,m)=>(c(),a("div",Ce,[l("header",Le,[u($,{class:"app-ops--item",fill:"var(--text-color)",name:v(t)?"sun":"moon",onClick:v(o)},null,8,["name","onClick"]),u($,{class:"app-ops--item",fill:"var(--text-color)",name:"print",onClick:s})]),l("main",$e,[u(ve,{resume:v(ye)},null,8,["resume"])])]))}});const Te=_(Fe,[["__scopeId","data-v-0599dc81"]]);if(typeof window<"u"){let e=function(){var t=document.body,o=document.getElementById("__svg__icons__dom__");o||(o=document.createElementNS("http://www.w3.org/2000/svg","svg"),o.style.position="absolute",o.style.width="0",o.style.height="0",o.id="__svg__icons__dom__",o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),o.innerHTML='<symbol  viewBox="0 0 448 512" id="icon-book"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H96zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-briefcase"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-56 8v40H64c-35.3 0-64 28.7-64 64v96h512v-96c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm384 232H320v32c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-32H0v128c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V288z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-comment"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path d="M512 240c0 114.9-114.6 208-256 208-37.1 0-72.3-6.4-104.1-17.9-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.8 3.4-17.4l.3-.3c.3-.3.7-.7 1.3-1.4 1.1-1.2 2.8-3.1 4.9-5.7 4.1-5 9.6-12.4 15.2-21.6 10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240 0 125.1 114.6 32 256 32s256 93.1 256 208z" /></symbol><symbol  viewBox="0 0 640 512" id="icon-graduation-cap"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9V320c0 28.4-10.8 57.7-22.3 80.8-6.5 13-13.9 25.8-22.5 37.6-3.2 4.3-4.1 9.9-2.3 15s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7.3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7-3.2-14.2-7.5-28.7-13.5-42v-24.6c0-30.2 10.2-58.7 27.9-81.5 12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5.8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1l280.6-101c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1c-7.6-2.7-15.6-4.1-23.7-4.1zM128 408c0 35.3 86 72 192 72s192-36.7 192-72l-15.3-145.4L354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6l-142.2-51.4L128 408z" /></symbol><symbol  viewBox="0 0 640 512" id="icon-link"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6 31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0l112.3-112.3zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5 50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l112.2-112.3c31.5-31.5 82.5-31.5 114 0 27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></symbol><symbol  viewBox="0 0 384 512" id="icon-moon"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path d="M223.5 32C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-print"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path d="M128 0C92.7 0 64 28.7 64 64v96h64V64h226.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zm256 352v96H128v-96h256zm64 32h32c17.7 0 32-14.3 32-32v-96c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32h32v64c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-64zm-16-88c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sun"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391l-19.9 107.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121l19.9-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1l90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128 128-57.3 128-128z" /></symbol><symbol  viewBox="0 0 448 512" id="icon-user"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z" /></symbol>',t.insertBefore(o,t.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}S(Te).use(n).mount("#app");
