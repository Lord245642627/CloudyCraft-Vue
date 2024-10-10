"use strict";(self["webpackChunkblog_web"]=self["webpackChunkblog_web"]||[]).push([[461],{26664:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(73396),r=t(87139);const i={class:"paginator"},l=["onClick"];function o(e,a,t,o,c,s){const g=(0,n.up)("svg-icon");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("ul",null,[e.currentPage>1?((0,n.wg)(),(0,n.iD)("li",{key:0,class:"text-ob-bright",onClick:a[0]||(a[0]=a=>e.pageChangeEmitter(e.currentPage-1))},[(0,n.Wm)(g,{"icon-class":"arrow-left"}),(0,n.Uk)(" "+(0,r.zw)(e.t("settings.paginator.newer")),1)])):(0,n.kq)("",!0),0!==e.paginator.head?((0,n.wg)(),(0,n.iD)("li",{key:1,class:(0,r.C_)({active:e.currentPage===e.paginator.head}),onClick:a[1]||(a[1]=a=>e.pageChangeEmitter(e.paginator.head))},(0,r.zw)(e.paginator.head),3)):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.paginator.pages,((a,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t,class:(0,r.C_)({active:e.currentPage===a}),onClick:t=>e.pageChangeEmitter(a)},(0,r.zw)(a),11,l)))),128)),0!==e.paginator.end?((0,n.wg)(),(0,n.iD)("li",{key:2,class:(0,r.C_)({active:e.currentPage===e.paginator.end}),onClick:a[2]||(a[2]=a=>e.pageChangeEmitter(e.paginator.end))},(0,r.zw)(e.paginator.end),3)):(0,n.kq)("",!0),e.currentPage<e.pages?((0,n.wg)(),(0,n.iD)("li",{key:3,class:"text-ob-bright",onClick:a[3]||(a[3]=a=>e.pageChangeEmitter(e.currentPage+1))},[(0,n.Uk)((0,r.zw)(e.t("settings.paginator.older"))+" ",1),(0,n.Wm)(g,{"icon-class":"arrow-right"})])):(0,n.kq)("",!0)])])}var c=t(44870),s=t(35213),g=(0,n.aZ)({name:"Paginator",emits:["pageChange"],props:["pageTotal","pageSize","page"],setup(e,{emit:a}){const{t:t}=(0,s.QT)(),r=(0,c.BK)(e),i=(0,n.Fl)((()=>Math.ceil(r.pageTotal.value/r.pageSize.value))),l=(0,n.Fl)((()=>{if(i.value<=3){const e=[];for(let a=0;a<i.value;a++)e.push(a+1);return{head:0,pages:e,end:0}}return r.page.value>=1&&r.page.value<3?{head:1,pages:[2,3,"..."],end:i.value}:r.page.value>=3&&r.page.value<=i.value-2?{head:1,pages:["...",r.page.value-1,r.page.value,r.page.value+1,"..."],end:i.value}:{head:1,pages:["...",i.value-2,i.value-1],end:i.value}})),o=e=>{"..."!==e&&a("pageChange",e)};return{currentPage:(0,n.Fl)((()=>r.page.value)),pageChangeEmitter:o,paginator:l,pages:i,t:t}}}),d=t(40089);const p=(0,d.Z)(g,[["render",o],["__scopeId","data-v-9fdb35d6"]]);var u=p},21e3:function(e,a,t){t.r(a),t.d(a,{default:function(){return Q}});var n=t(73396),r=t(87139);const i={class:"block"},l={key:1},o={class:"main-grid"},c={class:"flex flex-col relative"},s=["onClick"],g={class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"};function d(e,a,t,d,p,u){const h=(0,n.up)("FeatureList"),v=(0,n.up)("Feature"),C=(0,n.up)("Title"),b=(0,n.up)("ob-skeleton"),m=(0,n.up)("svg-icon"),f=(0,n.up)("ArticleCard"),k=(0,n.up)("Paginator"),w=(0,n.up)("Profile"),_=(0,n.up)("RecentComment"),y=(0,n.up)("TagBox"),x=(0,n.up)("Notice"),T=(0,n.up)("WebsiteInfo"),A=(0,n.up)("Sidebar");return(0,n.wg)(),(0,n.iD)("div",i,[e.themeConfig.feature?((0,n.wg)(),(0,n.j4)(v,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(h)])),_:1})):(0,n.kq)("",!0),e.themeConfig.feature?((0,n.wg)(),(0,n.iD)("span",l,[(0,n.Wm)(C,{id:"article-list",title:"titles.articles",icon:"article"},null,8,["title"])])):(0,n.kq)("",!0),(0,n._)("div",o,[(0,n._)("div",c,[(0,n._)("ul",{class:(0,r.C_)(e.tabClass)},[(0,n._)("li",{class:(0,r.C_)({active:0===e.activeTab}),onClick:a[0]||(a[0]=a=>e.handleTabChange(0))},[(0,n._)("span",{class:"first-tab",style:(0,r.j5)(e.activeTabStyle(0))},(0,r.zw)(e.t("settings.button-all")),5)],2),e.categories&&e.categories.length>0?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(e.categories,(a=>((0,n.wg)(),(0,n.iD)("li",{key:a.id,class:(0,r.C_)({active:e.activeTab===a.id}),onClick:t=>e.handleTabChange(a.id)},[(0,n._)("span",{style:(0,r.j5)(e.activeTabStyle(a.id))},(0,r.zw)(a.categoryName),5),(0,n._)("b",null,(0,r.zw)(a.articleCount),1)],10,s)))),128)):(e.categories.length=0)?((0,n.wg)(),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(6,(e=>(0,n._)("li",{key:e,style:{position:"relative",top:"-4px"}},[(0,n.Wm)(b,{tag:"span",width:"60px",height:"33px"})]))),64)):(0,n.kq)("",!0)],2),(0,n._)("span",{class:(0,r.C_)(e.expanderClass),onClick:a[1]||(a[1]=(...a)=>e.expandHandler&&e.expandHandler(...a))},[(0,n.Wm)(m,{"icon-class":"chevron"})],2),(0,n._)("ul",g,[!0===e.haveArticles?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(e.articles,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e.id},[(0,n.Wm)(f,{class:"home-article",data:e},null,8,["data"])])))),128)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(12,(e=>(0,n._)("li",{key:e},[(0,n.Wm)(f,{data:{}})]))),64))]),(0,n.Wm)(k,{pageSize:e.pagination.size,pageTotal:e.pagination.total,page:e.pagination.current,onPageChange:e.pageChangeHanlder},null,8,["pageSize","pageTotal","page","onPageChange"])]),(0,n._)("div",null,[(0,n.Wm)(A,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w),((0,n.wg)(),(0,n.j4)(_,{key:0})),(0,n.Wm)(y),(0,n.Wm)(x),(0,n.Wm)(T)])),_:1})])])])}var p=t(44870);const u={id:"feature"};function h(e,a,t,r,i,l){const o=(0,n.up)("horizontal-article");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(o,{class:"home-horizontal-article"}),(0,n.WI)(e.$slots,"default")])}var v=t(36994),C=(0,n.aZ)({name:"Feature",components:{HorizontalArticle:v.Z},setup(){return{}}}),b=t(40089);const m=(0,b.Z)(C,[["render",h]]);var f=m;const k={class:"inverted-main-grid py-8 gap-8 box-border"},w={class:"relative overflow-hidden h-56 lg:h-auto rounded-2xl bg-ob-deep-800 shadow-lg"},_={class:"ob-gradient-plate opacity-90 relative z-10 bg-ob-deep-900 rounded-2xl flex justify-start items-end px-8 pb-10 shadow-md"},y={class:"text-3xl pb-8 lg:pb-16"},x={class:"relative text-2xl text-ob-bright font-semibold"},T={class:"grid lg:grid-cols-2 gap-8"};function A(e,a,t,i,l,o){const c=(0,n.up)("svg-icon"),s=(0,n.up)("ArticleCard");return(0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("div",w,[(0,n._)("div",_,[(0,n._)("h2",y,[(0,n._)("p",{style:(0,r.j5)(e.gradientText)},"EDITOR'S SELECTION",4),(0,n._)("span",x,[(0,n.Wm)(c,{class:"inline-block","icon-class":"hot"}),(0,n.Uk)(" "+(0,r.zw)(e.t("home.recommended")),1)])])]),(0,n._)("span",{class:"absolute top-0 w-full h-full z-0",style:(0,r.j5)(e.gradientBackground)},null,4)]),(0,n._)("ul",T,[e.featuredArticles.length>0?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(e.featuredArticles,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e.id},[(0,n.Wm)(s,{class:"home-featured-article",data:e},null,8,["data"])])))),128)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(2,(e=>(0,n._)("li",{key:e},[(0,n.Wm)(s,{data:{}})]))),64))])])}var z=t(57619),W=t(82866),D=t(35213),H=t(47264),Z=(0,n.aZ)({name:"FeatureList",components:{ArticleCard:H.T},setup(){const e=(0,z.q)(),a=(0,W.W)(),{t:t}=(0,D.QT)();return{gradientBackground:(0,n.Fl)((()=>({background:e.themeConfig.header_gradient_css}))),gradientText:e.themeConfig.background_gradient_style,featuredArticles:(0,p.Vh)(a.$state,"featuredArticles"),t:t}}});const E=(0,b.Z)(Z,[["render",A]]);var P=E,F=t(50913),q=t(99250),S=t(83560),B=t(47139);const K=(0,B.Q_)("categoryStore",{state:()=>({categories:[]}),actions:{}});var j=t(26664),I=t(73286),Y=t(69622),L=(0,n.aZ)({name:"Home",components:{Feature:f,FeatureList:P,ArticleCard:H.T,HorizontalArticle:H.k,Title:F.b,Paginator:j.Z,Sidebar:q.YE,Profile:q.NZ,RecentComment:q.L6,TagBox:q.ac,Notice:q.qX,WebsiteInfo:q.a},setup(){const e=(0,z.q)(),a=(0,S.L)(),t=(0,W.W)(),r=K(),{t:i}=(0,D.QT)(),l=(0,p.iH)({"tab-expander":!0,expanded:!1}),o=(0,p.iH)({tab:!0,"expanded-tab":!1}),c=(0,p.iH)(0),s=(0,p.iH)(0),g=(0,p.qj)({haveArticles:!1}),d=(0,p.qj)({size:12,total:0,current:1});let u=0;(0,n.bv)((()=>{h(),b(),v();const e=document.getElementById("article-list");s.value=e&&e instanceof HTMLElement?e.offsetTop+120:0}));const h=()=>{I.Z.getTopAndFeaturedArticles().then((({data:e})=>{e.data.topArticle.articleContent=(0,Y.Z)(e.data.topArticle.articleContent).replace(/<\/?[^>]*>/g,"").replace(/[|]*\n/,"").replace(/&npsp;/gi,""),e.data.featuredArticles.forEach((e=>{e.articleContent=(0,Y.Z)(e.articleContent).replace(/<\/?[^>]*>/g,"").replace(/[|]*\n/,"").replace(/&npsp;/gi,"")})),t.topArticle=e.data.topArticle,t.featuredArticles=e.data.featuredArticles}))},v=()=>{c.value=a.tab,u=a.tab,d.current=a.page,0===a.tab?(g.haveArticles=!1,I.Z.getArticles({current:d.current,size:d.size}).then((({data:e})=>{0===e.code&&(e.data.records.forEach((e=>{e.articleContent=(0,Y.Z)(e.articleContent).replace(/<\/?[^>]*>/g,"").replace(/[|]*\n/,"").replace(/&npsp;/gi,"")})),t.articles=e.data.records,d.total=e.data.total,g.haveArticles=!0)}))):C(a.tab)},C=e=>{g.haveArticles=!1,I.Z.getArticlesByCategoryId({current:d.current,size:d.size,categoryId:e}).then((({data:e})=>{e.data.records.forEach((e=>{e.articleContent=(0,Y.Z)(e.articleContent).replace(/<\/?[^>]*>/g,"").replace(/[|]*\n/,"").replace(/&npsp;/gi,"")})),t.articles=e.data.records,d.total=e.data.total,g.haveArticles=!0}))},b=()=>{r.categories=[],I.Z.getAllCategories().then((({data:e})=>{r.categories.push(...e.data)}))},m=()=>{l.value.expanded=!l.value.expanded,o.value["expanded-tab"]=!o.value["expanded-tab"]},f=e=>{a.tab=e,a.page=1,d.current=1,c.value=e,u=e,k(),0===e?v():C(e)},k=()=>{window.scrollTo({top:s.value})},w=a=>a===c.value?{background:e.themeConfig.header_gradient_css}:{},_=e=>{a.page=e,d.current=e,k(),0===u?v():C(u)};return{...(0,p.BK)(g),...(0,p.BK)(t.$state),categories:(0,p.Vh)(r.$state,"categories"),gradientText:(0,n.Fl)((()=>e.themeConfig.background_gradient_style)),gradientBackground:(0,n.Fl)((()=>({background:e.themeConfig.header_gradient_css}))),themeConfig:(0,n.Fl)((()=>e.themeConfig)),expanderClass:l,tabClass:o,expandHandler:m,handleTabChange:f,activeTabStyle:w,activeTab:c,pagination:d,pageChangeHanlder:_,t:i}}});const N=(0,b.Z)(L,[["render",d]]);var Q=N}}]);