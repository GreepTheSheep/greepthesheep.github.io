if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/ContactView-20dcfde4.js",revision:null},{url:"assets/HomeView-46ab08f8.css",revision:null},{url:"assets/HomeView-d69b891d.js",revision:null},{url:"assets/index-6afed410.js",revision:null},{url:"assets/index-e283a7de.css",revision:null},{url:"assets/RedirectView-c9597422.css",revision:null},{url:"assets/RedirectView-d407f589.js",revision:null},{url:"assets/ShowcaseList-1195df7b.js",revision:null},{url:"assets/TrackmaniaView-69143def.css",revision:null},{url:"assets/TrackmaniaView-d201f1eb.js",revision:null},{url:"index.html",revision:"fd961c8fad5458e013a43de394071596"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"1fc5268e2c55a19c18d073f45f8d12ba"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
