if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const a=e=>n(e,s),f={module:{uri:s},exports:r,require:a};i[s]=Promise.all(o.map((e=>f[e]||a(e)))).then((e=>(c(...e),r)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-18a3fe16.css",revision:null},{url:"assets/index-b91ffbf4.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"ac058d26ba8a549242a348bedc754891"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/favicon.ico",revision:"3809de6f40e49c39bf752570911897a2"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"25185ad3602abffa325d96a8c8f92097"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"c9d835d2cae920db6005adbaf394849b"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"f8c412aeda470d5c4f2e411ad3a928d8"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"1644cb553fd9cfd4d1a8658c09a9f3f9"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"ff51b9b444ae28eca82227cac6638e34"},{url:"img/icons/maskable-icon-512x512.png",revision:"08988bf2693849b41f6fec08a0606016"},{url:"img/icons/pwa-64x64.png",revision:"dcd16ad2b7c696e7c57709cbe4fbb29f"},{url:"img/icons/pwa-192x192.png",revision:"3dc69ee507f1ed453497469043de8c8a"},{url:"img/icons/pwa-512x512.png",revision:"373f8be57fb880827b80bb29935f1a85"},{url:"manifest.json",revision:"1ce5b465d19c9c3f78f5a7cb3927dcc7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));