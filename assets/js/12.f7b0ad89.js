(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{187:function(t,n,i){},203:function(t,n,i){"use strict";var e=i(187);i.n(e).a},215:function(t,n,i){"use strict";i.r(n);var e={name:"timeLine",data:function(){return{uni_timeline_icon:"uni_timeline_icon",uni_listbox_last:"uni_listbox_last",uni_listbox_notlast:"uni_listbox_notlast",uni_listbox:"uni_listbox"}},computed:{uni_space:function(){return"height:"+this.space}},props:{uni_data:{type:Array,default:function(){return[{title:"这是标题",content:"这是内容"},{title:"标题过长会显示省略号",content:"内容过长会隐藏"},{title:"更多效果可以自定义",content:"更多效果可以自定义"}]}},space:{type:String,default:"100px"},uni_icon:{type:String,default:"http://qiniu.iborge.cn/dian.png"}}},s=(i(203),i(0)),u=Object(s.a)(e,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("h1",[t._v("时间轴")]),t._v(" "),i("div",{attrs:{id:"uni_timeline"}},t._l(t.uni_data,function(n,e){return i("div",{key:e,class:[t.uni_data.length==e+1?t.uni_listbox_last:t.uni_listbox_notlast,t.uni_listbox],style:t.uni_space},[i("p",[i("img",{class:t.uni_timeline_icon,attrs:{src:t.uni_icon}}),t._v(" "),i("span",{staticClass:"uni_timeline_title"},[t._v(t._s(n.title))])]),t._v(" "),i("div",{staticClass:"uni_timeline_content"},[t._v(t._s(n.content))])])}),0)])},[],!1,null,"5ee951a0",null);n.default=u.exports}}]);