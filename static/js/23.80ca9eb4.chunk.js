(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[23],{1147:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var n=a(83),l=a(803),r=a(6),c=a.n(r),i=a(157),s=a(30),m=a(0),o=a.n(m),d=a(11),u=a(22),f=a(182),b=a(46),E=a(826),v=a(773),p=a.n(v),h=a(800),g=a(129),w=a.n(g),y=a(1151),N=a(72),x=a(762),k=a(782),S=a(756),j=a(843),O=a(824),D=a.n(O);function I(e){var t=Object(b.b)().chainId,a=e.web3,r=e.wiseContract,v=e.account,g=e.setStakes,O=Object(f.a)(parseInt(t)),I=Object(m.useRef)(!0),C=O.inceptionDay,z=O.inceptionTimestamp,R=O.secondsInDay,A=e.stake||{},W=e.referral||{},T=Object(m.useState)(null),H=Object(s.a)(T,2),F=H[0],P=H[1],V=Object(m.useState)(null),B=Object(s.a)(V,2),L=B[0],Y=B[1],_=Object(m.useState)(null),M=Object(s.a)(_,2),q=M[0],G=M[1],J=Object(m.useState)(null),U=Object(s.a)(J,2),K=U[0],Q=U[1],X=Object(m.useState)({}),Z=Object(s.a)(X,2),$=Z[0],ee=Z[1],te=Object(m.useState)(null),ae=Object(s.a)(te,2),ne=ae[0],le=ae[1];console.log(ne,"totalScraped");var re=Object(m.useState)(null),ce=Object(s.a)(re,2),ie=ce[0],se=ce[1],me=Object(m.useState)(null),oe=Object(s.a)(me,2),de=oe[0],ue=oe[1],fe=parseFloat(a.utils.fromWei(W.referrerShares)),be=Object(m.useState)(W.referralInterest),Ee=Object(s.a)(be,2),ve=Ee[0],pe=Ee[1];Object(m.useEffect)((function(){var e=function(){var e=Object(i.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a={fromBlock:O.fromBlock,toBlock:"latest",filter:{stakeID:t}},r.getPastEvents("StakeStart",a).then((function(e){e[0]&&(ee(e[0].returnValues),Y(e[0].transactionHash))}))}catch(n){console.log("getOpeningHash: ",n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=Object(i.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a={fromBlock:O.fromBlock,toBlock:"latest",filter:{stakeID:t}},r.getPastEvents("StakeEnd",a).then(function(){var e=Object(i.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t[0]){e.next=6;break}return Q(t[0].transactionHash),e.next=4,he(t[0].blockNumber);case 4:a=e.sent,G(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(n){console.log("getClosingHash: ",n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(A.stakeID),t(A.stakeID)}),[]);var he=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.eth.getBlock(t);case 2:return n=e.sent,e.abrupt("return",n.timestamp);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){var e=function(){var e=Object(i.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s={fromBlock:O.fromBlock,toBlock:"latest",filter:{stakeID:t}},r.getPastEvents("InterestScraped",s).then(function(){var e=Object(i.a)(c.a.mark((function e(t){var r,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.length){e.next=28;break}le(Object(N.d)(t,"scrapeAmount",a)),se(Object(N.d)(t,"referrerPenalty",a)),r=Object(l.a)(t),e.prev=4,r.s();case 6:if((i=r.n()).done){e.next=16;break}return(s=i.value).type="scrape",s.amount=s.returnValues.scrapeAmount,s.penalty=s.returnValues.referrerPenalty,e.next=13,he(s.blockNumber);case 13:s.timestamp=e.sent;case 14:e.next=6;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),r.e(e.t0);case 21:return e.prev=21,r.f(),e.finish(21);case 24:$e(t),Ke((function(e){return Object(N.l)([].concat(Object(n.a)(e),Object(n.a)(t)))})),e.next=30;break;case 28:le(0),se(0);case 30:case"end":return e.stop()}}),e,null,[[4,18,21,24]])})));return function(t){return e.apply(this,arguments)}}())}catch(m){console.log("getScrapeEvents: ",m)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=Object(i.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s={fromBlock:O.fromBlock,toBlock:"latest",filter:{stakeID:t}},r.getPastEvents("ReferralCollected",s).then(function(){var e=Object(i.a)(c.a.mark((function e(t){var r,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.length){e.next=26;break}r=Object(l.a)(t),e.prev=2,r.s();case 4:if((i=r.n()).done){e.next=13;break}return(s=i.value).type="collect",s.amount=s.returnValues.rewardAmount,e.next=10,he(s.blockNumber);case 10:s.timestamp=e.sent;case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),r.e(e.t0);case 18:return e.prev=18,r.f(),e.finish(18);case 21:nt(t),Ke((function(e){return Object(N.l)([].concat(Object(n.a)(e),Object(n.a)(t)))})),ue(Object(N.d)(t,"rewardAmount",a)),e.next=27;break;case 26:ue(0);case 27:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})));return function(t){return e.apply(this,arguments)}}())}catch(m){console.log("getInterestEvents: ",m)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(A.stakeID),t(A.stakeID)}),[]);var ge={severity:"info",text:"Collect Reward",colorClass:"primary",colorClassAlt:"primary",icon:"hourglass-start",messageID:1,disabled:!0},we={severity:"success",text:"Collect Reward",colorClass:"success",icon:"info-circle",messageID:2,colorClassAlt:"success",disabled:!1},ye={severity:"success",text:"Collect Reward",colorClass:"success",icon:"check",messageID:3,colorClassAlt:"success",disabled:!1},Ne={severity:"info",text:"Collect Reward",colorClass:"dark",icon:"hourglass-end",messageID:4,colorClassAlt:"dark",disabled:!0},xe={severity:"warning",text:"Collect Reward",colorClass:"warning",icon:"hourglass-half",messageID:5,colorClassAlt:"warning",disabled:!0},ke={severity:"none",text:"Collect Reward",colorClass:"dark",icon:"hourglass-start",messageID:6,colorClassAlt:"dark",disabled:!0},Se=e.stake?100*(1-A.daysLeft/A.lockDays):0,je=parseInt(A.closeDay)>0&&parseInt(A.closeDay)<parseInt(A.startDay),Oe=A.isPending?ge:!A.isActive&&je?ke:!A.isActive&&W.isActiveReferral?xe:A.isActive||W.isActiveReferral?parseInt(Se)<100?we:ye:Ne,De=Object(E.a)(h.a)({color:"#dc004d",marginLeft:"1em"}),Ie=Oe.text,Ce=Oe.disabled,ze={NORMAL:{text:Ie,disabled:Ce},DONE:{text:"Reward Collected",disabled:!0},CONFIRM:{text:"Confirm Transaction",disabled:!0},COLLECTING:{text:"Collecting...",disabled:!0}},Re=function(e){He((function(t){He(e),Be(ze[e].disabled),Me(ze[e].text)}))},Ae=Object(m.useState)("NORMAL"),We=Object(s.a)(Ae,2),Te=We[0],He=We[1];console.log(Te,"buttonState");var Fe=Object(m.useState)(Ce),Pe=Object(s.a)(Fe,2),Ve=Pe[0],Be=Pe[1],Le=Object(m.useState)(Ie),Ye=Object(s.a)(Le,2),_e=Ye[0],Me=Ye[1],qe=Oe,Ge=Object(m.useState)([]),Je=Object(s.a)(Ge,2),Ue=Je[0],Ke=Je[1],Qe=Object(m.useState)([]),Xe=Object(s.a)(Qe,2),Ze=Xe[0],$e=Xe[1];console.log(Ze,"scrapes");var et=Object(m.useState)([]),tt=Object(s.a)(et,2),at=tt[0],nt=tt[1];console.log(at,"collects");var lt="",rt=0,ct=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Re("CONFIRM"),lt="",rt=0,r.methods.referrerInterest(W.referralID,0).send({from:v}).on("transactionHash",(function(e){I.current&&(P(e),Re("COLLECTING"),lt=e)})).on("confirmation",(function(e,t){t.transactionHash===lt&&rt++,I.current&&1===rt&&(Re("DONE"),pe("0"),ue((function(e){return e+parseFloat(a.utils.fromWei(W.referralInterest))})),W.referralInterest="0",g(A.stake.index))})).on("receipt",(function(e){})).on("error",(function(e){I.current&&(Re("NORMAL"),P(null))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),it=function(e){return 0===e?"Today":1===e?"Yesterday":"".concat(e," Days Ago")},st=function(e){return 0===e?"1 Day":"".concat(e," Days")};return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{container:!0,className:"w-100"},o.a.createElement(x.a,{item:!0,md:12,className:"d-flex w-100"},o.a.createElement(k.a,{className:"card-box w-100"},o.a.createElement("div",{className:"card-header d-flex justify-content-between"},o.a.createElement("h4",{className:"font-size-lg mb-0 py-2 font-weight-bold"},"Referral Historical Summary"),o.a.createElement("a",{href:"/docs#sec-2-3-5",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(S.a,{className:"mr-1 p-0 mb-1 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",variant:"outlined"},o.a.createElement(u.a,{icon:["far","question-circle"],className:"font-size-sm"})))),o.a.createElement(j.a,{className:"p-0"},o.a.createElement("div",{className:"card-header d-block"},o.a.createElement(y.a,{icon:!1,className:"alerts-alternate my-2 w-100",severity:"".concat(qe.severity)},o.a.createElement("div",{className:"d-flex align-items-center align-content-start"},o.a.createElement("div",{className:"d-block d-md-flex mt-3 mt-lg-0 align-items-center"},o.a.createElement("span",{className:"font-size-lg d-block d-40 btn-icon mr-3 px-2 text-center bg-".concat(qe.colorClassAlt," text-white rounded-sm")},o.a.createElement(u.a,{icon:["fas","".concat(qe.icon)]}))),1===qe.messageID&&o.a.createElement("span",null,"Your referral with ID ",o.a.createElement("b",null,W.referralID)," is a reference to a stake which is currently in ",o.a.createElement("b",null,"Pending State"),". This referral will be generating rewards starting from ",o.a.createElement("b",null,"Tomorrow")," unless cancelled by staker. Amount of shares assigned to this referral determines the reward produced on daily basis."),2===qe.messageID&&o.a.createElement("div",null,o.a.createElement("span",null,"Your referral with ID ",o.a.createElement("b",null,W.referralID)," is now generating rewards on daily basis. This will last for another ",o.a.createElement("b",null,st(A.daysLeft))," while referred stake remains open. If referred stake matures or is closed prematurely it will stop generating rewards. You can collect available rewards at any time."),o.a.createElement("span",{className:"hidden"},"Your referral with ID ",o.a.createElement("b",null,W.referralID)," was started ",o.a.createElement("b",null,it(A.currentWiseDay-A.startDay))," and will span for another ",o.a.createElement("b",null,st(A.daysLeft)),"unless")),3===qe.messageID&&o.a.createElement("span",null,"Your referral with ID ",o.a.createElement("b",null,W.referralID)," has reached it full referral span of ",o.a.createElement("b",null,A.lockDays," Days")," and generated maximum possible reward. The referred stake has now matured. To collect any remaining rewards click the ",o.a.createElement("b",null,"Collect Reward")," button at the bottom of the timeline view."),4===qe.messageID&&o.a.createElement("span",null,"Your referral with ID ",o.a.createElement("b",null,W.referralID)," is now finished. In order to check any details of this referral and referred stake's lifecycle please review detailed ",o.a.createElement("b",null,"Timeline")," below. Any transaction made affecting the results of this referral can be verified by clicking ",o.a.createElement("b",null,"View Transaction")," links below."),5===qe.messageID&&o.a.createElement("span",null,"Your referral with ID ",o.a.createElement("b",null,W.referralID)," is still active due to remaining rewards, unfortunately the stake owner already closed referred stake prematurely. This referral will no longer produce any additional rewards for you, but you can still collect remaining rewards at any time."),6===qe.messageID&&o.a.createElement("span",null,"Your referral with ID ",o.a.createElement("b",null,W.referralID)," has been closed 100% Prematurely, this means that referred stake owner cancelled his stake within same day. In this case your referral is automatically voided and will not generate any rewards. Consider referring confident stakers next time.")))),o.a.createElement("div",{className:"d-flex w-100 flex-column flex-grow-1 justify-content-center w-100"},o.a.createElement(x.a,{container:!0,spacing:0,className:"w-100"},o.a.createElement(x.a,{item:!0,md:4},o.a.createElement("div",{className:"pr-0"},o.a.createElement(w.a,{className:Object(d.a)({"scroll-area-lg":!0}),options:{wheelPropagation:!1}},o.a.createElement("div",{className:"pl-5 pr-5"},o.a.createElement("div",{className:"timeline-list mb-0 mb-3"},o.a.createElement("div",{className:"timeline-item timeline-item-icon"},o.a.createElement("div",{className:"timeline-item--content"},o.a.createElement("div",{className:"timeline-item--icon-wrapper rounded-pill bg-primary text-white"},o.a.createElement(u.a,{icon:["fas","hourglass-start"]})),o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold"},A.opensDayDate," # Referral Day"),o.a.createElement("div",null,o.a.createElement("div",{className:"mt-2 font-size-sm"},o.a.createElement("div",null,"Referred: ",Object(N.f)($.stakedAmount,null,a)," WISE"),o.a.createElement("div",null,"Acquired: ",Object(N.f)($.referralShares,null,a)," rSHRS")),o.a.createElement("div",{className:"mb-0"},o.a.createElement("a",{href:"".concat(O.etherScan,"/tx/").concat(L),target:"_blank",rel:"noopener noreferrer"},"View Transaction",o.a.createElement(p.a,{className:"ml-1 font-size-xxl"})))))),!A.isMature&&A.isActive&&A.isPending&&o.a.createElement("div",{className:"timeline-item timeline-item-icon mb-3"},o.a.createElement("div",{className:"timeline-item--content"},o.a.createElement("div",{className:"timeline-item--icon-wrapper rounded-pill bg-primary text-white"},o.a.createElement(u.a,{icon:["fas","calendar"]})),o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold"},A.currentWiseDayToDate," # Current Day"),o.a.createElement("div",null,o.a.createElement("div",null,"Available Reward: ",Object(N.f)(ve,null,a)," WISE"),o.a.createElement("div",null,"Generation: Starts Tomorrow")),o.a.createElement("div",{className:"mt-2"},o.a.createElement(S.a,{size:"small",onClick:ct,disabled:Ve,className:"w-100 font-weight-bold btn-neutral-primary"},_e)))),je&&o.a.createElement("div",null,o.a.createElement("div",{className:"timeline-item timeline-item-icon mb-3"},o.a.createElement("div",{className:"timeline-item--content"},o.a.createElement("div",{className:"timeline-item--icon-wrapper rounded-pill bg-dark text-white"},o.a.createElement(u.a,{icon:["fas","hourglass-end"]})),o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold"},A.closeDayDate," # Closing Day"),o.a.createElement("div",null,o.a.createElement("div",null,"Staker Cancelled: No Penalties")),o.a.createElement("div",{className:"mb-0"},o.a.createElement("a",{href:"".concat(O.etherScan,"/tx/").concat(K),target:"_blank",rel:"noopener noreferrer"},"View Transaction",o.a.createElement(p.a,{className:"ml-1 font-size-xxl"}))))),o.a.createElement("div",{className:"timeline-item timeline-item-icon mb-3"},o.a.createElement("div",{className:"timeline-item--content"},o.a.createElement("div",{className:"timeline-item--icon-wrapper rounded-pill bg-success text-white"},o.a.createElement(u.a,{icon:["fas","calendar"]})),o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold"},A.currentWiseDayToDate," # Current Day"),o.a.createElement("div",null,o.a.createElement("div",null,"Stake Cancelled: ",it(A.currentWiseDay-A.closeDay)),o.a.createElement("div",null,"No Rewards Generated")),o.a.createElement("div",{className:"hidden mt-2"},o.a.createElement(S.a,{size:"small",onClick:ct,disabled:Ve,className:"btn-neutral-warning w-100"},_e))))),!je&&o.a.createElement("div",null,o.a.createElement("div",{className:"timeline-item timeline-item-icon mb-3"},o.a.createElement("div",{className:"timeline-item--content"},o.a.createElement("div",{className:"timeline-item--icon-wrapper rounded-pill bg-wise text-white"},o.a.createElement(u.a,{icon:["fas","lock"]})),o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold"},A.startDayDate," # Starting Day"),o.a.createElement("div",null,"Referral Span: ",A.lockDays," Days Total"))),Ue.length>0&&Ue.map((function(e,t){return o.a.createElement(o.a.Fragment,{key:t},!!e&&"0"!==e.amount&&(q>0&&e.timestamp<q||null===q)&&o.a.createElement("div",{className:"timeline-item timeline-item-icon mb-3"},o.a.createElement("div",{className:"timeline-item--content"},o.a.createElement("div",{className:"timeline-item--icon-wrapper rounded-pill ".concat("scrape"===e.type?"bg-danger":"bg-wise"," text-white")},o.a.createElement(u.a,{icon:["fas","minus-circle"]})),"scrape"===e.type&&o.a.createElement("div",null,o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold text-black-50"},Object(N.b)(e.returnValues.scrapeDay,C)," # Scraped"),o.a.createElement("div",null,o.a.createElement("div",null,"Staker Scraped: ",Object(N.f)(e.amount,null,a)," WISE"),o.a.createElement("div",null,"Your Penalties: ",Object(N.f)(e.penalty,null,a)," rSHRS"),o.a.createElement("a",{href:"".concat(O.etherScan,"/tx/").concat(e.transactionHash),target:"_blank",rel:"noopener noreferrer"},"View Transaction",o.a.createElement(p.a,{className:"ml-1 font-size-xxl"})))),"collect"===e.type&&o.a.createElement("div",null,o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold text-black-50"},Object(N.c)(e.timestamp,C,z,R)," # Collected"),o.a.createElement("div",null,o.a.createElement("div",null,"You Collected: ",Object(N.f)(e.amount,null,a)," WISE"),o.a.createElement("a",{href:"".concat(O.etherScan,"/tx/").concat(e.transactionHash),target:"_blank",rel:"noopener noreferrer"},"View Transaction",o.a.createElement(p.a,{className:"ml-1 font-size-xxl"})))))))})),A.isActive&&!A.isPending&&o.a.createElement("div",null,"Reward Collected"===_e&&o.a.createElement("div",{className:"timeline-item timeline-item-icon mb-3"},o.a.createElement("div",{className:"timeline-item--content"},o.a.createElement("div",{className:"timeline-item--icon-wrapper rounded-pill bg-wise text-white"},o.a.createElement(u.a,{icon:["fas","minus-circle"]})),o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold"},A.currentWiseDayToDate," # Collected"),o.a.createElement("div",null,o.a.createElement("div",null,"Collected Reward: ",Object(N.f)(W.referralInterest,null,a)," WISE"),o.a.createElement("a",{href:"".concat(O.etherScan,"/tx/").concat(F),target:"_blank",rel:"noopener noreferrer"},"Transaction Completed",o.a.createElement(p.a,{className:"ml-1 font-size-xxl"}))))),o.a.createElement("div",{className:"timeline-item timeline-item-icon mb-3"},o.a.createElement("div",{className:"timeline-item--content"},o.a.createElement("div",{className:"timeline-item--icon-wrapper rounded-pill bg-success text-white"},o.a.createElement(u.a,{icon:["fas","calendar"]})),o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold"},A.currentWiseDayToDate," # Current Day"),o.a.createElement("p",null,o.a.createElement("div",null,"Available Reward: ",Object(N.f)(ve,null,a)," WISE"),o.a.createElement("div",null,"Remaining Span: ",A.daysLeft," Days Left")),o.a.createElement("div",{className:"mt-2 d-flex"},o.a.createElement(S.a,{size:"small",onClick:ct,disabled:"0"===W.referralInterest||"Collect Reward"!==_e,className:"btn-neutral-success font-weight-bold w-100 mr-2"},_e,"Collecting..."===_e?o.a.createElement(De,{size:15}):null),F&&"Collecting..."===_e&&o.a.createElement("a",{href:"".concat(O.etherScan,"/tx/").concat(F),target:"_blank",rel:"noopener noreferrer"},o.a.createElement(S.a,{className:"btn-neutral-primary"},o.a.createElement(u.a,{icon:["fas","external-link-alt"]}))))))),W.closedPrematurely&&o.a.createElement("div",{className:"timeline-item timeline-item-icon mb-3"},o.a.createElement("div",{className:"timeline-item--content"},o.a.createElement("div",{className:"timeline-item--icon-wrapper rounded-pill bg-warning text-white"},o.a.createElement(u.a,{icon:["fas","hourglass-half"]})),o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold"},A.closeDayDate," # Closing Day"),o.a.createElement("div",null,o.a.createElement("div",null,"Stake Closed: ",Object(N.m)(100-100*(1-A.daysLeft/A.lockDays),0),"% Prematurely")),o.a.createElement("div",{className:"mb-0"},o.a.createElement("a",{href:"".concat(O.etherScan,"/tx/").concat(K),target:"_blank",rel:"noopener noreferrer"},"View Transaction",o.a.createElement(p.a,{className:"ml-1 font-size-xxl"}))))),!A.isActive&&A.isMature&&o.a.createElement("div",{className:"timeline-item timeline-item-icon mb-3"},o.a.createElement("div",{className:"timeline-item--content"},o.a.createElement("div",{className:"timeline-item--icon-wrapper rounded-pill bg-success text-white"},o.a.createElement(u.a,{icon:["fas","hourglass-end"]})),o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold"},A.closeDayDate," # Closing Day"),o.a.createElement("div",null,o.a.createElement("div",null,"Stake Matured")),o.a.createElement("div",{className:"mb-0"},o.a.createElement("a",{href:"".concat(O.etherScan,"/tx/").concat(K),target:"_blank",rel:"noopener noreferrer"},"View Transaction",o.a.createElement(p.a,{className:"ml-1 font-size-xxl"}))))),!A.isActive&&Ue.length>0&&Ue.map((function(e,t){return o.a.createElement(o.a.Fragment,{key:t},!!e&&"0"!==e.amount&&e.timestamp>=q&&o.a.createElement("div",{className:"timeline-item timeline-item-icon mb-3"},o.a.createElement("div",{className:"timeline-item--content"},o.a.createElement("div",{className:"timeline-item--icon-wrapper rounded-pill ".concat("scrape"===e.type?"bg-danger":"bg-wise"," text-white")},o.a.createElement(u.a,{icon:["fas","minus-circle"]})),"scrape"===e.type&&o.a.createElement("div",null,o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold text-black-50"},Object(N.b)(e.returnValues.scrapeDay,C)," # Scraped"),o.a.createElement("div",null,o.a.createElement("div",null,"Staker Scraped: ",Object(N.f)(e.amount,null,a)," WISE"),o.a.createElement("div",null,"Your Penalties: ",Object(N.f)(e.penalty,null,a)," rSHRS"),o.a.createElement("a",{href:"".concat(O.etherScan,"/tx/").concat(e.transactionHash),target:"_blank",rel:"noopener noreferrer"},"View Transaction",o.a.createElement(p.a,{className:"ml-1 font-size-xxl"})))),"collect"===e.type&&o.a.createElement("div",null,o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold text-black-50"},Object(N.c)(e.timestamp,C,z,R)," # Collected"),o.a.createElement("div",null,o.a.createElement("div",null,"You Collected: ",Object(N.f)(e.amount,null,a)," WISE"),o.a.createElement("a",{href:"".concat(O.etherScan,"/tx/").concat(e.transactionHash),target:"_blank",rel:"noopener noreferrer"},"View Transaction",o.a.createElement(p.a,{className:"ml-1 font-size-xxl"})))))))})),!A.isActive&&W.isActiveReferral&&o.a.createElement("div",{className:"timeline-item timeline-item-icon mb-3"},o.a.createElement("div",{className:"timeline-item--content"},o.a.createElement("div",{className:"timeline-item--icon-wrapper rounded-pill bg-warning text-white"},o.a.createElement(u.a,{icon:["fas","calendar"]})),o.a.createElement("h4",{className:"font-size-md lh-20 timeline-item--label mb-2 font-weight-bold"},A.currentWiseDayToDate," # Current Day"),o.a.createElement("div",null,o.a.createElement("div",null,"Remaining Reward: ",Object(N.f)(ve,null,a)," WISE")),o.a.createElement("div",{className:"mt-2 d-flex"},o.a.createElement(S.a,{size:"small",onClick:ct,disabled:"0"===W.referralInterest||"Collect Reward"!==_e,className:"btn-neutral-warning w-100 mr-2 font-weight-bold"},_e,"Collecting..."===_e?o.a.createElement(De,{size:15}):null),F&&"Collecting..."===_e&&o.a.createElement("a",{href:"".concat(O.etherScan,"/tx/").concat(F),target:"_blank",rel:"noopener noreferrer"},o.a.createElement(S.a,{className:"btn-neutral-primary"},o.a.createElement(u.a,{icon:["fas","external-link-alt"]}))))))))))),o.a.createElement("div",{className:"px-4 hidden pb-4 pt-2"},o.a.createElement(S.a,{onClick:ct,fullWidth:!0,disabled:Ve,className:"w-100 mb-2 btn-neutral-".concat(qe.colorClassAlt," font-weight-bold text-uppercase font-size-sm hover-scale-sm")},o.a.createElement("span",null,_e),"Scraping..."===_e?o.a.createElement(De,{size:15}):null),F&&o.a.createElement("div",{className:"hidden mb-3 text-center font-size-sm"},o.a.createElement("a",{href:"".concat(O.etherScan,"/tx/").concat(F),target:"_blank",rel:"noopener noreferrer"},"Scraping Done"===_e?"Transaction Completed":"View Transaction",o.a.createElement(p.a,{className:"ml-1 font-size-xxl"})))),o.a.createElement("div",{className:"divider-v divider-v-md"})),o.a.createElement(x.a,{item:!0,md:4},o.a.createElement("div",{className:"d-flex align-items-center justify-content-between p-4 pr-4"},o.a.createElement("div",null,o.a.createElement("b",{className:"font-size-lg"},"Referred Amount"),o.a.createElement("div",{className:"text-black-50"},"Staked tokens")),o.a.createElement("div",{className:"font-weight-bold text-primary font-size-lg d-flex"},o.a.createElement("div",null,o.a.createElement(D.a,{start:0,end:parseFloat(a.utils.fromWei(A.stakedAmount)),duration:1,delay:0,separator:",",decimals:Object(N.j)(A.stakedAmount,a),decimal:"."})," WISE"))),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between p-4 pr-4"},o.a.createElement("div",null,o.a.createElement("b",{className:"font-size-lg"},"Referral Shares"),o.a.createElement("div",{className:"text-black-50"},"Original amount")),o.a.createElement("div",{className:"font-weight-bold text-primary font-size-lg d-flex"},o.a.createElement("div",null,null!==ie&&o.a.createElement("div",null,o.a.createElement(D.a,{start:0,end:parseFloat(a.utils.fromWei(W.referrerShares))+ie,duration:1,delay:0,separator:",",decimals:Object(N.k)(parseFloat(a.utils.fromWei(W.referrerShares))+ie),decimal:"."})," rSHRS"),null===ie&&o.a.createElement("div",null,"0.00 rSHRS")))),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between p-4 pr-4"},o.a.createElement("div",null,o.a.createElement("b",{className:"font-size-lg"},"Deducted Shares"),o.a.createElement("div",{className:"text-black-50"},"If staker scraped")),o.a.createElement("div",{className:"font-weight-bold text-danger font-size-lg d-flex"},o.a.createElement("div",null,null!==ie&&o.a.createElement("div",null,"-",o.a.createElement(D.a,{start:0,end:ie,duration:1,delay:0,separator:",",decimals:Object(N.k)(ie),decimal:"."})," rSHRS"),null===ie&&o.a.createElement("div",null,"-0.00 rSHRS")))),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between p-4 pr-4"},o.a.createElement("div",null,o.a.createElement("b",{className:"font-size-lg"},A.isActive?"Active":"Final"," Shares"),o.a.createElement("div",{className:"text-black-50"},"Remaining amount")),o.a.createElement("div",{className:"font-weight-bold text-".concat(A.isActive?"success":"dark"," font-size-lg d-flex")},o.a.createElement("div",null,o.a.createElement(D.a,{start:0,end:fe,duration:1,delay:0,separator:",",decimals:Object(N.k)(fe),decimal:"."})," rSHRS"))),o.a.createElement("div",{className:"divider-v divider-v-md"})),o.a.createElement(x.a,{item:!0,md:4},o.a.createElement("div",{className:"d-flex align-items-center justify-content-between p-4 pr-4"},o.a.createElement("div",null,o.a.createElement("b",{className:"font-size-lg"},"Referred Equivalent"),o.a.createElement("div",{className:"text-black-50"},"When stake was created")),o.a.createElement("div",{className:"font-weight-bold text-primary font-size-lg d-flex"},$.daiEquivalent?o.a.createElement("div",null,o.a.createElement(D.a,{start:0,end:parseFloat(a.utils.fromWei($.daiEquivalent)),duration:1,delay:0,separator:",",decimals:Object(N.k)(parseFloat(a.utils.fromWei($.daiEquivalent))),decimal:"."})," USD"):o.a.createElement("div",null,"0.00 USD"))),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between p-4 pr-4"},o.a.createElement("div",null,o.a.createElement("b",{className:"font-size-lg"},"Overall Reward"),o.a.createElement("div",{className:"text-black-50"},"Based on shares")),o.a.createElement("div",{className:"font-weight-bold text-primary font-size-lg d-flex"},o.a.createElement("div",null,null!==de&&o.a.createElement("div",null,o.a.createElement(D.a,{start:0,end:parseFloat(a.utils.fromWei(ve))+de,duration:1,delay:0,separator:",",decimals:Object(N.k)(parseFloat(a.utils.fromWei(ve))+de),decimal:"."})," WISE"),null===de&&o.a.createElement("div",null,"0.00 WISE")))),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between p-4 pr-4"},o.a.createElement("div",null,o.a.createElement("b",{className:"font-size-lg"},"Collected Reward"),o.a.createElement("div",{className:"text-black-50"},"Already issued")),o.a.createElement("div",{className:"font-weight-bold text-wise font-size-lg d-flex"},null!==de&&o.a.createElement("div",null,"-",o.a.createElement(D.a,{start:0,end:de,duration:1,delay:0,separator:",",decimals:Object(N.k)(de),decimal:"."})," WISE"),null===de&&o.a.createElement("div",null,"-0.00 WISE"))),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between p-4 pr-4"},o.a.createElement("div",null,o.a.createElement("b",{className:"font-size-lg"},A.isActive?"Available":"Final"," Reward"),o.a.createElement("div",{className:"text-black-50"},"Remaining amount")),o.a.createElement("div",{className:"font-weight-bold text-".concat(A.isActive?"success":"dark"," font-size-lg d-flex")},o.a.createElement("div",null,o.a.createElement(D.a,{start:0,end:parseFloat(a.utils.fromWei(ve)),duration:1,delay:0,separator:",",decimals:Object(N.j)(ve,a),decimal:"."})," WISE")))))))))))}},803:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(188);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,c=!0,i=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return c=e.done,e},e:function(e){i=!0,r=e},f:function(){try{c||null==l.return||l.return()}finally{if(i)throw r}}}}}}]);