if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const a=e=>i(e,n),u={module:{uri:n},exports:o,require:a};s[n]=Promise.all(l.map((e=>u[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/1-BME45Zub.webp",revision:null},{url:"assets/1-community-die-bonus-s7HJKwoQ.webp",revision:null},{url:"assets/1-DiXmFQCx.webp",revision:null},{url:"assets/1-double-plus-cheaper-D-YDJGJW.webp",revision:null},{url:"assets/1-DSYetcQK.webp",revision:null},{url:"assets/1-DzZ_2aIa.webp",revision:null},{url:"assets/1-market-barrow-scoring-move-road-BCJXpYfb.webp",revision:null},{url:"assets/1-PnXA6GFD.webp",revision:null},{url:"assets/1-siesta-markers-reduce-2-BlcevpyN.webp",revision:null},{url:"assets/2-additional-farm-card-8JUBb3zI.webp",revision:null},{url:"assets/2-Bbspi06a.webp",revision:null},{url:"assets/2-CzJGiNM2.webp",revision:null},{url:"assets/2-DBRqQBWw.webp",revision:null},{url:"assets/2-goat-delivery-prestige-UTOsqvwp.webp",revision:null},{url:"assets/2-market-barrow-scoring-gain-prestige-DYeIh73Z.webp",revision:null},{url:"assets/2-trough-harvest-good-COcmEf7i.webp",revision:null},{url:"assets/2-VTxhQY-W.webp",revision:null},{url:"assets/2-Wqd05wsv.webp",revision:null},{url:"assets/3-BgdaX4fi.webp",revision:null},{url:"assets/3-BvM86MH6.webp",revision:null},{url:"assets/3-CtEimIXg.webp",revision:null},{url:"assets/3-DKsDJq_w.webp",revision:null},{url:"assets/3-first-die-double-income-B5yM-Z54.webp",revision:null},{url:"assets/3-income-twice-RdvhGqSg.webp",revision:null},{url:"assets/3-local-market-scoring-prestige-sElJeTs6.webp",revision:null},{url:"assets/3-prestige-paid-workers-j_yOQX7q.webp",revision:null},{url:"assets/4-B4JGDM2r.webp",revision:null},{url:"assets/4-BmaX875P.webp",revision:null},{url:"assets/4-D18Vw0QH.webp",revision:null},{url:"assets/4-final-scoring-play-farm-card-C06qz9ku.webp",revision:null},{url:"assets/4-harbor-prestige-Lj4VNKow.webp",revision:null},{url:"assets/4-siesta-space-9-prestige-B-a5UCis.webp",revision:null},{url:"assets/4-stable-scoring-prestige-BkY7pOPf.webp",revision:null},{url:"assets/5-5SVD8-2h.webp",revision:null},{url:"assets/5-BbxqKDli.webp",revision:null},{url:"assets/5-BCa2GuWy.webp",revision:null},{url:"assets/6-lyOU04OP.webp",revision:null},{url:"assets/community-delivery-free-step-reward-track-BUKp9j0y.webp",revision:null},{url:"assets/community-delivery-free-step-reward-track-Dn9zczno.webp",revision:null},{url:"assets/donkey-delivery-with-costs-BWc6LiYE.webp",revision:null},{url:"assets/donkey-delivery-with-costs-W_mJUF4w.webp",revision:null},{url:"assets/down-Cjb7WBEJ.webp",revision:null},{url:"assets/fill-through-Bw7y7ubn.webp",revision:null},{url:"assets/fill-through-CdlOkC9g.webp",revision:null},{url:"assets/fill-trough-1-C3nfypnL.webp",revision:null},{url:"assets/game-el-burro-CQSGMbC2.webp",revision:null},{url:"assets/goat-delivery-with-costs-D4FteFUx.webp",revision:null},{url:"assets/goat-delivery-with-costs-TLXhj5dM.webp",revision:null},{url:"assets/hand-limit-CUWlh3ty.webp",revision:null},{url:"assets/hot-27od6bJu.webp",revision:null},{url:"assets/index-Co4NW0vo.js",revision:null},{url:"assets/index-DVwmePX3.css",revision:null},{url:"assets/index-legacy-D6BMJCDY.js",revision:null},{url:"assets/kofi_button_dark-ByiSL5_B.png",revision:null},{url:"assets/left-D0Gv3Tso.webp",revision:null},{url:"assets/left-RcMIALoW.webp",revision:null},{url:"assets/long-way-sJ-5eotA.webp",revision:null},{url:"assets/middle-C2uZpe-C.webp",revision:null},{url:"assets/play-a-farm-card-lvd6ZX3J.webp",revision:null},{url:"assets/play-a-farm-card-qnjxsHVq.webp",revision:null},{url:"assets/play-farm-card-7yy_vpw8.webp",revision:null},{url:"assets/polyfills-legacy-Bm0CaUbq.js",revision:null},{url:"assets/reward-track-step-Cx_a4JWk.webp",revision:null},{url:"assets/right-C-yAUzV3.webp",revision:null},{url:"assets/right-C9jTHccQ.webp",revision:null},{url:"assets/same-number-BGjoHz1W.webp",revision:null},{url:"assets/short-way-DvM394rD.webp",revision:null},{url:"assets/siesta-2-Bf8ClvOz.webp",revision:null},{url:"assets/take-farm-good-1-DA7LHbv4.webp",revision:null},{url:"assets/take-farm-good-1-silver-1-Bt0KKPap.webp",revision:null},{url:"assets/take-farm-good-2-DHqnZvkp.webp",revision:null},{url:"assets/take-farm-good-pig-Dxv6bp1Y.webp",revision:null},{url:"assets/take-silver-2-U-sx6mhH.webp",revision:null},{url:"assets/take-upgraded-good-7ogvhVEx.webp",revision:null},{url:"assets/transport-additional-goat-delivery-Dxf7dsZm.webp",revision:null},{url:"assets/travel-on-the-road-ql6dmweM.webp",revision:null},{url:"assets/travel-on-the-road-t20gDKfh.webp",revision:null},{url:"assets/travel-road-CQR3XadB.webp",revision:null},{url:"assets/up-BE33e42r.webp",revision:null},{url:"assets/workbox-window.prod.es5-D_kkWWxm.js",revision:null},{url:"assets/workbox-window.prod.es5-legacy-MeVAcd4a.js",revision:null},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"26f312a53cdacaae33843998018d98e8"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"c3ff80492e86e98a1d627b8a9462f69a"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"9c0c690820df425700f9416d75e340c1"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"c01f64cda9e3e5a2c35de9e787fc9cbc"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"163f9e971cce9c45da8133b85a4da5fa"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"e75d7ad33480e29c9c08082e5f7505c9"},{url:"img/icons/favicon.ico",revision:"3a57e9ebbcb0abb2cea1e808dc435ebe"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"762c76cabad61f770c6a6a98e2b701ff"},{url:"img/icons/pwa-192x192.png",revision:"707180d8d3979d670fb29671407f33d1"},{url:"img/icons/pwa-512x512.png",revision:"98f4e1de18a939ffa1fe47c162d919c2"},{url:"img/icons/pwa-64x64.png",revision:"0ec990593c0e7822ee923483fe2997ba"},{url:"index.html",revision:"27c1120852141657ac1621720b84deaf"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"26f312a53cdacaae33843998018d98e8"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"c3ff80492e86e98a1d627b8a9462f69a"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"9c0c690820df425700f9416d75e340c1"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"c01f64cda9e3e5a2c35de9e787fc9cbc"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"163f9e971cce9c45da8133b85a4da5fa"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"e75d7ad33480e29c9c08082e5f7505c9"},{url:"img/icons/favicon.ico",revision:"3a57e9ebbcb0abb2cea1e808dc435ebe"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"762c76cabad61f770c6a6a98e2b701ff"},{url:"img/icons/pwa-192x192.png",revision:"707180d8d3979d670fb29671407f33d1"},{url:"img/icons/pwa-512x512.png",revision:"98f4e1de18a939ffa1fe47c162d919c2"},{url:"img/icons/pwa-64x64.png",revision:"0ec990593c0e7822ee923483fe2997ba"},{url:"manifest.json",revision:"9c2f4eb440376ceea317efa2142bba05"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
