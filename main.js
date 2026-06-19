/* 
   JOURNEY THROUGH NEPAL — JavaScript
   Interactive Features & Dynamic Content */

'use strict';

/*  Destination Data*/
const DESTINATIONS = [
  {
    id: 1,
    name: "Everest Base Camp",
    region: "central",
    activity: "trekking",
    budget: "premium",
    season: "autumn",
    altitude: "5,364m",
    icon: "⛰️",
    color: "#2F3E46",
    accent: "#52796F",
    tags: ["Central", "Trekking", "Premium"]
  },
  {
    id: 2,
    name: "Pokhara & Phewa Lake",
    region: "central",
    activity: "relaxation",
    budget: "budget",
    season: "spring",
    altitude: "822m",
    icon: "🏔️",
    color: "#52796F",
    accent: "#84A98C",
    tags: ["Central", "Relaxation", "Budget"]
  },
  {
    id: 3,
    name: "Chitwan National Park",
    region: "central",
    activity: "wildlife",
    budget: "mid-range",
    season: "winter",
    altitude: "415m",
    icon: "🦏",
    color: "#3d5a52",
    accent: "#BC6C25",
    tags: ["Central", "Wildlife", "Mid-range"]
  },
  {
    id: 4,
    name: "Annapurna Circuit",
    region: "central",
    activity: "trekking",
    budget: "mid-range",
    season: "autumn",
    altitude: "5,416m",
    icon: "🗻",
    color: "#1A2328",
    accent: "#52796F",
    tags: ["Central", "Trekking", "Mid-range"]
  },
  {
    id: 5,
    name: "Lumbini",
    region: "western",
    activity: "culture",
    budget: "budget",
    season: "winter",
    altitude: "150m",
    icon: "🏛️",
    color: "#BC6C25",
    accent: "#DDB892",
    tags: ["Western", "Culture", "Budget"]
  },
  {
    id: 6,
    name: "Kathmandu Valley",
    region: "central",
    activity: "culture",
    budget: "budget",
    season: "spring",
    altitude: "1,400m",
    icon: "🛕",
    color: "#5c4a2a",
    accent: "#BC6C25",
    tags: ["Central", "Culture", "Budget"]
  },
  {
    id: 7,
    name: "Mustang Kingdom",
    region: "western",
    activity: "trekking",
    budget: "premium",
    season: "summer",
    altitude: "3,840m",
    icon: "🏜️",
    color: "#8B4513",
    accent: "#DDB892",
    tags: ["Western", "Trekking", "Premium"]
  },
  {
    id: 8,
    name: "Ilam Tea Gardens",
    region: "eastern",
    activity: "relaxation",
    budget: "budget",
    season: "spring",
    altitude: "1,600m",
    icon: "🍵",
    color: "#2d5a27",
    accent: "#52796F",
    tags: ["Eastern", "Relaxation", "Budget"]
  },
  {
    id: 9,
    name: "Kanchenjunga Trek",
    region: "eastern",
    activity: "trekking",
    budget: "premium",
    season: "autumn",
    altitude: "8,586m",
    icon: "🏔️",
    color: "#2F3E46",
    accent: "#84A98C",
    tags: ["Eastern", "Trekking", "Premium"]
  },
  {
    id: 10,
    name: "Rara Lake",
    region: "western",
    activity: "wildlife",
    budget: "mid-range",
    season: "autumn",
    altitude: "2,990m",
    icon: "💧",
    color: "#1a4a6e",
    accent: "#52796F",
    tags: ["Western", "Wildlife", "Mid-range"]
  },
  {
    id: 11,
    name: "Bandipur",
    region: "central",
    activity: "culture",
    budget: "budget",
    season: "winter",
    altitude: "1,030m",
    icon: "🏘️",
    color: "#6B4226",
    accent: "#DDB892",
    tags: ["Central", "Culture", "Budget"]
  },
  {
    id: 12,
    name: "Gosaikunda Lake",
    region: "central",
    activity: "trekking",
    budget: "mid-range",
    season: "summer",
    altitude: "4,380m",
    icon: "🔵",
    color: "#2a4a6b",
    accent: "#52796F",
    tags: ["Central", "Trekking", "Mid-range"]
  }
];

