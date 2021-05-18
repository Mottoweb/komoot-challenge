(this["webpackJsonpkomoot-challenge"]=this["webpackJsonpkomoot-challenge"]||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(43),i=n.n(a),s=(n(78),n(45)),o=n(128),l=n(129),u=n(130),d=n(131),j=n(7),b=n(1),p=r.a.createContext(null),x=function(e){var t=e.children,n=Object(c.useState)([]),r=Object(j.a)(n,2),a={waypoints:r[0],setWaypoints:r[1]};return Object(b.jsx)(p.Provider,{value:a,children:t})},h=function(){var e=r.a.useContext(p);if(null===e)throw new Error("`useWaypointsContext` is used outside of `WaypointsContextProvider`");return e},m=n(70),O=n.n(m),f=n(5),g=n.n(f),v=n(127),y=function(e){var t=e.text;return Object(b.jsxs)("svg",{width:"40px",height:"40px",viewBox:"0 0 42 42",className:"circle",role:"img",children:[Object(b.jsx)("circle",{cx:"21",cy:"21",r:"15.91549430918954",fill:"dimGrey",role:"presentation"}),Object(b.jsx)("g",{className:"circle-text",children:Object(b.jsx)("text",{className:"circle-number",textAnchor:"middle",stroke:"#fff",x:"50%",y:"60%",children:t})})]})},w=function(e){var t=e.position,n=e.index,c=g.a.divIcon({className:"custom-icon",html:O.a.renderToString(Object(b.jsx)(y,{text:n}))});return Object(b.jsx)(v.a,{position:t,icon:c})},N=function(){var e=h(),t=e.waypoints,n=e.setWaypoints,c=0===t.length?t.length:Math.max.apply(null,t.map((function(e){return e.number})));return Object(o.a)({click:function(e){n([].concat(Object(s.a)(t),[{number:c+1,position:e.latlng}]))}}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.a,{pathOptions:{color:"dodgerBlue"},positions:t.map((function(e){return e.position}))}),t.map((function(e){var t=e.position,n=e.number;return Object(b.jsx)(w,{position:t,index:n},"marker-".concat(n))}))]})},C=function(){return Object(b.jsxs)(u.a,{id:"mapId",center:[45.832672,6.865223],zoom:8,children:[Object(b.jsx)(d.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(b.jsx)(N,{})]})},k=(n(81),n(82),n(71)),D=n.n(k),I=n(2);var W=function(e){return Object(b.jsxs)("svg",Object(I.a)(Object(I.a)({width:"40",height:"40",viewBox:"0 0 100 80"},e),{},{children:[Object(b.jsx)("path",{d:"M0 0H100V20H0z"}),Object(b.jsx)("path",{d:"M0 30H100V50H0z"}),Object(b.jsx)("path",{d:"M0 60H100V80H0z"})]}))};var B=function(e){return Object(b.jsx)("svg",Object(I.a)(Object(I.a)({xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 329.269 329"},e),{},{children:Object(b.jsx)("path",{d:"M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"})}))},L=function(e){var t=e.index,n=e.handleDrag,r=e.handleDrop,a=e.deleteWaypoint,i=Object(c.useCallback)((function(){a(t)}),[t,a]);return Object(b.jsxs)("div",{className:"sidebar-list--item-wrapper",children:[Object(b.jsxs)("div",{draggable:!0,id:t,className:"sidebar-list--item",onDragOver:function(e){return e.preventDefault()},onDragStart:n,onDrop:r,children:[Object(b.jsx)(W,{className:"icon icon-bars"}),"Waypoint ",t]}),Object(b.jsx)(B,{className:"icon icon-cross",onClick:i})]})},M=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],r=t[1],a=h(),i=a.waypoints,o=a.setWaypoints,l=Object(c.useCallback)((function(e){r(e.currentTarget.id)}),[r]),u=Object(c.useCallback)((function(e){var t=i.findIndex((function(t){return t.number===parseInt(e.currentTarget.id)})),c=i.findIndex((function(e){return e.number===parseInt(n)})),r=Object(s.a)(i);r.splice(t,0,r.splice(c,1)[0]),o(r)}),[i,n,o]),d=Object(c.useCallback)((function(e){o(i.filter((function(t){return t.number!==e})))}),[o,i]),p=Object(c.useCallback)((function(){var e=D()(i.map((function(e){return e.position})),{activityName:"Cross country run",startTime:Date.now(),latKey:"lat",lonKey:"lng"}),t=document.createElement("a"),n=new Blob([e],{type:"text/xml"});t.href=URL.createObjectURL(n),t.download="myRoute.gpx",document.body.appendChild(t),t.click()}),[i]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{className:"sidebar-header",children:"Route builder"}),Object(b.jsx)("div",{className:"sidebar-list",children:Object(b.jsxs)("div",{className:"sidebar-list--wrapper",children:[0===i.length&&Object(b.jsx)("span",{className:"sidebar-list--no-items",children:"Please add waypoints on the map"}),i.map((function(e){var t=e.number;return Object(b.jsx)(L,{handleDrag:l,handleDrop:u,deleteWaypoint:d,index:t},"list-item-".concat(t))}))]})}),Object(b.jsx)("div",{className:"sidebar-button--wrapper",children:Object(b.jsx)("button",{className:"sidebar-button",onClick:p,disabled:0===i.length,children:"Download your Route"})})]})};var S=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("div",{className:"sidebar-container",children:Object(b.jsx)(M,{})}),Object(b.jsx)("div",{className:"map-container",children:Object(b.jsx)(C,{})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{children:Object(b.jsx)(S,{})})}),document.getElementById("root")),z()},78:function(e,t,n){},81:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.4c18748f.chunk.js.map