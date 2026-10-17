/* ==========================================================================
   SITE PUBLIC AEEMCI KOUMASSI — SCRIPT DE SYNCHRONISATION DYNAMIQUE (MAIN.JS)
   Version: 20261017_pro (Optimisé Présentation Pro & Haute Performance)
   ========================================================================== */

// 📅 TABLEAU OFFICIEL DES PROCHAINS ÉVÉNEMENTS (Facilement Modifiable)
const EVENEMENTS_AEEMCI = [
  {
    id: 1,
    titre: "Double Formation Pratique : Excel & IA × Affiches & Vidéo",
    theme: "« Maîtrise des tableaux, automatisation IA & conception visuelle professionnelle »",
    date: "2026-10-18T08:00:00",
    dateAffichee: "Dimanche 18 Octobre 2026 • 08:00 - 14:00 UTC+0",
    lieu: "ISTCO La Colombe, Koumassi (en face de la Cité SIR)",
    badge: "DOUBLE FORMATION PRATIQUE",
    affiche: "images/formateurs/sawadogo-mohamed.jpg",
    lien: "https://aeemci-koumassi.github.io/formation-word/"
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

// 9. GESTION DU COMPTE À REBOURS OFFICIEL & SECTION AEEMCI ACADEMY
function initialiserCompteAReboursAutomatique() {
  // Date officielle de la Double Formation : Dimanche 18 Octobre 2026 à 08h00 GMT
  const dateCible = new Date("2026-10-18T08:00:00").getTime();

  function rafraichirChrono() {
    const maintenant = Date.now();
    const reste = dateCible - maintenant;

    const elJ = document.getElementById('pro-cd-days') || document.getElementById('compteurJours');
    const elH = document.getElementById('pro-cd-hours') || document.getElementById('compteurHeures');
    const elM = document.getElementById('pro-cd-mins') || document.getElementById('compteurMinutes');
    const elS = document.getElementById('pro-cd-secs') || document.getElementById('compteurSecondes');

    if (!elJ && !elH && !elM && !elS) return;

    if (reste <= 0) {
      if (elJ) elJ.textContent = "00";
      if (elH) elH.textContent = "00";
      if (elM) elM.textContent = "00";
      if (elS) elS.textContent = "00";
      return;
    }

    const totalSec = Math.floor(reste / 1000);
    const d = Math.floor(totalSec / 86400);
    const h = Math.floor((totalSec % 86400) / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = Math.floor(totalSec % 60);

    if (elJ) elJ.textContent = String(d).padStart(2, '0');
    if (elH) elH.textContent = String(h).padStart(2, '0');
    if (elM) elM.textContent = String(m).padStart(2, '0');
    if (elS) elS.textContent = String(s).padStart(2, '0');
  }

  rafraichirChrono();
  setInterval(rafraichirChrono, 1000);
}

// 10. GESTION DES INSCRIPTIONS AEEMCI ACADEMY & GÉNÉRATION DU BILLET QR
function soumettreInscriptionAcademy(event) {
  if (event) event.preventDefault();

  const nom = (document.getElementById('f-nom')?.value || '').trim();
  const whatsapp = (document.getElementById('f-whatsapp')?.value || '').trim();
  const email = (document.getElementById('f-email')?.value || '').trim();
  const formation = document.getElementById('f-formation')?.value || 'Pack Complet (Excel & IA + Design/Vidéo)';
  const ordi = document.getElementById('f-ordi')?.value || 'Oui';
  const statut = document.getElementById('f-statut')?.value || 'Étudiant';
  const genre = document.getElementById('f-genre')?.value || 'Homme';

  if (!nom || !whatsapp) {
    showToast("Veuillez renseigner votre nom et votre numéro WhatsApp.");
    return;
  }

  const codeTicket = 'TKT-EXCEL-IA-' + Math.floor(1000 + Math.random() * 9000);

  const inscriptionData = {
    nom,
    whatsapp,
    email,
    formation,
    ordi,
    statut,
    genre,
    codeTicket,
    dateInscription: new Date().toISOString()
  };

  try {
    localStorage.setItem('aeemci_academy_registration', JSON.stringify(inscriptionData));
  } catch(e) {}

  appliquerDonneesBillet(inscriptionData);

  // Basculer vers l'état "En attente d'approbation" (Exactement conforme à l'Image 2)
  const formState = document.getElementById('event-form-state');
  const approvedState = document.getElementById('event-approved-state');
  if (formState) formState.classList.add('hidden');
  if (approvedState) approvedState.classList.remove('hidden');

  // Mettre à jour le compteur social
  const socialCount = document.getElementById('social-participant-count');
  if (socialCount) {
    const act = parseInt(socialCount.textContent) || 48;
    socialCount.textContent = act + 1;
  }

  showToast("Félicitations " + nom.split(' ')[0] + " ! Inscription enregistrée.");
}

function appliquerDonneesBillet(data) {
  const elNom = document.getElementById('ticket-nom-display');
  const elContact = document.getElementById('ticket-contact-display');
  const elFormation = document.getElementById('ticket-formation-display');
  const elCode = document.getElementById('ticket-code-display');
  const elQR = document.getElementById('ticket-qrcode-img');
  const elWaShare = document.getElementById('ticket-whatsapp-share');

  if (elNom) elNom.textContent = data.nom || 'Participant Officiel';
  if (elContact) elContact.textContent = data.whatsapp || '+225 07 11 98 58 10';
  if (elFormation) elFormation.textContent = data.formation || 'Pack Complet (Excel & IA + Design & Vidéo)';
  if (elCode) elCode.textContent = data.codeTicket || 'TKT-EXCEL-DESIGN-0042';

  const qrPayload = encodeURIComponent(
    `AEEMCI PASS: ${data.codeTicket} | ${data.nom} | ${data.whatsapp} | ${data.formation} | 18-OCT-2026 ISTCO LA COLOMBE`
  );
  if (elQR) {
    elQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrPayload}`;
  }

  if (elWaShare) {
    const waText = encodeURIComponent(
      `Assalamou aleykoum ! J'ai réservé mon Pass pour la Double Formation Pratique AEEMCI Koumassi le Dimanche 18 Octobre 2026.\nMon Billet : ${data.codeTicket}\nNom : ${data.nom}\nAtelier : ${data.formation}`
    );
    elWaShare.href = `https://wa.me/2250711985810?text=${waText}`;
  }
}

function chargerInscriptionExistante() {
  try {
    const raw = localStorage.getItem('aeemci_academy_registration');
    if (raw) {
      const data = JSON.parse(raw);
      if (data && data.nom) {
        appliquerDonneesBillet(data);
        const formState = document.getElementById('event-form-state');
        const approvedState = document.getElementById('event-approved-state');
        if (formState && approvedState) {
          formState.classList.add('hidden');
          approvedState.classList.remove('hidden');
        }
      }
    }
  } catch(e) {}
}

function openTicketModal() {
  const modal = document.getElementById('ticketModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeTicketModal() {
  const modal = document.getElementById('ticketModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function openGoogleCalendar() {
  const calUrl = "https://www.google.com/calendar/render?action=TEMPLATE&text=" +
    encodeURIComponent("Double Formation Pratique AEEMCI Koumassi : Excel & IA x Affiches & Vidéo") +
    "&dates=20261018T080000Z/20261018T140000Z" +
    "&details=" + encodeURIComponent("Double formation pratique gratuite organisée par l'AEEMCI Sous-comité de Koumassi. Excel & IA avec Djim Aboubacar + Design & Vidéo avec Sawadogo Mohamed.") +
    "&location=" + encodeURIComponent("ISTCO La Colombe, Koumassi (en face de la Cité SIR), Abidjan");
  window.open(calUrl, '_blank');
}

function copyVenueAddress() {
  const adresse = "ISTCO La Colombe, Koumassi (en face de la Cité SIR, proche du Carrefour Sans Fil), Abidjan";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(adresse).then(() => {
      showToast("Adresse du lieu copiée dans le presse-papier !");
    }).catch(() => {
      showToast("Lieu : ISTCO La Colombe Koumassi (Cité SIR)");
    });
  } else {
    showToast("Lieu : ISTCO La Colombe Koumassi (Cité SIR)");
  }
}

function resetRegistrationForm() {
  const formState = document.getElementById('event-form-state');
  const approvedState = document.getElementById('event-approved-state');
  if (formState && approvedState) {
    approvedState.classList.add('hidden');
    formState.classList.remove('hidden');
  }
}

function toggleAcademyFaq(btn) {
  if (!btn) return;
  const tile = btn.closest('.faq-tile');
  if (tile) {
    tile.classList.toggle('open');
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast) return;
  if (toastMsg && msg) toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Exposer les fonctions globales indispensables
window.soumettreInscriptionAcademy = soumettreInscriptionAcademy;
window.openTicketModal = openTicketModal;
window.closeTicketModal = closeTicketModal;
window.openGoogleCalendar = openGoogleCalendar;
window.copyVenueAddress = copyVenueAddress;
window.resetRegistrationForm = resetRegistrationForm;
window.toggleAcademyFaq = toggleAcademyFaq;
window.showToast = showToast;

// 11. RACCOURCIS CLAVIER & ACCÈS DISCRET
function initialiserRaccourcisClavier() {
  // Purge de sécurité immédiate de toute trace de modale présentation résiduelle
  try {
    const oldModal = document.getElementById('modalPresentationOfficielle');
    if (oldModal) oldModal.remove();
    document.querySelectorAll('.bouton-presentation-nav, .modal-presentation').forEach(el => el.remove());
    if (document.body.style.overflow === 'hidden') document.body.style.overflow = '';
  } catch(e) {}

  // Charger une inscription préalablement enregistrée
  chargerInscriptionExistante();

  document.addEventListener('keydown', function(e) {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    // Touche Échap : Fermer les modales ouvertes
    if (e.key === 'Escape') {
      closeTicketModal();
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

