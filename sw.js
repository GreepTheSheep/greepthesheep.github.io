if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/ContactView-cc46ea4b.js",revision:null},{url:"assets/HomeView-0ff71963.css",revision:null},{url:"assets/HomeView-1bb719ef.js",revision:null},{url:"assets/index-5743357c.js",revision:null},{url:"assets/index-b475570b.css",revision:null},{url:"assets/RedirectView-b87dac96.js",revision:null},{url:"assets/RedirectView-c9597422.css",revision:null},{url:"assets/ShowcaseList-b05b3838.js",revision:null},{url:"assets/TrackmaniaView-69143def.css",revision:null},{url:"assets/TrackmaniaView-fbb77a79.js",revision:null},{url:"index.html",revision:"961a248d24cc8504dc07d10355e22f96"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"3ae0f34ce7771175a79a246e6065bdb4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
