(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[16],{1166:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(27),r=a(6),s=a.n(r),c=a(158),l=a(0),o=a.n(l),i=a(23),d=a(183),u=a(49),m=a(841),f=a(787),p=a.n(f),h=a(815),b=a(776),k=a(773),v=a(767),E=a(857),g=a(1171),y=a(800),x=a(814),O=a(840),N=a.n(O);function w(e){var t=Object(u.b)().chainId,a=e.web3,r=e.wiseContract,f=e.insuranceContract,O=e.account,w=e.setStakes,j=Object(d.a)(parseInt(t)),C=Object(l.useRef)(!0),D=e.stake||{},I=parseFloat(a.utils.fromWei(D.stakedAmount))-parseFloat(a.utils.fromWei(D.penaltyAmount))+parseFloat(a.utils.fromWei(D.rewardAmount));Object(l.useEffect)((function(){(function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a={fromBlock:j.fromBlock,toBlock:"latest",filter:{stakeID:t}},n=A&&!W?"EmergencyExitStake":"StakeEnd",(A&&!W?f:r).getPastEvents(n,a).then((function(e){e[0]&&de(e[0].transactionHash)}))}catch(s){console.log("investmentsOnSelectedDay: ",s)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(D.stakeID)}));var S=e.stake?100*(1-D.daysLeft/D.lockDays):0,P=100===parseInt(S)?"neutral":D.isActive?"warning":"danger",W=100===parseInt(S),A=D.stakeOwner===j.insuranceAddress,R=A?"insurance":"regular";A&&W&&(I=parseFloat(a.utils.fromWei(D.stakedAmount))+parseFloat(10*a.utils.fromWei(D.stakedAmount)/90)+parseFloat(a.utils.fromWei(D.rewardAmount)));var F,T,M={PENDING:{text:"Close Stake",colorClass:"primary",colorClassAlt:"primary",icon:"hourglass-start",messageID:1,disabled:A},ONGOING:{text:"Terminate Stake",colorClass:"warning",icon:"bell",messageID:2,colorClassAlt:"danger",disabled:!1},MATURED:{text:"Collect Payout",colorClass:"success",icon:"check",messageID:3,colorClassAlt:"success",disabled:!1},CLOSED:{text:"Stake Closed",colorClass:"dark",icon:"hourglass-end",messageID:4,colorClassAlt:"dark",disabled:!0}},z=D.isPending?M.PENDING:D.isActive?parseInt(S)<100?M.ONGOING:M.MATURED:M.CLOSED,_=(F=parseFloat(S),F<0?0:F).toFixed(2),L=Object(m.a)(h.a)({color:"#dc004d",marginLeft:"1em"}),B=z.text,G=z.disabled,V={NORMAL:{text:B,disabled:G},DONE:{text:"Stake Closed",disabled:!0},CONFIRM:{text:"Confirm Transaction",disabled:!0},CLOSING:{text:"Closing Stake",disabled:!0}},H=function(e){$((function(t){$(e),X(V[e].disabled),ae(V[e].text)}))},Y=Object(l.useState)("NORMAL"),J=Object(n.a)(Y,2),U=J[0],$=J[1];T=U,!1&&console.log(T);var q=Object(l.useState)(G),K=Object(n.a)(q,2),Q=K[0],X=K[1],Z=Object(l.useState)(B),ee=Object(n.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(l.useState)(z),re=Object(n.a)(ne,2),se=re[0],ce=re[1],le=Object(l.useState)(null),oe=Object(n.a)(le,2),ie=oe[0],de=oe[1],ue="",me=0,fe=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H("CONFIRM"),ue="",me=0,t=r,a=D.stakeID,A&&(t=f,a=D.stakeIndex),t.methods.endStake(a).send({from:O}).on("transactionHash",(function(e){C.current&&(de(e),H("CLOSING"),ue=e)})).on("confirmation",(function(e,t){t.transactionHash===ue&&me++,C.current&&1===me&&(ce(M.CLOSED),H("DONE"),D.isPending=!1,D.isActive=!1,D.closeDay=D.currentWiseDay,D.closeDayDate=D.currentWiseDayToDate,w(D.stake.index),ce(M.CLOSED))})).on("receipt",(function(e){ce(M.CLOSED)})).on("error",(function(e){C.current&&(H("NORMAL"),de(null))}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{container:!0,className:"w-100"},o.a.createElement(b.a,{item:!0,md:12,className:"d-flex w-100"},o.a.createElement(k.a,{className:"card-box w-100"},o.a.createElement("div",{className:"card-header d-flex justify-content-between"},o.a.createElement("h4",{className:"font-size-lg mb-0 py-2 font-weight-bold"},"Stake Closing Summary"),o.a.createElement("a",{href:"/docs#sec-2-3-5",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(v.a,{className:"mr-1 p-0 mb-1 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",variant:"outlined"},o.a.createElement(i.a,{icon:["far","question-circle"],className:"font-size-sm"})))),o.a.createElement(E.a,{className:"p-0"},o.a.createElement("div",{className:"card-header"},o.a.createElement(g.a,{icon:!1,className:"alerts-alternate my-2",severity:"".concat(se.colorClass)},o.a.createElement("div",{className:"d-flex align-items-center align-content-start"},o.a.createElement("span",{className:"font-size-lg d-block d-40 btn-icon mr-3 px-2 text-center bg-".concat(se.colorClassAlt," text-white rounded-sm")},o.a.createElement(i.a,{icon:["fas","".concat(se.icon)]})),1===se.messageID&&o.a.createElement("div",null,A?o.a.createElement("span",null,"Your stake with ID ",o.a.createElement("b",null,o.a.createElement(y.a,{v:D.stakeID}))," is currently in ",o.a.createElement("b",null,"Pending State")," and will start ",o.a.createElement("b",null,"Tomorrow"),". Insurance stakes can't be closed same day, there is no further action you need to take until this insurance stake starts."):o.a.createElement("span",null,"Your stake with ID ",o.a.createElement("b",null,o.a.createElement(y.a,{v:D.stakeID}))," is currently in ",o.a.createElement("b",null,"Pending State"),". It is safe to close any pending stake only during the same day of creation. No penalties applied for closing pending stakes.")),2===se.messageID&&o.a.createElement("span",null,"Warning! Your ",R," stake with ID ",o.a.createElement("b",null,o.a.createElement(y.a,{v:D.stakeID}))," has not yet matured. Terminating this "," stake will result in penalties, to confirm stake termination click on the ",o.a.createElement("b",null,"Terminate Stake")," button below."),3===se.messageID&&o.a.createElement("span",null,"Congratulations! Your ",R," stake with ID ",o.a.createElement("b",null,o.a.createElement(y.a,{v:D.stakeID}))," has matured. It is now safe to collect payout and close this stake. To proceed please click on the ",o.a.createElement("b",null,"Collect Payout")," button below."),4===se.messageID&&o.a.createElement("span",null,"Your ",R," stake with ID ",o.a.createElement("b",null,o.a.createElement(y.a,{v:D.stakeID}))," has been closed. To verify the results and review details of this ",R," stake closing transaction please click on the ",o.a.createElement("b",null,"Transaction Completed")," link below.")))),o.a.createElement("div",{className:"d-flex w-100 flex-column flex-grow-1 justify-content-center w-100"},o.a.createElement(b.a,{container:!0,spacing:0,className:"w-100"},o.a.createElement(b.a,{item:!0,md:4},o.a.createElement("div",{className:"d-flex justify-content-center w-100"},o.a.createElement(x.a,{value:S,text:"".concat(_,"%"),strokeWidth:8,className:"m-3 circular-progress-xxl circular-progress-".concat(se.colorClass)})),o.a.createElement("div",{className:"px-4 pb-4 pt-2"},o.a.createElement("div",{className:"d-flex text-uppercase justify-content-center text-black-50 font-size-xs font-weight-bold mb-4"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("div",{className:"badge badge-".concat(se.colorClass," badge-circle mx-2")},"Stake Progress"),o.a.createElement("span",{className:"d-20 w-auto"},"Stake Progress"))),o.a.createElement(v.a,{onClick:fe,fullWidth:!0,disabled:Q,className:"mb-2 btn-neutral-".concat(se.colorClassAlt," font-weight-bold text-uppercase font-size-sm hover-scale-sm")},o.a.createElement("span",null,te),"Closing Stake"===te?o.a.createElement(L,{size:20}):null),ie&&o.a.createElement("div",{className:"mt-2 text-center font-size-sm"},o.a.createElement("a",{href:"".concat(j.etherScan,"/tx/").concat(ie),target:"_blank",rel:"noopener noreferrer"},"Stake Closed"===te?"Transaction Completed":"View Transaction",o.a.createElement(p.a,{className:"ml-1 font-size-xxl"})))),o.a.createElement("div",{className:"divider-v divider-v-md"})),o.a.createElement(b.a,{item:!0,md:8},o.a.createElement("div",{className:"d-flex align-items-center justify-content-between p-3 pr-4"},o.a.createElement("div",null,o.a.createElement("b",null,"Staked Tokens"),o.a.createElement("div",{className:"text-black-50"},"Original principal of current stake")),o.a.createElement("div",{className:"font-weight-bold text-primary font-size-xl"},o.a.createElement(N.a,{start:0,end:parseFloat(a.utils.fromWei(D.stakedAmount)),duration:1,delay:0,separator:",",decimals:2,decimal:"."})," WISE")),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between p-3 pr-4"},o.a.createElement("div",null,o.a.createElement("b",null,A&&W?"Buffered Amount":"Penalty Amount"),o.a.createElement("div",{className:"text-black-50"},A&&W?"Insurance deposit returned":"Negative impact if ended pre-maturely")),A&&W?o.a.createElement("div",{className:"font-weight-bold text-".concat(P," font-size-xl")},"+",o.a.createElement(N.a,{start:0,end:parseFloat(10*a.utils.fromWei(D.stakedAmount)/90),duration:2,delay:0,separator:",",decimals:2,decimal:"."})," WISE"):o.a.createElement("div",{className:"font-weight-bold text-".concat(P," font-size-xl")},"-",o.a.createElement(N.a,{start:0,end:parseFloat(a.utils.fromWei(D.penaltyAmount)),duration:2,delay:0,separator:",",decimals:2,decimal:"."})," WISE")),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between p-3 pr-4"},o.a.createElement("div",null,o.a.createElement("b",null,"Interest Amount"),o.a.createElement("div",{className:"text-black-50"},"Interest paid out for current stake")),o.a.createElement("div",{className:"font-weight-bold text-success font-size-xl"},"+",o.a.createElement(N.a,{start:0,end:parseFloat(a.utils.fromWei(D.rewardAmount)),duration:3,delay:0,separator:",",decimals:2,decimal:"."})," WISE")),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between p-3 pr-4"},o.a.createElement("div",null,o.a.createElement("b",null,"Total Payout"),o.a.createElement("div",{className:"text-black-50"},"Final amount of tokens returned")),o.a.createElement("div",{className:"font-weight-bold text-".concat(se.colorClassAlt," font-size-xl")},o.a.createElement(N.a,{start:0,end:parseFloat(I),duration:3,delay:0,separator:",",decimals:2,decimal:"."})," WISE"))))))))))}},787:function(e,t,a){"use strict";var n=a(58);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),s=(0,n(a(60)).default)(r.default.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.default=s},800:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(84),r=a(0),s=a.n(r);function c(e){var t=e.v,a=(window.innerWidth,window.devicePixelRatio,[].concat(Object(n.a)(t.split("").slice(0,5)),["..."],Object(n.a)(t.split("").slice(31))).join(""));return s.a.createElement("data",null,a)}},814:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return d}));var n=a(0),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};var s=function(){return(s=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function c(e){var t=e.className,a=e.counterClockwise,r=e.dashRatio,s=e.pathRadius,c=e.strokeWidth,i=e.style;return Object(n.createElement)("path",{className:t,style:Object.assign({},i,o({pathRadius:s,dashRatio:r,counterClockwise:a})),d:l({pathRadius:s,counterClockwise:a}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,a=e.dashRatio,n=e.pathRadius,r=2*Math.PI*n,s=(1-a)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-s:s)+"px"}}var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,a),n)-a)/(n-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,r=e.classes,s=e.counterClockwise,l=e.styles,o=e.strokeWidth,i=e.text,d=this.getPathRadius(),u=this.getPathRatio();return Object(n.createElement)("svg",{className:r.root+" "+a,style:l.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?Object(n.createElement)("circle",{className:r.background,style:l.background,cx:50,cy:50,r:50}):null,Object(n.createElement)(c,{className:r.trail,counterClockwise:s,dashRatio:t,pathRadius:d,strokeWidth:o,style:l.trail}),Object(n.createElement)(c,{className:r.path,counterClockwise:s,dashRatio:u*t,pathRadius:d,strokeWidth:o,style:l.path}),i?Object(n.createElement)("text",{className:r.text,style:l.text,x:50,y:50},i):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component);function d(e){e.children;var t=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a}(e,["children"]);return Object(n.createElement)("div",{"data-test-id":"CircularProgressbarWithChildren"},Object(n.createElement)("div",{style:{position:"relative",width:"100%",height:"100%"}},Object(n.createElement)(i,s({},t)),e.children?Object(n.createElement)("div",{"data-test-id":"CircularProgressbarWithChildren__children",style:{position:"absolute",width:"100%",height:"100%",marginTop:"-100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.children):null))}},815:function(e,t,a){"use strict";var n=a(2),r=a(15),s=a(0),c=(a(12),a(10)),l=a(22),o=a(38);function i(e){var t,a,n;return t=e,a=0,n=1,e=(Math.min(Math.max(a,t),n)-a)/(n-a),e=(e-=1)*e*e+1}var d=s.forwardRef((function(e,t){var a,l=e.classes,d=e.className,u=e.color,m=void 0===u?"primary":u,f=e.disableShrink,p=void 0!==f&&f,h=e.size,b=void 0===h?40:h,k=e.style,v=e.thickness,E=void 0===v?3.6:v,g=e.value,y=void 0===g?0:g,x=e.variant,O=void 0===x?"indeterminate":x,N=Object(r.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),w={},j={},C={};if("determinate"===O||"static"===O){var D=2*Math.PI*((44-E)/2);w.strokeDasharray=D.toFixed(3),C["aria-valuenow"]=Math.round(y),"static"===O?(w.strokeDashoffset="".concat(((100-y)/100*D).toFixed(3),"px"),j.transform="rotate(-90deg)"):(w.strokeDashoffset="".concat((a=(100-y)/100,a*a*D).toFixed(3),"px"),j.transform="rotate(".concat((270*i(y/70)).toFixed(3),"deg)"))}return s.createElement("div",Object(n.a)({className:Object(c.a)(l.root,d,"inherit"!==m&&l["color".concat(Object(o.a)(m))],{indeterminate:l.indeterminate,static:l.static}[O]),style:Object(n.a)(Object(n.a)({width:b,height:b},j),k),ref:t,role:"progressbar"},C,N),s.createElement("svg",{className:l.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},s.createElement("circle",{className:Object(c.a)(l.circle,p&&l.circleDisableShrink,{indeterminate:l.circleIndeterminate,static:l.circleStatic}[O]),style:w,cx:44,cy:44,r:(44-E)/2,fill:"none",strokeWidth:E})))}));t.a=Object(l.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},841:function(e,t,a){"use strict";var n=a(2),r=a(15),s=a(0),c=a.n(s),l=a(10),o=(a(12),a(91)),i=a.n(o),d=a(779);function u(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}var m=a(184);t.a=function(e){var t=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=a.name,o=Object(r.a)(a,["name"]);var m,f=s,p="function"===typeof t?function(e){return{root:function(a){return t(Object(n.a)({theme:e},a))}}}:{root:t},h=Object(d.a)(p,Object(n.a)({Component:e,name:s||e.displayName,classNamePrefix:f},o));t.filterProps&&(m=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var b=c.a.forwardRef((function(t,a){var s=t.children,o=t.className,i=t.clone,d=t.component,f=Object(r.a)(t,["children","className","clone","component"]),p=h(t),b=Object(l.a)(p.root,o),k=f;if(m&&(k=u(k,m)),i)return c.a.cloneElement(s,Object(n.a)({className:Object(l.a)(s.props.className,b)},k));if("function"===typeof s)return s(Object(n.a)({className:b},k));var v=d||e;return c.a.createElement(v,Object(n.a)({ref:a,className:b},k),s)}));return i()(b,e),b}}(e);return function(e,a){return t(e,Object(n.a)({defaultTheme:m.a},a))}}}}]);