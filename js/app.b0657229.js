(function(e){function t(t){for(var n,a,l=t[0],i=t[1],u=t[2],d=0,b=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(b.length)b.shift()();return r.push.apply(r,u||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,l=1;l<c.length;l++){var i=c[l];0!==o[i]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=c[0]))}return e}var n={},o={app:0},r=[];function a(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=n,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(c,n,function(t){return e[t]}.bind(null,n));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},1918:function(e,t,c){},"2b80":function(e,t,c){"use strict";c("1918")},"3af3":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("f2bf"),o={class:"info"},r=Object(n["createTextVNode"])("information"),a={class:"top-nav"},l=["src"],i={class:"main-nav"},u={class:"nav-content"},s={class:"nav-item"},d=Object(n["createTextVNode"])("search"),b={class:"nav-item"},O=Object(n["createTextVNode"])("inventory_2"),j={class:"nav-item"},p=Object(n["createTextVNode"])("settings"),m={class:"nav-item"},h=Object(n["createTextVNode"])("summarize");function f(e,t,c,f,N,E){var V=Object(n["resolveComponent"])("ui-icon"),v=Object(n["resolveComponent"])("router-link"),k=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",o,[Object(n["createVNode"])(V,{size:N.iconSize},{default:Object(n["withCtx"])((function(){return[r]})),_:1},8,["size"])]),Object(n["createElementVNode"])("nav",a,[Object(n["createElementVNode"])("img",{src:"".concat(N.publicPath,"logo platea.png"),alt:"logo platea"},null,8,l)]),Object(n["createElementVNode"])("nav",i,[Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",s,[Object(n["createVNode"])(v,{to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,{size:N.iconSize},{default:Object(n["withCtx"])((function(){return[d]})),_:1},8,["size"])]})),_:1})]),Object(n["createElementVNode"])("div",b,[Object(n["createVNode"])(v,{exact:"",to:"/inventory"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,{size:N.iconSize},{default:Object(n["withCtx"])((function(){return[O]})),_:1},8,["size"])]})),_:1})]),Object(n["createElementVNode"])("div",j,[Object(n["createVNode"])(v,{exact:"",to:"/settings"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,{size:N.iconSize},{default:Object(n["withCtx"])((function(){return[p]})),_:1},8,["size"])]})),_:1})]),Object(n["createElementVNode"])("div",m,[Object(n["createVNode"])(v,{exact:"",to:"/summary"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,{size:N.iconSize},{default:Object(n["withCtx"])((function(){return[h]})),_:1},8,["size"])]})),_:1})])])]),Object(n["createElementVNode"])("main",null,[Object(n["createVNode"])(k)])],64)}var N={data:function(){return{iconSize:36,publicPath:""}}},E=(c("2b80"),c("d959")),V=c.n(E);const v=V()(N,[["render",f]]);var k=v,g=c("f22e"),y=c("3d84"),w=c.n(y),S=(c("8013"),c("6c02")),I=Object(n["createElementVNode"])("h2",null,"Je cherche...",-1),x={class:"search-container"},C=["placeholder","value"],B=Object(n["createTextVNode"])("search"),A=Object(n["createElementVNode"])("hr",null,null,-1);function T(e,t,c,o,r,a){var l=Object(n["resolveComponent"])("ui-icon");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[I,Object(n["createElementVNode"])("div",x,[Object(n["createElementVNode"])("input",{type:"text",class:"search-bar",placeholder:r.innerWidth>400?"Une référence, un interlocuteur, une commande...":"Rechercher...",value:r.keywords,onInput:t[0]||(t[0]=function(e){return a.handleSearch(e)})},null,40,C),Object(n["createVNode"])(l,{class:"search-icon",size:"36"},{default:Object(n["withCtx"])((function(){return[B]})),_:1})]),A,Object(n["createVNode"])(n["Transition"],{name:"fade",mode:"out-in"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(r.keywords?"AccueilSearch":"AccueilBase"),{"produits-liste":r.fetchedProduits,keywords:r.keywords,loading:r.loading,noData:r.noData},null,8,["produits-liste","keywords","loading","noData"]))]})),_:1})],64)}var R=c("bc3a"),_=c.n(R),P={class:"grid-accueil"},D={class:"card-state"},z=Object(n["createElementVNode"])("h3",null,"Etat",-1),M=Object(n["createElementVNode"])("strong",null,"Stock",-1),F={class:"stock"},L={class:"vestuste"},U=Object(n["createElementVNode"])("p",null,[Object(n["createElementVNode"])("strong",null,"Vétusté")],-1),J=Object(n["createElementVNode"])("section",{class:"card-price"},[Object(n["createElementVNode"])("h3",null,"Prix"),Object(n["createElementVNode"])("p",null,"Tonne du plastique"),Object(n["createElementVNode"])("hr"),Object(n["createElementVNode"])("h3",null,"Délai"),Object(n["createElementVNode"])("p",null,"2 semaines")],-1),$={class:"card-declare"},q={class:"declare-input"},Y=Object(n["createElementVNode"])("h3",null,"Je déclare",-1),W=Object(n["createTextVNode"])("Valider"),H={class:"card-history"},G=Object(n["createElementVNode"])("h3",null,"Historique",-1),K=Object(n["createTextVNode"])("arrow_forward"),Q=Object(n["createElementVNode"])("p",null,[Object(n["createElementVNode"])("span",{class:"hour"},"8:30"),Object(n["createElementVNode"])("span",{class:"date"},"10 mai 2021")],-1),X=Object(n["createElementVNode"])("hr",null,null,-1),Z=Object(n["createTextVNode"])("Historique Complet");function ee(e,t,c,o,r,a){var l=Object(n["resolveComponent"])("ui-progress"),i=Object(n["resolveComponent"])("ui-select"),u=Object(n["resolveComponent"])("ui-button"),s=Object(n["resolveComponent"])("ui-icon");return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",P,[Object(n["createElementVNode"])("section",D,[z,Object(n["createElementVNode"])("p",null,[M,Object(n["createElementVNode"])("span",F,Object(n["toDisplayString"])(r.currentStock)+" / "+Object(n["toDisplayString"])(r.maxStock),1)]),Object(n["createElementVNode"])("div",L,[U,Object(n["createElementVNode"])("figure",null,[Object(n["createVNode"])(l,{class:"progress-bar",label:"Vétusté",progress:"0.4",buffer:"1"})])])]),J,Object(n["createElementVNode"])("section",$,[Object(n["createElementVNode"])("div",q,[Y,Object(n["createVNode"])(i,{options:r.declareOptions,modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.selected=t})},null,8,["options","modelValue"])]),Object(n["createVNode"])(u,{unelevated:"",icon:"check"},{default:Object(n["withCtx"])((function(){return[W]})),_:1})]),Object(n["createElementVNode"])("section",H,[G,(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(3,(function(e){return Object(n["createElementVNode"])("div",{class:"command",key:e},[Object(n["createElementVNode"])("h5",null,"Commande "+Object(n["toDisplayString"])(e),1),Object(n["createVNode"])(s,{size:"12",class:"arrow-icon"},{default:Object(n["withCtx"])((function(){return[K]})),_:1}),Q,X])})),64)),Object(n["createVNode"])(u,{unelevated:""},{default:Object(n["withCtx"])((function(){return[Z]})),_:1})])])}var te={data:function(){return{currentStock:152,maxStock:2e3,declareOptions:[{label:"Arrivée de stock",value:"gotStock"},{label:"Plus de stock",value:"noStock"},{label:"Erreur de réception",value:"receptionError"},{label:"Oui",value:"yes"}]}}};c("960f");const ce=V()(te,[["render",ee]]);var ne=ce,oe=(c("b0c0"),c("fb6a"),c("a4d3"),c("e01a"),function(e){return Object(n["pushScopeId"])("data-v-2f5cba2a"),e=e(),Object(n["popScopeId"])(),e}),re={key:1,class:"notice"},ae=oe((function(){return Object(n["createElementVNode"])("h3",null,"Désolé... Je n'ai rien trouvé !",-1)})),le=[ae],ie=["onClick"],ue=["src","alt"],se={class:"produit-content"},de=Object(n["createTextVNode"])("arrow_forward");function be(e,t,c,o,r,a){var l=Object(n["resolveComponent"])("ui-spinner"),i=Object(n["resolveComponent"])("ui-icon");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Transition"],{name:"fade",mode:"out-in"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(),Object(n["createElementBlock"])("main",{class:"search-grid",key:e.$props.keywords},[c.loading?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,active:""})):Object(n["createCommentVNode"])("",!0),c.noData?(Object(n["openBlock"])(),Object(n["createElementBlock"])("section",re,le)):Object(n["createCommentVNode"])("",!0),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.$props.produitsListe,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",{class:"produit",key:e.slug,tag:"div",onClick:function(t){return a.handleClickProduit(e.slug)}},[Object(n["createElementVNode"])("img",{src:"https://bourgeois-eu.herokuapp.com".concat(e.plans[0].url),alt:e.plans[0].name},null,8,ue),Object(n["createElementVNode"])("div",se,[Object(n["createElementVNode"])("h4",null,Object(n["toDisplayString"])(e.slug)+" - "+Object(n["toDisplayString"])(e.libelle),1),Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.description.slice(0,120))+"...",1)]),Object(n["createVNode"])(i,{size:"12",class:"arrow-icon"},{default:Object(n["withCtx"])((function(){return[de]})),_:1})],8,ie)})),128))]))]})),_:1})}var Oe={props:{produitsListe:Array,keywords:String,loading:Boolean,noData:Boolean},methods:{handleClickProduit:function(e){this.$router.push("/produit/".concat(e))}}};c("b59d");const je=V()(Oe,[["render",be],["__scopeId","data-v-2f5cba2a"]]);var pe=je,me={components:{AccueilBase:ne,AccueilSearch:pe},data:function(){return{keywords:"",fetchedProduits:[],innerWidth:window.innerWidth,loading:!0,noData:!1}},methods:{handleSearch:function(e){this.keywords=e.target.value,this.keywords?this.fetchProduits(this.keywords):this.fetchedProduits=[]},fetchProduits:function(e){var t=this;_.a.get("https://bourgeois-eu.herokuapp.com/produits?slug_contains=".concat(e)).then((function(e){console.log(e.data),t.loading=!1,t.noData=0==e.data.length,t.fetchedProduits=e.data})).catch((function(e){return console.log(e)}))}}};c("a722");const he=V()(me,[["render",T]]);var fe=he,Ne=Object(n["createStaticVNode"])("<h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1><h1>INVENTAIRE</h1>",20),Ee=[Ne];function Ve(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,Ee)}const ve={},ke=V()(ve,[["render",Ve]]);var ge=ke,ye=Object(n["createElementVNode"])("h1",null,"PARAMETRES",-1),we=Object(n["createElementVNode"])("h1",null,"PARAMETRES",-1),Se=Object(n["createElementVNode"])("h1",null,"PARAMETRES",-1),Ie=Object(n["createElementVNode"])("h1",null,"PARAMETRES",-1),xe=[ye,we,Se,Ie];function Ce(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,xe)}const Be={},Ae=V()(Be,[["render",Ce]]);var Te=Ae,Re=Object(n["createElementVNode"])("h1",null,"SUMMARY",-1),_e=Object(n["createElementVNode"])("h1",null,"SUMMARY",-1),Pe=Object(n["createElementVNode"])("h1",null,"SUMMARY",-1),De=Object(n["createElementVNode"])("h1",null,"SUMMARY",-1),ze=[Re,_e,Pe,De];function Me(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,ze)}const Fe={},Le=V()(Fe,[["render",Me]]);var Ue=Le,Je=function(e){return Object(n["pushScopeId"])("data-v-2b6d6f45"),e=e(),Object(n["popScopeId"])(),e},$e={class:"content"},qe=Je((function(){return Object(n["createElementVNode"])("hr",null,null,-1)})),Ye={class:"documents"},We=Je((function(){return Object(n["createElementVNode"])("h4",null,"Plans",-1)})),He=Je((function(){return Object(n["createElementVNode"])("hr",{class:"divider"},null,-1)})),Ge=["src","alt"],Ke=Je((function(){return Object(n["createElementVNode"])("h4",null,"Cahier des charges",-1)})),Qe=Je((function(){return Object(n["createElementVNode"])("hr",{class:"divider"},null,-1)})),Xe={class:"cdc-container"},Ze=["onClick"],et=Object(n["createTextVNode"])("attachment");function tt(e,t,c,o,r,a){var l=Object(n["resolveComponent"])("model-viewer"),i=Object(n["resolveComponent"])("ui-icon");return Object(n["openBlock"])(),Object(n["createElementBlock"])("main",null,[Object(n["createElementVNode"])("section",$e,[Object(n["createElementVNode"])("h2",null,Object(n["toDisplayString"])(r.produit.slug)+" - "+Object(n["toDisplayString"])(r.produit.libelle),1),qe,Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(r.produit.description),1),Object(n["createElementVNode"])("h3",null,"prix : "+Object(n["toDisplayString"])(r.produit.prix)+"€",1),Object(n["createVNode"])(l,{src:"".concat(r.publicPath,"drill.glb"),alt:"A 3D model of an astronaut",ar:"","ar-modes":"webxr scene-viewer quick-look","environment-image":"neutral","auto-rotate":"","camera-controls":"",orientation:"0 0 180"},null,8,["src"])]),Object(n["createElementVNode"])("section",Ye,[We,He,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.produit.plans,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{src:"https://bourgeois-eu.herokuapp.com".concat(e.url),alt:"plan numero ".concat(e.id),key:e.id},null,8,Ge)})),128)),Ke,Qe,Object(n["createElementVNode"])("div",Xe,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.cdc,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",{class:"file",key:e.id,onClick:function(t){return a.handleClickFile(e.url)}},[Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.name),1),Object(n["createVNode"])(i,null,{default:Object(n["withCtx"])((function(){return[et]})),_:1})],8,Ze)})),128))])])])}var ct={data:function(){return{produit:{},cdc:[],publicPath:""}},mounted:function(){var e=this,t=this.$route.params.slug;_.a.get("https://bourgeois-eu.herokuapp.com/produits?slug=".concat(t)).then((function(t){e.produit=t.data[0],e.cdc=e.produit.cahier_des_charges})).catch((function(e){return console.log(e)}))},methods:{handleClickFile:function(e){window.open("https://bourgeois-eu.herokuapp.com".concat(e))}}};c("e3d1");const nt=V()(ct,[["render",tt],["__scopeId","data-v-2b6d6f45"]]);var ot=nt,rt=[{path:"/",name:"Accueil",component:fe},{path:"/inventory",name:"Inventory",component:ge},{path:"/settings",name:"Settings",component:Te},{path:"/summary",name:"Summary",component:Ue},{path:"/produit/:slug",name:"Produit",component:ot}],at=Object(S["a"])({history:Object(S["b"])(),routes:rt}),lt=at,it=Object(n["createApp"])(k).use(lt);it.use(g["a"],{$theme:{primary:"#75be00"}}),it.use(w.a),it.mount("#app")},"5b46":function(e,t,c){},"960f":function(e,t,c){"use strict";c("3af3")},9859:function(e,t,c){},a722:function(e,t,c){"use strict";c("5b46")},b59d:function(e,t,c){"use strict";c("d679")},d679:function(e,t,c){},e3d1:function(e,t,c){"use strict";c("9859")}});
//# sourceMappingURL=app.b0657229.js.map