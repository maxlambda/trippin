(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{182:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(23),c=n.n(a),s=n(38),l=n(17),i=n.n(l),o=n(29),u=n(32),j=n(7),b=n(31),d=n(30),p=n.n(d),O=n(100),h=n(42),x=n.n(h),f=n(101),g=(n(180),n(181),n(209)),m=n(212),v=n(44),y=n.n(v),k=n(211);function C(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function w(){var e=Object(r.useState)(C()),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){a(C())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}n(182);var N=n(2);var S=function(e){var t=w(),n=(t.height,t.width);return Object(N.jsx)("div",{className:"header",children:Object(N.jsx)(g.a,{style:{backgroundColor:"#111D5E"},children:Object(N.jsxs)(k.a,{children:[Object(N.jsx)(y.a,{}),Object(N.jsx)("h1",{className:e.currentUser?"title no-title":"title",children:"trippin"}),e.currentUser&&Object(N.jsx)("div",{ref:e.geoRef,className:"geocoder"}),e.currentUser&&n>485&&Object(N.jsx)("div",{className:"logout-btn",children:Object(N.jsx)(m.a,{size:"large",style:{height:"30px",color:"#C2FFD9",borderRadius:"10px"},onClick:function(){e.onLogout()},children:"LOG OUT"})}),!e.currentUser&&Object(N.jsxs)("div",{className:"login-btns",children:[Object(N.jsx)(m.a,{size:"large",style:{height:"30px",color:"#9DDAC6",borderRadius:"10px"},onClick:function(){e.onLogin()},children:"LOGIN"}),Object(N.jsx)(m.a,{size:"large",style:{height:"30px",color:"#C2FFD9",borderRadius:"10px"},onClick:function(){e.onRegister()},children:"REGISTER"})]})]})})})},R=n(51),I=n.n(R);n(186);var z=function(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!1),l=Object(j.a)(s,2),u=l[0],b=l[1],d=Object(r.useState)(!1),O=Object(j.a)(d,2),h=O[0],x=O[1],f=Object(r.useRef)(),g=Object(r.useRef)();function v(){b(!1),x(!1),c(!1)}function k(){return(k=Object(o.a)(i.a.mark((function t(n){var r,a,s,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=f.current.value.toLowerCase(),a=g.current.value,""!==r&&null!==r){t.next=8;break}return b(!0),t.abrupt("return");case 8:if(""!==a&&null!==a){t.next=11;break}return x(!0),t.abrupt("return");case 11:return s={username:r,password:a},t.prev=12,c(!1),t.next=16,p.a.post("/users/login",s);case 16:l=t.sent,e.setLocalStorage({user:l.data.username,display:l.data.displayname}),e.setCurrentUser({user:l.data.username,display:l.data.displayname}),e.onClose(),t.next=26;break;case 22:t.prev=22,t.t0=t.catch(12),c(!0),console.log(t.t0);case 26:case"end":return t.stop()}}),t,null,[[12,22]])})))).apply(this,arguments)}return Object(N.jsxs)("div",{className:"login-container",children:[Object(N.jsx)("div",{className:"logo",children:Object(N.jsx)(y.a,{fontSize:"large"})}),Object(N.jsx)(I.a,{className:"cancel",onClick:function(){return e.onClose()}}),Object(N.jsx)("h3",{className:"login-header",children:"trippin"}),Object(N.jsxs)("form",{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(N.jsx)("input",{className:"inputs",type:"text",placeholder:"Username",ref:f,onClick:v,onChange:v}),u&&Object(N.jsx)("span",{className:"login-error",children:"Please enter a username."}),Object(N.jsx)("input",{className:"inputs",type:"password",placeholder:"Password",ref:g,onClick:v,onChange:v}),h&&Object(N.jsx)("span",{className:"login-error",children:"Please enter a password."}),Object(N.jsx)(m.a,{type:"submit",variant:"contained",size:"large",style:{color:"white",width:"100%",backgroundColor:"#111D5E",margin:"15px auto 5px"},children:"LOGIN"}),a&&Object(N.jsx)("span",{className:"login-error",children:"Invalid username/password combo."})]})]})};n(187);var B=function(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!1),l=Object(j.a)(s,2),u=l[0],b=l[1],d=Object(r.useState)(!1),O=Object(j.a)(d,2),h=O[0],x=O[1],f=Object(r.useState)(!1),g=Object(j.a)(f,2),v=g[0],k=g[1],C=Object(r.useState)(!1),w=Object(j.a)(C,2),S=w[0],R=w[1],z=Object(r.useState)(!1),B=Object(j.a)(z,2),L=B[0],E=B[1],F=Object(r.useState)(!1),D=Object(j.a)(F,2),U=D[0],P=D[1],T=Object(r.useState)(!1),A=Object(j.a)(T,2),M=A[0],_=A[1],G=Object(r.useState)(!1),W=Object(j.a)(G,2),Z=W[0],J=W[1],H=Object(r.useState)(!1),V=Object(j.a)(H,2),Y=V[0],Q=V[1],q=Object(r.useRef)(),K=Object(r.useRef)(),X=Object(r.useRef)(),$=Object(r.useRef)();function ee(){x(!1),k(!1),R(!1),E(!1),P(!1),_(!1),J(!1),Q(!1)}function te(){return(te=Object(o.a)(i.a.mark((function t(n){var r,a,s,l,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=q.current.value.toLowerCase(),a=K.current.value,s=X.current.value,l=$.current.value,""!==r&&null!==r){t.next=10;break}return x(!0),t.abrupt("return");case 10:if(!(r.length<3||r.length>18)){t.next=13;break}return P(!0),t.abrupt("return");case 13:if(""!==a&&null!==a){t.next=18;break}return k(!0),t.abrupt("return");case 18:if(!(a.length>18)){t.next=21;break}return _(!0),t.abrupt("return");case 21:if(""!==s&&null!==s){t.next=26;break}return R(!0),t.abrupt("return");case 26:if(!(s.length>75)){t.next=29;break}return J(!0),t.abrupt("return");case 29:if(""!==l&&null!==l){t.next=34;break}return E(!0),t.abrupt("return");case 34:if(!(l.length<6||a.length>50)){t.next=37;break}return Q(!0),t.abrupt("return");case 37:return o={username:r,displayname:a,email:s,password:l},t.prev=38,c(!1),b(!1),t.next=43,p.a.post("/users/register",o);case 43:c(!0),q.current.value="",K.current.value="",X.current.value="",$.current.value="",setTimeout((function(){e.onClose(),e.onRegisterComplete()}),3e3),t.next=55;break;case 51:t.prev=51,t.t0=t.catch(38),b(!0),console.log(t.t0);case 55:case"end":return t.stop()}}),t,null,[[38,51]])})))).apply(this,arguments)}return Object(N.jsx)("div",{children:e.tooManyUsers?Object(N.jsxs)("div",{className:"register-container-too-many-users",children:[Object(N.jsx)(I.a,{className:"cancel",onClick:function(){return e.onClose()}}),Object(N.jsx)("span",{children:"Sorry, there are too many users! We currently only allow a finite number of users. Please contact the creator of the website."})]}):Object(N.jsxs)("div",{className:"register-container",children:[Object(N.jsx)("div",{className:"logo",children:Object(N.jsx)(y.a,{fontSize:"large"})}),Object(N.jsx)(I.a,{className:"cancel",onClick:function(){return e.onClose()}}),Object(N.jsx)("h3",{className:"register-header",children:"trippin"}),Object(N.jsx)("p",{className:"register-info",children:"Pin locations to a map. Submit reviews. See others' reviews."}),Object(N.jsxs)("form",{onSubmit:function(e){return te.apply(this,arguments)},children:[Object(N.jsx)("input",{className:"inputs",type:"text",placeholder:"Username",ref:q,onClick:ee,onChange:ee}),h&&Object(N.jsx)("span",{className:"register-error",children:"Please enter a username."}),U&&Object(N.jsx)("span",{className:"register-error",children:"Must be 3 to 18 characters long."}),Object(N.jsx)("input",{className:"inputs",type:"text",placeholder:"Display Name",ref:K,onClick:ee,onChange:ee}),v&&Object(N.jsx)("span",{className:"register-error",children:"Please enter a display name."}),M&&Object(N.jsx)("span",{className:"register-error",children:"Must be 1 to 18 characters long."}),Object(N.jsx)("input",{className:"inputs",type:"email",placeholder:"Email",ref:X,onClick:ee,onChange:ee}),S&&Object(N.jsx)("span",{className:"register-error",children:"Please enter an email."}),Z&&Object(N.jsx)("span",{className:"register-error",children:"Email must not be greater than 75 characters."}),Object(N.jsx)("input",{className:"inputs",type:"password",placeholder:"Password",ref:$,onClick:ee,onChange:ee}),L&&Object(N.jsx)("span",{className:"register-error",children:"Please enter a password."}),Y&&Object(N.jsx)("span",{className:"register-error",children:"Must be 6 to 50 characters long."}),!a&&Object(N.jsx)(m.a,{type:"submit",variant:"contained",size:"large",style:{color:"white",width:"100%",backgroundColor:"#FF4848",margin:"15px auto 5px"},children:"REGISTER"}),a&&Object(N.jsx)("span",{className:"register-success",children:"Registered successfully!"}),u&&Object(N.jsx)("span",{className:"register-error",children:"Failed to register."})]})]})})},L=(n(188),n(72)),E=n.n(L),F=n(98),D=n.n(F),U=n(99),P=n.n(U),T=n(97),A=n.n(T),M=n(65),_=n.n(M),G=n(213),W=n(192),Z=n(71),J=n.n(Z),H=n(96),V=n.n(H),Y=n(214),Q=null;x.a.workerClass=n(189).default;var q=function(){var e=w(),t=(e.height,e.width),n={user:window.localStorage.getItem("user"),display:window.localStorage.getItem("display")},a=Object(r.useState)(n),c=Object(j.a)(a,2),l=c[0],d=c[1],h=Object(r.useState)(!1),x=Object(j.a)(h,2),g=x[0],v=x[1],y=Object(r.useState)([]),k=Object(j.a)(y,2),C=k[0],R=k[1],I=Object(r.useState)(!1),L=Object(j.a)(I,2),F=L[0],U=L[1],T=Object(r.useState)(null),M=Object(j.a)(T,2),Z=M[0],H=M[1],q=Object(r.useState)(!1),K=Object(j.a)(q,2),X=K[0],$=K[1],ee=Object(r.useState)(!1),te=Object(j.a)(ee,2),ne=te[0],re=te[1],ae=null===l||""===l,ce=Object(r.useState)(ae),se=Object(j.a)(ce,2),le=se[0],ie=se[1],oe=Object(r.useState)(!1),ue=Object(j.a)(oe,2),je=ue[0],be=ue[1],de=Object(r.useState)(null),pe=Object(j.a)(de,2),Oe=pe[0],he=pe[1],xe=Object(r.useState)(null),fe=Object(j.a)(xe,2),ge=fe[0],me=fe[1],ve=Object(r.useState)(null),ye=Object(j.a)(ve,2),ke=ye[0],Ce=ye[1],we=Object(r.useState)(0),Ne=Object(j.a)(we,2),Se=Ne[0],Re=Ne[1],Ie=Object(r.useState)(!1),ze=Object(j.a)(Ie,2),Be=ze[0],Le=ze[1],Ee=Object(r.useState)(!1),Fe=Object(j.a)(Ee,2),De=Fe[0],Ue=Fe[1],Pe=Object(r.useState)(!1),Te=Object(j.a)(Pe,2),Ae=Te[0],Me=Te[1],_e=Object(r.useState)(!0),Ge=Object(j.a)(_e,2),We=Ge[0],Ze=Ge[1],Je=Object(r.useState)({width:"100vw",height:"100vh",latitude:36.64920667168877,longitude:-21.007683545740246,zoom:2}),He=Object(j.a)(Je,2),Ve=He[0],Ye=He[1],Qe=Object(r.useRef)(),qe=Object(r.useRef)(),Ke=Object(r.useRef)(),Xe=Object(r.useRef)();function $e(e,t,n){H(e),re(!1),Ye(Object(u.a)(Object(u.a)({},Ve),{},{latitude:t,longitude:n}))}function et(){var e=0;C.forEach((function(t){l&&t.username===l.user&&e++})),e>4?(U(!0),setTimeout((function(){return U(!1)}),5e3)):(Q=Z,$(!0)),H(null)}function tt(){return(tt=Object(o.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==ge&&null!==ge){e.next=6;break}return Le(!0),e.abrupt("return");case 6:if(""!==ke&&null!==ke){e.next=11;break}return Ue(!0),e.abrupt("return");case 11:if(!(Se<1||Se>5||null===Se)){e.next=14;break}return Me(!0),e.abrupt("return");case 14:return n={displayname:l.display,username:l.user,title:ge,desc:ke,rating:Se,lat:Oe.lat,long:Oe.long},e.prev=15,e.next=18,p.a.post("/pins",n);case 18:r=e.sent,R([].concat(Object(s.a)(C),[r.data])),he(null),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(15),console.log(e.t0);case 26:$(!1),me(null),Ce(null),Re(null),re(!1);case 31:case"end":return e.stop()}}),e,null,[[15,23]])})))).apply(this,arguments)}function nt(){localStorage.removeItem("user"),d(null),$(!1)}function rt(e){return Ze(e)}function at(){return(at=Object(o.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={_id:t},e.prev=1,e.next=4,p.a.post("/pins/delete",n);case 4:r=C.filter((function(e){return e._id!==t})),R(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:H(null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/pins");case 3:t=e.sent,R(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/users");case 3:e.sent.data.length>49&&v(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)(S,{geoRef:qe,currentUser:l,localStorage:localStorage,onLogout:nt,onRegister:function(){ie(!le),be(!1)},onLogin:function(){ie(!1),be(!je)}}),Object(N.jsxs)(b.d,Object(u.a)(Object(u.a)({ref:Qe},Ve),{},{mapboxApiAccessToken:"pk.eyJ1IjoibWF4bmlmaWNlbmNlIiwiYSI6ImNrdDJhbWF3bDBuMjkyb290bHMycGlkZHkifQ.UToyvyZoUsBV42ezfZLujA",onViewportChange:function(e){return t=e,void Ye(Object(u.a)(Object(u.a)({},t),{},{width:"100vw",height:"100vh"}));var t},mapStyle:"mapbox://styles/safak/cknndpyfq268f17p53nmpwira",transitionDuration:15,transitionInterpolator:new b.a,doubleClickZoom:!1,onDblClick:function(e){if(Le(!1),Ue(!1),Me(!1),X){var t=Object(j.a)(e.lngLat,2),n=t[0],r=t[1];he({lat:r,long:n})}else H(null)},dragPan:!!We,children:[l&&X&&Object(N.jsx)("div",{className:"geocoder",children:Object(N.jsx)(f.a,{ref:Ke,mapboxApiAccessToken:"pk.eyJ1IjoibWF4bmlmaWNlbmNlIiwiYSI6ImNrdDJhbWF3bDBuMjkyb290bHMycGlkZHkifQ.UToyvyZoUsBV42ezfZLujA",viewport:Ve,mapRef:Qe,containerRef:qe,placeholder:"Search for a place...",onViewportChange:function(e){return Ye(Object(u.a)(Object(u.a)({},e),{transitionDuration:1e3}))},onResult:function(e){var t=Object(j.a)(e.result.center,2),n=t[0],r=t[1];X&&(he({lat:r,long:n}),Xe.current.value=e.result.text)},clearAndBlurOnEsc:!0})}),je&&Object(N.jsx)("div",{onMouseEnter:function(){return rt(!1)},onMouseLeave:function(){return rt(!0)},children:Object(N.jsx)(Y.a,{in:!0,children:Object(N.jsx)(z,{currentUser:l,localStorage:localStorage,setCurrentUser:function(e){return d(e)},setLocalStorage:function(e){var t;t=e,localStorage.setItem("user",t.user),localStorage.setItem("display",t.display)},onClose:function(){be(!1),rt(!0)}})})}),le&&Object(N.jsx)("div",{onMouseEnter:function(){return rt(!1)},onMouseLeave:function(){return rt(!0)},children:Object(N.jsx)(Y.a,{in:!0,children:Object(N.jsx)(B,{currentUser:l,onClose:function(){ie(!1),rt(!0)},onRegisterComplete:function(){return be(!0)},tooManyUsers:g})})}),X&&null!==Oe&&Object(N.jsx)(b.b,{latitude:Oe.lat,longitude:Oe.long,offsetLeft:-20,offsetTop:-40,children:Object(N.jsx)(Y.a,{in:!0,children:Object(N.jsx)(J.a,{style:{fontSize:"40px",color:"#FF4848"}})})}),C.map((function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{style:{zIndex:"0",position:"fixed"},children:Object(N.jsx)(b.b,{latitude:e.lat,longitude:e.long,offsetLeft:-20,offsetTop:-40,children:Object(N.jsx)(Y.a,{in:!(X||le||je),children:Object(N.jsx)(J.a,{style:{fontSize:"40px",color:Z===e._id?"#FF4848":l&&e.username===l.user?"#111D5E":"#7B8B94",cursor:"pointer"},onClick:function(){return null===Z?$e(e._id,e.lat,e.long):Z===e._id?H(null):$e(e._id,e.lat,e.long)}})})})}),Z===e._id&&!le&&!je&&Object(N.jsx)("div",{className:"popup",children:Object(N.jsx)(Y.a,{in:!0,children:Object(N.jsx)(b.c,{latitude:e.lat,longitude:e.long,offsetLeft:20,closeButton:!0,closeOnClick:!1,onClose:function(){return H(null)},anchor:"left",children:Object(N.jsxs)("div",{className:"card",children:[Object(N.jsx)("h4",{className:"title",children:e.title}),Object(N.jsx)("label",{children:"Review:"}),Object(N.jsx)("p",{className:"desc",children:e.desc}),Object(N.jsx)("label",{children:"Rating:"}),Object(N.jsx)("div",{className:"stars",children:Array(e.rating).fill(Object(N.jsx)(V.a,{className:"star"}))}),Object(N.jsx)("label",{children:"Information:"}),Object(N.jsxs)("span",{className:"username",children:["Created by ",Object(N.jsx)("b",{children:e.displayname})]}),Object(N.jsx)("span",{className:"createdDate",children:Object(O.a)(e.createdAt)}),l&&e.username===l.user&&!ne&&Object(N.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",startIcon:Object(N.jsx)(A.a,{}),style:{width:"100%",backgroundColor:"#7B8B94",margin:"15px auto 5px"},classes:{label:"pin-button"},onClick:function(){return re(!0)},children:"DELETE PIN"}),l&&e.username===l.user&&ne&&null!==Z&&Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{className:"deleting-pin",children:"Are you sure you want to delete this pin?"}),Object(N.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",startIcon:Object(N.jsx)(D.a,{}),style:{width:"45%",backgroundColor:"#FF4848",margin:"15px auto 5px"},classes:{label:"pin-button"},onClick:function(){return function(e){return at.apply(this,arguments)}(e._id)},children:"YES"}),Object(N.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",startIcon:Object(N.jsx)(P.a,{}),style:{position:"absolute",right:"10px",width:"45%",backgroundColor:"#7B8B94",margin:"15px auto 5px"},classes:{label:"pin-button"},onClick:function(){return re(!1)},children:"NO"})]})]})})})})]},e._id)})),Oe&&X&&Object(N.jsx)(Y.a,{in:!0,children:Object(N.jsx)(b.c,{latitude:Oe.lat,longitude:Oe.long,offsetLeft:20,closeButton:!0,closeOnClick:!1,onClose:function(){return he(null)},anchor:"left",children:Object(N.jsx)("div",{children:Object(N.jsxs)("form",{onSubmit:function(e){return tt.apply(this,arguments)},children:[Object(N.jsx)("label",{children:"Place name"}),Object(N.jsx)("input",{ref:Xe,placeholder:"Enter a title...",onClick:function(){return Le(!1)},onChange:function(e){return me(e.target.value)}}),Be&&Object(N.jsx)(Y.a,{in:!0,children:Object(N.jsxs)("div",{className:"error",children:[Object(N.jsx)(_.a,{size:"small",style:{color:"#7B8B94"}}),Object(N.jsx)("p",{children:"Please enter a place name."})]})}),Object(N.jsx)("label",{children:"Review"}),Object(N.jsx)("textarea",{placeholder:"Tell us about this place...",onClick:function(){return Ue(!1)},onChange:function(e){return Ce(e.target.value)}}),De&&Object(N.jsx)(Y.a,{in:!0,children:Object(N.jsxs)("div",{className:"error",children:[Object(N.jsx)(_.a,{size:"small",style:{color:"#7B8B94"}}),Object(N.jsx)("p",{children:"Please enter a description."})]})}),Object(N.jsx)("label",{children:"Rating"}),Object(N.jsxs)("select",{onClick:function(){return Me(!1)},onChange:function(e){return Re(e.target.value)},children:[Object(N.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"Choose rating..."}),Object(N.jsx)("option",{value:"1",children:"1"}),Object(N.jsx)("option",{value:"2",children:"2"}),Object(N.jsx)("option",{value:"3",children:"3"}),Object(N.jsx)("option",{value:"4",children:"4"}),Object(N.jsx)("option",{value:"5",children:"5"})]}),Ae&&Object(N.jsx)(Y.a,{in:!0,children:Object(N.jsxs)("div",{className:"error",children:[Object(N.jsx)(_.a,{size:"small",style:{color:"#7B8B94"}}),Object(N.jsx)("p",{children:"Please enter a rating."})]})}),Object(N.jsx)(m.a,{type:"submit",variant:"contained",color:"secondary",size:"large",startIcon:Object(N.jsx)(E.a,{}),style:{width:"100%",backgroundColor:"#FF4848",margin:"15px auto 5px"},classes:{label:"pin-button"},onClick:et,children:"ADD PIN"})]})})})}),Object(N.jsx)(Y.a,{in:!!F,children:Object(N.jsx)("div",{className:"add-pin-text",children:Object(N.jsx)(W.a,{elevation:2,style:{position:"absolute",fontSize:"23px",top:"40px",left:"50%",transform:"translate(-50%, -50%)",color:"#FF4848",padding:"15px 30px",margin:"15px"},children:"You have too many pins! Users can only have 5 pins at a time."})})}),Object(N.jsx)(Y.a,{in:!(X||!l),children:Object(N.jsx)(G.a,{classes:{label:"add-pin-btn"},style:{backgroundColor:F?"#7B8B94":"#FF4848",position:"absolute",left:"20px",bottom:"55px"},size:"small",onClick:et,children:Object(N.jsx)(E.a,{})})}),Object(N.jsx)(Y.a,{in:!!X,children:Object(N.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",style:{backgroundColor:"#7B8B94",position:"absolute",left:"10px",bottom:"55px"},classes:{label:"pin-button"},onClick:function(){$(!1),he(null),H(Q)},children:"CANCEL"})}),Object(N.jsx)(Y.a,{in:!!(l&&t<=485),children:Object(N.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",style:{backgroundColor:"#7B8B94",position:"absolute",right:"10px",bottom:"55px"},classes:{label:"pin-button"},onClick:nt,children:"LOG OUT"})})]}))]})};var K=function(){return Object(N.jsx)("div",{children:Object(N.jsx)(q,{})})};c.a.render(Object(N.jsx)(K,{}),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.b16ef35f.chunk.js.map