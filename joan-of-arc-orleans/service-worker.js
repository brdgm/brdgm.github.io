if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const f=e=>n(e,s),d={module:{uri:s},exports:r,require:f};i[s]=Promise.all(o.map((e=>d[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-Aafo0ehn.css",revision:null},{url:"assets/index-CvRP3-ps.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"index.html",revision:"6e58df487b67dc38982899a25ad29216"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/favicon.ico",revision:"47f9af1024d22f1f04e63e791e2d03b1"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"1f6e026b1e0f4bf3c05398edcf439634"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"c077b3d524cd77d1e0be3f56d6badd02"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"f4025ee17601cf19ab2aa6e2b2bdc641"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"fdb2f7cfbd7076a8f071ff5ea50c3509"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"a1cf2cf9ba498ff7a640ced8f517b8ea"},{url:"img/icons/maskable-icon-512x512.png",revision:"6388f6e9f5a9601db0d5aac9e68d79aa"},{url:"img/icons/pwa-64x64.png",revision:"efe4f9bdc172c6abe1773d38bad51709"},{url:"img/icons/pwa-192x192.png",revision:"236c431f65366cd1fd57a4be74f7e579"},{url:"img/icons/pwa-512x512.png",revision:"1e084ccc4ddff2ecdd88006fd7f6cc43"},{url:"manifest.json",revision:"1fb13c9d507f6d866e7a3b0a60e8bccd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
