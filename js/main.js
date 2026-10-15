/* CRUSTIO site script: menu data, menu tabs, procedural pizzas, 3D hero, forms. Requires three.min.js on the home page. */

(function(){
"use strict";
/* ---------- data ---------- */
var PIZZAS=[
 {n:"Chicken Tikka",d:"Fajita Chicken, Sauce, Onion, Tomato & Cheese",p:[400,750,1050],f:{c:["#b4501f","#d27a38"],on:1,tom:1}},
 {n:"Chicken Fajita",d:"Tikka Chicken, Sauce, Onion, Capsicum & Cheese",p:[400,750,1050],f:{c:["#d9a35c","#c78a45"],on:1,cap:1}},
 {n:"Malai Boti",d:"Malai Chicken, Sauce, Onion, Olives & Cheese",p:[500,950,1250],f:{c:["#f3dcae","#e4c488"],on:1,ol:1}},
 {n:"Peri Peri",d:"Peri Peri Chicken, Sauce, Onion, Tomato, Capsicum & Cheese",p:[500,950,1250],f:{c:["#c2401a","#de6a2c"],on:1,tom:1,cap:1}},
 {n:"Shahi",d:"Shahi Chicken, Shahi Sauce, Onion, Capsicum, Jalapeno & Cheese",p:[500,950,1250],f:{c:["#ecc77a","#d9a94d"],on:1,cap:1,jal:1}},
 {n:"BBQ Special",d:"BBQ Sauce, Smoked Chicken, Onion, Capsicum, Jalapeno & Cheese",p:[500,950,1250],f:{c:["#6e3a1c","#8d5128"],on:1,cap:1,jal:1,drz:1}},
 {n:"Supreme",d:"Special Chicken, Sauce, Onion, Tomato, Olives & Cheese",p:[500,950,1250],f:{c:["#c98642","#b46c2e"],on:1,tom:1,ol:1}},
 {n:"Cheese Lover",d:"Special Chicken, Shahi Sauce & Extra Cheese",p:[500,950,1250],f:{c:["#d9a35c","#c78a45"],n:10,ch:1}},
 {n:"Veg. Lover",d:"Special Chicken, Shahi Sauce, Onion, Capsicum, Tomato & Extra Cheese",p:[500,950,1250],f:{c:["#d9a35c","#c78a45"],n:10,on:1,cap:1,tom:1,ch:1}},
 {n:"Crown Crust",d:"Special Chicken & Sauce, Kabab, Onion, Tomato, Capsicum, Olives, Jalapeno & Cheese",p:[null,1050,1350],f:{c:["#c98642","#b46c2e"],on:1,tom:1,cap:1,ol:1,jal:1,kab:1,crown:1,drz:1}},
 {n:"Bihari Kabab",d:"Bihari Chicken, Sauce, Kabab, Onion, Capsicum, Jalapeno & Cheese",p:[null,1050,1350],f:{c:["#9b4a1f","#bd6a30"],on:1,cap:1,jal:1,kab:1}},
 {n:"Crustio Special",d:"Special Chicken, Sauce, Onion, Tomato, Capsicum, Olives, Jalapeno & Cheese",p:[null,1050,1350],f:{c:["#c98642","#b46c2e"],on:1,tom:1,cap:1,ol:1,jal:1,drz:1}},
 {n:"Extreme Special",d:"Double Layer Special Chicken & Sauce, Onion, Tomato, Capsicum, Olives, Jalapeno & Cheese",p:[null,1450,1900],f:{c:["#c98642","#b46c2e"],k:1.6,on:1,tom:1,cap:1,ol:1,jal:1}},
 {n:"Peri Peri Extreme",d:"Double Layer Special Chicken, Peri Peri Sauce, Onion, Tomato, Capsicum, Olives & Cheese",p:[null,1450,1900],f:{c:["#c2401a","#de6a2c"],k:1.6,on:1,tom:1,cap:1,ol:1}},
 {n:"Kabab Crust",d:"Double Layer Special Chicken, Sauce, Kabab, Onion, Capsicum, Jalapeno & Cheese",p:[null,1450,1900],f:{c:["#b46c2e","#9b4a1f"],k:1.6,on:1,cap:1,jal:1,kab:1,drz:1}}
];
var BURGERS=[
 ["Double Decker","Double Crispy Chicken Boneless Thai, Cheese Slice, Lettuce, Sauce",500],
 ["Tower Burger","Crispy Chicken Boneless Thai, Chicken Patty, Cheese Slice, Lettuce, Sauce",450],
 ["Zinger Burger","Crispy Chicken Boneless Thai, Lettuce, Sauce",350],
 ["Crustio Special Burger","Special Chicken, Shahi Sauce, Cheese, Olives, Capsicum, Onion",300],
 ["Junior Zinger","Junior Crispy Chicken Boneless Thai, Lettuce, Sauce",300],
 ["Chicken Patty Burger","Chicken Patty, Lettuce, Sauce",250]
];
var PASTA=[["Crispy Pasta","Macaroni, Crispy Chicken, Special Sauce, Olives, Capsicum & Cheese",400,600],["Special Pasta","Macaroni, Special Chicken, Special Sauce, Olives, Capsicum & Cheese",450,650]];
var SANDS=[["Signature Sandwich","Special Chicken, Shahi Sauce, Capsicum, Onion",650],["Mexican Sandwich","Malai Chicken, Shahi Sauce, Onion, Olives, Capsicum & Cheese",700]];
var APPS=[["French Fries","",200,300],["Loaded Fries","",400,600],["Nuggets","6 pcs",250],["Crispy Wings","6 pcs",300],["Oven Baked Wings","6 pcs",350],["Tortilla Wrap","12 inch",400]];
var DEALS=[
 {g:"Wow Deals",items:[["1 Small Pizza with 1 Drink",["1 small pizza","1 drink"],450],["1 Medium Pizza with 2 Drinks",["1 medium pizza","2 drinks"],850],["1 Large Pizza with 1 Ltr Drink",["1 large pizza","1 litre drink"],1150]]},
 {g:"Double Trouble",items:[["2 Small Pizzas",["2 small pizzas"],750],["2 Medium Pizzas",["2 medium pizzas"],1400],["2 Large Pizzas",["2 large pizzas"],2000]]},
 {g:"Crustio Deals",note:"Available flavours in deals: Chicken Tikka & Chicken Fajita.",items:[["Crustio Deal 1",["1 zinger burger","1 × 300 ml drink"],400],["Crustio Deal 2",["1 small pizza","1 zinger burger","2 × 300 ml drinks"],850],["Crustio Deal 3",["2 junior burgers","1 medium pizza","1 litre drink"],1350]]},
 {g:"Family Deals",items:[["Family Deal 1",["1 large pizza","1 medium pizza","1 small pizza","1.5 litre drink"],2250],["Family Deal 2",["1 large pizza","4 junior burgers","1.5 litre drink"],2250]]},
 {g:"Birthday Deal",items:[["Birthday Deal",["2 large pizzas","6 junior burgers","1 pound cake","2 × 1.5 litre drinks","Free decor"],5000]]}
];
var BRANCHES=[
 {no:"1",name:"Near Sabzi Mandi, Samejabad, Multan",tel:"0308-7383000",wa:"923087383000",map:"https://www.google.com/maps/search/?api=1&query=Near+Sabzi+Mandi+Samejabad+Multan"},
 {no:"2",name:"Opposite Total Pump, Near Bahawalpur Bypass Chowk, Multan",tel:"0309-7383000",wa:"923097383000",map:"https://www.google.com/maps/search/?api=1&query=Total+Pump+Bahawalpur+Bypass+Chowk+Multan"}
];
var STEPS=[
 ["Chapter one","Branch 1, Samejabad","Our first branch opened near Sabzi Mandi, bringing pizza, burgers and birthday tables to the neighbourhood."],
 ["Chapter two","Branch 2, Bahawalpur Bypass","A second branch opposite Total Pump, near Bahawalpur Bypass Chowk, to reach more of Multan."],
 ["Next chapter","Franchise partners","A franchise programme to take the CRUSTIO standard to new cities. Details will follow."]
];
var SOCIAL=[["Facebook","https://www.facebook.com/crustioofficial"],["Instagram","https://www.instagram.com/crustioofficial"],["TikTok","https://www.tiktok.com/@crustioofficial"],["Snapchat","https://snapchat.com/t/s0azxFFi"]];
var SUPPORT=[["Brand & identity","Logo, signage and interior guidelines so every outlet looks and feels like CRUSTIO."],["Menu & recipes","The full menu, recipes and preparation standards."],["Training","Kitchen and front-of-house training for your team."],["Store design","Layout and fit-out guidance for the dining room and counter."],["Marketing","Launch material and brand assets for local promotion."],["Ongoing guidance","A point of contact for questions after opening."]];
var FEATURED=[["Crown Crust","images/crown.jpg","Special chicken, kabab and a crust ring filled with cheese.","p",[1050,1350]],["Crustio Special","images/pizza2.jpg","Our signature pizza with a ranch swirl.","p",[1050,1350]],["Double Decker","images/burger.jpg","Double crispy chicken, cheese slice, lettuce and sauce.","b",[500]],["French Fries","images/fries.jpg","Golden fries in the CRUSTIO box. Half or full.","b",[200,300]],["Special Pasta","images/bake.jpg","Macaroni baked with special chicken, olives and cheese.","b",[450,650]],["Tortilla Wrap","images/wrap.jpg","A 12 inch wrap packed with crunchy chicken and salad.","b",[400]]];

/* ---------- helpers ---------- */
var NIL={innerHTML:"",style:{},classList:{toggle:function(){},remove:function(){},add:function(){}},addEventListener:function(){},setAttribute:function(){},getAttribute:function(){return ""},querySelectorAll:function(){return[]},appendChild:function(){},reset:function(){}};
var $=function(s,r){return (r||document).querySelector(s)||NIL},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
function rs(n){return "Rs "+n.toLocaleString("en-US")}
function rngf(seed){var a=seed>>>0;return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}

/* gold drip edge */
function dripPath(h){var W=1600,R=rngf(11),x=-10,out='<rect width="'+W+'" height="12"/>';
 while(x<W){var w=14+R()*16,len=Math.max(w+6,12+R()*(h-26)*(R()>.55?1:.4));out+='<rect x="'+x.toFixed(1)+'" y="0" width="'+w.toFixed(1)+'" height="'+len.toFixed(1)+'" rx="'+(w/2).toFixed(1)+'"/>';x+=w+8+R()*30}
 return out}
$$("[data-drip]").forEach(function(s){s.setAttribute("viewBox","0 0 1600 64");s.setAttribute("preserveAspectRatio","xMidYMin slice");s.innerHTML=dripPath(64)});

/* ---------- procedural top-down pizza ---------- */
function drawPizza(cv,f,seed){
 var S=cv.width=cv.height=520,c=cv.getContext("2d"),R=rngf(seed),cx=S/2,k=f.k||1,g,i,a,r,x,y;
 function pos(m){a=R()*6.2832;r=Math.sqrt(R())*(m||.34)*S;return[cx+Math.cos(a)*r,cx+Math.sin(a)*r]}
 function disc(px,py,rad,fill){c.fillStyle=fill;c.beginPath();c.arc(px,py,rad,0,6.2832);c.fill()}
 g=c.createRadialGradient(cx-S*.1,cx-S*.1,S*.08,cx,cx,S*.49);g.addColorStop(0,"#efc17c");g.addColorStop(1,"#c0792f");disc(cx,cx,S*.49,g);
 for(i=0;i<140;i++){a=R()*6.2832;r=(.41+R()*.07)*S;disc(cx+Math.cos(a)*r,cx+Math.sin(a)*r,2+R()*6,"rgba(140,72,22,.32)")}
 if(f.crown){for(i=0;i<22;i++){a=i/22*6.2832;x=cx+Math.cos(a)*S*.445;y=cx+Math.sin(a)*S*.445;g=c.createRadialGradient(x-3,y-3,1,x,y,S*.034);g.addColorStop(0,"#fffbea");g.addColorStop(1,"#e8cf8a");disc(x,y,S*.034,g)}}
 disc(cx,cx,S*.405,"#b8381a");
 g=c.createRadialGradient(cx-S*.08,cx-S*.08,S*.05,cx,cx,S*.39);g.addColorStop(0,"#fbdc7e");g.addColorStop(1,"#eeb940");disc(cx,cx,S*.39,g);
 for(i=0;i<(f.ch?95:60);i++){var p=pos(.37);disc(p[0],p[1],7+R()*16,"rgba(255,236,160,.5)")}
 for(i=0;i<22;i++){var q=pos(.37);disc(q[0],q[1],3+R()*7,"rgba(200,125,35,.32)")}
 var n=Math.round((f.n!=null?f.n:30)*k);
 for(i=0;i<n;i++){var pc=pos(.35);c.save();c.translate(pc[0],pc[1]);c.rotate(R()*6.28);c.fillStyle=f.c[i%2];c.beginPath();c.ellipse(0,0,13+R()*9,8+R()*5,0,0,6.2832);c.fill();c.fillStyle="rgba(255,255,255,.14)";c.beginPath();c.ellipse(-3,-2,6,3,0,0,6.2832);c.fill();c.restore()}
 if(f.kab)for(i=0;i<Math.round(9*k);i++){var pk=pos(.33);disc(pk[0],pk[1],13+R()*4,"#6f3519");disc(pk[0]-2,pk[1]-2,6,"#8b4a26")}
 if(f.tom)for(i=0;i<Math.round(8*k);i++){var pt=pos(.34);disc(pt[0],pt[1],12,"#cf2f1b");disc(pt[0]-2,pt[1]-2,6,"#e2543a")}
 if(f.on){c.lineWidth=3;c.strokeStyle="rgba(240,226,238,.92)";for(i=0;i<Math.round(14*k);i++){var po=pos(.35),s0=R()*6.28;c.beginPath();c.arc(po[0],po[1],8+R()*7,s0,s0+2.4+R()*2);c.stroke()}}
 if(f.cap){c.lineWidth=5;c.strokeStyle="#3a9a31";c.lineCap="round";for(i=0;i<Math.round(14*k);i++){var pp=pos(.35),s1=R()*6.28;c.beginPath();c.arc(pp[0],pp[1],9+R()*8,s1,s1+1.6+R()*1.4);c.stroke()}}
 if(f.ol)for(i=0;i<Math.round(11*k);i++){var pl=pos(.34);c.lineWidth=5;c.strokeStyle="#1a1918";c.beginPath();c.arc(pl[0],pl[1],7,0,6.2832);c.stroke()}
 if(f.jal)for(i=0;i<Math.round(9*k);i++){var pj=pos(.34);disc(pj[0],pj[1],8,"#7fae2a");disc(pj[0],pj[1],3.5,"#c7dd7e")}
 if(f.drz){c.save();c.lineWidth=3.2;c.strokeStyle="rgba(255,249,232,.95)";c.shadowColor="rgba(0,0,0,.35)";c.shadowBlur=3;c.beginPath();for(i=0;i<=420;i++){var tt=i/420,an=tt*6.2832*6.5,rr=(.03+tt*.33+Math.sin(tt*70)*.012)*S;x=cx+Math.cos(an)*rr;y=cx+Math.sin(an)*rr;i?c.lineTo(x,y):c.moveTo(x,y)}c.stroke();c.restore()}
 c.strokeStyle="rgba(90,40,10,.35)";c.lineWidth=1.4;for(i=0;i<4;i++){a=i*Math.PI/4;c.beginPath();c.moveTo(cx+Math.cos(a)*S*.4,cx+Math.sin(a)*S*.4);c.lineTo(cx-Math.cos(a)*S*.4,cx-Math.sin(a)*S*.4);c.stroke()}
 g=c.createRadialGradient(cx-S*.2,cx-S*.25,10,cx,cx,S*.5);g.addColorStop(0,"rgba(255,255,255,.16)");g.addColorStop(1,"rgba(255,255,255,0)");disc(cx,cx,S*.49,g);
}

/* ---------- render content ---------- */
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
$("#featGrid").innerHTML=FEATURED.map(function(f){var pr=f[4].length>1?'<span class="price"><small>From</small>'+rs(f[4][0])+'</span>':'<span class="price">'+rs(f[4][0])+'</span>';
 return '<article class="fcard tilt"><div class="img"><img src="'+f[1]+'" alt="'+esc(f[0])+'" loading="lazy"></div><div class="body"><h3>'+esc(f[0])+'</h3><p>'+esc(f[2])+'</p>'+pr+'</div></article>'}).join("");

var BRHTML=BRANCHES.map(function(b){return '<article class="branch"><div class="no"><small>Branch</small>'+b.no+'</div><h3>'+esc(b.name)+'</h3>'+
 '<dl class="kv"><div><dt>Phone</dt><dd>'+b.tel+'</dd></div><div><dt>Hours</dt><dd><span class="tag">To be confirmed</span></dd></div><div><dt>Services</dt><dd><div class="svc"><span>Din in</span><span>Delivery</span><span>Take away</span><span>Birthday celebration</span></div></dd></div></dl>'+
 '<div class="btn-row"><a class="btn" href="'+b.map+'" target="_blank" rel="noopener">Open in Google Maps</a><a class="btn line" href="https://wa.me/'+b.wa+'" target="_blank" rel="noopener">WhatsApp</a></div></article>'}).join("");
$$("[data-branches]").forEach(function(e){e.innerHTML=BRHTML});
$$("[data-timeline]").forEach(function(e){e.innerHTML=STEPS.map(function(s){return '<div class="tl"><div class="when">'+s[0]+'</div><h3>'+s[1]+'</h3><p>'+s[2]+'</p></div>'}).join("")});
var PEOPLE=[["Ammar Bin Intizar","Co-founder","A"],["Usama Bin Yamin","Co-founder","U"]];
$$("[data-people]").forEach(function(e){e.innerHTML=PEOPLE.map(function(p,i){return '<article class="person"><div class="mono" aria-hidden="true">'+p[2]+'</div><div><h3>'+p[0]+'</h3><div class="role">'+p[1]+'</div><p>Biography and professional portrait coming soon.</p></div></article>'}).join("")});
function socialLinks(cls){return SOCIAL.map(function(s){return '<a class="'+cls+'" href="'+s[1]+'" target="_blank" rel="noopener">'+s[0]+'</a>'}).join("")}
$$("[data-socials]").forEach(function(e){e.innerHTML=socialLinks("social")});
$$("[data-footsocial]").forEach(function(e){e.innerHTML=socialLinks("")+'<p style="margin-top:8px">@crustioofficial</p>'});
$("#support").innerHTML=SUPPORT.map(function(s){return '<div class="vcard light"><h3 style="font-size:1.2rem">'+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join("");
$("#support").style.gridTemplateColumns="repeat(auto-fit,minmax(240px,1fr))";
$("#vm").style.gridTemplateColumns="repeat(auto-fit,minmax(280px,1fr))";
$$("[data-count=pizza]").forEach(function(e){e.textContent=PIZZAS.length});
var dealCount=DEALS.reduce(function(a,g){return a+g.items.length},0);$$("[data-count=deal]").forEach(function(e){e.textContent=dealCount});

/* menu */
var CATS=[["pizzas","Pizzas"],["burgers","Burgers"],["pasta","Pasta"],["sandwiches","Sandwiches"],["appetizers","Appetizers"],["deals","Deals"]];
function rowHTML(name,desc,prices,labels){return '<div class="row"><h3>'+esc(name)+'</h3><div class="prices">'+prices.map(function(p,i){return '<span>'+(labels?'<small>'+labels[i]+'</small>':'')+rs(p)+'</span>'}).join("")+'</div>'+(desc?'<p>'+esc(desc)+'</p>':'')+'</div>'}
var catHTML={};
catHTML.pizzas='<div class="cat-head"><div><div class="eyebrow">Small, medium and large</div><h2 class="h2">Pizzas</h2></div><span class="tag">Crown, Bihari, Special and Extreme are medium and large only</span></div><div class="pizza-grid">'+PIZZAS.map(function(p,i){
 var labs=["Small","Medium","Large"],sz=p.p.map(function(v,j){return v?'<div class="size"><b>'+labs[j]+'</b><span>'+v.toLocaleString("en-US")+'</span></div>':''}).join("");
 return '<article class="pcard tilt"><div class="plate"><canvas data-pz="'+i+'" role="img" aria-label="'+esc(p.n)+' pizza"></canvas></div><h3>'+esc(p.n)+'</h3><p>'+esc(p.d)+'</p><div class="sizes">'+sz+'</div></article>'}).join("")+'</div>'+
 '<div class="addons"><b>Extra topping</b><span>Chicken &amp; cheese</span><span>Small 100</span><span>Medium 150</span><span>Large 200</span></div>';
catHTML.burgers='<div class="cat-head"><div><div class="eyebrow">Crispy, stacked, saucy</div><h2 class="h2">Burgers</h2></div></div><div class="cat-photo"><div class="ph"><img src="images/burger.jpg" alt="CRUSTIO double decker burger"></div><div>'+BURGERS.map(function(b){return rowHTML(b[0],b[1],[b[2]])}).join("")+'<div class="addons"><b>Add ons</b><span>Cheese slice 50</span><span>Dip sauce 50</span><span>Zinger fillet 200</span></div></div></div>';
catHTML.pasta='<div class="cat-head"><div><div class="eyebrow">Half or full</div><h2 class="h2">Pasta</h2></div></div><div class="cat-photo"><div class="ph"><img src="images/bake.jpg" alt="Baked pasta with olives"></div><div>'+PASTA.map(function(b){return rowHTML(b[0],b[1],[b[2],b[3]],["Half","Full"])}).join("")+'</div></div>';
catHTML.sandwiches='<div class="cat-head"><div><div class="eyebrow">Stacked to share</div><h2 class="h2">Sandwiches</h2></div></div><div class="list-grid">'+SANDS.map(function(b){return rowHTML(b[0],b[1],[b[2]])}).join("")+'</div>';
catHTML.appetizers='<div class="cat-head"><div><div class="eyebrow">Sides and snacks</div><h2 class="h2">Appetizers</h2></div></div><div class="cat-photo"><div class="ph"><img src="images/fries.jpg" alt="CRUSTIO fries"></div><div>'+APPS.map(function(b){return b[3]?rowHTML(b[0],b[1],[b[2],b[3]],["Half","Full"]):rowHTML(b[0],b[1],[b[2]])}).join("")+'</div></div>';
catHTML.deals='<div class="cat-head"><div><div class="eyebrow">Better together</div><h2 class="h2">Deals</h2></div></div>'+DEALS.map(function(g){return '<div class="deal-group"><h3>'+g.g+'</h3>'+(g.note?'<p>'+g.note+'</p>':'<p></p>')+'<div class="deals">'+g.items.map(function(d){return '<div class="deal"><h4>'+esc(d[0])+'</h4><ul>'+d[1].map(function(l){return '<li>'+esc(l)+'</li>'}).join("")+'</ul><div class="pr"><small>Rs</small>'+d[2].toLocaleString("en-US")+'</div></div>'}).join("")+'</div></div>'}).join("");
$("#tabs").innerHTML=CATS.map(function(c,i){return '<button class="tab" role="tab" type="button" data-cat="'+c[0]+'" aria-selected="'+(i===0)+'">'+c[1]+'</button>'}).join("");
$("#cats").innerHTML=CATS.map(function(c,i){return '<div class="cat'+(i===0?' on':'')+'" id="cat-'+c[0]+'" role="tabpanel">'+catHTML[c[0]]+'</div>'}).join("")+'<p class="fine">Prices in Pakistani rupees, as per the current printed menu. Prices may change; the admin panel will manage them.</p>';
$$("canvas[data-pz]").forEach(function(cv){var i=+cv.getAttribute("data-pz");drawPizza(cv,PIZZAS[i].f,101+i*17)});
function showCat(id){$$(".cat").forEach(function(e){e.classList.toggle("on",e.id==="cat-"+id)});$$(".tab").forEach(function(t){t.setAttribute("aria-selected",String(t.getAttribute("data-cat")===id))})}

/* ---------- page state ---------- */
var PAGE=document.body.getAttribute("data-page")||"home",heroVisible=PAGE==="home";
$$("#nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("data-nav")===PAGE)});
$("#burger").addEventListener("click",function(){var o=$("#nav").classList.toggle("open");this.setAttribute("aria-expanded",String(o))});
document.addEventListener("click",function(e){var tab=e.target.closest&&e.target.closest(".tab");if(tab){var id=tab.getAttribute("data-cat");showCat(id);try{history.replaceState(null,"","#"+id)}catch(x){}}});
function fromHash(){var h=(location.hash||"").slice(1);if(PAGE==="menu"&&CATS.some(function(c){return c[0]===h}))showCat(h)}
window.addEventListener("hashchange",fromHash);fromHash();
/* ---------- tilt ---------- */
var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!reduce){document.addEventListener("pointermove",function(e){var t=e.target.closest&&e.target.closest(".tilt");if(!t||e.pointerType==="touch")return;var b=t.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;t.style.setProperty("--ry",(x*9).toFixed(2)+"deg");t.style.setProperty("--rx",(-y*9).toFixed(2)+"deg")});
 document.addEventListener("pointerout",function(e){var t=e.target.closest&&e.target.closest(".tilt");if(t&&!t.contains(e.relatedTarget)){t.style.setProperty("--ry","0deg");t.style.setProperty("--rx","0deg")}})}

/* ---------- forms ---------- */
function wireForm(fid,sid,msg){var f=$(fid),s=$(sid);f.addEventListener("submit",function(e){e.preventDefault();
 var bad=$$("[required]",f).filter(function(i){return !i.value.trim()});
 if(bad.length){s.hidden=false;s.textContent="Please fill in: "+bad.map(function(b){return b.closest("label").firstChild.textContent.trim().toLowerCase()}).join(", ")+".";bad[0].focus();return}
 s.hidden=false;s.textContent=msg;f.reset()})}
wireForm("#franForm","#franStatus","Thank you. This preview form does not send data yet. At launch, enquiries will arrive in the admin panel.");
wireForm("#contactForm","#contactStatus","Thank you. This preview form does not send messages yet. For now, please call or WhatsApp a branch.");
$$(".copy").forEach(function(b){b.addEventListener("click",function(){var v=b.parentNode.getAttribute("data-num");
 function done(m){b.textContent=m;setTimeout(function(){b.textContent="Copy"},1400)}
 try{navigator.clipboard.writeText(v).then(function(){done("Copied")},function(){done("Select number")})}catch(x){done("Select number")}})});

/* ---------- 3D hero pizza ---------- */
var kick=function(){};
(function(){
 var host=document.querySelector("#hero3d");if(!host)return;
 function fallback(){var cv=document.createElement("canvas");cv.className="fallback";host.appendChild(cv);drawPizza(cv,PIZZAS[9].f,5)}
 if(!window.THREE){fallback();return}
 var T=THREE,renderer;
 try{renderer=new T.WebGLRenderer({antialias:true,alpha:true})}catch(e){fallback();return}
 renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));renderer.outputEncoding=T.sRGBEncoding;
 host.appendChild(renderer.domElement);
 var scene=new T.Scene(),cam=new T.PerspectiveCamera(30,1,.1,60);cam.position.set(0,6.4,9.0);cam.lookAt(0,-.05,0);
 scene.add(new T.AmbientLight(0xfff1d6,.42));
 var key=new T.DirectionalLight(0xffe6b0,.8);key.position.set(3.5,7,4);scene.add(key);
 var rim=new T.PointLight(0xf2b51f,1.0,18);rim.position.set(-5,2.5,-3);scene.add(rim);
 var fill=new T.PointLight(0xffffff,.35,20);fill.position.set(4,3,-4);scene.add(fill);
 var R=rngf(7),root=new T.Group(),pizza=new T.Group();scene.add(root);root.add(pizza);
 function mat(col,rough,metal){return new T.MeshStandardMaterial({color:col,roughness:rough==null?.7:rough,metalness:metal||0})}
 function jitter(geo,amt){var p=geo.attributes.position;for(var i=0;i<p.count;i++){p.setXYZ(i,p.getX(i)+(R()-.5)*amt,p.getY(i)+(R()-.5)*amt,p.getZ(i)+(R()-.5)*amt)}geo.computeVertexNormals();return geo}
 var board=new T.Mesh(new T.CylinderGeometry(2.85,2.85,.14,96),mat(0x15120c,.35,.45));board.position.y=-.24;root.add(board);
 var ring=new T.Mesh(new T.TorusGeometry(2.85,.04,12,160),mat(0xf2b51f,.28,.85));ring.rotation.x=Math.PI/2;ring.position.y=-.165;root.add(ring);
 var inner=new T.Mesh(new T.TorusGeometry(2.55,.015,8,160),mat(0xf2b51f,.3,.8));inner.rotation.x=Math.PI/2;inner.position.y=-.165;root.add(inner);
 var sc=document.createElement("canvas");sc.width=sc.height=128;var sx=sc.getContext("2d"),sg=sx.createRadialGradient(64,64,10,64,64,64);sg.addColorStop(0,"rgba(0,0,0,.6)");sg.addColorStop(1,"rgba(0,0,0,0)");sx.fillStyle=sg;sx.fillRect(0,0,128,128);
 var shadow=new T.Mesh(new T.PlaneGeometry(7.6,7.6),new T.MeshBasicMaterial({map:new T.CanvasTexture(sc),transparent:true,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=-.33;root.add(shadow);
 var dough=new T.Mesh(new T.CylinderGeometry(2.1,2.1,.2,96),mat(0xdea25a,.8));pizza.add(dough);
 var crust=new T.Mesh(jitter(new T.TorusGeometry(2.04,.2,22,120),.02),mat(0xd08b3c,.75));crust.rotation.x=Math.PI/2;crust.position.y=.07;pizza.add(crust);
 for(var i=0;i<46;i++){var a=R()*6.2832,bl=new T.Mesh(new T.SphereGeometry(.035+R()*.045,8,6),mat(0xa4521a,.8));bl.position.set(Math.cos(a)*2.04,.2+R()*.04,Math.sin(a)*2.04);pizza.add(bl)}
 var sauce=new T.Mesh(new T.CylinderGeometry(1.9,1.9,.05,96),mat(0xbe3d1b,.5));sauce.position.y=.12;pizza.add(sauce);
 var cheese=new T.Mesh(new T.CylinderGeometry(1.84,1.84,.07,96),mat(0xf5cd5f,.42));cheese.position.y=.17;pizza.add(cheese);
 function pt(m){var a=R()*6.2832,r=Math.sqrt(R())*m;return[Math.cos(a)*r,Math.sin(a)*r]}
 for(i=0;i<70;i++){var q=pt(1.75),b=new T.Mesh(new T.SphereGeometry(1,10,6),mat(R()>.8?0xd99a33:0xfad97c,.4));b.scale.set(.14+R()*.22,.035,.14+R()*.22);b.position.set(q[0],.215,q[1]);pizza.add(b)}
 function put(mesh,m,y,rotRand){var q=pt(m);mesh.position.set(q[0],y,q[1]);if(rotRand)mesh.rotation.y=R()*6.28;pizza.add(mesh)}
 var chickC=[0xb85f26,0xd48a42];
 for(i=0;i<38;i++){var ch=new T.Mesh(new T.SphereGeometry(1,10,8),mat(chickC[i%2],.6));ch.scale.set(.16+R()*.07,.075,.12+R()*.05);put(ch,1.62,.27,true)}
 for(i=0;i<12;i++){var cp=new T.Mesh(new T.TorusGeometry(.13,.028,8,16,Math.PI*1.4),mat(0x3b9a31,.5));cp.rotation.x=Math.PI/2;put(cp,1.6,.27,false);cp.rotation.z=R()*6.28}
 for(i=0;i<12;i++){var on=new T.Mesh(new T.TorusGeometry(.15,.02,8,22),mat(0xefe2ee,.5));on.rotation.x=Math.PI/2;put(on,1.6,.26,false)}
 for(i=0;i<11;i++){var ol=new T.Mesh(new T.TorusGeometry(.085,.042,10,16),mat(0x1a1918,.3,.1));ol.rotation.x=Math.PI/2;put(ol,1.6,.265,false)}
 for(i=0;i<8;i++){var tm=new T.Mesh(new T.CylinderGeometry(.16,.16,.04,18),mat(0xd2321d,.45));put(tm,1.6,.255,true)}
 for(i=0;i<8;i++){var jl=new T.Mesh(new T.CylinderGeometry(.09,.09,.035,14),mat(0x7fae2a,.5));put(jl,1.6,.27,true)}
 var kb=mat(0x6f3519,.7);for(i=0;i<7;i++){put(new T.Mesh(new T.CylinderGeometry(.15,.15,.09,14),kb),1.55,.3,true)}
 var pts=[],N=520;for(i=0;i<=N;i++){var t=i/N,an=t*Math.PI*2*8,rr=.12+t*1.55+Math.sin(t*90)*.07;pts.push(new T.Vector3(Math.cos(an)*rr,.34+Math.sin(t*140)*.008,Math.sin(an)*rr))}
 var dr=new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts),N,.022,6,false),mat(0xfff3d6,.3));pizza.add(dr);
 var cm=new T.MeshBasicMaterial({color:0x5a2a0a,transparent:true,opacity:.5});
 for(i=0;i<4;i++){var cut=new T.Mesh(new T.BoxGeometry(3.7,.012,.014),cm);cut.position.y=.213;cut.rotation.y=i*Math.PI/4;pizza.add(cut)}

 function size(){var w=host.clientWidth||400,h=host.clientHeight||w*.92;renderer.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}
 size();if(window.ResizeObserver)new ResizeObserver(size).observe(host);else window.addEventListener("resize",size);
 var px=0,py=0,tx=0,ty=0,drag=false,lastX=0,spin=0,t0=performance.now(),born=t0,raf=0,running=false;
 host.addEventListener("pointermove",function(e){var b=host.getBoundingClientRect();tx=(e.clientX-b.left)/b.width-.5;ty=(e.clientY-b.top)/b.height-.5;if(drag){spin+=(e.clientX-lastX)*.012;lastX=e.clientX}});
 host.addEventListener("pointerdown",function(e){drag=true;lastX=e.clientX;try{host.setPointerCapture(e.pointerId)}catch(x){}});
 host.addEventListener("pointerup",function(){drag=false});host.addEventListener("pointerleave",function(){tx=0;ty=0});
 function frame(now){raf=0;if(!heroVisible||document.hidden){running=false;return}
  var dt=Math.min((now-t0)/1000,.05);t0=now;if(!reduce)spin+=dt*.28;
  px+=(tx-px)*.06;py+=(ty-py)*.06;
  var e=Math.min((now-born)/1100,1),ease=1-Math.pow(1-e,3);
  pizza.rotation.y=spin;pizza.position.y=reduce?0:Math.sin(now/900)*.05+(1-ease)*.6;root.scale.setScalar(.7+.3*ease);
  root.rotation.x=py*.22;root.rotation.z=-px*.16;
  renderer.render(scene,cam);if(reduce){running=false}else raf=requestAnimationFrame(frame)}
 kick=function(){if(!running&&heroVisible){running=true;t0=performance.now();raf=requestAnimationFrame(frame)}};
 document.addEventListener("visibilitychange",kick);
 if(reduce){spin=.4;born=0;frame(performance.now());kick=function(){if(heroVisible){size();frame(performance.now())}}}else kick();
})();

})();
