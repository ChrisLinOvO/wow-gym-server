(this["webpackJsonpgym-project"]=this["webpackJsonpgym-project"]||[]).push([[4],{196:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return m}));var c=n(6),r=function(e){return e.shop},a=Object(c.a)([r],(function(e){return e.shopUrl})),i=Object(c.a)([r],(function(e){return e.isFetching})),o=Object(c.a)([r],(function(e){return e.collections})),l=Object(c.a)([r],(function(e){return e.shopItemDetail})),u=Object(c.a)([r],(function(e){return e.filterTag})),s=Object(c.a)([r],(function(e){return e.filterPriceTag})),m=Object(c.a)([r],(function(e){return e.shopPageCollections}))},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var c=n(1),r=n.n(c),a=function(e){var t=e.onClick;return r.a.createElement("button",{onClick:t,className:"next-arrow"},"\u276f")},i=function(e){var t=e.onClick;return r.a.createElement("button",{onClick:t,className:"prev-arrow"},"\u276e")}},205:function(e,t,n){"use strict";var c=n(2),r=n(1),a=n.n(r),i=n(8),o=n(6),l=n(41),u=n(67),s=n(206),m=n(18),f=n(22),d=Object(o.b)({cartFavoriteItems:m.e});t.a=Object(i.b)(d,(function(e){return{likeCartItem:function(t){return e(Object(f.g)(t))},unlikeCartItem:function(t){return e(Object(f.j)(t))}}}))((function(e){var t=e.item,n=e.likeCartItem,i=e.unlikeCartItem,o=e.cartFavoriteItems,m=Object(r.useState)(!1),f=Object(c.a)(m,2),d=f[0],b=f[1];Object(r.useEffect)((function(){o&&b(!!o[t.itemId])}),[o,t.itemId]);return a.a.createElement(a.a.Fragment,null,d?a.a.createElement("div",{style:{color:"rgb(216, 71, 173)",cursor:"pointer"},onClick:function(){i(t),b(!1)}},a.a.createElement(l.Icon,{icon:u.ic_favorite,size:24})):a.a.createElement("div",{style:{color:"rgb(216, 71, 173)",cursor:"pointer"},onClick:function(){n(t),b(!0)}},a.a.createElement(l.Icon,{icon:s.ic_favorite_border,size:24})))}))},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ic_favorite_border=void 0;t.ic_favorite_border={viewBox:"0 0 24 24",children:[{name:"path",attribs:{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}}]}},228:function(e,t,n){},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ic_arrow_drop_down=void 0;t.ic_arrow_drop_down={viewBox:"0 0 24 24",children:[{name:"path",attribs:{d:"M7 10l5 5 5-5z"}}]}},230:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),i=n(6),o=n(24),l=n(27),u=n(201),s=n.n(u),m=(n(202),n(203),n(228),n(33)),f=n(204),d=n(22),b=n(205),p=Object(o.h)(Object(a.b)(null,(function(e){return{addItemToCart:function(t){return e(Object(d.d)(t))}}}))((function(e){var t=e.addItemToCart,n=e.history,c=e.item,a={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,prevArrow:r.a.createElement(f.b,null),nextArrow:r.a.createElement(f.a,null)},i=Object(o.g)().collection,l=c.itemId,u=c.name,d=c.img1,p=c.img2,h=c.img3,E=c.price,v=c.flavor;return r.a.createElement("div",{className:"shop-item"},r.a.createElement(s.a,a,r.a.createElement("div",null,r.a.createElement("img",{className:"shop-item-slider-img",src:d,alt:"",onClick:function(){n.push("/shopitem/".concat(i,"/").concat(l))}})),r.a.createElement("div",null,r.a.createElement("img",{className:"shop-item-slider-img",src:p,alt:"",onClick:function(){n.push("/shopitem/".concat(i,"/").concat(l))}})),r.a.createElement("div",null,r.a.createElement("img",{className:"shop-item-slider-img",src:h,alt:"",onClick:function(){n.push("/shopitem/".concat(i,"/").concat(l))}}))),r.a.createElement("div",{className:"shop-item-info"},r.a.createElement("p",null,u),r.a.createElement("span",null,"(",v,")"),r.a.createElement("div",{className:"shop-fav-container"},r.a.createElement(b.a,{item:c})),r.a.createElement("p",{className:"shop-item-price"},"$",E),r.a.createElement(m.a,{onClick:function(){t(c)}},"\u52a0\u5165\u8cfc\u7269\u8eca")))}))),h=n(196),E=n(29),v=n(66),j=n(2),g=n(41),O=n(229),k=(n(230),Object(i.b)({filterTag:h.c,filterPriceTag:h.b})),C=Object(a.b)(k,(function(e){return{shopFetchStart:function(t,n){return e(Object(E.b)(t,n))},shopFilterPrice:function(t){return e(Object(E.d)(t))},shopShowFilterTag:function(t){return e(Object(E.j)(t))}}}))((function(e){var t=e.filterPrice,n=e.filterCollection,a=e.shopFetchStart,i=e.collection,o=e.shopFilterPrice,l=e.shopShowFilterTag,u=e.filterTag,s=e.filterPriceTag,m=Object(c.useState)(!1),f=Object(j.a)(m,2),d=f[0],b=f[1],p=function(e){switch(e){case"portein":return"\u9ad8\u86cb\u767d";case"cookie":return"\u9905\u4e7e";case"clothes":case"shirt":return"\u4e0a\u8863";case"pants":return"\b\u8932\u5b50";default:return e}};return r.a.createElement("span",{className:"filter-button-container"},r.a.createElement("button",{className:"filter-button",onClick:function(){return b(!d)}},r.a.createElement("span",null,n?p(u):s),r.a.createElement(g.Icon,{icon:O.ic_arrow_drop_down,size:16})),d&&r.a.createElement("div",{className:"".concat(n?"filter-dropdown-custom":""," filter-dropdown")},r.a.createElement("ul",null,t&&t.map((function(e){return r.a.createElement("li",{className:"".concat(s===e?"price-selected":""," filter-list"),key:e,onClick:function(){b(!d),o(e)}},e)})),n&&n.map((function(e){return r.a.createElement("li",{className:"".concat(u===e?"price-selected":""," filter-list"),key:e,onClick:function(){l(e),b(!d),a(void 0,e)}},p(e))})),n&&r.a.createElement("li",{className:"cancel-filter-li"},r.a.createElement("span",{onClick:function(){l("\u9078\u64c7\u7be9\u9078"),a(i,void 0)}},"\u53d6\u6d88\u7be9\u9078")))))})),w=(n(231),function(e){var t=e.title,n=Object(v.a)(e,["title"]);return r.a.createElement("div",{className:"filter-bar"},r.a.createElement("div",{className:"filter-bar-itemtype"},r.a.createElement("span",null,t," : "),r.a.createElement(C,n)))}),N=(n(232),n(65),Object(i.b)({collections:h.a,isFetching:h.d,shopUrl:h.g}));t.default=Object(a.b)(N,(function(e){return{shopFetchStart:function(t,n){return e(Object(E.b)(t,n))}}}))((function(e){var t=e.collections,n=e.shopFetchStart,a=e.isFetching,i=e.shopUrl,u=Object(o.g)().collection,s=Object(o.g)().itemType;return Object(c.useEffect)((function(){return document.body.style="men"===u||"women"===u?"background: #ecedef;":"background: #e3e3e3;",n(u,s),function(){return document.body.style="background: white;"}}),[u,n,s]),r.a.createElement("div",{className:"collection-page"},a?r.a.createElement(l.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"collection-title"},"men"===u?"\u7537\u58eb\u670d\u98fe\u7cfb\u5217":"women"===u?"\u5973\u58eb\u670d\u98fe\u7cfb\u5217":"\u9ad8\u86cb\u767d\u98df\u54c1\u7cfb\u5217"),r.a.createElement("div",{className:"filter-bar-container"},r.a.createElement(w,{filterCollection:i[u],title:"\u7be9\u9078\u689d\u4ef6",collection:u}),r.a.createElement(w,{filterPrice:["\u7531\u4f4e\u81f3\u9ad8","\u7531\u9ad8\u81f3\u4f4e"],title:"\u50f9\u683c\u6392\u5e8f"})),r.a.createElement("div",{className:"collection-container"},t.map((function(e){return r.a.createElement(p,{key:e.itemId,item:e})})))))}))}}]);
//# sourceMappingURL=4.36940800.chunk.js.map