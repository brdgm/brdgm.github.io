if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,l)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const u=e=>n(e,s),a={module:{uri:s},exports:o,require:u};i[s]=Promise.all(r.map((e=>a[e]||u(e)))).then((e=>(l(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"@brdgm/blitzkrieg-solo-helper"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/chunk-vendors.a6d17a7c.css",revision:null},{url:"css/index.6127a788.css",revision:null},{url:"img/allies.daf9355b.png",revision:null},{url:"img/big-guns.d4939a3a.png",revision:null},{url:"img/bombing.83dc2d26.png",revision:null},{url:"img/economic-warfare.cbadddd0.png",revision:null},{url:"img/game.704b21fa.jpg",revision:null},{url:"img/headerNavIcon.588f3371.svg",revision:null},{url:"img/improved-research.ff10a384.png",revision:null},{url:"img/industrial-production.798a6099.png",revision:null},{url:"img/propaganda.ba557f3e.png",revision:null},{url:"img/rapid-deployment.1ca06f29.png",revision:null},{url:"img/research-development.17f4305e.png",revision:null},{url:"img/research.63a005e0.png",revision:null},{url:"img/secure.51253116.png",revision:null},{url:"img/steamroll.2b05bb4b.png",revision:null},{url:"img/strategic-advantage.784083c0.png",revision:null},{url:"img/tactical-advantage.f1b39d18.png",revision:null},{url:"index.html",revision:"3d236d4fbed1f7e5a33675a188c271ed"},{url:"js/chunk-vendors.63a78de4.js",revision:null},{url:"js/index.858acbff.js",revision:null},{url:"manifest.json",revision:"e3c37f9bf11d69f58cee6a9591fbd01b"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
