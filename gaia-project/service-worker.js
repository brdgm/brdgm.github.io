if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(n.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-e3490c72"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/01-3JyqgGGK.webp",revision:null},{url:"assets/02-BLz7XK4m.webp",revision:null},{url:"assets/03-DRzLDTjo.webp",revision:null},{url:"assets/04-Cq05eCm6.webp",revision:null},{url:"assets/05-DBQ7MuZ3.webp",revision:null},{url:"assets/05-outline-CYnuZ7xW.webp",revision:null},{url:"assets/06-DE5YVd76.webp",revision:null},{url:"assets/06-outline-nobs8HAE.webp",revision:null},{url:"assets/07-acagG1UH.webp",revision:null},{url:"assets/07-outline-Djehv-yt.webp",revision:null},{url:"assets/08-D4w-VDep.webp",revision:null},{url:"assets/09-BHQidl-1.webp",revision:null},{url:"assets/1-B_DK90t9.png",revision:null},{url:"assets/1-BsrefVnD.webp",revision:null},{url:"assets/1-CDd5jBMK.webp",revision:null},{url:"assets/1-CMH-JWIc.webp",revision:null},{url:"assets/1-CTdardp8.png",revision:null},{url:"assets/1-QohuYn8Y.webp",revision:null},{url:"assets/1-yjTpA0bf.webp",revision:null},{url:"assets/10-29-IMigs.webp",revision:null},{url:"assets/10-BKXj5uGQ.webp",revision:null},{url:"assets/10-EB3his2G.webp",revision:null},{url:"assets/10-NlyQEGnC.webp",revision:null},{url:"assets/11-BB8d5Y8U.webp",revision:null},{url:"assets/11-CAdY-YkP.webp",revision:null},{url:"assets/11-DNVm0YaS.webp",revision:null},{url:"assets/11-outline-DyOg1zx5.webp",revision:null},{url:"assets/12-B6MK90Hc.webp",revision:null},{url:"assets/12-B9dlIyLa.webp",revision:null},{url:"assets/12-BBk58wil.webp",revision:null},{url:"assets/12-Dznr2mi8.webp",revision:null},{url:"assets/12-outline-COra8Qok.webp",revision:null},{url:"assets/13-Cg5-2o2r.webp",revision:null},{url:"assets/13-CtL9WSS6.webp",revision:null},{url:"assets/13-fFI7QGH3.webp",revision:null},{url:"assets/13-outline-24BGGGPa.webp",revision:null},{url:"assets/14-dunReBUp.webp",revision:null},{url:"assets/14-outline-BZny7p-u.webp",revision:null},{url:"assets/14-TVpY3oSV.webp",revision:null},{url:"assets/15-outline-B2Xgb61a.webp",revision:null},{url:"assets/15-y1OmeilK.webp",revision:null},{url:"assets/16-CgOrriRr.webp",revision:null},{url:"assets/16-outline-D41jUDX1.webp",revision:null},{url:"assets/16-wRUY93J5.webp",revision:null},{url:"assets/17-BuTo1PIV.webp",revision:null},{url:"assets/17-D2RzwMZG.webp",revision:null},{url:"assets/17-outline-BvSAWQvf.webp",revision:null},{url:"assets/18-D8yy9yWM.webp",revision:null},{url:"assets/18-ngNI3pYu.webp",revision:null},{url:"assets/18-outline-DiKcPLX6.webp",revision:null},{url:"assets/19-Brigmu1H.webp",revision:null},{url:"assets/2-BBui7_5O.webp",revision:null},{url:"assets/2-BjQlz3YW.webp",revision:null},{url:"assets/2-BZtpJ2XM.webp",revision:null},{url:"assets/2-CE2Ep9tU.webp",revision:null},{url:"assets/2-Ct7wJAmF.webp",revision:null},{url:"assets/2-DyUnfKTb.png",revision:null},{url:"assets/2-idpmGSps.png",revision:null},{url:"assets/2-lost-fleet-DRITD0zx.webp",revision:null},{url:"assets/20-BhcuxZ_7.webp",revision:null},{url:"assets/21-aO4zKY6y.webp",revision:null},{url:"assets/3-B3xxi7Eu.png",revision:null},{url:"assets/3-C7RCeoBq.webp",revision:null},{url:"assets/3-CHq9s_Uh.webp",revision:null},{url:"assets/3-CPH7A1m1.webp",revision:null},{url:"assets/3-DhhEdtxy.png",revision:null},{url:"assets/3-yHk5VwYV.webp",revision:null},{url:"assets/4-Bgp-cd3T.webp",revision:null},{url:"assets/4-CJWs7xw1.png",revision:null},{url:"assets/4-CS0r-ueK.webp",revision:null},{url:"assets/4-CylNOvc0.webp",revision:null},{url:"assets/4-D-KPJgel.webp",revision:null},{url:"assets/4-DqKJgWIT.png",revision:null},{url:"assets/5-5AC3w4in.png",revision:null},{url:"assets/5-BJDKWo1U.png",revision:null},{url:"assets/5-CBst58kI.webp",revision:null},{url:"assets/5-Dl1l3gtG.webp",revision:null},{url:"assets/5-JrGkABux.webp",revision:null},{url:"assets/5-wsSsatv_.webp",revision:null},{url:"assets/6-BcOZhhrE.png",revision:null},{url:"assets/6-CWnmqltu.webp",revision:null},{url:"assets/6-DsZdI04f.png",revision:null},{url:"assets/6-nHN9d49B.webp",revision:null},{url:"assets/6-U-gV2I8N.webp",revision:null},{url:"assets/7-BHwannsy.webp",revision:null},{url:"assets/7-C6zUlWbP.webp",revision:null},{url:"assets/7-DzMtr9-U.webp",revision:null},{url:"assets/7-hQti8c2G.png",revision:null},{url:"assets/7-lost-fleet-DKej5ZUd.webp",revision:null},{url:"assets/8-CbTnmCQx.png",revision:null},{url:"assets/8-DaeaVPEw.webp",revision:null},{url:"assets/8-DLrOREOG.webp",revision:null},{url:"assets/8-DsvK8l-I.webp",revision:null},{url:"assets/8-zGUXbGQD.webp",revision:null},{url:"assets/9-C0z4_41b.webp",revision:null},{url:"assets/9-CVxEQ3kW.webp",revision:null},{url:"assets/9-DeUnPTrD.webp",revision:null},{url:"assets/9-DI3eLzP5.png",revision:null},{url:"assets/academy-planetary-institute-1-BsBEL2Zb.webp",revision:null},{url:"assets/artificial-intelligence-Ct9apka9.png",revision:null},{url:"assets/asteroid-B0O2gjpd.webp",revision:null},{url:"assets/bottom-UILRKZ8O.png",revision:null},{url:"assets/build-mine-iJ-VaZua.png",revision:null},{url:"assets/difficulty-level-ClCo9eRl.png",revision:null},{url:"assets/directional-selection-BD43B14c.png",revision:null},{url:"assets/eclipse-active-DNVBBnuk.webp",revision:null},{url:"assets/eclipse-Co6XgiBE.webp",revision:null},{url:"assets/eclipse-D55en_hB.webp",revision:null},{url:"assets/economy-XaejAS5J.png",revision:null},{url:"assets/empty-DN7XsXcH.webp",revision:null},{url:"assets/faction-CsL_niR8.png",revision:null},{url:"assets/federation-structures-gbwlERlp.webp",revision:null},{url:"assets/federation-token-BONi1hCK.webp",revision:null},{url:"assets/firaks-C-Ts5Bc7.webp",revision:null},{url:"assets/firaks-kmHOjwSs.webp",revision:null},{url:"assets/firaks-nez6o6-W.png",revision:null},{url:"assets/fleet-eclipse-kPceuRWJ.webp",revision:null},{url:"assets/fleet-rebellion-D7RLsaw-.webp",revision:null},{url:"assets/fleet-tfmars-HlD1MXMK.webp",revision:null},{url:"assets/fleet-twilight-NEV95lRW.webp",revision:null},{url:"assets/gaia-planet-1-BDjn847c.webp",revision:null},{url:"assets/gaia-planet-2-DnTKsDZQ.webp",revision:null},{url:"assets/gaia-planets-CMsDh6-e.webp",revision:null},{url:"assets/gaia-project-ZLKcnU5R.png",revision:null},{url:"assets/gain-victory-points-DWWmzkXc.png",revision:null},{url:"assets/game-gaia-project-XqyNe11V.webp",revision:null},{url:"assets/geodens-BwGDJ5tl.png",revision:null},{url:"assets/geodens-DnuWEbN8.webp",revision:null},{url:"assets/geodens-DxUIjV5c.webp",revision:null},{url:"assets/geodens-IGYb45hq.png",revision:null},{url:"assets/hadsch-hallas-AD0AlZ0o.png",revision:null},{url:"assets/hadsch-hallas-Bok6-Epc.png",revision:null},{url:"assets/hadsch-hallas-CG4YEf36.webp",revision:null},{url:"assets/hadsch-hallas-DxPmDqWL.webp",revision:null},{url:"assets/index-BuWgNmC-.js",revision:null},{url:"assets/index-legacy-DJCw22LB.js",revision:null},{url:"assets/index-PrulFwAR.css",revision:null},{url:"assets/itars-BAAuldH5.png",revision:null},{url:"assets/itars-DEOqWewl.webp",revision:null},{url:"assets/itars-DIB-b3aJ.webp",revision:null},{url:"assets/kofi_button_dark-ByiSL5_B.png",revision:null},{url:"assets/left-CH7QYkKG.png",revision:null},{url:"assets/left-up-z5VAFXpR.png",revision:null},{url:"assets/lost-fleet-asteroid-ByT3L7hW.webp",revision:null},{url:"assets/lost-fleet-deep-space-BsnQcXIM.webp",revision:null},{url:"assets/lost-fleet-distance-DRG_LWMy.webp",revision:null},{url:"assets/lost-fleet-planet-type-C11hOYZB.webp",revision:null},{url:"assets/lost-fleet-planet-types-DcI94PGj.webp",revision:null},{url:"assets/lost-fleet-research-lab-DNa86z6M.webp",revision:null},{url:"assets/lost-fleet-sector-deep-rEDucVcd.webp",revision:null},{url:"assets/middle-D-WxyvN_.png",revision:null},{url:"assets/mine-CHQJ6dWc.webp",revision:null},{url:"assets/navigation-oq5UHt0h.png",revision:null},{url:"assets/none-BTTkWI3i.png",revision:null},{url:"assets/pass-D7o0Wixx.png",revision:null},{url:"assets/planet-types-C_Y3eD7e.webp",revision:null},{url:"assets/player-12-D2iK5IK5.webp",revision:null},{url:"assets/player-34-DDBh_pP1.webp",revision:null},{url:"assets/polyfills-DPAh95CB.js",revision:null},{url:"assets/polyfills-legacy-2CnD9yOU.js",revision:null},{url:"assets/power-qic-d3vVhodS.png",revision:null},{url:"assets/protoplanet-CTHKktem.webp",revision:null},{url:"assets/range-mS0Lbg5G.png",revision:null},{url:"assets/rebellion-active-CARbYQTV.webp",revision:null},{url:"assets/rebellion-BL6_VGmK.webp",revision:null},{url:"assets/rebellion-WJQF3gXn.webp",revision:null},{url:"assets/research-area-BPJcU-hv.webp",revision:null},{url:"assets/research-area-highest-CfflPLii.png",revision:null},{url:"assets/research-area-random-BGpFfNth.png",revision:null},{url:"assets/research-area-specific-Db2JwA3G.png",revision:null},{url:"assets/research-board-bottem-right-edge-CDRP-lVz.webp",revision:null},{url:"assets/research-board-C7L6Q0Xv.jpg",revision:null},{url:"assets/research-board-economy-overlay-background-mzMXHhqG.webp",revision:null},{url:"assets/right-CC3q8ttB.png",revision:null},{url:"assets/right-down-jeypwwR7.png",revision:null},{url:"assets/satellites-CEUk_zrG.webp",revision:null},{url:"assets/science-CFJVoq5J.png",revision:null},{url:"assets/slot-1-CjnH9niR.png",revision:null},{url:"assets/slot-2-D4XksyNx.png",revision:null},{url:"assets/slot-3-CU7NMj9b.png",revision:null},{url:"assets/slot-4-CaZo0-6X.png",revision:null},{url:"assets/slot-5-B6-PrZLD.png",revision:null},{url:"assets/space-sector-tiles-DWSLSfYO.webp",revision:null},{url:"assets/start-player-token-B7srKJ6g.png",revision:null},{url:"assets/structures-BeY2LjOc.webp",revision:null},{url:"assets/taklons-CcchU3s5.webp",revision:null},{url:"assets/taklons-Cjcv4Fgr.webp",revision:null},{url:"assets/taklons-Dd_EKdm7.png",revision:null},{url:"assets/terraforming-DjbUoEEA.webp",revision:null},{url:"assets/terraforming-DQma8_yl.png",revision:null},{url:"assets/terrans-BNeF5UtR.png",revision:null},{url:"assets/terrans-CaOIkZ4c.webp",revision:null},{url:"assets/terrans-DatD48NV.webp",revision:null},{url:"assets/terrans-vehX9srz.png",revision:null},{url:"assets/tfmars-active-CMTXTOda.webp",revision:null},{url:"assets/tfmars-CpkO9icM.webp",revision:null},{url:"assets/tfmars-PI1eAcqd.webp",revision:null},{url:"assets/top-2K6aTDbI.png",revision:null},{url:"assets/trading-station-1-BQkWAQRk.webp",revision:null},{url:"assets/trading-station-2-DeONGab7.webp",revision:null},{url:"assets/twilight-Cyg00l4w.webp",revision:null},{url:"assets/upgrade-DBXcAuji.png",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/workbox-window.prod.es5-legacy-DG5k7iCC.js",revision:null},{url:"assets/xenos-Bm4_BQjr.webp",revision:null},{url:"assets/xenos-C0Oj5hML.webp",revision:null},{url:"assets/xenos-CKppma4I.png",revision:null},{url:"assets/xenos-CuDbzdHO.png",revision:null},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"e710dc484f246cc2d0d1824f0a4d028e"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"30ad2952faa39e87a8f11b63b5c67dc7"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"9555e8666107a07cfa7da95d44e76a80"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"6385d1fbdfc7bd7ba588270ea1c1f2d2"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"f6e732dd98062b0194b777bb83d517f7"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"33c6110bc6b4a764070cbf8cbc1d19a5"},{url:"img/icons/favicon.ico",revision:"3518f3d572ef1ef4c79bd17bad114948"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"9ab79f0a14d0c9094bbf3b2855051d40"},{url:"img/icons/pwa-192x192.png",revision:"3ba149482166b9bf1954b700e84ab88b"},{url:"img/icons/pwa-512x512.png",revision:"81d1f7a18d8cbfce03ceffcbf11d4a67"},{url:"img/icons/pwa-64x64.png",revision:"de3b3b351c0946f5556285870859564d"},{url:"index.html",revision:"0e784fd118fcb9208db68a604c9ecd84"},{url:"favicon.ico",revision:"10e0ec197ba24dd0118a50784fda739e"},{url:"img/icons/app-icon.png",revision:"e710dc484f246cc2d0d1824f0a4d028e"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"30ad2952faa39e87a8f11b63b5c67dc7"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"9555e8666107a07cfa7da95d44e76a80"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"6385d1fbdfc7bd7ba588270ea1c1f2d2"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"f6e732dd98062b0194b777bb83d517f7"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"33c6110bc6b4a764070cbf8cbc1d19a5"},{url:"img/icons/favicon.ico",revision:"3518f3d572ef1ef4c79bd17bad114948"},{url:"img/icons/favicon.svg",revision:"18448eb25ff1ea29eddb8a8e542b8b46"},{url:"img/icons/maskable-icon-512x512.png",revision:"9ab79f0a14d0c9094bbf3b2855051d40"},{url:"img/icons/pwa-192x192.png",revision:"3ba149482166b9bf1954b700e84ab88b"},{url:"img/icons/pwa-512x512.png",revision:"81d1f7a18d8cbfce03ceffcbf11d4a67"},{url:"img/icons/pwa-64x64.png",revision:"de3b3b351c0946f5556285870859564d"},{url:"manifest.json",revision:"9a0a737d3ce998fa282007e55f3c59aa"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
