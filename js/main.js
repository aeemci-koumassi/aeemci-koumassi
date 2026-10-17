/* ==========================================================================
   SITE PUBLIC AEEMCI KOUMASSI — SCRIPT DE SYNCHRONISATION DYNAMIQUE (MAIN.JS)
   Version: 20261017_pro (Optimisé Présentation Pro & Haute Performance)
   ========================================================================== */

// 📅 TABLEAU OFFICIEL DES PROCHAINS ÉVÉNEMENTS (Facilement Modifiable)
const EVENEMENTS_AEEMCI = [
  {
    id: 1,
    titre: "Assises Communales de la Jeunesse & Rentrée Solennelle",
    theme: "« Ensemble pour une identité islamique affirmée et une réussite scolaire rayonnante »",
    date: "2026-11-15T08:30:00",
    dateAffichee: "Dimanche 15 Novembre 2026 • Dès 08H30",
    lieu: "Collège Moderne La Colombe, Koumassi Sicogi",
    badge: "GRAND RENDEZ-VOUS",
    affiche: "images/secofis.jpg",
    lien: "https://chat.whatsapp.com/KUd1Zmc2JEfBsIWdH5HPdm"
  },
  {
    id: 2,
    titre: "Lancement de la Masterclass Microsoft Word & Suite Bureautique",
    theme: "« Mise en page professionnelle de rapports de stage, TDR et mémoires »",
    date: "2026-11-22T09:00:00",
    dateAffichee: "Dimanche 22 Novembre 2026 • Dès 09H00",
    lieu: "Salle Informatique IST-ISG La Colombe (Koumassi)",
    badge: "ACADÉMIE DU NUMÉRIQUE",
    affiche: "images/rentree-solennelle.jpg",
    lien: "https://chat.whatsapp.com/KUd1Zmc2JEfBsIWdH5HPdm"
  },
  {
    id: 3,
    titre: "Nuit du Mahouloud & Veillée Spirituelle 2026",
    theme: "« Le Sermon d'Adieu : enseignements et leçons de fraternité pour la jeunesse »",
    date: "2026-12-05T20:00:00",
    dateAffichee: "Samedi 05 Décembre 2026 • Dès 20H00",
    lieu: "Grande Mosquée de Koumassi",
    badge: "SPIRITUALITÉ & FOI",
    affiche: "images/maouloud.jpg",
    lien: "https://chat.whatsapp.com/KUd1Zmc2JEfBsIWdH5HPdm"
  },
  {
    id: 4,
    titre: "Grand Concours d'Art Oratoire « Le Choc des Titans »",
    theme: "« Joutes oratoires, éloquence et débat d'idées inter-établissements »",
    date: "2026-12-20T14:00:00",
    dateAffichee: "Dimanche 20 Décembre 2026 • Dès 14H00",
    lieu: "Amphithéâtre Koumassi",
    badge: "ART ORATOIRE",
    affiche: "images/journee-excellence.jpg",
    lien: "https://chat.whatsapp.com/KUd1Zmc2JEfBsIWdH5HPdm"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  lancerSynchronisationGlobale();
  initialiserAnimationsScroll();
  initialiserCompteursChiffres();
  initialiserCompteAReboursAutomatique();
  initialiserRaccourcisClavier();
});

// Écouteurs d'événements temps réel pour mise à jour instantanée sans rechargement de page
window.addEventListener('storage', function() {
  lancerSynchronisationGlobale();
});

window.addEventListener('focus', function() {
  lancerSynchronisationGlobale();
});

// Gestion du cache pour éviter les appels API excessifs
const CMS_CACHE = {
  lastFetch: 0,
  ttl: 5 * 60 * 1000, // 5 minutes
  isExpired: function() {
    return Date.now() - this.lastFetch > this.ttl;
  },
  updateTimestamp: function() {
    this.lastFetch = Date.now();
  }
};

