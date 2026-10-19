// Put your WhatsApp number here: country code + number, digits only (no + or spaces)
const WHATSAPP = "2349025834860";
const wa = msg => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// art: which drawn illustration to show. Each project is a miniature of its real website.
const projects = [
  {name:"Vandal Wear",site:"vandal-wears",cat:"Retail",desc:"Clothing boutique with a bold, fashion-first storefront.",bg:"#f8e7d8",fg:"#3a1f10",ac:"#b8531f",brand:"Vandal Wear",h:"Every day feel the luxury",sub:"New season looks for men and women.",cta:"Shop now",art:"arch",serif:1},
  {name:"PnL Pilot",site:"pnl-pilot",cat:"Web app",desc:"Crypto profit and loss calculator that shows your numbers before you trade.",bg:"#0b1020",fg:"#f1f4ff",ac:"#5b4de6",brand:"PnL Pilot",h:"Know your profit before you trade.",sub:"Enter your entry, exit and size.",cta:"Calculate",art:"calc"},
  {name:"Chowlink",site:"chowlink",cat:"Food & farming",desc:"Food delivery site with menus, offers and quick ordering.",bg:"#fff6ec",fg:"#2b1608",ac:"#ff7a1a",brand:"Chowlink",h:"Hot meals, delivered fast",sub:"Order from places you love.",cta:"Order now",art:"food"},
  {name:"Savora Foods",site:"savora-foodss",cat:"Food & farming",desc:"Nigerian food brand in Port Harcourt, made to make people hungry.",bg:"#4a2a17",fg:"#fff3e4",ac:"#f3f0ea",abt:"#2b1608",brand:"Savora Foods",h:"Nigerian food, made fresh in Port Harcourt",sub:"Cooked daily, served hot.",cta:"View menu",art:"plate"},
  {name:"Mielle Hairs",site:"meille-hairs",cat:"Retail",desc:"Hair growth products store with clear categories and offers.",bg:"#5a3319",fg:"#fff1e0",ac:"#f39a1e",brand:"Mielle Hairs",h:"Grow longer, stronger hair",sub:"Natural care for every hair type.",cta:"Shop hair care",art:"bot"},
  {name:"Healwell Hospital",site:"healwell-hospital",cat:"Services",desc:"Hospital website that explains services and books patients fast.",bg:"#e6f0ff",fg:"#0f2a57",ac:"#2f6fdb",brand:"Healwell",h:"Empowering lives through transformative healthcare",sub:"Care you can trust.",cta:"Book appointment",art:"doc"},
  {name:"Haven Living",site:"haven-livingg",cat:"Retail",desc:"Furniture brand site built around calm, warm product photography.",bg:"#f2e9de",fg:"#2e2216",ac:"#1d1610",brand:"Haven Living",h:"Timeless furniture for living",sub:"Pieces made to last.",cta:"Shop now",art:"sofa",serif:1},
  {name:"Luxdrive Rentals",site:"luxedrive-rental",cat:"Services",desc:"Car rental site with a booking form up front.",bg:"#f4f6fa",fg:"#12203c",ac:"#12203c",brand:"Luxdrive",h:"Drive supercars anywhere",sub:"Book in under a minute.",cta:"Book now",art:"car"},
  {name:"Vence Hotel",site:"vence-hotel",cat:"Services",desc:"Hotel website with rooms, amenities and a clean welcome page.",bg:"#ffffff",fg:"#111",ac:"#111",brand:"VENCE",h:"WELCOME TO VENCE",sub:"",cta:"Book a room",art:"strip",stack:1},
  {name:"Farmora",site:"fam-ora",cat:"Food & farming",desc:"Agriculture and nutrition brand that shows farming differently.",bg:"#eaf3e4",fg:"#1c3a24",ac:"#d6281e",brand:"Farmora",h:"See agriculture differently.",sub:"From the farm to your table.",cta:"Explore",art:"leaf",serif:1},
  {name:"Phils Real Estate",site:"phils-real-estate",cat:"Services",desc:"Real estate site for architectural homes and property listings.",bg:"#0e1524",fg:"#f2f5fb",ac:"#c6f432",abt:"#0e1524",brand:"Phils",h:"Crafting architectural icons.",sub:"Exceptional real estate.",cta:"View projects",art:"sky"}
];
const arts = {
  arch:"<i></i><i></i><em></em>", calc:"<i></i><b></b><b></b><em>+$1,240</em>", food:"<i></i><b></b><em>₦4,700</em>",
  plate:"<i></i><b></b><b></b><b></b>", bot:"<i></i><i></i><i></i>", doc:"<i></i><b></b><em>Book now</em>",
  sofa:"<i></i><b></b><em></em><u></u>", car:"<i></i><b></b><em></em><u></u>", strip:"<i></i><i></i><i></i>",
  leaf:"<i></i><i></i><i></i>", sky:"<i></i><i></i><i></i><i></i>"
};
const IMG = {
  "Vandal Wear": "images/vandal-wear.jpg",
  "Chowlink": "images/chowlink.jpg",
  "Savora Foods": "images/savora-foods.jpg",
  "Mielle Hairs": "images/mielle-hairs.jpg",
  "Healwell Hospital": "images/healwell-hospital.jpg",
  "Haven Living": "images/haven-living.jpg",
  "Luxdrive Rentals": "images/luxdrive-rentals.jpg",
  "Vence Hotel": "images/vence-hotel.jpg",
  "Farmora": "images/farmora.jpg",
  "Phils Real Estate": "images/phils-real-estate.jpg"
};
const slug = n => n.toLowerCase().replace(/[^a-z0-9]+/g,"-");
const grid = document.getElementById("grid"), filters = document.getElementById("filters");

