/* ==========================================================================
   SITE PUBLIC AEEMCI KOUMASSI â€” SCRIPT DE SYNCHRONISATION DYNAMIQUE (MAIN.JS 2026)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  lancerSynchronisationGlobale();
  initialiserAnimationsScroll();
  initialiserCompteursChiffres();
  initialiserBlocProchainsEvenements();
});

// Ã‰couteurs d'Ã©vÃ©nements temps rÃ©el pour mise Ã  jour instantanÃ©e sans rechargement de page
window.addEventListener('storage', function() {
  lancerSynchronisationGlobale();
});

window.addEventListener('focus', function() {
  lancerSynchronisationGlobale();
});

// Cache lÃ©ger local
const CMS_CACHE = {
  lastFetch: 0,
  ttl: 5 * 60 * 1000,
  isExpired: function() { return Date.now() - this.lastFetch > this.ttl; },
  updateTimestamp: function() { this.lastFetch = Date.now(); }
};

async function lancerSynchronisationGlobale() {
  if (!CMS_CACHE.isExpired()) {
    await synchroniserStatistiquesPublic();
    return;
  }

  await synchroniserBureauPublic();
  await synchroniserActualitesPublic();
  await synchroniserFormationsPublic();
  await synchroniserStatistiquesPublic();
  await synchroniserGaleriePublic();
  await synchroniserContactPublic();
  CMS_CACHE.updateTimestamp();
}

// 1. Synchronisation de la PrÃ©sidence & Mot du PrÃ©sident
async function synchroniserBureauPublic() {
  let bureau = await window.cmsRead.fetchSection('bureau');
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
    console.warn("Mise Ã  jour dynamique de la prÃ©sidence ignorÃ©e.");
  }
}

// 2. Synchronisation Dynamique des Ã‰vÃ©nements & ActualitÃ©s
async function synchroniserActualitesPublic() {
  let actualites = await window.cmsRead.fetchSection('actualites');
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
            categorie: c.badge || 'Ã‰VÃ‰NEMENT',
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
      article.innerHTML = 
        <div class="carte-actu-image">
          <span class="carte-actu-badge or"></span>
          <img src="" alt="" loading="lazy" onerror="this.src='images/logo.png';">
        </div>
        <div class="carte-actu-corps">
          <span class="carte-actu-date">ðŸ“…  </span>
          <h3 class="carte-actu-titre"></h3>
          <p class="carte-actu-desc"></p>
        </div>
      ;
      container.appendChild(article);
    });
  }
}

// 3. Synchronisation Dynamique des Modules de Formation
async function synchroniserFormationsPublic() {
  let formations = await window.cmsRead.fetchSection('formations');
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
        item.innerHTML = 
          <div>
            <span class="badge-tag or" style="margin-bottom: 10px; display: inline-block;">Module Officiel</span>
            <h3 style="font-size: 1.2rem; color: var(--vert-emeraude); font-weight: 800; margin-bottom: 8px;"></h3>
            <p style="font-size: 0.9rem; color: var(--texte-doux); line-height: 1.6; margin-bottom: 16px;"></p>
          </div>
          <div>
            <a href="" target="_blank" rel="noopener" class="bouton-action-contour" style="width: 100%; justify-content: center; font-weight: 700;">
              RÃ©server ma place sur WhatsApp â†’
            </a>
          </div>
        ;
        container.appendChild(item);
      });
    }
  } catch (e) {
    console.warn("Mise Ã  jour des formations ignorÃ©e.");
  }
}

// 4. Synchronisation des Compteurs Statistiques
async function synchroniserStatistiquesPublic() {
  let militants = await window.cmsRead.fetchMilitants();
  if (!militants) {
    const militantsRaw = localStorage.getItem('aeemci_militants_db');
    try { if (militantsRaw) militants = JSON.parse(militantsRaw); } catch(e){}
  }
  if (!militants) return;

  try {
    const totalValides = militants.filter(m => m.statut === 'valide').length || militants.length;

    const statMilitants = document.getElementById('publicStatMilitants') || document.querySelector('.carte-chiffre-cle:nth-child(1) .chiffre-cle');
    if (statMilitants && totalValides > 0) {
      statMilitants.textContent = totalValides + '+';
    }
  } catch (e) {
    console.warn("Mise Ã  jour des statistiques ignorÃ©e.");
  }
}

// 5. Synchronisation Galerie
async function synchroniserGaleriePublic() {
  let listCMS = await window.cmsRead.fetchSection('galerie');
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
      item.innerHTML = 
        <img src="" alt="" loading="lazy" onerror="this.src='images/logo.png';">
        <div class="carte-galerie-overlay">
          <span class="carte-galerie-cat">Nouveau â€¢ ActivitÃ© Koumassi</span>
          <h3 class="carte-galerie-titre"></h3>
        </div>
      ;
      container.insertBefore(item, container.firstChild);
    });
  }
}

// 6. Synchronisation CoordonnÃ©es
async function synchroniserContactPublic() {
  let contact = await window.cmsRead.fetchSection('contact');
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
    horairesEls.forEach(el => el.textContent = contact.horaires || 'Chaque Samedi Ã  15H00');
    if (contact.whatsappLink) {
      whatsappLinks.forEach(a => a.href = contact.whatsappLink);
    }
  } catch (e) {
    console.warn("Mise Ã  jour des coordonnÃ©es du footer ignorÃ©e.");
  }
}

// 7. Animations au DÃ©filement
function initialiserAnimationsScroll() {
  const observerOptions = { threshold: 0.15 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('section, .carte-pilier-moderne, .etape-carte').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// 8. Animations Compteurs
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
      el.textContent = ${prefix};
      clearInterval(timer);
    } else {
      el.textContent = ${prefix};
    }
  }, pasTemps);
}

// 9. SYSTEM DYNAMIQUE PROCHAINS Ã‰VÃ‰NEMENTS (SANS COMPTE Ã€ REBOURS BLOQUÃ‰ + MASQUAGE AUTOMATIQUE DES Ã‰VÃ‰NEMENTS PASSÃ‰S)
window.PROCHAINS_EVENEMENTS = [
  {
    id: 1,
    titre: "Nuit Du MAHOULOUD 2026",
    badge: "PROCHAIN Ã‰VÃ‰NEMENT",
    dateISO: "2026-10-25T20:00:00",
    dateAffichee: "Nuit du 25 au 26 Octobre 2026 â€¢ DÃ¨s 20H00",
    lieu: "CollÃ¨ge Moderne La Colombe, Koumassi",
    theme: "Le Sermon d'Adieu : enseignements et leÃ§ons pour le jeune musulman",
    image: "images/maouloud.jpg",
    lienWhatsApp: "https://chat.whatsapp.com/KUd1Zmc2JEfBsIWdH5HPdm"
  },
  {
    id: 2,
    titre: "JournÃ©e de l'Excellence & de la Culture 2026",
    badge: "EXCELLENCE",
    dateISO: "2026-11-15T09:00:00",
    dateAffichee: "Dimanche 15 Novembre 2026 Ã  09H00",
    lieu: "CollÃ¨ge Moderne La Colombe, Koumassi",
    theme: "RÃ©compense des laurÃ©ats aux examens scolaires et concours coraniques de Koumassi",
    image: "images/journee-excellence.jpg",
    lienWhatsApp: "https://chat.whatsapp.com/KUd1Zmc2JEfBsIWdH5HPdm"
  }
];

function initialiserBlocProchainsEvenements() {
  const container = document.getElementById('section-widget-evenement');
  if (!container) return;

  const now = Date.now();
  // Filtrage automatique : conserver uniquement les Ã©vÃ©nements futurs (dateISO >= now)
  const evenementsFuturs = window.PROCHAINS_EVENEMENTS.filter(item => {
    const time = new Date(item.dateISO).getTime();
    return !isNaN(time) && time > now;
  }).sort((a, b) => new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime());

  if (evenementsFuturs.length > 0) {
    const prochain = evenementsFuturs[0];
    const targetTime = new Date(prochain.dateISO).getTime();

    container.innerHTML = 
      <div class="conteneur">
        <div class="banniere-evenement-compteur">
          <div style="position: relative; cursor: pointer;">
            <img id="hero-actu-image" loading="lazy" src="" alt="" style="width: 95px; height: 125px; object-fit: cover; border-radius: 12px; border: 2px solid var(--or); box-shadow: 0 8px 20px rgba(0,0,0,0.3);" onerror="this.src='images/logo.png';">
          </div>
          <div style="flex: 1;">
            <span class="badge-tag or" style="margin-bottom: 8px; font-weight: 800;"></span>
            <h3 style="font-size: 1.45rem; color: #FFFFFF; font-family: var(--font-titre); margin-bottom: 6px;"></h3>
            <div style="font-size: 0.92rem; color: var(--or-clair); font-weight: 700; margin-bottom: 6px;">
              ThÃ¨me : Â«  Â»
            </div>
            <p style="color: rgba(255,255,255,0.9); font-size: 0.88rem; margin: 0;">
              ðŸ“  â€¢ ðŸ“… 
            </p>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
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
            <a href="" target="_blank" rel="noopener" class="bouton-cta-primaire" style="background: var(--or-gradient); color: #000000; border: none; padding: 10px 20px; font-size: 0.88rem; font-weight: 800; border-radius: 30px;">
              S'inscrire via WhatsApp â†’
            </a>
          </div>
        </div>
      </div>
    ;

    function demarrerChrono() {
      const diff = targetTime - Date.now();
      if (diff <= 0) {
        initialiserBlocProchainsEvenements();
        return;
      }
      const totalSec = Math.floor(diff / 1000);
      const j = Math.floor(totalSec / 86400);
      const h = Math.floor((totalSec % 86400) / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = Math.floor(totalSec % 60);

      const elJ = document.getElementById('compteurJours');
      const elH = document.getElementById('compteurHeures');
      const elM = document.getElementById('compteurMinutes');
      const elS = document.getElementById('compteurSecondes');

      if (elJ) elJ.textContent = String(j).padStart(2, '0');
      if (elH) elH.textContent = String(h).padStart(2, '0');
      if (elM) elM.textContent = String(m).padStart(2, '0');
      if (elS) elS.textContent = String(s).padStart(2, '0');
    }

    demarrerChrono();
    setInterval(demarrerChrono, 1000);
  } else {
    // Si aucun Ã©vÃ©nement futur n'est trouvÃ©, afficher la banniÃ¨re d'information claire
    container.innerHTML = 
      <div class="conteneur">
        <div class="banniere-evenement-compteur" style="justify-content: space-between; gap: 20px;">
          <div>
            <span class="badge-tag or" style="margin-bottom: 8px;">Agenda du Sous-ComitÃ©</span>
            <h3 style="font-size: 1.35rem; color: #FFFFFF; font-family: var(--font-titre); margin-bottom: 4px;">Prochants Ã‰vÃ©nements &amp; Rassemblements</h3>
            <p style="color: rgba(255,255,255,0.9); font-size: 0.92rem; margin: 0;">
              Le calendrier des prochains sÃ©minaires et confÃ©rences sera publiÃ© sous peu. Rejoignez notre groupe WhatsApp officiel pour recevoir les invitations en direct !
            </p>
          </div>
          <a href="https://chat.whatsapp.com/KUd1Zmc2JEfBsIWdH5HPdm" target="_blank" rel="noopener" class="bouton-cta-primaire" style="background: var(--or-gradient); color: #000000; border: none; padding: 12px 24px; font-size: 0.92rem; font-weight: 800; border-radius: 30px; white-space: nowrap;">
            Rejoindre sur WhatsApp â†’
          </a>
        </div>
      </div>
    ;
  }
}

// 10. AccÃ¨s Raccourci Studio (Ctrl + Shift + A)
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
    e.preventDefault();
    window.location.href = 'studio/index.html';
  }
});