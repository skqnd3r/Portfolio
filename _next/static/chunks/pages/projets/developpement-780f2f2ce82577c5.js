(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{6843:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projets/developpement",function(){return l(4399)}])},2230:function(e,s,l){"use strict";var i=l(5893);let t=e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"",height:"",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{fill:e.color,d:"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"})});s.Z=t},7192:function(e,s,l){"use strict";var i=l(5893),t=l(7294),c=l(2230),r=l(2714);let a=e=>{let{children:s}=e,[l,a]=(0,t.useState)(0),n=e=>e<0||e>=s.length?{opacity:0,"pointer-events":"none"}:{opacity:1,"pointer-events":"initial"},d=(0,t.useMemo)(()=>s.map((e,s)=>(0,i.jsx)("div",{className:"h-fit ".concat(s==l?"opacity-1":"opacity-1 hidden pointer-events-none"),children:(0,i.jsx)(r.Z,{className:"",children:t.cloneElement(e,{...e.props,className:"max-h-[55vh] max-w-fit w-full"})})},s)),[l]);return(0,i.jsxs)("div",{className:"flex relative py-6 justify-center",children:[(0,i.jsxs)("div",{className:"relative flex h-fit",children:[(0,i.jsx)("div",{style:n(l-1),className:"flex h-full max-w-[5vw] justify-center hover:cursor-pointer absolute left-0 ml-2 z-10",onClick(){a(l-1)},children:(0,i.jsx)("div",{className:"flex rotate-180 w-10",children:(0,i.jsx)(c.Z,{color:e.arrow})})}),d,(0,i.jsx)("div",{style:n(l+1),className:"flex h-full max-w-[5vw] justify-center hover:cursor-pointer absolute right-0 mr-2 z-10",onClick(){a(l+1)},children:(0,i.jsx)("div",{className:"flex w-10",children:(0,i.jsx)(c.Z,{color:e.arrow})})})]}),(0,i.jsx)("div",{className:"absolute bottom-0 w-full",children:(0,i.jsx)("div",{className:"gap-5 flex justify-center",children:s.map((s,t)=>(0,i.jsx)("button",{onClick:()=>a(t),style:{borderColor:t==l?e.arrow:"#EBEBEB"},className:"rounded-full h-4 w-4 bg-[#ffff] border-solid border-2 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.2)] "},t))})})]})};s.Z=a},2714:function(e,s,l){"use strict";var i=l(5893),t=l(7294);let c=e=>{let s=(0,t.useRef)(null),l=(0,t.useRef)(null),[c,r]=(0,t.useState)(!1),a=()=>{if(!c){let e=l.current;e&&e.requestFullscreen&&(e.requestFullscreen(),r(!0))}},n=()=>{c&&(r(!1),document.exitFullscreen())};return(0,t.useEffect)(()=>{console.log(c)},[c]),(0,i.jsxs)("div",{ref:l,className:"flex h-fit w-fit ".concat(e.className),children:[c&&(0,i.jsx)("div",{className:"absolute bottom-0 w-full flex justify-center p-5",children:(0,i.jsx)("div",{className:"drop-shadow-lg hover:cursor-pointer bg-white rounded-lg flex p-3 z-20 w-10",onClick:n,children:(0,i.jsx)("svg",{width:"",height:"",viewBox:"0 0 94.926 94.926",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0 c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096 c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476 c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62 s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"})})})})}),(0,i.jsx)("div",{className:"flex justify-center",children:t.cloneElement(e.children,{...e.children.props,ref:s,className:"".concat(e.children.props.className," ").concat(c?"fullImage":"hover:cursor-pointer"),onClick:a})})]})};s.Z=c},3318:function(e,s,l){"use strict";var i=l(5893),t=l(7294);let c=e=>{let s=(0,t.useRef)(null),[l,c]=(0,t.useState)(!1),[r,a]=(0,t.useState)(!1),[n,d]=(0,t.useState)(!1),[o,h]=(0,t.useState)(void 0);return(0,t.useEffect)(()=>{window&&h(window.innerWidth)},[]),(0,t.useEffect)(()=>{let e=s.current;if(e){let l=()=>{e.readyState>=3&&(e.paused&&0==e.currentTime?(c(!0),a(!0)):(d(!0),a(!1)))};return e.addEventListener("loadedmetadata",l),e.addEventListener("pause",l),()=>{e.removeEventListener("loadedmetadata",l),e.removeEventListener("pause",l)}}},[s.current]),(0,t.useEffect)(()=>{let e=s.current;if(e){let l=()=>{var s,l;let i=null===(s=e.parentNode)||void 0===s?void 0:null===(l=s.parentNode)||void 0===l?void 0:l.parentNode,t=e.parentElement;if(4==e.readyState&&i instanceof HTMLElement&&t instanceof HTMLElement){let c=Math.round(e.clientHeight*e.videoWidth/e.videoHeight);0!=c&&void 0!=o&&i.classList.contains("relative")&&(o<window.innerWidth&&(i.style.maxWidth="fit-content"),i.style.maxWidth="".concat(Math.round(e.clientHeight*e.videoWidth/e.videoHeight),"px"),h(window.innerWidth))}};return e.addEventListener("loadedmetadata",l),window.addEventListener("resize",l),()=>{e.removeEventListener("loadedmetadata",l),window.removeEventListener("resize",l)}}},[s,o]),(0,i.jsxs)("div",{onClick(){var e,l;n||r?(null===(e=s.current)||void 0===e||e.play(),a(!1),d(!1)):null===(l=s.current)||void 0===l||l.pause()},className:"max-h-[55vh] ".concat(l?"min-h-fit":"min-h-[55vh]"," relative w-full h-full flex justify-center items-center hover:cursor-pointer"),children:[(0,i.jsx)("video",{className:"".concat(n?"grayscale-[0.4]":""),ref:s,width:"fit-content",muted:!0,onEnded(){s.current&&(s.current.currentTime=0,a(!0),d(!1))},children:(0,i.jsx)("source",{src:e.url,type:"video/mp4"})}),(0,i.jsx)("img",{className:"grayscale absolute ".concat(r?"opacity-1":"opacity-0"),src:e.poster}),(0,i.jsx)("div",{className:"absolute h-1/2 max-h-[40px] w-1/2 flex justify-center align-center ".concat(r?"opacity-1":"opacity-0"),children:(0,i.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"",height:"",viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:(0,i.jsxs)("g",{transform:"translate(0,512) scale(0.1,-0.1)",fill:e.color,stroke:"",children:[(0,i.jsx)("path",{d:"M2325 5109 c-896 -92 -1661 -617 -2054 -1410 -124 -249 -197 -478 -243 -760 -29 -181 -31 -555 -5 -729 74 -477 262 -909 552 -1265 229 -281 523 -515 850 -675 260 -128 483 -199 760 -242 200 -31 550 -31 750 0 278 43 502 115 761 242 261 129 453 266 667 478 210 207 360 417 493 687 125 255 196 483 241 775 26 174 24 548 -5 729 -118 729 -514 1350 -1116 1752 -132 88 -390 219 -537 273 -139 51 -348 104 -501 127 -154 23 -474 33 -613 18z m595 -447 c802 -143 1464 -733 1686 -1504 65 -226 79 -333 78 -603 -1 -269 -14 -369 -78 -590 -200 -692 -759 -1251 -1451 -1451 -224 -65 -320 -78 -595 -78 -275 0 -371 13 -595 78 -692 200 -1251 759 -1451 1451 -65 224 -78 320 -78 595 0 207 4 263 22 360 82 446 283 831 597 1145 344 344 777 554 1265 614 127 16 468 6 600 -17z"}),(0,i.jsx)("path",{d:"M2211 3443 c-18 -9 -42 -31 -52 -47 -18 -30 -19 -68 -19 -839 0 -731 2 -812 16 -837 38 -63 123 -79 189 -35 20 14 272 197 560 405 427 310 526 387 540 416 19 39 15 86 -10 121 -18 26 -1093 809 -1130 823 -36 14 -54 12 -94 -7z"})]})})}),(0,i.jsx)("div",{className:"absolute h-1/2 max-h-[40px] w-1/2 flex justify-center align-center ".concat(n?"opacity-1":"opacity-0"),children:(0,i.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"",height:"",viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:(0,i.jsxs)("g",{transform:"translate(0,512) scale(0.1,-0.1)",fill:e.color,stroke:"none",children:[(0,i.jsx)("path",{d:"M2321 5110 c-497 -48 -990 -251 -1376 -565 -114 -92 -294 -274 -384 -387 -229 -287 -417 -675 -495 -1023 -49 -218 -60 -325 -60 -575 0 -250 11 -357 60 -575 79 -355 272 -749 509 -1040 92 -114 274 -294 387 -384 287 -229 675 -417 1023 -495 218 -49 325 -60 575 -60 250 0 357 11 575 60 261 58 603 204 828 353 389 259 688 599 893 1016 125 255 196 484 241 775 24 161 24 539 0 700 -45 291 -116 520 -241 775 -134 272 -283 480 -498 692 -211 209 -404 346 -673 478 -252 124 -486 197 -765 240 -126 19 -468 27 -599 15z m445 -411 c501 -48 948 -261 1310 -623 254 -254 422 -527 529 -856 163 -506 133 -1053 -85 -1541 -178 -400 -523 -777 -909 -994 -652 -365 -1450 -365 -2102 0 -324 182 -642 500 -824 824 -332 593 -364 1308 -85 1932 174 390 500 753 879 976 376 223 845 325 1287 282z"}),(0,i.jsx)("path",{d:"M1985 3787 c-60 -28 -105 -71 -131 -124 -18 -36 -19 -80 -22 -1068 -3 -1154 -8 -1077 70 -1161 66 -71 176 -97 272 -65 49 17 111 73 139 125 l22 41 0 1045 c0 1000 -1 1047 -19 1080 -67 127 -214 183 -331 127z"}),(0,i.jsx)("path",{d:"M3040 3801 c-76 -23 -147 -89 -171 -157 -12 -32 -14 -222 -14 -1069 l0 -1030 23 -45 c32 -60 63 -92 120 -120 122 -62 286 -2 343 125 18 38 19 94 19 1076 l0 1035 -26 52 c-53 107 -184 166 -294 133z"})]})})})]},e.url)};s.Z=c},8041:function(e,s,l){"use strict";var i=l(5893),t=l(7294),c=l(2265);let r=e=>{let{callback:s}=e,{setScroll:l}=(0,t.useContext)(c.Z),r=()=>{s?s():l("projet")};return(0,i.jsx)("div",{className:"fixed top-0 w-10 h-10 m-5 drop-shadow-lg hover:cursor-pointer bg-white rounded-lg flex p-2 z-20",onClick:()=>r(),children:(0,i.jsx)("svg",{width:"",height:"",viewBox:"0 0 16 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M0.000549877 4.5012C0.00682793 4.66207 0.0730625 4.84806 0.183398 4.96531L3.78351 8.79047C4.02741 9.00972 4.49529 9.10013 4.7679 8.84665C5.03644 8.59695 5.02844 8.11291 4.76099 7.86227L2.22972 5.17623L14.6257 5.17622C14.9985 5.17622 15.3008 4.87394 15.3008 4.50118C15.3008 4.12841 14.9985 3.82613 14.6257 3.82613L2.22972 3.82613L4.76099 1.14009C4.9914 0.90937 5.03393 0.408066 4.7679 0.155702C4.50203 -0.0968313 4.01752 -0.0161571 3.78351 0.212044L0.183398 4.0372C0.0601936 4.1681 0.000236102 4.32175 0.000549877 4.50131L0.000549877 4.5012Z",fill:"currentcolor"})})})};s.Z=r},4399:function(e,s,l){"use strict";l.r(s);var i=l(5893),t=l(7294),c=l(1163),r=l(2265),a=l(8041),n=l(3318),d=l(7192);let o=()=>{let e=(0,c.useRouter)(),{setScroll:s}=(0,t.useContext)(r.Z);(0,t.useEffect)(()=>{if(e){let l=e=>{e.preventDefault(),s("projet")};return window.addEventListener("popstate",l),()=>{window.removeEventListener("popstate",l)}}},[e]);let l={minitel:"#5CA8FF",resto:"#f0c771",narium:"#FCAB5F",runner:"#C76B6B",shop:"#87D4CF",ellis:"#7DC740"};return(0,i.jsxs)("div",{className:"w-full overflow-y-scroll overflow-x-hidden",children:[(0,i.jsx)(a.Z,{}),(0,i.jsxs)("div",{className:"min-h-[90vh] h-fit flex flex-col",children:[(0,i.jsxs)("div",{className:"title",children:[(0,i.jsxs)("div",{className:"flex gap-5",children:[(0,i.jsx)("h1",{children:"Minitel"}),(0,i.jsx)("p",{style:{backgroundColor:l.minitel},className:"tag",children:"Application"})]}),(0,i.jsx)("h2",{children:"D\xe9veloppement d'une interface CLI en Python permettant d'affichage les informations."})]}),(0,i.jsx)("div",{className:"content",children:(0,i.jsx)("div",{className:"contentChild shadow-lg",children:(0,i.jsx)(n.Z,{color:l.minitel,url:"https://www.flickr.com/photos/197545131@N02/52654311186/play/1080p/e6f7dafeae/",poster:"https://live.staticflickr.com/65535/52703541017_258829b397_h.jpg"})})}),(0,i.jsx)("div",{className:"description",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"flex flex-col gap-y-[5%] h-fit",children:(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,i.jsx)("p",{children:"- Affichage d'information du Syst\xe8me"}),(0,i.jsx)("p",{children:"- Affichage d'information du R\xe9seau (Interfaces, Routes, Ip Forwarding)"}),(0,i.jsx)("p",{children:"- Affichage d'information du Processus (triable)"}),(0,i.jsx)("p",{children:"- Export de toutes les informations au format .json compr\xe9ss\xe9 en un ficher .tar"})]})}),(0,i.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,i.jsx)("p",{className:"descTitle",children:"Outils"}),(0,i.jsxs)("div",{className:"tagGrid",children:[(0,i.jsx)("p",{children:"Language :"}),(0,i.jsx)("p",{style:{backgroundColor:l.minitel},className:"tag whitespace-nowrap",children:"Python"}),(0,i.jsx)("p",{children:"Librairie :"}),(0,i.jsx)("p",{style:{backgroundColor:l.minitel},className:"tag whitespace-nowrap",children:"Curses"}),(0,i.jsx)("p",{children:"Interface :"}),(0,i.jsx)("p",{style:{backgroundColor:l.minitel},className:"tag whitespace-nowrap",children:"CLI"})]})]})]})})]}),(0,i.jsxs)("div",{className:"min-h-[90vh] h-fit flex flex-col",children:[(0,i.jsxs)("div",{className:"title",children:[(0,i.jsxs)("div",{className:"flex gap-5",children:[(0,i.jsx)("h1",{children:"Runner2D"}),(0,i.jsx)("p",{style:{backgroundColor:l.runner},className:"tag ",children:"Game"})]}),(0,i.jsx)("h2",{children:"D\xe9veloppement d'un jeux de type Endless Runner en 2D."})]}),(0,i.jsx)("div",{className:"content",children:(0,i.jsx)("div",{className:"contentChild flex max-h-[60vh] h-full",children:(0,i.jsxs)(d.Z,{arrow:l.runner,children:[(0,i.jsx)(n.Z,{color:l.runner,url:"https://www.flickr.com/photos/197545131@N02/52654804250/play/1080p/fbb41db9da/",poster:"https://live.staticflickr.com/65535/52704547673_bc2b2781d0_c.jpg"}),(0,i.jsx)(n.Z,{color:l.runner,url:"https://www.flickr.com/photos/197545131@N02/52654642899/play/1080p/88dc735475/",poster:"https://live.staticflickr.com/65535/52704483420_7bdcd71b0f_c.jpg"})]})})}),(0,i.jsx)("div",{className:"description",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"flex flex-col gap-y-[5%] h-fit",children:(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,i.jsx)("p",{children:"- Cr\xe9er une interface graphique"}),(0,i.jsx)("p",{children:"- Initiation aux base du d\xe9veloppement du jeu vid\xe9o (mouvement, hit-box, \xe9tats de jeu)"}),(0,i.jsx)("p",{children:"- Utilisation de structures et de Macros"})]})}),(0,i.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,i.jsx)("p",{className:"descTitle",children:"Outils"}),(0,i.jsxs)("div",{className:"tagGrid",children:[(0,i.jsx)("p",{children:"Language :"}),(0,i.jsx)("p",{style:{backgroundColor:l.runner},className:"tag whitespace-nowrap",children:"C"}),(0,i.jsx)("p",{children:"Librairie :"}),(0,i.jsx)("p",{style:{backgroundColor:l.runner},className:"tag whitespace-nowrap",children:"SDL2"}),(0,i.jsx)("p",{children:"Environnement :"}),(0,i.jsx)("p",{style:{backgroundColor:l.runner},className:"tag whitespace-nowrap",children:"Linux"})]})]})]})})]}),(0,i.jsxs)("div",{className:"min-h-[90vh] h-fit flex flex-col",children:[(0,i.jsxs)("div",{className:"title",children:[(0,i.jsxs)("div",{className:"flex gap-5",children:[(0,i.jsx)("h1",{children:"RestoAd"}),(0,i.jsx)("p",{style:{backgroundColor:l.resto},className:"tag ",children:"Mobile"})]}),(0,i.jsx)("h2",{children:"D\xe9veloppement d'une application Mobile de r\xe9pertoire de restaurants."})]}),(0,i.jsxs)("div",{className:"content aspect-square flex justify-center items-center gap-[15%] px-10",children:[(0,i.jsx)("div",{className:"h-fit rounded-2xl overflow-hidden shadow-lg",children:(0,i.jsx)(n.Z,{color:l.resto,url:"https://www.flickr.com/photos/197545131@N02/52653874392/play/1080p/fed435f90c/",poster:"https://live.staticflickr.com/65535/52704483400_c268662d3a_c.jpg"})}),(0,i.jsx)("div",{className:"h-fit rounded-2xl overflow-hidden shadow-lg",children:(0,i.jsx)(n.Z,{color:l.resto,url:"https://www.flickr.com/photos/197545131@N02/52654642829/play/1080p/087363572d/",poster:"https://live.staticflickr.com/65535/52704317764_6573c53e0a_c.jpg"})})]}),(0,i.jsx)("div",{className:"description",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"flex flex-col gap-y-[5%] h-fit",children:(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,i.jsx)("p",{children:"- Afficher les diff\xe9rents restaurants"}),(0,i.jsx)("p",{children:"- Possibilit\xe9 de cr\xe9er un restaurant ainsi que des menus pour communiquer leurs informations"}),(0,i.jsx)("p",{children:"- Possibilit\xe9 en tant qu'utilisateur d'\xe9mettre des avis aux restaurants et aux menus"})]})}),(0,i.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,i.jsx)("p",{className:"descTitle",children:"Outils"}),(0,i.jsxs)("div",{className:"tagGrid",children:[(0,i.jsx)("p",{children:"Language :"}),(0,i.jsx)("p",{style:{backgroundColor:l.resto},className:"tag whitespace-nowrap",children:"Java"}),(0,i.jsx)("p",{children:"API :"}),(0,i.jsx)("p",{style:{backgroundColor:l.resto},className:"tag whitespace-nowrap",children:"Laravel"}),(0,i.jsx)("p",{children:"Environnement :"}),(0,i.jsx)("p",{style:{backgroundColor:l.resto},className:"tag whitespace-nowrap",children:"Android"})]})]})]})})]}),(0,i.jsxs)("div",{className:"min-h-[90vh] h-fit flex flex-col",children:[(0,i.jsxs)("div",{className:"title",children:[(0,i.jsxs)("div",{className:"flex gap-5",children:[(0,i.jsx)("h1",{children:"Narium"}),(0,i.jsx)("p",{style:{backgroundColor:l.narium},className:"tag ",children:"Mobile"})]}),(0,i.jsx)("h2",{children:"D\xe9veloppement d'une application Mobile d'aide \xe0 la concentration."})]}),(0,i.jsxs)("div",{className:"content aspect-square flex justify-center items-center gap-[15%] px-10",children:[(0,i.jsx)("div",{className:"h-fit rounded-2xl pt-5 bg-[#111] overflow-hidden shadow-lg",children:(0,i.jsx)(n.Z,{color:l.narium,url:"https://www.flickr.com/photos/197545131@N02/52707738000/play/1080p/698ddcf9b6/",poster:"https://live.staticflickr.com/65535/52706821782_b4fb1d4e0a_c.jpg"})}),(0,i.jsx)("div",{className:"h-fit rounded-2xl pt-5 bg-[#111] overflow-hidden shadow-lg",children:(0,i.jsx)(n.Z,{color:l.narium,url:"https://www.flickr.com/photos/197545131@N02/52707328761/play/1080p/16cf73373d/",poster:"https://live.staticflickr.com/65535/52707347911_735ce0e0a1_c.jpg"})})]}),(0,i.jsx)("div",{className:"description",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"flex flex-col gap-y-[5%] h-fit",children:(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,i.jsx)("p",{children:"- Architecture du projet"}),(0,i.jsx)("p",{children:"- Front-End : Navigation, Authentification, pages des TaskLists"}),(0,i.jsx)("p",{children:"- Back-End"})]})}),(0,i.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,i.jsx)("p",{className:"descTitle",children:"Outils"}),(0,i.jsxs)("div",{className:"tagGrid",children:[(0,i.jsx)("p",{children:"Framework :"}),(0,i.jsx)("p",{style:{backgroundColor:l.narium},className:"tag whitespace-nowrap",children:"React Native"}),(0,i.jsx)("p",{children:"API :"}),(0,i.jsx)("p",{style:{backgroundColor:l.narium},className:"tag whitespace-nowrap",children:"Express/MongoDB"})]})]})]})})]}),(0,i.jsxs)("div",{className:"min-h-[100vh] h-fit flex flex-col",children:[(0,i.jsxs)("div",{className:"title",children:[(0,i.jsxs)("div",{className:"flex gap-5",children:[(0,i.jsx)("h1",{children:"Shoptafleur"}),(0,i.jsx)("p",{style:{backgroundColor:l.shop},className:"tag ",children:"Web"})]}),(0,i.jsx)("h2",{children:"D\xe9veloppement d'un site Web d'E-Commerce de plante"})]}),(0,i.jsx)("div",{className:"content",children:(0,i.jsx)("div",{className:"h-full max-h-[60vh] flex justify-center",children:(0,i.jsxs)(d.Z,{arrow:l.shop,children:[(0,i.jsx)(n.Z,{color:l.shop,url:"https://www.flickr.com/photos/197545131@N02/52654804325/play/1080p/15d89a4dec/",poster:"https://live.staticflickr.com/65535/52704317789_7929adbf96_k.jpg"}),(0,i.jsx)(n.Z,{color:l.shop,url:"https://www.flickr.com/photos/197545131@N02/52654847508/play/1080p/1de8265a38/",poster:"https://live.staticflickr.com/65535/52704062316_ac4383f242_k.jpg"})]})})}),(0,i.jsx)("div",{className:"description",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"flex flex-col gap-y-[5%] h-fit",children:(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,i.jsx)("p",{children:"- Ajouter / Modifier des articles en tant qu'administrateur"}),(0,i.jsx)("p",{children:"- Ajouter / supprimer  des articles des articles de son panier"}),(0,i.jsx)("p",{children:"- Syst\xe8me d'authentification, r\xe9initialisation de mot de passe"})]})}),(0,i.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,i.jsx)("p",{className:"descTitle",children:"Outils"}),(0,i.jsxs)("div",{className:"tagGrid",children:[(0,i.jsx)("p",{children:"Language :"}),(0,i.jsx)("p",{style:{backgroundColor:l.shop},className:"tag  whitespace-nowrap",children:"PHP"}),(0,i.jsx)("p",{children:"Framework :"}),(0,i.jsx)("p",{style:{backgroundColor:l.shop},className:"tag  whitespace-nowrap",children:"Laravel"})]})]})]})})]}),(0,i.jsxs)("div",{className:"end min-h-[100vh] h-fit flex flex-col",children:[(0,i.jsxs)("div",{className:"title",children:[(0,i.jsxs)("div",{className:"flex gap-5",children:[(0,i.jsx)("h1",{children:"Ellis-Car"}),(0,i.jsx)("p",{style:{backgroundColor:l.ellis},className:"tag ",children:"Web"})]}),(0,i.jsxs)("h2",{children:["D\xe9veloppement du site de gestion de flotte automobile pour l'entrepise ",(0,i.jsx)("a",{style:{color:l.ellis},className:"font-bold hover:underline",target:"_blank",href:"https://www.ellis-car.fr/",children:"Ellis-Car"}),"."]})]}),(0,i.jsx)("div",{className:"content",children:(0,i.jsx)("div",{className:"h-full max-h-[60vh] flex justify-center",children:(0,i.jsxs)(d.Z,{arrow:l.ellis,children:[(0,i.jsx)(n.Z,{color:l.ellis,url:"https://www.flickr.com/photos/197545131@N02/52707349701/play/1080p/f26bd32797/",poster:"https://live.staticflickr.com/65535/52707830028_5c4cfa878b_k.jpg"}),(0,i.jsx)(n.Z,{color:l.ellis,url:"https://www.flickr.com/photos/197545131@N02/52707599324/play/1080p/64288a012a/",poster:"https://live.staticflickr.com/65535/52707597329_58abbc4fd1_k.jpg"}),(0,i.jsx)(n.Z,{color:l.ellis,url:"https://www.flickr.com/photos/197545131@N02/52706792267/play/1080p/cb86b15c41/",poster:"https://live.staticflickr.com/65535/52707830013_380386d6ed_h.jpg"}),(0,i.jsx)(n.Z,{color:l.ellis,url:"https://www.flickr.com/photos/197545131@N02/52706792332/play/1080p/c940cde6e7/",poster:"https://live.staticflickr.com/65535/52707347886_99d4239d08_h.jpg"})]})})}),(0,i.jsx)("div",{className:"description",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"flex flex-col gap-y-[5%] h-fit",children:(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,i.jsx)("p",{children:"- Int\xe9gration des maquettes"}),(0,i.jsx)("p",{children:"- Modal d'\xe9dition de Widgets"}),(0,i.jsx)("p",{children:"- Cr\xe9ation de filtres pour tableaux"})]})}),(0,i.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,i.jsx)("p",{className:"descTitle",children:"Outils"}),(0,i.jsxs)("div",{className:"tagGrid",children:[(0,i.jsx)("p",{children:"Language :"}),(0,i.jsx)("p",{style:{backgroundColor:l.ellis},className:"tag  whitespace-nowrap",children:"JavaScript"}),(0,i.jsx)("p",{children:"Framework :"}),(0,i.jsx)("p",{style:{backgroundColor:l.ellis},className:"tag  whitespace-nowrap",children:"Next.js"})]})]})]})})]})]})};s.default=o}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6843)}),_N_E=e.O()}]);