(this["webpackJsonpgym-project"]=this["webpackJsonpgym-project"]||[]).push([[6],{197:function(e,a,t){"use strict";var n=t(66),r=t(1),l=t.n(r);t(200);a.a=function(e){var a=e.handleChange,t=e.label,r=e.type,s=Object(n.a)(e,["handleChange","label","type"]);return l.a.createElement("div",{className:"group"},l.a.createElement("input",Object.assign({onChange:a},s,{className:"form-input",type:r,required:!0})),t?l.a.createElement("label",{className:"".concat(s.value.length?"shrink":""," form-input-label")},t):null)}},200:function(e,a,t){},208:function(e,a,t){},209:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.googlePlus=void 0;a.googlePlus={viewBox:"0 0 16 16",children:[{name:"path",attribs:{fill:"#000000",d:"M5.091 7.147v1.747h2.888c-0.116 0.75-0.872 2.197-2.888 2.197-1.737 0-3.156-1.441-3.156-3.216s1.419-3.216 3.156-3.216c0.991 0 1.65 0.422 2.028 0.784l1.381-1.331c-0.888-0.828-2.037-1.331-3.409-1.331-2.816 0.003-5.091 2.278-5.091 5.094s2.275 5.091 5.091 5.091c2.937 0 4.888-2.066 4.888-4.975 0-0.334-0.037-0.591-0.081-0.844h-4.806z"}},{name:"path",attribs:{fill:"#000000",d:"M16 7h-1.5v-1.5h-1.5v1.5h-1.5v1.5h1.5v1.5h1.5v-1.5h1.5z"}}]}},210:function(e,a,t){},211:function(e,a,t){},251:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=(t(208),t(42)),s=t(3),i=t.n(s),c=t(7),u=t(49),o=t(50),m=t(52),h=t(51),p=t(8),d=t(24),b=t(209),g=t(41),f=(t(210),t(197)),v=t(33),E=t(26),O=t(6),j=t(14),S=t(94),C=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:""},e.handleSubmit=function(){var a=Object(c.a)(i.a.mark((function a(t){var n,r,l;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),n=e.state,r=n.email,l=n.password,(0,e.props.userLoginStart)({memberAccount:r,memberPwd:l});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(l.a)({},n,r))},e.handleIsValid=function(){},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,a=e.userSignInUnVaild,t=e.history,n=e.userLoginRestart;return console.log("history",t),r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",{className:"sign-in-title"},"\u6703\u54e1\u767b\u5165"),r.a.createElement("span",null,"\u8f38\u5165\u5e33\u865f & \u5bc6\u78bc\u767b\u5165"),r.a.createElement("form",null,r.a.createElement(f.a,{name:"email",value:this.state.email,onChange:this.handleChange,label:"Email",type:"email",required:!0}),r.a.createElement(f.a,{name:"password",value:this.state.password,onChange:this.handleChange,label:"Password",type:"Password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(v.a,{type:"submit",onClick:this.handleSubmit},"\u767b\u5165"),r.a.createElement(v.a,{type:"button",google:!0},r.a.createElement("a",{href:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL,"/api/user/google"),className:"google-sign-link"},r.a.createElement(g.Icon,{icon:b.googlePlus,size:30}),r.a.createElement("span",null,"Google")," \u767b\u5165")))),null!==a&&r.a.createElement("div",{className:"unValid-backdrop",onClick:function(){return n()}}),r.a.createElement(S.a,{unValid:null!==a&&a,returnHome:!1},"\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4\u5594\uff01"),r.a.createElement(S.a,{unValid:null!==a&&!a,returnHome:function(){return t.goBack()}},"\u767b\u5165\u6210\u529f\uff01"))}}]),t}(r.a.Component),y=Object(O.b)({userList:j.b,userSignInUnVaild:j.d}),w=Object(d.h)(Object(p.b)(y,(function(e){return{userLoginStart:function(a){return e(Object(E.g)(a))},userLoginRestart:function(){return e(Object(E.f)())}}}))(C)),N=(t(211),function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",name:"",mobile:""},e.handleSubmit=function(a){a.preventDefault(),(0,e.props.userSignUpStart)({memberAccount:e.state.email,memberPwd:e.state.password,memberName:e.state.name})},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(l.a)({},n,r))},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,a=e.history,t=e.userSignUpUnVaild,n=e.userSignUpRestart;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"sign-up-title"},"\u6703\u54e1\u8a3b\u518a"),r.a.createElement("span",null,"\u8f38\u5165\u5e33\u865f&\u5bc6\u78bc&\u57fa\u672c\u8a0a\u606f\u8a3b\u518a"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(f.a,{name:"email",value:this.state.email,onChange:this.handleChange,label:"Email",type:"email"}),r.a.createElement(f.a,{name:"password",value:this.state.password,onChange:this.handleChange,label:"Password",type:"Password"}),r.a.createElement(f.a,{name:"name",value:this.state.name,onChange:this.handleChange,label:"name"}),r.a.createElement("div",{className:"buttons"},r.a.createElement(v.a,{type:"submit"},"\u8a3b\u518a"))),null!==t&&r.a.createElement("div",{className:"unValid-backdrop",onClick:n}),r.a.createElement(S.a,{unValid:null!==t&&t,returnHome:!1,signUp:!0},"\u6b64\u5e33\u865f\u5df2\u88ab\u8a3b\u518a\u645f\uff01"),r.a.createElement(S.a,{unValid:null!==t&&!t,returnHome:function(){return a.push("/")},signUp:!0},"\u8a3b\u518a\u6210\u529f !"))}}]),t}(r.a.Component)),U=Object(O.b)({userList:j.b,currentUser:j.a,userSignUpUnVaild:j.e}),P=Object(d.h)(Object(p.b)(U,(function(e){return{userListStart:function(){return e(Object(E.c)())},userSignUpRestart:function(){return e(Object(E.m)())},userSignUpStart:function(a){return e(Object(E.n)(a))}}}))(N));t(65),a.default=function(){return r.a.createElement("div",{className:"sign-in-and-sign-out"},r.a.createElement(w,null),r.a.createElement(P,null))}}}]);
//# sourceMappingURL=6.7f24dded.chunk.js.map