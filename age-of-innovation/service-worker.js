if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let o={};const a=e=>i(e,r),c={module:{uri:r},exports:o,require:a};n[r]=Promise.all(s.map((e=>c[e]||a(e)))).then((e=>(l(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/0-trL6ixFs.png",revision:null},{url:"assets/1-DQNz2oll.png",revision:null},{url:"assets/2-DVAk12C8.png",revision:null},{url:"assets/3-wxefGlZ7.png",revision:null},{url:"assets/advance-science-discipline-2-Bkv0hfdF.png",revision:null},{url:"assets/advance-science-discipline-thSD9luW.png",revision:null},{url:"assets/banking-CK40Q-G_.png",revision:null},{url:"assets/block-power-book-action-DGGKHtBy.png",revision:null},{url:"assets/catch-up-PviQEaFe.png",revision:null},{url:"assets/difficulty-level-BvTe8X42.png",revision:null},{url:"assets/engineering-58UJM-RT.png",revision:null},{url:"assets/faction-action-CJyBHn9M.png",revision:null},{url:"assets/faction-blight-transform-fallow-land-DpwZHDky.png",revision:null},{url:"assets/faction-symbionts-place-cube-CI8_LltT.png",revision:null},{url:"assets/gain-victory-points-BbCzTme6.png",revision:null},{url:"assets/game-age-of-innovation-s1HAoNUO.webp",revision:null},{url:"assets/index-BJVcW4BE.js",revision:null},{url:"assets/index-Dpa9Z5Re.css",revision:null},{url:"assets/kofi_button_dark-ByiSL5_B.png",revision:null},{url:"assets/law-D8Zvw5J2.png",revision:null},{url:"assets/left-D8WcsUlx.png",revision:null},{url:"assets/left-up-O_gY7h_a.png",revision:null},{url:"assets/marked-B6V4sOn_.png",revision:null},{url:"assets/marked-reaching-4yAGHdzJ.png",revision:null},{url:"assets/medicine-C59OkBru.png",revision:null},{url:"assets/middle-BsXbZFEW.png",revision:null},{url:"assets/right-BLUycyPv.png",revision:null},{url:"assets/right-down-Y3jzEXd0.png",revision:null},{url:"assets/scoring-tile-cult-color-Bcjf5UPc.png",revision:null},{url:"assets/scoring-tile-game-end-token-CIjNO5Ti.png",revision:null},{url:"assets/scoring-tile-Kfpkv8F6.png",revision:null},{url:"assets/scoring-tile-setup-Bsq6qTnL.png",revision:null},{url:"assets/send-scholar-lYn35MjU.png",revision:null},{url:"assets/take-innovation-B-73udOJ.png",revision:null},{url:"assets/terrain-priority-Bzxk9Q8q.png",revision:null},{url:"assets/transform-and-build-Cp2OnpN3.png",revision:null},{url:"assets/unmarked-BlMVp2AV.png",revision:null},{url:"assets/unmarked-reaching-BtCkt8r9.png",revision:null},{url:"assets/upgrade-C1DAN1FG.png",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"0e00ea93aaf2e85f47ec6a7285f5a379"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"c9a7b089244f6a64f285a7d1d132bc3e"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"78e13a9cdeed56948b7cf9b22def6a37"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"409117214123b39bfb4a415a396fca7b"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"a182e793efdd5670264afd036ac5b080"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"77d4a2a0f27e222e058daf5cecf53931"},{url:"img/icons/favicon.ico",revision:"d464f063094c75bbbe68e290cc5e5aa3"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"75320f2a3641e3650b8a3dc71c0c8679"},{url:"img/icons/pwa-192x192.png",revision:"bd96e12ca34f16f7a05260f46306c5e7"},{url:"img/icons/pwa-512x512.png",revision:"3e8e41791b5012d93ef7e56e18e7b69f"},{url:"img/icons/pwa-64x64.png",revision:"0a59fd4dca623eeb4c69de6ebb76290f"},{url:"index.html",revision:"48af726a2b806870005b734325d3a504"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"0e00ea93aaf2e85f47ec6a7285f5a379"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"c9a7b089244f6a64f285a7d1d132bc3e"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"78e13a9cdeed56948b7cf9b22def6a37"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"409117214123b39bfb4a415a396fca7b"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"a182e793efdd5670264afd036ac5b080"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"77d4a2a0f27e222e058daf5cecf53931"},{url:"img/icons/favicon.ico",revision:"d464f063094c75bbbe68e290cc5e5aa3"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"75320f2a3641e3650b8a3dc71c0c8679"},{url:"img/icons/pwa-192x192.png",revision:"bd96e12ca34f16f7a05260f46306c5e7"},{url:"img/icons/pwa-512x512.png",revision:"3e8e41791b5012d93ef7e56e18e7b69f"},{url:"img/icons/pwa-64x64.png",revision:"0a59fd4dca623eeb4c69de6ebb76290f"},{url:"manifest.json",revision:"fee911c67ae8ad39a539a164faafd023"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