async function lancerSynchronisationGlobale() {
  afficherSkeletons();

  if (!CMS_CACHE.isExpired()) {
    await synchroniserStatistiquesPublic();
    return;
  }

  try {
    await Promise.all([
      synchroniserBureauPublic(),
      synchroniserActualitesPublic(),
      synchroniserFormationsPublic(),
      synchroniserStatistiquesPublic(),
      synchroniserGaleriePublic(),
      synchroniserContactPublic()
    ]);
  } catch (e) {
    console.warn("Synchronisation globale terminée avec ajustements locaux:", e);
  }

  CMS_CACHE.updateTimestamp();
}

// Affichage non destructif de squelettes uniquement pour les conteneurs dynamiques vides
function afficherSkeletons() {
  const containers = ['container-actualites', 'container-formations'];

  containers.forEach(id => {
    const container = document.getElementById(id);
    if (container && container.children.length === 0) {
      for (let i = 0; i < 3; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-card';
        skeleton.innerHTML = `
          <div class="skeleton skeleton-img"></div>
          <div class="skeleton skeleton-title"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text" style="width: 80%;"></div>
        `;
        container.appendChild(skeleton);
      }
    }
  });
}

// 1. Synchronisation de la Présidence & Mot du Président
async function synchroniserBureauPublic() {
  let bureau = null;
  if (window.cmsRead && typeof window.cmsRead.fetchSection === 'function') {
    bureau = await window.cmsRead.fetchSection('bureau');
  }
  if (!bureau) {
    const bureauRaw = localStorage.getItem('aeemci_cms_bureau');
    if (!bureauRaw) return;
    try { bureau = JSON.parse(bureauRaw); } catch(e) {}
  }
  if (!bureau) return;

  try {
    const nomEls = document.querySelectorAll('#site-nom-president, #publicPresidentNom, .carte-president .nom-president');
    const titreEls = document.querySelectorAll('#site-titre-president, #publicPresidentTitre');
    const mandatEls = document.querySelectorAll('#site-mandat-president');
    const motEls = document.querySelectorAll('#site-mot-president, #publicPresidentMot, .mot-du-president p');
    const photoEls = document.querySelectorAll('#site-photo-president, #publicPresidentPhoto, .carte-president img');

    if (bureau.presidentNom) nomEls.forEach(el => el.textContent = bureau.presidentNom);
    if (bureau.presidentTitre) titreEls.forEach(el => el.textContent = bureau.presidentTitre);
    if (bureau.presidentMandat) mandatEls.forEach(el => el.textContent = bureau.presidentMandat);
    if (bureau.presidentMot) motEls.forEach(el => el.textContent = bureau.presidentMot);
    if (bureau.presidentPhoto) photoEls.forEach(el => el.src = bureau.presidentPhoto);
  } catch (e) {
    console.warn("Mise à jour dynamique de la présidence ignorée.");
  }
}

