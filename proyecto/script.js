/* APEX Motors — script.js */

const brandsData = [
  { id: 'mercedes', name: 'Mercedes-Benz', logo: 'MB', count: 4 },
  { id: 'bmw', name: 'BMW', logo: 'BMW', count: 3 },
  { id: 'porsche', name: 'Porsche', logo: 'Porsche', count: 3 },
  { id: 'audi', name: 'Audi', logo: 'Audi', count: 4 },
  { id: 'tesla', name: 'Tesla', logo: 'Tesla', count: 4 },
  { id: 'jaguar', name: 'Jaguar', logo: 'Jaguar', count: 2 },
];

const vehiclesData = [
  {
    id: 'mb-s-class',
    brandId: 'mercedes',
    name: 'S-Class',
    model: 'S 500 4MATIC',
    year: 2024,
    price: 5400000,
    image: 'https://source.unsplash.com/featured/640x360/?mercedes-s-class',
    tag: 'Destacado',
    description: 'Lujo supremo y tecnología de última generación en cada detalle.',
    specs: { potencia: '435 CV', autonomia: '990 km', motor: 'V8', cambio: 'Automático' },
  },
  {
    id: 'mb-gle',
    brandId: 'mercedes',
    name: 'GLE',
    model: 'GLE 450',
    year: 2024,
    price: 2850000,
    image: 'https://source.unsplash.com/featured/640x360/?mercedes-gle',
    tag: 'Nuevo',
    description: 'SUV premium con rendimiento dinámico y confort de primera.',
    specs: { potencia: '367 CV', autonomia: '820 km', motor: 'I6', cambio: 'Automático' },
  },
  {
    id: 'mb-a35',
    brandId: 'mercedes',
    name: 'A35',
    model: 'A 35 AMG',
    year: 2024,
    price: 2100000,
    image: 'https://source.unsplash.com/featured/640x360/?mercedes-a35-amg',
    tag: 'Oferta',
    description: 'Compacto deportivo con el ADN de AMG y mucha presencia urbana.',
    specs: { potencia: '306 CV', autonomia: '760 km', motor: 'I4', cambio: 'Automático' },
  },
  {
    id: 'mb-gls',
    brandId: 'mercedes',
    name: 'GLS',
    model: '600 Maybach',
    year: 2024,
    price: 8600000,
    image: 'https://source.unsplash.com/featured/640x360/?mercedes-gls',
    tag: 'Más vendido',
    description: 'La máxima expresión del SUV familiar con lujo personalizado.',
    specs: { potencia: '557 CV', autonomia: '900 km', motor: 'V8', cambio: 'Automático' },
  },
  {
    id: 'bmw-m3',
    brandId: 'bmw',
    name: 'M3',
    model: 'Competition',
    year: 2024,
    price: 3200000,
    image: 'https://source.unsplash.com/featured/640x360/?bmw-m3',
    tag: 'Oferta',
    description: 'Sedán deportivo con aceleración brutal y manejo preciso.',
    specs: { potencia: '503 CV', autonomia: '730 km', motor: 'I6', cambio: 'Automático' },
  },
  {
    id: 'bmw-x5',
    brandId: 'bmw',
    name: 'X5',
    model: 'xDrive45e',
    year: 2025,
    price: 3150000,
    image: 'https://source.unsplash.com/featured/640x360/?bmw-x5',
    tag: 'Nuevo',
    description: 'SUV híbrido de alto rendimiento con gran espacio para la familia.',
    specs: { potencia: '394 CV', autonomia: '980 km', motor: 'Híbrido', cambio: 'Automático' },
  },
  {
    id: 'bmw-i4',
    brandId: 'bmw',
    name: 'i4',
    model: 'eDrive40',
    year: 2024,
    price: 2780000,
    image: 'https://source.unsplash.com/featured/640x360/?bmw-i4',
    tag: 'Destacado',
    description: 'Eléctrico deportivo con diseño elegante y conducción silenciosa.',
    specs: { potencia: '340 CV', autonomia: '590 km', motor: 'Eléctrico', cambio: 'Automático' },
  },
  {
    id: 'porsche-911',
    brandId: 'porsche',
    name: '911 Carrera',
    model: 'S',
    year: 2024,
    price: 10200000,
    image: 'https://source.unsplash.com/featured/640x360/?porsche-911',
    tag: 'Más vendido',
    description: 'Ícono deportivo con motor trasero y aceleración legendaria.',
    specs: { potencia: '443 CV', autonomia: '680 km', motor: 'Bóxer', cambio: 'Automático' },
  },
  {
    id: 'porsche-cayenne',
    brandId: 'porsche',
    name: 'Cayenne',
    model: 'Turbo',
    year: 2024,
    price: 7800000,
    image: 'https://source.unsplash.com/featured/640x360/?porsche-cayenne',
    tag: 'Nuevo',
    description: 'SUV de lujo con respuesta inmediata y tecnología deportiva.',
    specs: { potencia: '549 CV', autonomia: '810 km', motor: 'V8', cambio: 'Automático' },
  },
  {
    id: 'porsche-taycan',
    brandId: 'porsche',
    name: 'Taycan',
    model: '4S',
    year: 2025,
    price: 6900000,
    image: 'https://source.unsplash.com/featured/640x360/?porsche-taycan',
    tag: 'Oferta',
    description: 'Eléctrico premium con aceleración instantánea y manejo preciso.',
    specs: { potencia: '484 CV', autonomia: '450 km', motor: 'Eléctrico', cambio: 'Automático' },
  },
  {
    id: 'audi-rs7',
    brandId: 'audi',
    name: 'RS 7',
    model: 'Sportback',
    year: 2024,
    price: 6500000,
    image: 'https://source.unsplash.com/featured/640x360/?audi-rs7',
    tag: 'Destacado',
    description: 'Gran turismo con potencia extrema y líneas esculturales.',
    specs: { potencia: '600 CV', autonomia: '770 km', motor: 'V8', cambio: 'Automático' },
  },
  {
    id: 'audi-q8',
    brandId: 'audi',
    name: 'Q8',
    model: '55 TFSI',
    year: 2024,
    price: 3900000,
    image: 'https://source.unsplash.com/featured/640x360/?audi-q8',
    tag: 'Nuevo',
    description: 'SUV coupé con interior amplio y tecnología premium.',
    specs: { potencia: '340 CV', autonomia: '930 km', motor: 'V6', cambio: 'Automático' },
  },
  {
    id: 'audi-e-tron',
    brandId: 'audi',
    name: 'e-tron GT',
    model: 'RS',
    year: 2024,
    price: 7200000,
    image: 'https://source.unsplash.com/featured/640x360/?audi-e-tron',
    tag: 'Oferta',
    description: 'Eléctrico de alto rendimiento con diseño futurista.',
    specs: { potencia: '646 CV', autonomia: '480 km', motor: 'Eléctrico', cambio: 'Automático' },
  },
  {
    id: 'audi-a6',
    brandId: 'audi',
    name: 'A6',
    model: '45 TFSI',
    year: 2024,
    price: 2900000,
    image: 'https://source.unsplash.com/featured/640x360/?audi-a6',
    tag: 'Más vendido',
    description: 'Sedán ejecutivo con confort excepcional y tecnología conectada.',
    specs: { potencia: '265 CV', autonomia: '980 km', motor: 'I4', cambio: 'Automático' },
  },
  {
    id: 'tesla-model-s',
    brandId: 'tesla',
    name: 'Model S',
    model: 'Plaid',
    year: 2025,
    price: 8200000,
    image: 'https://source.unsplash.com/featured/640x360/?tesla-model-s',
    tag: 'Destacado',
    description: 'Sedán eléctrico con aceleración superior y alta autonomía.',
    specs: { potencia: '1020 CV', autonomia: '650 km', motor: 'Eléctrico', cambio: 'Automático' },
  },
  {
    id: 'tesla-model-y',
    brandId: 'tesla',
    name: 'Model Y',
    model: 'Long Range',
    year: 2024,
    price: 4300000,
    image: 'https://source.unsplash.com/featured/640x360/?tesla-model-y',
    tag: 'Nuevo',
    description: 'SUV eléctrico con gran espacio interior y conectividad avanzada.',
    specs: { potencia: '384 CV', autonomia: '530 km', motor: 'Eléctrico', cambio: 'Automático' },
  },
  {
    id: 'tesla-model-3',
    brandId: 'tesla',
    name: 'Model 3',
    model: 'Performance',
    year: 2024,
    price: 3350000,
    image: 'https://source.unsplash.com/featured/640x360/?tesla-model-3',
    tag: 'Oferta',
    description: 'Compacto eléctrico con estilo moderno y autonomía eficiente.',
    specs: { potencia: '450 CV', autonomia: '570 km', motor: 'Eléctrico', cambio: 'Automático' },
  },
  {
    id: 'tesla-cybertruck',
    brandId: 'tesla',
    name: 'Cybertruck',
    model: 'Dual Motor',
    year: 2025,
    price: 7600000,
    image: 'https://source.unsplash.com/featured/640x360/?tesla-cybertruck',
    tag: 'Más vendido',
    description: 'Pickup eléctrica con diseño audaz y capacidades todoterreno.',
    specs: { potencia: '680 CV', autonomia: '640 km', motor: 'Eléctrico', cambio: 'Automático' },
  },
  {
    id: 'jaguar-f-type',
    brandId: 'jaguar',
    name: 'F-Type',
    model: 'P450',
    year: 2024,
    price: 5200000,
    image: 'https://source.unsplash.com/featured/640x360/?jaguar-f-type',
    tag: 'Oferta',
    description: 'Coupé deportivo británico con diseño icónico y sonido dramático.',
    specs: { potencia: '450 CV', autonomia: '710 km', motor: 'V8', cambio: 'Automático' },
  },
  {
    id: 'jaguar-i-pace',
    brandId: 'jaguar',
    name: 'I-PACE',
    model: 'EV',
    year: 2024,
    price: 4400000,
    image: 'https://source.unsplash.com/featured/640x360/?jaguar-i-pace',
    tag: 'Nuevo',
    description: 'SUV eléctrico con comportamiento dinámico y acabado lujoso.',
    specs: { potencia: '400 CV', autonomia: '470 km', motor: 'Eléctrico', cambio: 'Automático' },
  },
];

