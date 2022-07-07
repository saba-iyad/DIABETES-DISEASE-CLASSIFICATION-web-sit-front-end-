(this["webpackJsonpdiabetes-app"]=this["webpackJsonpdiabetes-app"]||[]).push([[0],{325:function(e,t,n){},326:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(51),s=n.n(r),i=n(6),l=n(331),d=n(81),j=n(4);var o=function(e){var t=e.start,n=e.setStart,a=Object(c.useState)(window.innerWidth),r=Object(i.a)(a,2),s=r[0],o=r[1];return Object(c.useEffect)((function(){var e=function(){return o(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{className:"site-page-header-responsive border-bottom",backIcon:!1,title:"Diabetes Diagnose",avatar:{src:"https://cdn2.iconfinder.com/data/icons/covid-19-2/64/29-Doctor-512.png",size:"large"},extra:s>=768&&[Object(j.jsx)(d.a,{className:"px-5 mt-1 mt-md-0 text-light",style:{backgroundColor:"#EF76A1"},onClick:function(){return n(!t)},children:"Start"},"1")]}),","]})},b=n.p+"static/media/diabetes.f16d07e6.svg";var u=function(e){var t=e.setStart,n=Object(c.useState)(window.innerWidth),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=function(){return s(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),Object(j.jsxs)("div",{className:"d-md-flex h-100 align-items-center",children:[Object(j.jsx)("div",{className:"h-100 mx-md-5 d-md-flex flex-column justify-content-center align-items-center",children:Object(j.jsxs)("div",{className:"mx-3 mx-md-5 mt-5",children:[Object(j.jsx)("h1",{className:"d-block mx-auto  mb-4 ",style:{color:"#EF76A1"},children:"Welcome to our Diabetes Diagnose System"}),Object(j.jsx)("h4",{className:"".concat(r>1200?"w-75":""),children:"Here you can Enter your medical information and we can tell you if you have diabetes or not"}),Object(j.jsx)("h5",{className:"".concat(r>1200?"w-75":""," mt-3 text-danger"),children:"Note : This web app is for educational purposes only and you must see a real doctor."}),Object(j.jsx)(d.a,{style:{backgroundColor:"#EF76A1"},size:"large",className:"rounded px-5 mt-4 text-light",onClick:function(){t(!0)},children:"Start"}),Object(j.jsx)("div",{className:"my-5"})]})}),Object(j.jsx)("div",{className:" pt-4",children:r>768?Object(j.jsx)("img",{className:"pt-5",src:b,alt:"system users",width:500,height:500}):Object(j.jsx)("img",{className:"pt-5",src:b,alt:"system users"})})]})},h=n(5),m=n(330),O=n(332),x=n(329),v=n(333),f=n(336),p=n(34),g=n(30),y=n(13),N=n(334),C=n(335),L=["label","placeholder"];var S=function(e){var t=e.label,n=e.placeholder,c=Object(y.a)(e,L),a=Object(p.c)(c),r=Object(i.a)(a,2),s=r[0],l=r[1];return Object(j.jsx)(N.a.Item,{hasFeedback:!0,validateStatus:l.error&&l.touched?"error":null,help:l.error&&l.touched?l.error:null,label:t,labelCol:{span:24},children:Object(j.jsx)(C.a,Object(h.a)(Object(h.a)(Object(h.a)({},s),c),{},{placeholder:n,iconRender:function(e){return e?"Hide":"Show"}}))})};var D=function(e){var t=e.handleChangeAgeAndGender,n=e.prevInfo,c=e.next,a=e.setStart,r=g.b().shape({Gender:g.a().required("Gender is required"),AGE:g.a().required("Age is required")});return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p.b,{initialValues:{Gender:n.Gender,AGE:n.AGE},validationSchema:r,onSubmit:function(e){t(e),c()},children:function(e){var t=e.values,n=e.handleChange;return Object(j.jsx)(p.a,{children:Object(j.jsxs)("div",{className:"row my-2 justify-content-center",children:[Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)(S,{name:"AGE",label:"Age",type:"number",placeholder:"enter your age"})}),Object(j.jsxs)("div",{className:"col-md-12",children:[Object(j.jsx)(v.a,{className:"mb-2",children:"Gender"}),Object(j.jsxs)(f.a.Group,{onChange:n,value:t.Gender,name:"Gender",size:"large",children:[Object(j.jsx)(f.a,{value:1,children:"Male"}),Object(j.jsx)(f.a,{value:2,children:"Female"})]})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(j.jsx)(d.a,{className:"mx-3",onClick:function(){return a(!1)},children:"Prev"}),Object(j.jsx)(d.a,{className:"text-light",style:{backgroundColor:"#EF76A1"},htmlType:"submit",children:"Next"})]})]})})}})})};var w=function(e){var t=e.prev,n=(e.type,e.submit);return Object(j.jsxs)("div",{className:"d-flex justify-content-end mt-5",children:[Object(j.jsx)(d.a,{style:{margin:"0 8px"},onClick:function(){return t()},children:"Prev"}),Object(j.jsx)(d.a,{style:{backgroundColor:"#EF76A1"},className:"text-light",htmlType:"submit",children:n?"Submit":"Next"})]})};var A=function(e){var t=e.handleChangeUreaAndCr,n=e.prevInfo,c=e.next,a=e.prev,r=g.b().shape({Urea:g.a().required("Urea is required"),Cr:g.a().required("Cr is required")});return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p.b,{initialValues:{Urea:n.Urea,Cr:n.Cr},validationSchema:r,onSubmit:function(e){t(e),c()},children:function(){return Object(j.jsx)(p.a,{children:Object(j.jsxs)("div",{className:"row my-2 justify-content-center",children:[Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)(S,{name:"Urea",label:"Urea",type:"number",placeholder:"enter your Urea"})}),Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)(S,{name:"Cr",label:"Cr",type:"number",placeholder:"enter your Cr"})}),Object(j.jsx)("div",{className:"d-flex justify-content-end",children:Object(j.jsx)(w,{prev:a})})]})})}})})};var F=function(e){var t=e.handleChangeHbaAndChol,n=e.prevInfo,c=e.next,a=e.prev,r=g.b().shape({HbA1c:g.a().required("HbA1C is required"),Chol:g.a().required("Chol is required")});return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p.b,{initialValues:{HbA1c:n.HbA1c,Chol:n.Chol},validationSchema:r,onSubmit:function(e){t(e),c()},children:function(){return Object(j.jsx)(p.a,{children:Object(j.jsxs)("div",{className:"row my-2 justify-content-center",children:[Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)(S,{name:"HbA1c",label:"HbA1C",type:"number",placeholder:"enter your HbA1C"})}),Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)(S,{name:"Chol",label:"Chol",type:"number",placeholder:"enter your Chol"})}),Object(j.jsx)("div",{className:"d-flex justify-content-end",children:Object(j.jsx)(w,{prev:a})})]})})}})})};var I=function(e){var t=e.handleChangeDlFamily,n=e.prevInfo,c=e.next,a=e.prev,r=g.b().shape({HDL:g.a().required("HDL is required"),LDL:g.a().required("LDL is required")});return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p.b,{initialValues:{HDL:n.HDL,LDL:n.LDL},validationSchema:r,onSubmit:function(e){t(e),c()},children:function(){return Object(j.jsx)(p.a,{children:Object(j.jsxs)("div",{className:"row my-2 justify-content-center",children:[Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)(S,{name:"HDL",label:"HDL",type:"number",placeholder:"enter your HDL"})}),Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)(S,{name:"LDL",label:"LDL",type:"number",placeholder:"enter your LDL"})}),Object(j.jsx)("div",{className:"d-flex justify-content-end",children:Object(j.jsx)(w,{prev:a})})]})})}})})};var G=function(e){var t=e.handleChangeBMI,n=e.prevInfo,c=e.next,a=e.prev,r=e.setFinsihed,s=g.b().shape({BMI:g.a().required("BMI is required")});return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p.b,{initialValues:{BMI:n.BMI},validationSchema:s,onSubmit:function(e){t(e),r(!0),c()},children:function(){return Object(j.jsx)(p.a,{children:Object(j.jsxs)("div",{className:"row my-2 justify-content-center",children:[Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)(S,{name:"BMI",label:"BMI",type:"number",placeholder:"enter your BMI"})}),Object(j.jsx)("div",{className:"d-flex justify-content-end",children:Object(j.jsx)(w,{submit:"submit",prev:a})})]})})}})})};var k=function(e){var t=e.handleChangTg,n=e.prevInfo,c=e.next,a=e.prev,r=g.b().shape({VLDL:g.a().required("VLDL is required"),TG:g.a().required("TG is required")});return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p.b,{initialValues:{VLDL:n.VLDL,TG:n.TG},validationSchema:r,onSubmit:function(e){t(e),c()},children:function(){return Object(j.jsx)(p.a,{children:Object(j.jsxs)("div",{className:"row my-2 justify-content-center",children:[Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)(S,{name:"VLDL",label:"VLDL",type:"number",placeholder:"enter your VLDL"})}),Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)(S,{name:"TG",label:"TG",type:"number",placeholder:"enter your TG"})}),Object(j.jsx)("div",{className:"d-flex justify-content-end",children:Object(j.jsx)(w,{prev:a})})]})})}})})},H=n(193),q=n.n(H),E=n(328),T=n.p+"static/media/defect.5e169d1c.svg",V=n.p+"static/media/heal.b4c9eb28.svg";var B=function(e){var t=e.Info,n=e.setStart,a=Object(c.useState)(""),r=Object(i.a)(a,2),s=r[0],l=r[1],o=Object(c.useState)(!0),b=Object(i.a)(o,2),u=b[0],m=b[1],O=Object(c.useState)(!1),x=Object(i.a)(O,2),v=x[0],f=x[1];return Object(c.useEffect)((function(){q()({method:"POST",data:Object(h.a)({},t),url:"https://diabetes-model-1293.herokuapp.com/"}).then((function(e){m(!1),l(e.data)})).catch((function(e){var t=e.err;f({err:t})}))}),[t]),Object(j.jsx)(j.Fragment,{children:v?Object(j.jsx)("h2",{className:"alert alert-danger mt-5",children:"Something went wrong"}):Object(j.jsx)("div",{className:"mt-5",children:u?Object(j.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(j.jsx)(E.a,{size:"large"})}):Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center",children:["has diabetes"===s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"text-center",children:"Check Your Doctor You may have Diabetes"}),Object(j.jsx)("img",{className:"w-100 h-100",src:T,alt:"has diabetes"})]}):"The patient maybe has diabetes check your doctor"===s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"text-center",children:"Check Your Doctor You may have Diabetes"}),Object(j.jsx)("img",{className:"w-100 h-100",src:T,alt:"maybe has diabetes"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"text-center",children:"Congrats, No Diabetes"}),Object(j.jsx)("img",{className:"w-100 h-100",src:V,alt:"dont have diabetes"})]}),Object(j.jsx)(d.a,{style:{backgroundColor:"#EF76A1"},size:"large",className:"rounded px-5 mt-4 text-light",onClick:function(){return n(!1)},children:"Return Home"})]})})})};var M=function(e){var t=e.setStart,n=Object(c.useState)(0),a=Object(i.a)(n,2),r=a[0],s=a[1],l=Object(c.useState)(!1),d=Object(i.a)(l,2),o=d[0],b=d[1],u=Object(c.useState)({AGE:"",Gender:""}),v=Object(i.a)(u,2),f=v[0],p=v[1],g=Object(c.useState)({Urea:"",Cr:""}),y=Object(i.a)(g,2),N=y[0],C=y[1],L=Object(c.useState)({HbA1c:"",Chol:""}),S=Object(i.a)(L,2),w=S[0],H=S[1],q=Object(c.useState)({HDL:"",LDL:""}),E=Object(i.a)(q,2),T=E[0],V=E[1],M=Object(c.useState)({VLDL:"",TG:""}),U=Object(i.a)(M,2),z=U[0],P=U[1],W=Object(c.useState)({BMI:""}),Y=Object(i.a)(W,2),J=Y[0],R=Y[1],K=function(){s(r+1)},Q=function(){s(r-1)},X=O.a.Step,Z=[{title:"Age And Gender",content:Object(j.jsx)(D,{handleChangeAgeAndGender:function(e){p(Object(h.a)(Object(h.a)({},f),e))},prevInfo:f,next:K,setStart:t})},{title:"Urea And Cr",content:Object(j.jsx)(A,{handleChangeUreaAndCr:function(e){C(Object(h.a)(Object(h.a)({},N),e))},prevInfo:N,next:K,prev:Q})},{title:"HbA1C And Chol",content:Object(j.jsx)(F,{handleChangeHbaAndChol:function(e){H(Object(h.a)(Object(h.a)({},w),e))},prevInfo:w,next:K,prev:Q})},{title:"LDL And HDL",content:Object(j.jsx)(I,{handleChangeDlFamily:function(e){V(Object(h.a)(Object(h.a)({},T),e))},prevInfo:T,next:K,prev:Q})},{title:"TG And VLDL",content:Object(j.jsx)(k,{handleChangTg:function(e){P(Object(h.a)(Object(h.a)({},z),e))},prevInfo:z,next:K,prev:Q})},{title:"BMI",content:Object(j.jsx)(G,{handleChangeBMI:function(e){R(Object(h.a)(Object(h.a)({},J),e))},prevInfo:J,next:K,prev:Q,setFinsihed:b})}],$=Object(h.a)(Object(h.a)(Object(h.a)(Object(h.a)(Object(h.a)(Object(h.a)({},f),J),T),N),w),z);return Object(j.jsx)(j.Fragment,{children:o?Object(j.jsx)(B,{setStart:t,Info:$}):Object(j.jsxs)(m.a,{style:{backgroundColor:"#F7F7F7"},className:"mx-3 mx-md-0 border mt-5 shadow",title:Z[r].title,children:[Object(j.jsx)(O.a,{size:"small",className:"d-xl-block d-none",current:r,children:Z.map((function(e){return Object(j.jsx)(X,{title:e.title},e.title)}))}),Object(j.jsx)(x.a,{className:"d-xl-block d-none"}),Object(j.jsx)("div",{className:"steps-content",children:Z[r].content})]})})};var U=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{style:{backgroundColor:"#f0f0f0",height:"100vh"},children:[Object(j.jsx)(o,{start:n,setStart:a}),Object(j.jsx)("div",{className:"d-md-flex flex-column align-items-center pb-3",children:n?Object(j.jsx)("div",{children:Object(j.jsx)(M,{setStart:a})}):Object(j.jsx)("div",{children:Object(j.jsx)(u,{setStart:a})})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,337)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(323),n(324),n(325);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root")),z()}},[[326,1,2]]]);
//# sourceMappingURL=main.3f6a87e2.chunk.js.map