// 2. Synchronisation Dynamique des Événements & Actualités
async function synchroniserActualitesPublic() {
  let actualites = null;
  if (window.cmsRead && typeof window.cmsRead.fetchSection === 'function') {
    actualites = await window.cmsRead.fetchSection('actualites');
  }
  const cmsRaw = localStorage.getItem('aeemci_cms_actualites');
  const customRaw = localStorage.getItem('aeemci_evenements_custom');

  if (!actualites) {
    try { if (cmsRaw) actualites = JSON.parse(cmsRaw); } catch(e){}
  }
  if (!actualites) actualites = [];

  try {
    if (customRaw) {
      const customList = JSON.parse(customRaw);
      customList.forEach(c => {
        if (!actualites.some(a => a.titre === c.titre)) {
          actualites.unshift({
            id: Date.now(),
            titre: c.titre,
            categorie: c.badge || 'ÉVÉNEMENT',
            date: c.date || 'Prochainement',
            lieu: c.lieu || 'Koumassi',
            description: c.desc || c.description,
            image: c.image || 'images/maouloud.jpg'
          });
        }
      });
    }
  } catch(e){}

  const container = document.getElementById('container-actualites') || document.getElementById('publicNewsContainer') || document.querySelector('.grille-actualites-cartes');

  if (container && actualites.length > 0) {
    container.innerHTML = '';
    actualites.forEach(actu => {
      const article = document.createElement('article');
      article.className = 'carte-actualite-moderne';
      article.innerHTML = `
        <div class="carte-actu-image">
          <span class="carte-actu-badge or">${actu.categorie || 'ÉVÉNEMENT'}</span>
          <img src="${actu.image || 'images/logo.png'}" alt="${actu.titre}" loading="lazy" onerror="this.src='images/logo.png';">
        </div>
        <div class="carte-actu-corps">
          <span class="carte-actu-date">📅 ${actu.date} ${actu.lieu ? '• 📍 ' + actu.lieu : ''}</span>
          <h3 class="carte-actu-titre">${actu.titre}</h3>
          <p class="carte-actu-desc">${actu.description}</p>
        </div>
      `;
      container.appendChild(article);
    });
  }
}

// 3. Synchronisation Dynamique des Modules de Formation
async function synchroniserFormationsPublic() {
  let formations = null;
  if (window.cmsRead && typeof window.cmsRead.fetchSection === 'function') {
    formations = await window.cmsRead.fetchSection('formations');
  }
  const formationsRaw = localStorage.getItem('aeemci_cms_formations');
  if (!formations) {
    try { if (formationsRaw) formations = JSON.parse(formationsRaw); } catch(e){}
  }
  if (!formations) return;

  try {
    const container = document.getElementById('container-formations') || document.getElementById('publicFormationsContainer') || document.querySelector('.grille-formations');

    if (container && formations && formations.length > 0) {
      container.innerHTML = '';
      formations.forEach(f => {
        const item = document.createElement('div');
        item.className = 'carte-formation-item';
        item.style.cssText = "border: 1px solid var(--bordure-carte); border-radius: 16px; padding: 24px; background: #FFFFFF; box-shadow: var(--ombre-carte); display: flex; flex-direction: column; justify-content: space-between;";
        item.innerHTML = `
          <div>
            <span class="badge-tag or" style="margin-bottom: 10px; display: inline-block;">Module Officiel</span>
            <h3 style="font-size: 1.2rem; color: var(--vert-emeraude); font-weight: 800; margin-bottom: 8px;">${f.intitule}</h3>
            <p style="font-size: 0.9rem; color: var(--texte-doux); line-height: 1.6; margin-bottom: 16px;">${f.description}</p>
          </div>
          <div>
            <a href="${f.lien || 'https://chat.whatsapp.com/KUd1Zmc2JEfBsIWdH5HPdm'}" target="_blank" rel="noopener" class="bouton-action-contour" style="width: 100%; justify-content: center; font-weight: 700;">
              Réserver ma place sur WhatsApp →
            </a>
          </div>
        `;
        container.appendChild(item);
      });
    }
  } catch (e) {
    console.warn("Mise à jour des formations ignorée.");
  }
}

// 4. Synchronisation des Compteurs Statistiques
async function synchroniserStatistiquesPublic() {
  let militants = null;
  if (window.cmsRead && typeof window.cmsRead.fetchMilitants === 'function') {
    militants = await window.cmsRead.fetchMilitants();
  }
  if (!militants) {
    const militantsRaw = localStorage.getItem('aeemci_militants_db');
    try { if (militantsRaw) militants = JSON.parse(militantsRaw); } catch(e){}
  }
  if (!militants) return;

  try {
    const totalValides = militants.filter(m => m.statut === 'valide').length || militants.length;
    const statMilitants = document.getElementById('publicStatMilitants') || document.querySelector('.carte-chiffre-cle:nth-child(2) .nombre-chiffre-cle');
    if (statMilitants && totalValides > 0) {
      statMilitants.setAttribute('data-compteur', totalValides);
      statMilitants.textContent = '+' + totalValides;
    }
  } catch (e) {
    console.warn("Mise à jour des statistiques ignorée.");
  }
}

