"use strict";(self["webpackChunkblog_web"]=self["webpackChunkblog_web"]||[]).push([[778],{47919:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(73396),l=n(87139);const o={class:"breadcrumbs flex flex-row gap-6 text-white"};function r(e,t,n,r,s,i){return(0,a.wg)(),(0,a.iD)("ul",o,[(0,a._)("li",null,(0,l.zw)(e.t("menu.home")),1),(0,a._)("li",null,(0,l.zw)(e.current),1)])}var s=n(35213),i=(0,a.aZ)({name:"Breadcrumb",props:["current"],setup(){const{t:e}=(0,s.QT)();return{t:e}}}),c=n(40089);const u=(0,c.Z)(i,[["render",r],["__scopeId","data-v-64013c38"]]);var d=u},6355:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var a=n(73396),l=n(87139),o=n(49242);const r={class:"flex flex-col"},s={class:"post-header"},i={key:0,class:"post-title text-white uppercase"},c={class:"main-grid"},u={class:"relative"},d=["innerHTML"],m={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},h=(0,a._)("br",null,null,-1),p=(0,a._)("br",null,null,-1),b=(0,a._)("br",null,null,-1),g={class:"col-span-1"},v={id:"sticky-sidebar"},f={class:"sidebar-box mb-4"},w=(0,a._)("div",{id:"toc2"},null,-1);function x(e,t,n,x,_,y){const k=(0,a.up)("Breadcrumb"),Z=(0,a.up)("ob-skeleton"),S=(0,a.up)("Comment"),T=(0,a.up)("Profile"),W=(0,a.up)("SubTitle"),C=(0,a.up)("Navigator"),D=(0,a.up)("Sticky"),M=(0,a.up)("Sidebar");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(k,{current:e.t("menu.about")},null,8,["current"]),(0,a._)("div",r,[(0,a._)("div",s,[e.about?((0,a.wg)(),(0,a.iD)("h1",i,(0,l.zw)(e.t("titles.about")),1)):((0,a.wg)(),(0,a.j4)(Z,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"}))]),(0,a._)("div",c,[(0,a._)("div",u,[e.about?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"post-html",ref:"postRef",innerHTML:e.about},null,8,d)):((0,a.wg)(),(0,a.iD)("div",m,[(0,a.Wm)(Z,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),h,(0,a.Wm)(Z,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),p,b,(0,a.Wm)(Z,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})])),(0,a.Wm)(S)]),(0,a._)("div",g,[(0,a.Wm)(M,null,{default:(0,a.w5)((()=>[(0,a.Wm)(T,{author:"blog-author"}),(0,a.Wm)(D,{stickyTop:32,endingElId:"footer",dynamicElClass:"#sticky-sidebar"},{default:(0,a.w5)((()=>[(0,a._)("div",v,[(0,a.Wm)(o.uT,{name:"fade-slide-y",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a._)("div",f,[(0,a.Wm)(W,{title:"titles.toc",icon:"toc"},null,8,["title"]),w])])),_:1}),(0,a.Wm)(C)])])),_:1})])),_:1})])])])])}var _=n(44870),y=n(47919),k=n(35213),Z=n(99250),S=n(45466),T=n(17437),W=n(62069),C=n(50913),D=n(53632),M=n(43774),R=n.n(M),z=n(2549),B=n.n(z),E=(n(79525),n(33731),n(77372),n(61678),n(3275),n(28781),n(51973),n(61739),n(70714),n(8072),n(9688),n(64121),n(80077),n(23456),n(73286)),H=n(13184),I=n(36883),N=n(69622),j=(0,a.aZ)({name:"About",components:{Breadcrumb:y.Z,Sidebar:Z.YE,Profile:Z.NZ,Navigator:Z.C3,Sticky:W.Z,SubTitle:C.D,Comment:D.s},setup(){const e=(0,S.E)(),t=(0,T.j)(),{t:n}=(0,k.QT)(),l=(0,_.iH)(),o=(0,_.qj)({about:"",comments:[],haveMore:!1,isReload:!1,images:[]}),r=(0,_.qj)({current:1,size:7});t.type=3,(0,a.bv)((()=>{u(),c()})),(0,a.Ah)((()=>{e.resetHeaderImage(),R().destroy()})),(0,a.JJ)("comments",(0,a.Fl)((()=>o.comments))),(0,a.JJ)("haveMore",(0,a.Fl)((()=>o.haveMore))),H.Z.on("aboutFetchComment",(()=>{r.current=1,o.isReload=!0,u()})),H.Z.on("aboutFetchReplies",(e=>{d(e)})),H.Z.on("aboutLoadMore",(()=>{u()}));const s=e=>{(0,I.e)({images:o.images,index:o.images.indexOf(e)})},i=()=>{let e=l.value.children;if(e.length)for(let a=0;a<e.length;a++){let t=e[a],n=/^H[1-4]{1}$/;n.exec(t.tagName)&&(t.id=a)}R().init({tocSelector:"#toc2",contentSelector:".post-html",headingSelector:"h1, h2, h3",collapseDepth:3,disableTocScrollSync:!0,onClick:function(e){e.preventDefault()}});const t=l.value.getElementsByTagName("img");for(var n=0;n<t.length;n++)o.images.push(t[n].src),t[n].addEventListener("click",(function(e){s(e.target.currentSrc)}))},c=()=>{E.Z.getAbout().then((({data:e})=>{e.data.content=(0,N.Z)(e.data.content),o.about=e.data.content,(0,a.Y3)((()=>{B().highlightAll(),i()}))}))},u=()=>{const e={type:3,topicId:null,current:r.current,size:r.size};E.Z.getComments(e).then((({data:e})=>{o.isReload?(o.comments=e.data.records,o.isReload=!1):o.comments.push(...e.data.records),e.data.total<=o.comments.length?o.haveMore=!1:o.haveMore=!0,r.current++}))},d=e=>{E.Z.getRepliesByCommentId(o.comments[e].id).then((({data:t})=>{o.comments[e].replyDTOs=t.data}))};return{postRef:l,...(0,_.BK)(o),t:n}}}),A=n(40089);const F=(0,A.Z)(j,[["render",x]]);var J=F}}]);