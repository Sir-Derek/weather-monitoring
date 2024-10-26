(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{5939:(e,t,s)=>{Promise.resolve().then(s.bind(s,2495))},6463:(e,t,s)=>{"use strict";var r=s(1169);s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}}),s.o(r,"useSearchParams")&&s.d(t,{useSearchParams:function(){return r.useSearchParams}})},2495:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var r=s(7437),a=s(6463),n=s(2265);let c=()=>{let e=(0,a.useRouter)(),t=(0,a.useSearchParams)(),[s,c]=(0,n.useState)(null),[l,i]=(0,n.useState)("Celsius");if((0,n.useEffect)(()=>{let e=t.get("data");if(e)try{let t=JSON.parse(e);c(t)}catch(e){console.error("Error parsing data:",e)}},[t]),!s)return(0,r.jsx)("div",{children:"Loading..."});let{city:o,temp:h,feelsLike:d,mainCondition:u}=s,m=(e,t)=>{switch(t){case"Fahrenheit":return 9*e/5+32;case"Kelvin":return e+273.15;default:return e}},x=m(h,l),f=m(d,l),g=(e=>{switch(e){case"Fahrenheit":return"F";case"Kelvin":return"K";default:return"C"}})(l),p=async()=>{let t=new Date().toLocaleDateString("en-CA",{year:"numeric",month:"2-digit",day:"2-digit"}).split("-").join("-"),s="http://localhost:8080/api/weather/summary/".concat(encodeURIComponent(o),"/").concat(t);try{console.log("Fetching weather summary from:",s);let r=await fetch(s);if(!r.ok)throw Error("Failed to fetch weather summary");let a=await r.json(),n=encodeURIComponent(JSON.stringify(a)),c="/weathersummary?city=".concat(encodeURIComponent(o),"&date=").concat(t,"&summaryData=").concat(n);e.push(c)}catch(e){console.error("Error fetching weather summary:",e)}};return(0,r.jsx)("div",{className:"min-h-screen bg-[#f0f4f8] flex justify-center items-center p-4 font-sans",children:(0,r.jsxs)("div",{className:"w-full max-w-[400px] bg-white rounded-lg shadow-lg overflow-hidden",children:[(0,r.jsx)("div",{className:"bg-[#007bff] text-white p-4 text-center",children:(0,r.jsx)("h1",{className:"text-[1.8rem] font-bold",children:o})}),(0,r.jsxs)("div",{className:"flex justify-center gap-6 p-4",children:[(0,r.jsx)("button",{onClick:()=>i("Celsius"),className:"mr-2 ".concat("Celsius"===l?"text-blue-500":"text-gray-600"),children:"Celsius"}),(0,r.jsx)("button",{onClick:()=>i("Fahrenheit"),className:"mr-2 ".concat("Fahrenheit"===l?"text-blue-500":"text-gray-600"),children:"Fahrenheit"}),(0,r.jsx)("button",{onClick:()=>i("Kelvin"),className:"".concat("Kelvin"===l?"text-blue-500":"text-gray-600"),children:"Kelvin"})]}),(0,r.jsx)("div",{className:"p-4",children:(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,r.jsx)("div",{className:"weather-icon",children:(0,r.jsx)("img",{src:"http://openweathermap.org/img/wn/03d@2x.png",alt:"scattered clouds",className:"w-16 h-16"})}),(0,r.jsxs)("div",{className:"ml-4",children:[(0,r.jsxs)("p",{className:"text-[2.4rem] font-bold text-gray-800",children:[x.toFixed(1),"\xb0",g]}),(0,r.jsx)("p",{className:"text-base text-gray-600 capitalize",children:u})]}),(0,r.jsx)("div",{className:"text-sm text-gray-600",children:(0,r.jsxs)("p",{className:"flex items-center flex-col",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-2 text-[#007bff]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 6h13M8 12h13m-7 6h7"})}),"Feels like: ",f.toFixed(1),"\xb0",g]})})]})}),(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("button",{onClick:p,className:"w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200",children:"Check Summary"})})]})})},l=()=>(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)("div",{children:"Loading..."}),children:(0,r.jsx)(c,{})})}},e=>{var t=t=>e(e.s=t);e.O(0,[130,215,744],()=>t(5939)),_N_E=e.O()}]);