const state = {
  theme: 'light',
  searchTerm: '',
  selectedBrand: '',
  selectedSort: 'default',
  selectedTag: '',
  favorites: [],
  cart: [],
};

const elements = {};

const formatPrice = (value) => {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(value);
};

const saveState = () => {
  localStorage.setItem('apexTheme', state.theme);
  localStorage.setItem('apexFavorites', JSON.stringify(state.favorites));
  localStorage.setItem('apexCart', JSON.stringify(state.cart));
};

const loadState = () => {
  const savedTheme = localStorage.getItem('apexTheme');
  const savedFavorites = localStorage.getItem('apexFavorites');
  const savedCart = localStorage.getItem('apexCart');

  if (savedTheme === 'dark' || savedTheme === 'light') {
    state.theme = savedTheme;
  }
  if (savedFavorites) {
    try { state.favorites = JSON.parse(savedFavorites); } catch (error) { state.favorites = []; }
  }
  if (savedCart) {
    try { state.cart = JSON.parse(savedCart); } catch (error) { state.cart = []; }
  }
};

const getBrandById = (id) => brandsData.find((brand) => brand.id === id) || { name: 'Desconocido', logo: '??' };

const getVehicleImage = (vehicle) => vehicle.image || `https://picsum.photos/seed/${vehicle.id}/640/360`;

