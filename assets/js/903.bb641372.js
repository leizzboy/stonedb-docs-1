"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[903],{9360:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),r=n(6786),l=n(223),o=n(7462),i=n(5999),c=n(1750);function s(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(c.Z,(0,o.Z)({},n,{subLabel:a.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(c.Z,(0,o.Z)({},t,{subLabel:a.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var u=n(1944),m=n(5281),d=n(1575),f=n(6010);function v(e){var t,n=e.content,r=n.assets,l=n.metadata,o=l.title,i=l.description,c=l.date,s=l.tags,m=l.authors,d=l.frontMatter,f=d.keywords,v=null!=(t=r.image)?t:d.image;return a.createElement(u.d,{title:o,description:i,keywords:f,image:v},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),m.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:m.map((function(e){return e.url})).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((function(e){return e.label})).join(",")}))}function g(e){var t=e.content,n=e.sidebar,o=t.assets,i=t.metadata,c=i.nextItem,u=i.prevItem,m=i.frontMatter,f=m.hide_table_of_contents,v=m.toc_min_heading_level,g=m.toc_max_heading_level;return a.createElement(r.Z,{sidebar:n,toc:!f&&t.toc&&t.toc.length>0?a.createElement(d.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:g}):void 0},a.createElement(l.Z,{frontMatter:m,assets:o,metadata:i,isBlogPostPage:!0},a.createElement(t,null)),(c||u)&&a.createElement(s,{nextItem:c,prevItem:u}))}function p(e){return a.createElement(u.FG,{className:(0,f.Z)(m.k.wrapper.blogPages,m.k.page.blogPostPage)},a.createElement(v,e),a.createElement(g,e))}},1575:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(3366),l=n(7294),o=n(6010),i=n(721),c="tableOfContents_cNA8",s=["className"];function u(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,o.Z)(c,"thin-scrollbar",t)},l.createElement(i.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},721:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(3366),l=n(7294);function o(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var i=l.memo(o),c=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,c);n>=0?t[n].children.push(l):a.push(l)})),a}function u(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=u({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var m=n(6668);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function f(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function v(){var e=(0,l.useRef)(0),t=(0,m.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function g(e){var t=(0,l.useRef)(void 0),n=v();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=f(i,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,f=e.linkActiveClassName,v=void 0===f?void 0:f,h=e.minHeadingLevel,b=e.maxHeadingLevel,L=(0,r.Z)(e,p),E=(0,m.L)(),N=null!=h?h:E.tableOfContents.minHeadingLevel,x=null!=b?b:E.tableOfContents.maxHeadingLevel,H=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return u({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:N,maxHeadingLevel:x});return g((0,l.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:N,maxHeadingLevel:x}}),[d,v,N,x])),l.createElement(i,(0,a.Z)({toc:H,className:o,linkClassName:d},L))}},8824:function(e,t,n){n.d(t,{c:function(){return s}});var a=n(7294),r=n(2263),l=["zero","one","two","few","many","other"];function o(e){return l.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,r.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:o(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),i}var t,n}),[e])}function s(){var e=c();return{selectMessage:function(t,n){return function(e,t,n){var a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms+"), but the message contains "+a.length+": "+e);var r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}}}}]);