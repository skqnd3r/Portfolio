(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(6987)}])},2265:function(e,t,o){"use strict";var n=o(7294);let l=(0,n.createContext)({scroll:null,setScroll(){}});t.Z=l},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2648).Z,l=o(7273).Z,r=n(o(7294)),s=o(1003),u=o(7795),a=o(4465),c=o(2692),i=o(8245),f=o(9246),d=o(227),h=o(3468);let p=new Set;function v(e,t,o,n){if(s.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,r=t+"%"+o+"%"+l;if(p.has(r))return;p.add(r)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:u.formatUrl(e)}let w=r.default.forwardRef(function(e,t){let o,n;let{href:u,as:p,children:w,prefetch:x,passHref:j,replace:b,shallow:g,scroll:y,locale:_,onClick:k,onMouseEnter:C,onTouchStart:E,legacyBehavior:M=!1}=e,N=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=w,M&&("string"==typeof o||"number"==typeof o)&&(o=r.default.createElement("a",null,o));let P=!1!==x,z=r.default.useContext(c.RouterContext),O=r.default.useContext(i.AppRouterContext),B=null!=z?z:O,S=!z,{href:L,as:T}=r.default.useMemo(()=>{if(!z){let e=m(u);return{href:e,as:p?m(p):e}}let[t,o]=s.resolveHref(z,u,!0);return{href:t,as:p?s.resolveHref(z,p):o||t}},[z,u,p]),I=r.default.useRef(L),R=r.default.useRef(T);M&&(n=r.default.Children.only(o));let A=M?n&&"object"==typeof n&&n.ref:t,[D,Z,q]=f.useIntersection({rootMargin:"200px"}),H=r.default.useCallback(e=>{(R.current!==T||I.current!==L)&&(q(),R.current=T,I.current=L),D(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[T,A,L,q,D]);r.default.useEffect(()=>{B&&Z&&P&&v(B,L,T,{locale:_})},[T,L,Z,_,P,null==z?void 0:z.locale,B]);let K={ref:H,onClick(e){M||"function"!=typeof k||k(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),B&&!e.defaultPrevented&&function(e,t,o,n,l,u,a,c,i,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s.isLocalURL(o)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[l?"replace":"push"](o,n,{shallow:u,locale:c,scroll:a}):t[l?"replace":"push"](n||o,{forceOptimisticNavigation:!f})};i?r.default.startTransition(p):p()}(e,B,L,T,b,g,y,_,S,P)},onMouseEnter(e){M||"function"!=typeof C||C(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),B&&(P||!S)&&v(B,L,T,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){M||"function"!=typeof E||E(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),B&&(P||!S)&&v(B,L,T,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!M||j||"a"===n.type&&!("href"in n.props)){let U=void 0!==_?_:null==z?void 0:z.locale,X=(null==z?void 0:z.isLocaleDomain)&&d.getDomainLocale(T,U,null==z?void 0:z.locales,null==z?void 0:z.domainLocales);K.href=X||h.addBasePath(a.addLocale(T,U,null==z?void 0:z.defaultLocale))}return M?r.default.cloneElement(n,K):r.default.createElement("a",Object.assign({},N,K),o)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:a}=e,c=a||!r,[i,f]=n.useState(!1),[d,h]=n.useState(null);n.useEffect(()=>{if(r){if(!c&&!i&&d&&d.tagName){let e=function(e,t,o){let{id:n,observer:l,elements:r}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=s.get(n)))return t;let l=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:r,elements:l},u.push(o),s.set(o,t),t}(o);return r.set(e,t),l.observe(e),function(){if(r.delete(e),l.unobserve(e),0===r.size){l.disconnect(),s.delete(n);let t=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&u.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!i){let n=l.requestIdleCallback(()=>f(!0));return()=>l.cancelIdleCallback(n)}},[d,c,o,t,i]);let p=n.useCallback(()=>{f(!1)},[]);return[h,i,p]};var n=o(7294),l=o(4686);let r="function"==typeof IntersectionObserver,s=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6987:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return h}});var n=o(5893);o(7475),o(8867);var l=o(1664),r=o.n(l),s=o(1163),u=o(7294);let a=e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"",height:"",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{fill:null==e?void 0:e.color,d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6.417 14.583c-.354-.318-.583-.79-.583-1.323 0-.532.229-1.003.583-1.323v2.646zm1.167.417c-.212 0-.323.003-.583-.08v-3.318c.276-.088.407-.085.583-.071v3.469zm1.167 0h-.584v-3.305l.18.105c.08-.328.222-.628.404-.895v4.095zm1.166 0h-.583v-4.706c.18-.134.373-.25.583-.33v5.036zm1.167 0h-.583v-5.167c.22-.023.286-.04.583.005v5.162zm1.167 0h-.584v-4.987l.222.107c.104-.181.228-.346.362-.5v5.38zm5.885 0h-5.302v-5.904c.465-.32 1.016-.512 1.611-.512 1.583 0 2.866 1.307 2.984 2.962 1.14-.558 2.405.34 2.405 1.642 0 1-.761 1.812-1.698 1.812z"})}),c=e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"",height:"",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{fill:null==e?void 0:e.color,d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"})}),i=e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"",height:"",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{fill:e.color,d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})});var f=o(2265);let d=()=>{let e=(0,s.useRouter)(),[t,o]=(0,u.useState)(!1),{setScroll:l}=(0,u.useContext)(f.Z),d=t=>{console.log(e),"/"!=e.route||t.includes("/projets")?t.includes("/projets")?e.push(t):(l(t),e.push("/")):l(t)},[h,p]=(0,u.useState)(!1),[v,m]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{let e=()=>{window.innerWidth<window.innerHeight?p(!0):p(!1)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,n.jsx)(n.Fragment,{children:!h&&(0,n.jsxs)("div",{className:"absolute top-0 relative bg-white w-[350px] items-center shadow-xl p-5 h-full flex flex-col z-10",children:[(0,n.jsx)("button",{className:"navButton shadow font-bold",onClick:()=>d("home"),children:"Acceuil"}),(0,n.jsx)("button",{className:"navButton shadow font-bold",onClick:()=>d("cv"),children:"Parcours"}),(0,n.jsx)("button",{className:"navButton shadow font-bold",onClick:()=>d("projet"),children:"Projet"}),(0,n.jsxs)("div",{className:"w-[70%] flex flex-col items-center p-5",children:[(0,n.jsx)("button",{className:"w-fit min-w-[90%] rounded-md shadow p-2 mt-2",onClick:()=>d("/projets/developpement"),children:"D\xe9veloppement"}),(0,n.jsx)("button",{className:"w-fit min-w-[90%] rounded-md shadow p-2 mt-2",onClick:()=>d("/projets/audiovisuel"),children:"Audiovisuel"}),(0,n.jsx)("button",{className:"w-fit min-w-[90%] rounded-md shadow p-2 mt-2",onClick:()=>d("/projets/art"),children:"Arts Plastiques"})]}),(0,n.jsx)("button",{className:"navButton shadow font-bold",onClick:()=>d("contact"),children:"Contact"}),(0,n.jsxs)("div",{className:"absolute bottom-0 w-full py-5",children:[(0,n.jsx)("hr",{className:"mb-5"}),(0,n.jsxs)("div",{className:"flex justify-around h-10 w-full",children:[(0,n.jsx)(r(),{href:"https://www.linkedin.com/in/alexandre-adm3/",legacyBehavior:!0,children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)(c,{color:"#121212"})})}),(0,n.jsx)(r(),{href:"https://github.com/skqnd3r",legacyBehavior:!0,children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)(i,{color:"#121212"})})}),(0,n.jsx)(r(),{href:"https://soundcloud.com/skqnd3r/likes",legacyBehavior:!0,children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)(a,{color:"#121212"})})})]})]})]})})};function h(e){let{Component:t,pageProps:o}=e,[l,r]=(0,u.useState)(null),a=(0,s.useRouter)();return(0,u.useEffect)(()=>{if(console.log("default"),console.log(l),l){if(a.pathname.includes("/projets"))a.push("/");else{let e=document.getElementById("globalLoader"),t=document.getElementById(l);t&&(e&&t&&(null==e||e.scrollTo({top:null==t?void 0:t.offsetTop,behavior:"smooth"})),r(null))}}},[l,a]),(0,n.jsx)(f.Z.Provider,{value:{scroll:l,setScroll:r},children:(0,n.jsxs)("div",{className:"flex h-[100vh] w-full overflow-hidden bg-[rgb(252,252,252)]",children:[(0,n.jsx)(d,{}),(0,n.jsx)(t,{...o})]})})}},8867:function(){},7475:function(){},1664:function(e,t,o){e.exports=o(1551)},1163:function(e,t,o){e.exports=o(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);