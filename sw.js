if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const o=s=>i(s,l),u={module:{uri:l},exports:t,require:o};e[l]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/HomeView-0ff71963.css",revision:null},{url:"assets/HomeView-40c54d67.js",revision:null},{url:"assets/index-5f60d16f.css",revision:null},{url:"assets/index-907e6c64.js",revision:null},{url:"assets/LinksView-33888cb5.js",revision:null},{url:"assets/LinksView-d5a092fc.css",revision:null},{url:"assets/NotFoundView-8ba5a94d.js",revision:null},{url:"assets/NotFoundView-e3d27717.css",revision:null},{url:"assets/RedirectView-8edcc7cb.js",revision:null},{url:"assets/RedirectView-c9597422.css",revision:null},{url:"assets/ShowcaseList-cbf51344.js",revision:null},{url:"assets/TrackmaniaView-8489f714.css",revision:null},{url:"assets/TrackmaniaView-8616d2a2.js",revision:null},{url:"index.html",revision:"e88e1ff2d0d40966414eca83dd227ebd"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"9a560fa8c858efb5b1f8045b37bdb5ec"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
