if(!self.define){let l,i={};const n=(n,e)=>(n=new URL(n+".js",e).href,i[n]||new Promise((i=>{if("document"in self){const l=document.createElement("script");l.src=n,l.onload=i,document.head.appendChild(l)}else l=n,importScripts(n),i()})).then((()=>{let l=i[n];if(!l)throw new Error(`Module ${n} didn’t register its module`);return l})));self.define=(e,r)=>{const u=l||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let g={};const o=l=>n(l,u),s={module:{uri:u},exports:g,require:o};i[u]=Promise.all(e.map((l=>s[l]||o(l)))).then((l=>(r(...l),g)))}}define(["./workbox-4f586afe"],(function(l){"use strict";l.setCacheNameDetails({prefix:"@brdgm/rurik-solo-helper"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"css/chunk-vendors.0833f3cd.css",revision:null},{url:"css/index.43bed20d.css",revision:null},{url:"img/attack-1-coin.25a9378c.png",revision:null},{url:"img/attack-1.8b121f4c.png",revision:null},{url:"img/attack-2.889c814f.png",revision:null},{url:"img/attack-move.0be10e76.png",revision:null},{url:"img/attack.3b24d32f.png",revision:null},{url:"img/attack.8db2c75a.png",revision:null},{url:"img/build-1-coin.a577ddeb.png",revision:null},{url:"img/build-1.8417a36d.png",revision:null},{url:"img/build-2.4d25be1a.png",revision:null},{url:"img/build.1561cf66.png",revision:null},{url:"img/build.1fbc1f73.png",revision:null},{url:"img/build.4799ef21.png",revision:null},{url:"img/church-blue.5b0e5f9b.png",revision:null},{url:"img/church-red.322c34d1.png",revision:null},{url:"img/church-white.5f78fab5.png",revision:null},{url:"img/church-yellow.3e896d83.png",revision:null},{url:"img/coin-1.38112436.png",revision:null},{url:"img/coin-2.2dc30a14.png",revision:null},{url:"img/coin.136399fd.png",revision:null},{url:"img/five-blue.d6c27215.png",revision:null},{url:"img/five-red.08df94f3.png",revision:null},{url:"img/five-white.1272c9c7.png",revision:null},{url:"img/five-yellow.5088a602.png",revision:null},{url:"img/four-blue.2410e40c.png",revision:null},{url:"img/four-red.b25ea783.png",revision:null},{url:"img/four-white.27c0ebb4.png",revision:null},{url:"img/four-yellow.54b842ae.png",revision:null},{url:"img/game-rurik-stone-blade.80b125d2.jpg",revision:null},{url:"img/game-rurik.949d33bf.jpg",revision:null},{url:"img/gleb-blue.d2aad698.png",revision:null},{url:"img/gleb-red.177e1ea1.png",revision:null},{url:"img/gleb-white.d4e97357.png",revision:null},{url:"img/gleb-yellow.9c0db7eb.png",revision:null},{url:"img/gleb.be5f61e3.jpg",revision:null},{url:"img/headerNavIcon.588f3371.svg",revision:null},{url:"img/maria-blue.92b9b225.png",revision:null},{url:"img/maria-red.0b63f4bd.png",revision:null},{url:"img/maria-white.df296085.png",revision:null},{url:"img/maria-yellow.3d7d4500.png",revision:null},{url:"img/maria.4835331b.jpg",revision:null},{url:"img/market-blue.18e3fad3.png",revision:null},{url:"img/market-red.fbf45f06.png",revision:null},{url:"img/market-white.2e6c2c4c.png",revision:null},{url:"img/market-yellow.69a35eea.png",revision:null},{url:"img/move-1.9cf10bde.png",revision:null},{url:"img/move-2.acd4022c.png",revision:null},{url:"img/move-3.4c9cd9a7.png",revision:null},{url:"img/move.31dfb12e.png",revision:null},{url:"img/move.eebf2420.png",revision:null},{url:"img/muster-1-coin.1a382412.png",revision:null},{url:"img/muster-2.d2f5b413.png",revision:null},{url:"img/muster-3.091986e9.png",revision:null},{url:"img/muster.776ab339.png",revision:null},{url:"img/muster.ded98a60.png",revision:null},{url:"img/one-blue.1d593ddb.png",revision:null},{url:"img/one-red.01109a64.png",revision:null},{url:"img/one-white.c255b40a.png",revision:null},{url:"img/one-yellow.706fc126.png",revision:null},{url:"img/rebel.dbe8abcd.png",revision:null},{url:"img/scheme-1.a293212a.png",revision:null},{url:"img/scheme-2.bb58edd7.png",revision:null},{url:"img/scheme-3.1f37d86c.png",revision:null},{url:"img/scheme.fd95d73b.png",revision:null},{url:"img/stable-blue.c3fa7db2.png",revision:null},{url:"img/stable-red.ad738fea.png",revision:null},{url:"img/stable-white.ecd787d0.png",revision:null},{url:"img/stable-yellow.dbb5ead1.png",revision:null},{url:"img/stronghold-blue.38eb5632.png",revision:null},{url:"img/stronghold-red.262c6b39.png",revision:null},{url:"img/stronghold-yellow.1488d5f8.png",revision:null},{url:"img/sviatopolk-blue.234bc662.png",revision:null},{url:"img/sviatopolk-red.1b779788.png",revision:null},{url:"img/sviatopolk-white.694d52ab.png",revision:null},{url:"img/sviatopolk-yellow.6ee9e680.png",revision:null},{url:"img/sviatopolk.1ab4b636.jpg",revision:null},{url:"img/tavern-blue.db2f9da6.png",revision:null},{url:"img/tavern-red.6108fc01.png",revision:null},{url:"img/tavern-yellow.a72d9613.png",revision:null},{url:"img/tax-1-coin.0b6dc1e4.png",revision:null},{url:"img/tax-1.e09f5210.png",revision:null},{url:"img/tax-2.a41c62d8.png",revision:null},{url:"img/tax.1b2c2a2e.png",revision:null},{url:"img/tax.312fede8.png",revision:null},{url:"img/tax.fe8366c7.png",revision:null},{url:"img/theofana-blue.aa952b81.png",revision:null},{url:"img/theofana-red.73195a8a.png",revision:null},{url:"img/theofana-white.e5a97d0d.png",revision:null},{url:"img/theofana-yellow.67bd71b1.png",revision:null},{url:"img/theofana.fa197214.jpg",revision:null},{url:"img/three-plus-blue.ac2ae6ea.png",revision:null},{url:"img/three-plus-red.7ba433fd.png",revision:null},{url:"img/three-plus-white.02199255.png",revision:null},{url:"img/three-plus-yellow.a6223f56.png",revision:null},{url:"img/troop-blue.b5ee20b6.png",revision:null},{url:"img/troop-red.31e34bd0.png",revision:null},{url:"img/troop-white.5a55c3f9.png",revision:null},{url:"img/troop-yellow.8184c459.png",revision:null},{url:"img/two-blue.ef78e68f.png",revision:null},{url:"img/two-plus-blue.ef78e68f.png",revision:null},{url:"img/two-plus-red.6fe79719.png",revision:null},{url:"img/two-plus-white.d5cedb54.png",revision:null},{url:"img/two-plus-yellow.e301281d.png",revision:null},{url:"img/two-red.d831cd2b.png",revision:null},{url:"img/two-white.b169472d.png",revision:null},{url:"img/two-yellow.627386de.png",revision:null},{url:"img/warfare-marker-blue.5f7e6679.png",revision:null},{url:"img/warfare-marker-red.a81c300d.png",revision:null},{url:"img/warfare-marker-yellow.0f66b96e.png",revision:null},{url:"index.html",revision:"74c25672b6ea7d2f6d3da3a983fe1d6d"},{url:"js/chunk-vendors.2b0c6f23.js",revision:null},{url:"js/index.b69c2810.js",revision:null},{url:"manifest.json",revision:"6fa0ffe98d0df63baf389be586f093c8"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map