const getFilteredVehicles = () => {
  return vehiclesData.filter((vehicle) => {
    const matchesSearch = [vehicle.name, vehicle.model, getBrandById(vehicle.brandId).name]
      .join(' ')
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());

    const matchesBrand = state.selectedBrand ? vehicle.brandId === state.selectedBrand : true;
    const matchesTag = state.selectedTag ? vehicle.tag === state.selectedTag : true;
    return matchesSearch && matchesBrand && matchesTag;
  }).sort((a, b) => {
    if (state.selectedSort === 'price-asc') return a.price - b.price;
    if (state.selectedSort === 'price-desc') return b.price - a.price;
    if (state.selectedSort === 'name-asc') return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
    return 0;
  });
};

const openElement = (element) => { element?.classList.add('open'); };
const closeElement = (element) => { element?.classList.remove('open'); };

const showToast = (message) => {
  const toast = elements.toast;
  toast.textContent = message;
  toast.classList.add('show');

  window.clearTimeout(toast.hideTimer);
  toast.hideTimer = window.setTimeout(() => toast.classList.remove('show'), 2800);
};

const updateCounts = () => {
  const totalFavorites = state.favorites.length;
  const totalCartItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  elements.favCount.textContent = totalFavorites;
  elements.cartCount.textContent = totalCartItems;
};