/* Itinerary Data  */
const ITINERARY_DATA = {
  trekking: {
    1: { short: "Budget", days: ["Fly to Kathmandu, acclimatize. Explore Thamel & Boudhanath Stupa.", "Fly/drive to trek start. Light acclimatization walk. Rest."] },
    2: { short: "Budget", days: ["Fly to Kathmandu, explore Durbar Square & Swayambhunath.", "Pokhara city day — Phewa Lake boat ride, Bindhyabasini Temple.", "Drive to Nayapul, trek to Tikhedhunga (1,500m).", "Trek Tikhedhunga to Ghorepani (2,874m). Sunrise views.", "Optional Poon Hill sunrise, descend to Birethanti, return to Pokhara.", "Rest day in Pokhara or fly back to Kathmandu.", "Fly home."] },
    3: { short: "Budget", days: ["Kathmandu arrival. Heritage tour: Pashupatinath, Boudhanath.", "Fly to Lukla. Trek to Phakding (2,650m).", "Namche Bazaar (3,440m). Acclimatization day.", "Tengboche Monastery (3,860m). Stunning Ama Dablam views.", "Dingboche (4,410m). Rest and altitude adjustment.", "Lobuche (4,910m). Mountain panoramas.", "Gorak Shep & Everest Base Camp (5,364m). Achievement!", "Kala Patthar sunrise. Descend to Pheriche.", "Namche Bazaar. Celebration dinner.", "Lukla — fly to Kathmandu. Farewell dinner."] }
  },
  culture: {
    1: { short: "Budget", days: ["Kathmandu Durbar Square, Kumari Temple, Hanuman Dhoka.", "Bhaktapur UNESCO site — Nyatapola Temple & Pottery Square.", "Patan Durbar Square & Golden Temple, craft workshops."] },
    2: { short: "Budget", days: ["Arrive Kathmandu. Boudhanath Stupa & evening prayers.", "Swayambhunath Monkey Temple, National Museum.", "Bhaktapur — Living medieval city, local newari cuisine.", "Patan — Golden Temple, craft workshops, bronze casting.", "Day trip to Nagarkot — sunset over Himalayas.", "Pokhara — Lakeside culture, World Peace Pagoda.", "Fly home."] },
    3: { short: "Budget", days: ["Kathmandu arrival & Boudhanath evening puja ceremony.", "Pashupatinath Hindu pilgrimage site, cremation ghats.", "Bhaktapur Durbar Square, pottery & wood carving.", "Patan's 55-window palace & craft quarter.", "Changu Narayan — oldest temple in Nepal.", "Lumbini — Buddha's birthplace, sacred garden.", "Lumbini sacred zone — monasteries from 40+ nations.", "Tansen — Newari hilltop town & Palpa palace.", "Return to Kathmandu via scenic route.", "Final Himalayan views from Nagarjun Hill."] }
  },
  wildlife: {
    1: { short: "Budget", days: ["Fly to Bharatpur, transfer to Chitwan. Evening nature walk.", "Jungle safari by jeep — rhinos, elephants, deer. Bird walk.", "Elephant bathing, canoe on Rapti River. Tharu dance show."] },
    2: { short: "Budget", days: ["Kathmandu arrival. Brief city orientation.", "Fly to Bharatpur. Chitwan jungle check-in.", "Elephant-back safari. Rhino search in tall grass.", "Jeep safari at dawn — tigers, leopards, deer.", "Canoe on Rapti River, birdwatching (500+ species).", "Bardia National Park — wilder, less visited Bengal tigers.", "Fly back to Kathmandu. Farewell."] },
    3: { short: "Budget", days: ["Arrive Kathmandu.", "Fly to Bharatpur. Chitwan wildlife introduction.", "Full-day jeep safari. Golden jackals, wild boar at dusk.", "River safari by dugout canoe. Crocodiles, kingfishers.", "Cultural visit — Tharu village, indigenous conservation.", "Fly to Nepalgunj. Transfer to Bardia National Park.", "Tiger tracking with expert naturalists.", "Elephant encounters — rescued & free-roaming.", "Koshi Tappu Wildlife Reserve — water buffalo, dolphins.", "Return to Kathmandu. Local farewell dinner.", "Fly home."] }
  },
  relaxation: {
    1: { short: "Budget", days: ["Arrive Pokhara. Settle in lakeside hotel. Sunset on Phewa.", "Sunrise from Sarangkot. Morning yoga & meditation session.", "Boat on lake, Davis Falls & Gupteshwor Cave. Spa evening."] },
    2: { short: "Budget", days: ["Kathmandu arrival. Explore calmly — Patan museum & gardens.", "Pokhara — Phewa Lake, Lakeside market stroll.", "Sarangkot sunrise. Peaceful morning boat on the lake.", "Day hike to World Peace Pagoda. Evening meditation.", "Spa day & leisure. Local cooking class.", "Nagarkot — gentle nature walk, mountain views.", "Fly home refreshed."] },
    3: { short: "Budget", days: ["Arrive Kathmandu. Slow start — Patan Durbar Square at dusk.", "Spa morning in Thamel. Afternoon at Bouddha stupa.", "Fly to Pokhara. Afternoon lakeside stroll.", "Sunrise at Sarangkot. Meditation & yoga session.", "Paragliding over Pokhara Valley (optional). Lake boat.", "Drive to Bandipur — quiet hilltop heritage town.", "Slow days in Bandipur. Mountain views, cooking class.", "Ilam — Nepal's tea garden region. Tea estate visit.", "Tea tasting, garden walks, bird watching.", "Return to Kathmandu. Final spa treatment.", "Fly home fully recharged."] }
  }
};

