if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let a={};const r=e=>n(e,o),l={module:{uri:o},exports:a,require:r};i[o]=Promise.all(c.map((e=>l[e]||r(e)))).then((e=>(s(...e),a)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/biothesauri-DGFAfbeZ.png",revision:null},{url:"assets/bluesea-genetics-plc-CPHvov4b.png",revision:null},{url:"assets/dino-libre-XMXdlc5Z.png",revision:null},{url:"assets/dna-collection-arrangement-B7vAFRp0.webp",revision:null},{url:"assets/dna-collection-arrangement-example-BY1lvfED.webp",revision:null},{url:"assets/facilities-habitats-CfB7-2Ed.webp",revision:null},{url:"assets/game-dinogenics-B_lyU7Q5.webp",revision:null},{url:"assets/index-AgSUigPD.js",revision:null},{url:"assets/index-CPtKjS9k.css",revision:null},{url:"assets/intelligen-designs-hq-selection-D0LzXV2l.webp",revision:null},{url:"assets/kofi_button_dark-ByiSL5_B.png",revision:null},{url:"assets/ntek-mYcm3dSM.png",revision:null},{url:"assets/trapezohedron-incorporated-Cj0CU1WC.png",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"776a3c3fc40ef8b59ea25a9011c8129e"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"0d01cbf787484f6fca4ecfc19c706052"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"a231dae7300c895e4c1521881ca58169"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"2cbb627184571db5a88c7c258a65867e"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"bfc35b2999514c942d40e7540b1a574a"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"1cefd92f91ea8a782bdcb18b006a5b28"},{url:"img/icons/favicon.ico",revision:"bbbec19a60a5f6f54b07acc782fe447d"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"6fdc19edd6c7cafecde981299f4b6df8"},{url:"img/icons/pwa-192x192.png",revision:"134bc7efd086dc3f4bf7e9ac1e5f9734"},{url:"img/icons/pwa-512x512.png",revision:"8b0e6506e8d448247adeb60c5ab808d6"},{url:"img/icons/pwa-64x64.png",revision:"dc2c633c94c74e29878abd222a1ab64a"},{url:"index.html",revision:"1f97291b0158f5b88bbde7692999f60a"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"776a3c3fc40ef8b59ea25a9011c8129e"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"0d01cbf787484f6fca4ecfc19c706052"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"a231dae7300c895e4c1521881ca58169"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"2cbb627184571db5a88c7c258a65867e"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"bfc35b2999514c942d40e7540b1a574a"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"1cefd92f91ea8a782bdcb18b006a5b28"},{url:"img/icons/favicon.ico",revision:"bbbec19a60a5f6f54b07acc782fe447d"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"6fdc19edd6c7cafecde981299f4b6df8"},{url:"img/icons/pwa-192x192.png",revision:"134bc7efd086dc3f4bf7e9ac1e5f9734"},{url:"img/icons/pwa-512x512.png",revision:"8b0e6506e8d448247adeb60c5ab808d6"},{url:"img/icons/pwa-64x64.png",revision:"dc2c633c94c74e29878abd222a1ab64a"},{url:"manifest.json",revision:"a07df96d4234a92b90ab0d804c787eb7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