const populateBrandFilter = () => {
  const select = elements.brandFilter;
  const footerList = elements.footerBrands;
  const existingOptions = new Set([...select.options].map((option) => option.value));

  brandsData.forEach((brand) => {
    if (!existingOptions.has(brand.id)) {
      const option = document.createElement('option');
      option.value = brand.id;
      option.textContent = brand.name;
      select.appendChild(option);
    }
    const listItem = document.createElement('li');
    listItem.textContent = brand.name;
    footerList.appendChild(listItem);
  });
};

const renderBrandCards = () => {
  const container = elements.brandsGrid;
  const activeBrand = state.selectedBrand;
  container.innerHTML = '';

  brandsData.forEach((brand) => {
    const card = document.createElement('button');
    card.className = 'brand-card';
    if (brand.id === activeBrand) card.classList.add('active');
    card.type = 'button';
    card.dataset.brand = brand.id;
    card.innerHTML = `
      <span class="brand-card__logo">${brand.logo}</span>
      <span class="brand-card__name">${brand.name}</span>
      <span class="brand-card__count">${brand.count} modelos</span>
    `;
    card.addEventListener('click', () => {
      state.selectedBrand = state.selectedBrand === brand.id ? '' : brand.id;
      elements.brandFilter.value = state.selectedBrand;
      renderBrandCards();
      renderVehicles();
      renderBrandStats();
    });
    container.appendChild(card);
  });
};

const renderBrandStats = () => {
  const container = elements.brandStats;
  container.innerHTML = '';
  const totalVehicles = vehiclesData.length;

  brandsData.forEach((brand) => {
    const vehicleCount = vehiclesData.filter((vehicle) => vehicle.brandId === brand.id).length;
    const percentage = Math.round((vehicleCount / totalVehicles) * 100);

    const stat = document.createElement('div');
    stat.className = 'stat-bar';
    stat.innerHTML = `
      <div class="stat-bar__label">
        <span>${brand.name}</span>
        <span>${vehicleCount}</span>
      </div>
      <div class="stat-bar__track"><div class="stat-bar__fill" style="width: ${percentage}%"></div></div>
    `;
    container.appendChild(stat);
  });
};

