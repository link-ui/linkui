(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{182:function(t,i,n){},195:function(t,i,n){var e=n(2);e(e.P,"Function",{bind:n(196)})},196:function(t,i,n){"use strict";var e=n(23),r=n(4),s=n(93),a=[].slice,c={};t.exports=Function.bind||function(t){var i=e(this),n=a.call(arguments,1),o=function(){var e=n.concat(a.call(arguments));return this instanceof o?function(t,i,n){if(!(i in c)){for(var e=[],r=0;r<i;r++)e[r]="a["+r+"]";c[i]=Function("F,a","return new F("+e.join(",")+")")}return c[i](t,n)}(i,e.length,e):s(i,e,t)};return r(i.prototype)&&(o.prototype=i.prototype),o}},197:function(t,i,n){"use strict";var e=n(3),r=n(13),s=n(12),a=n(74),c=n(72),o=n(5),l=n(97).f,u=n(96).f,d=n(8).f,f=n(95).trim,h=e.Number,p=h,v=h.prototype,m="Number"==s(n(73)(v)),I="trim"in String.prototype,w=function(t){var i=c(t,!1);if("string"==typeof i&&i.length>2){var n,e,r,s=(i=I?i.trim():f(i,3)).charCodeAt(0);if(43===s||45===s){if(88===(n=i.charCodeAt(2))||120===n)return NaN}else if(48===s){switch(i.charCodeAt(1)){case 66:case 98:e=2,r=49;break;case 79:case 111:e=8,r=55;break;default:return+i}for(var a,o=i.slice(2),l=0,u=o.length;l<u;l++)if((a=o.charCodeAt(l))<48||a>r)return NaN;return parseInt(o,e)}}return+i};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var i=arguments.length<1?0:t,n=this;return n instanceof h&&(m?o(function(){v.valueOf.call(n)}):"Number"!=s(n))?a(new p(w(i)),n,h):w(i)};for(var g,x=n(7)?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;x.length>N;N++)r(p,g=x[N])&&!r(h,g)&&d(h,g,u(p,g));h.prototype=v,v.constructor=h,n(9)(e,"Number",h)}},198:function(t,i,n){"use strict";var e=n(182);n.n(e).a},206:function(t,i,n){"use strict";n.r(i);n(195),n(197);var e={props:{initialSpeed:{type:Number,default:30},initialInterval:{type:Number,default:4}},data:function(){return{sliders:[{img:"slider1"},{img:"slider2"},{img:"slider3"},{img:"slider4"},{img:"slider5"}],currentIndex:1,distance:-600,transitionEnd:!0,speed:this.initialSpeed}},computed:{containerStyle:function(){return{transform:"translate3d(".concat(this.distance,"px, 0, 0)")}},interval:function(){return 1e3*this.initialInterval}},created:function(){console.log(this.sliders)},mounted:function(){this.init()},methods:{init:function(){this.play(),window.onblur=function(){this.stop()}.bind(this),window.onfocus=function(){this.play()}.bind(this)},move:function(t,i,n){if(this.transitionEnd){this.transitionEnd=!1,-1===i?this.currentIndex+=t/600:this.currentIndex-=t/600,this.currentIndex>5&&(this.currentIndex=1),this.currentIndex<1&&(this.currentIndex=5),this.currentIndex<0&&(this.currentIndex=0);var e=this.distance+t*i;this.animate(e,i,n)}},animate:function(t,i,n){var e=this;this.temp&&(window.clearInterval(this.temp),this.temp=null),this.temp=window.setInterval(function(){-1===i&&t<e.distance||1===i&&t>e.distance?e.distance+=n*i:(e.transitionEnd=!0,window.clearInterval(e.temp),e.distance=t,t<-3e3&&(e.distance=-600),t>-600&&(e.distance=-3e3))},20)},jump:function(t){var i=t-this.currentIndex>=0?-1:1,n=600*Math.abs(t-this.currentIndex),e=0===Math.abs(t-this.currentIndex)?this.speed:Math.abs(t-this.currentIndex)*this.speed;this.move(n,i,e)},play:function(){var t=this;this.timer&&(window.clearInterval(this.timer),this.timer=null),this.timer=window.setInterval(function(){t.move(600,-1,t.speed)},this.interval)},stop:function(){window.clearInterval(this.timer),this.timer=null}}},r=(n(198),n(0)),s=Object(r.a)(e,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("h1",[t._v("横向滚动轮播图")]),t._v(" "),n("div",{attrs:{id:"slider"}},[n("div",{staticClass:"window",on:{mouseover:t.stop,mouseleave:t.play}},[n("ul",{staticClass:"container",style:t.containerStyle},[n("li",[n("img",{attrs:{src:t.sliders[t.sliders.length-1].img,alt:""}})]),t._v(" "),t._l(t.sliders,function(t,i){return n("li",{key:i},[n("img",{attrs:{src:t.img,alt:""}})])}),t._v(" "),n("li",[n("img",{attrs:{src:t.sliders[0].img,alt:""}})])],2),t._v(" "),n("ul",{staticClass:"direction"},[n("li",{staticClass:"left",on:{click:function(i){return t.move(600,1,t.speed)}}},[n("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{fill:"#ffffff",d:"M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"}})])]),t._v(" "),n("li",{staticClass:"right",on:{click:function(i){return t.move(600,-1,t.speed)}}},[n("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{fill:"#ffffff",d:"M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"}})])])]),t._v(" "),n("ul",{staticClass:"dots"},t._l(t.sliders,function(i,e){return n("li",{key:e,class:{dotted:e===t.currentIndex-1},on:{click:function(i){return t.jump(e+1)}}})}),0)])])])},[],!1,null,"098cd0f8",null);i.default=s.exports}}]);