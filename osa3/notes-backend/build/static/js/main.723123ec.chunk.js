(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){t.exports=n(39)},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),u=n(12),c=n(2),l=n(3),m=n.n(l),f=function(){return m.a.get("/api/notes").then(function(t){return t.data})},p=function(t){return m.a.post("/api/notes",t).then(function(t){return t.data})},s=function(t,e){return m.a.put("".concat("/api/notes","/").concat(t),e).then(function(t){return t.data})},d=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},b=function(t){var e=t.message,n=t.type;return null===e?null:r.a.createElement("div",{className:n},e)},E=function(){return r.a.createElement("div",{style:{margin:0,padding:0,width:"100%",borderTop:"1px solid green",background:"white",position:"fixed",bottom:0,color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science 2019"))},g=function(){var t=Object(a.useState)([]),e=Object(c.a)(t,2),n=e[0],o=e[1],i=Object(a.useState)(""),l=Object(c.a)(i,2),m=l[0],g=l[1],v=Object(a.useState)(!0),h=Object(c.a)(v,2),k=h[0],j=h[1],O=Object(a.useState)(null),S=Object(c.a)(O,2),w=S[0],y=S[1];Object(a.useEffect)(function(){f().then(function(t){return o(t)})},[]);var C=k?n:n.filter(function(t){return t.important});return r.a.createElement("div",null,r.a.createElement("h1",null,"Muistiinpanot"),r.a.createElement(b,{message:w,type:"error"}),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:m,date:(new Date).toISOString,important:Math.random()>.5};p(e).then(function(t){o(n.concat(t)),g("")})}},r.a.createElement("input",{placeholder:"uusi muistiinpano...",value:m,onChange:function(t){g(t.target.value)}}),r.a.createElement("button",{type:"submit"},"tallenna")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return j(!k)}},"n\xe4yta ",k?"vain t\xe4rke\xe4t":"kaikki")),r.a.createElement("ul",null,C.map(function(t){return r.a.createElement(d,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=n.find(function(e){return e.id===t}),a=Object(u.a)({},e,{important:!e.important});s(t,a).then(function(e){return o(n.map(function(n){return n.id!==t?n:e}))}).catch(function(a){y("muistiinpano '".concat(e.content,"' on jo poistettu")),setTimeout(function(){y(null)},5e3),o(n.filter(function(e){return e.id!==t}))})}(t.id)}})})),r.a.createElement(E,null))};n(38);i.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.723123ec.chunk.js.map