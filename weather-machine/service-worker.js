if(!self.define){let i,n={};const e=(e,l)=>(e=new URL(e+".js",l).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(l,r)=>{const u=i||("document"in self?document.currentScript.src:"")||location.href;if(n[u])return;let g={};const o=i=>e(i,u),s={module:{uri:u},exports:g,require:o};n[u]=Promise.all(l.map((i=>s[i]||o(i)))).then((i=>(r(...i),g)))}}define(["./workbox-db5fc017"],(function(i){"use strict";i.setCacheNameDetails({prefix:"@brdgm/weather-machine-solo-helper"}),self.skipWaiting(),i.precacheAndRoute([{url:"css/chunk-vendors.a6d17a7c.css",revision:null},{url:"css/index.ac6688f8.css",revision:null},{url:"img/action-slot-priority-supply.0582d3de.png",revision:null},{url:"img/action-slot-priority.65206d7c.png",revision:null},{url:"img/and.4ffe958c.png",revision:null},{url:"img/arrow.a2364ebd.png",revision:null},{url:"img/award-token.d6761283.png",revision:null},{url:"img/background.43bf945e.jpg",revision:null},{url:"img/bottom.3175fbfb.png",revision:null},{url:"img/calorium.21e935ba.png",revision:null},{url:"img/challenge-card.ffaedb20.png",revision:null},{url:"img/chemical-priority-least-available.9f1814b6.png",revision:null},{url:"img/chemical-priority-section.9b214ece.png",revision:null},{url:"img/citation-unlocked.26f6a663.png",revision:null},{url:"img/claim-initiative.39e7f9d5.png",revision:null},{url:"img/delugium.891d29d6.png",revision:null},{url:"img/end-game-deck-empty.aca90514.png",revision:null},{url:"img/end-game-extreme-weather.aef1df58.png",revision:null},{url:"img/end-game-funding-tracks.7de753af.png",revision:null},{url:"img/end-game-goal-tiles.699d456c.png",revision:null},{url:"img/end-game-target-value-higher.bc1c6865.png",revision:null},{url:"img/fog.af5e3906.png",revision:null},{url:"img/follow-lativ.f0c6b140.png",revision:null},{url:"img/game-weather-machine.4cb74d14.jpg",revision:null},{url:"img/goal-tiles.3501bba8.png",revision:null},{url:"img/government-get-research-token.4a14fe29.png",revision:null},{url:"img/government-place-bot.1bf9193e.png",revision:null},{url:"img/government-place-gear-remove-subsidy.c0a2bcf7.png",revision:null},{url:"img/government-run-machine.bda6f354.png",revision:null},{url:"img/government-subsidy-flip.7bb2023c.png",revision:null},{url:"img/government.e4bfac4a.png",revision:null},{url:"img/headerNavIcon.588f3371.svg",revision:null},{url:"img/lativs-lab-place-bot-pay-chemical.22f41773.png",revision:null},{url:"img/lativs-lab.430b1fae.png",revision:null},{url:"img/melgoth.4d2fcf80.png",revision:null},{url:"img/moving-lativ.50619188.png",revision:null},{url:"img/or.4ebaa35f.png",revision:null},{url:"img/pay-chemical.eadbc076.png",revision:null},{url:"img/phase-b-weather-experiment.e506aef6.png",revision:null},{url:"img/pink.f2e21f62.png",revision:null},{url:"img/radieu.e4c1c37c.png",revision:null},{url:"img/rain.0fcf788e.png",revision:null},{url:"img/research-token-set-2.394ceb91.png",revision:null},{url:"img/research-token-set-3.10d16ab8.png",revision:null},{url:"img/rnd-breakthrough.55b9f041.png",revision:null},{url:"img/rnd-place-bot-matching-chemical.099ccad1.png",revision:null},{url:"img/rnd-place-bot.1735ff93.png",revision:null},{url:"img/rnd-place-chemical-available.4e0acdb0.png",revision:null},{url:"img/rnd-place-chemical.b691a4c1.png",revision:null},{url:"img/rnd.becd1286.png",revision:null},{url:"img/saboteur-move-raise-target-value.e2d126d8.png",revision:null},{url:"img/snow.affe9a3e.png",revision:null},{url:"img/sun.9ed4902a.png",revision:null},{url:"img/supply.89587c21.png",revision:null},{url:"img/take-chemical.5e8c5496.png",revision:null},{url:"img/take-extreme-weather-tile.8ceaea21.png",revision:null},{url:"img/target-value.612b804e.png",revision:null},{url:"img/top.db4e5a7d.png",revision:null},{url:"img/verdino.93c23e6f.png",revision:null},{url:"img/white.66a3a5b0.png",revision:null},{url:"img/wind.d03738ef.png",revision:null},{url:"index.html",revision:"2bc849fff17e0b4e788a77c05aa056b7"},{url:"js/chunk-vendors.8b91187c.js",revision:null},{url:"js/index.24497da0.js",revision:null},{url:"manifest.json",revision:"c432c2b5588b61dd0af399b745554a51"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
