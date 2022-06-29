(this["webpackJsonplucui-blog"]=this["webpackJsonplucui-blog"]||[]).push([[0],{15:function(t,e,c){},30:function(t,e,c){},49:function(t,e,c){},50:function(t,e,c){},51:function(t,e,c){"use strict";c.r(e);var n={};c.r(n),c.d(n,"TOGGLE_THEME",(function(){return x})),c.d(n,"GET_ALL_POST",(function(){return g})),c.d(n,"GET_POST_SUCCESS",(function(){return v})),c.d(n,"GET_POST_ERROR",(function(){return m})),c.d(n,"ADD_NEW_POST",(function(){return f}));var i={};c.r(i),c.d(i,"toggleTheme",(function(){return E}));var r=c(1),s=c.n(r),a=c(24),o=c.n(a),l=(c(15),c(3)),j=c(2),h=c(7),d=c(6),b=c(0),u=function(t){return Object(b.jsx)("svg",Object(d.a)(Object(d.a)({width:"24",height:"24","aria-hidden":"true"},t),{},{children:Object(b.jsx)("path",{d:"M18.925 4.075c4.1 4.1 4.1 10.75 0 14.85s-10.75 4.1-14.85 0-4.1-10.75 0-14.85 10.75-4.1 14.85 0zM17.51 17.51a8.5 8.5 0 000-12.02L5.49 17.51a8.5 8.5 0 0012.02 0z"})}))},O=Object(r.createContext)(),x="toggle_theme",g="get_all_post",v="get_post_success",m="get_post_error",f="add_new_post",p={isLightTheme:"light"===window.localStorage.getItem("theme"),light:{backgroundColor:"#fff",color:"#2d2d2d",textDecoration:"none",transition:"background-color .2s linear"},dark:{backgroundColor:"#2d2d2d",color:"#fff",textDecoration:"none",transition:"background-color .2s linear"}},w=function(t,e){switch(e.type){case x:return window.localStorage.setItem("theme",t.isLightTheme?"dark":"light"),Object(d.a)(Object(d.a)({},t),{},{isLightTheme:!t.isLightTheme});default:throw new Error("Invalid action")}},T=function(t){var e=t.children,c=Object(r.useReducer)(w,p),n=Object(l.a)(c,2),i=n[0],s=n[1];return Object(b.jsx)(O.Provider,{value:[i,s],children:e})},_=Object(r.createContext)(),k=function(){var t=Object(r.useContext)(O),e=Object(l.a)(t,2);return[e[0],e[1]]},L={loading:!1,error:null,posts:[]},S=function(t,e){switch(e.type){case n.GET_ALL_POST:return Object(d.a)(Object(d.a)({},t),{},{loading:!0,posts:[]});case n.GET_POST_SUCCESS:return console.log("Receiver post",e.payload),Object(d.a)(Object(d.a)({},t),{},{loading:!1,posts:e.payload});case n.GET_POST_ERROR:return Object(d.a)(Object(d.a)({},t),{},{loading:!1,posts:[],error:e.payload});default:throw new Error("Invalid action")}},y=function(t){var e=t.children,c=Object(r.useReducer)(S,L),n=Object(l.a)(c,2),i=n[0],s=n[1];return Object(b.jsx)(_.Provider,{value:[i,s],children:e})},E=function(t){return{type:n.TOGGLE_THEME,payload:t}},N=(c(30),function(){var t=k(),e=Object(l.a)(t,2),c=e[0],n=e[1];return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"luccui."})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(h.b,{to:"/",style:c.isLightTheme?c.light:c.dark,children:"Trang ch\u1ee7"}),Object(b.jsx)(h.b,{to:"/about",style:c.isLightTheme?c.light:c.dark,children:"Gi\u1edbi thi\u1ec7u"}),Object(b.jsx)("button",{onClick:function(t){return n(i.toggleTheme())},children:Object(b.jsx)(u,{fill:c.isLightTheme?c.light.color:c.dark.color})})]})]})})}),C=c(13),P=c.n(C),G=c(9),M=Object(G.a)(Array(12).keys()).map((function(t){return"Th\xe1ng ".concat(t)})),R=function(t){var e=new Date(t),c=e.getDay(),n=e.getMonth(),i=e.getFullYear();return"".concat(c,", ").concat(M[n],", ").concat(i)},A=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,c=t.split(" ");return c.length<e?[].concat(Object(G.a)(c.join(" ")),["..."]):[].concat(Object(G.a)(c.filter((function(t,c){return c<e?t:""})).join(" ")),[" ..."])},D=(c(49),function(t){var e=k(),c=Object(l.a)(e,2),i=c[0],s=(c[1],i.isLightTheme),a=i.light,o=i.dark,j=function(){var t=Object(r.useContext)(_),e=Object(l.a)(t,2);return[e[0],e[1]]}(),d=Object(l.a)(j,2),u=d[0],O=d[1],x=u.posts,g=u.error;u.loading;return Object(r.useEffect)((function(){var t;O({type:n.GET_ALL_POST,payload:null}),(t="/posts",new Promise((function(e,c){P.a.get(t).then((function(t){e(t.data)})).catch((function(t){c(t)}))}))).then((function(t){O(function(t){return{type:n.GET_POST_SUCCESS,payload:t}}(t))}))}),[O]),Object(b.jsxs)("div",{className:"post",children:[Object(b.jsx)("h2",{className:"post-header",children:"Post"}),Object(b.jsx)("ul",{className:"post-list",children:!g&&x.map((function(t){return Object(b.jsxs)("li",{className:"post-item",children:[Object(b.jsx)("div",{className:"post-date",children:R(t.createdAt)}),Object(b.jsxs)("div",{className:"post-content",children:[Object(b.jsx)("h4",{className:"post-title",children:t.title}),Object(b.jsx)(h.b,{to:t.id,style:s?a:o,children:Object(b.jsx)("p",{children:A(t.content,30)})})]})]},t.id)}))})]})}),F=function(){return Object(b.jsx)(D,{})},z=(c(50),function(){var t=k(),e=Object(l.a)(t,2),c=e[0],n=(e[1],c.isLightTheme),i=c.light,r=c.dark;return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{fill:n?i.color:r.color},children:Object(b.jsx)("path",{d:"M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"})})});var B=function(){var t=k(),e=Object(l.a)(t,2),c=e[0],n=(e[1],c.isLightTheme),i=c.light,r=c.dark;return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{fill:n?i.color:r.color},children:Object(b.jsx)("path",{d:"M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 005.001-1.721 4.036 4.036 0 01-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 01-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 01-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 008.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 014.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 002.556-.973 4.02 4.02 0 01-1.771 2.22 8.073 8.073 0 002.319-.624 8.645 8.645 0 01-2.019 2.083z"})})};var H=function(){var t=k(),e=Object(l.a)(t,2),c=e[0],n=(e[1],c.isLightTheme),i=c.light,r=c.dark;return Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{fill:n?i.color:r.color},fill:"rgba(0, 0, 0, 1)",children:[Object(b.jsx)("path",{d:"M20.947 8.305a6.53 6.53 0 00-.419-2.216 4.61 4.61 0 00-2.633-2.633 6.606 6.606 0 00-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 00-2.185.42 4.607 4.607 0 00-2.633 2.633 6.554 6.554 0 00-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 002.634 2.632 6.584 6.584 0 002.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 002.186-.419 4.615 4.615 0 002.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 010 9.246zm4.807-8.339a1.077 1.077 0 01-1.078-1.078 1.077 1.077 0 112.155 0c0 .596-.482 1.078-1.077 1.078z"}),Object(b.jsx)("circle",{cx:"11.994",cy:"11.979",r:"3.003"})]})};var I=function(){var t=k(),e=Object(l.a)(t,2),c=e[0],n=(e[1],c.isLightTheme),i=c.light,r=c.dark;return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{fill:n?i.color:r.color},children:Object(b.jsx)("path",{fillRule:"evenodd",d:"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z",clipRule:"evenodd"})})},V=function(){return Object(b.jsxs)("div",{className:"about",children:[Object(b.jsx)("h2",{children:"About Me"}),Object(b.jsxs)("div",{className:"about-content",children:[Object(b.jsxs)("div",{className:"about-avatar",children:[Object(b.jsx)("img",{src:"./images/user.png",alt:"Luc cui"}),Object(b.jsx)("div",{className:"sticker sticker1"}),Object(b.jsx)("div",{className:"dots",children:Object(G.a)(Array(16).keys()).map((function(t){return Object(b.jsx)("div",{})}))}),Object(b.jsx)("div",{className:"sticker sticker2"}),Object(b.jsxs)("div",{className:"ripple",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})]}),Object(b.jsx)("div",{className:"sticker sticker3"})]}),Object(b.jsxs)("div",{className:"about-description",children:[Object(b.jsx)("h3",{style:{color:"#fff"},children:"H\u1ebf l\xf4 m\xecnh l\xe0 Minh L\u1ef1c"}),Object(b.jsx)("p",{children:"M\xecnh \u0111ang l\xe0 sinh vi\xean n\u0103m 3 tr\u01b0\u1eddng \u0110\u1ea1i H\u1ecdc Tr\xe0 Vinh, ng\xe0nh c\u1ee7a m\xecnh h\u1ecdc l\xe0 CNTT. \u0110\u1ecbnh h\u01b0\u1edbng trong t\u01b0\u01a1ng lai c\u1ee7a m\xecnh l\xe0 m\u1ed9t Fullstack Developer.V\u1ec1 ph\xeda FrontEnd th\xec m\xecnh c\xf3 ki\u1ebfn th\u1ee9c v\u1ec1 HTML, CSS, JS, Bootstrap, TailwindCSS, React, Vue. C\xf2n ph\u1ea7n BackEnd hi\u1ec7n t\u1ea1i m\xecnh \u0111ang l\xe0m vi\u1ec7c v\u1edbi PHP Laravel Framework, m\xecnh c\u0169ng c\xf3 th\u1ec3 code v\u1edbi l\u1ea1i NodeJS. M\xecnh c\u0169ng c\xf3 bi\u1ebft v\u1ec1 Docker v\xe0 Linux, qu\u1ea3n l\xfd m\xe3 ngu\u1ed3n b\u1eb1ng Git, Github."}),Object(b.jsxs)("div",{className:"about-social",children:[Object(b.jsx)("a",{href:"https://www.facebook.com/luccui2301/",children:Object(b.jsx)(z,{})}),Object(b.jsx)("a",{href:"https://github.com/luccui000",children:Object(b.jsx)(I,{})}),Object(b.jsx)("a",{href:"https://twitter.com/luc_cui",children:Object(b.jsx)(B,{})}),Object(b.jsx)("a",{href:"https://www.instagram.com/luccui_____/",children:Object(b.jsx)(H,{})})]})]})]})]})},J=function(){return Object(b.jsx)("h1",{children:"Not Found"})};var U=function(){var t=k(),e=Object(l.a)(t,1)[0];return Object(b.jsxs)("div",{className:"wrapper",style:e.isLightTheme?e.light:e.dark,children:[Object(b.jsx)(N,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",element:Object(b.jsx)(F,{})}),";",Object(b.jsx)(j.a,{path:"about",element:Object(b.jsx)(V,{})}),";",Object(b.jsx)(j.a,{path:"*",element:Object(b.jsx)(J,{})})]})})]})},q=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;c(t),n(t),i(t),r(t),s(t)}))};P.a.defaults.baseURL="http://localhost:8002",o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h.a,{children:Object(b.jsx)(T,{children:Object(b.jsx)(y,{children:Object(b.jsx)(U,{})})})})}),document.getElementById("root")),q()}},[[51,1,2]]]);
//# sourceMappingURL=main.c5427945.chunk.js.map