if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const a=e=>n(e,c),l={module:{uri:c},exports:r,require:a};i[c]=Promise.all(s.map((e=>l[e]||a(e)))).then((e=>(o(...e),r)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/astronaut-CDGLFYtF.png",revision:null},{url:"assets/energy-BFh2crYk.png",revision:null},{url:"assets/game-welcome-to-the-moon-Be7x9em8.webp",revision:null},{url:"assets/index-C-Nb6fAE.css",revision:null},{url:"assets/index-CZcXnMIV.js",revision:null},{url:"assets/kofi_button_dark-ByiSL5_B.png",revision:null},{url:"assets/planning-BZ48SrqL.png",revision:null},{url:"assets/plant-D0DE7n2F.png",revision:null},{url:"assets/robot-BRYUMNgQ.png",revision:null},{url:"assets/solo-bonus-Bj7iEq1T.png",revision:null},{url:"assets/water-A3RBsKlc.png",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"a8bce6ac17c19bb44cda47df2fe17e61"},{url:"img/icons/app-icon.psd",revision:"e81a53399e2917a2b4b97a3cab4147f6"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"bec636808ce56b46013d1f1a28b67b53"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"97cdb22d7b4c34378fae01c783b14a01"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"1dec05cd33dbf7d58cd400e0677ea6d9"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"d84847dc1b8b214608999cc829ef0c18"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"9fec3f70611ef809173bef4082bf70e4"},{url:"img/icons/favicon.ico",revision:"42deb4187d1d48959b5741bf12aac8e4"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"183afa65f50eea4c6940b58ef89aff1e"},{url:"img/icons/pwa-192x192.png",revision:"48aa14ffea9efbb5874c9a52e1c12675"},{url:"img/icons/pwa-512x512.png",revision:"fe445b2dab39f066978c87db9992ce48"},{url:"img/icons/pwa-64x64.png",revision:"c3abd023f0a24d49d2b2d0d57c9d3165"},{url:"index.html",revision:"f69b1a0dd92145bb4161ba496b36bbca"},{url:"manifest.json",revision:"c8342ce729e2c508286f3feb14a7097d"},{url:"img/icons/pwa-64x64.png",revision:"c3abd023f0a24d49d2b2d0d57c9d3165"},{url:"img/icons/pwa-192x192.png",revision:"48aa14ffea9efbb5874c9a52e1c12675"},{url:"img/icons/pwa-512x512.png",revision:"fe445b2dab39f066978c87db9992ce48"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"a8bce6ac17c19bb44cda47df2fe17e61"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"bec636808ce56b46013d1f1a28b67b53"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"97cdb22d7b4c34378fae01c783b14a01"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"1dec05cd33dbf7d58cd400e0677ea6d9"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"d84847dc1b8b214608999cc829ef0c18"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"9fec3f70611ef809173bef4082bf70e4"},{url:"img/icons/favicon.ico",revision:"42deb4187d1d48959b5741bf12aac8e4"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"183afa65f50eea4c6940b58ef89aff1e"},{url:"manifest.json",revision:"c8342ce729e2c508286f3feb14a7097d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));