
/* A To Z Gallery product ordering
   Change WHATSAPP_NUMBER below if the shop uses a different WhatsApp number.
*/
const WHATSAPP_NUMBER = "919831092373";

const products = [
  {
    name: "Cute Plush Teddy",
    price: 499,
    image: "shop-gallery.webp",
    tag: "BEST SELLER",
    description: "Soft and adorable gift choice for kids and special occasions."
  },
  {
    name: "Colourful Horse Showpiece",
    price: 1299,
    image: "decorative-horse.webp",
    tag: "DECOR",
    description: "Eye-catching decorative piece for your home or gifting."
  },
  {
    name: "Decorative Peacock Pair",
    price: 999,
    image: "peacock-decor.webp",
    tag: "POPULAR",
    description: "Elegant colourful décor pieces for a beautiful display."
  },
  {
    name: "Gift & Collectibles Combo",
    price: 599,
    image: "shop-interior.webp",
    tag: "VALUE PICK",
    description: "A fun selection inspired by the gallery's unique collection."
  },
  {
    name: "Cute Soft Toy",
    price: 399,
    image: "shop-gallery.webp",
    tag: "GIFT",
    description: "A colourful soft-toy option for birthdays and surprises."
  },
  {
    name: "Decorative Art Piece",
    price: 1499,
    image: "peacock-decor.webp",
    tag: "PREMIUM",
    description: "A statement décor piece for homes, offices and gifting."
  },
  {
    name: "Anime & Fun Collectible",
    price: 299,
    image: "shop-gallery.webp",
    tag: "ANIME",
    description: "Fun collectible-style item for anime and pop-culture fans."
  },
  {
    name: "Surprise Gift Pick",
    price: 249,
    image: "shop-interior.webp",
    tag: "BUDGET",
    description: "An affordable little surprise for someone special."
  }
];

function money(value) {
  return "₹" + value.toLocaleString("en-IN");
}

function whatsappLink(product) {
  const message =
    `Hello A To Z Gallery 👋%0A%0A` +
    `I want to order this product:%0A` +
    `Product: ${product.name}%0A` +
    `Price: ${money(product.price)}%0A%0A` +
    `Please confirm availability and delivery/pick-up details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = products.map((product) => `
    <article class="product-card reveal">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name} at A To Z Gallery" loading="lazy">
        <span class="product-tag">${product.tag}</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-bottom">
          <span class="price">${money(product.price)}</span>
          <a class="order-btn" href="${whatsappLink(product)}" target="_blank" rel="noopener">
            Order on WhatsApp
          </a>
        </div>
        <span class="order-note">Price shown is a demo/default price. Confirm before ordering.</span>
      </div>
    </article>
  `).join("");
}

renderProducts();

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menu) {
  menu.addEventListener("click", () => {
    const active = nav.classList.toggle("active");
    menu.setAttribute("aria-expanded", active);
  });

  document.querySelectorAll(".nav a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("active");
      menu.setAttribute("aria-expanded", "false");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      obs.unobserve(e.target);
    }
  });
}, {threshold:.08});

document.querySelectorAll(".card,.photo,.review,.trust-photo,.hero-copy,.hero-photo,.product-card")
  .forEach(el => {
    el.classList.add("reveal");
    obs.observe(el);
  });
