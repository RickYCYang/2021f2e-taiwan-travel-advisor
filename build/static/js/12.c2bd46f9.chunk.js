(this.webpackJsonp2021_f2e=this.webpackJsonp2021_f2e||[]).push([[12],{104:function(e,t,a){"use strict";var n=a(113),r=a(116),c=a(1),s={option:function(e,t){return Object(n.a)(Object(n.a)({},e),{},{color:t.isSelected||t.isFocused?"white":"black",backgroundColor:t.isSelected?"#FF1D6C":t.isFocused?"#FFB72C":"white"})},control:function(e,t){return Object(n.a)(Object(n.a)({},e),{},{border:"none",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"})}};t.a=function(e){var t=e.className,a=e.options,n=e.value,u=e.defaultValue,o=e.onChange;return Object(c.jsx)(r.a,{styles:s,className:"".concat(t),options:a,value:n,defaultValue:u,onChange:o})}},105:function(e,t,a){"use strict";var n=a(95),r=a(4),c=a(1);t.a=function(){var e=Object(r.g)(),t=Object(r.h)();return Object(c.jsx)("ul",{className:"flex flex-nowrap justify-between items-center space-x-10 rounded-lg shadow-lg  border border-gray-100 px-3 mb-3 text-sm w-full bg-white md:hidden",children:n.a.map((function(a){return Object(c.jsx)("li",{className:"py-2 hover:text-custom-pink ".concat(t.pathname==="/"+a.value?"text-custom-pink":""),onClick:function(t){e.push("/".concat(a.value))},children:a.label},"smNav-"+a.value)}))})}},110:function(e,t,a){"use strict";var n=a(93),r=a(0);t.a=function(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(n.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){function e(){c({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}},175:function(e,t,a){"use strict";a.r(t);var n=a(44),r=a(113),c=a(93),s=a(0),u=function(e){var t=Object(s.useRef)();return Object(s.useEffect)((function(){t.current=e}),[e]),t.current},o=a(34),i=a(46),l=a(40),d=a(107),b=a.n(d),p=a(108),f=a(96),m=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)("get","Bus/Route/City/".concat(t,"?$select=RouteUID%2CRouteName%2CDepartureStopNameZh%2C%20DestinationStopNameZh&$orderby=RouteUID&$format=JSON"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(b.a.mark((function e(t,a){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getStopsByCityAndRouteName",t,a),e.next=3,Object(f.a)("get","Bus/DisplayStopOfRoute/City/".concat(t,"/").concat(a,"?$select=RouteName%2CDirection%2CStops&$top=30&$format=JSON"));case 3:return n=e.sent,r=n.data,console.log("data",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(b.a.mark((function e(t,a){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)("get","Bus/EstimatedTimeOfArrival/City/".concat(t,"/").concat(a,"?$format=JSON"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),x=a(104),v=a(105),O=a(1),g=[{label:"\u81fa\u5317\u5e02",value:"Taipei"},{label:"\u65b0\u5317\u5e02",value:"NewTaipei"},{label:"\u6843\u5712\u5e02",value:"Taoyuan"},{label:"\u81fa\u4e2d\u5e02",value:"Taichung"},{label:"\u81fa\u5357\u5e02",value:"Tainan"}],w=function(){var e=Object(l.b)(),t=Object(s.useState)(g[0]),a=Object(c.a)(t,2),n=a[0],d=a[1],b=Object(s.useState)(""),p=Object(c.a)(b,2),f=p[0],w=p[1],N=Object(s.useState)(""),S=Object(c.a)(N,2),y=S[0],C=S[1],k=Object(s.useState)([]),T=Object(c.a)(k,2),D=T[0],E=T[1],R=Object(s.useState)({}),Z=Object(c.a)(R,2),A=Z[0],B=Z[1],F=Object(s.useState)(0),I=Object(c.a)(F,2),$=I[0],H=I[1],M=u(A),J=Object(o.useQuery)(["getRoutesByCity",n.value],(function(){return m(n.value)})).data,L=Object(o.useQuery)(["getStopsByCityAndRouteName",n.value,A.value],(function(){return h(n.value,A.value)}),{enabled:!!A.value&&M!==A}).data,z=Object(o.useQuery)(["getArrivalTimeByCityAndRouteName",n.value,A.value],(function(){return j(n.value,A.value)}),{enabled:!!A.value&&M!==A,refetchInterval:15}).data;Object(s.useEffect)((function(){J&&E(J.map((function(e){var t=e.RouteName.Zh_tw;return{label:t,value:t,routeName:t,departureStopNameZh:e.DepartureStopNameZh,destinationStopNameZh:e.DestinationStopNameZh}})))}),[J]),Object(s.useEffect)((function(){D.length>0&&(B(D[0]),w(D[0].departureStopNameZh),C(D[0].destinationStopNameZh))}),[D]),Object(s.useEffect)((function(){if(L&&z){var t=L[$].Stops.map((function(e){return z.forEach((function(t){t.Direction===$&&t.StopID===e.StopID&&(e=Object(r.a)(Object(r.a)({},e),{},{estimateTime:t.EstimateTime,stopStatus:t.StopStatus,estimates:t.Estimates}))})),e}));e(Object(i.c)(t))}}),[L,$,z,e]);return Object(O.jsxs)("section",{className:"relative bg-white flex flex-col items-stretch w-full px-4  md:px-0 md:pt-9 lg:after:shadow-corner-l lg:before:shadow-corner-r",children:[Object(O.jsx)(v.a,{}),Object(O.jsxs)("div",{className:"flex justify-center gap-2 mb-4 md:mb-10",children:[Object(O.jsx)(x.a,{className:"tracking-wider w-60",options:g,value:n,defaultValue:n,onChange:function(e){return d(e)}}),Object(O.jsx)(x.a,{className:"tracking-wider w-60",options:D,value:A,onChange:function(e){B(e),w(e.departureStopNameZh),C(e.destinationStopNameZh)}})]}),Object(O.jsxs)("div",{className:"flex justify-center gap-10 md:gap-20",children:[Object(O.jsxs)("button",{className:"text-sm px-8 py-3 hover:bg-gray-100 \n                    ".concat(0===$&&"border-b-2 border-b-custom-pink","\n                    md:px-24 md:text-base "),onClick:function(){return H(0)},children:["\u5f80 ",Object(O.jsx)("span",{className:"text-custom-pink ml-2",children:f})]}),Object(O.jsxs)("button",{className:"text-sm px-8 py-3 hover:bg-gray-100 \n                    ".concat(1===$&&"border-b-2 border-b-custom-pink","\n                    md:text-base md:px-24 "),onClick:function(){return H(1)},children:["\u5f80 ",Object(O.jsx)("span",{className:"text-custom-pink ml-2",children:y})]})]})]})},N=function(e,t){return e.setSeconds(e.getSeconds()+t),e},S=function(e){return y(e.getHours())+" : "+y(e.getMinutes())},y=function(e){return e.toString().length<2&&(e="0"+e),e},C=a(110),k=a(42),T=function(){var e=new Date,t=Object(l.c)(i.b).stops,a=Object(s.useState)("1000px"),n=Object(c.a)(a,2),r=n[0],u=n[1],o=Object(C.a)().width;return Object(s.useEffect)((function(){t.length>0&&o>375?u("".concat(t.length/2*80,"px")):u("".concat(100*t.length,"px"))}),[t,o]),Object(O.jsxs)(k.a,{children:[Object(O.jsx)("p",{className:"text-sm md:text-base text-custom-pink text-right mb-3",children:"*\u6bcf\u969415\u79d2\u81ea\u52d5\u66f4\u65b0"}),Object(O.jsx)("div",{className:"bg-white relative after:shadow-corner-l before:shadow-corner-r p-6 md:p-14",children:t.length>0?Object(O.jsx)("div",{className:"flex flex-col flex-wrap gap-8",style:{maxHeight:r},children:t.map((function(t){return Object(O.jsxs)("div",{className:"w-full flex justify-start items-center gap-6 md:w-1/2 lg:gap-12",children:[t.estimateTime?Object(O.jsx)("h6",{className:"border-2 border-black px-4 py-2 rounded-lg w-1/3 text-center md:px-8 md:w-1/2",children:S(N(e,t.estimateTime))}):Object(O.jsx)("h6",{className:"border-2 border-gray-400 text-gray-400 px-4 py-2 rounded-lg w-1/3 text-center md:px-8 md:w-1/2",children:"\u672a\u767c\u8eca"}),Object(O.jsx)("h6",{className:"w-1/2",children:t.StopName.Zh_tw})]},t.StationID)}))}):Object(O.jsx)("h3",{className:"text-gray-400",children:"\u8acb\u9078\u64c7\u516c\u8eca\u8def\u7dda"})})]})};t.default=function(){return Object(O.jsxs)(n.a,{className:"space-y-p[24px] md:space-y-[48px]",children:[Object(O.jsx)(w,{}),Object(O.jsx)(T,{})]})}},95:function(e,t,a){"use strict";t.a=[{label:"\u666f\u9ede",value:"ScenicSpot"},{label:"\u6d3b\u52d5",value:"activity"},{label:"\u7f8e\u98df",value:"restaurant"},{label:"\u4f4f\u5bbf",value:"hotel"},{label:"\u4ea4\u901a",value:"traffic"}]},96:function(e,t,a){"use strict";var n=a(114),r=a.n(n),c=a(115);r.a.defaults.baseURL="https://ptx.transportdata.tw/MOTC/v2/";var s=function(){return(new Date).toGMTString()},u=function(){var e=new c.a("SHA-1","TEXT");e.setHMACKey("dFwrc8ddzQ5uOGgvUgeagIMLa2s","TEXT"),e.update("x-date: "+s());var t=e.getHMAC("B64");return'hmac username="'.concat("c3eb1209afc340c1bf1d721b6c76f965",'", algorithm="hmac-sha1", headers="x-date", signature="').concat(t,'"')};t.a=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3?arguments[3]:void 0;switch(e=e.toLowerCase(),r.a.defaults.headers.Authorization=u(),r.a.defaults.headers["X-Date"]=s(),r.a.defaults.timeout=2500,e){case"post":return r.a.post(t,a,n);case"get":return r.a.get(t,{params:a});case"delete":return r.a.delete(t,{params:a});case"put":return r.a.put(t,a);case"patch":return r.a.patch(t,a);default:return console.log("unknown method: ".concat(e)),!1}}}}]);
//# sourceMappingURL=12.c2bd46f9.chunk.js.map