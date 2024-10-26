(()=>{var e={};e.id=399,e.ids=[399],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},5484:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c});var a=r(3003),s=r(4293),n=r(6550),i=r.n(n),l=r(6979),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["weatherpage",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9173)),"C:\\practice\\weather-app\\temp-weather\\src\\app\\weatherpage\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7789)),"C:\\practice\\weather-app\\temp-weather\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,2075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\practice\\weather-app\\temp-weather\\src\\app\\weatherpage\\page.jsx"],u={require:r,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/weatherpage/page",pathname:"/weatherpage",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4484:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,2639,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23)),Promise.resolve().then(r.t.bind(r,2816,23))},7530:()=>{},3194:(e,t,r)=>{Promise.resolve().then(r.bind(r,3172))},5047:(e,t,r)=>{"use strict";var a=r(7389);r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},3172:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(8819),s=r(5047),n=r(7266);let i=()=>{let e=(0,s.useRouter)(),t=(0,s.useSearchParams)(),[r,i]=(0,n.useState)(null),[l,o]=(0,n.useState)("Celsius");if((0,n.useEffect)(()=>{let e=t.get("data");if(e)try{let t=JSON.parse(e);i(t)}catch(e){console.error("Error parsing data:",e)}},[t]),!r)return(0,a.jsx)("div",{children:"Loading..."});let{city:c,temp:d,feelsLike:u,mainCondition:h}=r,p=(e,t)=>{switch(t){case"Fahrenheit":return 9*e/5+32;case"Kelvin":return e+273.15;default:return e}},m=p(d,l),x=p(u,l),f=(e=>{switch(e){case"Fahrenheit":return"F";case"Kelvin":return"K";default:return"C"}})(l),g=async()=>{let t=new Date().toLocaleDateString("en-CA",{year:"numeric",month:"2-digit",day:"2-digit"}).split("-").join("-"),r=`http://localhost:8080/api/weather/summary/${encodeURIComponent(c)}/${t}`;try{console.log("Fetching weather summary from:",r);let a=await fetch(r);if(!a.ok)throw Error("Failed to fetch weather summary");let s=await a.json(),n=encodeURIComponent(JSON.stringify(s)),i=`/weathersummary?city=${encodeURIComponent(c)}&date=${t}&summaryData=${n}`;e.push(i)}catch(e){console.error("Error fetching weather summary:",e)}};return(0,a.jsx)("div",{className:"min-h-screen bg-[#f0f4f8] flex justify-center items-center p-4 font-sans",children:(0,a.jsxs)("div",{className:"w-full max-w-[400px] bg-white rounded-lg shadow-lg overflow-hidden",children:[(0,a.jsx)("div",{className:"bg-[#007bff] text-white p-4 text-center",children:(0,a.jsx)("h1",{className:"text-[1.8rem] font-bold",children:c})}),(0,a.jsxs)("div",{className:"flex justify-center gap-6 p-4",children:[(0,a.jsx)("button",{onClick:()=>o("Celsius"),className:`mr-2 ${"Celsius"===l?"text-blue-500":"text-gray-600"}`,children:"Celsius"}),(0,a.jsx)("button",{onClick:()=>o("Fahrenheit"),className:`mr-2 ${"Fahrenheit"===l?"text-blue-500":"text-gray-600"}`,children:"Fahrenheit"}),(0,a.jsx)("button",{onClick:()=>o("Kelvin"),className:`${"Kelvin"===l?"text-blue-500":"text-gray-600"}`,children:"Kelvin"})]}),(0,a.jsx)("div",{className:"p-4",children:(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,a.jsx)("div",{className:"weather-icon",children:(0,a.jsx)("img",{src:"http://openweathermap.org/img/wn/03d@2x.png",alt:"scattered clouds",className:"w-16 h-16"})}),(0,a.jsxs)("div",{className:"ml-4",children:[(0,a.jsxs)("p",{className:"text-[2.4rem] font-bold text-gray-800",children:[m.toFixed(1),"\xb0",f]}),(0,a.jsx)("p",{className:"text-base text-gray-600 capitalize",children:h})]}),(0,a.jsx)("div",{className:"text-sm text-gray-600",children:(0,a.jsxs)("p",{className:"flex items-center flex-col",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-2 text-[#007bff]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 6h13M8 12h13m-7 6h7"})}),"Feels like: ",x.toFixed(1),"\xb0",f]})})]})}),(0,a.jsx)("div",{className:"p-4",children:(0,a.jsx)("button",{onClick:g,className:"w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200",children:"Check Summary"})})]})})},l=()=>(0,a.jsx)(n.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)(i,{})})},7789:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>o});var a=r(9351),s=r(1577),n=r.n(s),i=r(6362),l=r.n(i);r(5023);let o={title:"Weather App",description:"Generated by create next app"};function c({children:e}){return(0,a.jsx)("html",{lang:"en",children:(0,a.jsx)("body",{className:`${n().variable} ${l().variable} antialiased`,children:e})})}},9173:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>l});var s=r(9351);r(2052);var n=r(610),i=e([n]);n=(i.then?(await i)():i)[0];let l=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.default,{}),"/"]});a()}catch(e){a(e)}})},610:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>e});var s=r(1851);let e=(await (0,s.createProxy)(String.raw`C:\practice\weather-app\temp-weather\src\components\WeatherAppPage.jsx`)).default;a()}catch(e){a(e)}},1)},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(771);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[147,403,771],()=>r(5484));module.exports=a})();