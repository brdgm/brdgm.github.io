if(!self.define){let n,i={};const r=(r,l)=>(r=new URL(r+".js",l).href,i[r]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=r,n.onload=i,document.head.appendChild(n)}else n=r,importScripts(r),i()})).then((()=>{let n=i[r];if(!n)throw new Error(`Module ${r} didn’t register its module`);return n})));self.define=(l,e)=>{const u=n||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let o={};const s=n=>r(n,u),a={module:{uri:u},exports:o,require:s};i[u]=Promise.all(l.map((n=>a[n]||s(n)))).then((n=>(e(...n),o)))}}define(["./workbox-db5fc017"],(function(n){"use strict";n.setCacheNameDetails({prefix:"@brdgm/ark-nova-solo-helper"}),self.skipWaiting(),n.precacheAndRoute([{url:"css/chunk-vendors.a6d17a7c.css",revision:null},{url:"css/index.6ea4cfd5.css",revision:null},{url:"img/africa.37e5bacb.png",revision:null},{url:"img/america.22d0d995.png",revision:null},{url:"img/animals-1.98f4d2fc.png",revision:null},{url:"img/animals-2.9536331a.png",revision:null},{url:"img/appeal.ad417567.png",revision:null},{url:"img/arno-conservation-start-setup.c7dccff7.jpg",revision:null},{url:"img/arno-zoo-mat.0ece927f.jpg",revision:null},{url:"img/asia.07d020e8.png",revision:null},{url:"img/association-1.3eea613a.png",revision:null},{url:"img/association-2.861c407a.png",revision:null},{url:"img/australia.0a017d46.png",revision:null},{url:"img/back.40c21ca2.png",revision:null},{url:"img/build-1.aaefabeb.png",revision:null},{url:"img/build-2.3bc28f56.png",revision:null},{url:"img/cards-1.fecadc25.png",revision:null},{url:"img/cards-2.a91fa404.png",revision:null},{url:"img/cards-reputation.5aa1cf7d.png",revision:null},{url:"img/conservation-project-work.8f79bf07.png",revision:null},{url:"img/conservation.257a8cb3.png",revision:null},{url:"img/display-cards.8bae8c0f.png",revision:null},{url:"img/donate.a7966be4.png",revision:null},{url:"img/enclosure.584edd14.png",revision:null},{url:"img/europe.72ac69f1.png",revision:null},{url:"img/gain-partner-university.548e63ba.png",revision:null},{url:"img/gain-partner-zoo-or-university.04ceb592.png",revision:null},{url:"img/gain-partner-zoo.bfda9081.png",revision:null},{url:"img/game-ark-nova.9f5047bd.jpg",revision:null},{url:"img/headerNavIcon.588f3371.svg",revision:null},{url:"img/money.20faf51a.png",revision:null},{url:"img/multiplier.0ce25dbb.png",revision:null},{url:"img/partner-university.86819e87.png",revision:null},{url:"img/partner-zoo.81dcb9b3.png",revision:null},{url:"img/reputation.00b8b3e0.png",revision:null},{url:"img/reputation.0615a0cc.png",revision:null},{url:"img/science-reputation.48100d24.png",revision:null},{url:"img/science.5bfbc0c1.png",revision:null},{url:"img/sponsor-money.9d0497d1.png",revision:null},{url:"img/sponsors-1.b96163fa.png",revision:null},{url:"img/sponsors-2.dd15a3e5.png",revision:null},{url:"img/take-card-display-reputation.44f53dff.png",revision:null},{url:"img/token-notepad.9c57fd82.png",revision:null},{url:"img/token-scoring-card.2e51fd67.png",revision:null},{url:"img/upgrade.a8fe44fd.png",revision:null},{url:"img/x-tokens.39a308e2.png",revision:null},{url:"index.html",revision:"63cd39a3997fa0db70ad3a55ac309dda"},{url:"js/chunk-vendors.23271f37.js",revision:null},{url:"js/index.f720dc0d.js",revision:null},{url:"manifest.json",revision:"808bda6362acef667af12c60ef5b2611"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
