"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[783],{3783:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ke}});var n,a,i=r(9439),c=r(2791),l=function(e){return 0===e?"Sunday":1===e?"Monday":2===e?"Tuesday":3===e?"Wednesday":4===e?"Thursday":5===e?"Friday":"Saturday"},s=function(e){return 0===e?"00":1===e?"01":2===e?"02":3===e?"03":4===e?"04":5===e?"05":6===e?"06":7===e?"07":8===e?"08":9===e?"09":e.toString()},o="ForecastItem_forecastItem__daW7K",d="ForecastItem_forecastItemDay__TQA4d",u="ForecastItem_forecastItemDate__SThcz",f="ForecastItem_forecastItemTemp__vZu+Y",m="ForecastItem_forecastItemTime__YU1Ag",h=r(6771),p=r(184),y=function(e){var t=e.forecast.list.slice(0,5);return(0,p.jsx)(p.Fragment,{children:t.map((function(e,t){return(0,p.jsxs)(h.E.div,{className:o,whileHover:{scale:1.06,transition:{type:"spring",duration:.2}},whileTap:{scale:.9},whileInView:{opacity:1},children:[(0,p.jsx)("div",{className:d,children:"".concat(new Date(1e3*e.dt).getDate()," ").concat((r=new Date(1e3*e.dt).getMonth(),0===r?"January":1===r?"February":2===r?"March":3===r?"April":4===r?"May":5===r?"June":6===r?"July":7===r?"August":8===r?"September":9===r?"October":10===r?"November":"December"))}),(0,p.jsx)("div",{className:u,children:l(new Date(1e3*e.dt).getDay())}),(0,p.jsxs)("div",{className:f,children:[Math.round(e.main.temp),(0,p.jsx)("sup",{children:"\xb0"}),"C"]}),(0,p.jsx)("div",{className:m,children:"".concat(s(new Date(1e3*e.dt).getHours()),":").concat(new Date(1e3*e.dt).getMinutes(),"0")})]},t);var r}))})},_="HomePage_homePageWrapper__2FiXV",v="HomePage_picLeft__Gz+3d",g="HomePage_picRight__bNe71",x="HomePage_headerWrapper__PfRfR",j="HomePage_searchBlock__dgm++",C="HomePage_weatherBlock__0rOWB",b="HomePage_forecastBox__h0pH2",w="HomePage_defaultForecast__3yB+1",O="HomePage_forecastList__urD3j",E="HomePage_forecastTitle__-u7tP",N="HomePage_WrapperCards__Y7XEY",k=["title","titleId"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}function I(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function P(e,t){var r=e.title,i=e.titleId,l=I(e,k);return c.createElement("svg",S({width:306,height:232,viewBox:"0 0 306 232",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},l),r?c.createElement("title",{id:i},r):null,n||(n=c.createElement("g",{clipPath:"url(#clip0_1543_11810)"},c.createElement("g",{opacity:.8},c.createElement("ellipse",{cx:75.0903,cy:148.633,rx:67.9145,ry:51.7538,fill:"#F9C40B"}),c.createElement("ellipse",{cx:163.764,cy:184.835,rx:88.9296,ry:47.1648,fill:"#F9C40B"}),c.createElement("ellipse",{cx:196.824,cy:123.139,rx:109.176,ry:77.2483,fill:"#F9C40B"})),c.createElement("g",{opacity:.3},c.createElement("ellipse",{cx:67.9145,cy:102.743,rx:67.9145,ry:51.7538,fill:"#F9C40B"}),c.createElement("ellipse",{cx:156.588,cy:138.945,rx:88.9296,ry:47.1648,fill:"#F9C40B"}),c.createElement("ellipse",{cx:189.648,cy:77.2483,rx:109.176,ry:77.2483,fill:"#F9C40B"})))),a||(a=c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_1543_11810"},c.createElement("rect",{width:306,height:232,fill:"white"})))))}var B,L,M=c.forwardRef(P),D=(r.p,r(5093)),F="PictureCard_pictureCard__mZruJ",T=function(){return(0,p.jsx)("div",{className:F})},H="SearchButton_button__M9ZIA",W="SearchButton_searchIcon__BlrEk",Z=["title","titleId"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R.apply(this,arguments)}function A(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function G(e,t){var r=e.title,n=e.titleId,a=A(e,Z);return c.createElement("svg",R({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?c.createElement("title",{id:n},r):null,B||(B=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.8333 11.9167C21.8333 17.3935 17.3935 21.8333 11.9167 21.8333C6.43984 21.8333 2 17.3935 2 11.9167C2 6.43984 6.43984 2 11.9167 2C17.3935 2 21.8333 6.43984 21.8333 11.9167ZM20.3333 11.9167C20.3333 16.5651 16.5651 20.3333 11.9167 20.3333C7.26827 20.3333 3.5 16.5651 3.5 11.9167C3.5 7.26827 7.26827 3.5 11.9167 3.5C16.5651 3.5 20.3333 7.26827 20.3333 11.9167Z",fill:"#091223"})),L||(L=c.createElement("path",{d:"M19.4295 18.6044L18.1921 19.8418L24.2103 25.8601C24.552 26.2018 25.1061 26.2018 25.4478 25.8601C25.7895 25.5184 25.7895 24.9643 25.4478 24.6226L19.4295 18.6044Z",fill:"#091223"})))}var q,Q,z=c.forwardRef(G),J=(r.p,function(e){var t=e.onClick;return(0,p.jsx)("button",{className:H,onClick:t,children:(0,p.jsx)(z,{className:W})})}),K="SearchBox_searchBox__XCQSy",U="SearchBox_searchForm__piE72",X="SearchBox_searchInput__Ssa+M",V=function(e){var t=e.search,r=e.onInputChange,n=e.onSubmit;return(0,p.jsx)("div",{className:K,children:(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.stopPropagation();var t=e.currentTarget.cityname.value;t.trim()&&(n(t),e.currentTarget.reset())},className:U,children:[(0,p.jsx)("input",{type:"text",className:X,placeholder:"For example, Newtonhill",value:t,name:"cityname",onChange:r,pattern:"[a-zA-Z]+$"}),(0,p.jsx)(J,{})]})})},Y=r(3213).R.injectEndpoints({endpoints:function(e){return{getCity:e.query({query:function(e){return{url:"/geo/1.0/direct?q=".concat(e.trim(),"&limit=5&lang=en&appid=").concat("28a03b96d4e783f4a5fe92488a67ac8f"),method:"GET"}}}),getCityWeather:e.query({query:function(e){return{url:"/data/2.5/weather?q=".concat(e,"&&units=metric&appid=").concat("28a03b96d4e783f4a5fe92488a67ac8f"),method:"GET"}}}),getForecast:e.query({query:function(e){return{url:"/data/2.5/forecast?q=".concat(e,"&&units=metric&appid=").concat("28a03b96d4e783f4a5fe92488a67ac8f"),method:"GET"}}})}},overrideExisting:!1}),$=Y.useGetCityQuery,ee=Y.useLazyGetCityWeatherQuery,te=Y.useLazyGetForecastQuery,re="CityCardSkeletonDetails_skeleton__ZfHCQ",ne="CityCardSkeletonDetails_skeletonIcon__gQdC9",ae="CityCardSkeletonDetails_skeletonInfo__nWz6s",ie=["title","titleId"];function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ce.apply(this,arguments)}function le(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function se(e,t){var r=e.title,n=e.titleId,a=le(e,ie);return c.createElement("svg",ce({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?c.createElement("title",{id:n},r):null,q||(q=c.createElement("path",{d:"M21 17.5C21 21.366 17.866 24.5 14 24.5C10.134 24.5 7 21.366 7 17.5C7 13.634 14 3.5 14 3.5C14 3.5 21 13.634 21 17.5Z",stroke:"#041430",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Q||(Q=c.createElement("path",{d:"M10.8418 12.79L9.42355 15.9898",stroke:"#041430",strokeWidth:1.5,strokeLinecap:"round"})))}var oe,de,ue,fe,me=c.forwardRef(se),he=(r.p,["title","titleId"]);function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},pe.apply(this,arguments)}function ye(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function _e(e,t){var r=e.title,n=e.titleId,a=ye(e,he);return c.createElement("svg",pe({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?c.createElement("title",{id:n},r):null,oe||(oe=c.createElement("circle",{cx:14.0002,cy:14.0002,r:10.9167,stroke:"#041430",strokeWidth:1.5})),de||(de=c.createElement("circle",{cx:14.0003,cy:19.8333,r:1.58333,stroke:"#041430",strokeWidth:1.5})),ue||(ue=c.createElement("path",{d:"M14.75 8.16699L14.75 7.41699L13.25 7.41699L13.25 8.16699L14.75 8.16699ZM13.25 8.16699L13.25 18.667L14.75 18.667L14.75 8.16699L13.25 8.16699Z",fill:"#041430"})),fe||(fe=c.createElement("path",{d:"M14.0002 5.8335L15.1668 8.16683H12.8335L14.0002 5.8335Z",fill:"#041430"})))}var ve,ge=c.forwardRef(_e),xe=(r.p,["title","titleId"]);function je(){return je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},je.apply(this,arguments)}function Ce(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function be(e,t){var r=e.title,n=e.titleId,a=Ce(e,xe);return c.createElement("svg",je({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?c.createElement("title",{id:n},r):null,ve||(ve=c.createElement("path",{d:"M15.75 4.6665C17.3608 4.6665 18.6667 5.97234 18.6667 7.58317C18.6667 9.194 17.3608 10.4998 15.75 10.4998H3.5M21.5833 22.1665C23.8385 22.1665 25.6667 20.3383 25.6667 18.0832C25.6667 15.828 23.8385 13.9998 21.5833 13.9998H3.5M13.4167 23.3332C15.0275 23.3332 16.3333 22.0273 16.3333 20.4165C16.3333 18.8057 15.0275 17.4998 13.4167 17.4998H3.5",stroke:"#041430",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var we=c.forwardRef(be),Oe=(r.p,{wind:we,humidity:me,pressure:ge}),Ee=function(e){var t=e.icon,r=e.info,n=Oe[t];return(0,p.jsxs)("div",{className:re,children:[(0,p.jsx)(n,{className:ne}),(0,p.jsx)("div",{className:ae,children:r})]})},Ne="CityCard_cityCard__rBhEg",ke="CityCard_cityCardHead__2mA1t",Se="CityCard_cityCardTime__QoDKy",Ie="CityCard_cityCardTitle__l3iRh",Pe="CityCard_cityCardTitleName__o9JcB",Be="CityCard_cityCardTitleCountry__R4zgg",Le="CityCard_cityCardTemp__K4Gfo",Me="CityCard_cityCardTempMain__b9uMk",De="CityCard_cityCardTempSec__J-iE4",Fe="CityCard_cityCardDetails__QMeIL",Te=function(e){var t,r=e.city;return(0,p.jsxs)("div",{className:Ne,children:[(0,p.jsxs)("div",{className:ke,children:[(0,p.jsxs)("div",{className:Ie,children:[(0,p.jsx)("h2",{className:Pe,children:r.name}),(0,p.jsx)("span",{className:Be,children:r.sys.country})]}),(0,p.jsx)("div",{className:Se,children:"".concat(s(new Date(1e3*r.dt).getHours()),":").concat(s(new Date(1e3*r.dt).getMinutes()))})]}),(0,p.jsxs)("div",{className:Le,children:[(0,p.jsx)("div",{children:(0,p.jsxs)("h1",{className:Me,children:[Math.round(r.main.temp),(0,p.jsx)("sup",{children:"\xb0"}),"C"]})}),(0,p.jsx)("div",{className:De,children:(0,p.jsxs)("span",{children:["Feels like ".concat(Math.round(r.main.feels_like)),(0,p.jsx)("sup",{children:"\xb0"}),"C"]})})]}),(0,p.jsxs)("div",{className:Fe,children:[(0,p.jsx)(Ee,{icon:"wind",info:"".concat(Math.round(r.wind.speed)," km/h,\n            ").concat((t=Math.round(r.wind.deg),t>15&&t<=75?"NE":t>76&&t<=105?"E":t>105&&t<=165?"SE":t>166&&t<=195?"S":t>195&&t<=255?"SW":t>255&&t<=285?"W":t>285&&t<=345?"NW":"N"))}),(0,p.jsx)(Ee,{icon:"humidity",info:"".concat(r.main.humidity," %")}),(0,p.jsx)(Ee,{icon:"pressure",info:"".concat(r.main.pressure," hPa")})]})]})};var He="Dropdown_searchDropdown__dSR7W",We="Dropdown_searchDropdownItem__uFoyt",Ze="Dropdown_searchDropdownButton__sJgK8",Re=function(e){var t=e.onClick,r=e.city;return(0,p.jsx)("ul",{className:He,children:(0,p.jsx)("li",{className:We,children:(0,p.jsxs)("button",{className:Ze,onClick:function(){t(r.name)},children:[r.name,", ",r.country]})},r.id)})},Ae={id:2641549,name:"Newtonhill",sys:{country:"GB"},dt:1647347424,main:{temp:8.48,feels_like:4.9,pressure:1016,humidity:79},wind:{speed:7.3,deg:189}},Ge=r(9440),qe=r(6052),Qe="DataError_dataError__VruCa",ze="DataError_dataErrorText__oeBUf",Je=function(){return(0,p.jsx)("div",{className:Qe,children:(0,p.jsx)("p",{className:ze,children:"Something went wrong..."})})},Ke=function(){var e=(0,c.useState)(""),t=(0,i.Z)(e,2),r=t[0],n=t[1],a=(0,c.useState)(!1),l=(0,i.Z)(a,2),s=l[0],o=l[1],d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,r=(0,c.useState)(e),n=(0,i.Z)(r,2),a=n[0],l=n[1];return(0,c.useEffect)((function(){var r=setTimeout((function(){l(e)}),t);return function(){clearTimeout(r)}}),[e,t]),a}(r),u=$(d,{skip:d.length<1,refetchOnFocus:!0}),f=u.data,m=u.isError,k=ee(),S=(0,i.Z)(k,2),I=S[0],P=S[1].data,B=te(),L=(0,i.Z)(B,2),F=L[0],H=L[1].data;(0,c.useEffect)((function(){o(d.length>1&&(null===f||void 0===f?void 0:f.length)>0)}),[d,f]);var W=function(e){n(e),o(!1)};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:_,children:[(0,p.jsxs)("div",{className:x,children:[(0,p.jsxs)(D.h,{children:[(0,p.jsx)(Ge.W,{}),(0,p.jsx)(qe.T,{})]}),(0,p.jsxs)("div",{className:j,children:[(0,p.jsx)(V,{search:r,onInputChange:function(e){n(e.target.value.charAt(0).toUpperCase()+e.target.value.substring(1))},onSubmit:function(e){e&&(I(e),F(e))}}),s&&(null===f||void 0===f?void 0:f.map((function(e){return(0,p.jsx)(Re,{city:e,onClick:W},e.id)})))]})]}),m&&(0,p.jsx)(Je,{}),(0,p.jsxs)("div",{className:C,children:[(0,p.jsxs)("div",{className:N,children:[P?(0,p.jsx)(Te,{city:P},P.id):(0,p.jsx)(Te,{city:Ae},Ae.id),(0,p.jsx)(T,{})]}),(0,p.jsxs)("div",{className:b,children:[(0,p.jsx)("div",{className:E,children:"Forecast"}),(0,p.jsx)("ul",{className:O,children:H?(0,p.jsx)(y,{forecast:H},H.city.id):(0,p.jsx)(h.E.div,{className:w,initial:{y:10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.4},layout:!0})})]})]}),(0,p.jsx)(M,{className:v}),(0,p.jsx)(M,{className:g})]})})}},5093:function(e,t,r){r.d(t,{h:function(){return i}});var n="Header_header__GcXF5",a=r(184),i=function(e){var t=e.children;return(0,a.jsx)("header",{className:n,children:t})}},6052:function(e,t,r){r.d(t,{T:function(){return l}});var n="Logo_logo__5w0Vx",a="Logo_logoName__NoXSG",i=r(6771),c=r(184),l=function(){return(0,c.jsx)(i.E.div,{className:n,initial:{y:10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.4},layout:!0,children:(0,c.jsx)("span",{className:a,children:"WEATHER.CUBE"})})}},9440:function(e,t,r){r.d(t,{W:function(){return d}});var n=r(1087),a=r(178),i="Navigation_navigationBlock__annmp",c="Navigation_navigation__c4mvP",l="Navigation_navigationActive__KhCxH",s=r(184),o=function(e){return e.isActive?l:c},d=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("nav",{className:i,children:(0,s.jsxs)("ul",{children:[(0,s.jsx)(n.OL,{to:a._.HOME,className:o,children:"Home"}),(0,s.jsx)(n.OL,{to:a._.ABOUT,className:o,children:"About"})]})})})}}}]);
//# sourceMappingURL=783.b8836663.chunk.js.map