(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3,5],{295:function(t,e,r){var content=r(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("0c8e9536",content,!0,{sourceMap:!1})},296:function(t,e,r){var content=r(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("6d444fbb",content,!0,{sourceMap:!1})},301:function(t,e,r){"use strict";r(295)},302:function(t,e,r){var n=r(10)(!1);n.push([t.i,".article_card[data-v-a1f899d4]{border-radius:8px;background-color:var(--main-bgc);transition:.4s;border:1px solid var(--grey-light)}.article_card[data-v-a1f899d4]:hover{background-color:var(--hover-bgc);box-shadow:4px 4px 8px 0 var(--grey-light)}.article_link[data-v-a1f899d4]{display:flex}.article_link .img_info[data-v-a1f899d4]{margin:8px;min-width:120px;height:120px;overflow:hidden;border-radius:4px;display:grid;align-items:center;justify-items:center;place-items:center}@media (max-width:568px){.article_link .img_info[data-v-a1f899d4]{display:none}}.article_link .img_info img[data-v-a1f899d4]{width:120px;min-height:100%;-o-object-fit:cover;object-fit:cover;filter:sepia(30%) brightness(1.1) contrast(.8)}.article_info[data-v-a1f899d4]{padding:10px;display:grid;grid-template-rows:32px 54px 1fr;grid-gap:4px;gap:4px;width:100%}@media (max-width:568px){.article_info[data-v-a1f899d4]{grid-template-rows:32px 2.2fr 1fr}}.article_info .title[data-v-a1f899d4]{font-size:24px;color:var(--green-dark)}.article_info .dec[data-v-a1f899d4]{font-size:14px;line-height:1.5rem;color:var(--green-dark);opacity:.7;text-indent:2rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal}@media (max-width:568px){.article_info .dec[data-v-a1f899d4]{-webkit-line-clamp:4}}.article_info .btm_section[data-v-a1f899d4]{display:flex;justify-content:space-between;align-items:center}@media (max-width:568px){.article_info .btm_section[data-v-a1f899d4]{flex-flow:column;justify-content:start;align-items:start}}.article_info .btm_section .tags[data-v-a1f899d4]{display:flex;align-items:center}.article_info .btm_section .tag[data-v-a1f899d4]{margin:0 2px;padding:2px 8px;display:inline-block;font-size:12px;opacity:.7;color:var(--green-dark);border:1px solid var(--grey-dark);border-radius:4px}.article_info .btm_section .date[data-v-a1f899d4]{font-size:12px;color:var(--green-dark);opacity:.8;margin-left:6px}@media (max-width:568px){.article_info .btm_section .date[data-v-a1f899d4]{margin-top:8px}}",""]),t.exports=n},303:function(t,e,r){"use strict";r.r(e);var n={name:"ArticleCard",props:{title:{type:String,default:function(){return""}},description:{type:String,default:function(){return""}},img:{type:String,default:function(){return""}},tags:{type:[String,Array],default:function(){}},slug:{type:String,default:function(){return""}},createdAt:{type:String,default:function(){return""}}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},o=(r(301),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"article_card"},[r("nuxt-link",{staticClass:"article_link",attrs:{to:"/blog/article/"+t.slug}},[t.img?r("div",{staticClass:"img_info"},[r("img",{attrs:{src:t.img}})]):t._e(),t._v(" "),r("div",{staticClass:"article_info"},[r("h2",{staticClass:"title truncate"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),r("p",{staticClass:"dec truncate-m"},[t._v("\n        "+t._s(t.description)+"\n      ")]),t._v(" "),r("div",{staticClass:"btm_section"},[r("div",{staticClass:"tags"},t._l(t.tags,(function(e,i){return r("span",{key:i,staticClass:"tag"},[t._v("\n            "+t._s(e)+"\n          ")])})),0),t._v(" "),r("span",{staticClass:"date truncate"},[t._v("\n          "+t._s(t.formatDate(t.createdAt))+"\n        ")])])])])],1)}),[],!1,null,"a1f899d4",null);e.default=component.exports},305:function(t,e,r){"use strict";r(296)},306:function(t,e,r){var n=r(10)(!1);n.push([t.i,".home_page[data-v-e4c0619e]{position:relative;height:100%}.home_page .tag_prompt[data-v-e4c0619e]{height:32px;line-height:32px;color:var(--green-dark);font-weight:300;margin-bottom:8px}.home_page .article_list[data-v-e4c0619e]{padding:0;list-style:none;display:grid;grid-gap:16px;gap:16px}.home_page .article_list.animation[data-v-e4c0619e]{-webkit-animation:show_content-data-v-e4c0619e .8s cubic-bezier(.15,.75,0,1) both;animation:show_content-data-v-e4c0619e .8s cubic-bezier(.15,.75,0,1) both}.home_page .pagination_bar[data-v-e4c0619e]{position:absolute;bottom:-56px;right:0;left:0;margin:auto;display:flex;justify-content:center;grid-gap:8px;gap:8px}.home_page .pagination_bar .page_button[data-v-e4c0619e]{height:32px;width:32px;border-radius:4px;border:1px solid var(--grey-light);color:var(--green-dark);background-color:var(--main-bgc);transition:.4s;font-size:16px;cursor:pointer;outline:none}.home_page .pagination_bar .page_button[data-v-e4c0619e]:hover{background-color:var(--hover-bgc);box-shadow:2px 2px 4px 0 var(--grey-light)}.home_page .pagination_bar .page_button.active[data-v-e4c0619e]{color:var(--main-bgc);border:1px solid var(--green-light);background-color:var(--green-light)}@-webkit-keyframes show_content-data-v-e4c0619e{0%,20%{transform:translateX(5vw);opacity:0}80%,to{transform:translateX(0);opacity:1}}@keyframes show_content-data-v-e4c0619e{0%,20%{transform:translateX(5vw);opacity:0}80%,to{transform:translateX(0);opacity:1}}",""]),t.exports=n},316:function(t,e,r){"use strict";r.r(e);r(111),r(37);var n={name:"HomePage",props:{articles:{type:Array,default:function(){return[]}}},data:function(){return{sliceArray:[],activePage:0,articlesCount:8,showContent:!0}},created:function(){this.handleSliceArray()},methods:{scrollToTop:function(){var t=this;this.intervalId=setInterval((function(){0===window.pageYOffset&&clearInterval(t.intervalId),window.scroll(0,window.pageYOffset-40)}),10)},handlePaginationBtn:function(t){var e=this;this.activePage!==t-1&&(setTimeout((function(){e.showContent=!0}),300),this.activePage=t-1,this.scrollToTop(),this.showContent=!1)},handleSliceArray:function(){for(var i=0;i<this.articles.length;i+=this.articlesCount)this.sliceArray.push(this.articles.slice(i,i+this.articlesCount))}}},o=(r(305),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home_page"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.$route.params.tag,expression:"$route.params.tag"}],staticClass:"tag_prompt"},[t._v("\n    Tagged - "+t._s(t.$route.params.tag)+"\n  ")]),t._v(" "),r("transition-group",{directives:[{name:"show",rawName:"v-show",value:t.showContent,expression:"showContent"}],class:["article_list",{animation:!t.$store.state.isLoading}],attrs:{tag:"ul"}},t._l(t.sliceArray[t.activePage],(function(article,t){return r("ArticleCard",{key:"key-"+t,attrs:{title:article.title,description:article.description,img:article.img,tags:article.tags,slug:article.slug,"created-at":article.createdAt}})})),1),t._v(" "),r("div",{staticClass:"pagination_bar"},t._l(t.sliceArray.length,(function(e){return r("button",{key:e,class:["page_button",{active:t.activePage===e-1}],on:{click:function(r){return t.handlePaginationBtn(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0)],1)}),[],!1,null,"e4c0619e",null);e.default=component.exports;installComponents(component,{ArticleCard:r(303).default})},352:function(t,e,r){"use strict";r.r(e);r(38),r(33);var n=r(3),o={name:"TagFilter",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,o=t.error,e.prev=1,e.next=4,r("tags").where({slug:{$contains:n.tag}}).limit(1).fetch();case 4:return c=e.sent,l=c.length>0?c[0]:{},e.next=8,r("articles",n.slug).only(["title","description","img","slug","author","tags","createdAt"]).where({tags:{$contains:l.name}}).sortBy("createdAt","desc").fetch();case 8:return d=e.sent,e.abrupt("return",{filArticles:d});case 12:e.prev=12,e.t0=e.catch(1),o({statusCode:404,message:"Page could not be found"});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()}},c=r(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ArticleListPage",{attrs:{articles:t.filArticles}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleListPage:r(316).default})}}]);