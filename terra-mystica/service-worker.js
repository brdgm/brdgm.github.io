if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const d=e=>n(e,c),f={module:{uri:c},exports:r,require:d};i[c]=Promise.all(o.map((e=>f[e]||d(e)))).then((e=>(s(...e),r)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-71e0beac.js",revision:null},{url:"assets/index-8225e662.css",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"97b22cee0504a00ce4dd1808417163bf"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/favicon.ico",revision:"5edfd1df80bd704821087def1ee441d6"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"02b249ce4dd9ac0804d4a2834db15363"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"268db341050fef18e2ef6fb8e4186678"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"1966f59f075f2b6fed85af67632c2fff"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"b9ae3038701dde4c9a1fd421a48be4dd"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"212a9710f93a7152826d29ff0dba81e3"},{url:"img/icons/maskable-icon-512x512.png",revision:"69a6bb93577f8a165a6b0f5f2ce4d854"},{url:"img/icons/pwa-64x64.png",revision:"1f7b943829bdc3722214b79899de5e78"},{url:"img/icons/pwa-192x192.png",revision:"1a7ca0ed148b559711bc2438f03a6c70"},{url:"img/icons/pwa-512x512.png",revision:"eb17066bd0c71ea45ce2dcf6729c098d"},{url:"manifest.json",revision:"e777fd14bd0f67d0bd178b3c390d69e4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
