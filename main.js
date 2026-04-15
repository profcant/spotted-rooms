// Spotted Rooms Perugia - Main JavaScript

// Database delle stanze disponibili
const stanze = [
  {
    id: 1,
    lat: 43.1121,
    lng: 12.3888,
    zona: "Centro",
    via: "Via delle Cantine",
    prezzo: 280,
    genere: "F",
    inquilini: 2,
    mood: "Tranquilla",
    durata: "Tempo indeterminato",
    tags: ["No Fumatori", "Silenziosa"],
    link: "#",
    instagram: "@spottedperugia",
    distanzaUni: "1.2 km"
  },
  {
    id: 2,
    lat: 43.1160,
    lng: 12.3850,
    zona: "Elce",
    via: "Via Pascoli",
    prezzo: 320,
    genere: "M",
    inquilini: 3,
    mood: "Social",
    durata: "3 mesi",
    tags: ["Pet Friendly", "Social"],
    link: "#",
    instagram: "@spottedperugia",
    distanzaUni: "0.8 km"
  },
  {
    id: 3,
    lat: 43.1020,
    lng: 12.3500,
    zona: "San Sisto",
    via: "Via Donizetti",
    prezzo: 240,
    genere: "Entrambi",
    inquilini: 1,
    mood: "Internazionale",
    durata: "Fino a tempo indeterminato",
    tags: ["Erasmus OK", "Internet Veloce"],
    link: "#",
    instagram: "@spottedperugia",
    distanzaUni: "2.1 km"
  },
  {
    id: 4,
    lat: 43.1140,
    lng: 12.3800,
    zona: "Elce",
    via: "Via Elce di Sotto",
    prezzo: 310,
    genere: "F",
    inquilini: 2,
    mood: "Vicino ingegneria",
    durata: "6 mesi",
    tags: ["No Fumatori", "Internet Veloce"],
    link: "#",
    instagram: "@spottedperugia",
    distanzaUni: "0.5 km"
  },
  {
    id: 5,
    lat: 43.1090,
    lng: 12.3895,
    zona: "Centro",
    via: "Via dei Priori",
    prezzo: 400,
    genere: "Entrambi",
    inquilini: 2,
    mood: "Casa di lusso",
    durata: "2 mesi",
    tags: ["Bagno Privato", "Erasmus OK"],
    link: "#",
    instagram: "@spottedperugia",
    distanzaUni: "1.5 km"
  },
  {
    id: 6,
    lat: 43.1180,
    lng: 12.3900,
    zona: "Centro",
    via: "Via della Cupa",
    prezzo: 290,
    genere: "M",
    inquilini: 1,
    mood: "Romantica",
    durata: "Tempo indeterminato",
    tags: ["Pet Friendly", "Social"],
    link: "#",
    instagram: "@spottedperugia",
    distanzaUni: "1.8 km"
  },
  {
    id: 7,
    lat: 43.1050,
    lng: 12.3550,
    zona: "San Sisto",
    via: "Via San Costanzo",
    prezzo: 260,
    genere: "Entrambi",
    inquilini: 3,
    mood: "Famigliare",
    durata: "4 mesi",
    tags: ["Silenziosa", "No Fumatori"],
    link: "#",
    instagram: "@spottedperugia",
    distanzaUni: "1.9 km"
  },
  {
    id: 8,
    lat: 43.1200,
    lng: 12.3750,
    zona: "Elce",
    via: "Via della Viola",
    prezzo: 330,
    genere: "F",
    inquilini: 2,
    mood: "Creativa",
    durata: "3 mesi",
    tags: ["Internet Veloce", "Social"],
    link: "#",
    instagram: "@spottedperugia",
    distanzaUni: "0.7 km"
  }
];

// Database dei profili dei coinquilini
let profili = [
  {
    nome: "Alessia",
    corso: "Giurisprudenza",
    stato: "Studente",
    durata: "Tempo indeterminato",
    stile: "Tranquillo",
    orario: "Mattina",
    animali: "No",
    budget: 300,
    zona: "Centro",
    tags: ["No Fumatori"],
    bio: "Studente di giurisprudenza, amo leggere e cucinare",
    instagram: "@alessia_uni",
    whatsapp: "+393331234567",
    avatarColor: "#ff6b6b"
  },
  {
    nome: "Luca",
    corso: "Informatica",
    stato: "Studente",
    durata: "6 mesi",
    stile: "Social",
    orario: "Sera",
    animali: "Sì",
    budget: 350,
    zona: "Elce",
    tags: ["Pet Friendly", "Social"],
    bio: "Programmatore appassionato, sempre pronto per una pizza",
    instagram: "@luca_dev",
    whatsapp: "+393332345678",
    avatarColor: "#4ecdc4"
  },
  {
    nome: "Marco",
    corso: "Medicina",
    stato: "Studente",
    durata: "3 mesi",
    stile: "Organizzato",
    orario: "Pomeriggio",
    animali: "No",
    budget: 280,
    zona: "San Sisto",
    tags: ["Silenziosa", "No Fumatori"],
    bio: "Futuro dottore, studio sempre ma mi piace rilassarmi",
    instagram: "@marco_med",
    whatsapp: "+393333456789",
    avatarColor: "#45b7d1"
  },
  {
    nome: "Giulia",
    corso: "Lettere",
    stato: "Studente",
    durata: "Tempo indeterminato",
    stile: "Social",
    orario: "Mattina",
    animali: "No",
    budget: 320,
    zona: "Centro",
    tags: ["Erasmus OK", "Social"],
    bio: "Amante della letteratura e dei viaggi Erasmus",
    instagram: "@giulia_letters",
    whatsapp: "+393334567890",
    avatarColor: "#f9ca24"
  },
  {
    nome: "Andrea",
    corso: "Marketing Digitale",
    stato: "Lavoratrice",
    durata: "4 mesi",
    stile: "Tranquillo",
    orario: "Notte",
    animali: "Sì",
    budget: 340,
    zona: "Elce",
    tags: ["Pet Friendly"],
    bio: "Esperta di marketing, lavoro da casa e cerco coinquilina",
    instagram: "@andrea_marketing",
    whatsapp: "+393335678901",
    avatarColor: "#6c5ce7"
  }
];

