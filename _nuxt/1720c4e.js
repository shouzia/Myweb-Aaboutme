(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{297:function(t,e,r){var content=r(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(123).default)("ffba2640",content,!0,{sourceMap:!1})},298:function(t,e,r){var content=r(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(123).default)("eb2ea100",content,!0,{sourceMap:!1})},299:function(t,e,r){t.exports=r.p+"img/Avatar.b962183.jpg"},300:function(t,e,r){"use strict";r(297)},301:function(t,e,r){var n=r(122)(!1);n.push([t.i,".Avatar-Style img{border-radius:100%}.Avatar-animation{-webkit-animation:Avatar-rotate 2s linear;animation:Avatar-rotate 2s linear}.Img-W{width:190px}@-webkit-keyframes Avatar-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes Avatar-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media screen and (max-width:800px){.Img-W{width:150px}}",""]),t.exports=n},302:function(t,e,r){"use strict";r(298)},303:function(t,e,r){var n=r(122)(!1);n.push([t.i,".Big-Img-Box,.img-fluid{height:100vh}.img-fluid{-o-object-fit:cover;object-fit:cover;-o-object-position:60% 5%;object-position:60% 5%;transform:scale(1.2);-webkit-animation:ImgMove 6s infinite;animation:ImgMove 6s infinite}.img-fluid,.w-100{width:100vw}@-webkit-keyframes ImgMove{form{transform:scale(1.2) translateX(0)}to{transform:scale(1.2) translateX(-5%)}}@keyframes ImgMove{form{transform:scale(1.2) translateX(0)}to{transform:scale(1.2) translateX(-5%)}}",""]),t.exports=n},304:function(t,e,r){var content=r(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(123).default)("1b7833da",content,!0,{sourceMap:!1})},307:function(t,e,r){"use strict";r.r(e);r(56);var n={methods:{hoverHandler:function(t){var e=this;t?(this.$refs.Avatar.className="Avatar-animation Img-W",console.log()):"Img-W"!=this.$refs.Avatar.className?setTimeout((function(){e.$refs.Avatar.className="Img-W"}),2e3):this.$refs.Avatar.className="Img-W"}}},o=(r(300),r(88)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Avatar-Main"},[n("div",{directives:[{name:"b-hover",rawName:"v-b-hover",value:t.hoverHandler,expression:"hoverHandler"}],staticClass:"Avatar-Style"},[n("img",{ref:"Avatar",staticClass:"Img-W",attrs:{src:r(299),alt:""}})])])}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,r){"use strict";r.r(e);var n={name:"Background",data:function(){return{ImgList:[{imgScr:"https://tva1.sinaimg.cn/large/008f3Z8zgy1gyeo72ghydj31hc0u0wyp.jpg"},{imgScr:"https://tva1.sinaimg.cn/large/008f3Z8zgy1gyeob6ro2oj31wv13o4ah.jpg"},{imgScr:"https://tva1.sinaimg.cn/large/008f3Z8zgy1gyenz0u46cj32pg1ca4qp.jpg"},{imgScr:"https://tva1.sinaimg.cn/large/008f3Z8zgy1gyenljcycuj31hc0u0du5.jpg"},{imgScr:"https://tva1.sinaimg.cn/large/008f3Z8zgy1gyenlk15cjj33341y4b29.jpg"},{imgScr:"https://tva1.sinaimg.cn/large/008f3Z8zgy1gyenljowtpj33341sw1kx.jpg"}]}}},o=(r(302),r(88)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Bg-Main"},[r("div",[r("b-carousel",{staticClass:"Big-Img-Box",staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:""}},t._l(t.ImgList,(function(t){return r("b-carousel-slide",{key:t.imgScr,staticClass:"Big-Img-Box",staticStyle:{width:"100vw"},attrs:{"img-src":t.imgScr}})})),1)],1)])}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,r){"use strict";r(304)},310:function(t,e,r){var n=r(122)(!1);n.push([t.i,".Bg-index{z-index:-1;position:fixed;top:0;left:0}.Content{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100vw;height:100vh;z-index:1;background-color:rgba(0,0,0,.35)}",""]),t.exports=n},315:function(t,e,r){"use strict";r.r(e);var n={name:"IndexPage"},o=(r(309),r(88)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Index"},[r("div",{staticClass:"Content"},[r("Avatar"),t._v(" "),r("Name-Title"),t._v(" "),r("My-Link")],1),t._v(" "),r("Background",{staticClass:"Bg-index"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Avatar:r(307).default,Background:r(308).default})}}]);