// 5. Synchronisation des Photos de la Galerie Uploadées depuis le Studio
async function synchroniserGaleriePublic() {
  let listCMS = null;
  if (window.cmsRead && typeof window.cmsRead.fetchSection === 'function') {
    listCMS = await window.cmsRead.fetchSection('galerie');
  }
  const cmsRaw = localStorage.getItem('aeemci_cms_galerie');
  const customRaw = localStorage.getItem('aeemci_galerie_custom');

  if (!listCMS) {
    try { if (cmsRaw) listCMS = JSON.parse(cmsRaw); } catch(e){}
  }
  if (!listCMS) listCMS = [];
  let listCustom = [];
  try { if (customRaw) listCustom = JSON.parse(customRaw); } catch(e){}
  
  const combinees = [...listCMS];
  listCustom.forEach(c => {
    const url = c.photo || c.url;
    if (url && !combinees.some(item => (item.url || item.photo) === url)) {
      combinees.push({ id: Date.now() + Math.random(), url: url, titre: c.titre || 'Photo Studio' });
    }
  });

  const container = document.getElementById('container-galerie') || document.querySelector('.grille-galerie-filtree');

  if (container && combinees.length > 0) {
    container.querySelectorAll('.carte-galerie-dynamique-studio').forEach(el => el.remove());

    const photosValides = combinees.filter(item => item && (item.url || item.photo) && !(item.url || item.photo).includes('../images/'));

    [...photosValides].reverse().forEach(photo => {
      const src = photo.url || photo.photo;
      const item = document.createElement('div');
      item.className = 'carte-galerie-item carte-galerie-dynamique-studio';
      item.innerHTML = `
        <div class="carte-galerie-image-box">
          <img src="${src}" alt="${photo.titre || 'Photo AEEMCI Koumassi'}" loading="lazy" onerror="this.src='images/logo.png';">
          <div class="carte-galerie-survol">
            <span class="badge-galerie-tag">Activité Koumassi</span>
            <h3 class="carte-galerie-titre">${photo.titre || 'Activité Koumassi'}</h3>
          </div>
        </div>
      `;
      container.insertBefore(item, container.firstChild);
    });
  }
}

// 6. Synchronisation des Coordonnées Officielles & Footer
async function synchroniserContactPublic() {
  let contact = null;
  if (window.cmsRead && typeof window.cmsRead.fetchSection === 'function') {
    contact = await window.cmsRead.fetchSection('contact');
  }
  const contactRaw = localStorage.getItem('aeemci_cms_contact');
  if (!contact) {
    try { if (contactRaw) contact = JSON.parse(contactRaw); } catch(e){}
  }
  if (!contact) return;

  try {
    const adresseEls = document.querySelectorAll('#site-contact-adresse, #publicFooterAdresse, .contact-adresse-txt');
    const tel1Els = document.querySelectorAll('#site-contact-phone, #publicFooterTel, .contact-tel-txt');
    const emailEls = document.querySelectorAll('#site-contact-email, #publicFooterEmail, .contact-email-txt');
    const horairesEls = document.querySelectorAll('#site-contact-horaires, #publicFooterHoraires, .contact-horaires-txt');
    const whatsappLinks = document.querySelectorAll('#site-contact-whatsapp, #publicSocialWhatsapp, a.btn-join-whatsapp');

    adresseEls.forEach(el => el.textContent = contact.adresse || 'Koumassi, Abidjan');
    tel1Els.forEach(el => el.textContent = (contact.tel1 ? contact.tel1 : '') + (contact.tel2 ? ' / ' + contact.tel2 : ''));
    emailEls.forEach(el => el.textContent = contact.email || 'aeemci.koumassi@gmail.com');
    horairesEls.forEach(el => el.textContent = contact.horaires || 'Chaque Samedi à 15H00');
    if (contact.whatsappLink) {
      whatsappLinks.forEach(a => a.href = contact.whatsappLink);
    }
  } catch (e) {
    console.warn("Mise à jour des coordonnées du footer ignorée.");
  }
}

