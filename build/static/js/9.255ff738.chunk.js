(this["webpackJsonpgym-project"]=this["webpackJsonpgym-project"]||[]).push([[9],{196:function(e,t,n){"use strict";n.d(t,"g",(function(){return l})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return m})),n.d(t,"f",(function(){return u}));var a=n(6),c=function(e){return e.shop},l=Object(a.a)([c],(function(e){return e.shopUrl})),r=Object(a.a)([c],(function(e){return e.isFetching})),o=Object(a.a)([c],(function(e){return e.collections})),i=Object(a.a)([c],(function(e){return e.shopItemDetail})),s=Object(a.a)([c],(function(e){return e.filterTag})),m=Object(a.a)([c],(function(e){return e.filterPriceTag})),u=Object(a.a)([c],(function(e){return e.shopPageCollections}))},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return r}));var a=n(1),c=n.n(a),l=function(e){var t=e.onClick;return c.a.createElement("button",{onClick:t,className:"next-arrow"},"\u276f")},r=function(e){var t=e.onClick;return c.a.createElement("button",{onClick:t,className:"prev-arrow"},"\u276e")}},227:function(e,t,n){},254:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(201),r=n.n(l),o=n(24),i=n(10),s=(n(227),n(202),n(203),n(204)),m=n(29),u=n(8),p=n(6),h=n(196),d=n(27),E=n(33),f=function(e){var t=e.collection,n=Object(o.f)();return c.a.createElement("div",{className:"shop-page-collection"},c.a.createElement("img",{style:{width:"95%",height:"95%"},className:"",src:t.img1,alt:"",onClick:function(){n.push("/shopitem/".concat(t.itemCollection,"/").concat(t.itemId))}}),c.a.createElement("p",null,t.name))},g=Object(p.b)({isFetching:h.d,shopPageCollections:h.f});t.default=Object(u.b)(g,(function(e){return{shopPageStart:function(){return e(Object(m.h)())}}}))((function(e){var t=e.shopPageCollections,n=e.shopPageStart,l=e.isFetching,m=Object(o.f)();Object(a.useEffect)((function(){return document.body.style="background: #ecedef;",n(),function(){return document.body.style="background: white;"}}),[n]);var u={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,prevArrow:c.a.createElement(s.b,null),nextArrow:c.a.createElement(s.a,null)},p={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:4,prevArrow:c.a.createElement(s.b,null),nextArrow:c.a.createElement(s.a,null),responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]};return c.a.createElement("div",{className:"shop-page"},l||!t.length?c.a.createElement(d.a,null):c.a.createElement("div",{className:"shop-slider-container"},c.a.createElement(r.a,u,c.a.createElement(i.b,{className:"img-info",to:"/shop/men"},c.a.createElement("h3",null,"\u7537\u58eb\u670d\u98fe\u7cfb\u5217"),c.a.createElement("img",{src:"https://i.ibb.co/gSqbYg5/head-men.jpg",alt:""})),c.a.createElement(i.b,{className:"img-info",to:"/shop/women"},c.a.createElement("h3",null,"\u5973\u58eb\u670d\u98fe\u7cfb\u5217"),c.a.createElement("img",{src:"https://i.ibb.co/YZ2DvqF/head-women.jpg",alt:""})),c.a.createElement(i.b,{className:"img-info",to:"/shop/food"},c.a.createElement("h3",null,"\u9ad8\u86cb\u767d\u98df\u54c1\u7cfb\u5217"),c.a.createElement("img",{src:"https://i.ibb.co/Lg3Pp0V/head-food.jpg",alt:""}))),c.a.createElement("div",{className:"shop-page-newitem-title-container"},c.a.createElement("div",null),c.a.createElement("p",null,"\u6700\u65b0\u5546\u54c1"),c.a.createElement("div",null)),c.a.createElement(r.a,p,t.map((function(e){return c.a.createElement(f,{key:"".concat(e.id,"a"),collection:e})}))),c.a.createElement("div",{style:{height:"30px"}}),c.a.createElement("div",{className:"shop-collection-section"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:"https://i.ibb.co/ScLBjzX/shop-page-men.jpg",alt:""})),c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"\u7537\u58eb\u670d\u98fe\u7cfb\u5217"),c.a.createElement("p",null,"\u975e\u5e38\u9069\u5408\u5047\u65e5\u4f11\u9592\u7a7f\u642d\uff0c\u6a5f\u80fd\u8207\u8a2d\u8a08\u517c\u5177"),c.a.createElement("p",null,"\u8b93\u4f60\u7684\u4f11\u9592\u65e5\u65e2\u6642\u9ae6\u53c8\u4e0d\u5931\u8212\u9069\u5ea6"),c.a.createElement(E.a,{onClick:function(){return m.push("/shop/men")},style:{width:"100px"}},"\u4e86\u89e3\u8a73\u60c5"))),c.a.createElement("div",{className:"shop-collection-section media-style"},c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"\u5973\u58eb\u670d\u98fe\u7cfb\u5217"),c.a.createElement("p",null,"\u5b8c\u7f8e\u8cbc\u5408\u8eab\u5f62\u66f2\u7dda\uff0c\u652f\u6490\u6027\u4f73\uff0c\u4e26\u9078\u7528\u7368\u7279\u6297\u83cc\u5438\u6c57\u6750\u8cea"),c.a.createElement("p",null,"\u5ef6\u5c55\u6027\u6975\u4f73\uff0c\u9069\u5408\u5404\u7a2e\u935b\u934a\u3002"),c.a.createElement(E.a,{onClick:function(){return m.push("/shop/women")},style:{width:"100px"}},"\u4e86\u89e3\u8a73\u60c5")),c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:"https://i.ibb.co/1KMwdkj/shop-page-women.jpg",alt:""}))),c.a.createElement("div",{className:"shop-collection-section"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:"https://i.ibb.co/59ZGjHR/shop-page-food.jpg",alt:""})),c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"\u9ad8\u86cb\u767d\u98df\u54c1\u7cfb\u5217"),c.a.createElement("p",null,"\u6211\u5011\u63d0\u4f9b\u8c50\u5bcc\u4e14\u591a\u6a23\u7684\u5404\u985e\u88dc\u5291"),c.a.createElement("p",null,"\u6eff\u8db3\u60a8\u6240\u6709\u7684\u98f2\u990a\u9700\u6c42"),c.a.createElement(E.a,{onClick:function(){return m.push("/shop/food")},style:{width:"100px"}},"\u4e86\u89e3\u8a73\u60c5")))))}))}}]);
//# sourceMappingURL=9.255ff738.chunk.js.map