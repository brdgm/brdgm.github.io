if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,o)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let l={};const a=s=>i(s,r),u={module:{uri:r},exports:l,require:a};e[r]=Promise.all(n.map((s=>u[s]||a(s)))).then((s=>(o(...s),l)))}}define(["./workbox-7cfec069"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/ankylosaurus-DKne6vRm.png",revision:null},{url:"assets/biothesauri-DGFAfbeZ.png",revision:null},{url:"assets/bluesea-genetics-plc-CPHvov4b.png",revision:null},{url:"assets/brontosaurus-CNC7VwXI.png",revision:null},{url:"assets/dimetrodon-BDhZfgxz.png",revision:null},{url:"assets/dino-libre-XMXdlc5Z.png",revision:null},{url:"assets/dna-collection-arrangement-0OhVgXri.png",revision:null},{url:"assets/dna-collection-arrangement-example-1Q6Trj3v.jpg",revision:null},{url:"assets/dreadnoughtus-1wCW3clw.png",revision:null},{url:"assets/facilities-habitats-DUV8eSQu.jpg",revision:null},{url:"assets/gallimimus-BTtfTh0q.png",revision:null},{url:"assets/game-dinogenics-CgExhsFU.webp",revision:null},{url:"assets/index-2Uo0q4WC.js",revision:null},{url:"assets/index-CqZcz2OQ.css",revision:null},{url:"assets/intelligen-designs-hq-selection-YfLPaUXI.jpg",revision:null},{url:"assets/kofi_button_dark-ByiSL5_B.png",revision:null},{url:"assets/megalodon-B8KwYzsR.png",revision:null},{url:"assets/mosasaur-D7HJilzp.png",revision:null},{url:"assets/mutant-BH1CaVBp.png",revision:null},{url:"assets/ntek-mYcm3dSM.png",revision:null},{url:"assets/pachycephalosaurus-BlpydEyA.png",revision:null},{url:"assets/parasaurolophus-h6zLaNsX.png",revision:null},{url:"assets/plesiosaurus-CWKTV1zS.png",revision:null},{url:"assets/pterodactyl-DCfNWp_g.png",revision:null},{url:"assets/raptor-BpIDC5fD.png",revision:null},{url:"assets/spinosaurus-Dzyb9cUt.png",revision:null},{url:"assets/stegosaurus-Cs529smb.png",revision:null},{url:"assets/therizinosaurus-BbPfUI5T.png",revision:null},{url:"assets/trapezohedron-incorporated-Cj0CU1WC.png",revision:null},{url:"assets/triceratops-D0OJ_VLf.png",revision:null},{url:"assets/tyrannosaurus-Diij0KFH.png",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"98e09dd8610414dd7794452a5d9c9ebd"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"46c3aac49d70064fabde0ddc21ffb70f"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"b6f7f407d05eef9263a971912e6b5999"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"25ea2586e2a5d08a04823eba3c279d52"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"826e901cc3a3006a61dace14b5730189"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"3b4ae03286e76211c75aaa7f3158211b"},{url:"img/icons/favicon.ico",revision:"73742cdee8c0b30a0c76765428841412"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"c75b863971a08b5984745e4d927569fb"},{url:"img/icons/pwa-192x192.png",revision:"b543e308f781f6ce6b69a128e1172035"},{url:"img/icons/pwa-512x512.png",revision:"d80ab591f1c6c5a6cc1b4968d6900ed5"},{url:"img/icons/pwa-64x64.png",revision:"eed8bbd11c575ba38582bfe3ef1414d8"},{url:"index.html",revision:"a77bb0613d0fb12c06b7b551c10127ce"},{url:"img/icons/pwa-64x64.png",revision:"eed8bbd11c575ba38582bfe3ef1414d8"},{url:"img/icons/pwa-192x192.png",revision:"b543e308f781f6ce6b69a128e1172035"},{url:"img/icons/pwa-512x512.png",revision:"d80ab591f1c6c5a6cc1b4968d6900ed5"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"98e09dd8610414dd7794452a5d9c9ebd"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"46c3aac49d70064fabde0ddc21ffb70f"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"b6f7f407d05eef9263a971912e6b5999"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"25ea2586e2a5d08a04823eba3c279d52"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"826e901cc3a3006a61dace14b5730189"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"3b4ae03286e76211c75aaa7f3158211b"},{url:"img/icons/favicon.ico",revision:"73742cdee8c0b30a0c76765428841412"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"c75b863971a08b5984745e4d927569fb"},{url:"manifest.json",revision:"a07df96d4234a92b90ab0d804c787eb7"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