const renderVehicles = () => {
  const grid = elements.vehiclesGrid;
  const vehicles = getFilteredVehicles();
  grid.innerHTML = '';

  elements.resultsInfo.textContent = `Mostrando ${vehicles.length} de ${vehiclesData.length} vehículos`;
  elements.noResults.classList.toggle('visible', vehicles.length === 0);

  if (!vehicles.length) {
    return;
  }

  vehicles.forEach((vehicle) => {
    const brand = getBrandById(vehicle.brandId);
    const card = document.createElement('article');
    card.className = 'vehicle-card';
    card.innerHTML = `
      <div class="vehicle-card__img-wrap">
        <img class="vehicle-svg" src="${getVehicleImage(vehicle)}" alt="${vehicle.name} ${vehicle.model}" />
        <div class="vehicle-card__tags">
          <span class="tag tag--${vehicle.tag.toLowerCase().replace(/\s/g, '')}">${vehicle.tag}</span>
        </div>
        <button type="button" class="fav-btn ${state.favorites.includes(vehicle.id) ? 'active' : ''}" aria-label="Agregar a favoritos" data-vehicle-id="${vehicle.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="vehicle-card__body">
        <span class="vehicle-card__brand">${brand.name}</span>
        <h3 class="vehicle-card__name">${vehicle.name}</h3>
        <span class="vehicle-card__year">${vehicle.year} · ${vehicle.model}</span>
        <p class="vehicle-card__desc">${vehicle.description}</p>
        <div class="vehicle-card__footer">
          <span class="vehicle-card__price">${formatPrice(vehicle.price)}</span>
          <div class="vehicle-card__actions">
            <button type="button" class="btn btn--detail" data-action="detail" data-vehicle-id="${vehicle.id}">Ver detalle</button>
            <button type="button" class="btn btn--add" data-action="add" data-vehicle-id="${vehicle.id}">Agregar</button>
          </div>
        </div>
      </div>
    `;

    const favoriteButton = card.querySelector('.fav-btn');
    favoriteButton?.addEventListener('click', () => toggleFavorite(vehicle.id, favoriteButton));

    card.querySelector('[data-action="detail"]')?.addEventListener('click', () => openVehicleModal(vehicle.id));
    card.querySelector('[data-action="add"]')?.addEventListener('click', () => addToCart(vehicle.id));

    grid.appendChild(card);
  });
};

const resetFilters = () => {
  state.searchTerm = '';
  state.selectedBrand = '';
  state.selectedSort = 'default';
  state.selectedTag = '';
  elements.searchInput.value = '';
  elements.brandFilter.value = '';
  elements.sortFilter.value = 'default';
  elements.tagFilter.value = '';
  renderBrandCards();
  renderVehicles();
  renderBrandStats();
};

const toggleFavorite = (vehicleId, button) => {
  const index = state.favorites.indexOf(vehicleId);
  if (index >= 0) {
    state.favorites.splice(index, 1);
    button?.classList.remove('active');
    showToast('Eliminado de favoritos');
  } else {
    state.favorites.push(vehicleId);
    button?.classList.add('active');
    showToast('Agregado a favoritos');
  }
  updateCounts();
  saveState();
};

const renderFavoritesModal = () => {
  const content = elements.favContent;
  content.innerHTML = '';
  if (!state.favorites.length) {
    content.innerHTML = '<p class="fav-empty">Aún no agregaste favoritos. Busca el auto que más te guste y añádelo aquí.</p>';
    return;
  }

  const list = document.createElement('div');
  list.className = 'fav-grid';

  state.favorites.forEach((vehicleId) => {
    const vehicle = vehiclesData.find((item) => item.id === vehicleId);
    if (!vehicle) return;
    const brand = getBrandById(vehicle.brandId);

    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'fav-item';
    item.innerHTML = `
      <span class="fav-item__brand">${brand.name}</span>
      <span class="fav-item__name">${vehicle.name}</span>
      <span class="fav-item__price">${formatPrice(vehicle.price)}</span>
    `;
    item.addEventListener('click', () => {
      closeFavorites();
      openVehicleModal(vehicle.id);
    });
    list.appendChild(item);
  });

  content.appendChild(list);
};

const openFavorites = () => {
  renderFavoritesModal();
  openElement(elements.favOverlay);
  elements.favOverlay.setAttribute('aria-hidden', 'false');
};

const closeFavorites = () => {
  closeElement(elements.favOverlay);
  elements.favOverlay.setAttribute('aria-hidden', 'true');
};

const addToCart = (vehicleId) => {
  const cartItem = state.cart.find((item) => item.id === vehicleId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    state.cart.push({ id: vehicleId, quantity: 1 });
  }
  updateCounts();
  saveState();
  renderCart();
  showToast('Vehículo agregado al carrito');
};

