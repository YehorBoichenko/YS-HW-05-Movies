"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[54],{676:function(e,r,t){t.d(r,{s:function(){return o}});t(2791);var a={MoviesGallery:"MoviesGallery_MoviesGallery__tqAIU",MoviesGalleryList:"MoviesGallery_MoviesGalleryList__pjh-c",MoviesGalleryItem:"MoviesGallery_MoviesGalleryItem__+mbjI",GalleryItemMovies:"MoviesGallery_GalleryItemMovies__LW-jm",movieTitle:"MoviesGallery_movieTitle__Lnio6",titleWrapper:"MoviesGallery_titleWrapper__dy8hb"},s=t(501),i=t(6871),n=t(184),l=function(e){var r=e.movie,t=(0,i.TH)();return(0,n.jsx)("li",{className:a.MoviesGalleryItem,children:(0,n.jsxs)(s.rU,{className:a.GalleryItemMovies,to:"/movies/".concat(r.id),state:{from:t},children:[(0,n.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(r.poster_path),alt:r.original_title,width:"300",className:a.image}),(0,n.jsx)("div",{className:a.titleWrapper,children:(0,n.jsx)("span",{className:a.movieTitle,children:r.title})})]})})},o=function(e){var r=e.movies;return(0,n.jsx)("div",{className:a.MoviesGallery,children:(0,n.jsx)("ul",{className:a.MoviesGalleryList,children:r.map((function(e){return(0,n.jsx)(l,{movie:e},e.id)}))})})}},2150:function(e,r,t){t.d(r,{P:function(){return a}});var a=function(e){return e.result.map((function(e){return{id:e.id,title:e.title,overwiev:e.overwiev,genre_ids:e.genre_ids,vote_average:e.vote_average,name:e.name}}))}},6054:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var a=t(885),s=t(2791),i=t(6066),n=t(501),l=t(6871),o=t(3524),c="Searchbar_searchbar__29YDU",u="Searchbar_searchForm__-PtX4",v="Searchbar_searchButton__vzaQP",m="Searchbar_searchButtonLabel__87xus",_="Searchbar_searchFormInput__hzTdt",h=t(184),d=function(e){var r=e.onSubmit,t=(0,s.useState)(""),n=(0,a.Z)(t,2),l=n[0],o=n[1];return(0,h.jsx)("header",{className:c,children:(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==l.trim()?(r(l),o("")):i.Am.error("Please enter search query")},className:u,children:[(0,h.jsx)("button",{type:"submit",className:v,children:(0,h.jsx)("span",{className:m,children:"Search"})}),(0,h.jsx)("input",{className:_,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films ",onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})},f=t(676),p=t(2150),y=function(){var e=(0,s.useState)(null),r=(0,a.Z)(e,2),t=r[0],c=r[1],u=(0,n.lr)(),v=(0,s.useState)((function(){var e;return null!==(e=u[0].get("query"))&&void 0!==e?e:""})),m=(0,a.Z)(v,2),_=m[0],y=m[1],j=(0,l.s0)();(0,s.useEffect)((function(){_&&b()}));var b=function(){(0,o.bI)(_).then((function(e){var r=e.data;0!==(null===r||void 0===r?void 0:r.length)?c((0,p.P)(r)):i.Am.error("There are is no results found.Please try another request")}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{onSubmit:function(e){y(e),j({search:"?query=".concat(e)})}}),t&&(0,h.jsx)(f.s,{movies:t})]})}}}]);
//# sourceMappingURL=54.2758a77a.chunk.js.map