/* ─── DOM Ready ─── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initProgressBar();
  initDestinationExplorer();
  initItineraryBuilder();
  initChips();
  initBackToTop();
  initMapInteraction();
});

/* ─── Navbar Scroll ─── */
function initNavbar() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ─── Progress Bar ─── */
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    bar.style.width = `${(scrollTop / docHeight) * 100}%`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ─── Scroll Reveal ─── */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  elements.forEach(el => observer.observe(el));
}

/* ─── Back to Top ─── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─── Map Interaction ─── */
function initMapInteraction() {
  const markers = document.querySelectorAll('.map-marker-group');
  markers.forEach(marker => {
    marker.style.cursor = 'pointer';
    marker.addEventListener('mouseenter', () => {
      const label = marker.querySelector('.map-label');
      if (label) label.setAttribute('fill', '#DDB892');
    });
    marker.addEventListener('mouseleave', () => {
      const label = marker.querySelector('.map-label');
      if (label) label.setAttribute('fill', 'rgba(255,255,255,0.85)');
    });
  });
}

/* Destination Explorer  */
function initDestinationExplorer() {
  const grid = document.getElementById('dest-grid');
  if (!grid) return;

  renderDestinations(DESTINATIONS);

  const filters = ['filter-region', 'filter-activity', 'filter-budget', 'filter-season'];
  filters.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', filterDestinations);
  });

  const searchInput = document.getElementById('dest-search');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(filterDestinations, 200));
  }
}

function filterDestinations() {
  const region   = document.getElementById('filter-region')?.value   || '';
  const activity = document.getElementById('filter-activity')?.value || '';
  const budget   = document.getElementById('filter-budget')?.value   || '';
  const season   = document.getElementById('filter-season')?.value   || '';
  const search   = (document.getElementById('dest-search')?.value || '').toLowerCase().trim();

  const filtered = DESTINATIONS.filter(d => {
    if (region   && d.region   !== region)   return false;
    if (activity && d.activity !== activity) return false;
    if (budget   && d.budget   !== budget)   return false;
    if (season   && d.season   !== season)   return false;
    if (search   && !d.name.toLowerCase().includes(search)) return false;
    return true;
  });

  renderDestinations(filtered);
}

