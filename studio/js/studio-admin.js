/* ==========================================================================
   STUDIO AEEMCI KOUMASSI 3.0 — MOTEUR D'ADMINISTRATION CMS COMPLET (STUDIO-ADMIN)
   ========================================================================== */

const CMS_DEFAUTS = {
  config: {
    siteTitre: "AEEMCI Sous-Comité de Koumassi — Pour une identité islamique !",
    siteDescription: "Site officiel du Sous-Comité AEEMCI de Koumassi : activités, éducation, solidarité et vie associative des élèves et étudiants musulmans de Koumassi.",
    logoUrl: "images/logo.png",
    maouloudDate: "2026-08-25T20:00:00",
    footerCopyright: "© 2025 - 2026 AEEMCI Sous-Comité de Koumassi. Tous droits réservés.",
    mandatLabel: "🟢 Mandat Exécutif 2025–2026",
  },
  hero: {
    slogan1: "AEEMCI, Pour une identité islamique !",
    slogan2: "« Ensemble nous sommes plus forts »",
    titre: "Sous-Comité AEEMCI de Koumassi",
    accentKoumassi: "Koumassi",
    description: "Cultiver la foi, bâtir la réussite scolaire et promouvoir la solidarité parmi les élèves et étudiants musulmans de la commune de Koumassi.",
    ctaPrimaireTexte: "Découvrir nos activités",
    ctaPrimaireLien: "activites.html",
    ctaSecondaireTexte: "Devenir membre",
    ctaSecondaireLien: "contact.html#adhesion",
    medaillonNom: "AEEMCI Koumassi",
    medaillonDevise: "« Il n'y a de divinité qu'Allah et Mouhammad est Son Messager »",
  },
  historique: {
    badge: "Notre Histoire & Vision",
    titre: "De 1972 à Aujourd'hui",
    description: "Découvrez les origines nationales de l'AEEMCI et l'ancrage territorial du Sous-Comité de Koumassi.",
    etapes: [
      { annee: "1972 – 1979", titre: "Fondation & Reconnaissance Nationale", desc: "Création à l'Université de Cocody en 1972, tenue du Congrès constitutif historique en 1975 et reconnaissance officielle par l'État de Côte d'Ivoire le 12 avril 1979." },
      { annee: "1980 – 1990", titre: "Implantation à Koumassi", desc: "Naissance et structuration du Sous-Comité Koumassi pour encadrer les élèves et étudiants des collèges et lycées à travers des cours de soutien et la formation spirituelle." },
      { annee: "2000 – 2010", titre: "Ancrage Communal & Projets Sociaux", desc: "Affinement des organes de base, consolidation des cours de révision et ancrage social fort au service de la jeunesse de Koumassi." },
      { annee: "Mandat 2025 – 2026", titre: "Initiatives Clés & « Ensemble nous sommes plus forts »", desc: "Organisation de la Journée Culturelle d'Excellence de Koumassi (Collège Moderne La Colombe), Assises de la Jeunesse et dynamique d'excellence sous la présidence de Sow Mohamed." },
    ]
  },
  impact: {
    badge: "RÉSULTATS & CHIFFRES CLÉS",
    titre: "L'Impact de l'AEEMCI Koumassi",
    description: "Des résultats concrets qui témoignent du dynamisme, de la rigueur et de l'engagement de notre sous-comité.",
    stats: [
      { valeur: "+20", titre: "Sections Actives", desc: "Établissements secondaires et supérieurs encadrés à Koumassi." },
      { valeur: "+500", titre: "Militants Encadrés", desc: "Élèves et étudiants suivis et formés chaque année." },
      { valeur: "95%", titre: "Taux de Réussite", desc: "Succès aux examens officiels (BEPC, BAC) des membres suivis." },
      { valeur: "+50 Ans", titre: "D'Engagement & d'Histoire", desc: "Plus d'un demi-siècle de leadership (Fondée en 1975, agréée en 1979)." },
    ]
  },
  piliers: {
    badge: "Nos Missions",
    titre: "Un Engagement à Quatre Dimensions",
    description: "Chaque projet du Sous-Comité de Koumassi est guidé par nos piliers fondamentaux.",
    items: [
      { icone: "📖", titre: "Formation Religieuse", desc: "Cours de Coran, apprentissage du Tajwid, séances de Tafsir et causeries pour ancrer les membres dans une foi vive et éclairée.", points: ["Cours de Tajwid & Mémorisation", "Causeries morales du Vendredi", "Nuit du Mahouloud & Retraites spirituelles"] },
      { icone: "🎓", titre: "Réussite Académique", desc: "Groupes de révision collective, tutorat entre étudiants et parrainage des candidats aux examens officiels (BEPC, BAC).", points: ["Cours de renforcement gratuits", "Préparation intensive aux examens", "Orientation & Mentorat universitaire"] },
      { icone: "🌟", titre: "Leadership & Développement Personnel", desc: "Ateliers pratiques de prise de parole en public, rédaction administrative, montage de Termes de Référence (TDR), gestion de projets associatifs et éthique du jeune dirigeant.", points: ["Ateliers de prise de parole en public", "Rédaction administrative & TDR", "Gestion de projets & Éthique associative"] },
      { icone: "🤝", titre: "Cohésion Sociale, Sport & Solidarité", desc: "Tournois sportifs inter-sections, journées récréatives, sorties d'intégration et caravanes sociales de dons et d'entraide auprès des familles et militants de la commune de Koumassi.", points: ["Tournois de Maracana inter-sections", "Sorties d'intégration & Pique-niques", "Actions caritatives & Entraide communautaire"] },
    ]
  },
  temoignages: {
    badge: "Témoignages & Récits d'Impact",
    titre: "Paroles de Militants & Alumni",
    description: "Découvrez l'expérience de ceux qui vivent et ont vécu l'encadrement formateur de l'AEEMCI Koumassi.",
    list: [
      { texte: "L'AEEMCI Koumassi a été pour moi une véritable école du leadership, de l'humilité et du service de la communauté. J'y ai appris à structurer des projets, à m'exprimer sans aucun trac et à concilier la foi et l'excellence dans les études.", auteur: "Sow Mohamed", role: "Président du Mandat 2025 – 2026", photo: "images/membres/sow-mohamed.jpg" },
      { texte: "Les séances de révision collective et les modules de formation en prise de parole ont énormément renforcé ma confiance grâce aux précieux conseils et à la bienveillance des aînés du sous-comité !", auteur: "Konate Mariam", role: "Vice-Présidente & Étudiante", photo: "images/membres/konate-mariam.jpg" },
      { texte: "Rejoindre le Sous-Comité de Koumassi, c'est intégrer une famille soudée. Les formations gratuites en rédaction administrative et TDR m'apportent aujourd'hui des compétences très concrètes pour ma carrière.", auteur: "Diabate Fode", role: "Secrétaire Général", photo: "images/membres/diabate-fode.jpg" },
    ]
  },
  bureau: {
    mandat: "Mandat 2025 – 2026",
    motDuPresident: "L'AEEMCI Koumassi s'engage résolument pour l'excellence académique, spirituelle et l'épanouissement de la jeunesse musulmane.",
    presidentNom: "Sow Mohamed",
    presidentTitre: "Président Exécutif",
    presidentMandat: "Mandat 2025 – 2026",
    presidentMot: "L'AEEMCI Koumassi s'engage résolument pour l'excellence académique, spirituelle et l'épanouissement de la jeunesse musulmane.",
    membres: [
      { id: 1, nom: "Sow Mohamed", titre: "Président Exécutif", photo: "images/membres/sow-mohamed.jpg", ordre: 1 },
      { id: 2, nom: "Diabaté Fodé", titre: "Secrétaire Général", photo: "images/membres/diabate-fode.jpg", ordre: 2 },
      { id: 3, nom: "Kokora Mohamed", titre: "Chargé de Communication", photo: "images/membres/kokora-mohamed.jpg", ordre: 3 }
    ],
    contactTel1: "+225 05 45 30 51 80",
    contactTel2: "+225 07 57 47 73 72",
    adresseSiège: "Koumassi Sicogi, Collège La Colombe"
  },
  actualites: [
    {
      id: 101,
      titre: "Nuit Du MAHOULOUD 2026",
      categorie: "PROCHAIN ÉVÉNEMENT",
      date: "Nuit du 25 au 26 Août 2026 • Dès 20H",
      lieu: "Collège Moderne La Colombe (Koumassi)",
      description: "Thème : « Le Sermon d'Adieu : enseignements et leçons pour le musulman ». Célébration spirituelle & veillée d'invocations.",
      image: "images/maouloud.jpg"
    },
    {
      id: 102,
      titre: "SECOFIS 2026",
      categorie: "FORMATION",
      date: "22 au 28 juillet 2026",
      lieu: "Koumassi",
      description: "Séminaire d'orientation et de formation axé sur le renforcement des capacités, l'initiation professionnelle et le développement personnel.",
      image: "images/secofis.jpg"
    },
    {
      id: 103,
      titre: "SEFORES & Rentrée Solennelle",
      categorie: "ÉVÉNEMENT",
      date: "18 janvier 2026",
      lieu: "Koumassi",
      description: "Cérémonie officielle marquant le lancement des activités de l'année et le déploiement de la feuille de route du bureau sous le thème « Ensemble nous sommes plus forts ».",
      image: "images/rentree-solennelle.jpg"
    },
    {
      id: 104,
      titre: "Nuit de Prière & Veillée Spirituelle",
      categorie: "SPIRITUALITÉ",
      date: "23 Mai 2026",
      lieu: "Koumassi",
      description: "Veillée spirituelle de recueillement, d'invocations, de lecture coranique et de rappels religieux pour raffermir les cœurs.",
      image: "images/nuit-priere.jpg"
    },
    {
      id: 105,
      titre: "Journée de l'Excellence & de la Culture",
      categorie: "EXCELLENCE",
      date: "10 Mai 2026",
      lieu: "Koumassi",
      description: "Grand rassemblement annuel récompensant les meilleurs candidats et lauréats aux examens scolaires et concours coraniques de la commune de Koumassi.",
      image: "images/journee-excellence.jpg"
    },
    {
      id: 106,
      titre: "Iftar Solidaire & Partage Fraternel",
      categorie: "ACTION SOCIALE",
      date: "18 Mars 2026",
      lieu: "Koumassi",
      description: "Organisation de repas collectifs de rupture du jeûne et distribution de kits alimentaires d'urgence aux familles et étudiants dans le besoin.",
      image: "images/solidarite-ramadan.jpg"
    }
  ],
  formations: [
    {
      id: 201,
      intitule: "Module 1 : Tajwid & Coran",
      description: "Perfectionnement dans la récitation coranique et règles de Tajwid dispensé par des maîtres qualifiés.",
      lien: "https://wa.me/2250545305180?text=Je%20souhaite%20m'inscrire%20au%20module%20Tajwid",
      inscrits: 84
    },
    {
      id: 202,
      intitule: "Module 2 : Art Oratoire & Prise de Parole",
      description: "Techniques d'art oratoire, maîtrise de soi, structuration de discours et éloquence en public.",
      lien: "https://wa.me/2250545305180?text=Je%20souhaite%20m'inscrire%20au%20module%20Art%20Oratoire",
      inscrits: 120
    },
    {
      id: 203,
      intitule: "Module 3 : Soutien Scolaire BEPC & BAC",
      description: "Encadrement intensif en Mathématiques, Physique-Chimie, SVT et Français pour les candidats aux examens.",
      lien: "https://wa.me/2250545305180?text=Je%20souhaite%20m'inscrire%20au%20Soutien%20Scolaire",
      inscrits: 195
    }
  ],
  galerie: [],
  contact: {
    adresse: "Koumassi Sicogi, Collège La Colombe",
    tel1: "+225 05 45 30 51 80",
    tel2: "+225 07 57 47 73 72",
    email: "aeemci.koumassi@gmail.com",
    horaires: "Chaque Samedi à 15H00 (IST-ISG La Colombe)",
    whatsappLink: "https://chat.whatsapp.com/KUd1Zmc2JEfBsIWdH5HPdm"
  }
};

