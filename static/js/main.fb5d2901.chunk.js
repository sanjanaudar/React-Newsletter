(this.webpackJsonpnewsletter=this.webpackJsonpnewsletter||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),r=n.n(a),s=n(14),o=n.n(s),i=(n(64),n(65),n(51)),l=n(6),j=n(34),u=n.n(j),b=n(47),h=n(32),m=n(35),d=n.n(m),p=n(110),O=n(112),x=n(113),v=n(8);var f=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),o=Object(h.a)(s,2),i=o[0],l=o[1],j=Object(v.a)({root:{background:"linear-gradient(45deg, #e5e4cc 20%, #f65c78 70%)",marginTop:"5px"}})(p.a),m=Object(a.useState)({name:"",email:""}),f=Object(h.a)(m,2),g=f[0],w=f[1],y=function(e){var t=e.target,n=t.name,c=t.value;w((function(e){return"name"===n?{name:c,email:e.email}:"email"===n?{name:e.name,email:c}:void 0}))},N=function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(g),d.a.post("https://react-newsletter.herokuapp.com/",g).then(console.log("New Client")).catch((function(e){return console.log("There is an error "+e)})),r(!0),d.a.get("https://react-newsletter.herokuapp.com/").then((function(e){console.log(e.status),200===e.status?l(!0):l(!1)})).catch((function(e){console.log("There is an error "+e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"peeker",children:[Object(c.jsx)("div",{className:"eye one"}),Object(c.jsx)("div",{className:"eye two"})]}),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Subscribe to our Newsletter"}),Object(c.jsxs)("form",{method:"POST",className:"container",children:[Object(c.jsx)("input",{className:"entry top",type:"text",name:"name",placeholder:"Your Name",onChange:y,autoFocus:!0}),Object(c.jsx)("input",{className:"entry bottom",type:"email",name:"email",placeholder:"Your Email",onChange:y}),Object(c.jsx)(j,{variant:"extended",onClick:N,children:"Submit"}),Object(c.jsx)(O.a,{open:n,children:i?Object(c.jsx)(x.a,{severity:"success",children:"You are now subscribed to my Awesome Newsletter! "}):Object(c.jsx)(x.a,{severity:"error",children:" Ooops, something went wrong! "})})]})]})]})};var g=function(){return Object(c.jsx)("div",{children:"Fail"})};var w=function(){return Object(c.jsx)("div",{children:"Success"})};var y=function(){return Object(c.jsx)(i.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(c.jsx)(l.a,{path:"/success",exact:!0,component:w}),Object(c.jsx)(l.a,{path:"/fail",exact:!0,component:g}),Object(c.jsx)(l.a,{path:"/",render:function(){return Object(c.jsx)("div",{children:"404"})}})]})})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.fb5d2901.chunk.js.map