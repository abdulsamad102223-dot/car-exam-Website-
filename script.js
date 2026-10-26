const cars = [
	{ id: 1, brand: "Ferrari", name: "SF90 Stradale", category: "Hybrid V12 Supercar", price: 625000, engine: "4.0L V8 Hybrid", horsepower: "986 hp", acceleration: "2.5 seconds", topSpeed: "340 km/h", drivetrain: "All-wheel drive", description: "Ferrari's series-production flagship hybrid combining twin-turbo V8 power with three electric motors.", image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1100&q=85" },
	{ id: 2, brand: "Ferrari", name: "296 GTB", category: "Hybrid Supercar", price: 342205, engine: "2.9L V6 Hybrid", horsepower: "819 hp", acceleration: "2.9 seconds", topSpeed: "330 km/h", drivetrain: "Rear-wheel drive", description: "A mid-rear-engined two-seater that pairs a new V6 with Ferrari's electric power architecture.", image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=1100&q=85" },
	{ id: 3, brand: "Lamborghini", name: "Revuelto", category: "Hybrid V12 Supercar", price: 608358, engine: "6.5L V12 Hybrid", horsepower: "1,015 CV", acceleration: "2.5 seconds", topSpeed: "350+ km/h", drivetrain: "All-wheel drive", description: "Lamborghini's first V12 high-performance electrified vehicle, combining three motors with a naturally aspirated V12.", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1100&q=85" },
	{ id: 4, brand: "Lamborghini", name: "Huracán", category: "Supercar", price: 249865, engine: "5.2L V10", horsepower: "631 hp", acceleration: "2.9 seconds", topSpeed: "325 km/h", drivetrain: "All-wheel drive", description: "A naturally aspirated V10 supercar with sharp lines and a deeply engaging character.", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1100&q=85" },
	{ id: 5, brand: "Lamborghini", name: "Aventador", category: "Supercar", price: 501953, engine: "6.5L V12", horsepower: "769 hp", acceleration: "2.8 seconds", topSpeed: "350 km/h", drivetrain: "All-wheel drive", description: "The iconic Aventador closed Lamborghini's V12 era with dramatic design and immense presence.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=85" },
	{ id: 6, brand: "Porsche", name: "911 GT3 RS", category: "Sports Car", price: 241300, engine: "4.0L Flat-six", horsepower: "518 hp", acceleration: "3.2 seconds", topSpeed: "296 km/h", drivetrain: "Rear-wheel drive", description: "A road-legal track specialist shaped by motorsport aerodynamics and a high-revving flat-six.", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=85" },
	{ id: 7, brand: "Porsche", name: "911 Turbo S", category: "Sports Car", price: 230400, engine: "3.7L Twin-turbo Flat-six", horsepower: "640 hp", acceleration: "2.6 seconds", topSpeed: "330 km/h", drivetrain: "All-wheel drive", description: "A remarkably usable performance icon with supercar pace and everyday grand-touring ability.", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1100&q=85" },
	{ id: 8, brand: "McLaren", name: "750S", category: "Supercar", price: 324000, engine: "4.0L Twin-turbo V8", horsepower: "740 hp", acceleration: "2.8 seconds", topSpeed: "332 km/h", drivetrain: "Rear-wheel drive", description: "McLaren's lightest and most powerful series-production supercar brings precision to every input.", image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1100&q=85" },
	{ id: 9, brand: "McLaren", name: "Artura", category: "Hybrid Supercar", price: 237500, engine: "3.0L V6 Hybrid", horsepower: "690 hp", acceleration: "3.0 seconds", topSpeed: "330 km/h", drivetrain: "Rear-wheel drive", description: "A lightweight high-performance hybrid engineered around a carbon-fibre McLaren platform.", image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1100&q=85" },
	{ id: 10, brand: "McLaren", name: "765LT", category: "Supercar", price: 382500, engine: "4.0L Twin-turbo V8", horsepower: "755 hp", acceleration: "2.8 seconds", topSpeed: "330 km/h", drivetrain: "Rear-wheel drive", description: "A Longtail built for maximum engagement, with a stripped-back focus on road and track.", image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1100&q=85" },
	{ id: 11, brand: "Aston Martin", name: "DB12", category: "Luxury Sports Car", price: 245000, engine: "4.0L Twin-turbo V8", horsepower: "671 hp", acceleration: "3.6 seconds", topSpeed: "325 km/h", drivetrain: "Rear-wheel drive", description: "A super tourer balancing handcrafted luxury with an unexpectedly athletic edge.", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1100&q=85" },
	{ id: 12, brand: "Aston Martin", name: "Vantage", category: "Sports Car", price: 191000, engine: "4.0L Twin-turbo V8", horsepower: "656 hp", acceleration: "3.4 seconds", topSpeed: "325 km/h", drivetrain: "Rear-wheel drive", description: "A compact, muscular sports car that puts a confident V8 heartbeat right at the centre.", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1100&q=85" },
	{ id: 13, brand: "Bugatti", name: "Chiron", category: "Hypercar", price: 3300000, engine: "8.0L Quad-turbo W16", horsepower: "1,479 hp", acceleration: "2.4 seconds", topSpeed: "420 km/h", drivetrain: "All-wheel drive", description: "A landmark of hypercar engineering defined by immense output and meticulous French craftsmanship.", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1100&q=85" },
	{ id: 14, brand: "Bugatti", name: "Mistral", category: "Hypercar", price: 5000000, engine: "8.0L Quad-turbo W16", horsepower: "1,577 hp", acceleration: "2.4 seconds", topSpeed: "420 km/h", drivetrain: "All-wheel drive", description: "The ultimate roadster from Bugatti, celebrating the final chapter of its legendary W16.", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1100&q=85" },
	{ id: 15, brand: "Koenigsegg", name: "Jesko", category: "Hypercar", price: 3000000, engine: "5.0L Twin-turbo V8", horsepower: "1,603 hp", acceleration: "Not published", topSpeed: "Over 480 km/h*", drivetrain: "Rear-wheel drive", description: "A road-legal megacar designed around extreme downforce, speed, and Koenigsegg innovation.", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1100&q=85" },
	{ id: 16, brand: "Koenigsegg", name: "Gemera", category: "Hybrid Hypercar", price: 1700000, engine: "5.0L Twin-turbo V8 Hybrid", horsepower: "2,300 hp", acceleration: "Not published", topSpeed: "400 km/h", drivetrain: "All-wheel drive", description: "A four-seat megacar bringing long-distance usability to extraordinary hybrid performance.", image: "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?auto=format&fit=crop&w=1100&q=85" },
	{ id: 17, brand: "Pagani", name: "Huayra", category: "Hypercar", price: 2400000, engine: "6.0L Twin-turbo V12", horsepower: "827 hp", acceleration: "3.0 seconds", topSpeed: "383 km/h", drivetrain: "Rear-wheel drive", description: "A rolling work of art where bespoke materials and an AMG-sourced V12 meet.", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1100&q=85" },
	{ id: 18, brand: "Pagani", name: "Utopia", category: "Hypercar", price: 2500000, engine: "6.0L Twin-turbo V12", horsepower: "852 hp", acceleration: "Not published", topSpeed: "350 km/h", drivetrain: "Rear-wheel drive", description: "Pagani's purest expression of analog pleasure, available with a rare seven-speed manual.", image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1100&q=85" },
	{ id: 19, brand: "Mercedes-AMG", name: "GT 63 S E Performance", category: "Hybrid Sports Car", price: 199500, engine: "4.0L V8 Plug-in Hybrid", horsepower: "831 hp", acceleration: "2.8 seconds", topSpeed: "320 km/h", drivetrain: "All-wheel drive", description: "AMG's performance coupe pairs a handcrafted V8 with motorsport-inspired hybrid technology.", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1100&q=85" },
	{ id: 20, brand: "Audi", name: "R8 V10 performance quattro", category: "Sports Car", price: 209900, engine: "5.2L V10", horsepower: "602 hp", acceleration: "3.1 seconds", topSpeed: "331 km/h", drivetrain: "All-wheel drive", description: "Audi's final mid-engine V10 sports car combines quattro traction with a naturally aspirated soundtrack.", image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1100&q=85" }
];

const products = cars.map((car) => ({ ...car, name: `${car.brand} ${car.name}` }));

const formatPrice = (price) => `$${price.toLocaleString("en-US")}`;

function updateDateTime() {
	const dateTime = document.getElementById("dateTime");
	if (!dateTime) return;
	const now = new Date();
	const pad = (value) => String(value).padStart(2, "0");
	dateTime.textContent = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

function productCard(product, index) {
	return `<article class="product-card"><div class="card-image"><img src="${product.image}" alt="${product.name} sports car" loading="lazy"><span class="card-index">${String(index + 1).padStart(2, "0")}</span></div><div class="card-content"><p class="card-category">${product.category}</p><h3>${product.name}</h3><p class="card-description">${product.description}</p><div class="card-bottom"><span class="price">${formatPrice(product.price)}</span><button class="buy-button" type="button" data-buy-id="${product.id}"><i class="fa-solid fa-car"></i> Buy It Now</button></div></div></article>`;
}

function carCard(car, index) {
	return `<article class="car-card"><button class="car-image-button" type="button" data-details-id="${car.id}" aria-label="View details for ${car.brand} ${car.name}"><img src="${car.image}" alt="${car.brand} ${car.name} sports car"><span class="card-index">${String(index + 1).padStart(2, "0")}</span><span class="image-view">View details <i class="fa-solid fa-arrow-up-right-from-square"></i></span></button><div class="car-card-content"><p class="car-brand">${car.brand}</p><h3>${car.name}</h3><p class="card-category">${car.category}</p><div class="car-specs"><span><b>${car.horsepower}</b> Power</span><span><b>${car.acceleration}</b> 0–100 km/h</span><span><b>${car.topSpeed}</b> Top speed</span></div><div class="car-card-footer"><span class="price">${formatPrice(car.price)}<small> approx. starting price</small></span><div><button class="details-button" type="button" data-details-id="${car.id}">View details</button><button class="buy-button" type="button" data-buy-id="${car.id}"><i class="fa-solid fa-car"></i> Buy It Now</button></div></div></div></article>`;
}

function renderProducts(list = products, targetId = "productGrid") {
	const target = document.getElementById(targetId);
	if (!target) return;
	target.innerHTML = list.length ? list.map(productCard).join("") : `<p class="empty-state">No cars match your search. Try another name or category.</p>`;
	target.querySelectorAll("[data-buy-id]").forEach((button) => button.addEventListener("click", () => openPurchaseModal(Number(button.dataset.buyId))));
}

function filterProducts() {
	const brand = document.getElementById("brandFilter").value;
	const category = document.getElementById("categoryFilter").value;
	const search = document.getElementById("searchInput").value.toLowerCase().trim();
	const sort = document.getElementById("sortFilter").value;
	const filtered = [...cars].filter((car) => (brand === "All" || car.brand === brand) && (category === "All" || car.category === category) && `${car.brand} ${car.name}`.toLowerCase().includes(search));
	if (sort === "price-low") filtered.sort((a, b) => a.price - b.price);
	if (sort === "price-high") filtered.sort((a, b) => b.price - a.price);
	if (sort === "power-high") filtered.sort((a, b) => Number(b.horsepower.replace(/[^0-9]/g, "")) - Number(a.horsepower.replace(/[^0-9]/g, "")));
	if (sort === "speed-high") filtered.sort((a, b) => Number(b.topSpeed.replace(/[^0-9]/g, "")) - Number(a.topSpeed.replace(/[^0-9]/g, "")));
	renderGallery(filtered);
	document.getElementById("resultsCount").textContent = filtered.length ? `${filtered.length} ${filtered.length === 1 ? "car" : "cars"} found` : "No cars found. Try another search.";
}

function renderGallery(list) {
	const target = document.getElementById("carGallery");
	if (!target) return;
	target.innerHTML = list.length ? list.map(carCard).join("") : `<p class="empty-state">No cars found. Try another search.</p>`;
	target.querySelectorAll("[data-buy-id]").forEach((button) => button.addEventListener("click", () => openPurchaseModal(Number(button.dataset.buyId))));
	target.querySelectorAll("[data-details-id]").forEach((button) => button.addEventListener("click", () => openCarModal(Number(button.dataset.detailsId))));
}

function openCarModal(carId) {
	const car = cars.find((item) => item.id === carId);
	if (!car) return;
	document.getElementById("modalCarImage").src = car.image;
	document.getElementById("modalCarImage").alt = `${car.brand} ${car.name} sports car`;
	document.getElementById("modalCarBrand").textContent = car.brand;
	document.getElementById("modalCarName").textContent = car.name;
	document.getElementById("modalCarCategory").textContent = car.category;
	document.getElementById("modalCarDescription").textContent = car.description;
	document.getElementById("modalCarPrice").textContent = `${formatPrice(car.price)} approx. starting price`;
	document.getElementById("modalCarEngine").textContent = car.engine;
	document.getElementById("modalCarPower").textContent = car.horsepower;
	document.getElementById("modalCarAcceleration").textContent = car.acceleration;
	document.getElementById("modalCarSpeed").textContent = car.topSpeed;
	document.getElementById("modalCarDrive").textContent = car.drivetrain;
	document.getElementById("modalBuyButton").onclick = () => openPurchaseModal(car.id);
	const modal = document.getElementById("carModal");
	modal.classList.add("open");
	modal.setAttribute("aria-hidden", "false");
	document.body.classList.add("modal-open");
}

function closeCarModal() {
	const modal = document.getElementById("carModal");
	if (!modal) return;
	modal.classList.remove("open");
	modal.setAttribute("aria-hidden", "true");
	document.body.classList.remove("modal-open");
}

function ensurePurchaseModal() {
	if (document.getElementById("purchaseModal")) return;
	document.body.insertAdjacentHTML("beforeend", `<div class="purchase-modal" id="purchaseModal" aria-hidden="true"><div class="purchase-backdrop" data-close-purchase></div><div class="purchase-panel" role="dialog" aria-modal="true" aria-labelledby="purchaseTitle"><button class="modal-close" type="button" aria-label="Close purchase form" data-close-purchase><i class="fa-solid fa-xmark"></i></button><div class="purchase-summary"><img id="purchaseImage" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt=""><p class="eyebrow" id="purchaseBrand"></p><h2 id="purchaseTitle"></h2><p id="purchaseCategory"></p><p id="purchaseDescription"></p><strong id="purchasePrice"></strong></div><form class="purchase-form" id="purchaseForm"><p class="eyebrow">Secure your vehicle</p><h3>Purchase details</h3><label>Full Name<input name="fullName" type="text" required></label><label>Email<input name="email" type="email" required></label><label>Phone Number<input name="phone" type="tel" required></label><label>Address<textarea name="address" rows="3" required></textarea></label><label>Quantity<input name="quantity" id="purchaseQuantity" type="number" value="1" min="1" max="5" required></label><div class="purchase-total">Final price <strong id="purchaseTotal"></strong></div><button class="button button-primary" type="submit">Confirm Purchase <i class="fa-solid fa-check"></i></button></form></div></div>`);
	document.querySelectorAll("[data-close-purchase]").forEach((element) => element.addEventListener("click", closePurchaseModal));
	document.getElementById("purchaseForm").addEventListener("submit", confirmPurchase);
	document.getElementById("purchaseQuantity").addEventListener("input", updatePurchaseTotal);
}

let selectedCar;

function openPurchaseModal(carId) {
	selectedCar = cars.find((car) => car.id === carId);
	if (!selectedCar) return;
	document.getElementById("purchaseImage").src = selectedCar.image;
	document.getElementById("purchaseImage").alt = `${selectedCar.brand} ${selectedCar.name} sports car`;
	document.getElementById("purchaseBrand").textContent = selectedCar.brand;
	document.getElementById("purchaseTitle").textContent = selectedCar.name;
	document.getElementById("purchaseCategory").textContent = selectedCar.category;
	document.getElementById("purchaseDescription").textContent = selectedCar.description;
	document.getElementById("purchasePrice").textContent = `${formatPrice(selectedCar.price)} approx. starting price`;
	document.getElementById("purchaseQuantity").value = 1;
	updatePurchaseTotal();
	document.getElementById("purchaseModal").classList.add("open");
	document.getElementById("purchaseModal").setAttribute("aria-hidden", "false");
	document.body.classList.add("modal-open");
}

function updatePurchaseTotal() {
	if (!selectedCar) return;
	const quantity = Number(document.getElementById("purchaseQuantity").value) || 1;
	document.getElementById("purchaseTotal").textContent = formatPrice(selectedCar.price * quantity);
}

function closePurchaseModal() {
	const modal = document.getElementById("purchaseModal");
	if (!modal) return;
	modal.classList.remove("open");
	modal.setAttribute("aria-hidden", "true");
	document.getElementById("purchaseForm").reset();
	document.body.classList.remove("modal-open");
}

function confirmPurchase(event) {
	event.preventDefault();
	const form = event.currentTarget;
	if (!form.checkValidity()) { form.reportValidity(); return; }
	Swal.fire({ icon: "success", title: "Purchase Confirmed!", text: `Your order for ${selectedCar.brand} ${selectedCar.name} has been successfully placed.`, confirmButtonColor: "#ef3d32", background: "#171b1f", color: "#f2f1ed" });
	closePurchaseModal();
}

function validateContactForm(event) {
	event.preventDefault();
	const form = event.currentTarget;
	if (!form.checkValidity()) { form.reportValidity(); return; }
	Swal.fire({ title: "Message Sent Successfully!", text: "Our team will be in touch shortly.", icon: "success", confirmButtonColor: "#ef3d32", background: "#171b1f", color: "#f2f1ed" });
	form.reset();
}

function subscribeNewsletter(event) {
	event.preventDefault();
	const email = event.currentTarget.querySelector("input");
	if (!email.checkValidity()) { email.reportValidity(); return; }
	Swal.fire({ title: "You're on the list.", text: "Aureon news is headed your way.", icon: "success", confirmButtonColor: "#ef3d32", background: "#171b1f", color: "#f2f1ed" });
	event.currentTarget.reset();
}

function setupNavigation() {
	const toggle = document.querySelector(".menu-toggle");
	const navigation = document.querySelector(".site-nav");
	if (!toggle || !navigation) return;
	toggle.addEventListener("click", () => { const open = navigation.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); });
}

document.addEventListener("DOMContentLoaded", () => {
	updateDateTime();
	setInterval(updateDateTime, 1000);
	ensurePurchaseModal();
	document.querySelectorAll(".current-year").forEach((year) => { year.textContent = new Date().getFullYear(); });
	setupNavigation();
	if (document.getElementById("featuredProducts")) renderProducts(products.slice(0, 6), "featuredProducts");
	if (document.getElementById("carGallery")) { filterProducts(); ["brandFilter", "categoryFilter", "sortFilter"].forEach((id) => document.getElementById(id).addEventListener("change", filterProducts)); document.getElementById("searchInput").addEventListener("input", filterProducts); document.querySelectorAll("[data-close-modal]").forEach((element) => element.addEventListener("click", closeCarModal)); document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeCarModal(); closePurchaseModal(); } }); }
	document.querySelectorAll(".contact-form").forEach((form) => form.addEventListener("submit", validateContactForm));
	document.querySelectorAll(".newsletter-form").forEach((form) => form.addEventListener("submit", subscribeNewsletter));
});