// Système de Notifications Toast pour une meilleure UX
window.showToast = function(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icon = type === 'success' ? '✅' : (type === 'error' ? '❌' : 'ℹ️');
  toast.innerHTML = `<span class="toast-icon">${icon}</span> <span class="toast-msg">${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

// Compression locale Canvas HD ultra-performante
window.compresserImageCanvas = function(base64Str, maxDimension, quality, callback) {
  const img = new Image();
  img.onload = function() {
    let width = img.width;
    let height = img.height;

    if (width > maxDimension || height > maxDimension) {
      if (width > height) {
        height = Math.round((height * maxDimension) / width);
        width = maxDimension;
      } else {
        width = Math.round((width * maxDimension) / height);
        height = maxDimension;
      }
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);

    const compressedUrl = canvas.toDataURL('image/jpeg', quality || 0.75);
    callback(compressedUrl);
  };
  img.onerror = function() {
    callback(base64Str);
  };
  img.src = base64Str;
};

document.addEventListener('DOMContentLoaded', async function() {
  initialiserDonneesCMS();
  chargerConfigForms();
  chargerProfilPresidentForm();
  chargerBureauCMS();
  chargerActualitesCMS();
  chargerFormationsCMS();
  chargerGalerieCMS();
  await chargerMilitantsCMS();
  chargerContactForm();
  initialiserDragAndDropGalerie();
  actualiserVueEnsembleKPI();
});

function initialiserDonneesCMS() {
  const cles = ['config', 'hero', 'historique', 'impact', 'piliers', 'temoignages', 'bureau', 'actualites', 'formations', 'contact'];
  cles.forEach(cle => {
    if (!localStorage.getItem(`aeemci_cms_${cle}`)) {
      localStorage.setItem(`aeemci_cms_${cle}`, JSON.stringify(CMS_DEFAUTS[cle]));
    }
  });
  if (!localStorage.getItem('aeemci_cms_galerie')) {
    localStorage.setItem('aeemci_cms_galerie', JSON.stringify([]));
  }
}

function actualiserVueEnsembleKPI() {
  const militants = JSON.parse(localStorage.getItem('aeemci_militants_db')) || [];
  const actualites = JSON.parse(localStorage.getItem('aeemci_cms_actualites')) || CMS_DEFAUTS.actualites;
  const galerie = JSON.parse(localStorage.getItem('aeemci_cms_galerie')) || [];

  const kpiTotal = document.getElementById('kpiOverviewTotal');
  const kpiAttente = document.getElementById('kpiOverviewAttente');
  const kpiEvents = document.getElementById('kpiOverviewEvents');
  const kpiPhotos = document.getElementById('kpiOverviewPhotos');
  const badgeSide = document.getElementById('sidebarBadgeAttente');

  const nbAttentes = militants.filter(m => m.statut === 'attente').length;

  if (kpiTotal) kpiTotal.textContent = militants.filter(m => m.statut === 'valide').length || militants.length || 500;
  if (kpiAttente) kpiAttente.textContent = nbAttentes;
  if (badgeSide) badgeSide.textContent = nbAttentes;
  if (kpiEvents) kpiEvents.textContent = actualites.length;
  if (kpiPhotos) kpiPhotos.textContent = galerie.length || 24;
}

function chargerConfigForms() {
  const config = JSON.parse(localStorage.getItem('aeemci_cms_config')) || CMS_DEFAUTS.config;
  if (document.getElementById('cmsConfigTitre')) document.getElementById('cmsConfigTitre').value = config.siteTitre || '';
  if (document.getElementById('cmsConfigDesc')) document.getElementById('cmsConfigDesc').value = config.siteDescription || '';
  if (document.getElementById('cmsConfigMaouloudDate')) document.getElementById('cmsConfigMaouloudDate').value = config.maouloudDate || '';
}

function chargerProfilPresidentForm() {
  const bureau = JSON.parse(localStorage.getItem('aeemci_cms_bureau')) || CMS_DEFAUTS.bureau;

  if (document.getElementById('cmsPresidentNom')) document.getElementById('cmsPresidentNom').value = bureau.presidentNom || 'Sow Mohamed';
  if (document.getElementById('cmsPresidentTitre')) document.getElementById('cmsPresidentTitre').value = bureau.presidentTitre || 'Président Exécutif';
  if (document.getElementById('cmsPresidentMandat')) document.getElementById('cmsPresidentMandat').value = bureau.presidentMandat || bureau.mandat || 'Mandat 2025 – 2026';
  if (document.getElementById('cmsPresidentMot')) document.getElementById('cmsPresidentMot').value = bureau.presidentMot || bureau.motDuPresident || '';
}

window.enregistrerConfigCMS = async function(e) {
  if (e) e.preventDefault();
  const config = {
    siteTitre: document.getElementById('cmsConfigTitre')?.value.trim(),
    siteDescription: document.getElementById('cmsConfigDesc')?.value.trim(),
    maouloudDate: document.getElementById('cmsConfigMaouloudDate')?.value,
    logoUrl: "images/logo.png",
    footerCopyright: "© 2025 - 2026 AEEMCI Sous-Comité de Koumassi. Tous droits réservés."
  };
  localStorage.setItem('aeemci_cms_config', JSON.stringify(config));
  if (window.cmsDb && typeof window.cmsDb.saveSection === 'function') {
    await window.cmsDb.saveSection('config', config);
  }
  showToast("✅ Configuration générale enregistrée avec succès !");
};

window.enregistrerBureauCMS = async function(e) {
  if (e) e.preventDefault();

  let bureau = JSON.parse(localStorage.getItem('aeemci_cms_bureau')) || CMS_DEFAUTS.bureau;

  const nom = document.getElementById('cmsPresidentNom')?.value.trim();
  const titre = document.getElementById('cmsPresidentTitre')?.value.trim();
  const mandat = document.getElementById('cmsPresidentMandat')?.value.trim();
  const mot = document.getElementById('cmsPresidentMot')?.value.trim();
  const fileInput = document.getElementById('cmsPresidentPhotoFile');

  if (nom) bureau.presidentNom = nom;
  if (titre) bureau.presidentTitre = titre;
  if (mandat) {
    bureau.presidentMandat = mandat;
    bureau.mandat = mandat;
  }
  if (mot) {
    bureau.presidentMot = mot;
    bureau.motDuPresident = mot;
  }

  const sauvegarder = async () => {
    localStorage.setItem('aeemci_cms_bureau', JSON.stringify(bureau));
    if (window.cmsDb && typeof window.cmsDb.saveSection === 'function') {
      await window.cmsDb.saveSection('bureau', bureau);
    }
    showToast("✅ Les informations du Président ont été enregistrées et mises à jour !");
  };

  if (fileInput && fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      window.compresserImageCanvas(evt.target.result, 600, 0.8, function(photoCompressee) {
        bureau.presidentPhoto = photoCompressee;
        sauvegarder();
      });
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    await sauvegarder();
  }
};

// 1. GESTION DYNAMIQUE DU BUREAU EXÉCUTIF
function chargerBureauCMS() {
  const bureau = JSON.parse(localStorage.getItem('aeemci_cms_bureau')) || CMS_DEFAUTS.bureau;
  const container = document.getElementById('containerBureauCMS');
  if (!container) return;

  container.innerHTML = '';

  const tableDiv = document.createElement('div');
  tableDiv.className = 'carte-tableau';
  tableDiv.innerHTML = `
    <div class="tableau-header">
      <div class="tableau-titre"><h3>Membres du Bureau Exécutif</h3></div>
      <button class="bouton-action-pro" onclick="ouvrirModalMembreBureau()">➕ Ajouter un Membre</button>
    </div>
    <div class="table-responsive">
      <table class="studio-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Nom &amp; Prénoms</th>
            <th>Poste / Titre</th>
            <th>Ordre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="tbodyBureauCMS"></tbody>
      </table>
    </div>
  `;
  container.appendChild(tableDiv);

  const tbody = document.getElementById('tbodyBureauCMS');
  if (!tbody) return;

  bureau.membres.forEach(m => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${m.photo || 'images/logo.png'}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 1px solid var(--or);"></td>
      <td><strong>${m.nom}</strong></td>
      <td>${m.titre}</td>
      <td>${m.ordre}</td>
      <td>
        <button class="bouton-table-action" onclick="ouvrirModalMembreBureau(${m.id})" title="Modifier">✏️</button>
        <button class="bouton-table-action" onclick="supprimerMembreBureau(${m.id})" title="Supprimer" style="color: #EF4444;">🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.ouvrirModalMembreBureau = function(id = null) {
  const modal = document.getElementById('modalMembreBureau');
  if (!modal) return;

  const titleEl = document.getElementById('modalMembreTitre');
  const idInput = document.getElementById('cmsMembreId');

  if (id) {
    const bureau = JSON.parse(localStorage.getItem('aeemci_cms_bureau')) || CMS_DEFAUTS.bureau;
    const m = bureau.membres.find(mem => mem.id === id);
    if (m) {
      if (titleEl) titleEl.textContent = "✏️ Modifier le Membre";
      if (idInput) idInput.value = m.id;
      document.getElementById('cmsMembreNom').value = m.nom || '';
      document.getElementById('cmsMembreTitre').value = m.titre || '';
      document.getElementById('cmsMembreOrdre').value = m.ordre || 1;
    }
  } else {
    if (titleEl) titleEl.textContent = "➕ Ajouter un Membre au Bureau";
    if (idInput) idInput.value = '';
    document.getElementById('cmsMembreNom').value = '';
    document.getElementById('cmsMembreTitre').value = '';
    document.getElementById('cmsMembreOrdre').value = (JSON.parse(localStorage.getItem('aeemci_cms_bureau'))?.membres.length || 0) + 1;
  }
  modal.classList.add('active');
};

window.fermerModalMembreBureau = function() {
  document.getElementById('modalMembreBureau')?.classList.remove('active');
};

window.enregistrerMembreBureau = async function(e) {
  if (e) e.preventDefault();

  const idEdit = document.getElementById('cmsMembreId')?.value;
  const nom = document.getElementById('cmsMembreNom')?.value.trim();
  const titre = document.getElementById('cmsMembreTitre')?.value.trim();
  const ordre = parseInt(document.getElementById('cmsMembreOrdre')?.value) || 1;
  const fileInput = document.getElementById('cmsMembrePhotoFile');

  if (!nom || !titre) {
    showToast("Veuillez saisir le nom et le titre du membre.", "error");
    return;
  }

  const sauvegarder = async (photoUrl) => {
    let bureau = JSON.parse(localStorage.getItem('aeemci_cms_bureau')) || CMS_DEFAUTS.bureau;
    if (idEdit) {
      const idx = bureau.membres.findIndex(m => m.id == idEdit);
      if (idx !== -1) {
        bureau.membres[idx].nom = nom;
        bureau.membres[idx].titre = titre;
        bureau.membres[idx].ordre = ordre;
        if (photoUrl) bureau.membres[idx].photo = photoUrl;
      }
    } else {
      bureau.membres.push({
        id: Date.now(),
        nom, titre, ordre,
        photo: photoUrl || "images/logo.png"
      });
    }
    localStorage.setItem('aeemci_cms_bureau', JSON.stringify(bureau));
    if (window.cmsDb && typeof window.cmsDb.saveSection === 'function') {
      await window.cmsDb.saveSection('bureau', bureau);
    }
    chargerBureauCMS();
    fermerModalMembreBureau();
    showToast("Membre du bureau mis à jour avec succès !");
  };

  if (fileInput && fileInput.files && fileInput.files[0]) {
    const url = await window.storageDb.uploadImage(fileInput.files[0], 'bureau');
    await sauvegarder(url);
  } else {
    await sauvegarder(null);
  }
};

window.supprimerMembreBureau = function(id) {
  if (confirm("Supprimer ce membre du bureau ?")) {
    let bureau = JSON.parse(localStorage.getItem('aeemci_cms_bureau')) || CMS_DEFAUTS.bureau;
    bureau.membres = bureau.membres.filter(m => m.id !== id);
    localStorage.setItem('aeemci_cms_bureau', JSON.stringify(bureau));
    if (window.cmsDb && typeof window.cmsDb.saveSection === 'function') {
      window.cmsDb.saveSection('bureau', bureau);
    }
    chargerBureauCMS();
    showToast("Membre supprimé.");
  }
};

// 2. MODALES & CRUD ÉVÉNEMENTS
window.ouvrirModalAjoutEvenement = function(id = null) {
  const modal = document.getElementById('modalAjoutEvenement');
  if (!modal) return;

  const titleEl = document.getElementById('modalEvenementTitreHeader');
  const idInput = document.getElementById('cmsActuId');

  if (id) {
    const actualites = JSON.parse(localStorage.getItem('aeemci_cms_actualites')) || [];
    const actu = actualites.find(a => a.id === id);
    if (actu) {
      if (titleEl) titleEl.textContent = "✏️ Modifier l'Événement";
      if (idInput) idInput.value = actu.id;
      document.getElementById('cmsActuTitre').value = actu.titre || '';
      document.getElementById('cmsActuCategorie').value = actu.categorie || 'Événement';
      document.getElementById('cmsActuDate').value = actu.date || '';
      document.getElementById('cmsActuLieu').value = actu.lieu || '';
      document.getElementById('cmsActuDesc').value = actu.description || '';
    }
  } else {
    if (titleEl) titleEl.textContent = "➕ Publier un Nouvel Événement";
    if (idInput) idInput.value = '';
    const form = document.getElementById('formAjoutActuCMS');
    if (form) form.reset();
  }
  modal.classList.add('active');
};

window.fermerModalAjoutEvenement = function() {
  document.getElementById('modalAjoutEvenement')?.classList.remove('active');
};

function chargerActualitesCMS() {
  const actualites = JSON.parse(localStorage.getItem('aeemci_cms_actualites')) || CMS_DEFAUTS.actualites;
  const container = document.getElementById('containerActualitesCMS');
  if (!container) return;

  container.innerHTML = '';

  if (actualites.length === 0) {
    container.innerHTML = `<p style="color: var(--texte-secondaire); padding: 20px;">Aucun événement publié pour le moment. Cliquez sur "Publier un Événement" pour commencer.</p>`;
    return;
  }

  actualites.forEach(actu => {
    const card = document.createElement('div');
    card.style.cssText = "border: 1px solid var(--bordure-carte); border-radius: 14px; padding: 20px; background: #FFFFFF; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--ombre-carte);";
    card.innerHTML = `
      <div>
        <span class="badge-statut valide" style="margin-bottom: 10px; display: inline-block;">${actu.categorie}</span>
        <h4 style="font-size: 1.15rem; color: var(--vert-institutionnel); font-weight: 800; margin-bottom: 6px;">${actu.titre}</h4>
        <p style="font-size: 0.85rem; color: var(--or-sombre); font-weight: 700; margin-bottom: 10px;">📅 ${actu.date} • 📍 ${actu.lieu}</p>
        <p style="font-size: 0.88rem; color: var(--texte-secondaire); margin-bottom: 18px; line-height: 1.5;">${actu.description}</p>
      </div>
      <div style="display: flex; gap: 10px; margin-top: 10px;">
        <button class="bouton-action-contour" onclick="ouvrirModalAjoutEvenement(${actu.id})" style="flex: 1; justify-content: center;">✏️ Modifier</button>
        <button class="bouton-action-contour" onclick="supprimerActualiteCMS(${actu.id})" style="border-color: #EF4444; color: #EF4444; flex: 1; justify-content: center;">🗑️ Supprimer</button>
      </div>
    `;
    container.appendChild(card);
  });
}

window.ajouterActualiteCMS = async function(e) {
  if (e) e.preventDefault();

  const idInput = document.getElementById('cmsActuId');
  const idEdit = idInput ? idInput.value : '';
  const titre = document.getElementById('cmsActuTitre')?.value.trim();
  const categorie = document.getElementById('cmsActuCategorie')?.value || "Événement";
  const date = document.getElementById('cmsActuDate')?.value.trim();
  const lieu = document.getElementById('cmsActuLieu')?.value.trim();
  const description = document.getElementById('cmsActuDesc')?.value.trim();
  const fileInput = document.getElementById('cmsActuImageFile');

  if (!titre || !description) {
    showToast("Veuillez saisir au moins le titre et la description de l'événement.", "error");
    return;
  }

  const enregistrer = async (imageUrl) => {
    let actualites = JSON.parse(localStorage.getItem('aeemci_cms_actualites')) || CMS_DEFAUTS.actualites;

    if (idEdit) {
      const idx = actualites.findIndex(a => a.id == idEdit);
      if (idx !== -1) {
        actualites[idx].titre = titre;
        actualites[idx].categorie = categorie;
        actualites[idx].date = date || "Prochainement";
        actualites[idx].lieu = lieu || "Koumassi";
        actualites[idx].description = description;
        if (imageUrl) actualites[idx].image = imageUrl;
      }
    } else {
      const nouvelleActu = {
        id: Date.now(),
        titre: titre,
        categorie: categorie,
        date: date || "Prochainement",
        lieu: lieu || "Koumassi",
        description: description,
        image: imageUrl || "images/maouloud.jpg"
      };
      actualites.unshift(nouvelleActu);
    }

    try {
      localStorage.setItem('aeemci_cms_actualites', JSON.stringify(actualites));
      if (window.cmsDb && typeof window.cmsDb.saveSection === 'function') {
        await window.cmsDb.saveSection('actualites', actualites);
      }
      let customEvts = actualites.map(a => ({
        badge: a.categorie,
        titre: a.titre,
        date: a.date,
        lieu: a.lieu,
        desc: a.description,
        image: a.image
      }));
      localStorage.setItem('aeemci_evenements_custom', JSON.stringify(customEvts));
    } catch (err) {
      console.error("Quota localStorage dépassé:", err);
    }

    chargerActualitesCMS();
    actualiserVueEnsembleKPI();
    fermerModalAjoutEvenement();
    showToast("✅ L'événement a été publié et mis à jour en temps réel sur le site !");
  };

  if (fileInput && fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    const imageUrl = await window.storageDb.uploadImage(file, 'actualites');
    await enregistrer(imageUrl || "images/maouloud.jpg");
  } else {
    await enregistrer(null);
  }
};

window.supprimerActualiteCMS = function(id) {
  if (confirm("Voulez-vous vraiment supprimer cet événement de la publication ?")) {
    let actualites = JSON.parse(localStorage.getItem('aeemci_cms_actualites')) || [];
    actualites = actualites.filter(a => a.id !== id);
    localStorage.setItem('aeemci_cms_actualites', JSON.stringify(actualites));
    chargerActualitesCMS();
    actualiserVueEnsembleKPI();
    showToast("Événement supprimé.");
  }
};

// 3. FORMATIONS CRUD
function chargerFormationsCMS() {
  const formations = JSON.parse(localStorage.getItem('aeemci_cms_formations')) || CMS_DEFAUTS.formations;
  const container = document.getElementById('containerFormationsCMS');
  if (!container) return;

  container.innerHTML = '';

  if (formations.length === 0) {
    container.innerHTML = `<p style="color: var(--texte-secondaire); padding: 20px;">Aucun module de formation enregistré.</p>`;
    return;
  }

  formations.forEach(f => {
    const item = document.createElement('div');
    item.style.cssText = "border: 1px solid var(--bordure-carte); border-radius: 14px; padding: 20px; background: #FFFFFF; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--ombre-carte);";
    item.innerHTML = `
      <div>
        <h4 style="font-size: 1.1rem; color: var(--vert-institutionnel); font-weight: 800; margin-bottom: 8px;">🎓 ${f.intitule}</h4>
        <p style="font-size: 0.88rem; color: var(--texte-secondaire); margin-bottom: 12px; line-height: 1.5;">${f.description}</p>
        <span style="font-size: 0.82rem; color: var(--or-sombre); font-weight: 700;">👥 ${f.inscrits || 0} Inscrits en ce moment</span>
      </div>
      <div style="display: flex; gap: 10px; margin-top: 14px;">
        <button class="bouton-action-contour" onclick="supprimerFormationCMS(${f.id})" style="border-color: #EF4444; color: #EF4444; width: 100%; justify-content: center;">🗑️ Supprimer</button>
      </div>
    `;
    container.appendChild(item);
  });
}

window.enregistrerFormationCMS = async function(e) {
  if (e) e.preventDefault();

  const intitule = document.getElementById('cmsFormationIntitule')?.value.trim();
  const description = document.getElementById('cmsFormationDesc')?.value.trim();
  const lien = document.getElementById('cmsFormationLien')?.value.trim();

  if (!intitule || !description) {
    showToast("Veuillez renseigner au moins l'intitulé et la description de la formation.", "error");
    return;
  }

  let formations = JSON.parse(localStorage.getItem('aeemci_cms_formations')) || CMS_DEFAUTS.formations;

  const nouvelleFormation = {
    id: Date.now(),
    intitule: intitule,
    description: description,
    lien: lien || "https://wa.me/2250545305180",
    inscrits: 0
  };

  formations.push(nouvelleFormation);
  localStorage.setItem('aeemci_cms_formations', JSON.stringify(formations));
  if (window.cmsDb && typeof window.cmsDb.saveSection === 'function') {
    await window.cmsDb.saveSection('formations', formations);
  }
  chargerFormationsCMS();

  const form = document.getElementById('formAjoutFormationCMS');
  if (form) form.reset();

  showToast(" Le module de formation a été ajouté et publié !");
};

window.supprimerFormationCMS = function(id) {
  if (confirm("Voulez-vous vraiment supprimer ce module de formation ?")) {
    let formations = JSON.parse(localStorage.getItem('aeemci_cms_formations')) || [];
    formations = formations.filter(f => f.id !== id);
    localStorage.setItem('aeemci_cms_formations', JSON.stringify(formations));
    chargerFormationsCMS();
  }
};

// 4. GALERIE & DRAG AND DROP
window.declencherSelecteurPhotos = function() {
  document.getElementById('inputUploadGalerie')?.click();
};

window.gererSelectionPhotos = function(event) {
  const files = event.target.files;
  if (files && files.length > 0) {
    traiterFichiersPhotos(files);
  }
};

function initialiserDragAndDropGalerie() {
  const dropZone = document.getElementById('dropZoneGalerie');
  if (!dropZone) return;

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => { e.preventDefault(); e.stopPropagation(); }, false);
  });

  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => dropZone.style.borderColor = '#10B981', false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => dropZone.style.borderColor = 'var(--or)', false);
  });

  dropZone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      traiterFichiersPhotos(files);
    }
  }, false);
}

async function traiterFichiersPhotos(files) {
  let galerie = JSON.parse(localStorage.getItem('aeemci_cms_galerie')) || [];
  let custom = JSON.parse(localStorage.getItem('aeemci_galerie_custom') || '[]');
  let compt = 0;

  for (const file of files) {
    if (file.type.startsWith('image/')) {
      const url = await window.storageDb.uploadImage(file, 'galerie');
      if (url) {
        galerie.unshift({
          id: Date.now() + Math.random(),
          url: url,
          titre: file.name
        });

        custom.unshift({
          photo: url,
          titre: file.name,
          categorie: 'Photos'
        });
        compt++;
      }
    }
  }

  try {
    localStorage.setItem('aeemci_cms_galerie', JSON.stringify(galerie));
    localStorage.setItem('aeemci_galerie_custom', JSON.stringify(custom));
    if (window.cmsDb && typeof window.cmsDb.saveSection === 'function') {
      await window.cmsDb.saveSection('galerie', galerie);
    }
  } catch (err) {
    console.error("Erreur de sauvegarde LocalStorage:", err);
  }
  chargerGalerieCMS();
  actualiserVueEnsembleKPI();
  showToast(`✅ ${compt} photo(s) ajoutée(s) avec succès !`);
}

function chargerGalerieCMS() {
  const galerie = JSON.parse(localStorage.getItem('aeemci_cms_galerie')) || [];
  const grid = document.getElementById('gridGalerieCMS');
  if (!grid) return;

  grid.innerHTML = '';

  if (galerie.length === 0) {
    grid.innerHTML = `<p style="color: var(--texte-secondaire); grid-column: 1 / -1; padding: 10px;">Aucune photo personnalisée téléversée. Les photos d'archives sont affichées sur le site.</p>`;
    return;
  }

  galerie.forEach(item => {
    const box = document.createElement('div');
    box.style.cssText = "position: relative; border-radius: 12px; overflow: hidden; border: 1px solid var(--bordure-carte); box-shadow: 0 4px 12px rgba(0,0,0,0.06); aspect-ratio: 1; background: #000;";
    box.innerHTML = `
      <img src="${item.url}" alt="${item.titre || 'Photo'}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;">
      <button class="bouton-table-action" onclick="supprimerPhotoGalerie('${item.id}')" style="position: absolute; top: 6px; right: 6px; background: rgba(239, 68, 68, 0.9); color: white; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; border: none; cursor: pointer;" title="Supprimer la photo">&times;</button>
    `;
    grid.appendChild(box);
  });
}

