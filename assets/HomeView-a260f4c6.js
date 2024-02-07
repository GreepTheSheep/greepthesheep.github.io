import{S as y}from"./ShowcaseList-33d483a5.js";import{_,o as a,c as o,a as e,F as d,r as u,b as g,t as k,d as p,e as h,f as m,w as S,p as b,g as v}from"./index-1e49432b.js";const x="/img/unknown-person.jpg",A={data(){return{sponsorsData:null,sponsorsChunks:[]}},mounted(){this.chunkSponsors()},methods:{chunkSponsors(){if(this.sponsorsData&&this.sponsorsData.length>0)for(let r=0;r<this.sponsorsData.length;r+=6){const l=this.sponsorsData.slice(r,r+6);this.sponsorsChunks.push(l)}}}},D={key:0,class:"sponsors is-desktop pb-6"},C={class:"columns pb-4"},E=e("div",{class:"column has-text-left"},[e("h2",{class:"is-size-4"},"They support me:")],-1),G={class:"column has-text-right"},I={class:"is-size-4"},M=["href"],j=e("button",{class:"button is-danger has-text-white"},[e("i",{class:"fa fa-patreon","aria-hidden":"true"}),p("   Become a Patreon ")],-1),$=[j],F={class:"image is-96x96"},N=["src","alt"],O=["alt"],R={key:2};function z(i,r,l,f,t,T){return t.sponsorsData&&t.sponsorsData.length>0?(a(),o("div",D,[e("div",C,[E,e("div",G,[e("h2",I,[e("a",{href:"https://patreon.com/"+i.site.socials.patreon,target:"_blank"},$,8,M)])])]),(a(!0),o(d,null,u(t.sponsorsChunks,c=>(a(),o("div",{class:"columns is-centered",key:c[0].name},[(a(!0),o(d,null,u(c,s=>(a(),o("div",{class:"column is-2 has-text-centered",key:s.name},[e("figure",F,[s.avatar?(a(),o("img",{key:0,class:"is-rounded",src:s.avatar,alt:s.name,width:"100px"},null,8,N)):(a(),o("img",{key:1,class:"is-rounded",src:x,alt:s.name,width:"100px"},null,8,O)),s.name?(a(),o("span",R,k(s.name),1)):g("",!0)])]))),128))]))),128))])):g("",!0)}const L=_(A,[["render",z]]);const J={data(){return{site:{name:"Greep",description:null,avatar:"/img/icon.png",socials:{mail:"greep@greep.fr",github:"GreepTheSheep",twitter:"GreepTheSheep",mastodon:{username:"@greep",url:"https://mastodon.imagisphe.re/"},threads:"greepdlp",patreon:"Greep",linkedin:"matthieu-dehon",youtube:"GreepTheSheep",twitch:"GreepTheSheep"}},data:{homeShowcase:[{name:"Trackmania projects",link:"/tm",description:"I've done some works with Trackmania, I've made a few plugins and extensions for Trackmania with Openplanet, and some libraries with Trackmania.io.",image:"tm.png"},{name:"Jellyfin for Node.js",link:"https://jellyfin-node.greep.fr",description:"The official Jellyfin SDK uses only TypeScript ES6 modules. So I wanted to port my own version of the SDK using only CommonJS modules, which is more easy to use for beginners.",image:"jellyfin.png"}],redirectLinks:[{path:"/discord",url:"https://discord.gg/K6UYGZThHJ"},{path:"/patreon",url:"https://www.patreon.com/Greep"},{path:"/sponsor",url:"https://github.com/sponsors/GreepTheSheep"}],sponsors:null,trackmaniaShowcase:[{name:"node-Trackmania.io",link:"https://tmio.greep.fr/",description:"node-trackmania.io is an API wrapper for the website Trackmania.io, it retuns all the useful informations from the Trackmania API for your Node.js projects",image:"tmio.png"},{name:"Trackmania Essentials for Node",link:"https://github.com/GreepTheSheep/node-tm-essentials",description:"A lightweight library in Node.js that provides formatting features and little additions for any development related to Trackmania.",image:"tm.png"},{name:"Trackmania.io Discord bot",link:"https://tmio.greep.fr/#/discord-bot",description:"A Discord bot that interacts with the Trackmania.io API",image:"tmio.png"},{name:"ManiaExchange Randomizer",link:"https://openplanet.dev/plugin/mxrandom",description:"An Openplanet plugin used extensively during the Flink's Random Map Challenge. The goal is to take a random map of the Trackmania game from the TrackmaniaExchange site and play it directly in the game.",image:"tmx_rand.png"},{name:"ManiaExchange Menu",link:"https://openplanet.dev/plugin/maniaexchange",description:"An Openplanet plugin that displays all the maps from the ManiaExchange network.",image:"tmx_op.png"},{name:"Speedrun tool",link:"https://openplanet.dev/plugin/speedrun",description:"A Speedrun Tool for Trackmania 2020",image:"tmSpeedruns.png"},{name:"Cup Of Another Day",link:"https://coad.greep.fr",description:"A Knockout competiton on random Tracks Of The Day. Every Tuesdays at 20:00 CEST",image:"coad.png"},{name:"Open FlagRush Cup",link:"https://liquipedia.net/trackmania/FlagRush_Anniversary_Cup",description:"A Cup on the FlagRush Gamemode, grab the flag with your team and score it to oppenent's base!",image:"TMFlagRush.png"}]}}},components:{ShowcaseList:y,SponsorList:L}},n=i=>(b("data-v-8f5d82c6"),i=i(),v(),i),K={class:"has-text-centered is-size-3 headerA poppins"},P=n(()=>e("br",null,null,-1)),V=n(()=>e("br",null,null,-1)),H={class:"name"},B={class:"py-6 has-text-centered divsociallinks"},q=["href"],U=n(()=>e("i",{class:"fa fa-github"},null,-1)),Y=n(()=>e("span",null," Github",-1)),Z=[U,Y],Q=["href"],W=n(()=>e("span",null,"𝕏 (Twitter)",-1)),X=[W],ee=["href"],te=n(()=>e("i",{class:"fa fa-mastodon"},null,-1)),ne=n(()=>e("span",null," Mastodon",-1)),se=[te,ne],ae=n(()=>e("i",{class:"fa fa-discord-alt"},null,-1)),oe=n(()=>e("span",null," Discord server",-1)),ie=n(()=>e("h3",{class:"is-size-4"}," My works: ",-1));function re(i,r,l,f,t,T){const c=h("router-link"),s=h("ShowcaseList"),w=h("SponsorList");return a(),o(d,null,[e("h2",K,[p(" Hello!"),P,p(" My name is Matthieu"),V,p(" or "),e("span",H,k(t.site.name),1),p(". ")]),e("div",B,[e("a",{href:"https://github.com/"+t.site.socials.github,target:"_blank",class:"sociallink"},Z,8,q),e("a",{href:"https://x.com/"+t.site.socials.twitter,target:"_blank",class:"sociallink"},X,8,Q),e("a",{rel:"me",href:t.site.socials.mastodon.url+t.site.socials.mastodon.username,target:"_blank",class:"sociallink"},se,8,ee),m(c,{to:"/discord",target:"_blank",class:"sociallink"},{default:S(()=>[ae,oe]),_:1})]),ie,m(s,{showcases:t.data.homeShowcase},null,8,["showcases"]),m(w)],64)}const le=_(J,[["render",re],["__scopeId","data-v-8f5d82c6"]]);export{le as default};
