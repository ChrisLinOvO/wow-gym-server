(this["webpackJsonpgym-project"]=this["webpackJsonpgym-project"]||[]).push([[8],{197:function(e,a,t){"use strict";var n=t(66),r=t(1),l=t.n(r);t(200);a.a=function(e){var a=e.handleChange,t=e.label,r=e.type,c=Object(n.a)(e,["handleChange","label","type"]);return l.a.createElement("div",{className:"group"},l.a.createElement("input",Object.assign({onChange:a},c,{className:"form-input",type:r,required:!0})),t?l.a.createElement("label",{className:"".concat(c.value.length?"shrink":""," form-input-label")},t):null)}},200:function(e,a,t){},247:function(e,a,t){},248:function(e,a,t){},255:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(42),c=t(3),s=t.n(c),i=t(7),o=t(49),u=t(50),m=t(52),p=t(51),h=t(8),d=t(24),b=t(6),f=t(197),g=t(33),v=t(39),E=t(64),y=(t(247),function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:""},e.handleSubmit=function(){var a=Object(i.a)(s.a.mark((function a(t){var n,r,l,c,i,o,u,m;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),n=e.state,r=n.email,l=n.password,c=e.props,i=c.employeeList,o=c.employeeLogin,u=c.history,m=i.find((function(e){return e.Eemail===r&&e.Epwd===l})),console.log(m),m?(o(m),u.push("/employeecenter/".concat(m.Eid))):alert("Wrong email or password!");case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(l.a)({},n,r))},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",{className:"title-login"},"\u6559\u7df4\u54e1\u5de5\u5e33\u865f\u767b\u5165"),r.a.createElement("span",null,"\u8f38\u5165\u5e33\u865f & \u5bc6\u78bc\u767b\u5165"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(f.a,{name:"email",value:this.state.email,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(f.a,{name:"password",value:this.state.password,onChange:this.handleChange,label:"Password",type:"password",required:!0}),r.a.createElement("div",{className:"buttons-login"},r.a.createElement(g.a,{type:"submit"},"\u767b\u5165"))))}}]),t}(r.a.Component)),j=Object(b.b)({employeeList:E.b}),w=Object(d.h)(Object(h.b)(j,(function(e){return{employeeLogin:function(a){return e(Object(v.d)(a))}}}))(y));t(248),a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Employee-sign-in-and-sign-out"},r.a.createElement(w,null)))}}}]);
//# sourceMappingURL=8.b7cd25da.chunk.js.map