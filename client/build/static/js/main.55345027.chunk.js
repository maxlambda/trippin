(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{135:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(19),r=n.n(c),s=n(29),l=n(14),i=n.n(l),o=n(25),u=n(41),j=n(5),b=n(31),d=n(26),p=n.n(d),O=n(86),x=n(44),h=n.n(x),f=n(161),m=n(164),g=n(33),v=n.n(g),y=n(163),k=(n(135),n(2));var C=function(e){return Object(k.jsx)("div",{className:"header",children:Object(k.jsx)(f.a,{style:{backgroundColor:"#111D5E"},children:Object(k.jsxs)(y.a,{children:[Object(k.jsx)(v.a,{}),Object(k.jsx)("h1",{className:"title",children:"trippin"}),e.currentUser?Object(k.jsx)("div",{className:"logout-btn",children:Object(k.jsx)(m.a,{size:"large",style:{height:"30px",color:"#C2FFD9",borderRadius:"10px"},onClick:function(){e.onLogout()},children:"LOG OUT"})}):Object(k.jsxs)("div",{className:"login-btns",children:[Object(k.jsx)(m.a,{size:"large",style:{height:"30px",color:"#9DDAC6",borderRadius:"10px"},onClick:function(){e.onLogin()},children:"LOGIN"}),Object(k.jsx)(m.a,{size:"large",style:{height:"30px",color:"#C2FFD9",borderRadius:"10px"},onClick:function(){e.onRegister()},children:"REGISTER"})]})]})})})},N=n(39),w=n.n(N);n(139);var S=function(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),l=Object(j.a)(s,2),u=l[0],b=l[1],d=Object(a.useState)(!1),O=Object(j.a)(d,2),x=O[0],h=O[1],f=Object(a.useRef)(),g=Object(a.useRef)();function y(){b(!1),h(!1),r(!1)}function C(){return(C=Object(o.a)(i.a.mark((function t(n){var a,c,s,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=f.current.value,c=g.current.value,""!==a&&null!==a){t.next=8;break}return b(!0),t.abrupt("return");case 8:if(""!==c&&null!==c){t.next=11;break}return h(!0),t.abrupt("return");case 11:return s={username:a,password:c},t.prev=12,r(!1),t.next=16,p.a.post("/users/login",s);case 16:l=t.sent,e.setLocalStorage(l.data.displayname),e.setCurrentUser(l.data.displayname),e.onClose(),t.next=26;break;case 22:t.prev=22,t.t0=t.catch(12),r(!0),console.log(t.t0);case 26:case"end":return t.stop()}}),t,null,[[12,22]])})))).apply(this,arguments)}return Object(k.jsxs)("div",{className:"login-container",children:[Object(k.jsx)("div",{className:"logo",children:Object(k.jsx)(v.a,{fontSize:"large"})}),Object(k.jsx)(w.a,{className:"cancel",onClick:function(){return e.onClose()}}),Object(k.jsxs)("form",{onSubmit:function(e){return C.apply(this,arguments)},children:[Object(k.jsx)("input",{className:"inputs",type:"text",placeholder:"Username",ref:f,onClick:y,onChange:y}),u&&Object(k.jsx)("span",{className:"login-error",children:"Please enter a username."}),Object(k.jsx)("input",{className:"inputs",type:"password",placeholder:"Password",ref:g,onClick:y,onChange:y}),x&&Object(k.jsx)("span",{className:"login-error",children:"Please enter a password."}),Object(k.jsx)(m.a,{type:"submit",variant:"contained",size:"large",style:{color:"white",width:"100%",backgroundColor:"#111D5E",margin:"15px auto 5px"},children:"LOGIN"}),c&&Object(k.jsx)("span",{className:"login-error",children:"Invalid username and password combination."})]})]})};n(140);var z=function(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),l=Object(j.a)(s,2),u=l[0],b=l[1],d=Object(a.useState)(!1),O=Object(j.a)(d,2),x=O[0],h=O[1],f=Object(a.useState)(!1),g=Object(j.a)(f,2),y=g[0],C=g[1],N=Object(a.useState)(!1),S=Object(j.a)(N,2),z=S[0],F=S[1],I=Object(a.useState)(!1),B=Object(j.a)(I,2),D=B[0],R=B[1],E=Object(a.useRef)(),L=Object(a.useRef)(),P=Object(a.useRef)(),U=Object(a.useRef)();function A(){h(!1),C(!1),F(!1),R(!1)}function T(){return(T=Object(o.a)(i.a.mark((function e(t){var n,a,c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=E.current.value,a=L.current.value,c=P.current.value,s=U.current.value,""!==n&&null!==n){e.next=10;break}return h(!0),e.abrupt("return");case 10:if(""!==a&&null!==a){e.next=15;break}return C(!0),e.abrupt("return");case 15:if(""!==c&&null!==c){e.next=20;break}return F(!0),e.abrupt("return");case 20:if(""!==s&&null!==s){e.next=23;break}return R(!0),e.abrupt("return");case 23:return l={username:n,displayname:a,email:c,password:s},e.prev=24,r(!1),b(!1),e.next=29,p.a.post("/users/register",l);case 29:r(!0),e.next=36;break;case 32:e.prev=32,e.t0=e.catch(24),b(!0),console.log(e.t0);case 36:case"end":return e.stop()}}),e,null,[[24,32]])})))).apply(this,arguments)}return Object(k.jsx)("div",{children:e.tooManyUsers?Object(k.jsxs)("div",{className:"register-container-too-many-users",children:[Object(k.jsx)(w.a,{className:"cancel",onClick:function(){return e.onClose()}}),Object(k.jsx)("span",{children:"Sorry, there are too many users! We currently only allow a finite number of users. Please contact the creator of the website."})]}):Object(k.jsxs)("div",{className:"register-container",children:[Object(k.jsx)("div",{className:"logo",children:Object(k.jsx)(v.a,{fontSize:"large"})}),Object(k.jsx)(w.a,{className:"cancel",onClick:function(){return e.onClose()}}),Object(k.jsxs)("form",{onSubmit:function(e){return T.apply(this,arguments)},children:[Object(k.jsx)("input",{className:"inputs",type:"text",placeholder:"Username",ref:E,onClick:A,onChange:A}),x&&Object(k.jsx)("span",{className:"register-error",children:"Please enter a username."}),Object(k.jsx)("input",{className:"inputs",type:"text",placeholder:"Display Name",ref:L,onClick:A,onChange:A}),y&&Object(k.jsx)("span",{className:"register-error",children:"Please enter a display name."}),Object(k.jsx)("input",{className:"inputs",type:"email",placeholder:"Email",ref:P,onClick:A,onChange:A}),z&&Object(k.jsx)("span",{className:"register-error",children:"Please enter an email."}),Object(k.jsx)("input",{className:"inputs",type:"password",placeholder:"Password",ref:U,onClick:A,onChange:A}),D&&Object(k.jsx)("span",{className:"register-error",children:"Please enter a password."}),Object(k.jsx)(m.a,{type:"submit",variant:"contained",size:"large",style:{color:"white",width:"100%",backgroundColor:"#FF4848",margin:"15px auto 5px"},children:"REGISTER"}),c&&Object(k.jsx)("span",{className:"register-success",children:"Registered successfully!"}),u&&Object(k.jsx)("span",{className:"register-error",children:"Failed to register."})]})]})})},F=(n(141),n(62)),I=n.n(F),B=n(84),D=n.n(B),R=n(85),E=n.n(R),L=n(83),P=n.n(L),U=n(54),A=n.n(U),T=n(165),_=n(145),G=n(61),J=n.n(G),M=n(82),W=n.n(M),Z=n(166),Y=null;h.a.workerClass=n(142).default;var H=function(){var e=window.localStorage,t=Object(a.useState)(e.getItem("user")),n=Object(j.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(!1),d=Object(j.a)(l,2),x=d[0],h=d[1],f=Object(a.useState)([]),g=Object(j.a)(f,2),v=g[0],y=g[1],N=Object(a.useState)(!1),w=Object(j.a)(N,2),F=w[0],B=w[1],R=Object(a.useState)(null),L=Object(j.a)(R,2),U=L[0],G=L[1],M=Object(a.useState)(!1),H=Object(j.a)(M,2),V=H[0],q=H[1],Q=Object(a.useState)(!1),K=Object(j.a)(Q,2),X=K[0],$=K[1],ee=Object(a.useState)(!1),te=Object(j.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(!1),re=Object(j.a)(ce,2),se=re[0],le=re[1],ie=Object(a.useState)(null),oe=Object(j.a)(ie,2),ue=oe[0],je=oe[1],be=Object(a.useState)(null),de=Object(j.a)(be,2),pe=de[0],Oe=de[1],xe=Object(a.useState)(null),he=Object(j.a)(xe,2),fe=he[0],me=he[1],ge=Object(a.useState)(0),ve=Object(j.a)(ge,2),ye=ve[0],ke=ve[1],Ce=Object(a.useState)(!1),Ne=Object(j.a)(Ce,2),we=Ne[0],Se=Ne[1],ze=Object(a.useState)(!1),Fe=Object(j.a)(ze,2),Ie=Fe[0],Be=Fe[1],De=Object(a.useState)(!1),Re=Object(j.a)(De,2),Ee=Re[0],Le=Re[1],Pe=Object(a.useState)({width:"100vw",height:"100vh",latitude:36.64920667168877,longitude:-21.007683545740246,zoom:2}),Ue=Object(j.a)(Pe,2),Ae=Ue[0],Te=Ue[1];function _e(e,t,n){G(e),$(!1),Te(Object(u.a)(Object(u.a)({},Ae),{},{latitude:t,longitude:n}))}function Ge(){var e=0;v.forEach((function(t){t.displayname===c&&e++})),e>4?(B(!0),setTimeout((function(){return B(!1)}),5e3)):(Y=U,q(!0)),G(null)}function Je(){return(Je=Object(o.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==pe&&null!==pe){e.next=6;break}return Se(!0),e.abrupt("return");case 6:if(""!==fe&&null!==fe){e.next=11;break}return Be(!0),e.abrupt("return");case 11:if(!(ye<1||ye>5||null===ye)){e.next=14;break}return Le(!0),e.abrupt("return");case 14:return n={displayname:c,title:pe,desc:fe,rating:ye,lat:ue.lat,long:ue.long},e.prev=15,e.next=18,p.a.post("/pins",n);case 18:a=e.sent,y([].concat(Object(s.a)(v),[a.data])),je(null),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(15),console.log(e.t0);case 26:q(!1),Oe(null),me(null),ke(null),$(!1);case 31:case"end":return e.stop()}}),e,null,[[15,23]])})))).apply(this,arguments)}function Me(){return(Me=Object(o.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={_id:t},e.prev=1,e.next=4,p.a.post("/pins/delete",n);case 4:a=v.filter((function(e){return e._id!==t})),y(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:G(null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/pins");case 3:t=e.sent,y(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/users");case 3:e.sent.data.length>49&&h(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),Object(k.jsx)("div",{children:Object(k.jsxs)(b.d,Object(u.a)(Object(u.a)({},Ae),{},{mapboxApiAccessToken:"pk.eyJ1IjoibWF4bmlmaWNlbmNlIiwiYSI6ImNrdDJhbWF3bDBuMjkyb290bHMycGlkZHkifQ.UToyvyZoUsBV42ezfZLujA",onViewportChange:function(e){return Te(e)},mapStyle:"mapbox://styles/safak/cknndpyfq268f17p53nmpwira",transitionDuration:10,transitionInterpolator:new b.a,doubleClickZoom:!1,onDblClick:function(e){if(Se(!1),Be(!1),Le(!1),V){var t=Object(j.a)(e.lngLat,2),n=t[0],a=t[1];je({lat:a,long:n})}else G(null)},children:[Object(k.jsx)(C,{currentUser:c,localStorage:e,onLogout:function(){e.removeItem("user"),r(null)},onRegister:function(){ae(!ne),le(!1)},onLogin:function(){ae(!1),le(!se)}}),se&&Object(k.jsx)(Z.a,{in:!0,children:Object(k.jsx)(S,{currenUser:c,localStorage:e,setCurrentUser:r,setLocalStorage:function(t){!function(t){e.setItem("user",t)}(t)},onClose:function(){return le(!1)}})}),ne&&Object(k.jsx)(Z.a,{in:!0,children:Object(k.jsx)(z,{currentUser:c,onClose:function(){return ae(!1)},tooManyUsers:x})}),V&&null!==ue&&Object(k.jsx)(b.b,{latitude:ue.lat,longitude:ue.long,children:Object(k.jsx)(Z.a,{in:!0,children:Object(k.jsx)(J.a,{style:{fontSize:"40px",color:"#FF4848"}})})}),v.map((function(e){return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{style:{zIndex:"0",position:"fixed"},children:Object(k.jsx)(b.b,{latitude:e.lat,longitude:e.long,offsetLeft:-20,offsetTop:-40,children:Object(k.jsx)(Z.a,{in:!(V||ne||se),children:Object(k.jsx)(J.a,{style:{fontSize:"40px",color:U===e._id?"#FF4848":e.displayname===c?"#111D5E":"#7B8B94",cursor:"pointer"},onClick:function(){return null===U?_e(e._id,e.lat,e.long):U===e._id?G(null):_e(e._id,e.lat,e.long)}})})})}),U===e._id&&!ne&&!se&&Object(k.jsx)("div",{className:"popup",children:Object(k.jsx)(Z.a,{in:!0,children:Object(k.jsx)(b.c,{latitude:e.lat,longitude:e.long,offsetLeft:20,closeButton:!0,closeOnClick:!1,onClose:function(){return G(null)},anchor:"left",children:Object(k.jsxs)("div",{className:"card",children:[Object(k.jsx)("h4",{className:"title",children:e.title}),Object(k.jsx)("label",{children:"Review:"}),Object(k.jsx)("p",{className:"desc",children:e.desc}),Object(k.jsx)("label",{children:"Rating:"}),Object(k.jsx)("div",{className:"stars",children:Array(e.rating).fill(Object(k.jsx)(W.a,{className:"star"}))}),Object(k.jsx)("label",{children:"Information:"}),Object(k.jsxs)("span",{className:"username",children:["Created by ",Object(k.jsx)("b",{children:e.displayname})]}),Object(k.jsx)("span",{className:"createdDate",children:Object(O.a)(e.createdAt)}),e.displayname===c&&!X&&Object(k.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",startIcon:Object(k.jsx)(P.a,{}),style:{width:"100%",backgroundColor:"#7B8B94",margin:"15px auto 5px"},classes:{label:"pin-button"},onClick:function(){return $(!0)},children:"DELETE PIN"}),e.displayname===c&&X&&null!==U&&Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:"deleting-pin",children:"Are you sure you want to delete this pin?"}),Object(k.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",startIcon:Object(k.jsx)(D.a,{}),style:{width:"45%",backgroundColor:"#FF4848",margin:"15px auto 5px"},classes:{label:"pin-button"},onClick:function(){return function(e){return Me.apply(this,arguments)}(e._id)},children:"YES"}),Object(k.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",startIcon:Object(k.jsx)(E.a,{}),style:{position:"absolute",right:"10px",width:"45%",backgroundColor:"#7B8B94",margin:"15px auto 5px"},classes:{label:"pin-button"},onClick:function(){return $(!1)},children:"NO"})]})]})})})})]},e._id)})),ue&&V&&Object(k.jsx)(Z.a,{in:!0,children:Object(k.jsx)(b.c,{latitude:ue.lat,longitude:ue.long,offsetLeft:20,closeButton:!0,closeOnClick:!1,onClose:function(){return je(null)},anchor:"left",children:Object(k.jsx)("div",{children:Object(k.jsxs)("form",{onSubmit:function(e){return Je.apply(this,arguments)},children:[Object(k.jsx)("label",{children:"Place name"}),Object(k.jsx)("input",{placeholder:"Enter a title...",onClick:function(){return Se(!1)},onChange:function(e){return Oe(e.target.value)}}),we&&Object(k.jsx)(Z.a,{in:!0,children:Object(k.jsxs)("div",{className:"error",children:[Object(k.jsx)(A.a,{size:"small",style:{color:"#7B8B94"}}),Object(k.jsx)("p",{children:"Please enter a place name."})]})}),Object(k.jsx)("label",{children:"Review"}),Object(k.jsx)("textarea",{placeholder:"Tell us about this place...",onClick:function(){return Be(!1)},onChange:function(e){return me(e.target.value)}}),Ie&&Object(k.jsx)(Z.a,{in:!0,children:Object(k.jsxs)("div",{className:"error",children:[Object(k.jsx)(A.a,{size:"small",style:{color:"#7B8B94"}}),Object(k.jsx)("p",{children:"Please enter a description."})]})}),Object(k.jsx)("label",{children:"Rating"}),Object(k.jsxs)("select",{onClick:function(){return Le(!1)},onChange:function(e){return ke(e.target.value)},children:[Object(k.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"Choose rating..."}),Object(k.jsx)("option",{value:"1",children:"1"}),Object(k.jsx)("option",{value:"2",children:"2"}),Object(k.jsx)("option",{value:"3",children:"3"}),Object(k.jsx)("option",{value:"4",children:"4"}),Object(k.jsx)("option",{value:"5",children:"5"})]}),Ee&&Object(k.jsx)(Z.a,{in:!0,children:Object(k.jsxs)("div",{className:"error",children:[Object(k.jsx)(A.a,{size:"small",style:{color:"#7B8B94"}}),Object(k.jsx)("p",{children:"Please enter a rating."})]})}),Object(k.jsx)(m.a,{type:"submit",variant:"contained",color:"secondary",size:"large",startIcon:Object(k.jsx)(I.a,{}),style:{width:"100%",backgroundColor:"#FF4848",margin:"15px auto 5px"},classes:{label:"pin-button"},onClick:Ge,children:"ADD PIN"})]})})})}),Object(k.jsx)(Z.a,{in:!!V,children:Object(k.jsx)("div",{className:"add-pin-text",children:Object(k.jsx)(_.a,{elevation:2,style:{position:"absolute",fontSize:"23px",top:"40px",left:"50%",transform:"translate(-50%, -50%)",color:"#FF4848",padding:"15px 30px",margin:"15px"},children:"Double-click anywhere to add a pin."})})}),Object(k.jsx)(Z.a,{in:!!F,children:Object(k.jsx)("div",{className:"add-pin-text",children:Object(k.jsx)(_.a,{elevation:2,style:{position:"absolute",fontSize:"23px",top:"40px",left:"50%",transform:"translate(-50%, -50%)",color:"#FF4848",padding:"15px 30px",margin:"15px"},children:"You have too many pins! Users can only have 5 pins at a time."})})}),Object(k.jsx)(Z.a,{in:!V&&""!==c&&null!==c,children:Object(k.jsx)(T.a,{style:{backgroundColor:F?"#7B8B94":"#FF4848",position:"absolute",left:"10px",bottom:"40px"},size:"small",onClick:Ge,children:Object(k.jsx)(I.a,{})})}),Object(k.jsx)(Z.a,{in:!!V,children:Object(k.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",style:{backgroundColor:"#7B8B94",position:"absolute",left:"10px",bottom:"40px"},classes:{label:"pin-button"},onClick:function(){q(!1),je(null),G(Y)},children:"CANCEL"})})]}))})};var V=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(H,{})})};r.a.render(Object(k.jsx)(V,{}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.55345027.chunk.js.map