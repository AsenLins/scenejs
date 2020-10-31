/*
Copyright (c) 2016 Daybrush
name: scenejs
license: MIT
author: Daybrush
repository: https://github.com/daybrush/scenejs.git
version: 1.4.2
*/
!function(){"use strict";var a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function m(t,e){t.classList?t.classList.add(e):t.className+=" "+e}var q=function(){return(q=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function U(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]]);return n}var y="__shape-svg";function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(){var t=Y("svg");return m(t,y),t}function F(t,e){for(var n in e)t.setAttribute(n,e[n])}function B(t,e,n){var r=function(t){var e=/^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(t);if(!e)return{prefix:"",unit:"",value:NaN};var n=e[1],r=e[2];return{prefix:n,unit:e[3],value:parseFloat(r)}}(t);return"%"===r.unit?e+n*r.value/100+"px":"px"===r.unit?e+r.value+"px":"calc("+e+"px + "+t+")"}function V(e,t){var n,r,i,o,a,s,c,l=t.width,f=t.height,u=t.left,d=t.right,h=t.bottom,p=t.top,g=t.strokeWidth,v=t.className;e&&(c=y,(s=e).classList?s.classList.contains(c):s.className.match(new RegExp("(\\s|^)"+c+"(\\s|$)")))&&(v&&v.split(" ").forEach(function(t){m(e,t)}),i=void 0===(r=(n=(e.getAttribute("viewBox")||"").split(" ").map(function(t){return parseFloat(t||"0")}))[2])?0:r,a=void 0===(o=n[3])?0:o,e.setAttribute("viewBox","0 0 "+Math.max(u+l+d+g,i)+" "+Math.max(p+f+h+g,a)))}function r(t,e,n){var r=e.left,i=void 0===r?0:r,o=e.top,a=void 0===o?0:o,s=e.right,c=void 0===s?0:s,l=e.bottom,f=void 0===l?0:l,u=e.side,d=e.split,h=e.rotate,p=e.innerRadius,g=e.height,v=e.width,m=e.fill,y=void 0===m?"transparent":m,w=e.strokeLinejoin,S=void 0===w?"round":w,k=e.strokeWidth,x=void 0===k?0:k,b=e.css,E=void 0!==b&&b,_=e.className,L=U(e,["left","top","right","bottom","side","split","rotate","innerRadius","height","width","fill","strokeLinejoin","strokeWidth","css","className"]),M=function(t){for(var e=t.left,n=void 0===e?0:e,r=t.top,i=void 0===r?0:r,o=t.side,a=void 0===o?3:o,s=t.rotate,c=void 0===s?0:s,l=t.innerRadius,f=void 0===l?100:l,u=t.height,d=void 0===u?0:u,h=t.split,p=void 0===h?1:h,g=t.width,v=void 0===g?d?0:100:g,m=t.strokeLinejoin,y=void 0===m?"round":m,w=t.strokeWidth,S=void 0===w?0:w,k=[],x=[],b=Math.cos(Math.PI/a),E=Math.PI/180*c+Math.PI*((a%2?0:1/a)-.5),_=0;_<a;++_){var L=Math.PI*(1/a*2*_)+E,M=Math.cos(L),j=Math.sin(L);if(k.push(M),x.push(j),100!==f){if(b<=f/100)continue;k.push(f/100*Math.cos(L+Math.PI/a)),x.push(f/100*Math.sin(L+Math.PI/a))}}var N=Math.min.apply(Math,k),O=Math.min.apply(Math,x),T=Math.max.apply(Math,k),z=Math.max.apply(Math,x),C=!!v?v/(T-N):d/(z-O),P="miter"===y||"arcs"===y||"miter-clip"===y,A=Math.sin(Math.PI/a),I=Math.min(b,f/100),R=C*I,H=S/2/(b===I?1:Math.sin(Math.atan(A/(b-I)))),W=P?(R+H)/R:1,D=P?0:S/2,k=k.map(function(t){return(t-N*W)*C+D}),x=x.map(function(t){return(t-O*W)*C+D}),X=(T-N)*W*C+2*D,q=(z-O)*W*C+2*D,U=k.length,Y=[];for(Y.push([n+k[0],i+x[0]]),_=1;_<=U;++_)for(var $=k[_-1],F=x[_-1],B=k[_===U?0:_],V=x[_===U?0:_],Z=1;Z<=p;++Z){var G=($*(p-Z)+B*Z)/p,J=(F*(p-Z)+V*Z)/p;Y.push([n+G,i+J])}return{points:Y,width:X,height:q}}({left:i,top:a,split:d,side:u,rotate:h,width:v,height:g,innerRadius:p,strokeLinejoin:S,strokeWidth:x}),j=M.points;V(n,{left:i,top:a,bottom:f,right:c,className:_,strokeWidth:0,width:M.width,height:M.height});var N=j.map(function(t,e){return(0===e?"M":"L")+" "+t.join(" ")}).join(" ")+" Z";E?function(t,e){var n=[];for(var r in e)n.push(r+":"+e[r]+";");t.style.cssText+=n.join("")}(t,{d:"path('"+N+"')"}):F(t,{d:N}),F(t,q({fill:y,"stroke-linejoin":S,"stroke-width":""+x},L))}function t(t,e){void 0===e&&(e=$());var n=Y("path");return r(n,t,e),e.appendChild(n),e}function e(t,e){void 0===e&&(e=$());var n,r,i,o,a,s,c,l,f,u,d,h=t.left,p=void 0===h?0:h,g=t.top,v=void 0===g?0:g,m=t.right,y=void 0===m?0:m,w=t.bottom,S=void 0===w?0:w,k=t.fill,x=void 0===k?"transparent":k,b=t.strokeLinejoin,E=void 0===b?"round":b,_=t.strokeWidth,L=void 0===_?0:_,M=t.className,j=t.r,N=void 0===j?0:j,O=t.rx,T=void 0===O?N:O,z=t.ry,C=void 0===z?N:z,P=t.width,A=void 0===P?2*T:P,I=t.height,R=void 0===I?2*C:I,H=t.origin,W=U(t,["left","top","right","bottom","fill","strokeLinejoin","strokeWidth","className","r","rx","ry","width","height","origin"]),D=Y("ellipse"),X=L/2;return V(e,{strokeWidth:L,left:p,top:v,bottom:S,right:y,className:M,width:A,height:R}),n=D,c=(r={left:p+X,top:v+X,width:A,height:R,origin:H}).width,l=r.height,f=r.left,u=r.top,(d=r.origin)&&(a=(i=(""+d).split(" "))[0],s=void 0===(o=i[1])?a:o,a=B(a,f,c),s=B(s,u,l),n.style.transformOrigin=a+" "+s),F(D,q({fill:x,cx:p+X+A/2,cy:v+X+R/2,rx:A/2,ry:R/2,"stroke-linejoin":E,"stroke-width":""+L},W)),e.appendChild(D),e}function s(t){return void 0===t}var n=function(){var t=function(){function t(){this._eventHandler={},this.options={}}var e=t.prototype;return e.trigger=function(t,e){void 0===e&&(e={});var n=this._eventHandler[t]||[];if(!(0<n.length))return!0;n=n.concat(),e.eventType=t;var r=!1,i=[e],o=0;e.stop=function(){r=!0},e.currentTarget=this;for(var a=arguments.length,s=new Array(2<a?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];for(1<=s.length&&(i=i.concat(s)),o=0;n[o];o++)n[o].apply(this,i);return!r},e.once=function(i,o){if("object"==typeof i&&s(o)){var t,e=i;for(t in e)this.once(t,e[t]);return this}var a;return"string"==typeof i&&"function"==typeof o&&(a=this).on(i,function t(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];o.apply(a,n),a.off(i,t)}),this},e.hasOn=function(t){return!!this._eventHandler[t]},e.on=function(t,e){if("object"==typeof t&&s(e)){var n,r=t;for(n in r)this.on(n,r[n]);return this}var i;return"string"==typeof t&&"function"==typeof e&&(s(i=this._eventHandler[t])&&(this._eventHandler[t]=[],i=this._eventHandler[t]),i.push(e)),this},e.off=function(t,e){if(s(t))return this._eventHandler={},this;if(s(e)){if("string"==typeof t)return this._eventHandler[t]=void 0,this;var n,r=t;for(n in r)this.off(n,r[n]);return this}var i=this._eventHandler[t];if(i)for(var o,a=0;void 0!==(o=i[a]);a++)if(o===e){i=i.splice(a,1);break}return this},t}();return t.VERSION="2.1.2",t}(),f="object",u="undefined"!=typeof document&&document;function d(t){return Array.isArray(t)}var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function c(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o=0,l=0;function h(){o=window.innerWidth,l=window.innerHeight}window.addEventListener("resize",h),h();var p={get width(){return o},get height(){return l}},g=function(l){function o(t,e){void 0===e&&(e={});var n,r,i,o,a,s,c=l.call(this)||this;return c.ranges={},c._range=[0,"100%"],c.horizontal=!1,c.margin=[0,0],c.pages=[],c.state={enter:!1,firstEnter:!1,firstExit:!1},c.scroll=function(){c.triggerEvent("scroll"),c.onCheck()},c.resize=function(){c.triggerEvent("resize"),c.onCheck()},c.el=t?(i=t)&&typeof i===f?t:(n=t,r?u.querySelectorAll(n):u.querySelector(n)):null,"range"in e&&(a=d(o=e.range)?o:[o,o],c._range=a),"margin"in e&&(d(s=e.margin)?c.margin=s:c.margin=[s,s]),"events"in e&&e.events.forEach(function(t){"resize"===t?window.addEventListener("resize",c.resize):"scroll"===t?window.addEventListener("scroll",c.scroll):c.el&&c.el.addEventListener(t,c.scroll)}),"horizontal"in e&&(c.horizontal=e.horizontal),c}c(o,l);var t=o.prototype;return t.add=function(t){return this.pages.push(t),this},t.range=function(t,e){void 0===t&&(t=[0,"100%"]);var n=d(t)?t:[t,t],r="["+n.join(",")+"]";if(this.ranges[r])return this.ranges[r];var i=new o(this.el,{range:n,horizontal:e});return this.ranges[r]=i,this.add(i),i},t.triggerEvent=function(t){this.trigger(t,{target:this.el})},t.onEnter=function(e){var n=this,t=this.state;t.enter||(t.enter=!0,t.firstEnter||(t.firstEnter=!0,this.triggerEvent("firstEnter")),this.triggerEvent("enter")),this.pages.forEach(function(t){t.onCheck(t.el===n.el?e:void 0)})},t.onExit=function(){var t=this.state;t.enter&&(t.enter=!1,t.firstExit||(t.firstExit=!0,this.triggerEvent("firstExit")),this.triggerEvent("exit")),this.pages.forEach(function(t){t.onExit()})},t.calcSize=function(t,e){if("number"==typeof t)return t;var n=t.match(/("[^"]*")|('[^']*')|([^\s()]*(?:\((?:[^()]*|\([^()]*\))*\))[^\s()]*)|\S+/g)||[];if(!n)return 0;for(var r=n.length,i=[],o=1,a=0;a<r;++a){var s=n[a];"+"===s?o=1:"-"===s?o=-1:"*"===s?(i.push((i.pop()||0)*this._calcSize(n[a+1],e)),++a):"/"===s?(i.push((i.pop()||0)/this._calcSize(n[a+1],e)),++a):(i.push(o*this._calcSize(s,e)),o=1)}return i.reduce(function(t,e){return t+e},0)},t.getRect=function(t){var e=this.el?this.el.getBoundingClientRect():void 0;if(e){var n=e.width,r=e.height,i=e.left+(t?document.body.scrollLeft||document.documentElement.scrollLeft:0);return{top:e.top+(t?document.body.scrollTop||document.documentElement.scrollTop:0),left:i,width:n,height:r}}},t.onCheck=function(t){var e,n,r,i,o,a;void 0===t&&(t=this.getRect()),t?(n=t[(e=this.horizontal)?"left":"top"],r=p[e?"width":"height"],i=this.calcSize(this._range[0],t),o=this.calcSize(this._range[1],t),a=this.calcSize(this.margin[0],t),n+o+this.calcSize(this.margin[1],t)<=0||r<=n+i-a?this.onExit():this.onEnter(t)):this.pages.forEach(function(t){t.onCheck()})},t._calcSize=function(t,e){if(!t)return 0;if("number"==typeof t)return t;var n,r=this.horizontal?"width":"height";if("window"===t)return p[r];if(-1<t.indexOf("("))return this.calcSize((!(n=/([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(t))||n.length<4?{}:{prefix:n[1],value:n[2],suffix:n[3]}).value,e);var i=function(t){var e=/^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(t);if(!e)return{prefix:"",unit:"",value:NaN};var n=e[1],r=e[2];return{prefix:n,unit:e[3],value:parseFloat(r)}}(t);return"%"===i.unit?e[r]*i.value/100:i.value},o}(n),v=function(e){function t(t){return void 0===t&&(t={}),e.call(this,void 0,t)||this}return c(t,e),t}(g);g.s=v;var w=new g.s({events:["resize","scroll"]}),S=[];function k(t){S.push(t),w.add(t)}var x="undefined"!=typeof document&&document;function b(t){return[].slice.call(t)}function E(t,e){return e?x.querySelectorAll(t):x.querySelector(t)}function _(t,e){return t.classList?t.classList.contains(e):t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function L(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function M(t,e){var n;t.classList?t.classList.remove(e):(n=new RegExp("(\\s|^)"+e+"(\\s|$)"),t.className=t.className.replace(n," "))}function j(t,e,n,r){t.addEventListener(e,n,r)}var N=document.querySelector(".clapper");function O(t,e,n,r,i){void 0===r&&(r=10),void 0===i&&(i=15);var o=e(a({left:r,top:i,opacity:1},n));return e(a({left:2*r,top:2*i,opacity:.2},n),o),t.appendChild(o),o}for(var T=1;T<=6;++T){var z=170-20*(T-1),C=600/z;O(N,e,{className:"svg_circle svg_circle"+T+" center",r:50-C,strokeWidth:C,strokeLinejoin:"round","stroke-linecap":"round",stroke:"#333",rotate:-360,origin:"50% 50%"},5,5).style.cssText="width: "+z+"px; height: "+z+"px;"}O(N,t,{className:"play_btn back",side:3,width:60,strokeWidth:8,strokeLinejoin:"round",rotate:90,stroke:"#333",fill:"#333",origin:"50% 50%"}),O(N,t,{className:"play_btn front",side:3,width:60,strokeWidth:8,strokeLinejoin:"round",rotate:90,stroke:"#333",fill:"#333",origin:"50% 50%"});var P=5.6+1.6,A=Scene.EASE_IN_OUT,I=new Scene({".logo1 .scene1.circle":function(t){return{0:{transform:"scale(0)"},.2:{"border-width":"50px"},.5:{opacity:1},1:{transform:"scale(1)","border-width":"0px",opacity:0},options:{delay:.4*t}}},".logo1 ellipse":function(t,e){var n=e.getAttribute("opacity"),r=Math.floor(t/2),i={0:{opacity:0,"stroke-dasharray":"0 1000",transform:"scaleX("+(r%2?-1:1)+") rotate("+(180*r-90)+"deg)"},.1:{opacity:n},.6:{"stroke-dasharray":"70 1000","stroke-dashoffset":0}};return i[1.1-.06*r]={opacity:n},i[1.2-.06*r]={"stroke-dashoffset":-76,"stroke-dasharray":"0 1000",transform:"rotate("+(180+180*r)+"deg)",opacity:0},i.options={delay:2.6+.16*r},i},".play_btn.back":{0:{transform:"translate(-50%, -50%) translate2(3px) scale(1)"},1:{transform:"scale(0.5)"},2:{transform:"scale(1)"},options:{delay:3.6}},".play_btn.front":{0:{transform:"translate(-50%, -50%) translate2(3px) scale(0)"},1:{transform:"scale(1)"},options:{delay:5}},".play_circle":{0:{transform:"translate(-50%, -50%) scale(0)"},1:{transform:"scale(1)"},options:{delay:4.7}},".background":{0:{transform:"translate(-50%, -50%) scale(0)"},1:{transform:"scale(1)"},options:{delay:4.4}},".stick1 .rect":function(t){return{0:{transform:{scale:0,skew:"15deg"}},.7:{transform:{scale:1}},options:{delay:5.6-.2+.22*t}}},".stick2 .rect":function(t){return{0:{transform:{scale:0,skew:"-15deg"}},.7:{transform:{scale:1}},options:{delay:5.6+.22*t}}},".stick1":{0:{transform:{rotate:"0deg"}},.5:{transform:{rotate:"-20deg"}},1:{transform:{rotate:"0deg"}},1.5:{transform:{rotate:"-10deg"}},options:{delay:P,easing:A}},".logo1 .clapper":{0:{transform:"rotate(0deg)"},.5:{transform:"rotate(-15deg)"},1:{transform:"rotate(0deg)"},1.5:{transform:"rotate(-10deg)"},options:{delay:P,easing:A}},".logo1 .character .left":function(t){return{0:{transform:{translateX:"-100%"}},1:{transform:{translateX:"0%"}},options:{delay:5.6+.1*t}}},".logo1 .character .right":function(t){return{0:{transform:{translateX:"100%"}},1:{transform:{translateX:"0%"}},options:{delay:5.6+.1*t}}},".logo1 .description p span":function(t){return{0:{transform:{translateY:"-100%"}},1:{transform:{translateY:"0%"}},options:{delay:.5+P+.2*t}}}},{easing:A,selector:!0}),R=new MediaScene;R.addMedia("./clapper.mp3").seek(0,.452).setPlaySpeed(2).setVolume(.7).setDelay(8.1),window.mediaScene=R,j(E(".play_btn.front"),"click",function(){I.play(),R.play()});var H=new g(".page.page1");H.range(["10%","90%"]).on({firstEnter:function(){I.play(),R.play()}}),k(H),new Scene({".page2 .icon1 .lang":function(t){return{0:{"border-color":"#f55",color:"#f55"},.5:{"border-color":"#f55",color:"#f55"},1.5:{"border-color":"#fff",color:"#fff"},2:{"border-color":"#fff",color:"#fff"},options:{direction:t?"alternate-reverse":"alternate",iterationCount:"infinite"}}}},{easing:Scene.EASE_IN_OUT,selector:!0}).setTime(0).exportCSS({selector:function(t,e){return'.page2 [data-feature="play"]:hover .icon1 '+e}}),new Scene({".page2 .icon2 .thumb":{0:{transform:{translate:"-50%, -50%",translate2:"0px"}},1:{transform:{translate2:"100px"}}}},{iterationCount:"infinite",direction:"alternate",easing:Scene.EASE_IN_OUT,selector:!0}).exportCSS({selector:'.page2 [data-feature="progress"]:hover .icon2 .thumb, .page2 [data-feature="progress"]:focus .icon2 .thumb'}),new Scene({".page2 .icon3 svg path":{0:{"stroke-dasharray":"4450 4450"},"0>":{"stroke-dasharray":"0 4450"},.3:{"stroke-dasharray":"360 4450"},1.2:{"stroke-dasharray":"1400 4450"},2:{"stroke-dasharray":"2400 4450"},2.6:{"stroke-dasharray":"3000 4450"},3.1:{"stroke-dasharray":"4450 4450"},3.5:{}}},{iterationCount:"infinite",easing:Scene.EASE_IN,selector:!0}).exportCSS({selector:'.page2 [data-feature="svg"]:hover .icon3 path, .page2 [data-feature="svg"]:focus .icon3 path'}).setTime(0),new Scene({".page2 .icon4 .play_bar":{0:{left:"0%"},2:{left:"100%"}}},{iterationCount:"infinite",easing:Scene.LINEAR,selector:!0}).exportCSS({selector:'.page2 [data-feature="timeline"]:hover .icon4 .play_bar'});var W=E('.page2 [data-feature="value"]');Scene.setRole(["text"],!0);var D=new Scene({".slide":function(t){return{1.5:{transform:"translateY(-50%) translate("+100*t+"%)"},2.5:{transform:"translate("+100*(t-1)+"%)"},4:{transform:"translateY(-50%) translate("+100*(t-1)+"%)"},5:{transform:"translate("+100*(t-2)+"%)"},options:{easing:Scene.EASE_IN_OUT}}},".slide:nth-child(1) .target":{0:{opacity:1},1:{opacity:0}},".slide:nth-child(2) .target":{0:{"background-color":"rgb(255, 255, 255)"},1:{"background-color":"rgb(255, 90, 90)"},options:{delay:2.5}},".slide:nth-child(3) .target":{0:{"font-weight":"bold",background:"transparent",text:""},.12:{text:"S"},.24:{text:"Sc"},.36:{text:"Sce"},.48:{text:"Scen"},.6:{text:"Scene"},.72:{text:"Scene."},.84:{text:"Scene.j"},.96:{text:"Scene.js"},2:{},options:{delay:5}}},{iterationCount:"infinite",selector:!0}).setTime(0),X=b(E(".page2 .slide .sub_description",!0));D.getItem(".slide:nth-child(1) .target").on("animate",function(t){X[0].innerHTML="opacity: "+t.frame.get("opacity").toFixed(2)}),D.getItem(".slide:nth-child(2) .target").on("animate",function(t){X[1].innerHTML=""+t.frame.get("background-color")}),D.getItem(".slide:nth-child(3) .target").on("animate",function(t){t.currentTarget.elements[0].innerHTML=""+t.frame.get("text")});new Scene({".icon6 .card-rotor":{0:Scene.flipY({y:2,duration:2})},".icon6 .bottom":{0:{transform:"translateX(-50%) scaleX(4)"},.5:{transform:"scaleX(1)"},options:{iterationCount:4,direction:"alternate"}}},{easing:"linear",direction:"alternate",iterationCount:"infinite",selector:!0}).exportCSS({selector:function(t,e){return'.page2 [data-feature="effect"]:hover '+e}}).setTime(0);function Z(t){return Scene.animateItem({scrollTop:[document.documentElement.scrollTop||document.body.scrollTop,t]},{duration:1,easing:Scene.EASE}).on("animate",function(t){var e=t.frame;window.scrollTo(0,e.get("scrollTop"))})}b(E(".page2 li .feature",!0)).forEach(function(t){j(t,"click",function(){})}),j(W,"mouseenter",function(){"running"!==D.getPlayState()&&D.play()}),j(W,"mouseleave",function(){D.pause()}),k(new g(".page.page2")),k(new g(".page.page3")),k(new g(".page.page4"));var G=document.body,J=E("nav"),K=E(".nav_button"),Q=E("nav [data-item] a",!0),tt=new Scene({nav:{0:{"background-color":"rgba(255, 255, 255, 0)"},.5:{"background-color":"rgba(255, 255, 255, 0.7)"}},"nav .half":{.2:{transform:{translate:"-100%",translate2:"-15vw"}},1.1:{transform:{translate:"0%",translate2:"0vw"}}},"nav li":function(t){return{0:{opacity:0,transform:"translate(-50px)"},.3:{opacity:1,transform:"translate(0px)"},options:{delay:.9+.1*t}}}},{easing:Scene.EASE_IN_OUT,selector:!0}).on({play:function(){J.style.display="block"},ended:function(){"reverse"===tt.getDirection()?J.style.display="none":J.style.display="block"}});function et(){!_(G,"navigate")||"running"===tt.getPlayState()&&"reverse"===tt.getDirection()||(M(G,"navigate"),tt.pause(),tt.setPlaySpeed(1.5),tt.setDirection("reverse"),tt.setTime(0),tt.play())}b(Q).forEach(function(e,t){var n=S[t];n.range(["window - 1","window"]).on({enter:function(t){L(e,"enter")},exit:function(t){M(e,"enter")}}),e.addEventListener("click",function(t){t.preventDefault(),Z(n.getRect(!0).top),et()})}),E("header .logo").addEventListener("click",function(t){t.preventDefault(),Z(S[0].getRect(!0).top),et()}),j(J,"click",function(t){t.target===J&&et()}),j(K,"click",function(){_(G,"navigate")?et():_(G,"navigate")||"running"===tt.getPlayState()&&"normal"===tt.getDirection()||(L(G,"navigate"),tt.pause(),tt.setPlaySpeed(1),tt.setDirection("normal"),tt.setTime(0),tt.play())}),S.forEach(function(t,e){e%2!=0&&t.range(["window - 80","100% - 80"]).on({enter:function(t){L(G,"white")},exit:function(t){M(G,"white")}})}),w.scroll()}();
//# sourceMappingURL=index.js.map
