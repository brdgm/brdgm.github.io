if(!self.define){let n,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=e,document.head.appendChild(n)}else n=i,importScripts(i),e()})).then((()=>{let n=e[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(l,r)=>{const s=n||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let u={};const o=n=>i(n,s),c={module:{uri:s},exports:u,require:o};e[s]=Promise.all(l.map((n=>c[n]||o(n)))).then((n=>(r(...n),u)))}}define(["./workbox-db5fc017"],(function(n){"use strict";n.setCacheNameDetails({prefix:"@brdgm/monumental-solo-helper"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"css/chunk-vendors.79d6b817.css",revision:null},{url:"css/index.e03b5989.css",revision:null},{url:"img/amazons.c73511e9.png",revision:null},{url:"img/atlantis.4e22d8b0.png",revision:null},{url:"img/automa-symbol.3b459d34.jpg",revision:null},{url:"img/aztecs.f188a66b.png",revision:null},{url:"img/china.750aab2b.png",revision:null},{url:"img/coin.c62e1e20.png",revision:null},{url:"img/cultural-policy.181eaedb.png",revision:null},{url:"img/denmark.b23220f2.png",revision:null},{url:"img/egypt.61b49e9c.png",revision:null},{url:"img/game-monumental-lost-kingdoms.d3608de8.jpg",revision:null},{url:"img/game-monumental.554c44af.jpg",revision:null},{url:"img/greece.0cd5b327.png",revision:null},{url:"img/headerNavIcon.588f3371.svg",revision:null},{url:"img/japan.7ac939fd.png",revision:null},{url:"img/mughals.e48c31ee.png",revision:null},{url:"index.html",revision:"59752f1aa72224b5df230b6f783b512b"},{url:"js/chunk-vendors.6c5aaaff.js",revision:null},{url:"js/index.c724f01f.js",revision:null},{url:"manifest.json",revision:"216bad70f249a5b38d2f33835c8fc286"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
