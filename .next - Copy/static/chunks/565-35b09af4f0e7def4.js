(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{7565:(e,t,a)=>{Promise.resolve().then(a.bind(a,9085))},6463:(e,t,a)=>{"use strict";var r=a(1169);a.o(r,"useRouter")&&a.d(t,{useRouter:function(){return r.useRouter}}),a.o(r,"useSearchParams")&&a.d(t,{useSearchParams:function(){return r.useSearchParams}})},9085:(e,t,a)=>{"use strict";a.d(t,{default:()=>n});var r=a(7437),s=a(2265),l=a(6463);let n=()=>{let e=(0,l.useRouter)(),[t,a]=(0,s.useState)("unit"),[n,i]=(0,s.useState)(!1),[c,o]=(0,s.useState)("Celsius"),[d,u]=(0,s.useState)("Delhi"),[m,h]=(0,s.useState)(""),[b,x]=(0,s.useState)(""),[f,p]=(0,s.useState)(""),v=async t=>{t.preventDefault();let a={city:d,email:m,unit:c,alertsEnabled:n,minTemperature:n?b:null,maxTemperature:n?f:null};console.log("Preferences:",a);try{let t=await fetch("http://localhost:8080/api/preferences/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(t.ok){console.log("Preferences saved successfully!");let t=await fetch("http://localhost:8080/api/weather/current/".concat(d));if(t.ok){let a=await t.json();console.log("Fetched Weather Data:",a);let r={mainCondition:a.mainCondition,temp:a.temp,feelsLike:a.feelsLike,date:a.date,city:d,unit:c};e.push("/weatherpage?data=".concat(encodeURIComponent(JSON.stringify(r))))}else{console.error("Failed to fetch weather data.",t.status);let e=await t.text();console.error("Error Response:",e)}}else{console.error("Failed to save preferences.",t.status);let e=await t.text();console.error("Error Response:",e)}}catch(e){console.error("Error:",e)}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dbeafe] via-[#e0e7ff] to-[#f3e8ff] font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,sans-serif]",children:(0,r.jsxs)("div",{className:"w-full max-w-[32rem] bg-white rounded-lg shadow-lg p-6",children:[(0,r.jsxs)("div",{className:"text-center mb-6",children:[(0,r.jsx)("h1",{className:"text-[1.875rem] font-bold text-[#3b82f6] m-0",children:"Weather Monitor"}),(0,r.jsx)("p",{className:"text-[#64748b] mt-2",children:"Set up your weather monitoring preferences"})]}),(0,r.jsxs)("form",{onSubmit:v,className:"space-y-6",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("label",{htmlFor:"city",className:"block text-sm font-medium mb-2 text-black",children:"City"}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)("select",{id:"city",value:d,onChange:e=>u(e.target.value),className:"w-full py-2 px-4 text-sm bg-[#d1d5db] border border-[#6b7280] rounded    focus:border-[#3b82f6] transition-colors text-black duration-200 outline-none",required:!0,children:[(0,r.jsx)("option",{value:"Delhi",children:"Delhi"}),(0,r.jsx)("option",{value:"Mumbai",children:"Mumbai"}),(0,r.jsx)("option",{value:"Chennai",children:"Chennai"}),(0,r.jsx)("option",{value:"Bangalore",children:"Bangalore"}),(0,r.jsx)("option",{value:"Kolkata",children:"Kolkata"}),(0,r.jsx)("option",{value:"Hyderabad",children:"Hyderabad"})]})})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-black text-sm font-medium mb-2",children:"Email Address"}),(0,r.jsxs)("div",{className:"relative flex items-center",children:[(0,r.jsx)("span",{className:"absolute left-3",children:"\uD83D\uDCE7"}),(0,r.jsx)("input",{type:"email",id:"email",value:m,onChange:e=>h(e.target.value),placeholder:"Enter your email address",className:"w-full py-2 text-black pl-10 pr-4 text-sm bg-[#d1d5db] border border-[#6b7280]    rounded focus:border-[#3b82f6] transition-colors duration-200 outline-none",required:!0})]})]}),(0,r.jsxs)("div",{className:"flex mb-4",children:[(0,r.jsx)("div",{className:"flex-1 text-center text-black py-2 cursor-pointer transition-colors duration-200\n                         ".concat("unit"===t?"bg-[#3b82f6] text-white":"bg-[#f1f5f9] text-[#64748b]"),onClick:()=>a("unit"),children:"Temperature Unit"}),(0,r.jsx)("div",{className:"flex-1 text-center text-black py-2 cursor-pointer transition-colors duration-200\n                         ".concat("alerts"===t?"bg-[#3b82f6] text-white":"bg-[#f1f5f9] text-[#64748b]"),onClick:()=>a("alerts"),children:"Alerts"})]}),(0,r.jsx)("div",{className:"".concat("unit"===t?"block":"hidden"),children:(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("label",{className:"block text-sm text-black font-medium mb-2",children:"Select Unit"}),(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsxs)("label",{className:"flex text-black items-center cursor-pointer",children:[(0,r.jsx)("input",{type:"radio",name:"unit",value:"Celsius",checked:"Celsius"===c,onChange:()=>o("Celsius"),className:"mr-2",required:!0}),"Celsius (\xb0C)"]}),(0,r.jsxs)("label",{className:"flex text-black items-center cursor-pointer",children:[(0,r.jsx)("input",{type:"radio",name:"unit",value:"Fahrenheit",checked:"Fahrenheit"===c,onChange:()=>o("Fahrenheit"),className:"mr-2",required:!0}),"Fahrenheit (\xb0F)"]}),(0,r.jsxs)("label",{className:"flex text-black items-center cursor-pointer",children:[(0,r.jsx)("input",{type:"radio",name:"unit",value:"Kelvin",checked:"Kelvin"===c,onChange:()=>o("Kelvin"),className:"mr-2",required:!0}),"Kelvin (K)"]})]})]})}),(0,r.jsxs)("div",{className:"".concat("alerts"===t?"block":"hidden"),children:[(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsxs)("label",{className:"relative inline-flex items-center cursor-pointer",children:[(0,r.jsx)("input",{type:"checkbox",checked:n,onChange:e=>i(e.target.checked),className:"sr-only peer"}),(0,r.jsx)("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer    peer-checked:after:translate-x-full peer-checked:after:border-white    after:content-[''] after:absolute after:top-[2px] after:left-[2px]    after:bg-white after:border-gray-300 after:border after:rounded-full    after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3b82f6]"}),(0,r.jsx)("span",{className:"ml-3 text-sm font-medium text-black",children:"Enable temperature alerts"})]})}),n&&(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("label",{htmlFor:"minTemperature",className:"text-black block text-sm font-medium mb-2",children:"Minimum Temperature (Celsius)"}),(0,r.jsxs)("div",{className:"relative flex items-center",children:[(0,r.jsx)("span",{className:"absolute left-3",children:"\uD83C\uDF21️"}),(0,r.jsx)("input",{type:"number",id:"minTemperature",value:b,onChange:e=>x(e.target.value),placeholder:"Min Temp",className:"w-full py-2 text-black pl-10 pr-4 text-sm bg-[#d1d5db] border border-[#6b7280]    rounded focus:border-[#3b82f6] transition-colors duration-200 outline-none",required:!0})]})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("label",{htmlFor:"maxTemperature",className:"text-black block text-sm font-medium mb-2",children:"Maximum Temperature (Celsius)"}),(0,r.jsxs)("div",{className:"relative flex items-center",children:[(0,r.jsx)("span",{className:"absolute left-3",children:"\uD83C\uDF21️"}),(0,r.jsx)("input",{type:"number",id:"maxTemperature",value:f,onChange:e=>p(e.target.value),placeholder:"Max Temp",className:"w-full py-2 text-black pl-10 pr-4 text-sm bg-[#d1d5db] border border-[#6b7280]    rounded focus:border-[#3b82f6] transition-colors duration-200 outline-none",required:!0})]})]})]})]}),(0,r.jsx)("button",{type:"submit",className:"w-full py-2 text-white bg-[#3b82f6] rounded hover:bg-[#2563eb] transition-colors duration-200",children:"Save Preferences"})]})]})})})}}}]);