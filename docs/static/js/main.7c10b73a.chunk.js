(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{109:function(t,e,n){},110:function(t,e,n){"use strict";n.r(e);var a=n(3),i=n.n(a),c=n(58),r=(n(74),n(25)),o=(n(75),n(5)),s=n(23),l=n(8),d=n(38),u=(n(76),n(59)),j=n.n(u),h=n(120),b=n(122),p=n(39),m={},O=[{condiment:"Ketchup",brand:"McDonald's",packetState:"Empty",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Sysco/Heinz",packetState:"Splattered",orientation:"Vertical"},{condiment:"Hot Sauce",brand:"Popeye's",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Heinz",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Ketchup",packetState:"Empty",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Hunts",packetState:"Splattered",orientation:"Vertical"},{condiment:"Ketchup",brand:"McDonald's",packetState:"Empty",orientation:"Horizontal"},{condiment:"Hot Sauce",brand:"Louisiana",packetState:"Empty",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Heinz",packetState:"Splattered",orientation:"Vertical"},{condiment:"Ketchup",brand:"Fancy Ketchup",packetState:"Empty",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Red Gold",packetState:"Empty",orientation:"Horizontal"},{condiment:"Hot Sauce",brand:"Frank's RedHot",packetState:"Full",orientation:"Vertical"},{condiment:"Mustard",brand:"Flavor Fresh",packetState:"Full",orientation:"Horizontal"},{condiment:"Mayonnaise",brand:"Chef's Quality",packetState:"Full",orientation:"Horizontal"},{condiment:"Ketchup",brand:"McDonald's",packetState:"Full",orientation:"Horizontal"},{condiment:"Seafood Sauce",brand:"Flavor Fresh",packetState:"Full",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Chef's Quality",packetState:"Splattered",orientation:"Horizontal"},{condiment:"Grape Jelly",brand:"Popeye's",packetState:"Full",orientation:"Horizontal"},{condiment:"Hot Sauce",brand:"Tabasco",packetState:"Full",orientation:"Vertical"},{condiment:"Ketchup",brand:"Chef's Quality",packetState:"Empty",orientation:"Horizontal"},{condiment:"Mayonnaise",brand:"Salad Fresh",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"McDonald's",packetState:"Splattered",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Heinz",packetState:"Empty",orientation:"Vertical"},{condiment:"Soy Sauce",brand:"Yamasa",packetState:"Full",orientation:"Vertical"},{condiment:"Ketchup",brand:"French's",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Heinz",packetState:"Splattered",orientation:"Vertical"},{condiment:"Ketchup",brand:"Heinz",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"McDonald's",packetState:"Empty",orientation:"Horizontal"},{condiment:"Sugar",brand:"Pure Sugar",packetState:"Full",orientation:"Horizontal"},{condiment:"Mustard",brand:"Salad Fresh",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Heinz",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Ketchup",packetState:"Empty",orientation:"Horizontal"},{condiment:"Ketchup",brand:"White Castle",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Hunts",packetState:"Full",orientation:"Vertical"},{condiment:"Ketchup",brand:"Red Gold",packetState:"Full",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Chef's Quality",packetState:"Splattered",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Chef's Quality",packetState:"Empty",orientation:"Horizontal"},{condiment:"BBQ Sauce",brand:"McDonald's",packetState:"Splattered",orientation:"Vertical"},{condiment:"Soy Sauce",brand:"YiPin",packetState:"Full",orientation:"Vertical"},{condiment:"Ketchup",brand:"Heinz",packetState:"Empty",orientation:"Vertical"},{condiment:"Ketchup",brand:"Heinz",packetState:"Splattered",orientation:"Vertical"},{condiment:"Duck Sauce",brand:"YiPin",packetState:"Full",orientation:"Vertical"},{condiment:"Hot Sauce",brand:"YiPin",packetState:"Full",orientation:"Vertical"},{condiment:"Grape Jelly",brand:"Popeye's",packetState:"Full",orientation:"Horizontal"},{condiment:"Ketchup",brand:"Charleys",packetState:"Empty",orientation:"Horizontal"}].map((function(t,e){m[t.condiment]||(m[t.condiment]=1);var n=t.condiment+" #"+m[t.condiment];return m[t.condiment]++,{tokenId:String(e),name:n,license:"CC BY-NC 4.0",external_url:"https://steviep.xyz/packets/".concat(e),description:"As you wander along the sidewalk your mind also wanders -- but your eyes continue to scan the ground. Your ancestors foraged for nuts and berries, but you're looking for something different. Eventually your eyes pick something up in distance. You walk over to inspect it a little closer. Bending over, you think: \"Oh wow, this is a good one!\" A confused stranger looks up from their phone and rolls their eyes. They don't understand that this ".concat(t.condiment.toLowerCase()," packet is worth a lot of money on the internet."),attributes:[{trait_type:"Brand",value:t.brand},{trait_type:"Condiment",value:t.condiment},{trait_type:"Packet State",value:t.packetState},{trait_type:"Orientation",value:t.orientation}]}})),v=function(t){return t?Number(t.substring(0,t.length-14))/1e4:null},x=function(t){var e=Math.floor(t);return e<10?"0"+e:""+e},y=function(t){var e=(t||0)-Date.now(),n=e/864e5*24,a=60*(n-Math.floor(n)),i=60*(a-Math.floor(a)),c=e<0&&t;return{h:Math.floor(n),m:Math.floor(a),s:Math.floor(i),e:c}};function S(t){var e=!!t,n=y(t),i=n.h,c=n.m,r=n.s,o=n.e,s=Object(a.useState)(e?i:0),d=Object(l.a)(s,2),u=d[0],j=d[1],h=Object(a.useState)(e?c:0),b=Object(l.a)(h,2),p=b[0],m=b[1],O=Object(a.useState)(e?r:0),v=Object(l.a)(O,2),x=v[0],S=v[1],w=Object(a.useState)(e?o:0),f=Object(l.a)(w,2),k=f[0],g=f[1];return Object(a.useEffect)((function(){var e=setInterval((function(){var e=y(t),n=e.h,a=e.m,i=e.s,c=e.e;j(n),m(a),S(i),g(c)}),1e3);return function(){return clearInterval(e)}})),{hours:u,minutes:p,seconds:x,expired:k}}var w,f=n(1),k=Object(h.a)(w||(w=Object(d.a)(['\n  query Tokens($contract: String!) {\n    Token(where: { address: { _eq: $contract } }){\n      tokenId\n      auctions(order_by: { expiresAt: desc } limit: 1 where: { status: {_in: ["APPROVED", "IN_PROGRESS"]} }) {\n        status\n        lastBidAmount\n        reservePrice\n        expiresAt\n        duration\n      }\n    }\n  }\n']))),g=O.reduce((function(t,e){var n=t[e.attributes[0].value];return t[e.attributes[0].value]=n?n+1:1,t}),{}),N=O.reduce((function(t,e){var n=t[e.attributes[2].value];return t[e.attributes[2].value]=n?n+1:1,t}),{}),A=O.reduce((function(t,e){var n=t[e.attributes[1].value];return t[e.attributes[1].value]=n?n+1:1,t}),{}),R=(O.reduce((function(t,e){var n=t[e.attributes[3].value];return t[e.attributes[3].value]=n?n+1:1,t}),{}),function(t,e){if(t.endTime&&t.endTime<Date.now())return 1;var n="APPROVED"===e.status?.1001:Number(e.currentBid||9999);return("APPROVED"===t.status?.1001:Number(t.currentBid||9999))-n}),_=function(t,e){return t.endTime&&t.endTime<Date.now()?1:("APPROVED"===e.status?.0999:Number(e.currentBid||0))-("APPROVED"===t.status?.0999:Number(t.currentBid||0))},T=function(t,e){return t.endTime&&e.endTime?t.endTime-e.endTime:t.endTime&&t.endTime<Date.now()?1:t.endTime?-1:R(t,e)},D=window.innerWidth<750?"large":"medium";function E(){var t=Object(a.useState)(""),e=Object(l.a)(t,2),n=e[0],i=e[1],c=Object(a.useState)(""),o=Object(l.a)(c,2),s=o[0],d=o[1],u=Object(a.useState)(""),h=Object(l.a)(u,2),m=h[0],x=h[1],S=Object(a.useState)(""),w=Object(l.a)(S,2),E=w[0],H=(w[1],Object(a.useState)(D)),F=Object(l.a)(H,2),B=F[0],V=(F[1],Object(a.useState)("endingSoon")),I=Object(l.a)(V,2),K=I[0],M=(I[1],Object(b.a)(k,{variables:{contract:window.CONTRACT_ADDR}})),G=(M.loading,M.error),L=M.data;if(G)return console.log(JSON.stringify(G)),JSON.stringify(G);var q,Y,Q=(q=O,Y=(null===L||void 0===L?void 0:L.Token)||[],q.map((function(t){var e,n=Y.find((function(e){return e.tokenId===t.tokenId})),a=(null===n||void 0===n||null===(e=n.auctions)||void 0===e?void 0:e[0])||{},i=v(a.lastBidAmount),c=v(a.reservePrice);return Object(r.a)(Object(r.a)({},t),{},{currentBid:i,reservePrice:c,endTime:a.expiresAt&&new Date(a.expiresAt).getTime(),status:a.status})}))).filter((function(t){var e,a,i,c;return(!n||(null===(e=t.attributes.find((function(t){return"Brand"===t.trait_type})))||void 0===e?void 0:e.value)===n)&&((!s||(null===(a=t.attributes.find((function(t){return"Packet State"===t.trait_type})))||void 0===a?void 0:a.value)===s)&&((!m||(null===(i=t.attributes.find((function(t){return"Condiment"===t.trait_type})))||void 0===i?void 0:i.value)===m)&&(!E||(null===(c=t.attributes.find((function(t){return"Orientation"===t.trait_type})))||void 0===c?void 0:c.value)===E)))})),W=Q;"endingSoon"===K?W=Q.sort(T):"lowestBid"===K?W=Q.sort(R):"highestBid"===K?W=Q.sort(_):"random"===K&&(W=j()(Q));var U=W.filter((function(t){var e;return["IN_PROGRESS","APPROVED"].includes(t.status)&&!(null===(e=y(null===t||void 0===t?void 0:t.endTime))||void 0===e?void 0:e.e)})),J=W.filter((function(t){var e;return!["IN_PROGRESS","APPROVED"].includes(t.status)||(null===(e=y(null===t||void 0===t?void 0:t.endTime))||void 0===e?void 0:e.e)}));return Object(f.jsxs)("div",{className:"Main",children:[Object(f.jsxs)(p.a,{children:[Object(f.jsx)("meta",{name:"twitter:image",content:"https://steviep.xyz/natural-flavors/assets/0.jpg"}),Object(f.jsx)("meta",{name:"og:image",property:"og:image",content:"https://steviep.xyz/natural-flavors/assets/0.jpg"}),Object(f.jsx)("meta",{name:"og:image:alt",content:"Natural Flavors"}),Object(f.jsx)("meta",{name:"title",content:"Natural Flavors"}),Object(f.jsx)("meta",{name:"og:title",content:"Natural Flavors"}),Object(f.jsx)("meta",{name:"twitter:title",content:"Natural Flavors"}),Object(f.jsx)("meta",{property:"og:site_name",content:"Natural Flavors"}),Object(f.jsx)("meta",{name:"twitter:description",content:"Natural Flavors: A Photo Series by Steve Pikelny"}),Object(f.jsx)("meta",{name:"description",content:"Natural Flavors: A Photo Series by Steve Pikelny"}),Object(f.jsx)("meta",{name:"og:description",content:"Natural Flavors: A Photo Series by Steve Pikelny"}),Object(f.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(f.jsx)("meta",{property:"og:type",content:"website"}),Object(f.jsx)("meta",{property:"og:url",content:"https://steviep.xyz/natural-flavors"}),Object(f.jsx)("meta",{name:"twitter:url",content:"https://steviep.xyz/natural-flavors"}),Object(f.jsx)("meta",{name:"keywords",content:"natural flavors, natural, flavors, nft, nfts, photo, series, photography, art, ketchup, packet, condiment, condiment packet, trash art, crypto, crypto art, fine art photography, steve, pikelny, steve pikelny, fake internet money"}),Object(f.jsx)("title",{children:"Natural Flavors: A Photo Series by Steve Pikelny"})]}),Object(f.jsx)(C,{style:{padding:"0.5em"},children:Object(f.jsx)("span",{className:"marqueeChild",children:"CYBER MONDAY FLASH SALE!!!"})}),Object(f.jsxs)("header",{children:[Object(f.jsx)("h1",{children:"Natural Flavors"}),Object(f.jsxs)("h2",{children:["by ",Object(f.jsx)("a",{href:"https://steviep.xyz",target:"_blank",children:"Steve Pikelny"})]})]}),Object(f.jsx)(z,{style:{padding:"0.5em"},children:Object(f.jsx)("span",{className:"marqueeChild",children:"CYBER MONDAY FLASH SALE!!!"})}),Object(f.jsx)("section",{className:"center",children:Object(f.jsxs)("div",{className:"filterPanel",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"CONDIMENT"}),Object(f.jsxs)("select",{onChange:function(t){return x(t.target.value)},children:[Object(f.jsx)("option",{value:"",children:"All"}),Object.keys(A).map((function(t){return Object(f.jsxs)("option",{value:t,children:[t," (",A[t],")"]},t)}))]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"BRAND"}),Object(f.jsxs)("select",{defaultValue:"",onChange:function(t){return i(t.target.value)},children:[Object(f.jsx)("option",{value:"",children:"All"}),Object.keys(g).map((function(t){return Object(f.jsxs)("option",{value:t,children:[t," (",g[t],")"]},t)}))]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"STATE"}),Object(f.jsxs)("select",{defaultValue:"",onChange:function(t){return d(t.target.value)},children:[Object(f.jsx)("option",{value:"",children:"All"}),Object.keys(N).map((function(t){return Object(f.jsxs)("option",{value:t,children:[t," (",N[t],")"]},t)}))]})]})]})}),!!U.length&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{style:{textAlign:"center"},children:"Open"}),Object(f.jsx)("section",{className:"thumbnailGrid thumbnailGridMedium",children:U.map((function(t,e){return Object(f.jsx)("div",{children:Object(f.jsx)(P,{data:t},t.tokenId)},"thumbnail-".concat(e))}))}),Object(f.jsx)("h2",{style:{textAlign:"center"},children:"Collection"})]}),Object(f.jsx)("section",{className:"thumbnailGrid ".concat({xs:"thumbnailGridXS",small:"thumbnailGridSmall",medium:"thumbnailGridMedium",large:"thumbnailGridLarge"}[B]),children:J.map((function(t,e){return Object(f.jsx)("div",{children:Object(f.jsx)(P,{data:t},t.tokenId)},"thumbnail-".concat(e))}))}),Object(f.jsx)("section",{className:"closingNotes",children:Object(f.jsx)("h2",{children:"Five additional tokens will be minted and distributed at the artist's discretion, bringing the total collection size to 50."})}),Object(f.jsx)("h2",{style:{textAlign:"center",wordWrap:"break-word",padding:"1em"},children:Object(f.jsx)("a",{href:"https://etherscan.io/address/".concat(window.CONTRACT_ADDR),target:"_blank",rel:"nofollow",children:window.CONTRACT_ADDR})})]})}function P(t){var e,n,a=t.data,i=S(null===a||void 0===a?void 0:a.endTime),c=i.hours,r=i.minutes,o=i.seconds,l=i.expired;if(!a)return"Loading...";var d,u="Vertical"===(null===a||void 0===a||null===(e=a.attributes)||void 0===e||null===(n=e.find((function(t){return"Orientation"===t.trait_type})))||void 0===n?void 0:n.value);"IN_PROGRESS"===(null===a||void 0===a?void 0:a.status)&&l?d=Object(f.jsxs)("div",{children:["Sold: ",null===a||void 0===a?void 0:a.currentBid," ETH"]}):"IN_PROGRESS"===(null===a||void 0===a?void 0:a.status)?d=Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:["Highest Bid: ",null===a||void 0===a?void 0:a.currentBid," ETH"]}),Object(f.jsxs)("div",{children:["Time Left: ",x(c),":",x(r),":",x(o)]})]}):"APPROVED"===(null===a||void 0===a?void 0:a.status)&&(d=Object(f.jsxs)("div",{children:["Reserve: ",null===a||void 0===a?void 0:a.reservePrice]}));var j=Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{src:"./assets/".concat(a.tokenId,".jpg"),loading:"lazy"}),Object(f.jsxs)("div",{className:"ThumbnailDescription",children:["(",a.tokenId,")",Object(f.jsx)("div",{children:(null===a||void 0===a?void 0:a.name)||"Packet #".concat(a.tokenId)}),d]})]});return a.status&&!l?Object(f.jsxs)("div",{className:"Thumbnail ".concat(u?"ThumbnailVertical":""),children:[Object(f.jsx)(s.b,{to:"/packets/".concat(a.tokenId),style:{textAlign:"center",textDecoration:"none"},children:j}),Object(f.jsx)("a",{href:"".concat(window.BASE_ZORA_URL,"/collections/").concat(window.CONTRACT_ADDR,"/").concat(a.tokenId,"/auction/bid"),target:"_blank",rel:"nofollow",style:{textAlign:"center",display:"block"},className:"thumbnailClickPrompt thumbnailClickPromptBid",children:"Bid >"})]}):Object(f.jsx)(s.b,{to:"/packets/".concat(a.tokenId),style:{textAlign:"center"},children:Object(f.jsxs)("div",{className:"Thumbnail ".concat(u?"ThumbnailVertical":""),children:[j,Object(f.jsx)("div",{className:"thumbnailClickPrompt thumbnailClickPromptView",children:"View >"})]})})}function C(t){var e=t.children,n=t.duration,a=t.className,i=t.style,c=n?n+"s":"5s";return Object(f.jsx)("div",{className:"marquee ".concat(a||""),style:i,children:Object(f.jsxs)("div",{className:"marqueeInner",style:{animationDuration:c},children:[Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e})]})})}function z(t){var e=t.children,n=t.duration,a=t.className,i=t.style,c=n?n+"s":"5s";return Object(f.jsx)("div",{className:"marquee ".concat(a||""),style:i,children:Object(f.jsxs)("div",{className:"marqueeInnerReverse",style:{animationDuration:c},children:[Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),Object(f.jsx)("span",{style:{whiteSpace:"nowrap"},children:e})]})})}n(109);var H,F=Object(h.a)(H||(H=Object(d.a)(['\n  query Tokens($contract: String! $tokenId: String!) {\n    Token(where: { address: { _eq: $contract } tokenId: {_eq: $tokenId} }){\n      tokenId\n      auctions(order_by: { expiresAt: desc } limit: 1 where: { status: {_in: ["APPROVED", "IN_PROGRESS"]} }) {\n        status\n        lastBidAmount\n        reservePrice\n        expiresAt\n        duration\n      }\n    }\n  }\n'])));function B(){var t,e,n=Object(o.g)().id,a=O.find((function(t){return t.tokenId===n})),i=Object(b.a)(F,{variables:{contract:window.CONTRACT_ADDR,tokenId:n}}),c=(i.loading,i.error,i.data),r=V(a,null===c||void 0===c||null===(t=c.Token)||void 0===t?void 0:t[0]),l=S(null===r||void 0===r?void 0:r.endTime),d=l.hours,u=l.minutes,j=l.seconds,h=l.expired;return r?("IN_PROGRESS"===(null===r||void 0===r?void 0:r.status)&&h?e=Object(f.jsxs)("div",{children:["Sold: ",null===r||void 0===r?void 0:r.currentBid," ETH"]}):"IN_PROGRESS"===(null===r||void 0===r?void 0:r.status)?e=Object(f.jsxs)("section",{class:"pageSection auctionDetails",children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("h2",{children:["Highest Bid: ",null===r||void 0===r?void 0:r.currentBid," ETH"]}),Object(f.jsxs)("h2",{children:["Time Left: ",x(d),":",x(u),":",x(j)]})]}),Object(f.jsx)("a",{href:"".concat(window.BASE_ZORA_URL,"/collections/").concat(window.CONTRACT_ADDR,"/").concat(r.tokenId,"/auction/bid"),target:"_blank",rel:"nofollow",className:"bidButton",children:"BID >"})]}):"APPROVED"===(null===r||void 0===r?void 0:r.status)&&(e=Object(f.jsxs)("section",{class:"pageSection auctionDetails",children:[Object(f.jsx)("h2",{children:"Reserve: 0.0099 ETH"}),Object(f.jsx)("a",{href:"".concat(window.BASE_ZORA_URL,"/collections/").concat(window.CONTRACT_ADDR,"/").concat(r.tokenId,"/auction/bid"),target:"_blank",rel:"nofollow",className:"bidButton",children:"BID >"})]})),Object(f.jsxs)("div",{className:"Page",children:[Object(f.jsxs)(p.a,{children:[Object(f.jsx)("meta",{name:"twitter:image",content:"https://steviep.xyz/natural-flavors/assets/".concat(n,".jpg")}),Object(f.jsx)("meta",{name:"og:image",property:"og:image",content:"https://steviep.xyz/natural-flavors/assets/".concat(n,".jpg")}),Object(f.jsx)("meta",{name:"og:image:alt",content:"Natural Flavors #".concat(n,": ").concat(r.name)}),Object(f.jsx)("meta",{name:"title",content:r.name}),Object(f.jsx)("meta",{name:"og:title",content:r.name}),Object(f.jsx)("meta",{name:"twitter:title",content:r.name}),Object(f.jsx)("meta",{property:"og:site_name",content:"Natural Flavors #".concat(n,": ").concat(r.name)}),Object(f.jsx)("meta",{name:"twitter:description",content:"Natural Flavors #".concat(n,": ").concat(r.name)}),Object(f.jsx)("meta",{name:"description",content:"Natural Flavors #".concat(n,": ").concat(r.name)}),Object(f.jsx)("meta",{name:"og:description",content:"Natural Flavors #".concat(n,": ").concat(r.name)}),Object(f.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(f.jsx)("meta",{property:"og:type",content:"website"}),Object(f.jsx)("meta",{property:"og:url",content:"https://steviep.xyz/natural-flavors/packets/".concat(n)}),Object(f.jsx)("meta",{name:"twitter:url",content:"https://steviep.xyz/natural-flavors/packets/".concat(n)}),Object(f.jsx)("meta",{name:"keywords",content:"natural flavors, natural, flavors, nft, nfts, photo, series, photography, art, ketchup, packet, condiment, condiment packet, trash art, crypto, crypto art, fine art photography, steve, pikelny, steve pikelny, fake internet money"}),Object(f.jsx)("title",{children:"Natural Flavors #".concat(n,": ").concat(r.name)})]}),Object(f.jsxs)("header",{children:[Object(f.jsx)(s.b,{to:"/",children:Object(f.jsx)("h2",{children:"< Back"})}),Object(f.jsx)("h2",{children:"Natural Flavors: ".concat(r.name)})]}),Object(f.jsx)("section",{className:"pageSection",children:Object(f.jsx)("div",{className:"photo",children:Object(f.jsx)("a",{href:"../assets/".concat(n,".jpg"),target:"_blank",children:Object(f.jsx)("img",{src:"../assets/".concat(n,".jpg")})})})}),e,Object(f.jsx)("section",{className:"pageSection tokenData",children:Object(f.jsx)("p",{className:"tokenDescription",children:r.description})}),Object(f.jsx)("section",{className:"pageSection",children:Object(f.jsx)("div",{className:"dlContainer",children:Object(f.jsxs)("dl",{children:[r.attributes.map((function(t){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("dt",{children:[t.trait_type,":"]})," ",Object(f.jsx)("dd",{children:t.value})]},t.trait_type)})),Object(f.jsxs)("div",{children:[Object(f.jsx)("dt",{children:"License:"}),Object(f.jsx)("dd",{children:"CC BY-NC 4.0"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("dt",{children:"Zora:"}),Object(f.jsx)("dd",{children:Object(f.jsx)("a",{href:"".concat(window.BASE_ZORA_URL,"/collections/").concat(window.CONTRACT_ADDR,"/").concat(n),target:"_blank",rel:"nofollow",children:"View"})})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("dt",{children:"OpenSea:"}),Object(f.jsx)("dd",{children:Object(f.jsx)("a",{href:"https://opensea.io/assets/".concat(window.CONTRACT_ADDR,"/").concat(n),target:"_blank",rel:"nofollow",children:"View"})})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("dt",{children:"Etherscan:"}),Object(f.jsx)("dd",{children:Object(f.jsx)("a",{href:"https://etherscan.io/token/".concat(window.CONTRACT_ADDR,"?a=").concat(n),target:"_blank",rel:"nofollow",children:"View"})})]})]})})})]})):Object(f.jsxs)("div",{children:[Object(f.jsxs)("h2",{children:["No token with id ",n]}),Object(f.jsx)(s.b,{to:"/",children:Object(f.jsx)("h2",{children:"< Back"})})]})}var V=function(t,e){var n,a=(null===e||void 0===e||null===(n=e.auctions)||void 0===n?void 0:n[0])||{},i=v(a.lastBidAmount);v(a.reservePrice);return Object(r.a)(Object(r.a)({},t),{},{currentBid:i,endTime:a.expiresAt&&new Date(a.expiresAt).getTime(),status:a.status})};function I(){var t=Object(o.e)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[t]),null}var K=window.location.href.includes("steviep.xyz/natural-flavors")?"/natural-flavors":"/";var M=function(){for(var t=window.innerWidth<790?40:75,e=window.innerWidth<790?2.5:2,n=[],a=0;a<t;a++)n.push(Object(f.jsx)("path",{d:"M0 ".concat(e*a*(window.innerHeight/t)," ").concat(e*a*(window.innerWidth/t)," 0"),style:{animationDelay:"-".concat(.5*a,"s")}},a));var i=window.innerWidth<790?{height:"100vh"}:{};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("svg",{viewBox:"0 0 640 640",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:Object(r.a)({position:"fixed",zIndex:-1},i),children:n}),Object(f.jsxs)(s.a,{basename:K,children:[Object(f.jsx)(I,{}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/packets/:id",element:Object(f.jsx)(B,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/",element:Object(f.jsx)(E,{})})]})]}),Object(f.jsx)("footer",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:"https://twitter.com/steviepxyz",target:"_blank",rel:"nofollow",children:"twitter"})}),Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:"https://discord.gg/9uA8WBFpcB",target:"_blank",rel:"nofollow",children:"discord"})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("a",{href:"https://steviep.xyz",target:"_blank",children:"steviep"})," (c) 2021"]})]})})]})},G=n(119),L=n(121),q=n(118);window.CONTRACT_ADDR="0xBD1cA111380B436350034c7040E7C44949605702",window.GQL_URI="https://indexer-prod-mainnet.zora.co/v1/graphql",window.BASE_ZORA_URL="https://zora.co";var Y=new G.a({uri:window.GQL_URI,cache:new L.a});Object(c.render)(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(q.a,{client:Y,children:Object(f.jsx)(M,{})})}),document.getElementById("root"))},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.7c10b73a.chunk.js.map