(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"9mu1":function(e,n,t){"use strict";var r=t("ODXe"),c=t("U8pU"),u=t("q1tI"),i=t.n(u),a=t("c+Xe"),o=t("kaUV"),l=t("zT1h"),f=t("bdgK"),s=t("l4aY");function d(e,n){var t=null,c=null;var u=new f.default((function(e){var u=Object(r.a)(e,1)[0].target.getBoundingClientRect(),i=u.width,a=u.height,o=Math.floor(i),l=Math.floor(a);t===o&&c===l||n({width:o,height:l}),t=o,c=l}));return e&&u.observe(e),function(){u.disconnect()}}function m(e){return"function"!=typeof e?null:e()}function v(e){return"object"===Object(c.a)(e)&&e?e:null}var g=i.a.forwardRef((function(e,n){var t=e.children,c=e.disabled,u=e.target,f=e.align,g=e.onAlign,w=e.monitorWindowResize,p=e.monitorBufferTime,b=void 0===p?0:p,h=i.a.useRef({}),R=i.a.useRef(),j=i.a.Children.only(t),O=i.a.useRef({});O.current.disabled=c,O.current.target=u,O.current.onAlign=g;var E=function(e,n){var t=i.a.useRef(!1),r=i.a.useRef(null);function c(){window.clearTimeout(r.current)}return[function u(i){if(t.current&&!0!==i)c(),r.current=window.setTimeout((function(){t.current=!1,u()}),n);else{if(!1===e())return;t.current=!0,c(),r.current=window.setTimeout((function(){t.current=!1}),n)}},function(){t.current=!1,c()}]}((function(){var e=O.current,n=e.disabled,t=e.target;if(!n&&t){var r,c=R.current,u=m(t),i=v(t);h.current.element=u,h.current.point=i;var a=document.activeElement;return u?r=Object(o.a)(c,u,f):i&&(r=Object(o.b)(c,i,f)),function(e,n){e!==document.activeElement&&Object(s.a)(n,e)&&"function"==typeof e.focus&&e.focus()}(a,c),g&&g(c,r),!0}return!1}),b),X=Object(r.a)(E,2),Y=X[0],T=X[1],y=i.a.useRef({cancel:function(){}}),A=i.a.useRef({cancel:function(){}});i.a.useEffect((function(){var e,n,t=m(u),r=v(u);R.current!==A.current.element&&(A.current.cancel(),A.current.element=R.current,A.current.cancel=d(R.current,Y)),h.current.element===t&&((e=h.current.point)===(n=r)||e&&n&&("pageX"in n&&"pageY"in n?e.pageX===n.pageX&&e.pageY===n.pageY:"clientX"in n&&"clientY"in n&&e.clientX===n.clientX&&e.clientY===n.clientY))||(Y(),y.current.element!==t&&(y.current.cancel(),y.current.element=t,y.current.cancel=d(t,Y)))})),i.a.useEffect((function(){c?T():Y()}),[c]);var k=i.a.useRef(null);return i.a.useEffect((function(){w?k.current||(k.current=Object(l.a)(window,"resize",Y)):k.current&&(k.current.remove(),k.current=null)}),[w]),i.a.useEffect((function(){return function(){y.current.cancel(),A.current.cancel(),k.current&&k.current.remove(),T()}}),[]),i.a.useImperativeHandle(n,(function(){return{forceAlign:function(){return Y(!0)}}})),i.a.isValidElement(j)&&(j=i.a.cloneElement(j,{ref:Object(a.a)(j.ref,R)})),j}));g.displayName="Align";var w=g;n.a=w}}]);