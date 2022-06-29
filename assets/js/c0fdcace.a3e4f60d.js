"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2056],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=i(a),m=r,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(b,c(c({ref:t},s),{},{components:a})):n.createElement(b,c({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,c[1]=d;for(var i=2;i<o;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24325:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return p}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),c=["components"],d={id:"create-and-manage-table",sidebar_position:5.52},l="Create and Manage a Table",i={unversionedId:"developer-guide/create-and-manage-database-objects/create-and-manage-table",id:"developer-guide/create-and-manage-database-objects/create-and-manage-table",title:"Create and Manage a Table",description:"Create a table. For example, execute the following SQL statement to create a table which is named student and consists of the id, name, age, and birthday fields:",source:"@site/docs/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-table.md",sourceDirName:"04-developer-guide/04-create-and-manage-database-objects",slug:"/developer-guide/create-and-manage-database-objects/create-and-manage-table",permalink:"/docs/developer-guide/create-and-manage-database-objects/create-and-manage-table",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-table.md",tags:[],version:"current",lastUpdatedBy:"cieldon",lastUpdatedAt:1656493366,formattedLastUpdatedAt:"6/29/2022",sidebarPosition:5.52,frontMatter:{id:"create-and-manage-table",sidebar_position:5.52},sidebar:"autoSidebar",previous:{title:"Create and Manage a Database",permalink:"/docs/developer-guide/create-and-manage-database-objects/create-and-manage-database"},next:{title:"Create and Manage a View",permalink:"/docs/developer-guide/create-and-manage-database-objects/create-and-manage-view"}},s={},p=[],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-and-manage-a-table"},"Create and Manage a Table"),(0,o.kt)("p",null,"Create a table. For example, execute the following SQL statement to create a table which is named ",(0,o.kt)("strong",{parentName:"p"},"student")," and consists of the ",(0,o.kt)("strong",{parentName:"p"},"id"),", ",(0,o.kt)("strong",{parentName:"p"},"name"),", ",(0,o.kt)("strong",{parentName:"p"},"age"),", and ",(0,o.kt)("strong",{parentName:"p"},"birthday")," fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create table student(\n  id int(11) primary key,\n  name varchar(255),\n  age smallint,\n  birthday DATE\n    ) engine=stonedb;\n")),(0,o.kt)("p",null,"Query the schema of a table. For example, execute the following SQL statement to query the schema of table ",(0,o.kt)("strong",{parentName:"p"},"student"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"show create table student\\G\n")),(0,o.kt)("p",null,"Drop a table. For example, execute the following SQL statement to drop table ",(0,o.kt)("strong",{parentName:"p"},"student"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"drop table student;\n")))}m.isMDXComponent=!0}}]);