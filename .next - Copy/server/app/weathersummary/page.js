(()=>{var e={};e.id=164,e.ids=[164],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},2637:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=a(3003),s=a(4293),i=a(6550),n=a.n(i),l=a(6979),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);a.d(t,o);let c=["",{children:["weathersummary",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,750)),"C:\\practice\\weather-app\\temp-weather\\src\\app\\weathersummary\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,7789)),"C:\\practice\\weather-app\\temp-weather\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,2075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\practice\\weather-app\\temp-weather\\src\\app\\weathersummary\\page.jsx"],m={require:a,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/weathersummary/page",pathname:"/weathersummary",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4484:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,6114,23)),Promise.resolve().then(a.t.bind(a,2639,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,9671,23)),Promise.resolve().then(a.t.bind(a,1868,23)),Promise.resolve().then(a.t.bind(a,4759,23)),Promise.resolve().then(a.t.bind(a,2816,23))},7530:()=>{},8337:(e,t,a)=>{Promise.resolve().then(a.bind(a,3334))},3334:(e,t,a)=>{"use strict";a.d(t,{default:()=>l});var r=a(8819),s=a(7266),i=a(2570),n=a(4046);let l=()=>{let[e,t]=(0,s.useState)({city:"",avgTemp:"--",maxTemp:"--",minTemp:"--",dominantCondition:"--",icon:"02d"}),[a,l]=(0,s.useState)("Celsius");(0,s.useEffect)(()=>{let e=new URLSearchParams(window.location.search),a=e.get("city");e.get("date");let r=e.get("summaryData");if(r){let e=JSON.parse(decodeURIComponent(r));t({city:a,avgTemp:e.avgTemp.toFixed(1),maxTemp:e.maxTemp.toFixed(1),minTemp:e.minTemp.toFixed(1),dominantCondition:e.dominantCondition,icon:e.icon||"02d"})}else console.error("No summary data found in URL.")},[]);let o=(e,t)=>{switch(t){case"Fahrenheit":return 9*e/5+32;case"Kelvin":return e+273.15;default:return e}},c=o(parseFloat(e.avgTemp),a),d=o(parseFloat(e.maxTemp),a),m=o(parseFloat(e.minTemp),a);return(0,r.jsx)("div",{className:"flex justify-center items-center min-h-screen bg-[#f8f9fa] p-5",children:(0,r.jsx)("div",{className:"w-full max-w-[400px]",children:(0,r.jsxs)("div",{className:"bg-white rounded-[20px] p-5 shadow-lg hover:translate-y-[-5px] transition-all duration-300 hover:shadow-xl",children:[(0,r.jsxs)("div",{className:"text-[22px] font-bold text-center text-[#3f37c9] mb-4",children:["Weather Summary for ",e.city]}),(0,r.jsxs)("div",{className:"flex justify-center gap-4 mb-4",children:[(0,r.jsx)("button",{onClick:()=>l("Celsius"),className:`mr-2 ${"Celsius"===a?"text-blue-500":"text-gray-600"}`,children:"\xb0C"}),(0,r.jsx)("button",{onClick:()=>l("Fahrenheit"),className:`mr-2 ${"Fahrenheit"===a?"text-blue-500":"text-gray-600"}`,children:"\xb0F"}),(0,r.jsx)("button",{onClick:()=>l("Kelvin"),className:`${"Kelvin"===a?"text-blue-500":"text-gray-600"}`,children:"K"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center mb-8",children:[(0,r.jsx)("div",{className:"w-[100px] h-[100px] mb-4 transition-transform duration-300 hover:scale-110",children:e.icon?(0,r.jsx)("img",{src:`https://openweathermap.org/img/wn/${e.icon}@2x.png`,alt:"Weather Icon",className:"w-full h-full"}):(0,r.jsx)(i.GW5,{className:"w-full h-full text-[#4361ee]"})}),(0,r.jsxs)("p",{className:"text-[40px] font-bold text-[#3f37c9]",children:[c.toFixed(1),"\xb0","Celsius"===a?"C":"Fahrenheit"===a?"F":"K"]}),(0,r.jsx)("p",{className:"text-lg capitalize text-[#4cc9f0] mt-1",children:e.dominantCondition})]}),(0,r.jsxs)("div",{className:"flex justify-between bg-[rgba(67,97,238,0.1)] rounded-[15px] p-5    hover:bg-[rgba(67,97,238,0.2)] transition-colors duration-300   md:flex-row flex-col md:gap-0 gap-4",children:[(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsxs)("div",{className:"flex items-center justify-center mb-1",children:[(0,r.jsx)(n.nw$,{className:"text-[#4361ee] mr-2"}),(0,r.jsx)("p",{className:"text-sm text-[#2b2d42]",children:"Min"})]}),(0,r.jsxs)("p",{className:"text-lg font-bold text-[#3f37c9]",children:[m.toFixed(1),"\xb0","Celsius"===a?"C":"Fahrenheit"===a?"F":"K"]})]}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsxs)("div",{className:"flex items-center justify-center mb-1",children:[(0,r.jsx)(n.uMm,{className:"text-[#4361ee] mr-2"}),(0,r.jsx)("p",{className:"text-sm text-[#2b2d42]",children:"Max"})]}),(0,r.jsxs)("p",{className:"text-lg font-bold text-[#3f37c9]",children:[d.toFixed(1),"\xb0","Celsius"===a?"C":"Fahrenheit"===a?"F":"K"]})]})]})]})})})}},7789:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c,metadata:()=>o});var r=a(9351),s=a(1577),i=a.n(s),n=a(6362),l=a.n(n);a(5023);let o={title:"Weather App",description:"Generated by create next app"};function c({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${i().variable} ${l().variable} antialiased`,children:e})})}},750:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>l});var s=a(9351);a(2052);var i=a(7804),n=e([i]);i=(n.then?(await n)():n)[0];let l=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.Z,{})});r()}catch(e){r(e)}})},7804:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>e});var s=a(1851);let e=(await (0,s.createProxy)(String.raw`C:\practice\weather-app\temp-weather\src\components\SummaryPage.jsx`)).default;r()}catch(e){r(e)}},1)},3881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(771);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[147,403,771,604],()=>a(2637));module.exports=r})();