// Utility functions
function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function generateAvatarColor() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8', '#00b894', '#e17055'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Theme management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Passa al tema chiaro' : 'Passa al tema scuro');
}

// Map initialization
let map;
let layerMarkers;

function initMap() {
  map = L.map('map', { zoomControl: false }).setView([43.1121, 12.3888], 15);
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '©OpenStreetMap'
  }).addTo(map);

  layerMarkers = L.layerGroup().addTo(map);
}

// Update map markers with filters
function aggiornaMappa(dati = stanze) {
  layerMarkers.clearLayers();
  dati.forEach(s => {
    // Color logic based on price: Green < 300 | Yellow 300-350 | Red > 350
    let color = '#27ae60'; // Green
    if (s.prezzo >= 300 && s.prezzo <= 350) color = '#f1c40f'; // Yellow
    if (s.prezzo > 350) color = '#e4405f'; // Red

    const popup = `
      <div class="custom-popup-content">
        <b>📍 ${s.via}</b>
        <div class="popup-info">🏠 <i>Zona:</i> ${s.zona}</div>
        <div class="popup-info">💰 €${s.prezzo}/mese</div>
        <div class="popup-info">👥 ${s.inquilini} presenti</div>
        <div class="popup-info">⏳ Durata: ${s.durata}</div>
        <div class="popup-info">📍 ${s.distanzaUni} dall'università</div>
        <div class="popup-info">🔍 Cercano: ${s.genere}</div>
        <div style="margin-top:8px; padding:8px; background:#f9f9f9; border-radius:8px; font-size:0.8rem; border-left:3px solid var(--primary)">
          "${s.mood}"
        </div>
        <div class="tag-container" style="margin-top:10px;">
          ${s.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div style="margin-top:10px; display:flex; gap:5px;">
          <a href="${s.link}" target="_blank" style="flex:1; padding:8px; background:var(--primary); color:white; text-align:center; border-radius:5px; text-decoration:none; font-weight:bold;">Vedi Post</a>
          <a href="https://instagram.com/${s.instagram.replace('@', '')}" target="_blank" style="padding:8px; background:#e4405f; color:white; border-radius:5px; text-decoration:none;"><i class="fab fa-instagram"></i></a>
        </div>
        <div style="margin-top: 8px; text-align: center;">
          <span class="instagram-badge">📸 Verificato da Instagram</span>
        </div>
      </div>
    `;
    L.circleMarker([s.lat, s.lng], {
      radius: 12,
      color: '#fff',
      weight: 3,
      fillOpacity: 0.9,
      fillColor: color
    })
    .addTo(layerMarkers)
    .bindPopup(popup);
  });
}

