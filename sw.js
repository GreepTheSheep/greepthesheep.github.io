if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(l(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutView-0dcc2746.css",revision:null},{url:"assets/AboutView-c1106d54.js",revision:null},{url:"assets/HomeView-6764863f.css",revision:null},{url:"assets/HomeView-d3240917.js",revision:null},{url:"assets/index-3b30c7a6.css",revision:null},{url:"assets/index-b529278a.js",revision:null},{url:"assets/LinksView-04481842.js",revision:null},{url:"assets/LinksView-6ee87862.css",revision:null},{url:"assets/NotFoundView-a532babc.js",revision:null},{url:"assets/NotFoundView-e3d27717.css",revision:null},{url:"assets/RedirectView-6f02c4a1.js",revision:null},{url:"assets/RedirectView-c9597422.css",revision:null},{url:"assets/ShowcaseList-dd85c5d3.js",revision:null},{url:"assets/TrackmaniaTFHTempView-12be5621.js",revision:null},{url:"assets/TrackmaniaTFHTempView-28183e7f.css",revision:null},{url:"assets/TrackmaniaView-8489f714.css",revision:null},{url:"assets/TrackmaniaView-eeac2d47.js",revision:null},{url:"index.html",revision:"aa5bdb79dfa6244a7bd746e6e380bfa8"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"269d399eadf341d50c7b6a2dcec4d9c9"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