grid.innerHTML = projects.map(p => `
  <article class="card" data-cat="${p.cat}">
    <div class="bar"><i></i><i></i><i></i><span>${p.site}.netlify.app</span></div>
    <div class="shot" role="img" aria-label="Preview of the ${p.name} homepage">
      ${IMG[p.name] ? `<img src="${IMG[p.name]}" alt="" loading="lazy">` : `<div class="scr ${p.serif?"serif":""} ${p.stack?"stack":""}" style="--bg:${p.bg};--fg:${p.fg};--ac:${p.ac};--abt:${p.abt||"#fff"}">
        <div class="nav"><b>${p.brand}</b><i></i><i></i><i></i><u>${p.stack?"Rooms":"Menu"}</u></div>
        <div class="sh">
          <div class="txt"><h4>${p.h}</h4><p>${p.sub}</p><span class="b">${p.cta}</span></div>
          <div class="art ${p.art}">${arts[p.art]}</div>
        </div>
      </div>`}
    </div>
    <div class="info">
      <span class="cat">${p.cat}</span><h3>${p.name}</h3><p>${p.desc}</p>
      <div class="acts">
        <a href="https://${p.site}.netlify.app" target="_blank" rel="noopener">Visit site</a>
        <a class="wa" href="${wa("Hi Larry, I saw "+p.name+" on your portfolio and I want a similar website.")}" target="_blank" rel="noopener">WhatsApp me</a>
      </div>
    </div>
  </article>`).join("");

const cats = ["All", ...new Set(projects.map(p => p.cat))];
filters.innerHTML = cats.map((c,i) => `<button type="button" aria-pressed="${i===0}">${c}</button>`).join("");
filters.addEventListener("click", e => {
  const b = e.target.closest("button"); if(!b) return;
  filters.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x===b));
  grid.querySelectorAll(".card").forEach(c => { c.hidden = b.textContent!=="All" && c.dataset.cat!==b.textContent; });
});

const hello = wa("Hi Larry, I saw your portfolio and I want a website for my business.");
document.getElementById("wa-contact").href = hello;
document.getElementById("wa-hero").href = hello;
document.getElementById("year").textContent = "© " + new Date().getFullYear() + " Larry_builds";