// Render profiles list
function renderElenco(dati = profili) {
  const container = document.getElementById('profiles-container');
  container.innerHTML = '';

  dati.forEach((p, index) => {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const avatarColor = p.avatarColor || generateAvatarColor();

    card.innerHTML = `
      <div class="profile-avatar" style="background: ${avatarColor};">
        ${getInitials(p.nome)}
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3 style="margin:0">${p.nome}</h3>
        <span style="font-size:0.85rem; color:#777">${p.durata}</span>
      </div>
      <p style="margin:10px 0; color:#666; font-style:italic;">"${p.bio}"</p>
      <p style="margin:10px 0; color:#666">📚 ${p.corso} • ${p.stato} • 📍 ${p.zona}</p>
      <p style="margin:4px 0; color:#777; font-size:0.92rem;">🏠 ${p.stile} • 🕒 ${p.orario} • ${p.animali}</p>
      <div class="price-tag">€${p.budget}/mese</div>
      <div class="tag-container">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="contact-buttons">
        <a href="https://instagram.com/${p.instagram.replace('@', '')}" target="_blank" class="contact-btn instagram" aria-label="Contatta su Instagram">
          <i class="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://wa.me/${p.whatsapp.replace('+', '')}" target="_blank" class="contact-btn whatsapp" aria-label="Contatta su WhatsApp">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Sidebar management
function initSidebar() {
  const sidebar = document.querySelector('.sidebar-left');
  const toggleBtn = document.getElementById('toggle-sidebar');

  toggleBtn.addEventListener('click', () => {
    const isCollapsed = sidebar.classList.toggle('collapsed');
    toggleBtn.innerHTML = isCollapsed ? '<i class="fas fa-chevron-right"></i>' : '<i class="fas fa-bars"></i>';
    toggleBtn.setAttribute('aria-label', isCollapsed ? 'Apri sidebar' : 'Chiudi sidebar');

    if (!isCollapsed) {
      setTimeout(() => {
        if (map) map.invalidateSize();
      }, 300);
    }
  });

  // Mobile sidebar
  if (window.innerWidth <= 768) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
}

// Tab management
function initTabs() {
  document.querySelectorAll('.sidebar-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-tab, .tab-pane').forEach(el => el.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab + '-pane').classList.add('active');

      if (tab.dataset.tab === 'coinquilini') {
        document.getElementById('map').style.display = 'none';
        document.getElementById('coinquilini-list-view').style.display = 'block';
        renderElenco();
      } else {
        document.getElementById('map').style.display = 'block';
        document.getElementById('coinquilini-list-view').style.display = 'none';
        setTimeout(() => {
          if (map) map.invalidateSize();
        }, 200);
      }
    });
  });
}

// Filter management
function initFilters() {
  // Map filters
  document.getElementById('apply-map-filters').addEventListener('click', () => {
    const zona = document.getElementById('map-zona').value;
    const prezzo = document.getElementById('map-prezzo').value || Infinity;
    const durata = document.getElementById('map-durata').value;
    const selectedTags = Array.from(document.querySelectorAll('#map-tag-filters .tag-checkbox:checked')).map(el => el.value);

    const filtrati = stanze.filter(s =>
      (!zona || s.zona === zona) &&
      s.prezzo <= prezzo &&
      (!durata || s.durata === durata) &&
      (selectedTags.length === 0 || selectedTags.every(tag => s.tags.includes(tag)))
    );
    aggiornaMappa(filtrati);
  });

  // Profile filters
  document.getElementById('apply-p-filters').addEventListener('click', () => {
    const search = document.getElementById('search-profiles').value.toLowerCase();
    const budgetMin = document.getElementById('filter-p-budget-min').value || 0;
    const zona = document.getElementById('filter-p-zona').value;
    const durata = document.getElementById('filter-p-durata').value;

    const filtrati = profili.filter(p =>
      (!search || p.nome.toLowerCase().includes(search) ||
       p.corso.toLowerCase().includes(search) ||
       p.stato.toLowerCase().includes(search)) &&
      p.budget >= budgetMin &&
      (!zona || p.zona === zona) &&
      (!durata || p.durata === durata)
    );
    renderElenco(filtrati);
  });
}

// Modal management
function initModal() {
  const modal = document.getElementById('profile-modal');
  const openBtn = document.getElementById('open-modal-btn');
  const closeBtn = document.getElementById('close-modal');

  openBtn.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });

  // Form submission
  document.getElementById('new-profile-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedTags = Array.from(document.querySelectorAll('#profile-modal .tag-checkbox:checked')).map(el => el.value);

    const newProfile = {
      nome: document.getElementById('p-nome').value,
      stato: document.getElementById('p-stato').value,
      corso: document.getElementById('p-corso').value,
      durata: document.getElementById('p-durata').value,
      stile: document.getElementById('p-stile').value,
      orario: document.getElementById('p-orario').value,
      animali: document.getElementById('p-animali').value,
      budget: Number(document.getElementById('p-budget').value),
      zona: document.getElementById('p-zona').value,
      bio: document.getElementById('p-bio').value,
      instagram: document.getElementById('p-instagram').value,
      whatsapp: document.getElementById('p-whatsapp').value,
      tags: selectedTags,
      avatarColor: generateAvatarColor()
    };

    profili.unshift(newProfile);

    // Save to localStorage
    localStorage.setItem('profili', JSON.stringify(profili));

    renderElenco();
    modal.classList.remove('show');
    document.body.style.overflow = '';
    e.target.reset();
  });
}

// Data persistence
function loadSavedData() {
  const savedProfili = localStorage.getItem('profili');
  if (savedProfili) {
    profili = JSON.parse(savedProfili);
  }
}

// Accessibility improvements
function initAccessibility() {
  // Add ARIA labels
  document.getElementById('toggle-sidebar').setAttribute('aria-label', 'Apri/Chiudi sidebar');
  document.getElementById('theme-toggle').setAttribute('aria-label', 'Cambia tema');
  document.getElementById('instagram-link').setAttribute('aria-label', 'Vai al profilo Instagram');

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('profile-modal');
      if (modal.classList.contains('show')) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMap();
  initSidebar();
  initTabs();
  initFilters();
  initModal();
  initAccessibility();
  loadSavedData();

  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Initial render
  aggiornaMappa();
});