// 7. Initialisation des Animations de Révélation au Défilement
function initialiserAnimationsScroll() {
  const observerOptions = {
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('section, .carte-pilier-moderne, .etape-carte, .carte-chiffre-cle').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// 8. Animation dynamique de comptage pour les Chiffres Clés (Impact)
function initialiserCompteursChiffres() {
  const elements = document.querySelectorAll('.nombre-chiffre-cle[data-compteur]');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animerCompteur(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}

function animerCompteur(el) {
  const cible = parseInt(el.getAttribute('data-compteur')) || 0;
  const prefix = el.getAttribute('data-prefix') || '';
  const suffix = el.getAttribute('data-suffix') || '';
  let depart = 0;
  const duree = 1500;
  const pasTemps = 20;
  const etapes = duree / pasTemps;
  const increment = cible / etapes;

  const timer = setInterval(() => {
    depart += increment;
    if (depart >= cible) {
      el.textContent = `${prefix}${cible}${suffix}`;
      clearInterval(timer);
    } else {
      el.textContent = `${prefix}${Math.floor(depart)}${suffix}`;
    }
  }, pasTemps);
}

// 9. GESTION DU COMPTE À REBOURS OFFICIEL
function initialiserCompteAReboursAutomatique() {
  const container = document.getElementById('section-widget-evenement');
  if (!container) return;

  // 1. Rassembler les événements du code et ceux configurés dans le CMS
  let evenementsDisponibles = [...EVENEMENTS_AEEMCI];

  const customRaw = localStorage.getItem('aeemci_evenements_custom');
  if (customRaw) {
    try {
      const customList = JSON.parse(customRaw);
      customList.forEach(c => {
        if (c.date && !isNaN(new Date(c.date).getTime())) {
          evenementsDisponibles.unshift({
            id: c.id || Date.now(),
            titre: c.titre || 'Événement AEEMCI',
            theme: c.desc || c.description || '',
            date: c.date,
            dateAffichee: c.date,
            lieu: c.lieu || 'Koumassi',
            badge: c.badge || 'PROCHAIN ÉVÉNEMENT',
            affiche: c.image || 'images/secofis.jpg',
            lien: c.lien || 'https://chat.whatsapp.com/KUd1Zmc2JEfBsIWdH5HPdm'
          });
        }
      });
    } catch(e) {}
  }

  // 2. Filtrer STRICTEMENT les événements futurs (les événements passés sont masqués automatiquement)
  const maintenant = Date.now();
  const evenementsFuturs = evenementsDisponibles
    .filter(ev => new Date(ev.date).getTime() > maintenant)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // 3. Cas A : Aucun événement futur -> Affichage d'une bannière d'information élégante
  if (evenementsFuturs.length === 0) {
    container.innerHTML = `
      <div class="conteneur">
        <div class="banniere-evenement-compteur" style="grid-template-columns: 80px 1fr auto; gap: 20px;">
          <div style="font-size: 2.8rem; text-align: center;">📅</div>
          <div>
            <span class="badge-tag or" style="margin-bottom: 6px; display: inline-block;">Mandat 2025–2026</span>
            <h3 style="font-size: 1.35rem; color: #FFFFFF; font-family: var(--font-titre); margin-bottom: 4px;">Prochains Événements &amp; Calendrier Associatif</h3>
            <p style="color: rgba(255,255,255,0.85); font-size: 0.9rem; margin: 0;">
              Les prochaines dates de formations et rencontres de la rentrée solennelle sont en cours de programmation. Rejoignez notre communauté WhatsApp pour recevoir les annonces officielles en temps réel.
            </p>
          </div>
          <div>
            <a href="https://chat.whatsapp.com/KUd1Zmc2JEfBsIWdH5HPdm" target="_blank" rel="noopener" class="bouton-cta-primaire" style="background: var(--or-gradient); color: #000; padding: 12px 24px; font-weight: 800; font-size: 0.88rem; white-space: nowrap;">
              Rejoindre la Communauté WhatsApp →
            </a>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // 4. Cas B : Un événement futur existe -> Affichage dynamique avec compte à rebours précis
  const prochain = evenementsFuturs[0];
  const targetTime = new Date(prochain.date).getTime();

  container.innerHTML = `
    <div class="conteneur">
      <div class="banniere-evenement-compteur">
        <!-- Vignette Affiche -->
        <div style="position: relative; cursor: pointer;" onclick="ouvrirAfficheModal('${prochain.affiche}')">
          <img id="hero-actu-image" loading="lazy" src="${prochain.affiche}" alt="${prochain.titre}" style="width: 85px; height: 115px; object-fit: cover; border-radius: 10px; border: 2px solid var(--or); box-shadow: 0 8px 20px rgba(0,0,0,0.3); transition: transform 0.3s ease;">
          <span style="position: absolute; bottom: 4px; right: 4px; background: rgba(0,0,0,0.75); color: #FFF; font-size: 0.65rem; padding: 2px 5px; border-radius: 4px;">🔍 Zoom</span>
        </div>

        <!-- Informations Événement -->
        <div>
          <span class="badge-tag or" style="margin-bottom: 8px;">${prochain.badge}</span>
          <h3 id="hero-actu-titre" style="font-size: 1.45rem; color: #FFFFFF; font-family: var(--font-titre); margin-bottom: 4px; line-height: 1.3;">${prochain.titre}</h3>
          <div id="hero-actu-theme" style="font-size: 0.92rem; color: var(--or-clair); font-weight: 700; margin-bottom: 6px;">
            Thème : ${prochain.theme}
          </div>
          <p id="hero-actu-details" style="color: rgba(255,255,255,0.88); font-size: 0.88rem; margin: 0;">
            📍 ${prochain.lieu} • 📅 ${prochain.dateAffichee}
          </p>
        </div>

        <!-- Compte à rebours & CTA Inscription -->
        <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 12px;">
          <div class="compte-rebours-box">
            <div class="chronometre-unite">
              <div class="chronometre-valeur" id="compteurJours">00</div>
              <div class="chronometre-label">Jours</div>
            </div>
            <div class="chronometre-unite">
              <div class="chronometre-valeur" id="compteurHeures">00</div>
              <div class="chronometre-label">Heures</div>
            </div>
            <div class="chronometre-unite">
              <div class="chronometre-valeur" id="compteurMinutes">00</div>
              <div class="chronometre-label">Min</div>
            </div>
            <div class="chronometre-unite">
              <div class="chronometre-valeur" id="compteurSecondes">00</div>
              <div class="chronometre-label">Sec</div>
            </div>
          </div>

          <a href="${prochain.lien}" target="_blank" rel="noopener" class="bouton-cta-primaire" style="background: var(--or-gradient); color: #000000; border: none; padding: 10px 20px; font-size: 0.88rem; font-weight: 800;">
            S'inscrire sur WhatsApp →
          </a>
        </div>
      </div>
    </div>
  `;

  function rafraichirChrono() {
    const reste = targetTime - Date.now();
    if (reste <= 0) {
      initialiserCompteAReboursAutomatique();
      return;
    }

    const totalSec = Math.floor(reste / 1000);
    const d = Math.floor(totalSec / 86400);
    const h = Math.floor((totalSec % 86400) / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = Math.floor(totalSec % 60);

    const elJ = document.getElementById('compteurJours');
    const elH = document.getElementById('compteurHeures');
    const elM = document.getElementById('compteurMinutes');
    const elS = document.getElementById('compteurSecondes');

    if (elJ) elJ.textContent = String(d).padStart(2, '0');
    if (elH) elH.textContent = String(h).padStart(2, '0');
    if (elM) elM.textContent = String(m).padStart(2, '0');
    if (elS) elS.textContent = String(s).padStart(2, '0');
  }

  rafraichirChrono();
  setInterval(rafraichirChrono, 1000);
}

// 10. RACCOURCIS CLAVIER & ACCÈS DISCRET
function initialiserRaccourcisClavier() {
  // Purge de sécurité immédiate de toute trace de modale résiduelle
  try {
    const oldModal = document.getElementById('modalPresentationOfficielle');
    if (oldModal) oldModal.remove();
    document.querySelectorAll('.bouton-presentation-nav, .modal-presentation').forEach(el => el.remove());
    if (document.body.style.overflow === 'hidden') document.body.style.overflow = '';
  } catch(e) {}

  document.addEventListener('keydown', function(e) {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    // Touche Échap : Fermer les modales ouvertes
    if (e.key === 'Escape') {
      if (typeof fermerAfficheModal === 'function') fermerAfficheModal();
      if (typeof fermerSidebar === 'function') fermerSidebar();
    }

    // Ctrl + Shift + A : Accès Studio Créateur
    if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      window.location.href = 'studio/index.html';
    }
  });

  // Triple clic discret sur le pied de page pour ouvrir le Studio
  let nbClicsFooter = 0;
  let timerClicsFooter = null;
  document.addEventListener('click', function(e) {
    if (e.target && (e.target.closest('.bas-pied-site') || e.target.closest('footer'))) {
      nbClicsFooter++;
      clearTimeout(timerClicsFooter);
      if (nbClicsFooter >= 4) {
        nbClicsFooter = 0;
        window.location.href = 'studio/index.html';
      } else {
        timerClicsFooter = setTimeout(() => { nbClicsFooter = 0; }, 1200);
      }
    }
  });
}

// 12. BARRE DÉCORATIVE DE DÉFILEMENT (GOLDEN SCROLL INDICATOR)
window.addEventListener('scroll', function() {
  const bar = document.getElementById('scrollProgressBar');
  if (bar) {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, progress)) + '%';
  }
}, { passive: true });

// 13. BOUTON RETOUR EN HAUT AVEC JAUGE CIRCULAIRE PROGRESSIVE
(function() {
  function initRetourEnHaut() {
    const btn = document.getElementById('btnRetourEnHaut');
    const cercle = document.getElementById('progresCerclePath');
    if (!btn) return;

    const perimetre = 2 * Math.PI * 16; // Rayon 16 = ~100.53

    window.addEventListener('scroll', function() {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }

      if (cercle && totalHeight > 0) {
        const fraction = Math.min(1, Math.max(0, scrollY / totalHeight));
        const offset = perimetre * (1 - fraction);
        cercle.style.strokeDashoffset = offset;
      }
    }, { passive: true });

    btn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRetourEnHaut);
  } else {
    initRetourEnHaut();
  }
})();

// 14. GESTIONNAIRE PWA (APPLICATION MOBILE INSTALLABLE)
(function() {
  // A. Enregistrement du Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js')
        .then(function(reg) {
          console.log('PWA Service Worker actif sur :', reg.scope);
        })
        .catch(function(err) {
          console.warn('Erreur Service Worker PWA :', err);
        });
    });
  }

  // B. Gestion du prompt d'installation native
  let deferredPrompt = null;
  const isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferredPrompt = e;
    afficherBannierePwa();
  });

  function afficherBannierePwa() {
    if (isStandalone) return;
    if (sessionStorage.getItem('pwa_prompt_dismissed') === 'true') return;
    if (document.getElementById('bannierePwaInstall')) return;

    const banner = document.createElement('div');
    banner.id = 'bannierePwaInstall';
    banner.className = 'banniere-pwa-install';
    banner.innerHTML = `
      <div class="banniere-pwa-contenu">
        <div class="pwa-icone-wrap">
          <img src="images/icon-192.png" alt="App AEEMCI" width="38" height="38">
        </div>
        <div class="pwa-textes">
          <strong class="pwa-titre">Application AEEMCI Koumassi</strong>
          <span class="pwa-desc">Installez l'application sur votre Ã©cran d'accueil pour un accÃ¨s instantanÃ© hors-ligne.</span>
        </div>
        <div class="pwa-actions">
          <button id="btnPwaDeclencher" class="btn-pwa-installer">Installer</button>
          <button id="btnPwaFermer" class="btn-pwa-fermer" aria-label="Fermer">&times;</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);
    setTimeout(() => banner.classList.add('visible'), 1500);

    const btnInstaller = document.getElementById('btnPwaDeclencher');
    const btnFermer = document.getElementById('btnPwaFermer');

    if (btnInstaller) {
      btnInstaller.addEventListener('click', function() {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then(function(choice) {
            if (choice.outcome === 'accepted') {
              banner.classList.remove('visible');
              setTimeout(() => banner.remove(), 400);
            }
            deferredPrompt = null;
          });
        } else if (isIos) {
          alert("Pour installer l'application sur iPhone :\n1. Appuyez sur le bouton Partager en bas de Safari (carrÃ© avec une flÃ¨che vers le haut)\n2. Choisissez 'Sur l'Ã©cran d'accueil'\n3. Appuyez sur 'Ajouter'");
        }
      });
    }

    if (btnFermer) {
      btnFermer.addEventListener('click', function() {
        banner.classList.remove('visible');
        setTimeout(() => banner.remove(), 400);
        sessionStorage.setItem('pwa_prompt_dismissed', 'true');
      });
    }
  }

  // Sur iOS : afficher discrÃ¨tement aprÃ¨s 4 secondes si non installÃ©
  if (isIos && !isStandalone && !sessionStorage.getItem('pwa_prompt_dismissed')) {
    window.addEventListener('load', function() {
      setTimeout(afficherBannierePwa, 4000);
    });
  }

  // C. Ajout du bouton d'installation dans la barre latÃ©rale (Sidebar)
  document.addEventListener('DOMContentLoaded', function() {
    const sidebarEngagement = document.querySelector('.sidebar-engagement-box');
    if (sidebarEngagement && !isStandalone) {
      const btnSidebar = document.createElement('button');
      btnSidebar.className = 'sidebar-bouton-installer';
      btnSidebar.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        <span>Installer l'Application</span>
      `;
      btnSidebar.addEventListener('click', function() {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then(function(choice) {
            if (choice.outcome === 'accepted') {
              btnSidebar.style.display = 'none';
            }
            deferredPrompt = null;
          });
        } else if (isIos) {
          alert("Pour installer l'application sur iPhone :\n1. Appuyez sur Partager en bas de Safari\n2. Choisissez 'Sur l'Ã©cran d'accueil'\n3. Appuyez sur 'Ajouter'");
        } else {
          alert("L'application peut Ãªtre installÃ©e via le menu de votre navigateur (trois points en haut Ã  droite > 'Ajouter Ã  l'Ã©cran d'accueil' ou 'Installer l'application').");
        }
      });
      sidebarEngagement.appendChild(btnSidebar);
    }
  });

  window.addEventListener('appinstalled', function() {
    console.log('PWA AEEMCI Koumassi installÃ©e avec succÃ¨s !');
    const banner = document.getElementById('bannierePwaInstall');
    if (banner) banner.remove();
  });
})();
