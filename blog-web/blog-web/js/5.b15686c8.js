"use strict";(self["webpackChunkblog_web"]=self["webpackChunkblog_web"]||[]).push([[5],{27005:function(t,e,n){n.r(e),n.d(e,{diagram:function(){return tt}});var i=n(91165),r=n(16898),s=n(41747),a=n(64782),c=n(62526),o=(n(55743),n(84747),n(3617),n(22557),n(66666),n(11068),n(53592),n(63282),n(60841),n(69169),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,2],n=[1,5],i=[6,9,11,17,18,20,22,23,26,27,28],r=[1,15],s=[1,16],a=[1,17],c=[1,18],o=[1,19],l=[1,23],h=[1,24],d=[1,27],u=[4,6,9,11,17,18,20,22,23,26,27,28],p={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,n,i,r,s,a){var c=s.length-1;switch(r){case 1:return s[c-1];case 3:this.$=[];break;case 4:s[c-1].push(s[c]),this.$=s[c-1];break;case 5:case 6:this.$=s[c];break;case 7:case 8:this.$=[];break;case 11:i.getCommonDb().setDiagramTitle(s[c].substr(6)),this.$=s[c].substr(6);break;case 12:this.$=s[c].trim(),i.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=s[c].trim(),i.getCommonDb().setAccDescription(this.$);break;case 15:i.addSection(s[c].substr(8)),this.$=s[c].substr(8);break;case 19:i.addTask(s[c],0,""),this.$=s[c];break;case 20:i.addEvent(s[c].substr(2)),this.$=s[c];break;case 21:i.parseDirective("%%{","open_directive");break;case 22:i.parseDirective(s[c],"type_directive");break;case 23:s[c]=s[c].trim().replace(/'/g,'"'),i.parseDirective(s[c],"arg_directive");break;case 24:i.parseDirective("}%%","close_directive","timeline");break}},table:[{3:1,4:e,7:3,12:4,28:n},{1:[3]},t(i,[2,3],{5:6}),{3:7,4:e,7:3,12:4,28:n},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:r,18:s,20:a,22:c,23:o,24:20,25:21,26:l,27:h,28:n},{1:[2,2]},{14:25,15:[1,26],31:d},t([15,31],[2,22]),t(i,[2,8],{1:[2,1]}),t(i,[2,4]),{7:22,10:28,12:4,17:r,18:s,20:a,22:c,23:o,24:20,25:21,26:l,27:h,28:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,11]),{19:[1,29]},{21:[1,30]},t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},t(i,[2,5]),t(i,[2,12]),t(i,[2,13]),t(u,[2,9]),{14:34,31:d},{31:[2,23]},{11:[1,35]},t(u,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],r=[null],s=[],a=this.table,c="",o=0,l=0,h=2,d=1,u=s.slice.call(arguments,1),p=Object.create(this.lexer),y={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(y.yy[g]=this.yy[g]);p.setInput(t,y.yy),y.yy.lexer=p,y.yy.parser=this,"undefined"==typeof p.yylloc&&(p.yylloc={});var f=p.yylloc;s.push(f);var m=p.options&&p.options.ranges;function x(){var t;return t=i.pop()||p.lex()||d,"number"!==typeof t&&(t instanceof Array&&(i=t,t=i.pop()),t=e.symbols_[t]||t),t}"function"===typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;var b,_,k,v,w,S,$,E,I={};while(1){if(_=n[n.length-1],this.defaultActions[_]?k=this.defaultActions[_]:(null!==b&&"undefined"!=typeof b||(b=x()),k=a[_]&&a[_][b]),"undefined"===typeof k||!k.length||!k[0]){var M="";for(w in E=[],a[_])this.terminals_[w]&&w>h&&E.push("'"+this.terminals_[w]+"'");M=p.showPosition?"Parse error on line "+(o+1)+":\n"+p.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(o+1)+": Unexpected "+(b==d?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(M,{text:p.match,token:this.terminals_[b]||b,line:p.yylineno,loc:f,expected:E})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+b);switch(k[0]){case 1:n.push(b),r.push(p.yytext),s.push(p.yylloc),n.push(k[1]),b=null,l=p.yyleng,c=p.yytext,o=p.yylineno,f=p.yylloc;break;case 2:if(S=this.productions_[k[1]][1],I.$=r[r.length-S],I._$={first_line:s[s.length-(S||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(S||1)].first_column,last_column:s[s.length-1].last_column},m&&(I._$.range=[s[s.length-(S||1)].range[0],s[s.length-1].range[1]]),v=this.performAction.apply(I,[c,l,o,y.yy,k[1],r,s].concat(u)),"undefined"!==typeof v)return v;S&&(n=n.slice(0,-1*S*2),r=r.slice(0,-1*S),s=s.slice(0,-1*S)),n.push(this.productions_[k[1]][0]),r.push(I.$),s.push(I._$),$=a[n[n.length-2]][n[n.length-1]],n.push($);break;case 3:return!0}}return!0}},y=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),i=t[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if(n=this._input.match(this.rules[r[s]]),n&&(!e||n[0].length>e[0].length)){if(e=n,i=s,this.options.backtrack_lexer){if(t=this.test_match(n,r[s]),!1!==t)return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?(t=this.test_match(e,r[i]),!1!==t&&t):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){var t=this.conditionStack.length-1;return t>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions["INITIAL"].rules},topState:function(t){return t=this.conditionStack.length-1-Math.abs(t||0),t>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:break;case 6:break;case 7:return 11;case 8:break;case 9:break;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}};return t}();function g(){this.yy={}}return p.lexer=y,g.prototype=p,p.Parser=g,new g}());o.parser=o;const l=o;let h="",d=0;const u=[],p=[],y=[],g=()=>i.j,f=(t,e,n)=>{(0,i.k)(globalThis,t,e,n)},m=function(){u.length=0,p.length=0,h="",y.length=0,(0,i.m)()},x=function(t){h=t,u.push(t)},b=function(){return u},_=function(){let t=S();const e=100;let n=0;while(!t&&n<e)t=S(),n++;return p.push(...y),p},k=function(t,e,n){const i={id:d++,section:h,type:h,task:t,score:e||0,events:n?[n]:[]};y.push(i)},v=function(t){const e=y.find((t=>t.id===d-1));e.events.push(t)},w=function(t){const e={section:h,type:h,description:t,task:t,classes:[]};p.push(e)},S=function(){const t=function(t){return y[t].processed};let e=!0;for(const[n,i]of y.entries())t(n),e=e&&i.processed;return e},$={clear:m,getCommonDb:g,addSection:x,getSections:b,getTasks:_,addTask:k,addTaskOrg:w,addEvent:v,parseDirective:f},E=Object.freeze(Object.defineProperty({__proto__:null,addEvent:v,addSection:x,addTask:k,addTaskOrg:w,clear:m,default:$,getCommonDb:g,getSections:b,getTasks:_,parseDirective:f},Symbol.toStringTag,{value:"Module"})),I=12,M=function(t,e){const n=t.append("rect");return n.attr("x",e.x),n.attr("y",e.y),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("width",e.width),n.attr("height",e.height),n.attr("rx",e.rx),n.attr("ry",e.ry),void 0!==e.class&&n.attr("class",e.class),n},T=function(t,e){const n=15,i=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",n).attr("stroke-width",2).attr("overflow","visible"),s=t.append("g");function a(t){const i=(0,r.Nb1)().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(n/2).outerRadius(n/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function c(t){const i=(0,r.Nb1)().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(n/2).outerRadius(n/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function o(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return s.append("circle").attr("cx",e.cx-n/3).attr("cy",e.cy-n/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),s.append("circle").attr("cx",e.cx+n/3).attr("cy",e.cy-n/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),e.score>3?a(s):e.score<3?c(s):o(s),i},L=function(t,e){const n=t.append("circle");return n.attr("cx",e.cx),n.attr("cy",e.cy),n.attr("class","actor-"+e.pos),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("r",e.r),void 0!==n.class&&n.attr("class",n.class),void 0!==e.title&&n.append("title").text(e.title),n},N=function(t,e){const n=e.text.replace(/<br\s*\/?>/gi," "),i=t.append("text");i.attr("x",e.x),i.attr("y",e.y),i.attr("class","legend"),i.style("text-anchor",e.anchor),void 0!==e.class&&i.attr("class",e.class);const r=i.append("tspan");return r.attr("x",e.x+2*e.textMargin),r.text(n),i},A=function(t,e){function n(t,e,n,i,r){return t+","+e+" "+(t+n)+","+e+" "+(t+n)+","+(e+i-r)+" "+(t+n-1.2*r)+","+(e+i)+" "+t+","+(e+i)}const i=t.append("polygon");i.attr("points",n(e.x,e.y,50,20,7)),i.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,N(t,e)},D=function(t,e,n){const i=t.append("g"),r=j();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=n.width,r.height=n.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,M(i,r),z(n)(e.text,i,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},n,e.colour)};let C=-1;const O=function(t,e,n){const i=e.x+n.width/2,r=t.append("g");C++;const s=450;r.append("line").attr("id","task"+C).attr("x1",i).attr("y1",e.y).attr("x2",i).attr("y2",s).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),T(r,{cx:i,cy:300+30*(5-e.score),score:e.score});const a=j();a.x=e.x,a.y=e.y,a.fill=e.fill,a.width=n.width,a.height=n.height,a.class="task task-type-"+e.num,a.rx=3,a.ry=3,M(r,a),e.x,z(n)(e.task,r,a.x,a.y,a.width,a.height,{class:"task"},n,e.colour)},H=function(t,e){const n=M(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,class:"rect"});n.lower()},P=function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},j=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},z=function(){function t(t,e,n,r,s,a,c,o){const l=e.append("text").attr("x",n+s/2).attr("y",r+a/2+5).style("font-color",o).style("text-anchor","middle").text(t);i(l,c)}function e(t,e,n,r,s,a,c,o,l){const{taskFontSize:h,taskFontFamily:d}=o,u=t.split(/<br\s*\/?>/gi);for(let p=0;p<u.length;p++){const t=p*h-h*(u.length-1)/2,o=e.append("text").attr("x",n+s/2).attr("y",r).attr("fill",l).style("text-anchor","middle").style("font-size",h).style("font-family",d);o.append("tspan").attr("x",n+s/2).attr("dy",t).text(u[p]),o.attr("y",r+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),i(o,c)}}function n(t,n,r,s,a,c,o,l){const h=n.append("switch"),d=h.append("foreignObject").attr("x",r).attr("y",s).attr("width",a).attr("height",c).attr("position","fixed"),u=d.append("xhtml:div").style("display","table").style("height","100%").style("width","100%");u.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,r,s,a,c,o,l),i(u,o)}function i(t,e){for(const n in e)n in e&&t.attr(n,e[n])}return function(i){return"fo"===i.textPlacement?n:"old"===i.textPlacement?t:e}}(),R=function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")};function W(t,e){t.each((function(){var t,n=(0,r.Ys)(this),i=n.text().split(/(\s+|<br>)/).reverse(),s=[],a=1.1,c=n.attr("y"),o=parseFloat(n.attr("dy")),l=n.text(null).append("tspan").attr("x",0).attr("y",c).attr("dy",o+"em");for(let r=0;r<i.length;r++)t=i[i.length-1-r],s.push(t),l.text(s.join(" ").trim()),(l.node().getComputedTextLength()>e||"<br>"===t)&&(s.pop(),l.text(s.join(" ").trim()),s="<br>"===t?[""]:[t],l=n.append("tspan").attr("x",0).attr("y",c).attr("dy",a+"em").text(t))}))}const Z=function(t,e,n,i){const r=n%I-1,s=t.append("g");e.section=r,s.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+r);const a=s.append("g"),c=s.append("g"),o=c.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(W,e.width),l=o.node().getBBox(),h=i.fontSize&&i.fontSize.replace?i.fontSize.replace("px",""):i.fontSize;return e.height=l.height+1.1*h*.5+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,c.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),F(a,e,r),e},B=function(t,e,n){const i=t.append("g"),r=i.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(W,e.width),s=r.node().getBBox(),a=n.fontSize&&n.fontSize.replace?n.fontSize.replace("px",""):n.fontSize;return i.remove(),s.height+1.1*a*.5+e.padding},F=function(t,e,n){const i=5;t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d",`M0 ${e.height-i} v${-e.height+2*i} q0,-5 5,-5 h${e.width-2*i} q5,0 5,5 v${e.height-i} H0 Z`),t.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)},V={drawRect:M,drawCircle:L,drawSection:D,drawText:N,drawLabel:A,drawTask:O,drawBackgroundRect:H,getTextObj:P,getNoteRect:j,initGraphics:R,drawNode:Z,getVirtualNodeHeight:B},Y=function(t){const e=Object.keys(t);e.forEach((function(e){conf[e]=t[e]}))},q=function(t,e,n,s){const a=(0,i.g)(),c=a.leftMargin?a.leftMargin:50;s.db.clear(),s.parser.parse(t+"\n"),i.l.debug("timeline",s.db);const o=a.securityLevel;let l;"sandbox"===o&&(l=(0,r.Ys)("#i"+e));const h="sandbox"===o?(0,r.Ys)(l.nodes()[0].contentDocument.body):(0,r.Ys)("body"),d=h.select("#"+e);d.append("g");const u=s.db.getTasks(),p=s.db.getCommonDb().getDiagramTitle();i.l.debug("task",u),V.initGraphics(d);const y=s.db.getSections();i.l.debug("sections",y);let g=0,f=0,m=0,x=0,b=50+c,_=50;x=50;let k=0,v=!0;y.forEach((function(t){const e={number:k,descr:t,section:k,width:150,padding:20,maxHeight:g},n=V.getVirtualNodeHeight(d,e,a);i.l.debug("sectionHeight before draw",n),g=Math.max(g,n+20)}));let w=0,S=0;i.l.debug("tasks.length",u.length);for(const[r,I]of u.entries()){const t={number:r,descr:I,section:I.section,width:150,padding:20,maxHeight:f},e=V.getVirtualNodeHeight(d,t,a);i.l.debug("taskHeight before draw",e),f=Math.max(f,e+20),w=Math.max(w,I.events.length);let n=0;for(let i=0;i<I.events.length;i++){const t=I.events[i],e={descr:t,section:I.section,number:I.section,width:150,padding:20,maxHeight:50};n+=V.getVirtualNodeHeight(d,e,a)}S=Math.max(S,n)}i.l.debug("maxSectionHeight before draw",g),i.l.debug("maxTaskHeight before draw",f),y&&y.length>0?y.forEach((t=>{const e={number:k,descr:t,section:k,width:150,padding:20,maxHeight:g};i.l.debug("sectionNode",e);const n=d.append("g"),r=V.drawNode(n,e,k,a);i.l.debug("sectionNode output",r),n.attr("transform",`translate(${b}, ${x})`),_+=g+50;const s=u.filter((e=>e.section===t));s.length>0&&G(d,s,k,b,_,f,a,w,S,g,!1),b+=200*Math.max(s.length,1),_=x,k++})):(v=!1,G(d,u,k,b,_,f,a,w,S,g,!0));const $=d.node().getBBox();i.l.debug("bounds",$),p&&d.append("text").text(p).attr("x",$.width/2-c).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),m=v?g+f+150:f+100;const E=d.append("g").attr("class","lineWrapper");E.append("line").attr("x1",c).attr("y1",m).attr("x2",$.width+3*c).attr("y2",m).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,i.s)(void 0,d,a.timeline.padding?a.timeline.padding:50,!!a.timeline.useMaxWidth&&a.timeline.useMaxWidth)},G=function(t,e,n,r,s,a,c,o,l,h,d){for(const u of e){const e={descr:u.task,section:n,number:n,width:150,padding:20,maxHeight:a};i.l.debug("taskNode",e);const o=t.append("g").attr("class","taskWrapper"),p=V.drawNode(o,e,n,c),y=p.height;if(i.l.debug("taskHeight after draw",y),o.attr("transform",`translate(${r}, ${s})`),a=Math.max(a,y),u.events){const e=t.append("g").attr("class","lineWrapper");let i=a;s+=100,i+=U(t,u.events,n,r,s,c),s-=100,e.append("line").attr("x1",r+95).attr("y1",s+a).attr("x2",r+95).attr("y2",s+a+(d?a:h)+l+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}r+=200,d&&!(0,i.g)().timeline.disableMulticolor&&n++}s-=10},U=function(t,e,n,r,s,a){let c=0;const o=s;s+=100;for(const l of e){const e={descr:l,section:n,number:n,width:150,padding:20,maxHeight:50};i.l.debug("eventNode",e);const o=t.append("g").attr("class","eventWrapper"),h=V.drawNode(o,e,n,a),d=h.height;c+=d,o.attr("transform",`translate(${r}, ${s})`),s=s+10+d}return s=o,c},X={setConf:Y,draw:q},J=t=>{let e="";for(let n=0;n<t.THEME_COLOR_LIMIT;n++)t["lineColor"+n]=t["lineColor"+n]||t["cScaleInv"+n],(0,s.Z)(t["lineColor"+n])?t["lineColor"+n]=(0,a.Z)(t["lineColor"+n],20):t["lineColor"+n]=(0,c.Z)(t["lineColor"+n],20);for(let n=0;n<t.THEME_COLOR_LIMIT;n++){const i=""+(17-3*n);e+=`\n    .section-${n-1} rect, .section-${n-1} path, .section-${n-1} circle, .section-${n-1} path  {\n      fill: ${t["cScale"+n]};\n    }\n    .section-${n-1} text {\n     fill: ${t["cScaleLabel"+n]};\n    }\n    .node-icon-${n-1} {\n      font-size: 40px;\n      color: ${t["cScaleLabel"+n]};\n    }\n    .section-edge-${n-1}{\n      stroke: ${t["cScale"+n]};\n    }\n    .edge-depth-${n-1}{\n      stroke-width: ${i};\n    }\n    .section-${n-1} line {\n      stroke: ${t["cScaleInv"+n]} ;\n      stroke-width: 3;\n    }\n\n    .lineWrapper line{\n      stroke: ${t["cScaleLabel"+n]} ;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n    `}return e},K=t=>`\n  .edge {\n    stroke-width: 3;\n  }\n  ${J(t)}\n  .section-root rect, .section-root path, .section-root circle  {\n    fill: ${t.git0};\n  }\n  .section-root text {\n    fill: ${t.gitBranchLabel0};\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .eventWrapper  {\n   filter: brightness(120%);\n  }\n`,Q=K,tt={db:E,renderer:X,parser:l,styles:Q}},41747:function(t,e,n){n.d(e,{Z:function(){return h}});var i=n(56909),r=n(22563);const s=t=>{const{r:e,g:n,b:s}=r.Z.parse(t),a=.2126*i.Z.channel.toLinear(e)+.7152*i.Z.channel.toLinear(n)+.0722*i.Z.channel.toLinear(s);return i.Z.lang.round(a)};var a=s;const c=t=>a(t)>=.5;var o=c;const l=t=>!o(t);var h=l}}]);