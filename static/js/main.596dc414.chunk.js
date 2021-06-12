(this["webpackJsonpgif-search"]=this["webpackJsonpgif-search"]||[]).push([[0],{12:function(e,t,r){e.exports={frame:"Frame_frame__3xFCM",image:"Frame_image__2KvTX",caption:"Frame_caption__1SvEe"}},16:function(e,t,r){e.exports={layout:"Layout_layout__vps_j",main:"Layout_main__3OBIG",blurred:"Layout_blurred__2C1Dq"}},26:function(e,t,r){e.exports={title:"Title_title__1jPs1"}},29:function(e,t,r){e.exports={circle:"Loader_circle__3_imu","lds-ellipsis":"Loader_lds-ellipsis__1vFKe","lds-ellipsis2":"Loader_lds-ellipsis2__3uUj4","lds-ellipsis3":"Loader_lds-ellipsis3__apNXa"}},60:function(e,t,r){},61:function(e,t,r){"use strict";r.r(t);var a,n=r(9),i=r.n(n),c=r(3),s=r(26),o=r(1),u=function(){return Object(o.jsx)("h1",{className:s.title,children:"Find your GIF!"})},l=r(16),d=r.n(l),j=function(e){var t=e.children;return Object(o.jsx)("div",{className:d.a.layout,children:Object(o.jsxs)("main",{className:d.a.main,children:[Object(o.jsx)(u,{}),t]})})},b=r(6),p=r.n(b),m=r(10),f=r(5),_=r(0),O=r(4),h=function(e){return e.isLoading},x=function(e){return e.searchText},v=function(e){return e.error},g=Object(O.a)([function(e){return e.data},function(e){return e.viewedIds}],(function(e,t){return e.filter((function(e){return!t.includes(e.id)}))})),w=Object(O.a)(g,(function(e){var t=Object(f.a)(e,1)[0];return null!==t&&void 0!==t?t:null})),y=r(11),F=r(8),N=r(27),L=r.n(N),I=function(){var e=Object(m.a)(p.a.mark((function e(t){var r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("https://api.giphy.com/v1/gifs/search",{params:{q:t,limit:150,api_key:"SccsoCNcduBUF6EiYr9iHKfb90UuRRbQ"}});case 3:return r=e.sent,a=r.data.data,e.abrupt("return",a.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized.url}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),k=Object(F.b)("app/getImages",I),C=Object(F.c)({name:"app",initialState:{data:[],isLoading:!1,viewedIds:[],error:null,searchText:""},reducers:{setError:function(e,t){e.error=t.payload},clearError:function(e){e.error=null},setSearchText:function(e,t){e.searchText=t.payload},addViewedImageId:function(e,t){e.viewedIds.push(t.payload)}},extraReducers:(a={},Object(y.a)(a,k.pending,(function(e){e.isLoading=!0,e.viewedIds=[]})),Object(y.a)(a,k.fulfilled,(function(e,t){e.data=t.payload,Object(f.a)(t.payload,1)[0]||(e.error="No results, try another phrase"),e.isLoading=!1})),Object(y.a)(a,k.rejected,(function(e){e.isLoading=!1,e.error="Request failed. Try again later."})),a)}),T=C.actions,E=T.setError,S=T.clearError,R=T.setSearchText,B=T.addViewedImageId,K=C.reducer,q=r(7),z=r.n(q),G=function(){var e=Object(_.useState)(""),t=Object(f.a)(e,2),r=t[0],a=t[1],n=Object(c.d)(x),i=Object(c.d)(v),s=Object(c.d)(w),u=Object(c.c)(),l=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),i&&u(S()),""!==r.trim()){e.next=4;break}return e.abrupt("return",u(E("Field is empty")));case 4:if(r.trim().toLowerCase()===n.trim().toLowerCase()){e.next=8;break}return u(k(r)),u(R(r)),e.abrupt("return");case 8:s&&u(B(s.id));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{className:z.a.bar,onSubmit:l,children:[Object(o.jsxs)("div",{className:z.a.form,children:[Object(o.jsx)("input",{id:"search",className:z.a.input,type:"text",placeholder:"Pizza!",onChange:function(e){return a(e.target.value)},value:r}),Object(o.jsx)("button",{className:z.a.button,type:"submit",children:"Search"})]}),i&&Object(o.jsx)("p",{className:z.a.error,children:i})]})},J=r(12),U=r.n(J),V=function(){var e=Object(c.d)(w);return e?Object(o.jsxs)("figure",{className:U.a.frame,children:[Object(o.jsx)("img",{className:U.a.image,src:e.url,alt:""}),Object(o.jsx)("figcaption",{className:U.a.caption,children:e.title})]}):null},X=r(29),D=r.n(X),H=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:D.a.circle,children:[Object(o.jsx)("div",{children:Object(o.jsx)("div",{})}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{})}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{})}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{})}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{})})]})})},P=function(){var e=Object(c.d)(h,c.b);return Object(o.jsxs)(j,{children:[e?Object(o.jsx)(H,{}):Object(o.jsx)(V,{}),Object(o.jsx)(G,{})]})};r(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=Object(F.a)({reducer:K,devTools:!1});i.a.render(Object(o.jsx)(c.a,{store:W,children:Object(o.jsx)(P,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,r){e.exports={form:"Form_form__3wvE7",bar:"Form_bar__3J-wu",input:"Form_input__1FXum",resultContainer:"Form_resultContainer__VRHbN",image:"Form_image__YCpBm",button:"Form_button__2ORia",error:"Form_error__3GKee"}}},[[61,1,2]]]);
//# sourceMappingURL=main.596dc414.chunk.js.map