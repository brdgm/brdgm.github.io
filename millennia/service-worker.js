if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,l)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const c=e=>s(e,o),a={module:{uri:o},exports:r,require:c};i[o]=Promise.all(n.map((e=>a[e]||c(e)))).then((e=>(l(...e),r)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/agriculture-qNKNBNW7.webp",revision:null},{url:"assets/architect-token-DF8cPKNl.webp",revision:null},{url:"assets/army-B7aDWBeK.webp",revision:null},{url:"assets/arts-DQTif-dA.webp",revision:null},{url:"assets/building-any-BYzpCz71.webp",revision:null},{url:"assets/communication-DDExaKPX.webp",revision:null},{url:"assets/economics-AngC9pjI.webp",revision:null},{url:"assets/energy-BHWkGvx5.webp",revision:null},{url:"assets/engineering-CoGNf15Y.webp",revision:null},{url:"assets/first-player-token-BSkKMVQJ.webp",revision:null},{url:"assets/game-millennia-ZoCEwNwq.webp",revision:null},{url:"assets/government-ZG5xJthh.webp",revision:null},{url:"assets/income-DFSHQtu-.webp",revision:null},{url:"assets/income-lock-DZ0CdIOM.webp",revision:null},{url:"assets/index-BtMkgLwX.js",revision:null},{url:"assets/index-CbUMpWnk.css",revision:null},{url:"assets/index-legacy-BvatqlW4.js",revision:null},{url:"assets/kofi_button_dark-ByiSL5_B.png",revision:null},{url:"assets/medicine-CiyZmmH1.webp",revision:null},{url:"assets/military-DMjEhmXD.webp",revision:null},{url:"assets/polyfills-DPAh95CB.js",revision:null},{url:"assets/polyfills-legacy-2CnD9yOU.js",revision:null},{url:"assets/prosperity-card-BaqamKQU.webp",revision:null},{url:"assets/prosperity-Duw6Ddnc.webp",revision:null},{url:"assets/prosperity-money-BdixcPKb.webp",revision:null},{url:"assets/science-l8EwVElz.webp",revision:null},{url:"assets/social-science-DaWQQQ-v.webp",revision:null},{url:"assets/transportation-D7gbSPzx.webp",revision:null},{url:"assets/unlock-income-CUPglj4V.webp",revision:null},{url:"assets/war-track-advance-8fsZgWfm.webp",revision:null},{url:"assets/war-track-unlock-BJeXEIE1.webp",revision:null},{url:"assets/weaponry-BCq9JfMt.webp",revision:null},{url:"assets/wonder-CgNNpd70.webp",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/workbox-window.prod.es5-legacy-DG5k7iCC.js",revision:null},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"e23c953b2f8f6da6b079e6618a8e68a0"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"2b51857338724d7500b28a57e4401ff0"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"05d155049e29296837788c3d64a1a24c"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"e635541a093e3528262d3c88ae91566b"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"b8304ce40d6742cd69fb72826d25dedd"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"bde5d125f9bce32427df635b5f67fea6"},{url:"img/icons/favicon.ico",revision:"a426781f7953c401036e58ba89fc0055"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"89ea82f26d20629053959b8b43a512ec"},{url:"img/icons/pwa-192x192.png",revision:"23c5cf8777c512ff2534a57ce9f205eb"},{url:"img/icons/pwa-512x512.png",revision:"0dee695dc4047f0a8db93cac41b02770"},{url:"img/icons/pwa-64x64.png",revision:"8d69c9bb5727de27689ccf8e134b1714"},{url:"index.html",revision:"d01909f0df10ac6597b75875797d82b1"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"e23c953b2f8f6da6b079e6618a8e68a0"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"2b51857338724d7500b28a57e4401ff0"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"05d155049e29296837788c3d64a1a24c"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"e635541a093e3528262d3c88ae91566b"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"b8304ce40d6742cd69fb72826d25dedd"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"bde5d125f9bce32427df635b5f67fea6"},{url:"img/icons/favicon.ico",revision:"a426781f7953c401036e58ba89fc0055"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"89ea82f26d20629053959b8b43a512ec"},{url:"img/icons/pwa-192x192.png",revision:"23c5cf8777c512ff2534a57ce9f205eb"},{url:"img/icons/pwa-512x512.png",revision:"0dee695dc4047f0a8db93cac41b02770"},{url:"img/icons/pwa-64x64.png",revision:"8d69c9bb5727de27689ccf8e134b1714"},{url:"manifest.json",revision:"9b1cbbb14eb0e356ee77a455a79dea5b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
