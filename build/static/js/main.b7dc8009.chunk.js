(this["webpackJsonppatronum-mobile"]=this["webpackJsonppatronum-mobile"]||[]).push([[0],{110:function(t,e,a){},111:function(t,e,a){},199:function(t,e,a){"use strict";a.r(e);var n=a(10),s=a(0),o=a.n(s),c=a(9),i=a.n(c),l=(a(110),a(111),a(36)),r=a(38),d=a(37),u=(a(112),a(22)),j=a(52),h=a.n(j),p=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={user:localStorage.getItem("username"),password:localStorage.getItem("userpassword")},t.inputuserChange=function(e){t.setState({user:e})},t.inputpasswordChange=function(e){t.setState({password:e})},t.clickAlert=function(e){var a=t.state.user,n=t.state.password;h.a.post("https://happyyuwei.xyz:17615/rest/auth/login",{userId:a,password:n}).then((function(t){var e=t.data;localStorage.setItem("username",a),localStorage.setItem("userpassword",n),localStorage.setItem("token",e.token),window.location.href="/patronum/#/list"})).catch((function(e){console.log(e),t.failLogonToast()}))},t.failLogonToast=function(){u.c.fail("\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef",1)},t.render=function(){return Object(n.jsx)("div",{className:"logon",children:Object(n.jsxs)(u.e,{size:"lg",children:[Object(n.jsx)("div",{className:"title",children:"\u5bb6\u5ead\u5b88\u62a4-\u7f51\u9875\u7248"}),Object(n.jsx)(u.d,{size:"lg"}),Object(n.jsx)(u.d,{size:"lg"}),Object(n.jsxs)(u.b,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",value:t.state.user,onChange:t.inputuserChange,children:[" ",Object(n.jsx)("div",{className:"logon-user-icon"})]}),Object(n.jsx)(u.b,{type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",value:t.state.password,onChange:t.inputpasswordChange,children:Object(n.jsx)("div",{className:"logon-unlock-icon"})}),Object(n.jsx)(u.d,{size:"lg"}),Object(n.jsx)(u.a,{type:"primary",onClick:t.clickAlert,children:"\u767b\u5f55"})]})})},t}return a}(o.a.Component),m=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={loading:!0,locations:[]},t.componentDidMount=function(){null===localStorage.getItem("username")||null===localStorage.getItem("userpassword")||null===localStorage.getItem("token")?window.location.href="/patronum/#/logon":h.a.get("https://happyyuwei.xyz:17615/rest/observer/location/all",{headers:{token:localStorage.getItem("token")}}).then((function(e){var a=e.data;console.log(a),t.setState({loading:!1,locations:a})})).catch((function(t){console.log(t),alert("\u8fde\u63a5\u670d\u52a1\u5668\u9519\u8bef")}))},t.logout=function(){localStorage.removeItem("token"),window.location.href="/patronum/#/logon"},t.formatTime=function(t){var e=parseInt(t.split(" ")[0].split("-")[0]),a=parseInt(t.split(" ")[0].split("-")[1]),n=parseInt(t.split(" ")[0].split("-")[2]),s=365*e+12*a+n,o=t.split(" ")[1].split(":")[0],c=t.split(" ")[1].split(":")[1],i=new Date,l=i.getFullYear(),r=i.getMonth()+1,d=i.getDate();return(i=365*l+12*r+d)===s?o+":"+c:i-s===1?"\u6628\u5929":e+"-"+a+"-"+n},t.render=function(){var e=Object(n.jsx)("div",{className:"list-loading",children:"\u52a0\u8f7d\u4e2d..."});if(!1===t.state.loading)for(var a=[],s=0;s<t.state.locations.length;s++){var o=Object(n.jsxs)("div",{className:"list-item",children:[Object(n.jsx)("div",{className:"img",children:Object(n.jsx)("img",{src:"https://happyyuwei.xyz:17615/rest/resource/image/"+t.state.locations[s].avatar,with:"90%",height:"90%",style:{borderRadius:10},alt:"not found"})}),Object(n.jsxs)("div",{className:"name-address",children:[Object(n.jsxs)("div",{className:"name-time",children:[Object(n.jsx)("div",{className:"nickname",children:t.state.locations[s].nickName}),Object(n.jsx)("div",{className:"location-time",children:t.formatTime(t.state.locations[s].time)})]}),Object(n.jsx)("div",{className:"address",children:Object(n.jsx)("div",{className:"",children:t.state.locations[s].ad+","+t.state.locations[s].loc})})]})]},Math.random());a.push(o),e=a}return Object(n.jsx)("div",{className:"list-background",children:Object(n.jsxs)("div",{style:{width:"90vw"},children:[Object(n.jsx)("div",{className:"list-title-container",children:Object(n.jsx)("div",{className:"list-title",children:"\u6211\u5173\u5fc3\u7684\u4eba"})}),Object(n.jsx)("div",{children:e}),Object(n.jsx)("div",{className:"list-footer",onClick:t.logout,children:"\u9000\u51fa\u5f53\u524d\u8d26\u6237"})]})})},t}return a}(o.a.Component),g=a(103),b=a(11),v=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).componentDidMount=function(){setTimeout((function(){window.location.href="/patronum/#/list"}),5e3)},t.render=function(){return Object(n.jsxs)("div",{className:"boot-background",children:[Object(n.jsx)("div",{className:"boot-title",children:"PATRONUM"}),Object(n.jsx)("div",{className:"boot-subtitle",children:"\u7f51\u9875\u7248"}),Object(n.jsx)("div",{className:"boot-detail",children:"@\u4e01\u5c0f\u5c0f\u8339 @\u8759\u8759\u8760\u4fa0 \u4f5c\u54c1"})]})},t}return a}(o.a.Component);var O=function(){return Object(n.jsxs)(g.a,{children:[Object(n.jsx)(b.a,{path:"/",exact:!0,component:v}),Object(n.jsx)(b.a,{path:"/list",exact:!0,component:m}),Object(n.jsx)(b.a,{path:"/logon",exact:!0,component:p})]})},f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,200)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,o=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),o(t),c(t)}))};i.a.render(Object(n.jsx)(O,{}),document.getElementById("root")),f()}},[[199,1,2]]]);
//# sourceMappingURL=main.b7dc8009.chunk.js.map