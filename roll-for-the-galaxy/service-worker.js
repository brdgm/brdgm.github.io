if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const a=e=>n(e,c),l={module:{uri:c},exports:r,require:a};i[c]=Promise.all(o.map((e=>l[e]||a(e)))).then((e=>(s(...e),r)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-704649c4.js",revision:null},{url:"assets/index-ba7b30dc.css",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"f02effc4a7a2f99aee4e1026f0439e76"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/favicon.ico",revision:"a0472748c6201847b3c48dc314bc287e"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"001a0f3363c3b6e637138a0074e992b0"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"792239c758d2477bf079bb21437e2f64"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"cc839eb452e0f584d73e85fb3c15b314"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"bfa80204f4d783eb90aa5aa02e1e9d4c"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"17230d1b30a8864a99662339a198e24f"},{url:"img/icons/maskable-icon-512x512.png",revision:"a9e3600e9d8c98b21bf3cd8789a8f40a"},{url:"img/icons/pwa-64x64.png",revision:"2f9b3918633cc5aad9dd7581b11ff832"},{url:"img/icons/pwa-192x192.png",revision:"8982e712a75fa379af6e917ed4f34369"},{url:"img/icons/pwa-512x512.png",revision:"63813015e6a21e26b15c15c7f390a3f5"},{url:"manifest.json",revision:"d91b9c02183b91f9b6991e89e438ac4a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