window.supprimerPhotoGalerie = function(id) {
  if (confirm("Supprimer cette photo de la galerie ?")) {
    let galerie = JSON.parse(localStorage.getItem('aeemci_cms_galerie')) || [];
    const target = galerie.find(g => g.id == id);
    galerie = galerie.filter(g => g.id != id);
    localStorage.setItem('aeemci_cms_galerie', JSON.stringify(galerie));

    if (target) {
      let custom = JSON.parse(localStorage.getItem('aeemci_galerie_custom') || '[]');
      custom = custom.filter(c => (c.photo || c.url) !== target.url);
      localStorage.setItem('aeemci_galerie_custom', JSON.stringify(custom));
    }

    chargerGalerieCMS();
    actualiserVueEnsembleKPI();
  }
};

// 5. REGISTRE MILITANTS & RECHERCHE INSTANTANÉE
async function chargerMilitantsCMS() {
  let militants = [];
  if (window.militantsDb && typeof window.militantsDb.fetchMilitants === 'function') {
    militants = await window.militantsDb.fetchMilitants();
  } else {
    militants = JSON.parse(localStorage.getItem('aeemci_militants_db')) || [];
  }

  if (!militants || militants.length === 0) {
    militants = [
      { id: 1, nom: "Kouamé Ibrahim", quartier: "Koumassi Prodomo", ecole: "Lycée Moderne de Koumassi", telephone: "0757477372", statut: "valide", date: "2026-08-20" },
      { id: 2, nom: "Diallo Mariam", quartier: "Koumassi Remblais", ecole: "Université Felix Houphouët-Boigny", telephone: "0545305180", statut: "valide", date: "2026-08-21" },
      { id: 3, nom: "Traoré Abdoulaye", quartier: "Koumassi Sicogi", ecole: "Collège Moderne La Colombe", telephone: "0102030405", statut: "attente", date: "2026-08-24" },
      { id: 4, nom: "Zeba Samira", quartier: "Koumassi Sopim", ecole: "IST-ISG La Colombe", telephone: "0708091011", statut: "valide", date: "2026-08-25" },
      { id: 5, nom: "Sow Mohamed", quartier: "Koumassi Camp Commando", ecole: "INPHB Yamoussoukro", telephone: "0506070809", statut: "valide", date: "2026-08-26" }
    ];
    localStorage.setItem('aeemci_militants_db', JSON.stringify(militants));
  }

  afficherMilitantsHTML(militants);
  actualiserVueEnsembleKPI();
}

