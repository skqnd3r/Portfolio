(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return l(3906)}])},2265:function(e,t,l){"use strict";var o=l(7294);let n=(0,o.createContext)({scroll:null,setScroll(){}});t.Z=n},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,l,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(2648).Z,n=l(7273).Z,r=o(l(7294)),u=l(1003),c=l(7795),a=l(4465),s=l(2692),i=l(8245),f=l(9246),d=l(227),p=l(3468);let h=new Set;function v(e,t,l,o){if(u.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let n=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,r=t+"%"+l+"%"+n;if(h.has(r))return;h.add(r)}Promise.resolve(e.prefetch(t,l,o)).catch(e=>{})}}function g(e){return"string"==typeof e?e:c.formatUrl(e)}let m=r.default.forwardRef(function(e,t){let l,o;let{href:c,as:h,children:m,prefetch:x,passHref:y,replace:b,shallow:w,scroll:j,locale:_,onClick:k,onMouseEnter:E,onTouchStart:M,legacyBehavior:C=!1}=e,P=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);l=m,C&&("string"==typeof l||"number"==typeof l)&&(l=r.default.createElement("a",null,l));let O=!1!==x,z=r.default.useContext(s.RouterContext),S=r.default.useContext(i.AppRouterContext),T=null!=z?z:S,L=!z,{href:B,as:I}=r.default.useMemo(()=>{if(!z){let e=g(c);return{href:e,as:h?g(h):e}}let[t,l]=u.resolveHref(z,c,!0);return{href:t,as:h?u.resolveHref(z,h):l||t}},[z,c,h]),N=r.default.useRef(B),R=r.default.useRef(I);C&&(o=r.default.Children.only(l));let D=C?o&&"object"==typeof o&&o.ref:t,[K,U,Z]=f.useIntersection({rootMargin:"200px"}),q=r.default.useCallback(e=>{(R.current!==I||N.current!==B)&&(Z(),R.current=I,N.current=B),K(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[I,D,B,Z,K]);r.default.useEffect(()=>{T&&U&&O&&v(T,B,I,{locale:_})},[I,B,U,_,O,null==z?void 0:z.locale,T]);let H={ref:q,onClick(e){C||"function"!=typeof k||k(e),C&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,l,o,n,c,a,s,i,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(l)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[n?"replace":"push"](l,o,{shallow:c,locale:s,scroll:a}):t[n?"replace":"push"](o||l,{forceOptimisticNavigation:!f})};i?r.default.startTransition(h):h()}(e,T,B,I,b,w,j,_,L,O)},onMouseEnter(e){C||"function"!=typeof E||E(e),C&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),T&&(O||!L)&&v(T,B,I,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){C||"function"!=typeof M||M(e),C&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),T&&(O||!L)&&v(T,B,I,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!C||y||"a"===o.type&&!("href"in o.props)){let A=void 0!==_?_:null==z?void 0:z.locale,X=(null==z?void 0:z.isLocaleDomain)&&d.getDomainLocale(I,A,null==z?void 0:z.locales,null==z?void 0:z.domainLocales);H.href=X||p.addBasePath(a.addLocale(I,A,null==z?void 0:z.defaultLocale))}return C?r.default.cloneElement(o,H):r.default.createElement("a",Object.assign({},P,H),l)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:l,disabled:a}=e,s=a||!r,[i,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(r){if(!s&&!i&&d&&d.tagName){let e=function(e,t,l){let{id:o,observer:n,elements:r}=function(e){let t;let l={root:e.root||null,margin:e.rootMargin||""},o=c.find(e=>e.root===l.root&&e.margin===l.margin);if(o&&(t=u.get(o)))return t;let n=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),l=e.isIntersecting||e.intersectionRatio>0;t&&l&&t(l)})},e);return t={id:l,observer:r,elements:n},c.push(l),u.set(l,t),t}(l);return r.set(e,t),n.observe(e),function(){if(r.delete(e),n.unobserve(e),0===r.size){n.disconnect(),u.delete(o);let t=c.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&c.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:l});return e}}else if(!i){let o=n.requestIdleCallback(()=>f(!0));return()=>n.cancelIdleCallback(o)}},[d,s,l,t,i]);let h=o.useCallback(()=>{f(!1)},[]);return[p,i,h]};var o=l(7294),n=l(4686);let r="function"==typeof IntersectionObserver,u=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3906:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return p}});var o=l(5893);l(7475),l(8867);var n=l(1163),r=l(7294),u=l(2265),c=l(1664),a=l.n(c);let s=e=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"",height:"",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{fill:null==e?void 0:e.color,d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"})}),i=e=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"",height:"",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{fill:null==e?void 0:e.color,d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6.417 14.583c-.354-.318-.583-.79-.583-1.323 0-.532.229-1.003.583-1.323v2.646zm1.167.417c-.212 0-.323.003-.583-.08v-3.318c.276-.088.407-.085.583-.071v3.469zm1.167 0h-.584v-3.305l.18.105c.08-.328.222-.628.404-.895v4.095zm1.166 0h-.583v-4.706c.18-.134.373-.25.583-.33v5.036zm1.167 0h-.583v-5.167c.22-.023.286-.04.583.005v5.162zm1.167 0h-.584v-4.987l.222.107c.104-.181.228-.346.362-.5v5.38zm5.885 0h-5.302v-5.904c.465-.32 1.016-.512 1.611-.512 1.583 0 2.866 1.307 2.984 2.962 1.14-.558 2.405.34 2.405 1.642 0 1-.761 1.812-1.698 1.812z"})}),f=e=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"",height:"",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{fill:e.color,d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),d=()=>{let[e,t]=(0,r.useState)(!1),l=(0,n.useRouter)();return(0,r.useEffect)(()=>{t("/"==l.pathname)},[l]),(0,o.jsx)("div",{className:"".concat(e&&"sticky"," bottom-0 w-full h-[10vh] bg-white drop-shadow-2xl flex justify-center items-center"),children:(0,o.jsxs)("div",{className:"flex justify-around h-10 max-w-[700px] w-full px-10",children:[(0,o.jsx)(a(),{href:"https://soundcloud.com/skqnd3r/sets",legacyBehavior:!0,children:(0,o.jsx)("a",{target:"_blank",children:(0,o.jsx)(i,{color:"#121212"})})}),(0,o.jsx)(a(),{href:"https://github.com/skqnd3r",legacyBehavior:!0,children:(0,o.jsx)("a",{target:"_blank",children:(0,o.jsx)(f,{color:"#121212"})})}),(0,o.jsx)(a(),{href:"https://www.linkedin.com/in/alexandre-adm3/",legacyBehavior:!0,children:(0,o.jsx)("a",{target:"_blank",children:(0,o.jsx)(s,{color:"#121212"})})})]})})};function p(e){let{Component:t,pageProps:l}=e,[c,a]=(0,r.useState)(null),s=(0,n.useRouter)();return(0,r.useEffect)(()=>{if(c){if(s.pathname.includes("/projets"))s.push("/");else{let e=document.getElementById("globalLoader"),t=document.getElementById(c);t&&(e&&t&&(null==e||e.scrollTo({top:null==t?void 0:t.offsetTop,behavior:"smooth"})),a(null))}}},[c,s]),(0,o.jsx)(u.Z.Provider,{value:{scroll:c,setScroll:a},children:(0,o.jsxs)("div",{className:"flex flex-col h-full w-full bg-[rgb(251,251,251)]",children:[(0,o.jsx)(t,{...l}),(0,o.jsx)(d,{})]})})}},8867:function(){},7475:function(){},1664:function(e,t,l){e.exports=l(1551)},1163:function(e,t,l){e.exports=l(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);