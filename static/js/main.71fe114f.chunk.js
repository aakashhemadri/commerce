(this.webpackJsonpcommerce=this.webpackJsonpcommerce||[]).push([[0],{55:function(e,n,t){},56:function(e,n,t){},80:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(14),a=t.n(r),i=(t(55),t(43)),o=t(44),s=t(50),j=t(48),l=(t.p,t(56),t(49)),d=(t(28),t(81)),h=t(82),u=t(83),b=t(84),O=t(85),f=t(86),x=t(87),v=t(97),m=t(98),g=t(99),p=t(88),w=t(89),k=t(4),C=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),r=t[0],a=t[1];return Object(k.jsx)("div",{children:Object(k.jsxs)(d.a,{color:"light",light:!0,expand:"md",children:[Object(k.jsx)(h.a,{href:"/",children:"Walmart"}),Object(k.jsx)(u.a,{onClick:function(){return a(!r)}}),Object(k.jsxs)(b.a,{isOpen:r,navbar:!0,children:[Object(k.jsxs)(O.a,{className:"mr-auto",navbar:!0,children:[Object(k.jsx)(f.a,{children:Object(k.jsx)(x.a,{href:"/account/",children:"Account"})}),Object(k.jsxs)(v.a,{nav:!0,inNavbar:!0,children:[Object(k.jsx)(m.a,{nav:!0,caret:!0,children:"Cart"}),Object(k.jsxs)(g.a,{right:!0,children:[Object(k.jsx)(p.a,{children:"Product 1"}),Object(k.jsx)(p.a,{children:"Product 2"}),Object(k.jsx)(p.a,{divider:!0}),Object(k.jsx)(p.a,{children:"Clear Cart"})]})]})]}),Object(k.jsx)(w.a,{children:"Username"})]})]})})},y=t(90),N=t(91),W=t(92),A=t(93),B=t(94),D=t(95),E=t(45),L=function(e){return Object(k.jsx)("div",{children:Object(k.jsxs)(y.a,{children:[Object(k.jsx)(N.a,{top:!0,width:"100%",src:"/assets/318x180.svg",alt:"Card image cap"}),Object(k.jsxs)(W.a,{children:[Object(k.jsx)(A.a,{tag:"h5",children:"Dell Laptop"}),Object(k.jsx)(B.a,{tag:"h6",className:"mb-2 text-muted",children:"999.49$"}),Object(k.jsx)(D.a,{children:"Dell 16 inch laptop with core i5 and 8GB RAM"}),Object(k.jsx)(E.a,{children:"Buy"})]})]})})},J=t(96),M=function(e){Object(s.a)(t,e);var n=Object(j.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).state={message:""},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/message").then((function(e){return e.json()})).then((function(n){return e.setState({message:n})}))}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(C,{}),Object(k.jsx)("div",{children:Object(k.jsxs)(J.a,{children:[Object(k.jsx)(L,{}),Object(k.jsx)(L,{}),Object(k.jsx)(L,{}),Object(k.jsx)(L,{}),Object(k.jsx)(L,{})]})})]})}}]),t}(c.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(k.jsx)(M,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/commerce",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/commerce","/service-worker.js");P?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):R(e)}))}}()}},[[80,1,2]]]);
//# sourceMappingURL=main.71fe114f.chunk.js.map