function afficherMilitantsHTML(militants) {
  const tbody1 = document.getElementById('tbodyMilitants');
  const tbody2 = document.getElementById('tbodyMilitantsComplet');

  const html = militants.map(m => {
    let bClass = m.statut === 'valide' ? 'valide' : (m.statut === 'rejete' ? 'rejete' : 'attente');
    let bText = m.statut === 'valide' ? 'Validé' : (m.statut === 'rejete' ? 'Rejeté' : 'En attente');
    return `
      <tr>
        <td><strong>${m.nom}</strong></td>
        <td>${m.quartier || 'Koumassi'}</td>
        <td>${m.ecole || 'Établissement non renseigné'}</td>
        <td>
          <a href="https://wa.me/225${m.telephone}?text=Assalamu%20alaykum%20${encodeURIComponent(m.nom)},%20votre%20demande%20d'adh%C3%A9sion%20AEEMCI%20a%20%C3%A9t%C3%A9%20trait%C3%A9e !" target="_blank" class="bouton-whatsapp">
            💬 ${m.telephone}
          </a>
        </td>
        <td><span class="badge-statut ${bClass}">${bText}</span></td>
        <td>
          <button class="bouton-table-action" onclick="validerMilitantCMS(${m.id})" title="Valider">✅</button>
          <button class="bouton-table-action" onclick="refuserMilitantCMS(${m.id})" title="Rejeter">🔴</button>
          <button class="bouton-table-action" onclick="supprimerMilitantCMS(${m.id})" title="Supprimer">🗑️</button>
        </td>
      </tr>
    `;
  }).join('');

  if (tbody1) tbody1.innerHTML = html;
  if (tbody2) tbody2.innerHTML = html;
}

