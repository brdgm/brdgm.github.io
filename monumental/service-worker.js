if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const d=e=>n(e,c),a={module:{uri:c},exports:r,require:d};i[c]=Promise.all(o.map((e=>a[e]||d(e)))).then((e=>(s(...e),r)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-IH_j-YSq.css",revision:null},{url:"assets/index-mAskYhQ7.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"index.html",revision:"9b65dbacdd873805f6a8e01373923136"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/favicon.ico",revision:"85433f9c7fed085c1f5c3ffb4877a591"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"10c588e8c215675a7c74a0207e22743d"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"c3ad66cb5a72fb6467e4f578b2041705"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"ae590a953dcbdcd90d5cfb4d947c0f7e"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"bfaaee471929b9c2659b9d136a56efb4"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"26d5a1206d1134fba0dd9bb8dffb7543"},{url:"img/icons/maskable-icon-512x512.png",revision:"7235443541f8dfd52f6941f206b41b70"},{url:"img/icons/pwa-64x64.png",revision:"afb29f855ddaded795d5a41eb4da98c9"},{url:"img/icons/pwa-192x192.png",revision:"02a37652bbbfccd1637b615646f7129c"},{url:"img/icons/pwa-512x512.png",revision:"7e4d8ea04a334acb9bb687ed6535dc3f"},{url:"manifest.json",revision:"8e0be02c4bc8051a480d3fc368334b6c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
