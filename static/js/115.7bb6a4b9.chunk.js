"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),o=r(243),u=r(87),l=r(184);t.default=function(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1],h=(0,i.useState)([]),p=(0,a.Z)(h,2),d=p[0],f=p[1],v=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"64ac679b39866e67efda72c4a9b2c64c",query:r}});case 3:t=e.sent,f(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){r&&v()})),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"centeredContent",children:[(0,l.jsx)("h2",{children:"Movie Search"}),(0,l.jsx)("input",{type:"text",value:r,onChange:function(e){return c(e.target.value)}}),(0,l.jsx)("button",{onClick:v,children:"Search"})]}),(0,l.jsx)("ul",{children:d.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsxs)(u.rU,{to:"/movies/".concat(e.id),children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title})," ",e.title]})},e.id)}))})]})}}}]);
//# sourceMappingURL=115.7bb6a4b9.chunk.js.map