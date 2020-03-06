"use strict";function _toArray(a){return _arrayWithHoles(a)||_iterableToArray(a)||_nonIterableRest()}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}var _ref=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=u(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(v[x]);)r(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(v[z]);)r(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(v[x]=u(v[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(r(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,v[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},t=function(a){return"object"===_typeof(a)?a:w(a)},u=function(b,c){return b.type===a?((!c||c.type!==a||s(c.lazy,b.lazy))&&((c=t(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,void 0,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(t(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&x(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=r(e.parentNode,e,h,h=t(d(b)),l)};o(a.init)}}}(),h=_ref.h,app=_ref.app,C=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===_typeof(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return h(a,{},b);return h(a,b,d)}},a=C("a"),button=C("button"),circle=C("circle"),code=C("code"),div=C("div"),footer=C("footer"),g=C("g"),h1=C("h1"),h2=C("h2"),h3=C("h3"),h4=C("h4"),h5=C("h5"),header=C("header"),img=C("img"),input=C("input"),label=C("label"),li=C("li"),link=C("link"),main=C("main"),meta=C("meta"),nav=C("nav"),p=C("p"),path=C("path"),pre=C("pre"),script=C("script"),span=C("span"),svg=C("svg"),title=C("title"),ul=C("ul"),view=C("view"),initialState={footer:{one:{before:["jamstack generator","created by","Wizards & Witches"],title:"@magic"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/magic"},{text:"github",to:"https://github.com/magic"}],title:"social links"},two:{menu:[{text:"@magic",to:"https://github.com/magic"},{text:"@magic/core",to:"https://github.com/magic/core"},{text:"@magic-modules",to:"https://github.com/magic-modules"},{text:"@magic-libraries",to:"https://github.com/magic-libraries"},{text:"@magic-themes",to:"https://github.com/magic-themes"}],title:"organizations"}},gdpr:{allowed:[],show:!1},logotext:"@magic-themes/reader",menu:[{text:"installation",to:"/#installation"},{items:[{text:"require",to:"-require"},{text:"customize",to:"-customize"}],text:"usage",to:"/#usage"}],pageClass:{},root:"/reader/",theme:"dark",url:"/reader/",vars:{background:{dark:"#212121",light:"#e0e0e0"},fadeDuration:"500ms",link:{dark:"#ea4444",hover:{dark:"#c4c4c4",light:"#212121"},light:"#ea4444"},maxWidth:"1200px",neutral:"#5a5a5a",pageBackground:{dark:"#eeeeee",light:"#f0f0f0"},primary:{dark:"#412162",light:"#8f6ab4",neutral:"rebeccapurple"},text:{dark:"#c4c4c4",light:"#212121"},white:"#ffffff",widths:{desktop:"1600px",laptop:"1024px",tablet:"500px"}}},helpers={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},BlogMonth=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[h3(b?Link({to:b},i):i),h.map(function(c){var d=_slicedToArray(c,2),e=d[0],f=d[1];return f.map(function(c){return BlogTeaser(_objectSpread({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},BlogTeaser=function(a){return div([h4([a.day,"-",a.month,"-",a.year," - ",Link({to:a.name},a.title)]),p(a.description)])},BlogYear=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),div([h2(c?Link({to:b},d):d),Object.entries(e[d]).map(function(c){var d=_slicedToArray(c,2),e=d[0],f=d[1];return BlogMonth(_objectSpread({},a,{month:e,days:f,link:b}))})])},Burger=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return div({class:"Burger",onclick:a.onclick},[span(),span(),span()])},Credits=function(){return div({class:"Credits"},["made with a few bits of ",Link({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])},Footer=function(a,b){var c=a.footer,d=c.one,e=c.two,f=c.three;return footer({class:"Footer"},[div({class:"Container"},[(d||e||f)&&div({class:"Menus"},[d&&div({class:"Child Info"},[d.title&&h2(d.title),d.before&&d.before.map(function(b){return p(b)}),d.menu&&ul([d.menu.map(function(a){return li(Link(a))})]),d.after&&d.after.map(function(b){return p(b)})]),e&&div({class:"Child"},[e.title&&h2(e.title),e.before&&e.before.map(function(b){return p(b)}),e.menu&&ul([e.menu.map(function(a){return li(Link(a))})]),e.after&&e.after.map(function(b){return p(b)})]),f&&div({class:"Child"},[f.title&&h2(f.title),f.before&&f.before.map(function(b){return p(b)}),f.menu&&ul([f.menu.map(function(a){return li(Link(a))})]),f.after&&f.after.map(function(b){return p(b)})])]),Credits(a),b])])},Gdpr=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,h=c.title,i=void 0===h?"Privacy Information":h,j=c.content,k=void 0===j?"This app neither saves, collects, nor shares any data about you.":j,l=c.noDataText,m=void 0===l?"Awesome.":l,n=c.allowTitle,o=void 0===n?"Allow:":n,q=c.allowAllText,r=void 0===q?"All":q,s=c.allowText,t=void 0===s?"Selected":s,u=c.denyText,v=void 0===u?"None":u;if(!f)return div({class:"Gdpr"},svg({class:"ShowHide",onclick:[actions.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[g([path({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),circle({cx:"192",cy:"128",r:"32"}),circle({cx:"128",cy:"256",r:"32"}),circle({cx:"288",cy:"384",r:"32"}),circle({cx:"272",cy:"272",r:"16"}),circle({cx:"400",cy:"336",r:"16"}),circle({cx:"176",cy:"368",r:"16"})])]));var w=!!e.length;return div({class:"Gdpr"},[div({class:"Container"},[i&&h3(i),k&&p(k),w&&[ul(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return li({class:"Cookie"},[input({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[actions.gdpr.toggleAllow,{name:b}]}),(d||e)&&label({for:b},[d&&h4(d),e&&p(e)])])}))],w?[h5(o),input({class:"allow all",onclick:actions.gdpr.allow,type:"button",value:r}),input({class:"allow",onclick:actions.gdpr.close,type:"button",value:t}),input({class:"allow none",onclick:actions.gdpr.deny,type:"button",value:v})]:input({onclick:actions.gdpr.close,value:m,type:"button"})])])},Header=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.title,f=_objectWithoutProperties(a,["logo","menu","title"]),g=f.root;if(c||d||logotext){var h=f.branding;Array.isArray(h)||(h=[h]);var i=h,j=_toArray(i),k=j[0],l=j[1],m=j.slice(2);return header({class:"Header"},[div({class:"BrandContainer"},[div([Logo({root:g}),h&&Link({to:g,class:"branding"},[k,span(l),m])])]),div({class:"Toc"},[Burger(),h3({title:"Table of Contents"},Link({to:g},"ToC")),Menu({state:f,items:d,collapse:!1})])])}},Img=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),img(a)},LightSwitch=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return button({class:"LightSwitch",onclick:actions.changeTheme},svg({viewBox:"0 0 352 460"},[path({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),path({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),path({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},Link=function(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],d=b.to,e=b.action,f=void 0===e?actions.go:e,g=_objectWithoutProperties(b,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=_objectWithoutProperties(g,["href","text","nofollow","noreferrer"]);d=d||h||"",l.href=d;var m="/"===d[0]||"#"===d[0];return m?l.onclick=[f,lib.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),a(l,[i,c])},Logo=function(a){var b=a.img,c=a.text,d=_objectWithoutProperties(a,["img","text"]);return Link({to:d.root,class:"Logo"},[b&&Img(b),c&&span(c)])},Menu=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),nav({className:c},ul(e.map(function(a){return MenuItem(_objectSpread({},a,{url:g,root:i,collapse:void 0===d||d}))})))},MenuItem=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,e=a.url,f=a.root,g=a.parentTo,h=void 0===g?void 0:g,j=a.collapse,k=_objectWithoutProperties(a,["text","items","url","root","parentTo","collapse"]),l={class:{}},i=k.to;f&&i.startsWith("/")&&(i=i.substr(1));var m=k.to[0];h&&("-"===m||"#"===m)&&(i=h+i);var n=i.startsWith(f);f&&("/"===m||"-"===m||"#"===m)&&!n&&(i=f+i),k.to=i.replace(/\/\//g,"/"),k.to===e&&(l["class"].active=!0);var o=[],p=e.startsWith(k.to)||!j;return p&&d.length&&(o=ul(d.map(function(a){return MenuItem(_objectSpread({parentTo:k.to,url:e,root:f,collapse:j},a))}))),li(l,[k.to?MenuLink(k,b):span(k,b),o])},MenuLink=function(a,b){return Link(a,b)},Page=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return main(e,div({class:{Wrapper:!0}},[Header(d),div({class:"Page",id:"page"},c(d)),Footer(d),b]))},Pre=function(a,b){"string"==typeof a?a={content:a}:b?a=_objectSpread({content:b},a):Array.isArray(a)&&(a={content:a.join("")});var c=a,d=c.content,e=c.lines,f=!(void 0!==e)||e;return div({class:{Pre:!0,lines:!f||"false"!==f}},[div({class:"menu"},[button({onclick:[actions.pre.clip,function(a){return{e:a,content:d}}]},"copy")]),pre(lib.pre.format(d))])},lib={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=lib.db.init(),g=lib.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=lib.db.init(),f=void 0;return d&&e[d]&&(f=lib.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=lib.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),b="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),c=["true","false"],d=function(d){if("string"!=typeof d)return d;var e=d.split(/\b/);return d=e.map(function(d,f){if(""!==d){var g="";return"state"===d?g="state":"actions"===d?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(d)?g="keyword":b.includes(d)?g="builtin":c.includes(d)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(d=span({class:g},d)),d}}),d},e=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,f=function(a){return a.split(e).map(function(a){if(e.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return Link({class:"email",to:b},c)}return d(a)})},g=function(a){return a.split(" ").map(function(a){if(!a.includes("://"))return j(a+" ");var b=a.split("://"),c=_slicedToArray(b,2),d=c[0],e=c[1];return d.match(/[a-z]/g)?Link({to:a},a):a})},h=function(a){return a.includes("://")&&!a.includes("@")?g(a):f(a)},i=function(a){var b=/("|'|`)(.*?)\1/gim,c=[],e=a;return a.replace(b,function(a){var b=e.split(a),d=_slicedToArray(b,2),f=d[0],g=d[1];c.push(h(f)),c.push(span({class:"string"},h(a))),e=g}),c.push(h(e)),e===a?d(h(a)):c.map(function(a){return"string"==typeof a?j(a):a})},j=function(a){var b=a.trim(),c=a.split(/\/\//g),d=_toArray(c),e=d[0],f=d.slice(1);if(f=f.join("//"),e&&e.trim()&&(e=i(e)),f&&f.trim()){a.search(/\S|$/);f=span({class:"comment"},["//",g(f)])}return[e,f]},k=function(a){return code({class:"line"},j(a))};return{format:function format(a){return a.trim().split("\n").map(k)}}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},actions={changeTheme:function changeTheme(a){return _objectSpread({},a,{pageClass:_objectSpread({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[actions.gdpr.show,{show:!1}]}]]},close:function close(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{show:!1})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[actions.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{allowed:[]})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[actions.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),_objectSpread({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=_slicedToArray(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return a;var i=window,j=i.scrollY,k=a.pages&&a.pages[f]&&a.pages[f].title;if(k&&(document.title=a.title=k),f===a.url)window.location.hash=h;else if(!h){var l=document.getElementsByTagName("html"),m=_slicedToArray(l,1),n=m[0],o=n.style.scrollBehavior;n.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),n.style.scrollBehavior=o}return window.history.pushState({url:f,hash:h,scrollY:j},a.title,c),_objectSpread({},a,{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),_objectSpread({},a,{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},pages={"/reader/":function reader(){return[div([h1({id:"magic-themesreader"},"@magic-themes/reader"),p(["this is the\n",Link({to:"https://github.com/magic-themes",text:"@magic-themes"}),"\nreader theme.\nIt is being used in ",Link({to:"https://explain.webboot.org",text:"explain.webboot"})]),h3({id:"installation"},"installation"),Pre({lines:"false"},"npm install magic-themes/reader"),h2({id:"usage"},"usage"),h3({id:"usage-require"},"require"),p("in /config.mjs"),Pre("// config.mjs\n\nexport default {\n  // ... other config\n  THEME: 'reader',\n}"),h1({id:"usage--customize"},"usage- customize"),p("you can customize and add any kind of style"),p("create /assets/themes/reader/index.mjs, any css there will overwrite the theme css"),Pre("// /assets/themes/reader/index.mjs\n\nexport default vars => ({\n  body: {\n    color: vars.colors.orange[900],\n  },\n})"),p("magic will then find and merge the themes automatically, just as it did on this page.")])]},"/reader/404/":function reader404(){return div("404 - not found")}};app({init:[_objectSpread({},initialState,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[lib.db.get,{key:"magic-gdpr",action:actions.gdpr.show}]]],subscriptions:function subscriptions(){return[[helpers.listenPopState,actions.pop]]},view:function(a){var b=pages[a.url]?a.url:"/404/",c=pages[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,Page({page:c,state:a},[Gdpr(a),LightSwitch(a)])},node:document.getElementById("Magic")});