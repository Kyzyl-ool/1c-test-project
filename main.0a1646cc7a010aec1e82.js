(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+nvO":function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.Sider=void 0;var n=r(a("q1tI")),l=a("fvF8"),o=a("gdfu"),u=a("55Ip"),i=a("BHSA");t.Sider=function(e){var t=(0,u.useLocation)(),a=(0,u.useHistory)();return n.default.createElement(o.Menu,{theme:"dark",defaultSelectedKeys:[t.pathname]},l.pages.map((function(e){return n.default.createElement(o.Menu.Item,{key:e.path},n.default.createElement(u.NavLink,{to:e.path},e.name))})),n.default.createElement(o.Menu.Item,{onClick:function(){i.localDB.deleteRows("auth",{}),i.localDB.commit(),a.push("/auth")}},"Выйти"))}},0:function(e,t){},"1MmD":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateHash=t.validate=void 0;var r=a("bCcq"),n=a("o1CL");t.validate=function(e){return(0,r.sha256)(e)===n.PASSWORD_HASH};t.validateHash=function(e){return e===n.PASSWORD_HASH}},2:function(e,t){},3:function(e,t){},"3/9E":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTypedSelector=void 0;var r=a("/MKj").useSelector;t.useTypedSelector=r},"4N/G":function(e,t,a){"use strict";var r=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.MainPage=void 0;var l=n(a("q1tI")),o=a("BHSA"),u=a("1MmD"),i=a("55Ip"),c=a("gdfu"),s=a("jSYm"),d=a("+nvO");a("r8jX");var f=r(a("ryPi")),m=f.default.Text;f.default.Title;t.MainPage=function(e){var t=(0,i.useHistory)();return(0,l.useEffect)((function(){var e=function(){t.push("/auth"),c.notification.error({message:"Не авторизован",description:"Необходимо пройти авторизацию"})};if(o.localDB.tableExists("auth")){var a=o.localDB.queryAll("auth",{});a.length&&(0,u.validateHash)(a[0].password)||e()}else e()}),[]),l.default.createElement(c.Layout,null,l.default.createElement(c.Layout.Header,{style:{color:"#fff"}},"My Finances"),l.default.createElement(c.Layout,null,l.default.createElement(c.Layout.Sider,null,l.default.createElement(d.Sider,null)),l.default.createElement(c.Layout.Content,{className:"mf-main-content"},l.default.createElement(s.Content,null),l.default.createElement(c.Layout.Footer,null,l.default.createElement(m,{type:"secondary"},"Kezhik Kyzyl-ool, 2020")))))}},"7M/w":function(e,t,a){(t=a("JPst")(!1)).push([e.i,".text_sm{font-size:12px;line-height:22px}.text_base{font-size:14px;line-height:22px}.text_lg{font-size:16px;line-height:22px}.text_linked{font-weight:bold;color:#1890ff;cursor:pointer}.text_header-color{color:rgba(0,0,0,.85) !important}.text_black-color{color:#000 !important}.text_white-color{color:#fff !important}.text_block{display:block}.text_inline{display:inline}.text_nowrap{white-space:nowrap}",""]),e.exports=t},BHSA:function(e,t,a){"use strict";var r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.initDB=t.localDB=void 0;var n=new(r(a("KXS2")).default)("localDB");t.localDB=n;var l=[{name:"auth",fields:["password"]},{name:"records",fields:["name","amount","categoryId","time"]},{name:"categories",fields:["name","color"]}];t.initDB=function(){if(n.isNew()||!n.tableExists("auth"))l.forEach((function(e){return n.createTable(e.name,e.fields)})),n.commit();else{if(!l.every((function(e){return n.tableExists(e.name)&&n.tableFields(e.name).every((function(t){return n.columnExists(e.name,t)}))})))throw Error("localDB is inconsistent");console.log("localDB is OK")}}},Bg8a:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.MonthlyStatisticsWrapper=void 0;var n=r(a("q1tI")),l=a("Khne"),o=r(a("JoUl")),u=a("BHSA"),i=a("LvDl"),c=a("b/SL"),s=a("Opvh"),d=a("qkQ6"),f=a("gdfu");t.MonthlyStatisticsWrapper=function(e){var t,a=(0,o.default)("records",(function(e){return u.localDB.queryAll(e,{})})).data;return n.default.createElement(n.default.Fragment,null,a?(t=function(e){var t=(0,i.groupBy)(e,(function(e){return new Date(e.time).getMonth()+1}));return Object.keys(t).map((function(e){return{month:(0,d.capitalize)((0,c.format)(new Date(t[e][0].time),"LLLL",{locale:s.ru})),income:t[e].reduce((function(e,t){return e+(Number(t.amount)>=0?t.amount:0)}),0),expenses:t[e].reduce((function(e,t){return e+(Number(t.amount)<0?-t.amount:0)}),0)}}))}(a),n.default.createElement(l.MonthlyStatistics,{componentId:"monthly-statistics",data:t})):n.default.createElement(f.Spin,null,"Загрузка"))}},E2ik:function(e,t,a){(t=a("JPst")(!1)).push([e.i,'.mf-auth-page-background{background:url("/public/images/sea.jpg") no-repeat;height:100%;width:100%;object-fit:contain;position:absolute;top:0;left:0;z-index:-1;opacity:.4}.mf-auth-page-auth-window{width:50%;transform:translate3d(50%, -50%, 0);top:50%;position:absolute}',""]),e.exports=t},GbSB:function(e,t,a){var r=a("LboF"),n=a("asjm");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var l={insert:"head",singleton:!1};r(n,l);e.exports=n.locals||{}},JKdw:function(e,t,a){"use strict";var r=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.RecordsPage=void 0;var l=n(a("J4zp")),o=n(a("o0o1")),u=n(a("yXPU")),i=r(a("q1tI")),c=r(a("JoUl")),s=a("BHSA"),d=a("gdfu"),f=n(a("ryPi")),m=a("/MKj"),p=a("ZTu4"),h=a("3/9E"),v=a("v39H"),y=a("pYK2"),g=a("Pl7t"),j=f.default.Text,b=f.default.Title,E=function(){var e=(0,u.default)(o.default.mark((function e(t){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.localDB.deleteRows("records",{ID:t}),s.localDB.commit(),e.next=4,(0,c.mutate)("records");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){return s.localDB.query("categories",{ID:e})[0]},S=[{key:"name",title:"Название",dataIndex:"name",render:function(e,t){return i.default.createElement(d.Space,{direction:"vertical",size:0},i.default.createElement(j,{size:"base"},e),i.default.createElement(j,{size:"sm",type:"secondary"},"".concat(new Date(t.time).toLocaleDateString())))}},{key:"category",title:"Категория",dataIndex:"categoryId",render:function(e){return i.default.createElement(i.default.Fragment,null,i.default.createElement(d.Space,{direction:"horizontal"},i.default.createElement(y.ColoredCircle,{hexColor:x(e).color,size:"medium"}),i.default.createElement(j,null,x(e).name)))}},{key:"amount",title:"Сумма (руб.)",dataIndex:"amount",render:function(e){return Math.abs(Number(e))}},{key:"type",title:"Тип",render:function(e,t){return Number(t.amount)<0?i.default.createElement(d.Tag,{color:"error"},"Затраты"):i.default.createElement(d.Tag,{color:"success"},"Начисления")}},{key:"actions",title:"Действия",render:function(e,t){return i.default.createElement(d.Button,{type:"text",danger:!0,onClick:function(){return E(t.ID)}},"Удалить")}}];t.RecordsPage=function(e){var t=(0,c.default)("records",(function(e){return s.localDB.queryAll(e,{})})).data,a=(0,c.default)("categories",(function(e){return s.localDB.queryAll(e,{})}),{}).data,r=(0,h.useTypedSelector)((function(e){return e.record})).isCreatingNew,n=(0,m.useDispatch)(),f=(0,i.useState)(!1),j=(0,l.default)(f,2),E=j[0],x=j[1],w=function(){var e=(0,u.default)(o.default.mark((function e(t){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.localDB.insert("records",{name:t.name,amount:t.amount*t.type,time:(new Date).toISOString(),categoryId:t.category}),s.localDB.commit(),e.next=4,(0,c.mutate)("records");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.default.createElement(i.default.Fragment,null,i.default.createElement(b,{level:3},"Ваши записи"),i.default.createElement(d.Table,{dataSource:t&&t.map((function(e){return Object.assign(e,{key:e.ID})})),columns:S,locale:{emptyText:"Нет ни одной записи в хранилище"}}),i.default.createElement(d.Space,{direction:"vertical",size:"large"},r?i.default.createElement(d.Form,{className:"mf-form mf-form_bordered",onFinish:w},i.default.createElement(d.Form.Item,{label:"Вид записи",name:"type",rules:[{required:!0,message:"Выберите вид записи"}]},i.default.createElement(d.Radio.Group,null,i.default.createElement(d.Radio,{value:1},"Доход"),i.default.createElement(d.Radio,{value:-1},"Расход"))),i.default.createElement(d.Form.Item,{label:"Название записи",name:"name",rules:[{required:!0,message:"Введите название записи"}]},i.default.createElement(d.Input,{placeholder:"Введите название записи"})),i.default.createElement(d.Form.Item,{label:"Сумма",name:"amount",rules:[{required:!0,message:"Введите сумму"}]},i.default.createElement(d.Input,{prefix:"₽",placeholder:"Введите сумму",type:"number",suffix:"RUB"})),i.default.createElement(d.Form.Item,{label:"Категория",name:"category",rules:[{required:!0,message:"Выберите категорию записи"}]},i.default.createElement(d.Select,null,a.map((function(e){return i.default.createElement(d.Select.Option,{label:e.name,value:e.ID,key:e.ID},i.default.createElement(d.Space,{direction:"horizontal"},i.default.createElement(y.ColoredCircle,{hexColor:e.color,size:"small"}),e.name))})))),i.default.createElement(d.Form.Item,null,i.default.createElement(d.Space,{direction:"horizontal"},i.default.createElement(d.Button,{type:"primary",htmlType:"submit"},"Добавить запись"),i.default.createElement(d.Button,{onClick:function(){return n((0,p.addingNewAction)(!1))}},"Отменить")))):i.default.createElement(i.default.Fragment,null,i.default.createElement(d.Button,{ghost:!0,type:"primary",onClick:function(){return n((0,p.addingNewAction)())}},"+ Добавить новую запись"),i.default.createElement(d.Button,{onClick:function(){return x(!0)}},"Импорт записей из XLSX"),i.default.createElement(g.ModalXLSX,{visible:E,onOk:function(){return x(!1)},onCancel:function(){return x(!1)}})),i.default.createElement(v.Categories,{categoriesRows:a})))}},JhPU:function(e,t,a){"use strict";var r=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsPage=void 0;var l=n(a("J4zp")),o=r(a("q1tI")),u=n(a("ryPi")),i=a("gdfu"),c=a("BHSA"),s=a("55Ip"),d=a("VtrM"),f=u.default.Text,m=u.default.Title;t.SettingsPage=function(e){var t=(0,o.useState)(!1),a=(0,l.default)(t,2),r=a[0],n=a[1],u=(0,s.useHistory)();return o.default.createElement(o.default.Fragment,null,o.default.createElement(m,{level:3},"Настройки"),o.default.createElement(i.Button,{danger:!0,onClick:function(){return n(!0)}},"Очистить базу данных"),o.default.createElement(i.Modal,{onCancel:function(){return n(!1)},onOk:function(){c.localDB.dropTable("auth"),c.localDB.dropTable("categories"),c.localDB.dropTable("records"),c.localDB.commit(),(0,d.mutate)("auth"),(0,d.mutate)("categories"),(0,d.mutate)("records"),n(!1),u.push("/auth")},visible:r,title:"Подтверждение"},o.default.createElement(f,null,"Вы уверены, что хотите очистить базу данных?")))}},Khne:function(e,t,a){"use strict";var r=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.MonthlyStatistics=void 0;var l=n(a("QILm")),o=r(a("q1tI")),u=r(a("cclQ")),i=r(a("xJfa")),c=n(a("WlQZ"));u.useTheme(c.default);t.MonthlyStatistics=function(e){var t=e.componentId,a=((0,l.default)(e,["componentId"]),(0,o.useRef)(null));return(0,o.useLayoutEffect)((function(){var r=u.create(t,i.XYChart);r.data=e.data;var n=r.yAxes.push(new i.CategoryAxis);function l(e,t){var a=r.series.push(new i.ColumnSeries);a.dataFields.valueX=e,a.dataFields.categoryY="month",a.name=t,a.columns.template.tooltipText="{name}: [bold]{valueX}[/]",a.columns.template.height=u.percent(100),a.sequencedInterpolation=!0;var n=a.bullets.push(new i.LabelBullet);n.label.text="{valueX}",n.label.horizontalCenter="left",n.label.dx=10,n.label.hideOversized=!1,n.label.truncate=!1;var l=a.bullets.push(new i.LabelBullet);l.label.text="{name}",l.label.horizontalCenter="right",l.label.dx=-10,l.label.fill=u.color("#fff"),l.label.hideOversized=!1,l.label.truncate=!1}return n.dataFields.category="month",n.numberFormatter.numberFormat="#",n.renderer.inversed=!0,n.renderer.grid.template.location=0,n.renderer.cellStartLocation=.1,n.renderer.cellEndLocation=.9,r.xAxes.push(new i.ValueAxis).renderer.opposite=!0,l("income","Поступления"),l("expenses","Затраты"),a.current=r,function(){r.dispose()}}),[]),o.default.createElement("div",{id:t,style:{width:"100%",height:"500px"}})}},L8Xe:function(e,t,a){var r=a("LboF"),n=a("f8er");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var l={insert:"head",singleton:!1};r(n,l);e.exports=n.locals||{}},MSsH:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("q1tI")),l=a("oooE"),o=a("55Ip"),u=a("4N/G");a("L8Xe");var i=function(){return n.default.createElement(o.Switch,null,n.default.createElement(o.Route,{path:"/auth"},n.default.createElement(l.AuthPage,null)),n.default.createElement(o.Route,{path:"/"},n.default.createElement(u.MainPage,null)),n.default.createElement(o.Redirect,{to:"/auth"}))};t.default=i},Norv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomHexColor=t.RGBToHex=void 0;var r=function(e,t,a){return"#"+Number(e).toString(16).padStart(2,"0")+Number(t).toString(16).padStart(2,"0")+Number(a).toString(16).padStart(2,"0")};t.RGBToHex=r;t.randomHexColor=function(){var e=Math.round(255*Math.random()),t=Math.round(255*Math.random()),a=Math.round(255*Math.random());return r(e,t,a)}},Pl7t:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.ModalXLSX=void 0;var n=r(a("QILm")),l=r(a("q1tI")),o=a("gdfu"),u=r(a("EUZL")),i=a("VtrM"),c=a("BHSA"),s=a("Norv"),d=[{key:"name",title:"name",dataIndex:"name"},{key:"amount",title:"amount",dataIndex:"amount"},{key:"category",title:"category",dataIndex:"category"},{key:"time",title:"time",dataIndex:"time"}],f=[{name:"Половина зарплаты за июль",amount:"15000",categoryId:"Зарплата",time:"15.07.2020, 20:15:50",key:"1"}];t.ModalXLSX=function(e){var t=e.visible,a=e.onCancel,r=e.onOk;(0,n.default)(e,["visible","onCancel","onOk"]);return l.default.createElement(o.Modal,{title:"Импорт записей из XLSX",visible:t,onCancel:a,onOk:r,okText:"Загрузить",cancelText:"Отмена",okButtonProps:{htmlType:"submit",form:"xlsx-file"}},"Перед импортированием убедитесь, что XLSX-файл имеет следующий формат:",l.default.createElement("br",null),l.default.createElement(o.Table,{columns:d,dataSource:f,pagination:!1}),l.default.createElement("br",null),l.default.createElement(o.Form,{name:"xlsx-file"},l.default.createElement(o.Form.Item,{label:"Файл",name:"file",rules:[{required:!0,message:"Загрузите файл"}]},l.default.createElement(o.Input,{type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",onChange:function(e){var t=e.target.files[0],a=new FileReader,n=!!a.readAsBinaryString;a.onload=function(e){var t=e.target.result,a=u.default.read(t,{type:n?"binary":"array",cellDates:!0,dateNF:"dd.mm.yyyy"}),l=a.SheetNames[0],d=a.Sheets[l];u.default.utils.sheet_to_json(d,{header:1,raw:!0,dateNF:"dd.mm.yyyy"}).slice(1).map((function(e){var t=c.localDB.query("categories",{name:e[2]})[0];if(t)return{name:e[0],amount:e[1],categoryId:t.ID,time:new Date(e[3])};var a=c.localDB.insert("categories",{name:e[2],color:(0,s.randomHexColor)()});return{name:e[0],amount:e[1],categoryId:a,time:new Date(e[3])}})).forEach((function(e){return c.localDB.insert("records",e)})),c.localDB.commit(),(0,i.mutate)("records"),(0,i.mutate)("categories"),o.message.success("Файл импортирован"),r()},n?a.readAsBinaryString(t):a.readAsArrayBuffer(t)}}))))}},RIZ1:function(e,t,a){"use strict";var r=a("TqRt"),n=r(a("q1tI")),l=r(a("i8i4")),o=r(a("MSsH")),u=a("55Ip"),i=a("gdfu"),c=a("/MKj"),s=r(a("u2+6"));a("TpwP");var d=i.Alert.ErrorBoundary,f=(0,s.default)({});l.default.render(n.default.createElement(d,null,n.default.createElement(u.BrowserRouter,null,n.default.createElement(c.Provider,{store:f},n.default.createElement(o.default,null)))),document.getElementById("root"))},RnhZ:function(e,t,a){var r={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function n(e){var t=l(e);return a(t)}function l(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=l,e.exports=n,n.id="RnhZ"},SVtn:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RECORD_ADDING_NEW=void 0;t.RECORD_ADDING_NEW="RECORD_ADDING_NEW"},ShpC:function(e,t,a){(t=a("JPst")(!1)).push([e.i,".charts-wrapper{display:flex;justify-content:space-between}.charts-wrapper__left,.charts-wrapper__right{width:100%;text-align:center}",""]),e.exports=t},ZTu4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addingNewAction=void 0;var r=a("SVtn");t.addingNewAction=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:r.RECORD_ADDING_NEW,payload:{state:e}}}},asjm:function(e,t,a){(t=a("JPst")(!1)).push([e.i,".mf-colored-circle{border-radius:50%}.mf-colored-circle_small{width:12px;height:12px}.mf-colored-circle_medium{width:16px;height:16px}.mf-colored-circle_large{width:24px;height:24px}",""]),e.exports=t},f8er:function(e,t,a){(t=a("JPst")(!1)).push([e.i,".mf-form{padding:24px 30px !important;background-color:rgba(255,255,255,.8)}.mf-form_bordered{border-radius:2px;border:1px solid rgba(24,144,255,.5)}#root{height:100%}.ant-layout{height:100%}.ant-layout-footer{position:absolute;bottom:0;margin-top:24px;text-align:center}.ant-space{width:100%;height:100%;overflow-y:scroll}.ant-layout-footer{position:unset}",""]),e.exports=t},fvF8:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.pages=void 0;var n=r(a("q1tI")),l=a("ulBj"),o=a("JKdw"),u=a("JhPU"),i=a("Bg8a"),c=[{path:"/",content:n.default.createElement(i.MonthlyStatisticsWrapper,null),name:"Главная"},{path:"/statistics",content:n.default.createElement(l.StatisticsWrapper,null),name:"Структура"},{path:"/records",content:n.default.createElement(o.RecordsPage,null),name:"Записи и категории"},{path:"/settings",content:n.default.createElement(u.SettingsPage,null),name:"Настройки"}];t.pages=c},il9A:function(e,t,a){var r=a("LboF"),n=a("7M/w");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var l={insert:"head",singleton:!1};r(n,l);e.exports=n.locals||{}},jSYm:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.Content=void 0;var n=r(a("q1tI")),l=a("fvF8"),o=a("55Ip");t.Content=function(e){return n.default.createElement(o.Switch,null,l.pages.map((function(e){return n.default.createElement(o.Route,{key:e.path,exact:!0,path:e.path},e.content)})))}},mcYI:function(e,t,a){"use strict";var r=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.Statistics=void 0;var l=n(a("QILm")),o=r(a("q1tI")),u=r(a("cclQ")),i=r(a("xJfa")),c=r(a("EIvR")),s=n(a("WlQZ"));u.useTheme(s.default);t.Statistics=function(e){var t=e.componentId,a=((0,l.default)(e,["componentId"]),(0,o.useRef)(null));return(0,o.useLayoutEffect)((function(){var r=u.create(t,c.Sunburst);r.padding(50,0,100,0),r.radius=u.percent(98),r.data=e.data,r.colors.step=2,r.fontSize=11,r.innerRadius=u.percent(10),r.dataFields.value="value",r.dataFields.name="name",r.dataFields.children="children";var n=new c.SunburstSeries;n.hiddenInLegend=!1,r.seriesTemplates.setKey("0",n),n.labels.template.truncate=!0,n.labels.template.hideOversized=!0,n.labels.template.adapter.add("rotation",(function(e,t){return t.maxWidth=t.dataItem.slice.radius-t.dataItem.slice.innerRadius-10,t.maxHeight=Math.abs(t.dataItem.slice.arc*(t.dataItem.slice.innerRadius+t.dataItem.slice.radius)/2*u.math.RADIANS),e}));var l=n.clone();r.seriesTemplates.setKey("1",l),l.fillOpacity=.75,l.hiddenInLegend=!0,l.labels.template.inside=!1,l.labels.template.fill=u.color("#000"),l.labels.template.text="{category}: {value.value}₽";var o=new i.Legend;return o.padding(50,0,0,0),r.legend=o,a.current=r,function(){r.dispose()}}),[]),o.default.createElement("div",{id:t,style:{width:"100%",height:"500px"}})}},o1CL:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PASSWORD_HASH=void 0;t.PASSWORD_HASH="1b4f0e9851971998e732078544c96b36c3d01cedf7caa332359d6f1d83567014"},o2Xt:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.record=void 0;var n=r(a("lSNA"));function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){(0,n.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={newRecord:{name:"",amount:"",categoryId:"",type:""},isCreatingNew:!1};t.record=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECORD_ADDING_NEW":return o(o({},e),{},{isCreatingNew:t.payload.state});default:return e}}},oooE:function(e,t,a){"use strict";var r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.AuthPage=void 0;var n=r(a("q1tI")),l=a("gdfu"),o=a("bCcq"),u=a("55Ip"),i=a("BHSA"),c=a("1MmD");a("z/JW");t.AuthPage=function(e){var t=(0,u.useHistory)();(0,n.useEffect)((function(){(0,i.initDB)()}),[]);return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"mf-auth-page-background"}),n.default.createElement(l.Form,{onFinish:function(e){(0,c.validate)(e.password)&&(i.localDB.insert("auth",{password:(0,o.sha256)(e.password)}),i.localDB.commit(),t.push("/"),l.notification.success({message:"Успешная авторизация"}))},className:"mf-form mf-form_bordered mf-auth-page-auth-window"},n.default.createElement(l.Form.Item,{label:"Пароль",name:"password",rules:[{required:!0,message:"Введите пароль"}]},n.default.createElement(l.Input,{type:"password",placeholder:"Введите пароль"})),n.default.createElement(l.Form.Item,{wrapperCol:{span:24,offset:8}},n.default.createElement(l.Col,{span:12},n.default.createElement(l.Button,{type:"primary",htmlType:"submit",block:!0},"Войти")))))}},"p+in":function(e,t,a){(t=a("JPst")(!1)).push([e.i,".mf-main-content{padding:24px 30px}",""]),e.exports=t},pYK2:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.ColoredCircle=void 0;var n=r(a("lSNA")),l=r(a("QILm")),o=r(a("q1tI"));a("GbSB");var u=r(a("TSYQ"));t.ColoredCircle=function(e){var t,a=e.size,r=e.hexColor,i=((0,l.default)(e,["size","hexColor"]),(0,u.default)((t={},(0,n.default)(t,"mf-colored-circle",!0),(0,n.default)(t,"mf-colored-circle_".concat(a),!0),t)));return o.default.createElement("div",{className:i,style:{backgroundColor:r}})}},pzoG:function(e,t,a){var r=a("LboF"),n=a("ShpC");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var l={insert:"head",singleton:!1};r(n,l);e.exports=n.locals||{}},qkQ6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},r8jX:function(e,t,a){var r=a("LboF"),n=a("p+in");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var l={insert:"head",singleton:!1};r(n,l);e.exports=n.locals||{}},ryPi:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("pVnL")),l=r(a("lSNA")),o=r(a("QILm")),u=r(a("q1tI")),i=a("gdfu"),c=r(a("TSYQ"));a("il9A");var s=i.Typography.Text,d=i.Typography.Title,f={Title:function(e){var t=e.children,a=(0,o.default)(e,["children"]);return u.default.createElement(d,a,t)},Text:function(e){var t,a=e.children,r=e.size,i=e.className,d=e.link,f=e.color,m=e.block,p=e.inline,h=e.wrap,v=void 0===h||h,y=(0,o.default)(e,["children","size","className","link","color","block","inline","wrap"]);console.assert(m!==p||m===p&&!m);var g=(0,c.default)((t={},(0,l.default)(t,i,!0),(0,l.default)(t,"text",!0),(0,l.default)(t,r&&"text_".concat(r),!0),(0,l.default)(t,"text_linked",d),(0,l.default)(t,"text_header-color","header"===f),(0,l.default)(t,"text_black-color","black"===f),(0,l.default)(t,"text_white-color","white"===f),(0,l.default)(t,"text_block",m),(0,l.default)(t,"text_inline",p),(0,l.default)(t,"text_nowrap",!v),t));return u.default.createElement(s,(0,n.default)({className:g},y),d?u.default.createElement("a",{target:"_blank",rel:"noreferrer",href:d},a):a)}};t.default=f},"u2+6":function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,n.combineReducers)({record:o.record});return(0,n.createStore)(t,e,i)};var n=a("ANjH"),l=r(a("sINF")),o=a("o2Xt"),u="__REDUX_DEVTOOLS_EXTENSION_COMPOSE__",i=(window&&u in window&&window[u]||n.compose)((0,n.applyMiddleware)(l.default))},ulBj:function(e,t,a){"use strict";var r=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.StatisticsWrapper=void 0;var l=n(a("lSNA")),o=r(a("q1tI")),u=a("mcYI"),i=n(a("ryPi")),c=n(a("JoUl")),s=a("BHSA"),d=n(a("LvDl")),f=a("gdfu");a("pzoG");i.default.Text;var m=i.default.Title,p=function(e,t){return o.default.createElement(u.Statistics,{data:e,componentId:t})};t.StatisticsWrapper=function(e){var t=(0,c.default)("records",(function(e){return s.localDB.queryAll(e,{})})).data,a=(0,c.default)("categories",(function(e){return s.localDB.queryAll(e,{})}),{}).data,r=(0,o.useMemo)((function(){if(!a)return{};var e={};return a.forEach((function(t){return Object.assign(e,(0,l.default)({},t.ID,{name:t.name,color:t.color}))})),e}),[a]),n=d.default.groupBy(t,"categoryId"),u=!d.default.isEmpty(r)&&Object.keys(n).filter((function(e){return Number(n[e][0].amount)>=0})).map((function(e){return{name:r[e].name,children:n[e].map((function(e){return{name:e.name,value:Math.abs(Number(e.amount))}}))}})),i=!d.default.isEmpty(r)&&Object.keys(n).filter((function(e){return Number(n[e][0].amount)<0})).map((function(e){return{name:r[e].name,children:n[e].map((function(e){return{name:e.name,value:Math.abs(Number(e.amount))}}))}}));return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"charts-wrapper"},o.default.createElement("div",{className:"charts-wrapper__left"},o.default.createElement(m,{level:4},"Поступления"),u?p(u,"accruals-chart-div"):o.default.createElement(f.Spin,null,"Загрузка")),o.default.createElement("div",{className:"charts-wrapper__right"},o.default.createElement(m,{level:4},"Затраты"),u?p(i,"costs-chart-div"):o.default.createElement(f.Spin,null,"Загрузка"))))}},v39H:function(e,t,a){"use strict";var r=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.Categories=void 0;var l=n(a("o0o1")),o=n(a("yXPU")),u=n(a("J4zp")),i=n(a("QILm")),c=r(a("q1tI")),s=n(a("ryPi")),d=a("gdfu"),f=a("JoUl"),m=a("BHSA"),p=a("WFjJ"),h=a("Norv"),v=a("pYK2"),y=(s.default.Text,s.default.Title);t.Categories=function(e){var t=e.categoriesRows,a=void 0===t?[]:t,r=((0,i.default)(e,["categoriesRows"]),(0,c.useState)(!1)),n=(0,u.default)(r,2),s=n[0],g=n[1],j=function(){var e=(0,o.default)(l.default.mark((function e(t){return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.localDB.insert("categories",{name:t.name,color:(0,h.RGBToHex)(t.color.rgb.r,t.color.rgb.g,t.color.rgb.b)}),m.localDB.commit(),e.next=4,(0,f.mutate)("categories");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.default.createElement(c.default.Fragment,null,c.default.createElement(y,{level:3},"Категории записей"),c.default.createElement(d.List,{loading:!a,dataSource:a,locale:{emptyText:"Добавьте новую категорию"},renderItem:function(e){return c.default.createElement(d.List.Item,null,c.default.createElement(d.Space,{direction:"horizontal"},c.default.createElement(v.ColoredCircle,{hexColor:e.color,size:"medium"}),e.name))}},a.length?null:c.default.createElement(d.Empty,{description:"Добавьте новую категорию"}),s?c.default.createElement(d.Form,{onFinish:j,className:"mf-form mf-form_bordered"},c.default.createElement(d.Form.Item,{label:"Название категории",name:"name",rules:[{required:!0,message:"Введите название категории"}]},c.default.createElement(d.Input,{placeholder:"Введите название категории"})),c.default.createElement(d.Form.Item,{label:"Цвет",name:"color",rules:[{required:!0,message:"Выберите цвет"}]},c.default.createElement(p.CirclePicker,null)),c.default.createElement(d.Space,{direction:"horizontal"},c.default.createElement(d.Button,{type:"primary",htmlType:"submit"},"Добавить новую категорию"),c.default.createElement(d.Button,{onClick:function(){return g(!1)}},"Отмена"))):c.default.createElement(d.Button,{type:"primary",ghost:!0,onClick:function(){return g(!0)},style:{marginTop:"16px"}},"+ Добавить")))}},"z/JW":function(e,t,a){var r=a("LboF"),n=a("E2ik");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var l={insert:"head",singleton:!1};r(n,l);e.exports=n.locals||{}}},[["RIZ1",102,0,1,15,5,27,4,31,72,53,61,57,75,69,62,47,66,50,65,91,40,58,49,52,68,78,67,41,43,70,30,39,45,51,54,55,64,100,37,44,46,59,63,76,101,20,73,74,71,85,92,6,7,8,9,10,11,12,14,16,17,18,19,21,22,23,24,25,26,28,29,32,33,35,36,38,42,48,56,60,77,80,79,81,82,83,86,88,89,90,94,95,96,97,98,99]]]);