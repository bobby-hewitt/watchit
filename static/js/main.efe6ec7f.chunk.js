(window["webpackJsonpweb-pa"]=window["webpackJsonpweb-pa"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/check.f878000c.svg"},,,,function(e,t,n){e.exports=n.p+"static/media/chevrondown.c49d092d.svg"},function(e,t,n){e.exports=n.p+"static/media/chevronleft.77fafd0e.svg"},function(e,t,n){e.exports=n.p+"static/media/chevronup.9ce1d2ae.svg"},,,function(e,t,n){e.exports=n(63)},,,,,function(e,t,n){},,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){var r={"./check.svg":8,"./chevrondown.svg":12,"./chevronleft.svg":13,"./chevronup.svg":14,"./edit.svg":49,"./filter.svg":50,"./plus.svg":51};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=48},function(e,t,n){e.exports=n.p+"static/media/edit.4d34a2f9.svg"},function(e,t,n){e.exports=n.p+"static/media/filter.356b0415.svg"},function(e,t,n){e.exports=n.p+"static/media/plus.081b7992.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(15),c=n.n(i),o=(n(22),n(1)),s=Object(r.createContext)({}),l=s.Provider,u=s,d=n(2),m=(n(34),n(35),n(36),n(37),function(e){var t=e.size,n=e.media_type,r=e.id,i=e.title,c=e.name,o=e.poster_path;return a.a.createElement("div",{onClick:function(){return Object(d.navigate)("/watchit/".concat(n,"/").concat(r))},className:"contentCardContainer ".concat(t)},a.a.createElement("h3",null,i||c),a.a.createElement("div",{style:{backgroundImage:"url( https://image.tmdb.org/t/p/w500".concat(o,")")}}))}),v=(n(38),function(e){var t=e.size,n=e.name,r=e.title,i=e.overview,c=e.runtime,o=e.genres,s=e.pageHeader,l=e.backdrop_path,u=e.providers,v=e.id,p=e.media_type,f=e.index,g=e.isInfo,y=e.isNavigable,E=e.forceHero;return e.hideSmall&&window.innerWidth<=991&&!E?a.a.createElement("div",null):window.innerWidth<=991&&!E?a.a.createElement(m,{size:t,name:n,title:r,overview:i,runtime:c,genres:o,backdrop_path:l,providers:u,id:v,media_type:p,isInfo:g,isNavigable:y}):a.a.createElement("div",{className:"heroCardOuterContainer ".concat(t," ").concat(g&&"isInfo"," ").concat(s&&"pageHeader"," ").concat(0===f&&window.innerWidth>991&&"hero"),onClick:function(){y&&Object(d.navigate)("/watchit/".concat(p,"/").concat(v))}},a.a.createElement("div",{className:"heroCardContainer"},a.a.createElement("div",{className:"image",style:{backgroundImage:"url( http://image.tmdb.org/t/p/original/".concat(l,")")}},a.a.createElement("div",{className:"vGrad"}),a.a.createElement("div",{className:"hGrad"}),a.a.createElement("div",{className:"mixedGrad"}))),a.a.createElement("div",{className:"meta"},a.a.createElement("h2",null,n||r),!t&&window.innerWidth>991&&a.a.createElement(a.a.Fragment,null,g&&a.a.createElement("p",{className:"metadata"},function(){for(var e="",t=0;t<o.length;t++)e+=o[t].name+", ";return e=e.slice(0,-2)}(),". ","movie"===p?"Runtime ".concat(c,"m"):""),a.a.createElement("p",{className:"overview"},i))))}),p=n(3),f=(n(39),function(e){var t=e.content,n=e.title,r=e.query,i=e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14,negativeBottomTitleMargin:!0},a.a.createElement("div",{className:"section"},t&&t.slice(0,14).map((function(e,t){return 0===t?a.a.createElement(v,Object.assign({index:t,pageHeader:0===i,forceHero:!0,key:t,providers:e["watch/providers"]},e,{isNavigable:!0})):t<5?a.a.createElement(m,Object.assign({size:"large",key:t},e)):t<11?a.a.createElement(m,Object.assign({key:t},e)):a.a.createElement(v,Object.assign({size:"extraSmall",hideSmall:13===t,key:t,providers:e["watch/providers"]},e,{isNavigable:!0}))}))))}),g=function(e){var t=e.content,n=e.title,r=e.query,i=e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14,negativeBottomTitleMargin:!0},a.a.createElement("div",{className:"section"},t&&t.slice(0,13).map((function(e,t){var n;return 0===t?a.a.createElement(v,Object.assign((n={index:t},Object(p.a)(n,"index",t),Object(p.a)(n,"pageHeader",0===i),Object(p.a)(n,"index",t),Object(p.a)(n,"key",t),Object(p.a)(n,"providers",e["watch/providers"]),n),e,{isNavigable:!0})):a.a.createElement(m,Object.assign({key:t},e))}))))},y=function(e){var t=e.content,n=e.title,r=e.query;e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14},a.a.createElement("div",{className:"section"},t&&t.map((function(e,t){return t<2?a.a.createElement(v,Object.assign({size:"small",index:t,providers:e["watch/providers"]},e,{isNavigable:!0})):t<6?a.a.createElement(m,Object.assign({size:"large",key:t},e)):a.a.createElement(m,Object.assign({key:t},e))}))))},E=function(e){var t=e.content,n=e.title,r=e.query;e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14},a.a.createElement("div",{className:"section"},t&&t.map((function(e,n){return n<2?a.a.createElement(v,Object.assign({size:"small",key:n,providers:e["watch/providers"]},e,{isNavigable:!0})):n<8?a.a.createElement(m,Object.assign({key:n},e)):a.a.createElement(v,Object.assign({size:10===t.length?"small":"extraSmall",key:n,providers:e["watch/providers"]},e,{isNavigable:!0}))}))))},h=function(e){var t=e.content,n=e.title,r=e.query;e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14},a.a.createElement("div",{className:"section"},t&&t.map((function(e,t){return t<3?a.a.createElement(v,Object.assign({size:"extraSmall",key:t,providers:e["watch/providers"]},e,{isNavigable:!0})):a.a.createElement(m,Object.assign({key:t},e))}))))},b=function(e){var t=e.content,n=e.title,r=e.query;e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14},a.a.createElement("div",{className:"section"},t&&t.map((function(e,t){return t<2?a.a.createElement(v,Object.assign({size:"small",key:t,providers:e["watch/providers"]},e,{isNavigable:!0})):a.a.createElement(m,Object.assign({key:t},e))}))))},w=function(e){var t=e.content,n=e.title,r=e.query;e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14},a.a.createElement("div",{className:"section"},t&&t.map((function(e,t){return t<3?a.a.createElement(v,Object.assign({size:"extraSmall",key:t,providers:e["watch/providers"]},e,{isNavigable:!0})):a.a.createElement(m,Object.assign({size:"large",key:t},e))}))))},O=function(e){var t=e.content,n=e.title,r=e.query;e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14},a.a.createElement("div",{className:"section"},t&&t.map((function(e,t){return t<2?a.a.createElement(v,Object.assign({size:"small",key:t,providers:e["watch/providers"]},e,{isNavigable:!0})):a.a.createElement(m,Object.assign({size:"large",key:t},e))}))))},j=function(e){var t=e.content,n=e.title,r=e.query,i=e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14,negativeBottomTitleMargin:!0},a.a.createElement("div",{className:"section"},t&&t.map((function(e,t){var n;return t<1?a.a.createElement(v,Object.assign((n={index:t},Object(p.a)(n,"index",t),Object(p.a)(n,"pageHeader",0===i),Object(p.a)(n,"key",t),Object(p.a)(n,"providers",e["watch/providers"]),n),e,{isNavigable:!0})):a.a.createElement(m,Object.assign({size:"large",key:t},e))}))))},N=function(e){var t=e.content,n=e.title,r=e.query;e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14},a.a.createElement("div",{className:"section"},t&&t.map((function(e,t){return a.a.createElement(v,Object.assign({size:"small",key:t,providers:e["watch/providers"]},e,{isNavigable:!0}))}))))},_=function(e){var t=e.content,n=e.title,r=e.query;e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14},a.a.createElement("div",{className:"section"},t&&t.map((function(e,t){return a.a.createElement(v,Object.assign({size:"extraSmall",key:t,providers:e["watch/providers"]},e,{isNavigable:!0}))}))))},k=function(e){var t=e.content,n=e.title,r=e.query;e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14},a.a.createElement("div",{className:"section"},t&&t.map((function(e,t){return a.a.createElement(v,Object.assign({size:"small",key:t,providers:e["watch/providers"]},e,{isNavigable:!0}))}))))},C=function(e){var t=e.content,n=e.title,r=e.query,i=e.index;return a.a.createElement(R,{query:r,title:n,viewMore:t.length>14,negativeBottomTitleMargin:!0},a.a.createElement("div",{className:"section"},t&&t.map((function(e,t){return a.a.createElement(v,Object.assign({index:t,pageHeader:0===i,key:t,providers:e["watch/providers"]},e,{isNavigable:!0}))}))))},x=function(e){var t=Object(r.useContext)(u);return a.a.createElement("div",{id:"results",className:"resultsContainerOuter"},Array.isArray(t.results)&&a.a.createElement("div",{className:"resultsContainer"},Array.isArray(t.results)&&t.results.map((function(e,t){if(!e.content||!e.content.length)return a.a.createElement("div",{key:t});switch(e.content&&e.content.length){case 13:return a.a.createElement(g,Object.assign({key:t},e,{index:t}));case 12:return a.a.createElement(y,Object.assign({key:t},e,{index:t}));case 11:case 10:return a.a.createElement(E,Object.assign({key:t},e,{index:t}));case 9:return a.a.createElement(h,Object.assign({key:t},e,{index:t}));case 8:return a.a.createElement(b,Object.assign({key:t},e,{index:t}));case 7:return a.a.createElement(w,Object.assign({key:t},e,{index:t}));case 6:return a.a.createElement(O,Object.assign({key:t},e,{index:t}));case 5:return a.a.createElement(j,Object.assign({key:t},e,{index:t}));case 4:return a.a.createElement(N,Object.assign({key:t},e,{index:t}));case 3:return a.a.createElement(_,Object.assign({key:t},e,{index:t}));case 2:return a.a.createElement(k,Object.assign({key:t},e,{index:t}));case 1:return a.a.createElement(C,Object.assign({key:t},e,{index:t}));default:return a.a.createElement(f,Object.assign({key:t},e,{index:t}))}}))),a.a.createElement("div",{className:"loading"}))},T=(n(40),n(41),function(e){var t=e.label,n=e.secondary,r=e.tertiary,i=e.onClick,c=e.opaque;return a.a.createElement("div",{className:"buttonContainer ".concat(n&&"secondary"," ").concat(r&&"tertiary"," ").concat(c&&"opaque"),onClick:i},a.a.createElement("p",null,t))}),S=(n(42),function(e){var t=e.title,n=e.negativeBottomMargin,r=e.isResultsSectionTitle;return a.a.createElement("h1",{className:"sectionTitle ".concat(n&&"negativeBottomMargin").concat(r&&"isResultsSectionTitle")},t)}),M=(n(43),function(e){var t=Object(r.useContext)(u);return a.a.createElement("div",{className:"modalOuterContainer",onClick:function(){return t.setModal(!1)}},a.a.createElement("div",{className:"modalContainer"},a.a.createElement("div",{className:"modalFixedHeader"},a.a.createElement("p",{className:"title"},e.title),a.a.createElement(T,{label:"Done",secondary:!0,onClick:function(){return t.setModal(!1)}})),a.a.createElement("div",{className:"modalInner"},a.a.createElement("div",{className:"modalFalseHeader"}),a.a.createElement("p",{className:"description"},e.description),e.children),a.a.createElement("div",{className:"bottomGrad"})))}),q=(n(44),function(e){var t=Object(r.useContext)(u);return a.a.createElement("div",{id:"results",className:"providerSelection"},t.providers&&t.providers.map((function(e,n){return a.a.createElement(z,{selected:e.selected,onClick:function(n){n.stopPropagation(),function(e){console.log("TOGFGFLIN");for(var n=Object.assign([],t.providers),r=n.length-1;r>=0;r--)n[r].provider_id===e&&(n[r].selected=!t.providers[r].selected);var a=n.filter((function(e){return e.selected}));if(!a||a&&0===a.length)return t.setNotification({count:t.notification.count+1,text:"Pssst.. this works better when you've got all your streaming services selected"});window.localStorage?(t.setProviders(n),window.localStorage.setItem("streamingProviders",JSON.stringify(n))):t.setProviders(n)}(e.provider_id)},image:"https://image.tmdb.org/t/p/w92/".concat(e.logo_path),label:e.provider_name})})))}),B=(n(45),function(e){var t=Object(r.useContext)(u);return a.a.createElement("div",{id:"results",className:"genreSelection"},t.genres&&t.genres.map((function(e,n){return a.a.createElement(z,{selected:e.selected,onClick:function(n){n.stopPropagation(),function(e){for(var n=Object.assign([],t.genres),r=n.length-1;r>=0;r--)n[r].id===e&&(n[r].selected=!t.genres[r].selected);t.setGenres(n)}(e.id)},label:e.name})})))}),P=(n(46),function(e){var t=e.text,n=e.count,i=(Object(r.useContext)(u),Object(r.useState)(!1)),c=Object(o.a)(i,2),s=c[0],l=c[1],d=Object(r.useRef)(!1);return Object(r.useEffect)((function(){return l(!0),d.current=setTimeout((function(){l(!1)}),5e3),function(){clearTimeout(d.current)}}),[n]),t?a.a.createElement("div",{className:"notificationContainer ".concat(s&&"show")},a.a.createElement("p",{className:"notificationCopy"},t)):a.a.createElement("div",null)}),G=(n(47),function(e){return a.a.createElement("div",{className:"iconButtonContainer ".concat(e.noBorder&&"noBorder"," "),onClick:e.onClick},a.a.createElement("img",{src:n(48)("./".concat(e.icon,".svg"))}))}),z=(n(52),function(e){var t=e.image,r=e.label,i=e.selected,c=e.onClick;return a.a.createElement("div",{className:"listItemContainer ".concat(i&&"selected"),onClick:c},a.a.createElement("div",{className:"listItemInner"},t&&a.a.createElement("img",{className:"icon",src:"".concat(t)}),a.a.createElement("p",{className:"label"},r),a.a.createElement("div",{className:"check"},i&&a.a.createElement("img",{src:n(8)}))))}),I=(n(53),n(54),function(){var e=Object(r.useContext)(u),t=Object(r.useState)([{id:0,type:"genres",name:s("genres"),selected:!0},{id:1,type:"providers",name:s("providers")}]),n=Object(o.a)(t,2),i=n[0],c=n[1];function s(t){var n=e[t].filter((function(e){return e.selected}));return"".concat("genres"===t?"Genres ":"Providers ","(").concat(n.length,")")}return a.a.createElement("div",null,a.a.createElement(W,{content:i,onClick:function(e){for(var t=Object.assign([],i),n=t.length-1;n>=0;n--)t[n].selected=e===n,t[n].name=s(t[n].type);c(t)}}),i[0].selected&&a.a.createElement(B,null),i[1].selected&&a.a.createElement(q,null))}),F=(n(55),function(e){return a.a.createElement("div",{className:"backButtonContainer ".concat(e.noBorder&&"noBorder"," "),onClick:function(){return window.history.back()}},a.a.createElement("img",{src:n(13)}),e.title&&a.a.createElement(S,{title:e.title}))}),H=(n(56),function(e){e.label;var t=e.selected,n=e.name,r=e.id,i=e.onClick;return a.a.createElement("div",{className:"tabContainer ".concat(t&&"selected"),onClick:function(e){e.stopPropagation(),i(r)}},a.a.createElement("p",null,n),a.a.createElement("div",null))}),W=function(e){e.data;var t=e.onClick,n=e.content;return a.a.createElement("div",{className:"tabsContainer"},n&&n.map((function(e,n){return a.a.createElement(H,Object.assign({key:n},e,{onClick:t}))})))},A=(n(57),n(58),function(e){e.info;var t=e.providers,n=t&&t.results&&t.results.GB&&t.results.GB.flatrate&&t.results.GB.flatrate.length?t.results.GB.flatrate:[],r=(t&&t.results&&t.results.GB&&t.results.GB.free&&t.results.GB.free.length?t.results.GB.free:[]).concat(n);return console.log(r),a.a.createElement("div",{className:"watchProviders"},r.map((function(e,t){return a.a.createElement("img",{src:"https://image.tmdb.org/t/p/w92/".concat(e.logo_path)})})))}),L=(n(59),function(e){var t=Object(r.useContext)(u),n=Object(r.useState)(!1),i=Object(o.a)(n,2),c=(i[0],i[1]);return a.a.createElement("div",{className:"menuOuterContainer ".concat(t.showMenu&&"visible")},a.a.createElement("div",{className:"selectorsContainer"},a.a.createElement(W,{onClick:function(e){for(var n=Object.assign([],t.contentTypes),r=n.length-1;r>=0;r--)n[r].id===e?n[r].selected=!0:n[r].selected=!1;c(!1),t.setContentTypes(n)},content:t.contentTypes}),a.a.createElement("div",{className:"desktopFilterContainer"},a.a.createElement("div",{className:"horizontalSpacer"}),a.a.createElement(T,{label:"GENRES (".concat(t.genres.filter((function(e){return e.selected})).length,")"),onClick:function(){return t.setModal({type:"genres",title:"Select genres",description:"Select up to 6 genres. We'll find the best match for your combination"})}})),a.a.createElement("div",{className:"mobileFilterContainer"},a.a.createElement(G,{icon:"filter",noBorder:!0,onClick:function(){t.setModal({type:"mixed",title:"Filters"})}}))),a.a.createElement("div",{className:"providersMenuContainer",onClick:function(){return t.setModal(!t.modal&&{type:"providers",title:"Your services",description:"We'll only show results which you can watch for free on your subscription services. If you don't choose any services we'll show you all results"})}},a.a.createElement(G,{icon:"plus"}),t.providers.filter((function(e){return e.selected})).map((function(e,t){return a.a.createElement("img",{className:"providerIndicator",src:"https://image.tmdb.org/t/p/w92/".concat(e.logo_path)})}))))}),R=(n(60),function(e){var t=Object(r.useContext)(u);return a.a.createElement("div",{className:"section"},a.a.createElement("div",{className:"sectionHeader"},a.a.createElement(S,{title:e.title})),e.children,a.a.createElement("div",{className:"CTAContainer"},e.viewMore&&a.a.createElement(T,{secondary:!0,opaque:!0,label:"View all "+e.title.toLowerCase(),tertiary:!0,onClick:function(){var n=t.contentTypes.find((function(e){return e.selected})).id;Object(d.navigate)("/watchit/view-more",!1,{type:n,query:e.query,title:e.title})}})))}),V=function(e){Object(r.useContext)(u);return a.a.createElement("div",{className:"homeContainer"},a.a.createElement(L,null),a.a.createElement(x,null))},Y=(n(61),n(16)),D=[{id:28,name:"Action",id_list:[28]},{id:"12|10759",name:"Adventure",id_list:[12,10759]},{id:16,name:"Animation",id_list:[16]},{id:35,name:"Comedy",id_list:[25]},{id:80,name:"Crime",id_list:[80]},{id:99,name:"Documentary",id_list:[99]},{id:18,name:"Drama",id_list:[18]},{id:10751,name:"Family",id_list:[10751]},{id:14,name:"Fantasy",id_list:[14]},{id:36,name:"History",id_list:[36]},{id:27,name:"Horror",id_list:[27]},{id:10762,name:"Kids",id_list:[10762]},{id:10402,name:"Music",id_list:[10402]},{id:9648,name:"Mystery",id_list:[9648]},{id:10763,name:"News",id_list:[10726]},{id:10764,name:"Reality",id_list:[10764]},{id:10749,name:"Romance",id_list:[10749]},{id:"878|10765",name:"Science Fiction",id_list:[878,10765]},{id:10766,name:"Soap",id_list:[10766]},{id:10767,name:"Talk",id_list:[10767]},{id:53,name:"Thriller",id_list:[53]},{id:37,name:"Western",id_list:[37]},{id:"10768|10752",name:"War & Politics",id_list:[10768,10752]}],J=n(4),K=n.n(J),Q="c773362edcce3dd87050f617bf8a9b24",X=function(e,t){return new Promise((function(n,r){var a="https://api.themoviedb.org/3/discover/tv?api_key=".concat(Q,"&watch_region=GB&page=").concat(t).concat(e);K.a.get(a,(function(e){for(var t=0;t<e.results.length;t++)e.results[t].media_type="tv";n(e.results)}))}))},U=function(e,t){return new Promise((function(n,r){var a="https://api.themoviedb.org/3/discover/movie?api_key=".concat(Q,"&watch_region=GB&page=").concat(t).concat(e);K.a.get(a,(function(e){for(var t=0;t<e.results.length;t++)e.results[t].media_type="movie";n(e.results)}))}))},Z=function(e,t){return console.log("getting moveis"),new Promise((function(t,n){Promise.all([U(e,1),U(e,2),U(e,3),U(e,4),U(e,5)]).then((function(e){for(var n=[],r=0;r<e.length;r++)e[r]&&e[r].length&&(n=n.concat(e[r]));t(n)}))}))},$=function(e,t){return new Promise((function(n,r){var a=t||1;Promise.all([X(e,a),X(e,a+1),X(e,a+2),X(e,a+3),X(e,a+4)]).then((function(e){for(var t=[],r=0;r<e.length;r++)e[r]&&e[r].length&&(t=t.concat(e[r]));n(t)}))}))},ee=function(e){return new Promise((function(t,n){0===e.genres.length?(ae(e),Promise.all(ae(e)).then((function(e){var n=te(e);t(n)}))):1===e.genres.length?Promise.all(function(e){var t=e.genres[0],n=[],r=ne({title:"Most popular "+t.name,contentType:e.contentTypes,query:oe({sort:"popularity",genres:[t],genreOperator:",",providers:e.providers,contentType:e.contentTypes})});n.push(r);for(var a=0;a<D.length;a++)if(D[a].id!==t.id){var i=ne({title:ce([t,D[a]]),contentType:e.contentTypes,query:oe({sort:"popularity",genres:[t,D[a]],genreOperator:",",providers:e.providers,contentType:e.contentTypes})});n.push(i)}return n}(e)).then((function(e){var n=te(e);t(n)})):Promise.all(function(e){for(var t=e.genres.map((function(e){return e})),n=[],r=[],a=0;a<=t.length;a++)n=n.concat(ie(t,a));for(a=n.length-1;a>=0;a--){var i=ne({title:ce(n[a]),contentType:e.contentTypes,query:oe({sort:"popularity",genres:n[a],genreOperator:",",providers:e.providers,contentType:e.contentTypes})});r.push(i)}return r}(e)).then((function(e){var n=te(e);t(n)}))}))};function te(e){e=e.filter((function(e){return e.content.length>0}));for(var t=1;t<e.length;t++){e[t];if(e[t]&&e[t].content&&e[t].content[0]&&e[t-1]&&e[t-1].content&&e[t-1].content[0])(e[t].content[0].title||e[t].content[0].name)===(e[t-1].content[0].title||e[t-1].content[0].name)&&(e.content=e[t].content.splice(0,1))}return e}function ne(e){return new Promise((function(t,n){var r,a;(r=e.query,a=e.contentType[0].id,new Promise((function(e,t){switch(a){case 1:return void U(r,1).then((function(t){return e(t)}));case 0:return void X(r,1).then((function(t){return e(t)}));case 2:return void X(r,1).then((function(t){U(r,1).then((function(n){var r=re(t,n);e(r)}))}))}}))).then((function(n){t({title:e.title?e.title.toUpperCase():"",content:n,query:e.query})}))}))}function re(e,t){var n=e.concat(t);return n.sort((function(e,t){return t.popularity-e.popularity})),n}function ae(e){var t=[],n=ne({title:"Most popular",contentType:e.contentTypes,query:oe({sort:"popularity",genres:[],genreOperator:",",providers:e.providers,contentType:e.contentTypes})});t.push(n);for(var r=0;r<D.length;r++){var a=ne({title:ce([D[r]]),contentType:e.contentTypes,query:oe({sort:"popularity",genres:[D[r]],genreOperator:",",providers:e.providers,contentType:e.contentTypes})});t.push(a)}return t}function ie(e,t){var n=e.length;if(t>n)return[];var r=[];return function t(a,i,c){for(var o=1==c,s=i;s<n;s++){var l=[].concat(Object(Y.a)(a),[e[s]]);o?r.push(l):t(l,s+1,c-1)}}([],0,t),r}function ce(e){var t="";for(var n in e)t+=e[n].name+" & ";return t.slice(0,-3)}function oe(e){var t="",n="";if(e.providers.length){t+="&with_watch_providers=";for(var r=e.providers.length-1;r>=0;r--){if(e.providers[r].selected)1,t+=e.providers[r].provider_id+"|"}}if(e.genres.length){n+="&with_genres=";for(r=e.genres.length-1;r>=0;r--){1,n+=e.genres[r].id+e.genreOperator}}return t.slice(0,-1)+n.slice(0,-1)}var se=function(e){var t=Object(r.useContext)(u),n=Object(d.useQueryParams)(),i=Object(o.a)(n,1)[0];return Object(r.useEffect)((function(){var e,n;return window.scrollTo(0,0),(e=i.query,n=i.type,new Promise((function(t,r){switch(n){case 1:return void Z(e).then((function(e){return t(e)}));case 0:return void $(e,1).then((function(e){return t(e)}));case 2:return void $(e,1).then((function(n){Z(e).then((function(e){var r=re(n,e);t(r)}))}))}}))).then((function(e){console.log("here"),t.setViewMore({title:i.title,content:e})})),function(){}}),[]),a.a.createElement("div",{id:"results",className:"viewMoreContainerOuter"},a.a.createElement("div",{className:"viewMoreContainer"},t.viewMore&&t.viewMore.content&&t.viewMore.content.map((function(e,t){return t%12===0?a.a.createElement(v,Object.assign({key:t,providers:e["watch/providers"]},e,{isNavigable:!0})):t%12<5?a.a.createElement(m,Object.assign({size:"large",key:t},e)):t%12<8?a.a.createElement(v,Object.assign({size:"extraSmall",key:t,providers:e["watch/providers"]},e,{isNavigable:!0})):a.a.createElement(m,Object.assign({size:"large",key:t},e))}))),a.a.createElement("div",{className:"viewMoreTitleContainer"},a.a.createElement(F,{title:i.title})))},le=(n(62),function(e){var t=e.id,n=e.type,i=Object(r.useState)(null),c=Object(o.a)(i,2),s=c[0],l=c[1];Object(r.useContext)(u);Object(r.useEffect)((function(){return"tv"===n?function(e){return new Promise((function(t,n){var r="https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat(Q,"&append_to_response=credits,watch/providers,recommended,similar,");K.a.get(r,(function(e){t(e)}))}))}(t).then((function(e){window.scrollTo(0,0),l(e)})):function(e){return new Promise((function(t,n){var r="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(Q,"&append_to_response=credits,watch/providers,recommended,similar,");K.a.get(r,(function(e){t(e)}))}))}(t).then((function(e){window.scrollTo(0,0),l(e)})),function(){}}),[n,t]);var v=s?s["watch/providers"]:[];console.log("watchproviders",v);var p=s&&s.credits&&s.credits.cast?s.credits.cast:[];return s?a.a.createElement("div",{className:"infoOuterContainer ".concat(s&&"isVisible")},a.a.createElement("div",{className:"infoHeroOuterContainer"},a.a.createElement("div",{className:"infoHeroContainer"},a.a.createElement("div",{className:"image",style:{backgroundImage:"url( http://image.tmdb.org/t/p/original/".concat(s.backdrop_path,")")}},a.a.createElement("div",{className:"vGrad"}),a.a.createElement("div",{className:"mixedGrad"})))),a.a.createElement("div",{className:"moreInfoContainer"},a.a.createElement("div",{className:"infoMeta"},a.a.createElement(A,{providers:v}),a.a.createElement("h2",null,s.name||s.title),a.a.createElement("p",{className:"genresList"},function(e){for(var t="",n=0;n<e.length;n++)t+=e[n].name+", ";return t=t.slice(0,-2)}(s.genres)),a.a.createElement("p",{className:"metadata"},function(e){var t="";return e.number_of_seasons?(t+=e.number_of_seasons+" seasons | ",t+=e.first_air_date.slice(0,4),t+=" - ",t+=e.in_production?(new Date).getFullYear():e.last_air_date.slice(0,4)):(t+="".concat(e.runtime,"m"),t+=" | ",t+=e.release_date.slice(0,4)),t}(s)),a.a.createElement("p",{className:"overview"},s.overview)),s&&s.similar&&s.similar&&s.similar.results&&s.similar.results.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"spacer"}),a.a.createElement(S,{title:"Related Titles"}),a.a.createElement("div",{className:"similarContainer"},s&&s.similar&&s.similar&&s.similar.results&&s.similar.results.slice(0,12).map((function(e,t){return a.a.createElement(m,Object.assign({},e,{media_type:n,key:t}))})))),a.a.createElement("div",{className:"spacer"}),a.a.createElement(S,{title:"Cast and crew"}),a.a.createElement("div",{className:"castRail"},p.map((function(e,t){return e.profile_path?a.a.createElement("div",{className:"personOuter"},a.a.createElement("div",{className:"person",onClick:function(){return Object(d.navigate)("/person/")},style:{backgroundImage:"url(https://image.tmdb.org/t/p/w185/".concat(e.profile_path,")")}})):a.a.createElement("div",{key:t})})))),a.a.createElement(F,null)):a.a.createElement("div",null)}),ue=function(){return a.a.createElement("div",{className:"homeContainer"},"404")},de={"/":function(){return a.a.createElement(V,null)},"/watchit/":function(){return a.a.createElement(V,null)},"/watchit/view-more":function(){return a.a.createElement(se,null)},"/watchit/movie/:id":function(e){var t=e.id;return a.a.createElement(le,{type:"movie",id:t})},"/watchit/tv/:id":function(e){var t=e.id;return a.a.createElement(le,{type:"tv",id:t})}},me=function(){var e=Object(d.useRoutes)(de);return a.a.createElement("div",null,e||a.a.createElement(ue,null),";")},ve=[{display_priority:0,logo_path:"/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg",provider_id:8,provider_name:"Netflix"},{display_priority:1,logo_path:"/68MNrwlkpF7WnmNPXLah69CR5cb.jpg",provider_id:9,provider_name:"Amazon Prime Video"},{display_priority:7,logo_path:"/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg",provider_id:337,provider_name:"Disney Plus"},{display_priority:3,logo_path:"/hYrcCS72d2alfXdGS1QXNEvwYDY.jpg",provider_id:39,provider_name:"Now TV"},{display_priority:8,logo_path:"/zLX0ExkHc8xJ9W4u9JgnldDQLKv.jpg",provider_id:29,provider_name:"Sky Go"},{display_priority:9,logo_path:"/kf9hkpOBi73XZiFu4YScYKtGxh2.jpg",provider_id:38,provider_name:"BBC iPlayer"},{display_priority:17,logo_path:"/9LikNB66yMtBPXiWKRHuB45meyN.jpg",provider_id:103,provider_name:"All 4"},{display_priority:19,logo_path:"/ux9BKRR3taBbA3p0d85PhZJnObs.jpg",provider_id:41,provider_name:"ITV Player"},{display_priority:35,logo_path:"/2yL47GH7BQVB3e6jOaFiBkKVV9O.jpg",provider_id:380,provider_name:"BritBox"}],pe=[{name:"ALL",id:2,selected:!0},{name:"SHOWS",id:0},{name:"MOVIES",id:1}],fe=function(e){var t=Object(r.useState)(function(){if(window.localStorage){var e=localStorage.getItem("streamingProviders");if(e){e=Object.assign([],JSON.parse(e));for(var t=0;t<ve.length;t++){e.find((function(e){return e.id===ve.id}))||e.push(ve[t])}return e}return ve}}()),n=Object(o.a)(t,2),i=n[0],c=n[1],s=Object(r.useState)(D),u=Object(o.a)(s,2),d=u[0],m=u[1],v=Object(r.useState)(pe),p=Object(o.a)(v,2),f=p[0],g=p[1],y=Object(r.useState)(1),E=Object(o.a)(y,2),h=E[0],b=(E[1],Object(r.useState)([])),w=Object(o.a)(b,2),O=w[0],j=w[1],N=Object(r.useState)(!1),_=Object(o.a)(N,2),k=(_[0],_[1],Object(r.useState)([])),C=Object(o.a)(k,2),x=C[0],T=C[1],S=Object(r.useState)(!1),G=Object(o.a)(S,2),z=G[0],F=G[1],H=Object(r.useState)({count:0,text:""}),W=Object(o.a)(H,2),A=W[0],L=W[1],R=Object(r.useState)(!1),V=Object(o.a)(R,2),Y=V[0],J=V[1];window.scrollY;function K(e){}return Object(r.useEffect)((function(){ee({genres:d.filter((function(e){return e.selected})),contentTypes:f.filter((function(e){return e.selected})),providers:i.filter((function(e){return e.selected}))}).then((function(e){j(e)}))}),[]),Object(r.useEffect)((function(){return window.addEventListener("scroll",K),function(){window.removeEventListener("scroll",K)}}),[Y]),a.a.createElement(l,{value:{providers:i,setProviders:function(e){c(e),window.scrollTo(0,0),ee({genres:d.filter((function(e){return e.selected})),contentTypes:f.filter((function(e){return e.selected})),providers:i.filter((function(e){return e.selected}))}).then((function(e){j(e)}))},genres:d,setGenres:function(e){m(e),window.scrollTo(0,0),ee({genres:d.filter((function(e){return e.selected})),contentTypes:f.filter((function(e){return e.selected})),providers:i.filter((function(e){return e.selected}))}).then((function(e){j(e)}))},contentTypes:f,setContentTypes:function(e){g(e),window.scrollTo(0,0),ee({genres:d.filter((function(e){return e.selected})),contentTypes:f.filter((function(e){return e.selected})),providers:i.filter((function(e){return e.selected}))}).then((function(e){j(e)}))},nextPage:h,results:O,viewMore:x,setViewMore:T,modal:z,setModal:F,notification:A,setNotification:L,showMenu:Y,setShowMenu:J}},a.a.createElement(me,null),z&&a.a.createElement(M,{title:z.title,description:z.description},"providers"===z.type&&a.a.createElement(q,null),"genres"===z.type&&a.a.createElement(B,null),"mixed"===z.type&&a.a.createElement(I,null)),A&&a.a.createElement(P,A))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.efe6ec7f.chunk.js.map