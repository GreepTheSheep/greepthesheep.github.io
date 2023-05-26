import{S as f}from"./ShowcaseList-90df937a.js";import{_ as g,o,c as r,F as l,r as m,a as T,b as e,d,e as c,t as w,f as u,p as b,g as S}from"./index-a9ae7647.js";const x={data(){return{sponsorsData:{homeShowcase:[{name:"Trackmania projects",link:"/#/tm",description:"I've done some works with Trackmania, I've made a few plugins and extensions for Trackmania with Openplanet, and some libraries with Trackmania.io.",image:"tm.png"}],redirectLinks:[{path:"/discord",url:"https://discord.gg/K6UYGZThHJ"}],trackmaniaShowcase:[{name:"node-Trackmania.io",link:"https://tmio.greep.fr/",description:"node-trackmania.io is an API wrapper for the website Trackmania.io, it retuns all the useful informations from the Trackmania API for your Node.js projects",image:"tmio.png"},{name:"Trackmania.io Discord bot",link:"https://tmio.greep.fr/#/discord-bot",description:"A Discord bot that interacts with the Trackmania.io API",image:"tmio.png"},{name:"ManiaExchange Randomizer",link:"https://openplanet.dev/plugin/mxrandom",description:"An Openplanet plugin used extensively during the Flink's Random Map Challenge. The goal is to take a random map of the Trackmania game from the TrackmaniaExchange site and play it directly in the game.",image:"tmx_rand.png"},{name:"ManiaExchange Menu",link:"https://openplanet.dev/plugin/maniaexchange",description:"An Openplanet plugin that displays all the maps from the ManiaExchange network.",image:"tmx_op.png"},{name:"Speedrun tool",link:"https://openplanet.dev/plugin/speedrun",description:"A Speedrun Tool for Trackmania 2020",image:"tmSpeedruns.png"},{name:"Cup Of Another Day",link:"https://coad.greep.fr",description:"A Knockout competiton on random Tracks Of The Day. Every Tuesdays at 20:00 CEST",image:"coad.png"},{name:"Open FlagRush Cup",link:"https://liquipedia.net/trackmania/FlagRush_Anniversary_Cup",description:"A Cup on the FlagRush Gamemode, grab the flag with your team and score it to oppenent's base!",image:"TMFlagRush.png"}]}.sponsors,sponsors:[],sponsorsCached:this.$ls.get("sponsorsCache"),sponsorsChunks:[],GITHUB_USER_API:"https://api.github.com/users/",githubRateLimit:{limit:60,remain:60,expiresDate:null}}},mounted(){this.sponsorsCached==null?this.fetchAllSponsors().then(this.chunkSponsors):this.chunkSponsors()},methods:{wait(t){return new Promise(s=>setTimeout(s,t))},async fetchAllSponsors(){for(let t=0;t<this.sponsorsData.length;t++)this.sponsors.push(await this.fetchGitHubUser(this.sponsorsData[t]));this.$ls.set("sponsorsCache",this.sponsors,this.githubRateLimit.expiresDate.getTime()-new Date().getTime()),this.sponsorsCached=this.$ls.get("sponsorsCache")},async fetchGitHubUser(t){if(this.githubRateLimit.remain<5)return console.log("Waiting for GitHub API rate limits..."),await this.wait(20*1e3),await this.fetchGitHubUser(t);let s=await fetch(this.GITHUB_USER_API+t);if(!s.ok){console.error(this.GITHUB_USER_API+t,s.status,s.statusText);return}return this.githubRateLimit={limit:Number(s.headers.get("x-ratelimit-limit")),remain:Number(s.headers.get("x-ratelimit-remaining")),expiresDate:new Date(Number(s.headers.get("x-ratelimit-reset"))*1e3)},await s.json()},chunkSponsors(){for(let s=0;s<this.sponsorsCached.length;s+=6){const h=this.sponsorsCached.slice(s,s+6);this.sponsorsChunks.push(h)}}}},y={key:0,class:"sponsors"},A=e("h2",{class:"is-size-4 pb-4"},"They sponsor me:",-1),v={class:"image is-96x96"},C=["href"],I=["src","alt"];function R(t,s,h,_,a,k){return a.sponsorsCached!=null&&a.sponsorsCached.length>0?(o(),r("div",y,[A,(o(!0),r(l,null,m(a.sponsorsChunks,p=>(o(),r("div",{class:"columns is-desktop",key:p[0].id},[(o(!0),r(l,null,m(p,i=>(o(),r("div",{class:"column is-2",key:i.id},[e("figure",v,[e("a",{href:i.html_url,target:"_blank"},[e("img",{class:"is-rounded",src:i.avatar_url,alt:i.login+" - "+i.name,width:"100px"},null,8,I)],8,C)])]))),128))]))),128))])):T("",!0)}const D=g(x,[["render",R]]);const E={data(){return{site:{name:"Greep",description:null,avatar:"https://raw.githubusercontent.com/GreepTheSheep/greepthesheep.github.io/master/images/icon.png",socials:{github:"GreepTheSheep",twitter:"GreepTheSheep",mastodon:{username:"@greep",url:"https://trackmania.social/"}}},data:{homeShowcase:[{name:"Trackmania projects",link:"/#/tm",description:"I've done some works with Trackmania, I've made a few plugins and extensions for Trackmania with Openplanet, and some libraries with Trackmania.io.",image:"tm.png"}],redirectLinks:[{path:"/discord",url:"https://discord.gg/K6UYGZThHJ"}],trackmaniaShowcase:[{name:"node-Trackmania.io",link:"https://tmio.greep.fr/",description:"node-trackmania.io is an API wrapper for the website Trackmania.io, it retuns all the useful informations from the Trackmania API for your Node.js projects",image:"tmio.png"},{name:"Trackmania.io Discord bot",link:"https://tmio.greep.fr/#/discord-bot",description:"A Discord bot that interacts with the Trackmania.io API",image:"tmio.png"},{name:"ManiaExchange Randomizer",link:"https://openplanet.dev/plugin/mxrandom",description:"An Openplanet plugin used extensively during the Flink's Random Map Challenge. The goal is to take a random map of the Trackmania game from the TrackmaniaExchange site and play it directly in the game.",image:"tmx_rand.png"},{name:"ManiaExchange Menu",link:"https://openplanet.dev/plugin/maniaexchange",description:"An Openplanet plugin that displays all the maps from the ManiaExchange network.",image:"tmx_op.png"},{name:"Speedrun tool",link:"https://openplanet.dev/plugin/speedrun",description:"A Speedrun Tool for Trackmania 2020",image:"tmSpeedruns.png"},{name:"Cup Of Another Day",link:"https://coad.greep.fr",description:"A Knockout competiton on random Tracks Of The Day. Every Tuesdays at 20:00 CEST",image:"coad.png"},{name:"Open FlagRush Cup",link:"https://liquipedia.net/trackmania/FlagRush_Anniversary_Cup",description:"A Cup on the FlagRush Gamemode, grab the flag with your team and score it to oppenent's base!",image:"TMFlagRush.png"}]}}},components:{ShowcaseList:f,SponsorList:D}},n=t=>(b("data-v-852276e2"),t=t(),S(),t),G={class:"has-text-centered is-size-3 headerA poppins"},M=n(()=>e("br",null,null,-1)),L=n(()=>e("br",null,null,-1)),F={class:"name"},H={class:"py-6 has-text-centered divsociallinks"},O=["href"],P=n(()=>e("i",{class:"fa fa-github"},null,-1)),U=n(()=>e("span",null," Github",-1)),N=[P,U],$=["href"],j=n(()=>e("i",{class:"fa fa-twitter"},null,-1)),z=n(()=>e("span",null," Twitter",-1)),B=[j,z],V=["href"],K=n(()=>e("i",{class:"fa fa-mastodon"},null,-1)),q=n(()=>e("span",null," Mastodon",-1)),J=[K,q];function Y(t,s,h,_,a,k){const p=d("ShowcaseList"),i=d("SponsorList");return o(),r(l,null,[e("h2",G,[c(" Hello!"),M,c(" My name is Matthieu"),L,c(" or "),e("span",F,w(a.site.name),1),c(". ")]),e("div",H,[e("a",{href:"https://github.com/"+a.site.socials.github,target:"_blank",class:"sociallink"},N,8,O),e("a",{href:"https://twitter.com/"+a.site.socials.twitter,target:"_blank",class:"sociallink"},B,8,$),e("a",{rel:"me",href:a.site.socials.mastodon.url+a.site.socials.mastodon.username,target:"_blank",class:"sociallink"},J,8,V)]),u(p,{showcases:a.data.homeShowcase},null,8,["showcases"]),u(i)],64)}const Q=g(E,[["render",Y],["__scopeId","data-v-852276e2"]]);export{Q as default};