window.filtrerMilitantsTable = function(query) {
  const militants = JSON.parse(localStorage.getItem('aeemci_militants_db')) || [];
  const q = query.toLowerCase().trim();

  if (!q) {
    afficherMilitantsHTML(militants);
    return;
  }

  const filtrés = militants.filter(m => 
    (m.nom && m.nom.toLowerCase().includes(q)) ||
    (m.quartier && m.quartier.toLowerCase().includes(q)) ||
    (m.ecole && m.ecole.toLowerCase().includes(q)) ||
    (m.telephone && m.telephone.includes(q))
  );

  afficherMilitantsHTML(filtrés);
};

window.validerMilitantCMS = async function(id) {
  let list = JSON.parse(localStorage.getItem('aeemci_militants_db')) || [];
  const item = list.find(m => m.id === id);
  if (item) item.statut = 'valide';
  localStorage.setItem('aeemci_militants_db', JSON.stringify(list));
  await chargerMilitantsCMS();
  showToast("Adhésion militant validée avec succès !");
};

window.refuserMilitantCMS = async function(id) {
  let list = JSON.parse(localStorage.getItem('aeemci_militants_db')) || [];
  const item = list.find(m => m.id === id);
  if (item) item.statut = 'rejete';
  localStorage.setItem('aeemci_militants_db', JSON.stringify(list));
  await chargerMilitantsCMS();
  showToast("Adhésion refusée.", "info");
};

