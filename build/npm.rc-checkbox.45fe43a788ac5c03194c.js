(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{x1Ya:function(e,t,n){"use strict";var c=n("wx14"),r=n("Ff2n"),a=n("rePB"),o=n("1OyB"),u=n("vuIU"),i=n("Ji7U"),s=n("md7G"),l=n("foSv"),p=n("q1tI"),f=n.n(p),d=n("TSYQ"),h=n.n(d);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(s.a)(this,n)}}var v=function(e){Object(i.a)(n,e);var t=O(n);function n(e){var c;Object(o.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=c.props,n=t.disabled,r=t.onChange;n||("checked"in c.props||c.setState({checked:e.target.checked}),r&&r({target:y(y({},c.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},c.saveInput=function(e){c.input=e};var r="checked"in e?e.checked:e.defaultChecked;return c.state={checked:r},c}return Object(u.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,u=t.style,i=t.name,s=t.id,l=t.type,p=t.disabled,d=t.readOnly,b=t.tabIndex,y=t.onClick,O=t.onFocus,v=t.onBlur,k=t.autoFocus,j=t.value,g=t.required,m=Object(r.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value","required"]),C=Object.keys(m).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=m[t]),e}),{}),P=this.state.checked,w=h()(n,o,(e={},Object(a.a)(e,"".concat(n,"-checked"),P),Object(a.a)(e,"".concat(n,"-disabled"),p),e));return f.a.createElement("span",{className:w,style:u},f.a.createElement("input",Object(c.a)({name:i,id:s,type:l,required:g,readOnly:d,disabled:p,tabIndex:b,className:"".concat(n,"-input"),checked:!!P,onClick:y,onFocus:O,onBlur:v,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:j},C)),f.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?y(y({},t),{},{checked:e.checked}):null}}]),n}(p.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},t.a=v}}]);