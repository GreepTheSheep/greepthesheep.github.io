if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/ContactView-81dedf87.js",revision:null},{url:"assets/HomeView-0ff71963.css",revision:null},{url:"assets/HomeView-8d1b2e6d.js",revision:null},{url:"assets/index-96952378.js",revision:null},{url:"assets/index-b475570b.css",revision:null},{url:"assets/RedirectView-c9597422.css",revision:null},{url:"assets/RedirectView-f02e7cc3.js",revision:null},{url:"assets/ShowcaseList-da3531af.js",revision:null},{url:"assets/TrackmaniaView-37822403.js",revision:null},{url:"assets/TrackmaniaView-b5911c0a.css",revision:null},{url:"index.html",revision:"1b7a91f05374fc39f40a42c47f31f32f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"e8144ffbf5dfdf6802b2fa1fbd05d637"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
