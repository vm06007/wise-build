(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[17],{1144:function(e,t,a){"use strict";var n=a(2),r=a(15),c=a(0),o=(a(12),a(10)),i=a(22),l=a(108),s=a(76),d=a(199);var u=a(44),m=a(93),b=a(259),p=a(797),f=Object(p.a)(c.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),v=Object(p.a)(c.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),g=Object(p.a)(c.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),h=Object(p.a)(c.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),O=a(38),j=c.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.color,s=void 0===l?"standard":l,d=e.component,u=e.disabled,p=void 0!==u&&u,j=e.page,y=e.selected,E=void 0!==y&&y,x=e.shape,k=void 0===x?"round":x,N=e.size,w=void 0===N?"medium":N,C=e.type,S=void 0===C?"page":C,z=e.variant,P=void 0===z?"text":z,D=Object(r.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),I=("rtl"===Object(m.a)().direction?{previous:h,next:g,last:f,first:v}:{previous:g,next:h,first:f,last:v})[S];return"start-ellipsis"===S||"end-ellipsis"===S?c.createElement("div",{ref:t,className:Object(o.a)(a.root,a.ellipsis,p&&a.disabled,"medium"!==w&&a["size".concat(Object(O.a)(w))])},"\u2026"):c.createElement(b.a,Object(n.a)({ref:t,component:d,disabled:p,focusVisibleClassName:a.focusVisible,className:Object(o.a)(a.root,a.page,a[P],a[k],i,"standard"!==s&&a["".concat(P).concat(Object(O.a)(s))],p&&a.disabled,E&&a.selected,"medium"!==w&&a["size".concat(Object(O.a)(w))])},D),"page"===S&&j,I?c.createElement(I,{className:a.icon}):null)})),y=Object(i.a)((function(e){return{root:Object(n.a)(Object(n.a)({},e.typography.body2),{},{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(u.b)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(u.b)(e.palette.primary.main,.5)),backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(u.b)(e.palette.secondary.main,.5)),backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(j);function E(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var x=c.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,i=e.className,u=e.color,m=void 0===u?"standard":u,b=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),p=void 0===b?E:b,f=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),v=void 0===f?function(e){return c.createElement(y,e)}:f,g=e.shape,h=void 0===g?"round":g,O=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),j=void 0===O?"medium":O,x=e.variant,k=void 0===x?"text":x,N=Object(r.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,c=e.componentName,o=void 0===c?"usePagination":c,i=e.count,u=void 0===i?1:i,m=e.defaultPage,b=void 0===m?1:m,p=e.disabled,f=void 0!==p&&p,v=e.hideNextButton,g=void 0!==v&&v,h=e.hidePrevButton,O=void 0!==h&&h,j=e.onChange,y=e.page,E=e.showFirstButton,x=void 0!==E&&E,k=e.showLastButton,N=void 0!==k&&k,w=e.siblingCount,C=void 0===w?1:w,S=Object(r.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),z=Object(d.a)({controlled:y,default:b,name:o,state:"page"}),P=Object(s.a)(z,2),D=P[0],I=P[1],L=function(e,t){y||I(t),j&&j(e,t)},R=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},A=R(1,Math.min(a,u)),M=R(Math.max(u-a+1,a+1),u),B=Math.max(Math.min(D-C,u-a-2*C-1),a+2),$=Math.min(Math.max(D+C,a+2*C+2),M[0]-2),T=[].concat(Object(l.a)(x?["first"]:[]),Object(l.a)(O?[]:["previous"]),Object(l.a)(A),Object(l.a)(B>a+2?["start-ellipsis"]:a+1<u-a?[a+1]:[]),Object(l.a)(R(B,$)),Object(l.a)($<u-a-1?["end-ellipsis"]:u-a>a?[u-a]:[]),Object(l.a)(M),Object(l.a)(g?[]:["next"]),Object(l.a)(N?["last"]:[])),V=function(e){switch(e){case"first":return 1;case"previous":return D-1;case"next":return D+1;case"last":return u;default:return null}},W=T.map((function(e){return"number"===typeof e?{onClick:function(t){L(t,e)},type:"page",page:e,selected:e===D,disabled:f,"aria-current":e===D?"true":void 0}:{onClick:function(t){L(t,V(e))},type:e,page:V(e),selected:!1,disabled:f||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?D>=u:D<=1)}}));return Object(n.a)({items:W},S)}(Object(n.a)(Object(n.a)({},e),{},{componentName:"Pagination"})).items;return c.createElement("nav",Object(n.a)({"aria-label":"pagination navigation",className:Object(o.a)(a.root,i),ref:t},N),c.createElement("ul",{className:a.ul},w.map((function(e,t){return c.createElement("li",{key:t},v(Object(n.a)(Object(n.a)({},e),{},{color:m,"aria-label":p(e.type,e.page,e.selected),shape:h,size:j,variant:k})))}))))}));t.a=Object(i.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(x)},1174:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Y}));var n=a(27),r=a(0),c=a.n(r),o=a(10),i=a(767),l=a(23),s=a(8),d=a(9),u=a(13),m=a(14),b=a(776),p=a(130),f=a.n(p),v=a(119),g=a(84),h=a(6),O=a.n(h),j=a(158),y=a(43),E=a(773),x=a(769),k=a(771),N=a(780),w=a(115),C=a(1144),S=a(910),z=a.n(S),P=a(909),D=a.n(P),I=a(848),L=a.n(I),R=a(98),A=a.n(R),M=a(131),B=a(132),$=a(49),T=a(92),V=a(185),W=a(813),H=a(183),F=a(73),G=a(103),_=a.n(G),U=Object(r.lazy)((function(){return Promise.all([a.e(3),a.e(4),a.e(25)]).then(a.bind(null,1165))})),K=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(6),a.e(5),a.e(19)]).then(a.bind(null,1139))})),q=Object(r.lazy)((function(){return Promise.all([a.e(2),a.e(16)]).then(a.bind(null,1166))})),J=Object(r.lazy)((function(){return Promise.all([a.e(2),a.e(20)]).then(a.bind(null,1167))})),Q=(new T.a({supportedChainIds:[1,3,4,5,42]}),Object(y.b)((function(e){return{sharePrice:e.SchemeOptions.sharePrice}}))((function(e){var t=Object(r.useState)("WISE"),a=Object(n.a)(t,2),s=a[0],d=a[1],u=Object(r.useState)(!1),m=Object(n.a)(u,2),b=m[0],p=m[1],f=Object(r.useState)(!1),v=Object(n.a)(f,2),h=v[0],y=v[1],S=Object(r.useState)(!1),P=Object(n.a)(S,2),I=P[0],R=P[1],T=Object(w.h)().address,G=function(){d("WISE"),p(!b)},Q=function(){d("ETH"),p(!b)},X=function(e){e.finalDay>0&&Re(e),R(!I)},Y=function(e){e.startDay>0&&Re(e),y(!h)},Z=Object(r.useState)(!0),ee=Object(n.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(r.useState)(!1),re=Object(n.a)(ne,2),ce=re[0],oe=re[1],ie=Object(r.useState)(!1),le=Object(n.a)(ie,2),se=le[0],de=le[1],ue=Object(r.useState)(_.a.get("active-tab")||"Regular"),me=Object(n.a)(ue,2),be=me[0],pe=me[1],fe=Object(r.useState)(null),ve=Object(n.a)(fe,2),ge=ve[0],he=ve[1],Oe=Object(r.useState)(0),je=Object(n.a)(Oe,2),ye=je[0],Ee=je[1],xe=Object(r.useState)(5),ke=Object(n.a)(xe,2),Ne=ke[0],we=ke[1],Ce=Object(r.useState)(0),Se=Object(n.a)(Ce,2),ze=Se[0],Pe=Se[1],De=Object(r.useState)({}),Ie=Object(n.a)(De,2),Le=Ie[0],Re=Ie[1],Ae=Object(r.useState)(0),Me=Object(n.a)(Ae,2),Be=Me[0],$e=Me[1],Te=Object(r.useState)(0),Ve=Object(n.a)(Te,2),We=Ve[0],He=Ve[1],Fe=function(e){st([]),ae(!0),oe(!1);var t=setTimeout((function(){be!==e&&(_.a.set("active-tab",e),pe(e))}),200);return function(){return clearTimeout(t)}},Ge=Object($.b)(),_e=Ge.chainId,Ue=Ge.account,Ke=Ge.connector,qe=c.a.useState(),Je=Object(n.a)(qe,2),Qe=Je[0],Xe=Je[1];Object(r.useEffect)((function(){Qe&&Qe===Ke&&Xe(void 0)}),[Qe,Ke]);var Ye=Object(M.a)();Object(B.a)(!Ye||!!Qe);var Ze=Object(H.a)(_e||1),et=A.a.givenProvider?new A.a(A.a.givenProvider):new A.a(new A.a.providers.HttpProvider(Ze.infuraURL)),tt=Ze.inceptionDay,at=Ue||Ze.zeroAddress;T&&T.includes("0x")&&(at=T);var nt=new et.eth.Contract(V,Ze.tokenAddress),rt=new et.eth.Contract(W,Ze.insuranceAddress),ct=function(){ae(!0),gt(!vt)},ot=Object(r.useState)([]),it=Object(n.a)(ot,2),lt=it[0],st=it[1],dt=Object(r.useState)(!1),ut=Object(n.a)(dt,2),mt=ut[0],bt=ut[1],pt=Object(r.useState)(!1),ft=Object(n.a)(pt,2),vt=ft[0],gt=ft[1];Object(r.useEffect)((function(){!function(){var e=document.querySelector(".app-header"),t=document.querySelector(".dashboard-header");t&&t.scrollIntoView(!1),e&&e.scrollIntoView(!0)}()}),[ye]),Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(O.a.mark((function e(a,n,r,c,o){var i,l,s,d;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=!0,s=o-1-(ye*Ne+n),c!==Ze.insuranceAddress){e.next=8;break}return d={fromBlock:Ze.fromBlock,toBlock:"latest",filter:{stakeID:a}},e.next=8,rt.getPastEvents("EmergencyExitStake",d).then((function(e){e[0]&&(l=e[0].returnValues.currentWiseDay,i=!1)}));case 8:return e.next=10,nt.methods.checkStakeByID(c,a).call().then((function(e){e.index=n,e.stakeIndex=s,e.stakeID=a,e.stakeOwner=c,e.hasOwnership=i,e.currentWiseDay=r,e.currentWiseDayToDate=Object(F.b)(r,tt),e.stakeOwner===Ze.insuranceAddress&&(e.penaltyAmount=e.rewardAmount),!1===i&&(e.isActive=i,e.isPending=i,e.closeDay=l,e.rewardAmount="0",e.penaltyAmount="0"),e.daysLeft=e.isActive?Object(F.a)(parseInt(e.finalDay),parseInt(r)):Object(F.a)(parseInt(e.finalDay),parseInt(e.closeDay)),parseInt(e.daysLeft)>parseInt(e.lockDays)&&0===parseInt(e.closeDay)&&(e.isPending=!0),e.opensDayDate=Object(F.b)(e.startDay-1,tt),e.startDayDate=Object(F.b)(e.startDay,tt),e.finalDayDate=Object(F.b)(e.finalDay,tt),e.closeDayDate=Object(F.b)(e.closeDay,tt),t(e,n),ae(!1)}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a,n,r,c){return e.apply(this,arguments)}}(),t=function(){var e=Object(j.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:st((function(e){var n=Object(g.a)(e);return n[a]=t,n}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a=function(){var t=Object(j.a)(O.a.mark((function t(){var a,n,r,c,o,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,st([]),t.next=4,nt.methods.stakeCount(at).call();case 4:return a=t.sent,$e(a),t.next=8,rt.methods.insuranceStakeCounts(at).call();case 8:return n=t.sent,He(n),t.next=12,nt.methods.currentWiseDay().call();case 12:if(r=t.sent,bt(r),"Regular"!==be){t.next=21;break}return Pe(Math.ceil(a/Ne)),c=null!==ge?ge:ye,o=ge?ze*Ne-a:0,i=ze*Ne-a,t.next=21,nt.methods.stakesPagination(at,c*Ne-o,0===ge?Ne-i:Ne).call().then((function(t){t.length>0?(oe(!0),de(!1),t.forEach((function(n,c){null!==ge&&(c=t.length-c),e(n,c,r,at,a)}))):(oe(!1),de(!0),ae(!1))}));case 21:if("Insurance"!==be){t.next=26;break}if(Pe(Math.ceil(n/Ne)),!rt.methods){t.next=26;break}return t.next=26,rt.methods.stakesPagination(at,ye*Ne,Ne).call().then((function(t){t.length>0?(oe(!0),de(!1),t.forEach((function(t,a){e(t,a,r,Ze.insuranceAddress,n)}))):(oe(!1),de(!0),ae(!1))}));case 26:t.next=30;break;case 28:t.prev=28,t.t0=t.catch(0);case 30:case"end":return t.stop()}}),t,null,[[0,28]])})));return function(){return t.apply(this,arguments)}}();st([]),ae(!0),de(!1),a()}),[Ue,_e,vt,ye,ge,Ne,be]);var ht=Object(r.useState)(0),Ot=Object(n.a)(ht,2),jt=Ot[0],yt=Ot[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Ue){e.next=5;break}return e.next=3,nt.methods.allowance(Ue,Ze.insuranceAddress).call();case 3:t=e.sent,yt(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[Ue,_e,vt,be]);var Et=function(){he(ze-ye-1)},xt=function(){he(null)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{className:"card-box mt-4"},c.a.createElement("div",{className:"card-header d-flex align-items-center justify-content-between card-header-alt mt-2 p-0"},c.a.createElement(x.a,{component:"div",className:"w-100 nav-line justify-content-center d-flex nav-line-alt nav-tabs-primary"},c.a.createElement(k.a,{button:!0,disableRipple:!0,className:"px-5 py-4",selected:"Regular"===be,onClick:function(){Fe("Regular")}},c.a.createElement("span",{className:"font-weight-bold text-uppercase"},c.a.createElement(D.a,{className:"mr-2 ml-0 font-size-xl"}),"REGULAR STAKING (",Be,")"),c.a.createElement("div",{className:"divider"})),c.a.createElement(k.a,{button:!0,disableRipple:!0,className:"px-5 py-4",selected:"Insurance"===be,onClick:function(){Fe("Insurance")}},c.a.createElement("span",{className:"font-weight-bold text-uppercase"},c.a.createElement(L.a,{className:"mr-2 ml-0 font-size-xl"}),"INSURANCE STAKING (",We,")"),c.a.createElement("div",{className:"divider"})),c.a.createElement(k.a,{button:!0,disableRipple:!0,className:"px-5 py-4",selected:"3"===be,onClick:function(){Fe("3")}},c.a.createElement("span",{className:"font-weight-bold text-uppercase"},c.a.createElement(z.a,{className:"mr-2 ml-0 font-size-xl"}),"COLLATERAL STAKING (0)"),c.a.createElement("div",{className:"divider"})))),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:Object(o.a)("tab-item-wrapper",{active:"Insurance"===be}),index:2},c.a.createElement(U,{type:"Insurance",className:Object(o.a)({hidden:te}),web3:et,count:We,stakes:lt,hasLoaded:ce,noResults:se,isLoading:te,handleRefresh:ct,currentDay:mt,toggleStake:G,toggleStakeETH:Q,toggleDetails:X,toggleClose:Y,setPerPage:we,perPage:Ne,ascending:Et,descending:xt,currentPageReverse:ge})),c.a.createElement("div",{className:Object(o.a)("tab-item-wrapper",{active:"3"===be}),index:3},c.a.createElement("div",{className:"text-center p-3 p-lg-5"},c.a.createElement("div",{className:"avatar-icon-wrapper rounded-circle m-0"},c.a.createElement("div",{className:"d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-warning text-warning m-0 d-130"},c.a.createElement(l.a,{icon:["fas","exclamation-triangle"],className:"d-flex align-self-center display-3"}))),c.a.createElement("h4",{className:"font-weight-bold text-warning line-height-sm px-4 mt-5"},"Collateral staking is not available at the moment"),c.a.createElement("p",{className:"mb-0 font-size-lg"},"This service allows to use stakes as collateral for taking loans"),c.a.createElement("div",{className:"pt-5"},c.a.createElement(i.a,{className:"btn-primary",disabled:!0},c.a.createElement("span",{className:"btn-wrapper--label"},"Coming Soon"))))),c.a.createElement("div",{className:Object(o.a)("tab-item-wrapper",{active:"Regular"===be}),index:1},c.a.createElement(U,{type:"Regular",className:Object(o.a)({hidden:te}),web3:et,count:Be,stakes:lt,hasLoaded:ce,noResults:se,isLoading:te,handleRefresh:ct,currentDay:mt,toggleStake:G,toggleStakeETH:Q,toggleDetails:X,toggleClose:Y,setPerPage:we,perPage:Ne,ascending:Et,descending:xt,currentPageReverse:ge})),c.a.createElement("div",{className:"mt-3"}),c.a.createElement("div",{className:"card-footer bg-secondary p-4 d-flex justify-content-center"},c.a.createElement(C.a,{onChange:function(e,t){Ee(t-1)},boundaryCount:1,siblingCount:5,className:"pagination-primary",count:ze}))),c.a.createElement(N.a,{maxWidth:"lg",open:b,classes:{paper:"shadow-lg rounded"}},c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(K,{activeTab:be,defaultCurrency:s,closefunc:G,refresh:ct,allowance:jt}))),c.a.createElement(N.a,{maxWidth:"lg",onClose:function(){X({})},open:I,classes:{paper:"shadow-lg rounded w-100"}},c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(J,{stake:Le,web3:et,wiseContract:nt,account:at,setStakes:st}))),c.a.createElement(N.a,{maxWidth:"md",onClose:function(){Y({})},open:h,classes:{paper:"shadow-lg rounded w-100"}},c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(q,{stake:Le,web3:et,insuranceContract:rt,wiseContract:nt,account:at,setStakes:st}))))}))),X=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,null,c.a.createElement("div",{className:"card-header rounded-0 bg-white px-4 px-lg-4 py-0 border-bottom"},c.a.createElement("div",{className:"py-0 w-100"},c.a.createElement(b.a,{container:!0,spacing:6},c.a.createElement(b.a,{item:!0,md:12,lg:12},c.a.createElement("div",{className:"dashboard-header mt-5 pt-5"},c.a.createElement(v.d,{titleHeading:"Wise Staking",titleDescription:"Time-lock your funds to earn interest",titleIcon:"AccessAlarmTwoToneIcon"}))),c.a.createElement(b.a,{item:!0,md:12,lg:12,className:"pt-0"},c.a.createElement(Q,null)))))))}}]),a}(r.Component);function Y(){var e=Object($.b)().connector,t=c.a.useState(),a=Object(n.a)(t,2),s=a[0],d=a[1];Object(r.useEffect)((function(){s&&s===e&&d(void 0)}),[s,e]);var u=Object(M.a)();Object(B.a)(!u||!!s);var m=Object(r.useState)(!1),b=Object(n.a)(m,2),p=b[0],f=b[1],v=function(){return f(!p)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-block d-lg-flex app-inner-content-layout app-inner-content-layout-fixed"},c.a.createElement("div",{className:"btn-md-pane d-lg-none px-4 order-0"},c.a.createElement(i.a,{onClick:v,size:"large",className:"btn-primary p-0 btn-icon d-40"},c.a.createElement(l.a,{icon:["fas","bookmark"]}))),c.a.createElement("div",{className:Object(o.a)("app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary",{})},c.a.createElement(X,null)),c.a.createElement("div",{onClick:v,className:Object(o.a)("sidebar-inner-layout-overlay",{active:p})})))}},797:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(2),r=a(0),c=a.n(r),o=a(359);function i(e,t){var a=c.a.memo(c.a.forwardRef((function(t,a){return c.a.createElement(o.a,Object(n.a)({ref:a},t),e)})));return a.muiName=o.a.muiName,a}},848:function(e,t,a){"use strict";var n=a(58);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(60)).default)(r.default.createElement("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"}),"VerifiedUserOutlined");t.default=c},909:function(e,t,a){"use strict";var n=a(58);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(60)).default)(r.default.createElement("path",{d:"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}),"AccessAlarm");t.default=c},910:function(e,t,a){"use strict";var n=a(58);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(60)).default)(r.default.createElement("path",{d:"M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z"}),"AccountBalanceOutlined");t.default=c}}]);