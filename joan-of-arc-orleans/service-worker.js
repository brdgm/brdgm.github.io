if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const l=e=>n(e,r),a={module:{uri:r},exports:c,require:l};i[r]=Promise.all(s.map((e=>a[e]||l(e)))).then((e=>(o(...e),c)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/bank-citizen-bonus-xHsBf-6B.png",revision:null},{url:"assets/bank-shield-bonus-BUI1mnRl.png",revision:null},{url:"assets/benefical-deed-left-8Nk86A12.png",revision:null},{url:"assets/benefical-deed-right-BiWkYcLB.png",revision:null},{url:"assets/boatman-B_I_nYm4.png",revision:null},{url:"assets/citizen-1RKgCQML.png",revision:null},{url:"assets/craftsman-DM1xfxE8.png",revision:null},{url:"assets/development-level-v19354hR.png",revision:null},{url:"assets/farmer-BI5YprR3.png",revision:null},{url:"assets/game-joan-of-arc-orleans-CIU9PZi_.jpg",revision:null},{url:"assets/index-Bp-jR6Ge.css",revision:null},{url:"assets/index-DTcQ12x5.js",revision:null},{url:"assets/knight-CLn1rWs0.png",revision:null},{url:"assets/kofi_button_dark-ByiSL5_B.png",revision:null},{url:"assets/monk-ByKFbXc1.png",revision:null},{url:"assets/place-cards-1-saOrMIe4.png",revision:null},{url:"assets/place-cards-2-DH85-BKt.png",revision:null},{url:"assets/place-cards-3-Dw-WoqXw.png",revision:null},{url:"assets/place-cards-4-COrjQv1R.png",revision:null},{url:"assets/place-cards-5-DCyua6fw.png",revision:null},{url:"assets/scholar-CQoQfCI3.png",revision:null},{url:"assets/shield-Bm4_Qf23.png",revision:null},{url:"assets/trader-BMm1-LOn.png",revision:null},{url:"assets/trading-station-BUhaRnC2.png",revision:null},{url:"assets/warehouse-citizen-bonus-CiFcs1nW.png",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"243504e2d9e90c0d97ed45228502dd20"},{url:"img/icons/app-icon.psd",revision:"09fa2341398269dfb1fd211687831ff1"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"f4025ee17601cf19ab2aa6e2b2bdc641"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"fdb2f7cfbd7076a8f071ff5ea50c3509"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"a1cf2cf9ba498ff7a640ced8f517b8ea"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"1f6e026b1e0f4bf3c05398edcf439634"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"c077b3d524cd77d1e0be3f56d6badd02"},{url:"img/icons/favicon.ico",revision:"47f9af1024d22f1f04e63e791e2d03b1"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"6388f6e9f5a9601db0d5aac9e68d79aa"},{url:"img/icons/pwa-192x192.png",revision:"236c431f65366cd1fd57a4be74f7e579"},{url:"img/icons/pwa-512x512.png",revision:"1e084ccc4ddff2ecdd88006fd7f6cc43"},{url:"img/icons/pwa-64x64.png",revision:"efe4f9bdc172c6abe1773d38bad51709"},{url:"index.html",revision:"0204ff02884ed9f990202b952cd9f2ab"},{url:"manifest.json",revision:"1fb13c9d507f6d866e7a3b0a60e8bccd"},{url:"img/icons/pwa-64x64.png",revision:"efe4f9bdc172c6abe1773d38bad51709"},{url:"img/icons/pwa-192x192.png",revision:"236c431f65366cd1fd57a4be74f7e579"},{url:"img/icons/pwa-512x512.png",revision:"1e084ccc4ddff2ecdd88006fd7f6cc43"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"243504e2d9e90c0d97ed45228502dd20"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"f4025ee17601cf19ab2aa6e2b2bdc641"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"fdb2f7cfbd7076a8f071ff5ea50c3509"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"a1cf2cf9ba498ff7a640ced8f517b8ea"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"1f6e026b1e0f4bf3c05398edcf439634"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"c077b3d524cd77d1e0be3f56d6badd02"},{url:"img/icons/favicon.ico",revision:"47f9af1024d22f1f04e63e791e2d03b1"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"6388f6e9f5a9601db0d5aac9e68d79aa"},{url:"manifest.json",revision:"1fb13c9d507f6d866e7a3b0a60e8bccd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
