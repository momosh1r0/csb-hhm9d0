(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)s=i[u],r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("64a9")},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"main"}},[a("sidebar-menu",{staticClass:"sidebar",attrs:{title:"asd",relative:"",menu:e.menu,theme:"white-theme",collapsed:e.collapsed},on:{"item-click":e.onItemClick,collapse:e.onCollapse}},[[a("span",{attrs:{slot:"dropdown-icon"},slot:"dropdown-icon"},[a("span",{staticClass:"fa fa-chevron-right"})]),a("span",{attrs:{slot:"toggle-icon"},slot:"toggle-icon"},[a("span",{staticClass:"fa fa-chevron-right"})])]],2),a("div",{attrs:{id:"view"}},[a("b-navbar",{attrs:{type:"dark",variant:"dark"}},[a("b-navbar-brand",{staticClass:"pl-5",attrs:{href:"#"}},[e._v("  GINKO")]),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{staticClass:"h5",attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[a("span",{staticClass:"fa fa-language",attrs:{title:"language"}})]},proxy:!0}])},[a("b-dropdown-item",{attrs:{href:"#"}},[a("country-flag",{attrs:{country:"us",size:"small"}}),e._v(" EN")],1),a("b-dropdown-item",{attrs:{href:"#"}},[a("country-flag",{attrs:{country:"es",size:"small"}}),e._v(" ES")],1),a("b-dropdown-item",{attrs:{href:"#"}},[a("country-flag",{attrs:{country:"jp",size:"small"}}),e._v(" JA")],1),a("b-dropdown-item",{attrs:{href:"#"}},[a("country-flag",{attrs:{country:"pt",size:"small"}}),e._v(" PT")],1)],1)],1)],1),a("router-view")],1)],1),a("footer")])},o=[];const s={data(){return{src:a("a1d8")}},template:'<img :src="src" width="200">'};var i={name:"App",data(){return{menu:[{header:!0,component:s,hiddenOnCollapse:!0},{header:!0,title:"GINKO",class:"left-menu-header",hiddenOnCollapse:!0},{header:!0,title:"CONTRACT PLATFORM",class:"left-menu-header-sub",hiddenOnCollapse:!0},{href:"/",title:"Home",icon:"fas fa-home"},{href:"/about-us",title:"About Us",icon:"fas fa-compass"},{href:"/contact-us",title:"Contact Us",icon:"fas fa-phone"},{header:!0,title:"Our Digital Services",hiddenOnCollapse:!0},{href:"/services",title:"Services",icon:"fas fa-briefcase",child:[{href:"/services/smartphones",title:"Smartphones"},{href:"/services/smarwatches-and-accesories",title:"Smartwatch and Accesories"}]},{href:"/shop",title:"Shop",icon:"fa fa-store",child:[{href:"/shop/smartphones",title:"Smartphones"},{href:"/shop/smarwatches-and-accesories",title:"Smartwatch and Accesories"}]},{href:"/pricing",title:"Pricing & Plans",icon:"fa fa-medal",child:[{href:"/membership/free-membership",title:"Free Membership"},{href:"/membership/starter-membership",title:"Starter Membership"},{href:"/membership/business-membership",title:"Business Membership"}]},{header:!0,title:"Account",hiddenOnCollapse:!0},{href:"/login",title:"Login",icon:"fa fa-sign-in",child:[{href:"/login/create-account",title:"Create Account"},{href:"/login/create-account",title:"Login Account"},{href:"/login/recovery-account",title:"Recovery Account"}]},{href:"/coins",title:"Coins",icon:"fa fa-diamond",disabled:!0},{href:"/digital-account",title:"Digital Account",icon:"fa fa-wallet",disabled:!0},{href:"/contracts",title:"Contracts",icon:"fa fa-file-circle-check",disabled:!0},{title:"Settings",icon:"fa fa-cog",badge:{text:"unsecure",class:"vsm--badge_default"},disabled:!0}],collapsed:!0}},methods:{onItemClick(e,t){console.log("onItemClick")},onCollapse(e){console.log("onCollapse"),console.log(e),this.collapsed=e}}},l=i,c=(a("034f"),a("2877")),f=Object(c["a"])(l,r,o,!1,null,null,null),u=f.exports,d=a("8c4f"),p=a("4776"),h=a.n(p),m=(a("b15b"),a("eea2")),b=a("5f5b"),g=a("b1e0");a("f9e3"),a("2dd8"),a("a589");n["default"].use(b["a"]),n["default"].use(g["a"]),n["default"].use(d["a"]),n["default"].use(h.a),n["default"].component("country-flag",m["a"]);const v={template:'\n  <div class="mt-4">\n    <h1>HOME</h1>\n  </div>\n'},y={template:"<div>basic-usage</div>"},w=new d["a"]({routes:[{path:"/",name:"Home",component:v},{path:"/basic-usage",name:"BasicUsage",component:y}]});n["default"].config.productionTip=!1,new n["default"]({router:w,render:e=>e(u)}).$mount("#app")},"64a9":function(e,t,a){},a1d8:function(e,t,a){e.exports=a.p+"img/logo.fb23a2ea.png"},a589:function(e,t,a){}});
//# sourceMappingURL=app.da237db8.js.map