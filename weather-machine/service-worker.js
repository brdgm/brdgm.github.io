if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const l=e=>n(e,c),a={module:{uri:c},exports:r,require:l};i[c]=Promise.all(o.map((e=>a[e]||l(e)))).then((e=>(s(...e),r)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-401bdc48.js",revision:null},{url:"assets/index-ab6b9ae1.css",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"8ec7637211bd396e507c261c94b06ec1"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/favicon.ico",revision:"32b4d865629f18d9e61a49b67c2e77ff"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"a3c57d8e46745f014b276c9e41b726a6"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"b2d8534509235b466dcdb920a650aff6"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"59dc654a5722ad3b5f6640c6e192f93f"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"e77fcde5bf2943e8217bea42811cefcf"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"bf9f6c5f699714f0289323e70060b3b5"},{url:"img/icons/maskable-icon-512x512.png",revision:"badb82efe719a6e4e2024cf954b50209"},{url:"img/icons/pwa-64x64.png",revision:"041af8d520d15cbc13ed3739b845d283"},{url:"img/icons/pwa-192x192.png",revision:"6358d32b089e27e3675449c770f4958e"},{url:"img/icons/pwa-512x512.png",revision:"36ca5a7e48c558f4f2e80d197d382d02"},{url:"manifest.json",revision:"35a66b3450e1c85c9399f5abc038620a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
