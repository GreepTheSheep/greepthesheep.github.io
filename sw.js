if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/ContactView-c4bb4697.js",revision:null},{url:"assets/HomeView-0ff71963.css",revision:null},{url:"assets/HomeView-ac5cff0a.js",revision:null},{url:"assets/index-b475570b.css",revision:null},{url:"assets/index-f53174fb.js",revision:null},{url:"assets/RedirectView-c9597422.css",revision:null},{url:"assets/RedirectView-d1da6c6e.js",revision:null},{url:"assets/ShowcaseList-012c5004.js",revision:null},{url:"assets/TrackmaniaView-734c8554.css",revision:null},{url:"assets/TrackmaniaView-90c31664.js",revision:null},{url:"index.html",revision:"ec209754dab8df0d3991c7431ff31906"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"e8144ffbf5dfdf6802b2fa1fbd05d637"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
