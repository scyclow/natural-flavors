(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{149:function(t,e,n){},150:function(t,e,n){},151:function(t,e,n){},197:function(t,e){},241:function(t,e,n){},242:function(t,e,n){"use strict";n.r(e);var a,i=n(1),r=n.n(i),c=n(135),o=n.n(c),l=(n(149),n(150),n(5)),d=n(34),s=n(9),u=n(86),b=n(136),j=(n(151),n(152),n(65)),h=n(13),p=n(256),m=n(258),O={},v=[{condiment:"Ketchup",brand:"McDonald's",packetState:"Empty",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Sysco/Heinz",packetState:"Splattered",orientation:"Vertical"},{condiment:"Hot Sauce",brand:"Popeye's",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Heinz",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Ketchup",packetState:"Empty",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Hunts",packetState:"Splattered",orientation:"Vertical"},{condiment:"Ketchup",brand:"McDonalds",packetState:"Empty",orientation:"Horizontal"},{condiment:"Hot Sauce",brand:"Louisiana",packetState:"Empty",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Heinz",packetState:"Splattered",orientation:"Vertical"},{condiment:"Ketchup",brand:"Fancy Ketchup",packetState:"Empty",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Red Gold",packetState:"Empty",orientation:"Horizontal"},{condiment:"Hot Sauce",brand:"Frank's RedHot",packetState:"Full",orientation:"Vertical"},{condiment:"Mustard",brand:"Flavor Fresh",packetState:"Full",orientation:"Horizontal"},{condiment:"Mayonnaise",brand:"Chef's Quality",packetState:"Full",orientation:"Horizontal"},{condiment:"Ketchup",brand:"McDonald's",packetState:"Full",orientation:"Horizontal"},{condiment:"Seafood Sauce",brand:"Flavor Fresh",packetState:"Full",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Chef's Quality",packetState:"Splattered",orientation:"Horizontal"},{condiment:"Grape Jelly",brand:"Popeye's",packetState:"Full",orientation:"Horizontal"},{condiment:"Hot Sauce",brand:"Tabasco",packetState:"Full",orientation:"Vertical"},{condiment:"Ketchup",brand:"Chef's Quality",packetState:"Empty",orientation:"Horizontal"},{condiment:"Mayonnaise",brand:"Salad Fresh",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"McDonald's",packetState:"Splattered",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Heinz",packetState:"Empty",orientation:"Vertical"},{condiment:"Soy Sauce",brand:"Yamasa",packetState:"Full",orientation:"Vertical"},{condiment:"Ketchup",brand:"French's",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Heinz",packetState:"Splattered",orientation:"Vertical"},{condiment:"Ketchup",brand:"Heinz",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"McDonald's",packetState:"Empty",orientation:"Horizontal"},{condiment:"Sugar",brand:"Pure Sugar",packetState:"Full",orientation:"Horizontal"},{condiment:"Mustard",brand:"Salad Fresh",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Heinz",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Ketchup",packetState:"Empty",orientation:"Horizontal"},{condiment:"Ketchup",brand:"White Castle",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Hunts",packetState:"Full",orientation:"Vertical"},{condiment:"Ketchup",brand:"Red Gold",packetState:"Full",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Chef's Quality",packetState:"Splattered",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Chef's Quality",packetState:"Empty",orientation:"Horizontal"},{condiment:"BBQ Sauce",brand:"McDonald's",packetState:"Splattered",orientation:"Vertical"},{condiment:"Soy Sauce",brand:"YiPin",packetState:"Full",orientation:"Vertical"},{condiment:"Ketchup",brand:"Heinz",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Heinz",packetState:"Splattered",orientation:"Vertical"},{condiment:"Duck Sauce",brand:"YiPin",packetState:"Full",orientation:"Vertical"},{condiment:"Hot Sauce",brand:"YiPin",packetState:"Full",orientation:"Vertical"},{condiment:"Grape Jelly",brand:"Popeye's",packetState:"Full",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Charleys",packetState:"Empty",orientation:"Horizontal"}].map((function(t,e){O[t.condiment]||(O[t.condiment]=1);var n=t.condiment+" #"+O[t.condiment];return O[t.condiment]++,{tokenId:String(e),name:n,license:"CC BY-NC 4.0",external_url:"https://steviep.xyz/packets/".concat(e),description:"As you wander along the sidewalk your mind also wanders -- but your eyes continue to scan the ground. Your ancestors foraged for nuts and berries, but you're looking for something different. Eventually your eyes pick something up in distance. You walk over to inspect it a little closer. Bending over, you think: \"Oh wow, this is a good one!\" A confused stranger looks up from their phone and rolls their eyes. They don't understand that this ketchup packet is worth hundreds of dollars on the internet.",attributes:[{trait_type:"Brand",value:t.brand},{trait_type:"Condiment",value:t.condiment},{trait_type:"Packet State",value:t.packetState},{trait_type:"Orientation",value:t.orientation}]}})),f=n(3),x=Object(p.a)(a||(a=Object(b.a)(["\n  query Tokens($contract: String!) {\n    Token(where: { address: { _eq: $contract } }){\n      tokenId\n      auctions(order_by: { expiresAt: desc } limit: 1) {\n        status\n        lastBidAmount\n        reservePrice\n        expiresAt\n        duration\n      }\n    }\n  }\n"]))),S=v.reduce((function(t,e){var n=t[e.attributes[0].value];return t[e.attributes[0].value]=n?n+1:1,t}),{}),k=v.reduce((function(t,e){var n=t[e.attributes[2].value];return t[e.attributes[2].value]=n?n+1:1,t}),{}),y=v.reduce((function(t,e){var n=t[e.attributes[1].value];return t[e.attributes[1].value]=n?n+1:1,t}),{}),g=v.reduce((function(t,e){var n=t[e.attributes[3].value];return t[e.attributes[3].value]=n?n+1:1,t}),{}),w=function(t,e){if(t.endTime&&t.endTime<Date.now())return 1;var n="APPROVED"===e.status?.1001:Number(e.currentBid||9999);return("APPROVED"===t.status?.1001:Number(t.currentBid||9999))-n},E=function(t,e){return t.endTime&&t.endTime<Date.now()?1:("APPROVED"===e.status?.0999:Number(e.currentBid||0))-("APPROVED"===t.status?.0999:Number(t.currentBid||0))},H=function(t,e){return t.endTime&&e.endTime?t.endTime-e.endTime:t.endTime&&t.endTime<Date.now()?1:t.endTime?-1:w(t,e)},z=function(t){var e=(t||0)-Date.now(),n=e/864e5*24,a=60*(n-Math.floor(n)),i=60*(a-Math.floor(a)),r=e<0&&t;return{h:Math.floor(n),m:Math.floor(a),s:Math.floor(i),e:r}},T=window.innerWidth<750?"large":"medium";function N(){var t=Object(i.useState)(""),e=Object(s.a)(t,2),n=e[0],a=e[1],r=Object(i.useState)(""),c=Object(s.a)(r,2),o=c[0],l=c[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),j=b[0],h=b[1],p=Object(i.useState)(""),O=Object(s.a)(p,2),z=O[0],N=O[1],V=Object(i.useState)(T),D=Object(s.a)(V,2),F=D[0],A=D[1],I=Object(i.useState)("tokenId"),B=Object(s.a)(I,2),C=B[0],_=(B[1],Object(m.a)(x,{variables:{contract:window.CONTRACT_ADDR}})),P=_.loading,M=_.error,R=_.data;if(P)return"Loading...";if(M)return console.log(JSON.stringify(M)),JSON.stringify(M);var G,Q,Y=(G=v,Q=R.Token,G.map((function(t){var e,n=Q.find((function(e){return e.tokenId===t.tokenId})),a=(null===n||void 0===n||null===(e=n.auctions)||void 0===e?void 0:e[0])||{},i=a.lastBidAmount?Number(a.lastBidAmount.substring(0,a.lastBidAmount.length-15))/1e3:null;return Object(u.a)(Object(u.a)({},t),{},{currentBid:i,endTime:a.expiresAt&&new Date(a.expiresAt).getTime(),status:a.status})}))).filter((function(t){var e,a,i,r;return(!n||(null===(e=t.attributes.find((function(t){return"Brand"===t.trait_type})))||void 0===e?void 0:e.value)===n)&&((!o||(null===(a=t.attributes.find((function(t){return"Packet State"===t.trait_type})))||void 0===a?void 0:a.value)===o)&&((!j||(null===(i=t.attributes.find((function(t){return"Condiment"===t.trait_type})))||void 0===i?void 0:i.value)===j)&&(!z||(null===(r=t.attributes.find((function(t){return"Orientation"===t.trait_type})))||void 0===r?void 0:r.value)===z)))})),L=Y;return"endingSoon"===C?L=Y.sort(H):"lowestBid"===C?L=Y.sort(w):"highestBid"===C&&(L=Y.sort(E)),Object(f.jsxs)("div",{className:"Main",children:[Object(f.jsxs)("header",{children:[Object(f.jsx)("h1",{children:"Natural Flavors"}),Object(f.jsxs)("h2",{children:["by ",Object(f.jsx)("a",{href:"https://steviep.xyz",target:"_blank",children:"Steve Pikelny"})]})]}),Object(f.jsx)("section",{children:Object(f.jsx)("h2",{style:{margin:"2em 0 ",textAlign:"center",padding:"1em"},children:"Auctions will begin on 11/29"})}),Object(f.jsx)("section",{className:"center",children:Object(f.jsxs)("div",{className:"filterPanel",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"CONDIMENT"}),Object(f.jsxs)("select",{onChange:function(t){return h(t.target.value)},children:[Object(f.jsx)("option",{value:"",children:"All"}),Object.keys(y).map((function(t){return Object(f.jsxs)("option",{value:t,children:[t," (",y[t],")"]},t)}))]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"BRAND"}),Object(f.jsxs)("select",{defaultValue:"",onChange:function(t){return a(t.target.value)},children:[Object(f.jsx)("option",{value:"",children:"All"}),Object.keys(S).map((function(t){return Object(f.jsxs)("option",{value:t,children:[t," (",S[t],")"]},t)}))]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"STATE"}),Object(f.jsxs)("select",{defaultValue:"",onChange:function(t){return l(t.target.value)},children:[Object(f.jsx)("option",{value:"",children:"All"}),Object.keys(k).map((function(t){return Object(f.jsxs)("option",{value:t,children:[t," (",k[t],")"]},t)}))]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"ORIENTATION"}),Object(f.jsxs)("select",{defaultValue:"",onChange:function(t){return N(t.target.value)},children:[Object(f.jsx)("option",{value:"",children:"All"}),Object.keys(g).map((function(t){return Object(f.jsxs)("option",{value:t,children:[t," (",g[t],")"]},t)}))]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"GRID SIZE"}),Object(f.jsxs)("select",{defaultValue:T,onChange:function(t){return A(t.target.value)},children:[Object(f.jsx)("option",{value:"xs",children:"Extra Small"}),Object(f.jsx)("option",{value:"small",children:"Small"}),Object(f.jsx)("option",{value:"medium",children:"Medium"}),Object(f.jsx)("option",{value:"large",children:"Large"})]})]})]})}),Object(f.jsx)("section",{className:"thumbnailGrid ".concat({xs:"thumbnailGridXS",small:"thumbnailGridSmall",medium:"thumbnailGridMedium",large:"thumbnailGridLarge"}[F]),children:L.map((function(t,e){return Object(f.jsx)("div",{children:Object(f.jsx)(K,{data:t},t.tokenId)})}))}),Object(f.jsx)("section",{className:"closingNotes",children:Object(f.jsx)("h2",{children:"Five additional tokens will be minted and distributed at the artist's discretion, bringing the total collection size to 50."})}),Object(f.jsx)("footer",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:"https://twitter.com/steviepxyz",target:"_blank",rel:"nofollow",children:"twitter"})}),Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:"https://discord.gg/9uA8WBFpcB",target:"_blank",rel:"nofollow",children:"discord"})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("a",{href:"https://steviep.xyz",target:"_blank",children:"steviep"})," (c) 2021"]})]})})]})}function K(t){var e,n,a=t.data,r=!!(null===a||void 0===a?void 0:a.endTime),c=z(null===a||void 0===a?void 0:a.endTime),o=c.h,l=c.m,u=c.s,b=c.e,j=Object(i.useState)(r?o:0),h=Object(s.a)(j,2),p=(h[0],h[1]),m=Object(i.useState)(r?l:0),O=Object(s.a)(m,2),v=(O[0],O[1]),x=Object(i.useState)(r?u:0),S=Object(s.a)(x,2),k=(S[0],S[1]),y=Object(i.useState)(r?b:0),g=Object(s.a)(y,2),w=(g[0],g[1]);if(Object(i.useEffect)((function(){var t=setInterval((function(){var t=z(null===a||void 0===a?void 0:a.endTime),e=t.h,n=t.m,i=t.s,r=t.e;p(e),v(n),k(i),w(r)}),1e3);return function(){return clearInterval(t)}})),!a)return"Loading...";var E="Vertical"===(null===a||void 0===a||null===(e=a.attributes)||void 0===e||null===(n=e.find((function(t){return"Orientation"===t.trait_type})))||void 0===n?void 0:n.value);return Object(f.jsx)(d.b,{to:"/packets/".concat(a.tokenId),style:{textAlign:"center"},children:Object(f.jsxs)("div",{className:"Thumbnail ".concat(E?"ThumbnailVertical":""),children:[Object(f.jsx)("img",{src:"./assets/".concat(a.tokenId,".jpg"),loading:"lazy"}),Object(f.jsxs)("div",{className:"ThumbnailDescription",children:["(",a.tokenId,")",Object(f.jsx)("div",{children:(null===a||void 0===a?void 0:a.name)||"Packet #".concat(a.tokenId)}),undefined]}),Object(f.jsx)("div",{className:"thumbnailClickPrompt",children:"View >"})]})})}n(241);function V(){var t=Object(l.g)().id,e=v.find((function(e){return e.tokenId===t}));return e?Object(f.jsxs)("div",{className:"Page",children:[Object(f.jsxs)("header",{children:[Object(f.jsx)(d.b,{to:"/",children:Object(f.jsx)("h2",{children:"< Back"})}),Object(f.jsx)("h2",{children:"Natural Flavors: ".concat(e.name)})]}),Object(f.jsx)("div",{className:"photo",children:Object(f.jsx)("img",{src:"../assets/".concat(t,".jpg")})}),Object(f.jsx)("div",{class:"viewButton"}),Object(f.jsx)("section",{className:"tokenData",children:Object(f.jsx)("div",{class:"viewDetails",children:Object(f.jsx)("div",{children:e.attributes.map((function(t){return Object(f.jsxs)("div",{children:[t.trait_type,": ",t.value]})}))})})})]}):Object(f.jsxs)("div",{children:[Object(f.jsxs)("h2",{children:["No token with id ",t]}),Object(f.jsx)(d.b,{to:"/",children:Object(f.jsx)("h2",{children:"< Back"})})]})}function D(){var t=Object(l.e)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[t]),null}var F=function(){return Object(f.jsxs)(d.a,{basename:"/natural-flavors",children:[Object(f.jsx)(D,{}),Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"/packets/:id",element:Object(f.jsx)(V,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/",element:Object(f.jsx)(N,{})})]})]})},A=n(255),I=n(257),B=n(254);window.CONTRACT_ADDR="0x9E9D63ff16E2c30e14150E035859c23fcF34db2D",window.GQL_URI="https://indexer-dev-rinkeby.zora.co/v1/graphql",window.NETWORK_ID=h.Networks.RINKEBY;var C=new A.a({uri:window.GQL_URI,cache:new I.a});o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(B.a,{client:C,children:Object(f.jsx)(j.MediaConfiguration,{networkId:window.NETWORK_ID,children:Object(f.jsx)(h.NFTFetchConfiguration,{networkId:window.NETWORK_ID,children:Object(f.jsx)(F,{})})})})}),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.69047686.chunk.js.map