(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNewsList=function(){var e=u+"/api/4/news/latest";return a.default.get(e)},t.getNewsDetail=function(e){var t=u+"/api/4/news/"+e;return a.default.get(t)},t.getHistoryList=function(e){var t=u+"/api/4/news/before/"+e;return a.default.get(t)};var r,o=n(219),a=(r=o)&&r.__esModule?r:{default:r};var u="https://news-at.zhihu.com"},221:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setBgHide=t.setBgShow=t.getPrevDate=t.setStopLoad=t.setStartLoad=t.getHistoryData=t.getLatestPic=t.getLatestData=t.getHistory=t.getLatest=void 0;var r,o=n(218),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(250)),u=n(219);(r=u)&&r.__esModule;t.getLatest=function(){return function(e,t){(0,o.getNewsList)().then(function(n){n&&200==n.status&&(e(i(n.data)),e(s(n.data)),e(l(t().prevDate.curDate)))}).catch(function(e){console.log(e)})}};var l=t.getHistory=function(e){return function(t){(0,o.getHistoryList)(e).then(function(e){e&&200==e.status&&(t(p()),t(c(e.data)),t(f()))}).catch(function(e){console.log(e)})}},i=t.getLatestData=function(e){return{type:a.GET_LATEST_DATA,data:e}},s=t.getLatestPic=function(e){return{type:a.GET_LATEST_PIC,data:e}},c=t.getHistoryData=function(e){return{type:a.GET_HISTORY_DATA,data:e}},f=(t.setStartLoad=function(e){return{type:a.SET_START_LOAD,data:e}},t.setStopLoad=function(e){return{type:a.SET_STOP_LOAD,data:e}}),p=t.getPrevDate=function(e){return{type:a.PREV_DATE,date:e}};t.setBgShow=function(e){return{type:a.SET_BG_SHOW,data:e}},t.setBgHide=function(e){return{type:a.SET_BG_HIDE,data:e}}},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_LATEST_DATA="GET_LATEST_DATA",t.GET_LATEST_PIC="GET_LATEST_PIC",t.GET_HISTORY_DATA="GET_HISTORY_DATA",t.PREV_DATE="PREV_DATE",t.SET_START_LOAD="SET_START_LOAD",t.SET_STOP_LOAD="SET_STOP_LOAD",t.SET_BG_SHOW="SET_BG_SHOW",t.SET_BG_HIDE="SET_BG_HIDE"},251:function(e,t,n){var r={"./af":59,"./af.js":59,"./ar":60,"./ar-dz":61,"./ar-dz.js":61,"./ar-kw":62,"./ar-kw.js":62,"./ar-ly":63,"./ar-ly.js":63,"./ar-ma":64,"./ar-ma.js":64,"./ar-sa":65,"./ar-sa.js":65,"./ar-tn":66,"./ar-tn.js":66,"./ar.js":60,"./az":67,"./az.js":67,"./be":68,"./be.js":68,"./bg":69,"./bg.js":69,"./bm":70,"./bm.js":70,"./bn":71,"./bn.js":71,"./bo":72,"./bo.js":72,"./br":73,"./br.js":73,"./bs":74,"./bs.js":74,"./ca":75,"./ca.js":75,"./cs":76,"./cs.js":76,"./cv":77,"./cv.js":77,"./cy":78,"./cy.js":78,"./da":79,"./da.js":79,"./de":80,"./de-at":81,"./de-at.js":81,"./de-ch":82,"./de-ch.js":82,"./de.js":80,"./dv":83,"./dv.js":83,"./el":84,"./el.js":84,"./en-au":85,"./en-au.js":85,"./en-ca":86,"./en-ca.js":86,"./en-gb":87,"./en-gb.js":87,"./en-ie":88,"./en-ie.js":88,"./en-il":89,"./en-il.js":89,"./en-nz":90,"./en-nz.js":90,"./eo":91,"./eo.js":91,"./es":92,"./es-do":93,"./es-do.js":93,"./es-us":94,"./es-us.js":94,"./es.js":92,"./et":95,"./et.js":95,"./eu":96,"./eu.js":96,"./fa":97,"./fa.js":97,"./fi":98,"./fi.js":98,"./fo":99,"./fo.js":99,"./fr":100,"./fr-ca":101,"./fr-ca.js":101,"./fr-ch":102,"./fr-ch.js":102,"./fr.js":100,"./fy":103,"./fy.js":103,"./gd":104,"./gd.js":104,"./gl":105,"./gl.js":105,"./gom-latn":106,"./gom-latn.js":106,"./gu":107,"./gu.js":107,"./he":108,"./he.js":108,"./hi":109,"./hi.js":109,"./hr":110,"./hr.js":110,"./hu":111,"./hu.js":111,"./hy-am":112,"./hy-am.js":112,"./id":113,"./id.js":113,"./is":114,"./is.js":114,"./it":115,"./it.js":115,"./ja":116,"./ja.js":116,"./jv":117,"./jv.js":117,"./ka":118,"./ka.js":118,"./kk":119,"./kk.js":119,"./km":120,"./km.js":120,"./kn":121,"./kn.js":121,"./ko":122,"./ko.js":122,"./ky":123,"./ky.js":123,"./lb":124,"./lb.js":124,"./lo":125,"./lo.js":125,"./lt":126,"./lt.js":126,"./lv":127,"./lv.js":127,"./me":128,"./me.js":128,"./mi":129,"./mi.js":129,"./mk":130,"./mk.js":130,"./ml":131,"./ml.js":131,"./mn":132,"./mn.js":132,"./mr":133,"./mr.js":133,"./ms":134,"./ms-my":135,"./ms-my.js":135,"./ms.js":134,"./mt":136,"./mt.js":136,"./my":137,"./my.js":137,"./nb":138,"./nb.js":138,"./ne":139,"./ne.js":139,"./nl":140,"./nl-be":141,"./nl-be.js":141,"./nl.js":140,"./nn":142,"./nn.js":142,"./pa-in":143,"./pa-in.js":143,"./pl":144,"./pl.js":144,"./pt":145,"./pt-br":146,"./pt-br.js":146,"./pt.js":145,"./ro":147,"./ro.js":147,"./ru":148,"./ru.js":148,"./sd":149,"./sd.js":149,"./se":150,"./se.js":150,"./si":151,"./si.js":151,"./sk":152,"./sk.js":152,"./sl":153,"./sl.js":153,"./sq":154,"./sq.js":154,"./sr":155,"./sr-cyrl":156,"./sr-cyrl.js":156,"./sr.js":155,"./ss":157,"./ss.js":157,"./sv":158,"./sv.js":158,"./sw":159,"./sw.js":159,"./ta":160,"./ta.js":160,"./te":161,"./te.js":161,"./tet":162,"./tet.js":162,"./tg":163,"./tg.js":163,"./th":164,"./th.js":164,"./tl-ph":165,"./tl-ph.js":165,"./tlh":166,"./tlh.js":166,"./tr":167,"./tr.js":167,"./tzl":168,"./tzl.js":168,"./tzm":169,"./tzm-latn":170,"./tzm-latn.js":170,"./tzm.js":169,"./ug-cn":171,"./ug-cn.js":171,"./uk":172,"./uk.js":172,"./ur":173,"./ur.js":173,"./uz":174,"./uz-latn":175,"./uz-latn.js":175,"./uz.js":174,"./vi":176,"./vi.js":176,"./x-pseudo":177,"./x-pseudo.js":177,"./yo":178,"./yo.js":178,"./zh-cn":179,"./zh-cn.js":179,"./zh-hk":180,"./zh-hk.js":180,"./zh-tw":181,"./zh-tw.js":181};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=251},325:function(e,t,n){"use strict";var r=c(n(0)),o=c(n(10)),a=n(38),u=c(n(249)),l=c(n(331)),i=n(198);n(334);var s=c(n(336));function c(e){return e&&e.__esModule?e:{default:e}}var f=(0,a.createStore)(l.default,(0,a.applyMiddleware)(u.default));o.default.render(r.default.createElement(i.Provider,{store:f},r.default.createElement(s.default,null)),document.getElementById("root"))},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(38),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(250)),l=n(9),i=(r=l)&&r.__esModule?r:{default:r};function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c={curDate:(0,i.default)().format("YYYYMMDD"),loading:!0};t.default=(0,a.combineReducers)({newsLists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case u.GET_LATEST_DATA:return t.data.stories;case u.GET_HISTORY_DATA:return[].concat(s(e),s(t.data.stories));default:return e}},prevDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;switch(arguments[1].type){case u.PREV_DATE:return o({},e,{curDate:(0,i.default)(e.curDate).subtract(1,"day").format("YYYYMMDD")});case u.SET_START_LOAD:return o({},e,{loading:!0});case u.SET_STOP_LOAD:return o({},e,{loading:!1});default:return e}},newswiper:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case u.GET_LATEST_PIC:return t.data.top_stories;default:return e}},bgDisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{show:!1};switch(arguments[1].type){case u.SET_BG_SHOW:return o({},e,{show:!0});case u.SET_BG_HIDE:return o({},e,{show:!1});default:return e}}})},334:function(e,t,n){},336:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=f(o),u=n(242);n(338),n(340);var l=f(n(342)),i=f(n(345)),s=f(n(348)),c=f(n(429));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return a.default.createElement("div",{className:"app"},a.default.createElement(u.BrowserRouter,null,a.default.createElement(u.Switch,null,a.default.createElement(u.Route,{exact:!0,path:"/",component:s.default}),a.default.createElement(u.Route,{path:"/home",component:s.default}),a.default.createElement(u.Route,{path:"/about",component:l.default}),a.default.createElement(u.Route,{path:"/recond",component:i.default}),a.default.createElement(u.Route,{path:"/detail/:id",component:c.default}))))}}]),t}();t.default=p},338:function(e,t,n){},340:function(e,t,n){},342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r};n(343);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){return console.log(this.props),u.default.createElement("div",{className:"about"},"关于",this.props.match.url)}}]),t}();t.default=l},343:function(e,t,n){},345:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r};n(346);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"recond"},"推荐",this.props.url)}}]),t}();t.default=l},346:function(e,t,n){},348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(349)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(387);var u=n(0),l=d(u);n(395);var i=d(n(397)),s=d(n(426)),c=n(198),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(221)),p=n(38);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handelBackground=n.handelBackground.bind(n),n.state={bgStyle:{}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),a(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handelBackground)}},{key:"handelBackground",value:function(){(window.document.body.scrollTop||window.document.documentElement.scrollTop)>180?this.setState({bgStyle:{backgroundColor:"#2094bd"}}):this.setState({bgStyle:{}})}},{key:"showSide",value:function(){this.props.actions.setBgShow()}},{key:"handleHide",value:function(){this.props.actions.setBgHide()}},{key:"componentWillUnmout",value:function(){window.removeEventListener("scroll",this.handelBackground)}},{key:"render",value:function(){var e=this.props.newswiper,t=this.props.bgDisplay,n=1==this.props.bgDisplay.show?{display:"block"}:{display:"none"};return l.default.createElement("div",{className:"home"},l.default.createElement("div",{className:"blocking",style:n,onClick:this.handleHide.bind(this)}),l.default.createElement(s.default,{show:t.show}),l.default.createElement("div",{className:"header",style:this.state.bgStyle},l.default.createElement("span",{className:"menu",onClick:this.showSide.bind(this)},l.default.createElement("i",{className:"icon iconfont icon-menu"})),"今日新闻"),l.default.createElement("div",{className:"swiper",style:{height:"180px"}},l.default.createElement(r.default,o({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,autoplay:!0},{style:{height:"180px"}}),e.map(function(e,t){var n=e.image;return l.default.createElement("div",{className:"bcg",key:t,style:{height:"180px",backgroundImage:"url("+n+")",backgroundSize:"100% 100%",backgroundColor:"#ccc"}},l.default.createElement("p",{className:"title"}," ",e.title))}))),l.default.createElement(i.default,null))}}]),t}();t.default=(0,c.connect)(function(e){return{newswiper:e.newswiper,bgDisplay:e.bgDisplay}},function(e){return{actions:(0,p.bindActionCreators)(f,e)}})(h)},349:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=p(n(7)),o=p(n(2)),a=p(n(3)),u=p(n(6)),l=p(n(4)),i=p(n(5)),s=p(n(8)),c=p(n(0)),f=p(n(244));function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},h=function(e){function t(e){(0,a.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChange=function(e){n.setState({selectedIndex:e},function(){n.props.afterChange&&n.props.afterChange(e)})},n.state={selectedIndex:n.props.selectedIndex},n}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.infinite,n=e.selectedIndex,a=e.beforeChange,u=(e.afterChange,e.dots),l=d(e,["infinite","selectedIndex","beforeChange","afterChange","dots"]),i=l.prefixCls,p=l.dotActiveStyle,h=l.dotStyle,m=l.className,y=l.vertical,b=(0,o.default)({},l,{wrapAround:t,slideIndex:n,beforeSlide:a}),j=[];u&&(j=[{component:function(e){for(var t=e.slideCount,n=e.slidesToScroll,o=e.currentSlide,a=[],u=0;u<t;u+=n)a.push(u);var l=a.map(function(e){var t=(0,s.default)(i+"-wrap-dot",(0,r.default)({},i+"-wrap-dot-active",e===o)),n=e===o?p:h;return c.default.createElement("div",{className:t,key:e},c.default.createElement("span",{style:n}))});return c.default.createElement("div",{className:i+"-wrap"},l)},position:"BottomCenter"}]);var v=(0,s.default)(i,m,(0,r.default)({},i+"-vertical",y));return c.default.createElement(f.default,(0,o.default)({},b,{className:v,decorators:j,afterSlide:this.onChange}))}}]),t}(c.default.Component);t.default=h,h.defaultProps={prefixCls:"am-carousel",dots:!0,arrows:!1,autoplay:!1,infinite:!1,cellAlign:"center",selectedIndex:0,dotStyle:{},dotActiveStyle:{}},e.exports=t.default},387:function(e,t,n){"use strict";n(388),n(393)},388:function(e,t,n){"use strict";n(389),n(391)},389:function(e,t,n){},391:function(e,t,n){},393:function(e,t,n){},395:function(e,t,n){},397:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=f(o),u=f(n(398));n(401);var l=f(n(403)),i=(n(218),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n(221)),n(221)),s=n(425),c=n(198);n(38),f(n(1)),f(n(9));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleScrollEvent=(0,s.debounce)(n.handleScroll.bind(n),100),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){this.props.newsLists.length<=0?this.props.getLatest():window.document.body.scrollTop=t.scrollPoint,window.addEventListener("scroll",this.handleScrollEvent)}},{key:"handleScroll",value:function(){var e=Math.max(document.documentElement.clientHeight,window.innerHeight||0),n=window.document.body.scrollTop||window.document.documentElement.scrollTop,r=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),o=this.props.prevDate;t.scrollPoint=n,e+n+150>r&&(this.props.setStartLoad(),this.props.getHistory(o.curDate))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScrollEvent)}},{key:"render",value:function(){var e=this.props,t=e.newsLists,n=e.prevDate;return a.default.createElement("div",{className:"news-list"},a.default.createElement("ul",null,t.map(function(e,t){return a.default.createElement(u.default,{key:e.id,item:e})})),a.default.createElement(l.default,{show:n.loading,title:"加载中..."}))}}]),t}();t.default=(0,c.connect)(function(e){return{newsLists:e.newsLists,prevDate:e.prevDate,newswiper:e.newswiper}},function(e){return{getLatest:function(){e((0,i.getLatest)())},setStartLoad:function(){e((0,i.setStartLoad)())},getHistory:function(t){e((0,i.getHistory)(t))}}})(p)},398:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r};n(399);var l=n(242);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props.item;return u.default.createElement("div",null,u.default.createElement("div",{className:"new-item"},u.default.createElement(l.Link,{to:"/detail/"+e.id},u.default.createElement("span",null,e.title),u.default.createElement("img",{src:e.images,alt:""}))))}}]),t}();t.default=i},399:function(e,t,n){},401:function(e,t,n){},403:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=l(o);n(404);var u=l(n(406));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=1==this.props.show?{display:""}:{display:"none"};return a.default.createElement("div",{className:"loading-container",style:e},a.default.createElement("div",{className:"loading-wrapper"},a.default.createElement("img",{src:u.default,witdh:"32px",height:"32px",alt:"加载"}),a.default.createElement("div",{className:"loading-title"},this.props.title)))}}]),t}();t.default=i},404:function(e,t,n){},406:function(e,t){e.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"},425:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=function(e,t){var n=void 0;return function(){for(var r=this,o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];n&&clearTimeout(n),n=setTimeout(function(){e.apply(r,a)},t)}}},426:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r};n(427);var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=1==this.props.show?"show":"",t=(this.props.show,"drawer "+e);return u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:t},u.default.createElement("div",{className:"user"},u.default.createElement("img",{src:"",alt:""}),u.default.createElement("span",{className:"name"},"用户名:coco")),u.default.createElement("div",{className:"setting"},u.default.createElement("span",null,u.default.createElement("i",{className:"icon iconfont icon-shoucang"}),u.default.createElement("p",{className:"text"},"收藏")),u.default.createElement("span",null,u.default.createElement("i",{className:"icon iconfont icon-xiaoxi"}),u.default.createElement("p",{className:"text"},"消息")),u.default.createElement("span",null,u.default.createElement("i",{className:"icon iconfont icon-shezhi"}),u.default.createElement("p",{className:"text"},"设置"))),u.default.createElement("div",{className:"bottom"},u.default.createElement("span",null,u.default.createElement("i",{className:"iconfont icon-lixianxiazai"}),"离线"),u.default.createElement("span",null,u.default.createElement("i",{className:"iconfont icon-yejianzhuanhuan"}),"夜间"))))}}]),t}();t.default=l},427:function(e,t,n){},429:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=i(o);n(430);var u=n(218),l=i(n(432));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={retData:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;(0,u.getNewsDetail)(t).then(function(t){200==t.status&&e.setState({retData:t.data})})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state.retData;return a.default.createElement("div",{className:"detail"},a.default.createElement("div",{className:"top-title",style:{backgroundImage:"url("+e.image+") ",backgroundPosition:"center",height:"240px",backgroundSize:"cover"}},a.default.createElement("p",{className:"title"},e.title)),a.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.body}}),a.default.createElement(l.default,null))}}]),t}();t.default=s},430:function(e,t,n){},432:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r};n(433);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"bottom-bar"},u.default.createElement("ul",{className:"handle-list"},u.default.createElement("li",{onClick:function(){window.history.back()}},u.default.createElement("span",null,u.default.createElement("i",{className:"iconfont icon-fanhui"}))),u.default.createElement("li",null,u.default.createElement("span",null,u.default.createElement("i",{className:"iconfont icon-xiayige"}))),u.default.createElement("li",null,u.default.createElement("span",null,u.default.createElement("i",{className:"iconfont icon-up"}))),u.default.createElement("li",null,u.default.createElement("span",null,u.default.createElement("i",{className:"iconfont icon-zhuanfa"}))),u.default.createElement("li",null,u.default.createElement("span",null,u.default.createElement("i",{className:"iconfont icon-pinglun"})))))}}]),t}();t.default=l},433:function(e,t,n){}},[[325,2,1]]]);