window.supprimerMilitantCMS = async function(id) {
  if (confirm("Supprimer cette adhésion du registre ?")) {
    let list = JSON.parse(localStorage.getItem('aeemci_militants_db')) || [];
    list = list.filter(m => m.id !== id);
    localStorage.setItem('aeemci_militants_db', JSON.stringify(list));
    await chargerMilitantsCMS();
    showToast("Militant supprimé du registre.");
  }
};

window.exporterMilitantsExcel = function() {
  const militants = JSON.parse(localStorage.getItem('aeemci_militants_db')) || [];
  let csv = "Nom;Quartier;Etablissement;Telephone;Statut\n";
  militants.forEach(m => {
    csv += `"${m.nom}";"${m.quartier}";"${m.ecole}";"${m.telephone}";"${m.statut}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `Registre_Militants_AEEMCI_Koumassi_${Date.now()}.csv`;
  link.click();
  showToast("📥 Registre exporté avec succès !");
};

// 6. CONTACT & COORDONNÉES
function chargerContactForm() {
  const contact = JSON.parse(localStorage.getItem('aeemci_cms_contact')) || CMS_DEFAUTS.contact;

  if (document.getElementById('cmsContactAdresse')) document.getElementById('cmsContactAdresse').value = contact.adresse || '';
  if (document.getElementById('cmsContactTel1')) document.getElementById('cmsContactTel1').value = contact.tel1 || '';
  if (document.getElementById('cmsContactTel2')) document.getElementById('cmsContactTel2').value = contact.tel2 || '';
  if (document.getElementById('cmsContactEmail')) document.getElementById('cmsContactEmail').value = contact.email || '';
  if (document.getElementById('cmsContactHoraires')) document.getElementById('cmsContactHoraires').value = contact.horaires || '';
  if (document.getElementById('cmsContactWhatsappLink')) document.getElementById('cmsContactWhatsappLink').value = contact.whatsappLink || '';
}

window.enregistrerContactCMS = async function(e) {
  if (e) e.preventDefault();

  const contact = {
    adresse: document.getElementById('cmsContactAdresse')?.value.trim(),
    tel1: document.getElementById('cmsContactTel1')?.value.trim(),
    tel2: document.getElementById('cmsContactTel2')?.value.trim(),
    email: document.getElementById('cmsContactEmail')?.value.trim(),
    horaires: document.getElementById('cmsContactHoraires')?.value.trim(),
    whatsappLink: document.getElementById('cmsContactWhatsappLink')?.value.trim()
  };

  localStorage.setItem('aeemci_cms_contact', JSON.stringify(contact));
  if (window.cmsDb && typeof window.cmsDb.saveSection === 'function') {
    await window.cmsDb.saveSection('contact', contact);
  }
  showToast("✅ Coordonnées et liens WhatsApp mis à jour avec succès !");
};