function renderDestinations(list) {
  const grid = document.getElementById('dest-grid');
  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = `
      <div class="no-results">
        <p>No destinations match your filters.</p>
        <small style="font-size:0.85rem;color:#9aada5;font-family:var(--font-body);font-style:normal;margin-top:0.5rem;display:block;">Try adjusting or clearing your filters.</small>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(d => `
    <article class="dest-card" data-id="${d.id}" tabindex="0" aria-label="${d.name}">
      <div class="dest-card-img" style="background: linear-gradient(135deg, ${d.color}, ${d.accent});">
        <span style="font-size:4rem;position:relative;z-index:1;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.3))">${d.icon}</span>
        <div style="position:absolute;top:1rem;right:1rem;background:rgba(0,0,0,0.35);border-radius:2px;padding:0.2rem 0.6rem;font-size:0.68rem;font-weight:600;color:rgba(255,255,255,0.9);letter-spacing:0.06em;">${d.altitude}</div>
      </div>
      <div class="dest-card-body">
        <div class="dest-tags">
          ${d.tags.map((t, i) => `<span class="dest-tag ${i===2 ? 'budget' : i===1 ? '' : 'season'}">${t}</span>`).join('')}
        </div>
        <h3 class="dest-card-name">${d.name}</h3>
        <div class="dest-card-meta">
          <span>📅</span> Best: <strong style="color:var(--forest-green);font-weight:600;">${capitalize(d.season)}</strong>
        </div>
      </div>
    </article>
  `).join('');

  // animate in
  grid.querySelectorAll('.dest-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 60);
  });
}

/* ─── Itinerary Builder ─── */
function initItineraryBuilder() {
  const generateBtn = document.getElementById('generate-itinerary');
  if (generateBtn) {
    generateBtn.addEventListener('click', generateItinerary);
  }
}

function initChips() {
  document.querySelectorAll('.chip-group').forEach(group => {
    group.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      const multi = group.dataset.multi === 'true';
      if (!multi) {
        group.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      }
      chip.classList.toggle('active');
    });
  });

  // Days slider
  const slider = document.getElementById('days-slider');
  const daysDisplay = document.getElementById('days-display');
  if (slider && daysDisplay) {
    slider.addEventListener('input', () => {
      daysDisplay.textContent = slider.value + (slider.value === '1' ? ' Day' : ' Days');
    });
  }
}

function generateItinerary() {
  const days = parseInt(document.getElementById('days-slider')?.value || 7);

  // Get active interest
  let interest = 'trekking';
  const interestGroup = document.querySelector('[data-type="interest"]');
  if (interestGroup) {
    const active = interestGroup.querySelector('.chip.active');
    if (active) interest = active.dataset.value;
  }

  // Get active budget
  let budgetLabel = 'Budget Friendly';
  const budgetGroup = document.querySelector('[data-type="budget"]');
  if (budgetGroup) {
    const active = budgetGroup.querySelector('.chip.active');
    if (active) budgetLabel = active.textContent;
  }

  const output = document.getElementById('itinerary-output');
  if (!output) return;

  // Show loading
  output.innerHTML = `<div class="itinerary-placeholder"><div class="placeholder-icon">⏳</div><p style="font-size:0.85rem;">Crafting your route…</p></div>`;

  setTimeout(() => {
    const data = ITINERARY_DATA[interest];
    let dayList;

    // Match days to bracket
    if (days <= 3) dayList = data[1].days.slice(0, days);
    else if (days <= 7) dayList = data[2].days.slice(0, days);
    else dayList = data[3].days.slice(0, days);

    // Pad if needed
    while (dayList.length < days) {
      dayList.push("Flexible exploration day — adjust based on energy & weather.");
    }

    const html = dayList.map((activity, i) => `
      <div class="itinerary-day">
        <div class="day-label">Day<br>${i + 1}</div>
        <div class="day-content">
          <strong>${getDayTitle(interest, i)}</strong>
          <p>${activity}</p>
        </div>
      </div>
    `).join('');

    output.innerHTML = `
      <div style="margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid rgba(255,255,255,0.08);">
        <p style="font-size:0.65rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--terracotta);margin-bottom:0.25rem;">Generated Route</p>
        <h4 style="font-family:var(--font-display);font-size:1.1rem;color:white;font-weight:700;">${days}-Day ${capitalize(interest)} Experience · ${budgetLabel}</h4>
      </div>
      ${html}
      <div style="margin-top:1.5rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.06);font-size:0.72rem;color:rgba(255,255,255,0.3);">
        ✦ Routes are suggested starting points. Customize with your guide on arrival.
      </div>
    `;
  }, 700);
}

function getDayTitle(interest, index) {
  const titles = {
    trekking: ['Arrival & Orientation', 'First Steps', 'Ascent Begins', 'Into the Mountains', 'High Altitude Day', 'Summit Push', 'Rest & Acclimatize', 'Descent Begins', 'Final Stretch', 'Return & Celebrate'],
    culture: ['Arrival & First Impressions', 'Sacred Sites', 'Heritage Quarter', 'Artisan Day', 'Village Life', 'Ancient Traditions', 'Local Markets', 'Temple Circuit', 'Craft Workshops', 'Farewell Ceremony'],
    wildlife: ['Jungle Arrival', 'First Safari', 'Deep Forest Walk', 'River Safari', 'Dawn Patrol', 'Tracking Day', 'Conservation Visit', 'Bird Watch Morning', 'Village Cultural Exchange', 'Final Game Drive'],
    relaxation: ['Gentle Arrival', 'Morning Yoga', 'Lake & Leisure', 'Spa & Wander', 'Sunrise View', 'Free Exploration', 'Mountain Meditation', 'Local Flavours', 'Hidden Valley Walk', 'Rest & Reflect']
  };
  return (titles[interest] || titles.trekking)[index % 10];
}

/* ─── Utilities ─── */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
