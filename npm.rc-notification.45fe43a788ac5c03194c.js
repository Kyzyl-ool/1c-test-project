(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"8HVG":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("KQm4"),o=n("ODXe"),c=n("q1tI"),a=n("EE3K");function i(e){var t=c.useRef({}),n=c.useState([]),i=Object(o.a)(n,2),s=i[0],u=i[1];return[function(n){e.add(n,(function(e,n){var o=n.key;if(e&&!t.current[o]){var i=c.createElement(a.a,Object.assign({},n,{holder:e}));t.current[o]=i,u((function(e){return[].concat(Object(r.a)(e),[i])}))}}))},c.createElement(c.Fragment,null,s)]}},"8tx+":function(e,t,n){"use strict";var r=n("Ff2n"),o=n("rePB"),c=n("1OyB"),a=n("vuIU"),i=n("Ji7U"),s=n("md7G"),u=n("foSv"),l=n("q1tI"),f=n.n(l),p=n("i8i4"),d=n.n(p),m=n("MFj2"),y=n("2GS6"),h=n("TSYQ"),v=n.n(h),b=n("EE3K"),O=n("8HVG");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var g=0,T=Date.now();function E(){var e=g;return g+=1,"rcNotification_".concat(T,"_").concat(e)}var N=function(e){Object(i.a)(n,e);var t=k(n);function n(){var e;return Object(c.a)(this,n),(e=t.apply(this,arguments)).state={notices:[]},e.hookRefs=new Map,e.add=function(t,n){t.key=t.key||E();var r=t.key,o=e.props.maxCount;e.setState((function(e){var c=e.notices,a=c.map((function(e){return e.notice.key})).indexOf(r),i=c.concat();return-1!==a?i.splice(a,1,{notice:t,holderCallback:n}):(o&&c.length>=o&&(t.updateKey=i[0].notice.updateKey||i[0].notice.key,i.shift()),i.push({notice:t,holderCallback:n})),{notices:i}}))},e.remove=function(t){e.setState((function(e){return{notices:e.notices.filter((function(e){return e.notice.key!==t}))}}))},e}return Object(a.a)(n,[{key:"getTransitionName",value:function(){var e=this.props,t=e.prefixCls,n=e.animation,r=this.props.transitionName;return!r&&n&&(r="".concat(t,"-").concat(n)),r}},{key:"render",value:function(){var e=this,t=this.state.notices,n=this.props,r=n.prefixCls,o=n.className,c=n.closeIcon,a=n.style,i=t.map((function(n,o){var a=n.notice,i=n.holderCallback,s=Boolean(o===t.length-1&&a.updateKey),u=a.updateKey?a.updateKey:a.key,l=Object(y.a)(e.remove.bind(e,a.key),a.onClose),p=j(j(j({prefixCls:r,closeIcon:c},a),a.props),{},{key:u,update:s,onClose:l,onClick:a.onClick,children:a.content});return i?f.a.createElement("div",{key:u,className:"".concat(r,"-hook-holder"),ref:function(t){void 0!==u&&(t?(e.hookRefs.set(u,t),i(t,p)):e.hookRefs.delete(u))}}):f.a.createElement(b.a,Object.assign({},p))}));return f.a.createElement("div",{className:v()(r,o),style:a},f.a.createElement(m.a,{transitionName:this.getTransitionName()},i))}}]),n}(l.Component);N.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},N.newInstance=function(e,t){var n=e||{},o=n.getContainer,c=Object(r.a)(n,["getContainer"]),a=document.createElement("div");o?o().appendChild(a):document.body.appendChild(a);var i=!1;d.a.render(f.a.createElement(N,Object.assign({},c,{ref:function(e){i||(i=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){d.a.unmountComponentAtNode(a),a.parentNode&&a.parentNode.removeChild(a)},useNotification:function(){return Object(O.a)(e)}}))}})),a)};var w=N;t.a=w},EE3K:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("rePB"),o=n("1OyB"),c=n("vuIU"),a=n("Ji7U"),i=n("md7G"),s=n("foSv"),u=n("q1tI"),l=n.n(u),f=n("i8i4"),p=n.n(f),d=n("TSYQ"),m=n.n(d);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var h=function(e){Object(a.a)(n,e);var t=y(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).closeTimer=null,e.close=function(t){t&&t.stopPropagation(),e.clearCloseTimer();var n=e.props.onClose;n&&n()},e.startCloseTimer=function(){e.props.duration&&(e.closeTimer=window.setTimeout((function(){e.close()}),1e3*e.props.duration))},e.clearCloseTimer=function(){e.closeTimer&&(clearTimeout(e.closeTimer),e.closeTimer=null)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.update)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,o=t.className,c=t.closable,a=t.closeIcon,i=t.style,s=t.onClick,u=t.children,f=t.holder,d="".concat(n,"-notice"),y=Object.keys(this.props).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||(t[n]=e.props[n]),t}),{}),h=l.a.createElement("div",Object.assign({className:m()(d,o,Object(r.a)({},"".concat(d,"-closable"),c)),style:i,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:s},y),l.a.createElement("div",{className:"".concat(d,"-content")},u),c?l.a.createElement("a",{tabIndex:0,onClick:this.close,className:"".concat(d,"-close")},a||l.a.createElement("span",{className:"".concat(d,"-close-x")})):null);return f?p.a.createPortal(h,f):h}}]),n}(u.Component);h.defaultProps={onClose:function(){},duration:1.5,style:{right:"50%"}}}}]);