"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947,247,186],{247:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o=n(243),l=n(689),u=n(87),d=n(184);t.default=function(){var e=(0,l.UO)().movieId,t=(0,i.useState)([]),n=(0,a.Z)(t,2),c=n[0],h=n[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),{params:{api_key:"64ac679b39866e67efda72c4a9b2c64c"}});case 3:n=t.sent,h(n.data.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching cast:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,d.jsxs)("div",{className:"Cast",children:[(0,d.jsx)("h2",{className:"centeredContent",children:"Cast"}),c.length>0?(0,d.jsx)("ul",{children:c.map((function(e){return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:e.name}),(0,d.jsx)(u.rU,{to:"/actor/".concat(e.id),children:e.name})]},e.id)}))}):(0,d.jsx)("p",{children:"Loading cast..."})]})}},947:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o=n(243),l=n(689),u=n(87),d=n(247),h=n(186),v=n(184);t.default=function(){var e=(0,l.UO)().movieId,t=(0,i.useState)(null),n=(0,a.Z)(t,2),c=n[0],p=n[1],f=(0,i.useState)(null),x=(0,a.Z)(f,2),m=x[0],j=x[1];(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e),{params:{api_key:"64ac679b39866e67efda72c4a9b2c64c"}});case 3:n=t.sent,p(n.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var g=function(e){j(e)};return(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Movie Details"}),c?(0,v.jsxs)("div",{className:"movie-details-container",children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c.poster_path),alt:c.title}),(0,v.jsxs)("div",{className:"movie-details",children:[(0,v.jsx)("h3",{children:c.title}),(0,v.jsxs)("p",{children:["User Score: ",c.vote_average]}),(0,v.jsxs)("p",{children:["Overview: ",c.overview]}),(0,v.jsxs)("p",{children:["Genres: ",c.genres.map((function(e){return e.name})).join(", ")]})]})]}):(0,v.jsx)("p",{children:"Loading movie details..."}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"centeredContent",children:[(0,v.jsx)("h2",{children:"Additional Information"}),(0,v.jsxs)("ul",{className:"infoButton",children:[(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{onClick:function(){return g("cast")},to:"#",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{onClick:function(){return g("reviews")},to:"#",children:"Reviews"})})]})]}),"cast"===m&&(0,v.jsx)(d.default,{}),"reviews"===m&&(0,v.jsx)(h.default,{})]})]})}},186:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o=n(689),l=n(243),u=n(184);t.default=function(){var e=(0,o.UO)().movieId,t=(0,i.useState)([]),n=(0,a.Z)(t,2),c=n[0],d=n[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),{params:{api_key:"64ac679b39866e67efda72c4a9b2c64c"}});case 3:n=t.sent,d(n.data.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching reviews:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{className:"centeredContent",children:"Reviews"}),c.length>0?c.map((function(e){return(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{children:e.author}),(0,u.jsx)("p",{children:e.content})]},e.id)})):(0,u.jsx)("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:"30px"},children:"No reviews available"})]})}}}]);
//# sourceMappingURL=947.7e7965fa.chunk.js.map