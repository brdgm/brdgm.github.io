if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const a=e=>i(e,o),c={module:{uri:o},exports:r,require:a};s[o]=Promise.all(n.map((e=>c[e]||a(e)))).then((e=>(l(...e),r)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/any-DJcsLpvT.webp",revision:null},{url:"assets/blue-D-SjnA6R.webp",revision:null},{url:"assets/blue-noble-DbLLFHTQ.webp",revision:null},{url:"assets/color-max-Dp8ECET1.webp",revision:null},{url:"assets/column-last-Do0HAA71.webp",revision:null},{url:"assets/elisabeth-DeegB_7S.webp",revision:null},{url:"assets/emperor-track-CXHInmuL.webp",revision:null},{url:"assets/game-grand-austria-hotel-CfcGAItO.webp",revision:null},{url:"assets/green-tourist-Dg0WQBo1.webp",revision:null},{url:"assets/index-DboU4AJp.js",revision:null},{url:"assets/index-legacy-BI3qIqap.js",revision:null},{url:"assets/index-MZM3Jzwi.css",revision:null},{url:"assets/kofi_button_dark-ByiSL5_B.png",revision:null},{url:"assets/left-BJL861I6.webp",revision:null},{url:"assets/leopold-Daa3aK8U.webp",revision:null},{url:"assets/next-1-BIC8FqOU.webp",revision:null},{url:"assets/next-2-BIxLUbsz.webp",revision:null},{url:"assets/nine-stars-inn-example-DA1zXHso.webp",revision:null},{url:"assets/nine-stars-inn-setup-BBNNAFhI.webp",revision:null},{url:"assets/objective-card-DFLCHnKL.webp",revision:null},{url:"assets/polyfills-legacy-CVafYusv.js",revision:null},{url:"assets/polyfills-mdxvZIDi.js",revision:null},{url:"assets/red-citizen-CTbRBnPh.webp",revision:null},{url:"assets/red-DZoHnhaU.webp",revision:null},{url:"assets/right-cVnRaFlm.webp",revision:null},{url:"assets/row-bottom-Ca9xI7cj.webp",revision:null},{url:"assets/staff-card-BdFs7pUO.webp",revision:null},{url:"assets/sushi-resort-setup-DE_9WaFc.webp",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/workbox-window.prod.es5-legacy-DG5k7iCC.js",revision:null},{url:"assets/yellow-artist-DaxVorGI.webp",revision:null},{url:"assets/yellow-Cb4Tn95l.webp",revision:null},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"52e8b162072d11f589f28aeeb2d8de41"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"5bf715fd75cb23a49a4aa5cf7a3d6091"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"85fb105db2f881f7922fb33a4b9ad97f"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"b2aabcc45cb19ca7efdf1287b2423583"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"a703afad1757bf7618690bed94111522"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"a33bfcb22d10ebe533b0888a14e29f71"},{url:"img/icons/favicon.ico",revision:"612fac67d105fd9964ba7b84b19abd08"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"aedc154915a67489fba8fb404a3e77c3"},{url:"img/icons/pwa-192x192.png",revision:"15b3a2266f6afb0218a330a7b749eb74"},{url:"img/icons/pwa-512x512.png",revision:"0bdd64d9175406d38f2f4d7338aca113"},{url:"img/icons/pwa-64x64.png",revision:"ee862d97c473a6bbcb87b62f09fdcc31"},{url:"index.html",revision:"319f211c1c72be334bcff65719092d00"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"52e8b162072d11f589f28aeeb2d8de41"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"5bf715fd75cb23a49a4aa5cf7a3d6091"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"85fb105db2f881f7922fb33a4b9ad97f"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"b2aabcc45cb19ca7efdf1287b2423583"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"a703afad1757bf7618690bed94111522"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"a33bfcb22d10ebe533b0888a14e29f71"},{url:"img/icons/favicon.ico",revision:"612fac67d105fd9964ba7b84b19abd08"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"aedc154915a67489fba8fb404a3e77c3"},{url:"img/icons/pwa-192x192.png",revision:"15b3a2266f6afb0218a330a7b749eb74"},{url:"img/icons/pwa-512x512.png",revision:"0bdd64d9175406d38f2f4d7338aca113"},{url:"img/icons/pwa-64x64.png",revision:"ee862d97c473a6bbcb87b62f09fdcc31"},{url:"manifest.json",revision:"24506ba01bc52c493c933444f01c7e99"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
