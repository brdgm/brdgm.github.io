if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>l(s,r),a={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>a[s]||o(s)))).then((s=>(i(...s),u)))}}define(["./workbox-e3490c72"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/0-trL6ixFs.png",revision:null},{url:"assets/1-123-DaYnexef.webp",revision:null},{url:"assets/1-456-DNk32-fl.webp",revision:null},{url:"assets/1-CpCAlEuu.webp",revision:null},{url:"assets/1-DfLCQPHU.webp",revision:null},{url:"assets/1-DlnpqPkc.webp",revision:null},{url:"assets/1-DQNz2oll.png",revision:null},{url:"assets/1-DxX-ueqj.webp",revision:null},{url:"assets/1-jV8xQtVV.webp",revision:null},{url:"assets/1-s1KY-vxC.webp",revision:null},{url:"assets/10--Ct6G6zv.webp",revision:null},{url:"assets/10-123-CmR70tU4.webp",revision:null},{url:"assets/10-456-CqnSlH3c.webp",revision:null},{url:"assets/10-CHmuE5le.webp",revision:null},{url:"assets/10-Kn5foogo.webp",revision:null},{url:"assets/10-uEStUofe.webp",revision:null},{url:"assets/11-123-Dr2OX64C.webp",revision:null},{url:"assets/11-456-BD1sb8v6.webp",revision:null},{url:"assets/11-CWPxjmQp.webp",revision:null},{url:"assets/11-DCXUmzNP.webp",revision:null},{url:"assets/11-oa7B0FD7.webp",revision:null},{url:"assets/12-123-Bgytq5w9.webp",revision:null},{url:"assets/12-456-BGO-7UNu.webp",revision:null},{url:"assets/12-CmyNoCwc.webp",revision:null},{url:"assets/12-DGTCLlbC.webp",revision:null},{url:"assets/12-DQJX7K9y.webp",revision:null},{url:"assets/13-BIvo5yVb.webp",revision:null},{url:"assets/13-D0kdI1QT.webp",revision:null},{url:"assets/14-0q4J57pQ.webp",revision:null},{url:"assets/14-CSx0evGM.webp",revision:null},{url:"assets/15-C1N6yeL5.webp",revision:null},{url:"assets/15-DYdsCNfF.webp",revision:null},{url:"assets/16-CFgw1mkX.webp",revision:null},{url:"assets/16-K2c-jnfm.webp",revision:null},{url:"assets/17-0lkeBbLV.webp",revision:null},{url:"assets/17-uQI0vYdf.webp",revision:null},{url:"assets/18-CX1yNfvx.webp",revision:null},{url:"assets/2-123-91jTo9HS.webp",revision:null},{url:"assets/2-3sMwpwNR.webp",revision:null},{url:"assets/2-456-Cjh3_oUy.webp",revision:null},{url:"assets/2-AItgmTqs.webp",revision:null},{url:"assets/2-Cmnml27e.webp",revision:null},{url:"assets/2-CSp6CHa-.webp",revision:null},{url:"assets/2-Du2x9SGR.webp",revision:null},{url:"assets/2-DVAk12C8.png",revision:null},{url:"assets/2-vJtF_MlR.webp",revision:null},{url:"assets/3-123-W6v8bHWr.webp",revision:null},{url:"assets/3-456-DYGooqUn.webp",revision:null},{url:"assets/3-BuvjbdOS.webp",revision:null},{url:"assets/3-BzrR3LWf.webp",revision:null},{url:"assets/3-Cgrhi-pW.webp",revision:null},{url:"assets/3-CpbWzzNg.webp",revision:null},{url:"assets/3-D5FmBSFs.webp",revision:null},{url:"assets/3-LXFVdFGo.webp",revision:null},{url:"assets/3-wxefGlZ7.png",revision:null},{url:"assets/4-123-evHhLMFz.webp",revision:null},{url:"assets/4-456-mPcih8II.webp",revision:null},{url:"assets/4-atYyEBj5.webp",revision:null},{url:"assets/4-ChhlVgQC.webp",revision:null},{url:"assets/4-DK3Uhxtj.webp",revision:null},{url:"assets/4-DkIfxAzS.webp",revision:null},{url:"assets/4-Dxbphcv_.webp",revision:null},{url:"assets/4-nyl4VaaI.webp",revision:null},{url:"assets/5-123-rfyI1lr4.webp",revision:null},{url:"assets/5-456-Bz8qim0e.webp",revision:null},{url:"assets/5-Bufagx03.webp",revision:null},{url:"assets/5-BvCScVgS.webp",revision:null},{url:"assets/5-BxkRB6qS.webp",revision:null},{url:"assets/5-Ct3t9uvQ.webp",revision:null},{url:"assets/5-D8mAjKpV.webp",revision:null},{url:"assets/6-123-CaU4tbOm.webp",revision:null},{url:"assets/6-456-rPouw3n0.webp",revision:null},{url:"assets/6-BIdcWCK5.webp",revision:null},{url:"assets/6-BIDX9eVE.webp",revision:null},{url:"assets/6-D5WZuqiF.webp",revision:null},{url:"assets/6-lBFk4WHT.webp",revision:null},{url:"assets/6-OL2XPWty.webp",revision:null},{url:"assets/7-123-BaQAytJ_.webp",revision:null},{url:"assets/7-456-3d1I2PWZ.webp",revision:null},{url:"assets/7-B807v86Z.webp",revision:null},{url:"assets/7-BoCdL9Bf.webp",revision:null},{url:"assets/7-D1hXPZCX.webp",revision:null},{url:"assets/7-DxbjUqpO.webp",revision:null},{url:"assets/8-123-LLRld8EY.webp",revision:null},{url:"assets/8-456-bvfSO-54.webp",revision:null},{url:"assets/8-BRS5Z46q.webp",revision:null},{url:"assets/8-CGybIfJk.webp",revision:null},{url:"assets/8-DAFpCuaZ.webp",revision:null},{url:"assets/8-DkMixSpj.webp",revision:null},{url:"assets/9-123-BFDYksOi.webp",revision:null},{url:"assets/9-456-UYdws4Ud.webp",revision:null},{url:"assets/9-5DquShfe.webp",revision:null},{url:"assets/9-Ci-iHm1H.webp",revision:null},{url:"assets/9-DUroPack.webp",revision:null},{url:"assets/9-nkSpdWR1.webp",revision:null},{url:"assets/advance-science-discipline-2-JAe66oRI.png",revision:null},{url:"assets/advance-science-discipline-thSD9luW.png",revision:null},{url:"assets/banking-D_lVUUpe.png",revision:null},{url:"assets/blight-Dgw7WN7Z.webp",revision:null},{url:"assets/block-power-book-action-DGGKHtBy.png",revision:null},{url:"assets/book-actions-background-DTwGZHv8.webp",revision:null},{url:"assets/catch-up-PviQEaFe.png",revision:null},{url:"assets/competency-display-bR0DyO2Y.webp",revision:null},{url:"assets/desert-k4QrQ0PH.webp",revision:null},{url:"assets/difficulty-level-BvTe8X42.png",revision:null},{url:"assets/druids-dU98pTtq.webp",revision:null},{url:"assets/engineering-Bjqx9veu.png",revision:null},{url:"assets/faction-action-CJyBHn9M.png",revision:null},{url:"assets/faction-blight-transform-fallow-land-BIBKtEl9.png",revision:null},{url:"assets/faction-symbionts-place-cube-sl8_gr4U.png",revision:null},{url:"assets/forest-DVRo7IUN.webp",revision:null},{url:"assets/gain-victory-points-BbCzTme6.png",revision:null},{url:"assets/game-age-of-innovation-s1HAoNUO.webp",revision:null},{url:"assets/gognomes-DSjN0FA-.webp",revision:null},{url:"assets/index-B0aJGqgy.js",revision:null},{url:"assets/index-DIXphjeW.css",revision:null},{url:"assets/index-legacy-Dt8Fm8tE.js",revision:null},{url:"assets/innovation-display-2player-Bc-owHMd.webp",revision:null},{url:"assets/innovation-display-3player-CiFamcj_.webp",revision:null},{url:"assets/kofi_button_dark-ByiSL5_B.png",revision:null},{url:"assets/kuddlers-DL80KjSc.webp",revision:null},{url:"assets/lake-C3nm0OOQ.webp",revision:null},{url:"assets/law-DCcKut60.png",revision:null},{url:"assets/left-D8WcsUlx.png",revision:null},{url:"assets/left-up-O_gY7h_a.png",revision:null},{url:"assets/marked-B6V4sOn_.png",revision:null},{url:"assets/marked-reaching-4yAGHdzJ.png",revision:null},{url:"assets/medicine-oqVVLA5v.png",revision:null},{url:"assets/middle-BsXbZFEW.png",revision:null},{url:"assets/mimics-Cv5KCv-G.webp",revision:null},{url:"assets/mountain-BLTTChXm.webp",revision:null},{url:"assets/plains-BHETDYWm.webp",revision:null},{url:"assets/polyfills-DPAh95CB.js",revision:null},{url:"assets/polyfills-legacy-2CnD9yOU.js",revision:null},{url:"assets/powermongers-CGgAGpLf.webp",revision:null},{url:"assets/racelings-YgVSSX7_.webp",revision:null},{url:"assets/right-BLUycyPv.png",revision:null},{url:"assets/right-down-Y3jzEXd0.png",revision:null},{url:"assets/round-score-tile-background-DDMFRhw5.webp",revision:null},{url:"assets/scoring-tile-Kfpkv8F6.png",revision:null},{url:"assets/send-scholar-lYn35MjU.png",revision:null},{url:"assets/simpletons-Dp0R9QbI.webp",revision:null},{url:"assets/swamp-CGgiaiGH.webp",revision:null},{url:"assets/symbionts-jCuc8rnl.webp",revision:null},{url:"assets/take-innovation-B-73udOJ.png",revision:null},{url:"assets/terrain-priority-Bzxk9Q8q.png",revision:null},{url:"assets/transform-and-build-Cp2OnpN3.png",revision:null},{url:"assets/unmarked-BlMVp2AV.png",revision:null},{url:"assets/unmarked-reaching-BtCkt8r9.png",revision:null},{url:"assets/upgrade-C1DAN1FG.png",revision:null},{url:"assets/wanderers-GjGH35ay.webp",revision:null},{url:"assets/wasteland-RBMFyD91.webp",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/workbox-window.prod.es5-legacy-DG5k7iCC.js",revision:null},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"0e00ea93aaf2e85f47ec6a7285f5a379"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"c9a7b089244f6a64f285a7d1d132bc3e"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"78e13a9cdeed56948b7cf9b22def6a37"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"409117214123b39bfb4a415a396fca7b"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"a182e793efdd5670264afd036ac5b080"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"77d4a2a0f27e222e058daf5cecf53931"},{url:"img/icons/favicon.ico",revision:"d464f063094c75bbbe68e290cc5e5aa3"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"75320f2a3641e3650b8a3dc71c0c8679"},{url:"img/icons/pwa-192x192.png",revision:"bd96e12ca34f16f7a05260f46306c5e7"},{url:"img/icons/pwa-512x512.png",revision:"3e8e41791b5012d93ef7e56e18e7b69f"},{url:"img/icons/pwa-64x64.png",revision:"0a59fd4dca623eeb4c69de6ebb76290f"},{url:"index.html",revision:"ccf42f15e1215317f36151dcbfdd166e"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"0e00ea93aaf2e85f47ec6a7285f5a379"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"c9a7b089244f6a64f285a7d1d132bc3e"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"78e13a9cdeed56948b7cf9b22def6a37"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"409117214123b39bfb4a415a396fca7b"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"a182e793efdd5670264afd036ac5b080"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"77d4a2a0f27e222e058daf5cecf53931"},{url:"img/icons/favicon.ico",revision:"d464f063094c75bbbe68e290cc5e5aa3"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"75320f2a3641e3650b8a3dc71c0c8679"},{url:"img/icons/pwa-192x192.png",revision:"bd96e12ca34f16f7a05260f46306c5e7"},{url:"img/icons/pwa-512x512.png",revision:"3e8e41791b5012d93ef7e56e18e7b69f"},{url:"img/icons/pwa-64x64.png",revision:"0a59fd4dca623eeb4c69de6ebb76290f"},{url:"manifest.json",revision:"fee911c67ae8ad39a539a164faafd023"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
