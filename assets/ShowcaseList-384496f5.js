import{_ as c,e as d,o as e,c as n,r as m,F as k,a as r,h as o,w as a,b as l,t as i,d as p}from"./index-4b066e43.js";const u={props:{showcases:{type:Array}}},f={key:0,class:"column is-one-third"},g=["href"],h=["alt","src"],y=["alt","src"],x={class:"column"},b={class:"is-size-4 pb-3"},v=["href"],B={key:0};function C(N,S,_,V,$,F){const s=d("router-link");return e(!0),n(k,null,m(_.showcases,t=>(e(),n("div",{class:"columns is-centered",key:t.name},[t.image?(e(),n("div",f,[t.link.startsWith("http")?(e(),n("a",{key:0,href:t.link,target:"_blank"},[r("img",{alt:t.name,src:"/img/"+t.image,width:"200"},null,8,h)],8,g)):(e(),o(s,{key:1,to:t.link},{default:a(()=>[r("img",{alt:t.name,src:"/img/"+t.image,width:"200"},null,8,y)]),_:2},1032,["to"]))])):l("",!0),r("div",x,[r("h3",b,[t.link.startsWith("http")?(e(),n("a",{key:0,href:t.link,target:"_blank"},i(t.name),9,v)):(e(),o(s,{key:1,to:t.link},{default:a(()=>[p(i(t.name),1)]),_:2},1032,["to"]))]),t.description?(e(),n("p",B,i(t.description),1)):l("",!0)])]))),128)}const W=c(u,[["render",C]]);export{W as S};