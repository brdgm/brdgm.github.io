if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const c=e=>s(e,o),a={module:{uri:o},exports:l,require:c};i[o]=Promise.all(n.map((e=>a[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/advance-company-DetS-hK0.png",revision:null},{url:"assets/advance-research-RPWILaDe.png",revision:null},{url:"assets/astrogo-enterprises-CXxIHvHA.png",revision:null},{url:"assets/back-Bei7HQyP.png",revision:null},{url:"assets/bonus-marker-selection-CELY9lgH.png",revision:null},{url:"assets/carbon-BjWD5XG9.png",revision:null},{url:"assets/card-selection-B8l4X_xE.png",revision:null},{url:"assets/energy-DqMa_zIv.png",revision:null},{url:"assets/expand-company-B4Hrzvf6.png",revision:null},{url:"assets/first-player-marker-DMZosYvL.png",revision:null},{url:"assets/gain-coin-B5Pa_Sfu.png",revision:null},{url:"assets/gain-helium-CgTLfDca.png",revision:null},{url:"assets/game-skymines-cICMPiS0.jpg",revision:null},{url:"assets/grade-1-DG7YDold.png",revision:null},{url:"assets/grade-2-ClAsh9uw.png",revision:null},{url:"assets/index-BqsiOmnY.js",revision:null},{url:"assets/index-DGv9xDwj.css",revision:null},{url:"assets/index-legacy-8Yo4PgZo.js",revision:null},{url:"assets/kofi_button_dark-ByiSL5_B.png",revision:null},{url:"assets/minerals-Cd3iZw9Q.png",revision:null},{url:"assets/minerva-corp-DkN1DQg2.png",revision:null},{url:"assets/polyfills-CwZJazWw.js",revision:null},{url:"assets/polyfills-legacy-CRR-xtW2.js",revision:null},{url:"assets/research-plan-selection-iH0FSJjf.png",revision:null},{url:"assets/scientist-C68Wy0hm.png",revision:null},{url:"assets/skymine-resources-Dg3g6Ar8.png",revision:null},{url:"assets/tawac-industries-DSjxkkPy.png",revision:null},{url:"assets/titanium-DL2VXEJl.png",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/workbox-window.prod.es5-legacy-DG5k7iCC.js",revision:null},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"c1d24efd0a690d5ed020fe3241a5d6a5"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"b08b6720a90cd8488c05f8ed16cd0129"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"803083d3d1f051bb4dd675c90357175f"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"0bec7500f2a757cca9fc889dba19a130"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"8eb9f352e8615d24b7dacccec5fe8640"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"816cb6f8811ee461eb00cb628b426c31"},{url:"img/icons/favicon.ico",revision:"1f5bb08af05d6730a8c78fb727c4e95a"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"1e8d6077aac27eb47e73fd7c053dbe5f"},{url:"img/icons/pwa-192x192.png",revision:"36689d12c5bb0bea976e979af7120ae7"},{url:"img/icons/pwa-512x512.png",revision:"31d90ce4b54c06e9ce7a16de9e4c004d"},{url:"img/icons/pwa-64x64.png",revision:"37c05bba58d2134f0eb5ec9d833f8c22"},{url:"index.html",revision:"8c8ce32dfc1b394b1cd243de58f9bc6d"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"c1d24efd0a690d5ed020fe3241a5d6a5"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"b08b6720a90cd8488c05f8ed16cd0129"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"803083d3d1f051bb4dd675c90357175f"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"0bec7500f2a757cca9fc889dba19a130"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"8eb9f352e8615d24b7dacccec5fe8640"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"816cb6f8811ee461eb00cb628b426c31"},{url:"img/icons/favicon.ico",revision:"1f5bb08af05d6730a8c78fb727c4e95a"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"1e8d6077aac27eb47e73fd7c053dbe5f"},{url:"img/icons/pwa-192x192.png",revision:"36689d12c5bb0bea976e979af7120ae7"},{url:"img/icons/pwa-512x512.png",revision:"31d90ce4b54c06e9ce7a16de9e4c004d"},{url:"img/icons/pwa-64x64.png",revision:"37c05bba58d2134f0eb5ec9d833f8c22"},{url:"manifest.json",revision:"593a220fafd6b246749c3a6e6325930f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
