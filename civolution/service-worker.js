if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const u=e=>i(e,r),a={module:{uri:r},exports:o,require:u};s[r]=Promise.all(n.map((e=>a[e]||u(e)))).then((e=>(l(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/3-CQS5-v0u.webp",revision:null},{url:"assets/a-DsN1lrTo.webp",revision:null},{url:"assets/advance-favor-Dm3GW2P7.webp",revision:null},{url:"assets/b-BrD4buSE.webp",revision:null},{url:"assets/c-bCzhyd2Y.webp",revision:null},{url:"assets/construction-CTTsscuB.webp",revision:null},{url:"assets/construction-D2VGR0rA.webp",revision:null},{url:"assets/construction-Dtw6oVfk.webp",revision:null},{url:"assets/construction-TQ_K2prN.webp",revision:null},{url:"assets/culture-DDYaTuDM.webp",revision:null},{url:"assets/culture-sGgvIolO.webp",revision:null},{url:"assets/d-BMKJdxn8.webp",revision:null},{url:"assets/desert-DMQ26ghB.webp",revision:null},{url:"assets/e-C9u8f5vh.webp",revision:null},{url:"assets/era-scoring-B215YZ1v.webp",revision:null},{url:"assets/evolution-7FQUrxxv.webp",revision:null},{url:"assets/evolution-DCkP9ITM.webp",revision:null},{url:"assets/expansion-BMPDBHh7.webp",revision:null},{url:"assets/expansion-BYPGSDPs.webp",revision:null},{url:"assets/f-D4zxFlza.webp",revision:null},{url:"assets/final-scoring-DqCfZV-Z.webp",revision:null},{url:"assets/forest-Dzpnqylh.webp",revision:null},{url:"assets/g-iGrZwe9C.webp",revision:null},{url:"assets/gain-activation-die-BO36AjoC.webp",revision:null},{url:"assets/gain-fate-die-C_4bapBe.webp",revision:null},{url:"assets/gain-vp-BQ9IwLKM.webp",revision:null},{url:"assets/game-civolution-BzhLrdnA.webp",revision:null},{url:"assets/grassland-CHmHfNTX.webp",revision:null},{url:"assets/h-OYyljvxp.webp",revision:null},{url:"assets/hills-DV9hQapu.webp",revision:null},{url:"assets/index-DnPCJfX6.css",revision:null},{url:"assets/index-legacy-BpJhx5wR.js",revision:null},{url:"assets/index-OmCYKlBj.js",revision:null},{url:"assets/knowledge-apQCVznd.webp",revision:null},{url:"assets/knowledge-DQWzDC_K.webp",revision:null},{url:"assets/knowledge-DUKRRtXj.webp",revision:null},{url:"assets/kofi_button_dark-ByiSL5_B.png",revision:null},{url:"assets/mountains-CQE6lUAx.webp",revision:null},{url:"assets/perform-migration-BtWVC-pY.webp",revision:null},{url:"assets/perform-procreation-B_xrInr4.webp",revision:null},{url:"assets/perform-provision-E4ZZ6T-_.webp",revision:null},{url:"assets/phase-indicator-D4o7d5sP.webp",revision:null},{url:"assets/place-evolution-marker-C-XgYBHQ.webp",revision:null},{url:"assets/place-hunting-token-DOUuAK3Q.webp",revision:null},{url:"assets/place-prosperity-marker-DEOlnHoA.webp",revision:null},{url:"assets/place-statue-BCo5kCLE.webp",revision:null},{url:"assets/polyfills-D4Cy_LVs.js",revision:null},{url:"assets/polyfills-legacy-N9tjOmmf.js",revision:null},{url:"assets/population-WkYL6Vcs.webp",revision:null},{url:"assets/prestige-DAB_xpKI.webp",revision:null},{url:"assets/prestige-l54SLfSW.webp",revision:null},{url:"assets/prosperity-BAn4ZF_9.webp",revision:null},{url:"assets/reveal-sites-B7hyIqdl.webp",revision:null},{url:"assets/swamp-Cv5iSR7a.webp",revision:null},{url:"assets/technology-BgGK500n.webp",revision:null},{url:"assets/technology-CFOgJmv8.webp",revision:null},{url:"assets/technology-CotUQ6Xs.webp",revision:null},{url:"assets/technology-DTUIhARL.webp",revision:null},{url:"assets/technology-hPtse9Cx.webp",revision:null},{url:"assets/tribe-setup-Dt26i654.webp",revision:null},{url:"assets/vici-hello-DAL8vDlw.webp",revision:null},{url:"assets/vici-qN0iRz3i.webp",revision:null},{url:"assets/water-DJbyGDsL.webp",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/workbox-window.prod.es5-legacy-MeVAcd4a.js",revision:null},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"15a9c68e5d0d3a1e649290219d00a0fc"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"2c24d0a903002ee38f53ca396bd6fd87"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"4f92e7dcf177d5ba23bde5fb4a42341b"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"35657bb96c82e4c4e6631a131f4d4878"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"610d169401db714c715ec8a8138d54fe"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"5ae8dd7de90afb0ede9f3f650eca3ed5"},{url:"img/icons/favicon.ico",revision:"67ec4e25de4d95fec44f84f4ca95b11f"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"6f20f820000424182fafd2b298ec76a7"},{url:"img/icons/pwa-192x192.png",revision:"cf2e9fa4e20a9cbc8a6991c782b8c7de"},{url:"img/icons/pwa-512x512.png",revision:"dcf3bd29a2757db542efc712c15cbd40"},{url:"img/icons/pwa-64x64.png",revision:"889d6d0162c8ae39830c7ac4df4e533f"},{url:"index.html",revision:"f54ce00c6055cf8f5989c18dbf667db9"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"15a9c68e5d0d3a1e649290219d00a0fc"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"2c24d0a903002ee38f53ca396bd6fd87"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"4f92e7dcf177d5ba23bde5fb4a42341b"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"35657bb96c82e4c4e6631a131f4d4878"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"610d169401db714c715ec8a8138d54fe"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"5ae8dd7de90afb0ede9f3f650eca3ed5"},{url:"img/icons/favicon.ico",revision:"67ec4e25de4d95fec44f84f4ca95b11f"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"6f20f820000424182fafd2b298ec76a7"},{url:"img/icons/pwa-192x192.png",revision:"cf2e9fa4e20a9cbc8a6991c782b8c7de"},{url:"img/icons/pwa-512x512.png",revision:"dcf3bd29a2757db542efc712c15cbd40"},{url:"img/icons/pwa-64x64.png",revision:"889d6d0162c8ae39830c7ac4df4e533f"},{url:"manifest.json",revision:"6a51e98f5aa494f7f8b341d010e3fc9d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