const removeFromCart = (vehicleId) => {
  const item = state.cart.find((entry) => entry.id === vehicleId);
  if (!item) return;
  state.cart = state.cart.filter((entry) => entry.id !== vehicleId);
  updateCounts();
  saveState();
  renderCart();
  showToast('Vehículo removido del carrito');
};

const updateCartQuantity = (vehicleId, amount) => {
  const item = state.cart.find((entry) => entry.id === vehicleId);
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + amount);
  saveState();
  updateCounts();
  renderCart();
};

const renderCart = () => {
  const body = elements.cartBody;
  const footer = elements.cartFooter;
  body.innerHTML = '';

  if (!state.cart.length) {
    body.innerHTML = `
      <div class="cart__empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
        <p>Tu carrito está vacío. Agrega un vehículo para continuar.</p>
      </div>
    `;
    footer.innerHTML = `
      <div class="cart__total-row">
        <span class="cart__total-label">Total</span>
        <span class="cart__total-value">${formatPrice(0)}</span>
      </div>
      <button class="btn btn--outline btn--full" type="button" disabled>Ir al pago</button>
    `;
    return;
  }

  let total = 0;
  state.cart.forEach((entry) => {
    const vehicle = vehiclesData.find((item) => item.id === entry.id);
    if (!vehicle) return;
    const subtotal = vehicle.price * entry.quantity;
    total += subtotal;

    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <div class="cart-item__img">
        <svg viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="8" width="36" height="14" rx="4" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="24" r="3" fill="currentColor"/><circle cx="28" cy="24" r="3" fill="currentColor"/></svg>
      </div>
      <div class="cart-item__info">
        <span class="cart-item__brand">${getBrandById(vehicle.brandId).name}</span>
        <span class="cart-item__name">${vehicle.name}</span>
        <span class="cart-item__price">${formatPrice(vehicle.price)}</span>
        <div class="cart-item__controls">
          <button type="button" class="qty-btn" data-action="decrease" data-vehicle-id="${vehicle.id}">-</button>
          <span class="qty-display">${entry.quantity}</span>
          <button type="button" class="qty-btn" data-action="increase" data-vehicle-id="${vehicle.id}">+</button>
          <button type="button" class="remove-btn" data-action="remove" data-vehicle-id="${vehicle.id}" aria-label="Eliminar vehículo del carrito">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    `;

    item.querySelector('[data-action="decrease"]')?.addEventListener('click', () => updateCartQuantity(vehicle.id, -1));
    item.querySelector('[data-action="increase"]')?.addEventListener('click', () => updateCartQuantity(vehicle.id, 1));
    item.querySelector('[data-action="remove"]')?.addEventListener('click', () => removeFromCart(vehicle.id));

    body.appendChild(item);
  });

  footer.innerHTML = `
    <div class="cart__total-row">
      <span class="cart__total-label">Total</span>
      <span class="cart__total-value">${formatPrice(total)}</span>
    </div>
    <button class="btn btn--primary btn--full" type="button" id="checkoutButton">Ir al pago</button>
  `;

  document.getElementById('checkoutButton')?.addEventListener('click', openCheckout);
};

const openCart = () => {
  renderCart();
  openElement(elements.cartOverlay);
  openElement(elements.cart);
  elements.cartOverlay.setAttribute('aria-hidden', 'false');
};

const closeCart = () => {
  closeElement(elements.cartOverlay);
  closeElement(elements.cart);
  elements.cartOverlay.setAttribute('aria-hidden', 'true');
};

const renderVehicleModal = (vehicle) => {
  const brand = getBrandById(vehicle.brandId);
  const content = elements.modalContent;
  content.innerHTML = `
    <div class="modal-vehicle__header">
      <span class="modal-vehicle__brand">${brand.name}</span>
      <h2 class="modal-vehicle__name">${vehicle.name} · ${vehicle.model}</h2>
      <span class="modal-vehicle__year">${vehicle.year}</span>
    </div>
    <div class="modal-vehicle__img">
      <img src="${getVehicleImage(vehicle)}" alt="${vehicle.name} ${vehicle.model}" />
    </div>
    <p class="modal-vehicle__desc">${vehicle.description}</p>
    <div class="modal-vehicle__specs">
      ${Object.entries(vehicle.specs).map(([label, value]) => `
        <div class="spec-item">
          <span class="spec-item__label">${label}</span>
          <span class="spec-item__value">${value}</span>
        </div>
      `).join('')}
    </div>
    <div class="modal-vehicle__footer">
      <div>
        <p class="modal-vehicle__price">${formatPrice(vehicle.price)}</p>
      </div>
      <button type="button" class="btn btn--add" id="modalAddButton">Agregar al carrito</button>
    </div>
  `;

  document.getElementById('modalAddButton')?.addEventListener('click', () => {
    addToCart(vehicle.id);
    closeModal();
  });
};

const openVehicleModal = (vehicleId) => {
  const vehicle = vehiclesData.find((item) => item.id === vehicleId);
  if (!vehicle) return;
  renderVehicleModal(vehicle);
  openElement(elements.modalOverlay);
  elements.modalOverlay.setAttribute('aria-hidden', 'false');
};

const closeModal = () => {
  closeElement(elements.modalOverlay);
  elements.modalOverlay.setAttribute('aria-hidden', 'true');
};

const renderCheckoutModal = () => {
  const content = elements.checkoutContent;
  if (!state.cart.length) {
    content.innerHTML = '<p>No hay vehículos en el carrito para procesar la compra.</p>';
    return;
  }

  let total = 0;
  const rows = state.cart.map((entry) => {
    const vehicle = vehiclesData.find((item) => item.id === entry.id);
    if (!vehicle) return '';
    const subtotal = vehicle.price * entry.quantity;
    total += subtotal;
    return `
      <div class="checkout-summary-item">
        <span>${vehicle.name} x${entry.quantity}</span>
        <strong>${formatPrice(subtotal)}</strong>
      </div>
    `;
  }).join('');

  content.innerHTML = `
    <h2 class="checkout-title">Resumen de compra</h2>
    <div class="checkout-summary">
      ${rows}
      <div class="checkout-summary-total">
        <span>Total</span>
        <strong>${formatPrice(total)}</strong>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label" for="checkoutName">Nombre completo</label>
      <input id="checkoutName" class="input" type="text" placeholder="María Pérez" />
    </div>
    <div class="form-group">
      <label class="form-label" for="checkoutEmail">Email</label>
      <input id="checkoutEmail" class="input" type="email" placeholder="correo@ejemplo.com" />
    </div>
    <div class="form-group">
      <label class="form-label" for="checkoutPhone">Teléfono</label>
      <input id="checkoutPhone" class="input" type="tel" placeholder="011 1234-5678" />
    </div>
    <button class="btn btn--primary btn--full" id="confirmCheckout" type="button">Confirmar compra</button>
  `;

  document.getElementById('confirmCheckout')?.addEventListener('click', () => {
    state.cart = [];
    saveState();
    updateCounts();
    renderCart();
    closeCheckout();
    showToast('Compra confirmada. ¡Gracias por elegir APEX Motors!');
  });
};

const openCheckout = () => {
  renderCheckoutModal();
  openElement(elements.checkoutOverlay);
  elements.checkoutOverlay.setAttribute('aria-hidden', 'false');
};

const closeCheckout = () => {
  closeElement(elements.checkoutOverlay);
  elements.checkoutOverlay.setAttribute('aria-hidden', 'true');
};

const applyTheme = () => {
  document.documentElement.setAttribute('data-theme', state.theme);
  elements.themeToggle.setAttribute('aria-pressed', state.theme === 'dark');
};

const toggleTheme = () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  saveState();
};

const setupHamburger = () => {
  elements.hamburger.addEventListener('click', () => {
    const isOpen = elements.nav.classList.toggle('open');
    elements.hamburger.classList.toggle('open', isOpen);
    elements.hamburger.setAttribute('aria-expanded', String(isOpen));
  });
};

const setupOverlayClick = () => {
  elements.cartOverlay.addEventListener('click', closeCart);
  elements.modalOverlay.addEventListener('click', (event) => {
    if (event.target === elements.modalOverlay) closeModal();
  });
  elements.checkoutOverlay.addEventListener('click', (event) => {
    if (event.target === elements.checkoutOverlay) closeCheckout();
  });
  elements.favOverlay.addEventListener('click', (event) => {
    if (event.target === elements.favOverlay) closeFavorites();
  });
};

const setupKeyboardControls = () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
      closeCart();
      closeCheckout();
      closeFavorites();
    }
  });
};

const init = () => {
  elements.toast = document.getElementById('toast');
  elements.brandsGrid = document.getElementById('brandsGrid');
  elements.brandStats = document.getElementById('brandStats');
  elements.vehiclesGrid = document.getElementById('vehiclesGrid');
  elements.resultsInfo = document.getElementById('resultsInfo');
  elements.noResults = document.getElementById('noResults');
  elements.searchInput = document.getElementById('searchInput');
  elements.brandFilter = document.getElementById('brandFilter');
  elements.sortFilter = document.getElementById('sortFilter');
  elements.tagFilter = document.getElementById('tagFilter');
  elements.clearFilters = document.getElementById('clearFilters');
  elements.clearFilters2 = document.getElementById('clearFilters2');
  elements.favCount = document.getElementById('favCount');
  elements.cartCount = document.getElementById('cartCount');
  elements.favBtn = document.getElementById('favBtn');
  elements.cartBtn = document.getElementById('cartBtn');
  elements.cartOverlay = document.getElementById('cartOverlay');
  elements.cart = document.getElementById('cart');
  elements.cartBody = document.getElementById('cartBody');
  elements.cartFooter = document.getElementById('cartFooter');
  elements.closeCart = document.getElementById('closeCart');
  elements.modalOverlay = document.getElementById('modalOverlay');
  elements.modalContent = document.getElementById('modalContent');
  elements.closeModal = document.getElementById('closeModal');
  elements.checkoutOverlay = document.getElementById('checkoutOverlay');
  elements.checkoutContent = document.getElementById('checkoutContent');
  elements.closeCheckout = document.getElementById('closeCheckout');
  elements.favOverlay = document.getElementById('favOverlay');
  elements.favContent = document.getElementById('favContent');
  elements.closeFav = document.getElementById('closeFav');
  elements.footerBrands = document.getElementById('footerBrands');
  elements.themeToggle = document.getElementById('themeToggle');
  elements.hamburger = document.getElementById('hamburger');
  elements.nav = document.getElementById('nav');

  loadState();
  applyTheme();
  populateBrandFilter();
  renderBrandCards();
  renderBrandStats();
  renderVehicles();
  updateCounts();
  renderCart();

  elements.searchInput.addEventListener('input', (event) => {
    state.searchTerm = event.target.value;
    renderVehicles();
  });

  elements.brandFilter.addEventListener('change', (event) => {
    state.selectedBrand = event.target.value;
    renderBrandCards();
    renderVehicles();
  });

  elements.sortFilter.addEventListener('change', (event) => {
    state.selectedSort = event.target.value;
    renderVehicles();
  });

  elements.tagFilter.addEventListener('change', (event) => {
    state.selectedTag = event.target.value;
    renderVehicles();
  });

  elements.clearFilters.addEventListener('click', resetFilters);
  elements.clearFilters2.addEventListener('click', resetFilters);

  elements.favBtn.addEventListener('click', openFavorites);
  elements.closeFav.addEventListener('click', closeFavorites);
  elements.cartBtn.addEventListener('click', openCart);
  elements.closeCart.addEventListener('click', closeCart);

  elements.themeToggle.addEventListener('click', toggleTheme);
  elements.closeModal.addEventListener('click', closeModal);
  elements.closeCheckout.addEventListener('click', closeCheckout);

  setupHamburger();
  setupOverlayClick();
  setupKeyboardControls();
};

window.addEventListener('DOMContentLoaded', init);
