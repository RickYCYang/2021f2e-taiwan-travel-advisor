(this.webpackJsonp2021_f2e=this.webpackJsonp2021_f2e||[]).push([[11],{100:function(e,t,a){"use strict";var c=a(1);t.a=function(e){var t=e.className,a=e.onClick,n=e.title;return Object(c.jsx)("button",{className:"text-xs cursor-pointer bg-custom-pink text-white px-3 py-2 rounded-lg shadow hover:bg-white\n                  hover:text-custom-pink hover:border hover:border-custom-pink md:text-sm md:px-5 ".concat(t),onClick:a,children:n})}},101:function(e,t,a){"use strict";var c=a(93),n=a(0),s=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){var e=function(){s(window.pageYOffset)};return window.addEventListener("scroll",e),e(),function(){return window.removeEventListener("scroll",e)}}),[]),a},l=(a(102),a(103),a(40)),r=a(110),i=a(41),o=a(181),u=a(179),d=a(180),b=a(182),x=a(183),m=a(184),j=a(94),h=a(45),f=a.n(h),p=a(97),g=a(1);t.a=function(){var e=Object(l.c)(i.c),t=e.show,a=e.photos,h=e.title,v=e.description,O=e.phone,w=e.address,y=e.location,N=e.time,k=e.cycle,C=e.nonCycle,S=e.charge,T=Object(l.b)(),z=s(),F=Object(n.useState)(0),A=Object(c.a)(F,2),H=A[0],L=A[1],$=Object(r.a)();t&&(document.body.style.overflow="hidden");var E=function(e){var t="forward"===e?2:-2,c=(H+t)%a.length<0?a.length-2:(H+t)%a.length;L(c)};return Object(n.useEffect)((function(){t||L(0)}),[t]),Object(g.jsxs)(g.Fragment,{children:[t&&Object(g.jsx)("div",{className:"fixed z-30 -inset-10 bg-gray-500 bg-opacity-30 backdrop-blur w-100vw h-100vh overflow-hidden"}),Object(g.jsx)("button",{style:{top:"".concat(z-($.width>375?70:0),"px")},className:"absolute left-[calc(50%+148px)] transform transition duration-700  \n                  ".concat(t?"opacity-100 z-50":"opacity-0 z-n1","\n                  md:left-[calc(50%+290px)] lg:left-[calc(50%+340px)]\n                  "),onClick:function(){T(Object(i.a)()),document.body.style.overflow="auto"},children:Object(g.jsx)(o.a,{className:" bg-custom-pink text-white p-2 md:p-3 lg:p-5 rounded-lg font-extrabold"})}),Object(g.jsx)("div",{style:{top:"".concat(z-($.width>375?70:0),"px")},className:"absolute left-[calc(50%-148px)] w-[296px] max-h-[600px] duration-700 shadow-xl\n                  bg-white rounded-lg p-4 transform transition\n                    ".concat(t?"opacity-100 z-40":"opacity-0 z-n1"," overflow-auto \n                    md:p-8 md:left-[calc(50%-280px)] md:w-[560px] lg:left-[calc(50%-338px)] lg:w-[676px] lg:max-h-[700px]   \n                  "),children:Object(g.jsxs)(f.a,{className:"space-y-4 md:space-y-[22px]",children:[Object(g.jsx)("div",{className:"relative h-[195px] md:h-[380px] lg:h-[460px]",children:a.length>0?a.filter((function(e){return e.includes("https")})).map((function(e){return Object(g.jsx)("img",{className:"absolute inset-0 lazyload rounded block h-[195px] w-full object-cover \n                                  shadow transform transition duration-700\n                                  ".concat(a[H]===e?"opacity-100 z-40":"opacity-0 z-n1","\n                                  md:h-[380px] lg:h-[460px] \n                                "),src:e,alt:h},e)})):Object(g.jsx)("img",{className:"absolute inset-0 lazyload rounded block h-[195px] w-full object-cover shadow transform transition duration-700 opacity-100 z-40\n                              md:h-[380px] lg:h-[460px] \n                            ",src:p.a,alt:h})}),a.filter((function(e){return e.includes("https")})).length>1&&Object(g.jsxs)("div",{className:"text-right",children:[Object(g.jsx)("button",{children:Object(g.jsx)(u.a,{className:"bg-white text-black leading-none align-middle shadow  w-8 h-8 rounded-lg flex items-center justify-center mr-4",onClick:function(){return E("backward")}})}),Object(g.jsx)("button",{children:Object(g.jsx)(d.a,{className:"bg-black text-white leading-none align-middle shadow  w-8 h-8 rounded-lg flex items-center justify-center",onClick:function(){return E("forward")}})})]}),Object(g.jsx)("h4",{className:"text-lg",children:h}),Object(g.jsx)("p",{className:"text-sm",children:v}),Object(g.jsxs)("div",{className:"flex flex-col md:flex-row",children:[Object(g.jsxs)("h6",{className:"flex items-center md:w-2/3",children:[Object(g.jsx)(b.a,{className:" text-custom-pink w-5 align-middle mr-3"}),C||(k||N.slice(0,10))]}),S&&Object(g.jsxs)("h6",{className:"flex items-center md:w-1/3",children:[Object(g.jsx)(x.a,{className:" text-custom-pink w-5 align-middle mr-3"}),S]})]}),Object(g.jsxs)("div",{className:"flex flex-col md:flex-row",children:[Object(g.jsxs)("h6",{className:"flex items-center md:w-2/3",children:[Object(g.jsx)(j.a,{className:" text-custom-pink w-5 align-middle mr-3"}),y||w]}),O&&Object(g.jsxs)("h6",{className:"flex items-center md:w-1/3",children:[Object(g.jsx)(m.a,{className:" text-custom-pink w-5 align-middle mr-3"}),Object(g.jsx)("a",{href:"tel:+".concat(O),children:O})]})]})]})})]})}},104:function(e,t,a){"use strict";var c=a(113),n=a(116),s=a(1),l={option:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{color:t.isSelected||t.isFocused?"white":"black",backgroundColor:t.isSelected?"#FF1D6C":t.isFocused?"#FFB72C":"white"})},control:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{border:"none",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"})}};t.a=function(e){var t=e.className,a=e.options,c=e.value,r=e.defaultValue,i=e.onChange;return Object(s.jsx)(n.a,{styles:l,className:"".concat(t),options:a,value:c,defaultValue:r,onChange:i})}},105:function(e,t,a){"use strict";var c=a(95),n=a(4),s=a(1);t.a=function(){var e=Object(n.g)(),t=Object(n.h)();return Object(s.jsx)("ul",{className:"flex flex-nowrap justify-between items-center space-x-10 rounded-lg shadow-lg  border border-gray-100 px-3 mb-3 text-sm w-full bg-white md:hidden",children:c.a.map((function(a){return Object(s.jsx)("li",{className:"py-2 hover:text-custom-pink ".concat(t.pathname==="/"+a.value?"text-custom-pink":""),onClick:function(t){e.push("/".concat(a.value))},children:a.label},"smNav-"+a.value)}))})}},106:function(e,t,a){"use strict";t.a=[{label:"\u81fa\u5317\u5e02",value:"Taipei"},{label:"\u65b0\u5317\u5e02",value:"NewTaipei"},{label:"\u6843\u5712\u5e02",value:"Taoyuan"},{label:"\u81fa\u4e2d\u5e02",value:"Taichung"},{label:"\u81fa\u5357\u5e02",value:"Tainan"},{label:"\u9ad8\u96c4\u5e02",value:"Kaohsiung"},{label:"\u57fa\u9686\u5e02",value:"Keelung"},{label:"\u65b0\u7af9\u5e02",value:"Hsinchu"},{label:"\u65b0\u7af9\u7e23",value:"HsinchuCounty"},{label:"\u82d7\u6817\u7e23",value:"MiaoliCounty"},{label:"\u5f70\u5316\u7e23",value:"ChanghuaCounty"},{label:"\u5357\u6295\u7e23",value:"NantouCounty"},{label:"\u96f2\u6797\u7e23",value:"YunlinCounty"},{label:"\u5609\u7fa9\u7e23",value:"ChiayiCounty"},{label:"\u5609\u7fa9\u5e02",value:"Chiayi"},{label:"\u5c4f\u6771\u7e23",value:"PingtungCounty"},{label:"\u5b9c\u862d\u7e23",value:"YilanCounty"},{label:"\u82b1\u84ee\u7e23",value:"HualienCounty"},{label:"\u81fa\u6771\u7e23",value:"TaitungCounty"},{label:"\u91d1\u9580\u7e23",value:"KinmenCounty"},{label:"\u6f8e\u6e56\u7e23",value:"PenghuCounty"},{label:"\u9023\u6c5f\u7e23",value:"LienchiangCounty"}]},110:function(e,t,a){"use strict";var c=a(93),n=a(0);t.a=function(){var e=Object(n.useState)({width:void 0,height:void 0}),t=Object(c.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){s({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}},112:function(e,t,a){"use strict";var c=a(117),n=a(93),s=a(0),l=a(4),r=a(94),i=a(104),o=a(105),u=a(106),d=a(95),b=function(e,t){var a=e.slice();return a.unshift(t),a},x=function(e){var t=localStorage.getItem(e);if(!t)return null;var a=JSON.parse(t);return(new Date).getTime()>a.expiry?(localStorage.removeItem(e),null):a.value},m=a(1);t.a=function(e){var t=e.className,a=e.search,j=Object(l.g)(),h=b(u.a,{label:"\u4e0d\u5206\u7e23\u5e02",value:null}),f=b(d.a,{label:"\u985e\u5225",value:null}),p=Object(s.useState)(a),g=Object(n.a)(p,2),v=g[0],O=g[1],w=Object(s.useState)(f[0]),y=Object(n.a)(w,2),N=y[0],k=y[1],C=Object(s.useState)(h[0]),S=Object(n.a)(C,2),T=S[0],z=S[1],F=Object(s.useState)(x("searchHistory")?x("searchHistory").split(","):[]),A=Object(n.a)(F,2),H=A[0],L=A[1];return Object(m.jsx)("section",{className:"relative bg-white pb-5 px-3 md:px-[27px] md:py-[40px] md:bg-[#F6F7FB] lg:bg-white lg:after:shadow-corner-l lg:before:shadow-corner-r lg:shadow-sm lg:py-[23px] lg:mb-[90px]",children:Object(m.jsx)("div",{className:"".concat(t," flex justify-center items-center z-10 w-full lg:bg-cover lg:bg-no-repeat lg:bg-center lg:min-h-[490px]"),children:Object(m.jsxs)("div",{className:"flex flex-col justify-center items-stretch",children:[Object(m.jsxs)("div",{className:"hidden lg:block lg:mb-4",children:[Object(m.jsxs)("h2",{className:"text-white font-bold text-[50px] leading-[70px]",children:["Welcome to ",Object(m.jsx)("span",{className:"text-custom-pink",children:"Taiwan\xb0"})]}),Object(m.jsx)("h6",{className:"text-white text-sm",children:"\u53f0\u5317\u3001\u53f0\u4e2d\u3001\u53f0\u5357\u3001\u5c4f\u6771\u3001\u5b9c\u862d\u2026\u2026\u904a\u904d\u53f0\u7063"})]}),Object(m.jsx)(o.a,{}),Object(m.jsxs)("div",{className:"flex justify-between space-x-[6px] mb-[10px]",children:[Object(m.jsx)("input",{type:"text",placeholder:"\u641c\u5c0b\u95dc\u9375\u5b57",onChange:function(e){return O(e.target.value)},value:v,list:"searchHistory",className:"text-sm pl-6 py-2 text-gray-500 rounded-lg flex-grow tracking-wide shadow-lg md:w-[383px] lg:text-base "}),Object(m.jsx)("datalist",{id:"searchHistory",children:H.map((function(e){return Object(m.jsx)("option",{value:e},e)}))}),Object(m.jsx)("button",{className:"bg-custom-pink w-10 rounded-md",onClick:function(){if(!H.includes(v)){var e=[].concat(Object(c.a)(H),[v]);L(e),function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,c=new Date,n={value:t,expiry:c.getTime()+1e3*a*60*60*24};localStorage.setItem(e,JSON.stringify(n))}("searchHistory",e.toString())}j.push("/search?q=".concat(v))},children:Object(m.jsx)(r.b,{className:"w-4 h-4 text-white m-auto"})})]}),Object(m.jsxs)("div",{className:"flex space-x-[6px] items-stretch",children:[Object(m.jsx)(i.a,{options:f,className:"tracking-wider flex-grow text-sm lg:text-base",value:N,defaultValue:f[0],onChange:function(e){return k(e)}}),Object(m.jsx)(i.a,{options:h,className:"tracking-wider flex-grow text-sm lg:text-base",value:T,defaultValue:h[0],onChange:function(e){return z(e)}}),Object(m.jsx)("button",{className:"bg-custom-yellow w-10 rounded-md",onClick:function(){j.push("/".concat(N.value,"/").concat(T.value))},children:Object(m.jsx)(r.b,{className:"w-4 h-4 text-white m-auto"})})]})]})})})}},119:function(e,t,a){"use strict";var c=a(98),n=a(93),s=a(0),l=a(34),r=a(107),i=a.n(r),o=a(108),u=a(96),d=a(99),b=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(d.a)(t),e.next=3,Object(u.a)("get","Tourism/Activity?$orderby=StartTime%20desc&$top=".concat(t,"&$format=JSON"));case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(i.a.mark((function e(t,a){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(d.a)(t),e.next=3,Object(u.a)("get","Tourism/Activity/".concat(a,"?$orderby=StartTime%20desc&$top=").concat(t,"&$format=JSON"));case 3:return c=e.sent,n=c.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(i.a.mark((function e(t,a){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(d.a)(t),e.next=3,Object(u.a)("get","Tourism/Activity?$filter=contains(Name%2C'".concat(a,"')&$orderby=StartTime%20desc&$top=").concat(t,"&$format=JSON"));case 3:return c=e.sent,n=c.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=a(40),h=(a(102),a(103),a(94)),f=a(41),p=a(97),g=a(1),v=Object(s.memo)((function(e){var t=e.activity,a=t.Address,c=t.Description,n=t.Location,s=t.Name,l=t.Picture,r=t.StartTime,i=t.Cycle,o=t.NonCycle,u=t.Charge,d=t.Phone,b={photos:Object.values(l)||[],title:s,description:c,phone:d,address:a,time:r,cycle:i,nonCycle:o,charge:u},x=Object(j.b)(),m=Object.values(l)[0];return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"relative bg-white flex w-full p-4 h-32 shadow before:shadow-corner-r after:shadow-corner-l  md:w-[calc(50%-27px)] md:h-[150px] lg:h-[228px] ",children:[Object(g.jsx)("img",{className:"lazyload rounded block w-1/3 h-full object-cover mr-4 shadow","data-src":null!==m&&void 0!==m?m:p.a,onClick:function(){return x(Object(f.d)(b))},alt:s}),Object(g.jsxs)("div",{className:"flex flex-col justify-between max-w-[calc(100%-33%-16px)]",children:[Object(g.jsx)("h4",{className:"font-semibold text-sm mb-[14px] lg:text-base",children:s}),Object(g.jsx)("p",{className:"hidden mb-3 lg:line-clamp-5 lg:text-sm lg:text-gray-400",children:c}),Object(g.jsxs)("div",{className:"flex items-center justify-between",children:[Object(g.jsxs)("div",{className:"lg:w-1/2",children:[Object(g.jsx)(h.a,{className:"w-5 text-custom-pink inline mr-2"}),Object(g.jsx)("h6",{className:"text-sm inline ",children:n||"to see the official site"})]}),Object(g.jsx)("button",{className:"hidden lg:block lg:border lg:border-custom-pink lg:px-8 lg:py-2 lg:text-custom-pink lg:rounded-xl lg:text-sm lg:w-1/2 lg:hover:bg-custom-pink lg:hover:text-white",onClick:function(){return x(Object(f.d)(b))},children:"\u6d3b\u52d5\u8a73\u60c5"})]})]})]})})}),(function(e,t){return e.activity.ActivityID===t.activity.ActivityID})),O=a(43),w=a(10),y=a(100),N=function(e){var t=e.city,a=e.defaultCount,c=e.keyword,r=Object(s.useState)(a||10),i=Object(n.a)(r,2),o=i[0],u=i[1],d=Object(l.useQuery)([t?"getNewestAcitivitiesByCity/".concat(t):c?"getNewestAcitivitiesByKeyword/".concat(c):"getNewestAcitivities",o],(function(){return t?x(o,t):c?m(o,c):b(o)})),j=d.isLoading,h=d.error,f=d.data;return j?Object(g.jsx)(w.a,{}):h?Object(g.jsx)(O.a,{message:h.message}):f.length>0?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"flex flex-wrap items-center justify-between gap-6 mb-6 md:mb-12 lg:justify-start lg:gap-12",children:f.map((function(e,t){return Object(g.jsx)(v,{activity:e},t)}))}),f.length<o?"":Object(g.jsx)("div",{className:"text-center",children:Object(g.jsx)(y.a,{title:"Load More",onClick:function(){u(o+4)}})})]}):Object(g.jsx)(O.a,{})},k=a(101),C=a(42);t.a=function(e){var t=e.city,a=e.defaultCount,n=e.keyword;return Object(g.jsxs)(C.a,{children:[Object(g.jsx)(c.a,{subTitle:"\u71b1\u9580\u6d3b\u52d5",icon:"triangle"}),Object(g.jsx)(N,{city:t,defaultCount:a,keyword:n}),Object(g.jsx)(k.a,{})]})}},174:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a(112),s=a(119),l=a(44),r=a(1);t.default=function(){var e=Object(c.i)().city;return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(n.a,{className:"lg:bg-activity"}),Object(r.jsx)(s.a,{city:e,defaultCount:20})]})}},95:function(e,t,a){"use strict";t.a=[{label:"\u666f\u9ede",value:"ScenicSpot"},{label:"\u6d3b\u52d5",value:"activity"},{label:"\u7f8e\u98df",value:"restaurant"},{label:"\u4f4f\u5bbf",value:"hotel"},{label:"\u4ea4\u901a",value:"traffic"}]},96:function(e,t,a){"use strict";var c=a(114),n=a.n(c),s=a(115);n.a.defaults.baseURL="https://ptx.transportdata.tw/MOTC/v2/";var l=function(){return(new Date).toGMTString()},r=function(){var e=new s.a("SHA-1","TEXT");e.setHMACKey("dFwrc8ddzQ5uOGgvUgeagIMLa2s","TEXT"),e.update("x-date: "+l());var t=e.getHMAC("B64");return'hmac username="'.concat("c3eb1209afc340c1bf1d721b6c76f965",'", algorithm="hmac-sha1", headers="x-date", signature="').concat(t,'"')};t.a=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3?arguments[3]:void 0;switch(e=e.toLowerCase(),n.a.defaults.headers.Authorization=r(),n.a.defaults.headers["X-Date"]=l(),n.a.defaults.timeout=2500,e){case"post":return n.a.post(t,a,c);case"get":return n.a.get(t,{params:a});case"delete":return n.a.delete(t,{params:a});case"put":return n.a.put(t,a);case"patch":return n.a.patch(t,a);default:return console.log("unknown method: ".concat(e)),!1}}},97:function(e,t,a){"use strict";t.a=a.p+"static/media/alt.e8fdb88b.jpeg"},98:function(e,t,a){"use strict";var c=a(88),n=a(89),s=a(1),l=function(e){switch(e){default:return Object(s.jsx)(c.a,{className:"text-custom-pink mr-4 text-[30px]"});case"rectangle":return Object(s.jsx)("svg",{width:"20",height:"20",className:"mr-6",children:Object(s.jsx)("rect",{width:"20",height:"20",fill:"#FFB72C"})});case"cloud":return Object(s.jsx)(n.a,{className:"text-blue-500 mr-4 text-[30px]"})}};t.a=function(e){var t=e.subTitle,a=e.icon,c=l(a);return Object(s.jsxs)("h2",{className:"flex items-center text-sm lg:text-xl mb-3",children:[c,t]})}},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var c=function(e,t){var a;return null!==(a=null!==e&&void 0!==e?e:t)&&void 0!==a?a:10}}}]);
//# sourceMappingURL=11.fcd3cf52.chunk.js.map