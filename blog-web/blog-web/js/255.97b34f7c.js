"use strict";(self["webpackChunkblog_web"]=self["webpackChunkblog_web"]||[]).push([[255],{47919:function(e,t,a){a.d(t,{Z:function(){return u}});var s=a(73396),l=a(87139);const n={class:"breadcrumbs flex flex-row gap-6 text-white"};function r(e,t,a,r,o,c){return(0,s.wg)(),(0,s.iD)("ul",n,[(0,s._)("li",null,(0,l.zw)(e.t("menu.home")),1),(0,s._)("li",null,(0,l.zw)(e.current),1)])}var o=a(35213),c=(0,s.aZ)({name:"Breadcrumb",props:["current"],setup(){const{t:e}=(0,o.QT)();return{t:e}}}),i=a(40089);const m=(0,i.Z)(c,[["render",r],["__scopeId","data-v-64013c38"]]);var u=m},55009:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var s=a(73396),l=a(87139),n=a(49242);const r={class:"flex flex-col"},o={class:"post-header"},c={class:"post-title text-white uppercase"},i={class:"main-grid"},m={class:"relative space-y-5"},u={class:"bg-ob-deep-800 flex p-4 lg:p-8 rounded-2xl shadow-xl mb-8 lg:mb-0"},d={class:"talk-info"},k={class:"user-nickname text-sm"},g={key:0,class:"time"},p=["innerHTML"],w={class:"col-span-1"};function v(e,t,a,v,h,f){const _=(0,s.up)("Avatar"),b=(0,s.up)("svg-icon"),T=(0,s.up)("el-image"),Z=(0,s.up)("el-col"),x=(0,s.up)("el-row"),z=(0,s.up)("Comment"),D=(0,s.up)("Profile"),y=(0,s.up)("Sidebar");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",null,[(0,s._)("div",r,[(0,s._)("div",o,[(0,s._)("h1",c,(0,l.zw)(e.t("titles.talks")),1)]),(0,s._)("div",i,[(0,s._)("div",m,[(0,s._)("div",u,[e.talk.avatar?((0,s.wg)(),(0,s.j4)(_,{key:0,url:e.talk.avatar},null,8,["url"])):(0,s.kq)("",!0),(0,s._)("div",d,[(0,s._)("div",k,(0,l.zw)(e.talk.nickname),1),e.talk.createTime?((0,s.wg)(),(0,s.iD)("div",g,[(0,s.Uk)((0,l.zw)(e.t("settings.shared-on"))+" "+(0,l.zw)(e.formatTime(e.talk.createTime))+", "+(0,l.zw)(e.t(`settings.months[${new Date(e.talk.createTime).getMonth()}]`))+" "+(0,l.zw)(new Date(e.talk.createTime).getDate())+", "+(0,l.zw)(new Date(e.talk.createTime).getFullYear())+" ",1),(0,s.Wm)(b,{"icon-class":"message",class:"message-svg"}),(0,s.Uk)((0,l.zw)(null==e.talk.commentCount?0:e.talk.commentCount),1)])):(0,s.kq)("",!0),(0,s._)("div",{class:"talk-content",innerHTML:e.talk.content},null,8,p),e.talk.imgs?((0,s.wg)(),(0,s.j4)(x,{key:1,class:"talk-images"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.talk.imgs,((t,a)=>((0,s.wg)(),(0,s.j4)(Z,{md:4,key:a},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{class:"images-talks",src:t,"aspect-ratio":"1","max-height":"200",onClick:(0,n.iM)((a=>e.handlePreview(t)),["prevent"])},null,8,["src","onClick"])])),_:2},1024)))),128))])),_:1})):(0,s.kq)("",!0)])]),(0,s.Wm)(z)]),(0,s._)("div",w,[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[(0,s.Wm)(D)])),_:1})])])])])])}var h=a(44870),f=a(22483),_=a(35213),b=a(47919),T=a(99250),Z=a(53632),x=a(37440),z=a(17437),D=a(36883),y=a(13184),C=a(73286),M=(0,s.aZ)({name:"talks",components:{Breadcrumb:b.Z,Sidebar:T.YE,Profile:T.NZ,Comment:Z.s,Avatar:x.Z},setup(){const{t:e}=(0,_.QT)(),t=(0,z.j)(),a=(0,f.yj)(),l=(0,f.tv)(),n=(0,h.qj)({talk:"",comments:[],haveMore:!1,isReload:!1,images:[]}),r=(0,h.qj)({current:1,size:7});t.type=5,(0,s.bv)((()=>{d(),c(),i()})),(0,s.JJ)("comments",(0,s.Fl)((()=>n.comments))),(0,s.JJ)("haveMore",(0,s.Fl)((()=>n.haveMore))),y.Z.on("talkFetchComment",(()=>{r.current=1,n.isReload=!0,i()})),y.Z.on("talkFetchReplies",(e=>{m(e)})),y.Z.on("talkLoadMore",(()=>{i()}));const o=e=>{(0,D.e)({images:n.images,index:n.images.indexOf(e)})},c=()=>{C.Z.getTalkById(a.params.talkId).then((({data:e})=>{null!==e.data?(n.talk=e.data,n.talk.imgs&&n.images.push(...n.talk.imgs)):l.push({path:"/出错啦"})}))},i=()=>{const e={type:5,topicId:a.params.talkId,current:r.current,size:r.size};C.Z.getComments(e).then((({data:e})=>{n.isReload?(n.comments=e.data.records,n.isReload=!1):n.comments.push(...e.data.records),e.data.total<=n.comments.length?n.haveMore=!1:n.haveMore=!0,r.current++}))},m=e=>{C.Z.getRepliesByCommentId(n.comments[e].id).then((({data:t})=>{n.comments[e].replyDTOs=t.data}))},u=e=>{let t=new Date(e).getHours(),a=new Date(e).getMinutes(),s=new Date(e).getSeconds();return t+":"+a+":"+s},d=()=>{window.scrollTo({top:0})};return{...(0,h.BK)(n),handlePreview:o,formatTime:u,t:e}}}),j=a(40089);const I=(0,j.Z)(M,[["render",v],["__scopeId","data-v-f4ce6fe6"]]);var R=I}}]);