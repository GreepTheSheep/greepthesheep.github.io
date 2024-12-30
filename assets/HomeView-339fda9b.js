import{S as T}from"./ShowcaseList-13824cec.js";import{_,o as s,c as o,a as e,F as d,r as u,b as g,t as k,d as p,e as c,f as m,w as S,p as b,g as v}from"./index-4578bdb8.js";const x="/img/unknown-person.jpg",C={data(){return{site:{name:"Greep",description:null,avatar:"/img/icon.png",socials:{mail:"greep@greep.fr",github:"GreepTheSheep",twitter:"GreepTheSheep",mastodon:{username:"@greep",url:"https://mastodon.imagisphe.re/"},threads:"greepthesheep",patreon:"Greep",linkedin:"matthieu-dehon",youtube:"GreepTheSheep",twitch:"GreepTheSheep"}},sponsorsData:null,sponsorsChunks:[]}},mounted(){this.chunkSponsors()},methods:{chunkSponsors(){if(this.sponsorsData&&this.sponsorsData.length>0)for(let r=0;r<this.sponsorsData.length;r+=6){const h=this.sponsorsData.slice(r,r+6);this.sponsorsChunks.push(h)}}}},A={key:0,class:"sponsors is-desktop pb-6"},M=e("hr",null,null,-1),G={class:"columns pb-4"},D=e("div",{class:"column has-text-left"},[e("h2",{class:"is-size-4"},"They support me:")],-1),R={class:"column has-text-right"},I={class:"is-size-4"},E=["href"],j=e("button",{class:"button is-danger has-text-white"},[e("i",{class:"fa fa-patreon","aria-hidden":"true"}),p("   Become a Patreon ")],-1),F=[j],$={class:"image is-96x96"},N=["src","alt"],O=["alt"],z={key:2};function L(i,r,h,f,t,y){return t.sponsorsData&&t.sponsorsData.length>0?(s(),o("div",A,[M,e("div",G,[D,e("div",R,[e("h2",I,[e("a",{href:"https://patreon.com/"+t.site.socials.patreon,target:"_blank"},F,8,E)])])]),(s(!0),o(d,null,u(t.sponsorsChunks,l=>(s(),o("div",{class:"columns is-centered",key:l[0].name},[(s(!0),o(d,null,u(l,a=>(s(),o("div",{class:"column is-2 has-text-centered",key:a.name},[e("figure",$,[a.avatar?(s(),o("img",{key:0,class:"is-rounded",src:a.avatar,alt:a.name,width:"100px"},null,8,N)):(s(),o("img",{key:1,class:"is-rounded",src:x,alt:a.name,width:"100px"},null,8,O)),a.name?(s(),o("span",z,k(a.name),1)):g("",!0)])]))),128))]))),128))])):g("",!0)}const J=_(C,[["render",L]]);const K={data(){return{site:{name:"Greep",description:null,avatar:"/img/icon.png",socials:{mail:"greep@greep.fr",github:"GreepTheSheep",twitter:"GreepTheSheep",mastodon:{username:"@greep",url:"https://mastodon.imagisphe.re/"},threads:"greepthesheep",patreon:"Greep",linkedin:"matthieu-dehon",youtube:"GreepTheSheep",twitch:"GreepTheSheep"}},data:{homeShowcase:[{name:"Trackmania projects",link:"/tm",description:"I've done some works with Trackmania, I've made a few plugins and extensions for Trackmania with Openplanet, and some libraries with Trackmania.io.",image:"tm.png"},{name:"Jellyfin for Node.js",link:"https://jellyfin-node.greep.fr",description:"The official Jellyfin SDK uses only TypeScript ES6 modules. So I wanted to port my own version of the SDK using only CommonJS modules, which is more easy to use for beginners.",image:"jellyfin.png"}],redirectLinks:[{path:"/discord",url:"https://discord.gg/K6UYGZThHJ"},{path:"/patreon",url:"https://www.patreon.com/Greep"},{path:"/sponsor",url:"https://github.com/sponsors/GreepTheSheep"},{path:"/rmc",url:"https://flinkblog.de/RMC/"}],sponsors:null,trackmaniaShowcase:[{name:"Random Map Challenge",link:"/rmc",description:"In collaboration with the youtuber Flink, the Random Map Challenge is a game mode in which you have to get as many track medals as possible in one hour on random maps.",image:"RMC-logo.png"},{name:"node-Trackmania.io",link:"https://tmio.greep.fr/",description:"node-trackmania.io is an API wrapper for the website Trackmania.io, it retuns all the useful informations from the Trackmania API for your Node.js projects",image:"tmio.png"},{name:"Trackmania Essentials for Node",link:"https://github.com/GreepTheSheep/node-tm-essentials",description:"A lightweight library in Node.js that provides formatting features and little additions for any development related to Trackmania.",image:"tm.png"},{name:"Trackmania.io Discord bot",link:"https://tmio.greep.fr/#/discord-bot",description:"A Discord bot that interacts with the Trackmania.io API",image:"tmio.png"},{name:"ManiaExchange Randomizer",link:"https://openplanet.dev/plugin/mxrandom",description:"An Openplanet plugin used extensively during the Flink's Random Map Challenge. The goal is to take a random map of the Trackmania game from the TrackmaniaExchange site and play it directly in the game.",image:"tmx_rand.png"},{name:"ManiaExchange Menu",link:"https://openplanet.dev/plugin/maniaexchange",description:"An Openplanet plugin that displays all the maps from the ManiaExchange network.",image:"tmx_op.png"},{name:"Speedrun tool",link:"https://openplanet.dev/plugin/speedrun",description:"A Speedrun Tool for Trackmania 2020",image:"tmSpeedruns.png"},{name:"Cup Of Another Day",link:"https://coad.greep.fr",description:"A Knockout competiton on random Tracks Of The Day. Every Tuesdays at 20:00 CEST",image:"coad.png"},{name:"Open FlagRush Cup",link:"https://liquipedia.net/trackmania/FlagRush_Anniversary_Cup",description:"A Cup on the FlagRush Gamemode, grab the flag with your team and score it to oppenent's base!",image:"TMFlagRush.png"}]}}},components:{ShowcaseList:T,SponsorList:J}},n=i=>(b("data-v-8f5d82c6"),i=i(),v(),i),P={class:"has-text-centered is-size-3 headerA poppins"},V=n(()=>e("br",null,null,-1)),H=n(()=>e("br",null,null,-1)),B={class:"name"},q={class:"py-6 has-text-centered divsociallinks"},U=["href"],Y=n(()=>e("i",{class:"fa fa-github"},null,-1)),Z=n(()=>e("span",null," Github",-1)),Q=[Y,Z],W=["href"],X=n(()=>e("span",null,"𝕏 (Twitter)",-1)),ee=[X],te=["href"],ne=n(()=>e("i",{class:"fa fa-mastodon"},null,-1)),ae=n(()=>e("span",null," Mastodon",-1)),se=[ne,ae],oe=n(()=>e("i",{class:"fa fa-discord-alt"},null,-1)),ie=n(()=>e("span",null," Discord server",-1)),re=n(()=>e("h3",{class:"is-size-4"}," My works: ",-1));function pe(i,r,h,f,t,y){const l=c("router-link"),a=c("ShowcaseList"),w=c("SponsorList");return s(),o(d,null,[e("h2",P,[p(" Hello!"),V,p(" My name is Matthieu"),H,p(" or "),e("span",B,k(t.site.name),1),p(". ")]),e("div",q,[e("a",{href:"https://github.com/"+t.site.socials.github,target:"_blank",class:"sociallink"},Q,8,U),e("a",{href:"https://x.com/"+t.site.socials.twitter,target:"_blank",class:"sociallink"},ee,8,W),e("a",{rel:"me",href:t.site.socials.mastodon.url+t.site.socials.mastodon.username,target:"_blank",class:"sociallink"},se,8,te),m(l,{to:"/discord",target:"_blank",class:"sociallink"},{default:S(()=>[oe,ie]),_:1})]),re,m(a,{showcases:t.data.homeShowcase},null,8,["showcases"]),m(w)],64)}const ce=_(K,[["render",pe],["__scopeId","data-v-8f5d82c6"]]);export{ce as default};
