(function(e){function t(t){for(var n,l,a=t[0],i=t[1],u=t[2],s=0,b=[];s<a.length;s++)l=a[s],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,a=1;a<c.length;a++){var i=c[a];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=c[0]))}return e}var n={},r={app:0},o=[];function l(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=n,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(c,n,function(t){return e[t]}.bind(null,n));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=i;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"09cf":function(e,t,c){},"225d":function(e,t,c){"use strict";c("7405")},2442:function(e,t,c){"use strict";c("fee3")},"24d2":function(e,t,c){"use strict";c("a001")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("f2bf"),r={class:"info"},o=Object(n["createTextVNode"])("information"),l=Object(n["createElementVNode"])("nav",{class:"top-nav"},[Object(n["createElementVNode"])("img",{src:"https://github.com/Dorifor/bourgeois-maquette/raw/master/public/logo%20platea.png",alt:"logo platea"})],-1),a={class:"side-nav"},i={class:"nav-content"},u={class:"nav-item"},d=Object(n["createTextVNode"])("search"),s={class:"nav-item"},b=Object(n["createTextVNode"])("inventory_2"),O={class:"nav-item"},j=Object(n["createTextVNode"])("settings"),p={class:"nav-item"},m=Object(n["createTextVNode"])("summarize");function f(e,t,c,f,h,V){var N=Object(n["resolveComponent"])("ui-icon"),E=Object(n["resolveComponent"])("router-link"),v=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(N,{size:h.iconSize},{default:Object(n["withCtx"])((function(){return[o]})),_:1},8,["size"])]),l,Object(n["createElementVNode"])("nav",a,[Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("div",u,[Object(n["createVNode"])(E,{to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:h.iconSize},{default:Object(n["withCtx"])((function(){return[d]})),_:1},8,["size"])]})),_:1})]),Object(n["createElementVNode"])("div",s,[Object(n["createVNode"])(E,{exact:"",to:"/inventory"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:h.iconSize},{default:Object(n["withCtx"])((function(){return[b]})),_:1},8,["size"])]})),_:1})]),Object(n["createElementVNode"])("div",O,[Object(n["createVNode"])(E,{exact:"",to:"/settings"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:h.iconSize},{default:Object(n["withCtx"])((function(){return[j]})),_:1},8,["size"])]})),_:1})]),Object(n["createElementVNode"])("div",p,[Object(n["createVNode"])(E,{exact:"",to:"/summary"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{size:h.iconSize},{default:Object(n["withCtx"])((function(){return[m]})),_:1},8,["size"])]})),_:1})])])]),Object(n["createElementVNode"])("main",null,[Object(n["createVNode"])(v)])],64)}var h={data:function(){return{iconSize:36}}},V=(c("24d2"),c("d959")),N=c.n(V),E=N()(h,[["render",f]]),v=c("f22e"),k=c("3d84"),g=c.n(k),y=(c("8013"),c("6c02")),w=Object(n["createElementVNode"])("h2",null,"Je cherche...",-1),S={class:"search-container"},x=Object(n["createTextVNode"])("search"),C=Object(n["createElementVNode"])("hr",null,null,-1);function B(e,t,c,r,o,l){var a=Object(n["resolveComponent"])("ui-icon");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[w,Object(n["createElementVNode"])("div",S,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",class:"search-bar","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.keywords=e}),placeholder:"Une référence (A001, B002, ...), un interlocuteur, une commande...",onInput:t[1]||(t[1]=function(){return l.handleSearch&&l.handleSearch.apply(l,arguments)})},null,544),[[n["vModelText"],o.keywords]]),Object(n["createVNode"])(a,{class:"search-icon",size:"36"},{default:Object(n["withCtx"])((function(){return[x]})),_:1})]),C,Object(n["createVNode"])(n["Transition"],{name:"fade",mode:"out-in"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(o.keywords?"AccueilSearch":"AccueilBase"),{"produits-liste":o.fetchedProduits,keywords:o.keywords},null,8,["produits-liste","keywords"]))]})),_:1})],64)}var _=c("bc3a"),A=c.n(_),T={class:"grid-accueil"},P={class:"card-state"},z=Object(n["createElementVNode"])("h3",null,"Etat",-1),M=Object(n["createElementVNode"])("strong",null,"Stock",-1),R={class:"stock"},D={class:"vestuste"},I=Object(n["createElementVNode"])("p",null,[Object(n["createElementVNode"])("strong",null,"Vétusté")],-1),F=Object(n["createElementVNode"])("section",{class:"card-price"},[Object(n["createElementVNode"])("h3",null,"Prix"),Object(n["createElementVNode"])("p",null,"Tonne du plastique"),Object(n["createElementVNode"])("hr"),Object(n["createElementVNode"])("h3",null,"Délai"),Object(n["createElementVNode"])("p",null,"2 semaines")],-1),U={class:"card-declare"},L={class:"declare-input"},$=Object(n["createElementVNode"])("h3",null,"Je déclare",-1),q=Object(n["createTextVNode"])("Valider"),J={class:"card-history"},Y=Object(n["createElementVNode"])("h3",null,"Historique",-1),H=Object(n["createTextVNode"])("arrow_forward"),G=Object(n["createElementVNode"])("p",null,[Object(n["createElementVNode"])("span",{class:"hour"},"8:30"),Object(n["createElementVNode"])("span",{class:"date"},"10 mai 2021")],-1),K=Object(n["createElementVNode"])("hr",null,null,-1),Q=Object(n["createTextVNode"])("Historique Complet");function W(e,t,c,r,o,l){var a=Object(n["resolveComponent"])("ui-progress"),i=Object(n["resolveComponent"])("ui-select"),u=Object(n["resolveComponent"])("ui-button"),d=Object(n["resolveComponent"])("ui-icon");return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",T,[Object(n["createElementVNode"])("section",P,[z,Object(n["createElementVNode"])("p",null,[M,Object(n["createElementVNode"])("span",R,Object(n["toDisplayString"])(o.currentStock)+" / "+Object(n["toDisplayString"])(o.maxStock),1)]),Object(n["createElementVNode"])("div",D,[I,Object(n["createElementVNode"])("figure",null,[Object(n["createVNode"])(a,{class:"progress-bar",label:"Vétusté",progress:"0.4",buffer:"1"})])])]),F,Object(n["createElementVNode"])("section",U,[Object(n["createElementVNode"])("div",L,[$,Object(n["createVNode"])(i,{options:o.declareOptions,modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.selected=t})},null,8,["options","modelValue"])]),Object(n["createVNode"])(u,{unelevated:"",icon:"check"},{default:Object(n["withCtx"])((function(){return[q]})),_:1})]),Object(n["createElementVNode"])("section",J,[Y,(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(3,(function(e){return Object(n["createElementVNode"])("div",{class:"command",key:e},[Object(n["createElementVNode"])("h5",null,"Commande "+Object(n["toDisplayString"])(e),1),Object(n["createVNode"])(d,{size:"12",class:"arrow-icon"},{default:Object(n["withCtx"])((function(){return[H]})),_:1}),G,K])})),64)),Object(n["createVNode"])(u,{unelevated:""},{default:Object(n["withCtx"])((function(){return[Q]})),_:1})])])}var X={data:function(){return{currentStock:152,maxStock:2e3,declareOptions:[{label:"Arrivée de stock",value:"gotStock"},{label:"Plus de stock",value:"noStock"},{label:"Erreur de réception",value:"receptionError"},{label:"Oui",value:"yes"}]}}},Z=(c("225d"),N()(X,[["render",W]])),ee=(c("b0c0"),c("fb6a"),c("a4d3"),c("e01a"),["onClick"]),te=["src","alt"],ce={class:"produit-content"},ne=Object(n["createTextVNode"])("arrow_forward");function re(e,t,c,r,o,l){var a=Object(n["resolveComponent"])("ui-icon");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Transition"],{name:"fade",mode:"out-in"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(),Object(n["createElementBlock"])("main",{class:"search-grid",key:e.$props.keywords},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.$props.produitsListe,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",{class:"produit",key:e.slug,tag:"div",onClick:function(t){return l.handleClickProduit(e.slug)}},[Object(n["createElementVNode"])("img",{src:"https://bourgeois-eu.herokuapp.com".concat(e.plans[0].url),alt:e.plans[0].name},null,8,te),Object(n["createElementVNode"])("div",ce,[Object(n["createElementVNode"])("h4",null,Object(n["toDisplayString"])(e.slug)+" - "+Object(n["toDisplayString"])(e.libelle),1),Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.description.slice(0,120))+"...",1)]),Object(n["createVNode"])(a,{size:"12",class:"arrow-icon"},{default:Object(n["withCtx"])((function(){return[ne]})),_:1})],8,ee)})),128))]))]})),_:1})}var oe={props:{produitsListe:Array,keywords:String},methods:{handleClickProduit:function(e){this.$router.push("/produit/".concat(e))}}},le=(c("2442"),N()(oe,[["render",re],["__scopeId","data-v-0ce45fd9"]])),ae={components:{AccueilBase:Z,AccueilSearch:le},data:function(){return{keywords:"",fetchedProduits:[]}},methods:{handleSearch:function(){this.keywords?this.fetchProduits(this.keywords):this.fetchedProduits=[]},fetchProduits:function(e){var t=this;A.a.get("https://bourgeois-eu.herokuapp.com/produits?slug_contains=".concat(e)).then((function(e){console.log(e.data),t.fetchedProduits=e.data})).catch((function(e){return console.log(e)}))}}},ie=(c("d4a5"),N()(ae,[["render",B]])),ue=Object(n["createElementVNode"])("h1",null,"INVENTAIRE",-1),de=Object(n["createElementVNode"])("h1",null,"INVENTAIRE",-1),se=Object(n["createElementVNode"])("h1",null,"INVENTAIRE",-1),be=Object(n["createElementVNode"])("h1",null,"INVENTAIRE",-1),Oe=[ue,de,se,be];function je(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,Oe)}const pe={};var me=N()(pe,[["render",je]]),fe=Object(n["createElementVNode"])("h1",null,"PARAMETRES",-1),he=Object(n["createElementVNode"])("h1",null,"PARAMETRES",-1),Ve=Object(n["createElementVNode"])("h1",null,"PARAMETRES",-1),Ne=Object(n["createElementVNode"])("h1",null,"PARAMETRES",-1),Ee=[fe,he,Ve,Ne];function ve(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,Ee)}const ke={};var ge=N()(ke,[["render",ve]]),ye=Object(n["createElementVNode"])("h1",null,"SUMMARY",-1),we=Object(n["createElementVNode"])("h1",null,"SUMMARY",-1),Se=Object(n["createElementVNode"])("h1",null,"SUMMARY",-1),xe=Object(n["createElementVNode"])("h1",null,"SUMMARY",-1),Ce=[ye,we,Se,xe];function Be(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,Ce)}const _e={};var Ae=N()(_e,[["render",Be]]),Te=function(e){return Object(n["pushScopeId"])("data-v-f38f6a22"),e=e(),Object(n["popScopeId"])(),e},Pe={class:"content"},ze=Te((function(){return Object(n["createElementVNode"])("hr",null,null,-1)})),Me=Te((function(){return Object(n["createElementVNode"])("iframe",{id:"d6c1f27d-6a27-4c7e-bd7d-bd19d7faa56c",src:"https://www.vectary.com/viewer/v1/?model=d6c1f27d-6a27-4c7e-bd7d-bd19d7faa56c&turntable=-2",frameborder:"0",width:"100%",height:"480"},null,-1)})),Re={class:"documents"},De=Te((function(){return Object(n["createElementVNode"])("h4",null,"Plans",-1)})),Ie=Te((function(){return Object(n["createElementVNode"])("hr",{class:"divider"},null,-1)})),Fe=["src","alt"],Ue=Te((function(){return Object(n["createElementVNode"])("h4",null,"Cahier des charges",-1)})),Le=Te((function(){return Object(n["createElementVNode"])("hr",{class:"divider"},null,-1)})),$e={class:"cdc-container"},qe=["onClick"],Je=Object(n["createTextVNode"])("attachment");function Ye(e,t,c,r,o,l){var a=Object(n["resolveComponent"])("ui-icon");return Object(n["openBlock"])(),Object(n["createElementBlock"])("main",null,[Object(n["createElementVNode"])("section",Pe,[Object(n["createElementVNode"])("h2",null,Object(n["toDisplayString"])(o.produit.slug)+" - "+Object(n["toDisplayString"])(o.produit.libelle),1),ze,Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(o.produit.description),1),Object(n["createElementVNode"])("h3",null,"prix : "+Object(n["toDisplayString"])(o.produit.prix)+"€",1),Me]),Object(n["createElementVNode"])("section",Re,[De,Ie,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.produit.plans,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{src:"https://bourgeois-eu.herokuapp.com".concat(e.url),alt:"plan numero ".concat(e.id),key:e.id},null,8,Fe)})),128)),Ue,Le,Object(n["createElementVNode"])("div",$e,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.cdc,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",{class:"file",key:e.id,onClick:function(t){return l.handleClickFile(e.url)}},[Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.name),1),Object(n["createVNode"])(a,null,{default:Object(n["withCtx"])((function(){return[Je]})),_:1})],8,qe)})),128))])])])}var He={data:function(){return{produit:{},cdc:[]}},mounted:function(){var e=this,t=this.$route.params.slug;A.a.get("https://bourgeois-eu.herokuapp.com/produits?slug=".concat(t)).then((function(t){e.produit=t.data[0],e.cdc=e.produit.cahier_des_charges})).catch((function(e){return console.log(e)}))},methods:{handleClickFile:function(e){window.open("https://bourgeois-eu.herokuapp.com".concat(e))}}},Ge=(c("79c6"),N()(He,[["render",Ye],["__scopeId","data-v-f38f6a22"]])),Ke=[{path:"/",name:"Accueil",component:ie},{path:"/inventory",name:"Inventory",component:me},{path:"/settings",name:"Settings",component:ge},{path:"/summary",name:"Summary",component:Ae},{path:"/produit/:slug",name:"Produit",component:Ge}],Qe=Object(y["a"])({history:Object(y["b"])(),routes:Ke}),We=Qe,Xe=Object(n["createApp"])(E).use(We);Xe.use(v["a"],{$theme:{primary:"#75be00"}}),Xe.use(g.a),Xe.mount("#app")},"73cd":function(e,t,c){},7405:function(e,t,c){},"79c6":function(e,t,c){"use strict";c("73cd")},a001:function(e,t,c){},d4a5:function(e,t,c){"use strict";c("09cf")},fee3:function(e,t,c){}});
//# sourceMappingURL=app.08756854.js.map