(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){t.exports=n(39)},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(11),u=n.n(o),c=n(12),i=n(2),l=n(3),m=n.n(l),f="https://young-woodland-58992.herokuapp.com/notes",p=function(){return m.a.get(f).then(function(t){return t.data})},s=function(t){return m.a.post(f,t).then(function(t){return t.data})},d=function(t,e){return m.a.put("".concat(f,"/").concat(t),e).then(function(t){return t.data})},b=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},E=function(t){var e=t.message,n=t.type;return null===e?null:r.a.createElement("div",{className:n},e)},g=function(){return r.a.createElement("div",{style:{margin:0,padding:0,width:"100%",borderTop:"1px solid green",background:"white",position:"fixed",bottom:0,color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science 2019"))},h=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),m=l[0],f=l[1],h=Object(a.useState)(!0),v=Object(i.a)(h,2),k=v[0],j=v[1],O=Object(a.useState)(null),w=Object(i.a)(O,2),S=w[0],y=w[1];Object(a.useEffect)(function(){p().then(function(t){return o(t)})},[]);var C=k?n:n.filter(function(t){return t.important});return r.a.createElement("div",null,r.a.createElement("h1",null,"Muistiinpanot"),r.a.createElement(E,{message:S,type:"error"}),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:m,date:(new Date).toISOString,important:Math.random()>.5};s(e).then(function(t){o(n.concat(t)),f("")})}},r.a.createElement("input",{placeholder:"uusi muistiinpano...",value:m,onChange:function(t){f(t.target.value)}}),r.a.createElement("button",{type:"submit"},"tallenna")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return j(!k)}},"n\xe4yta ",k?"vain t\xe4rke\xe4t":"kaikki")),r.a.createElement("ul",null,C.map(function(t){return r.a.createElement(b,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=n.find(function(e){return e.id===t}),a=Object(c.a)({},e,{important:!e.important});d(t,a).then(function(e){return o(n.map(function(n){return n.id!==t?n:e}))}).catch(function(a){y("muistiinpano '".concat(e.content,"' on jo poistettu")),setTimeout(function(){y(null)},5e3),o(n.filter(function(e){return e.id!==t}))})}(t.id)}})})),r.a.createElement(g,null))};n(38);u.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.bc1d0f09.chunk.js.map