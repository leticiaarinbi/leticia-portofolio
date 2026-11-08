/* ============================================================
   LETICIA ARINBI PORTFOLIO — SCRIPT.JS
   Language System, Interactions, Animations
   ============================================================ */

'use strict';

/* ── Translation Data ── */
const translations = {
  en: {
    /* ── NAV ── */
    nav_home:       'Home',
    nav_about:      'About',
    nav_experience: 'Experience',
    nav_projects:   'Projects',
    nav_skills:     'Skills',
    nav_contact:    'Contact',

    /* ── HERO ── */
    hero_eyebrow:   'Portfolio · 2026',
    hero_headline:  'Turning Ideas Into Meaningful Digital Experiences.',
    hero_roles:     ['Information Management Student', 'Product Owner', 'Data Analyst', 'UI/UX Designer'],
    hero_desc:      'I am passionate about understanding people, exploring ideas, and transforming complex needs into thoughtful digital experiences.',
    hero_btn_primary:   'Explore My Work',
    hero_btn_secondary: 'Get In Touch',
    hero_location:  'Padang, West Sumatra, Indonesia',

    /* ── ABOUT ── */
    about_label:    'About Me',
    about_title:    'A Little <em>About</em> Me',
    about_quote:    '"Bridging business needs, user insights, and technology."',
    about_meta_edu_label:  'Education',
    about_meta_edu_value:  'Politeknik Negeri Padang',
    about_meta_prog_label: 'Programme',
    about_meta_prog_value: 'Information Management · Semester 5',
    about_meta_loc_label:  'Location',
    about_meta_loc_value:  'Padang, West Sumatra',
    about_p1: 'I am an <span class="about-highlight">Information Management student</span> at Politeknik Negeri Padang with an interest in digital product development, business analysis, and user experience design.',
    about_p2: 'I enjoy understanding problems, exploring user needs, and transforming ideas into structured and <span class="about-highlight">meaningful digital solutions</span>.',
    about_p3: 'Through academic projects and collaborative experiences, I continue to develop my ability to connect business perspectives, user needs, and technology.',

    /* ── EXPERIENCE ── */
    exp_label:   'Experience',
    exp_title:   'Where I\'ve <em>Contributed</em>',
    exp_org:     'HMJ Teknologi Informasi — Politeknik Negeri Padang',
    exp_role:    'Staff of Public Relations',
    exp_period:  '2026 — Present',
    exp_desc:    'Contributing to organizational communication, information distribution, and public relations activities within the student association.',

    /* ── PROJECTS ── */
    proj_label:  'Selected Work',
    proj_title:  'Projects I\'ve <em>Shaped</em>',

    proj1_code:  'PROJECT 01 — SEROJA COFFEE ESTATE',
    proj1_title: 'Coffee Bean Distribution E-Commerce Website',
    proj1_desc:  'Contributed to understanding business needs through client interviews, analyzing products and target markets, and designing user flows and website interfaces.',
    proj1_role:  'Product Owner, Data Analyst, UI/UX Designer',
    proj1_year:  '2026',

    proj2_code:  'PROJECT 02 — SIGAP',
    proj2_title: 'Campus Facility Complaint and Aspiration Information System',
    proj2_desc:  'Developed a campus facility complaint management system using Laravel, PHP, HTML, CSS, and MySQL. The system includes authentication, complaint management, photo uploads, status tracking, and an administrative dashboard.',
    proj2_role:  'Full Stack Developer',
    proj2_year:  '2026',

    proj3_code:  'PROJECT 03 — PG CREATIVE',
    proj3_title: 'Custom Printing & Merchandise E-Commerce Website',
    proj3_desc:  'Analyzed user and business requirements and designed the product catalog and ordering experience for a custom printing and merchandise e-commerce website.',
    proj3_role:  'Data Analyst, UI/UX Designer',
    proj3_year:  '2026',

    proj4_code:  'PROJECT 04 — MARANTAU',
    proj4_title: 'Integrated Internship Administration and Monitoring Website',
    proj4_desc:  'Analyzed administrative and internship monitoring requirements and contributed to designing user flows and interface layouts.',
    proj4_role:  'Data Analyst, UI/UX Designer',
    proj4_year:  '2025',

    proj5_code:  'PROJECT 05 — UNILEARN',
    proj5_title: 'Campus Academic Information System',
    proj5_desc:  'Designed user flows, layouts, and interface concepts for a campus academic information system.',
    proj5_role:  'UI/UX Designer',
    proj5_year:  '2025',

    proj_role_label: 'Role',
    proj_year_label: 'Year',

    /* ── SKILLS ── */
    skills_label:   'Skills',
    skills_title:   'Capabilities & <em>Expertise</em>',
    skills_technical: 'Technical',
    skills_design:    'Design',
    skills_analysis:  'Analysis',
    skills_tools:     'Tools',

    /* ── EDUCATION ── */
    edu_label:   'Education & Certification',
    edu_title:   'Academic <em>Background</em>',
    edu_col_edu: 'Education',
    edu_col_cert: 'Certification',
    edu_school:  'Politeknik Negeri Padang',
    edu_prog:    'Information Management Study Program',
    edu_period:  'Semester 5 · Active',
    cert_name:   'AWS Academy Cloud Foundations',
    cert_org:    'Amazon Web Services',

    /* ── CONTACT ── */
    contact_label:   'Contact',
    contact_heading: 'Let\'s Create Something <em>Meaningful.</em>',
    contact_desc:    'Have an opportunity, project, or idea in mind? I\'d love to hear from you.',
    contact_email_cta: 'leticiaarinbi@gmail.com',
    contact_lbl_email:    'Email',
    contact_lbl_linkedin: 'LinkedIn',
    contact_lbl_github:   'GitHub',
    contact_lbl_location: 'Location',
    contact_val_location: 'Padang, West Sumatra, Indonesia',

    /* ── FOOTER ── */
    footer_copy: '© 2026 Leticia Arinbi. All rights reserved.',
    footer_tagline: 'Designed & built with intention.',

    /* ── SCROLL ── */
    scroll_text: 'Scroll',
  },

  id: {
    /* ── NAV ── */
    nav_home:       'Beranda',
    nav_about:      'Tentang',
    nav_experience: 'Pengalaman',
    nav_projects:   'Proyek',
    nav_skills:     'Keahlian',
    nav_contact:    'Kontak',

    /* ── HERO ── */
    hero_eyebrow:   'Portofolio · 2026',
    hero_headline:  'Merangkai Ide, Mewujudkan Pengalaman Digital yang Bermakna.',
    hero_roles:     ['Mahasiswa Manajemen Informatika', 'Product Owner', 'Analis Data', 'UI/UX Designer'],
    hero_desc:      'Saya tertarik memahami kebutuhan, mengeksplorasi ide, dan mengubah berbagai permasalahan menjadi solusi digital yang terstruktur, fungsional, dan bermakna.',
    hero_btn_primary:   'Lihat Proyek Saya',
    hero_btn_secondary: 'Hubungi Saya',
    hero_location:  'Padang, Sumatera Barat, Indonesia',

    /* ── ABOUT ── */
    about_label:    'Tentang Saya',
    about_title:    'Sedikit <em>Tentang</em> Saya',
    about_quote:    '"Menghubungkan kebutuhan bisnis, wawasan pengguna, dan teknologi."',
    about_meta_edu_label:  'Pendidikan',
    about_meta_edu_value:  'Politeknik Negeri Padang',
    about_meta_prog_label: 'Program Studi',
    about_meta_prog_value: 'Manajemen Informatika · Semester 5',
    about_meta_loc_label:  'Lokasi',
    about_meta_loc_value:  'Padang, Sumatera Barat',
    about_p1: 'Saya merupakan <span class="about-highlight">mahasiswa Program Studi Manajemen Informatika</span> di Politeknik Negeri Padang yang memiliki ketertarikan pada pengembangan produk digital, analisis bisnis, dan perancangan pengalaman pengguna.',
    about_p2: 'Saya senang memahami suatu permasalahan, menggali kebutuhan pengguna, serta mengembangkan ide menjadi <span class="about-highlight">solusi digital yang terstruktur dan memiliki tujuan</span>.',
    about_p3: 'Melalui berbagai proyek akademik dan pengalaman kolaboratif, saya terus mengembangkan kemampuan untuk menghubungkan perspektif bisnis, kebutuhan pengguna, dan teknologi.',

    /* ── EXPERIENCE ── */
    exp_label:   'Pengalaman',
    exp_title:   'Tempat Saya <em>Berkontribusi</em>',
    exp_org:     'HMJ Teknologi Informasi — Politeknik Negeri Padang',
    exp_role:    'Staff Humas',
    exp_period:  '2026 — Sekarang',
    exp_desc:    'Berkontribusi dalam kegiatan komunikasi organisasi, penyampaian informasi, dan hubungan masyarakat dalam lingkup himpunan mahasiswa jurusan.',

    /* ── PROJECTS ── */
    proj_label:  'Karya Pilihan',
    proj_title:  'Proyek yang Pernah Saya <em>Kerjakan</em>',

    proj1_code:  'PROYEK 01 — SEROJA COFFEE ESTATE',
    proj1_title: 'Website E-Commerce Distribusi Biji Kopi',
    proj1_desc:  'Berkontribusi dalam memahami kebutuhan bisnis melalui wawancara dengan klien, menganalisis produk dan target pasar, serta merancang alur pengguna dan antarmuka website.',
    proj1_role:  'Product Owner, Analis Data, UI/UX Designer',
    proj1_year:  '2026',

    proj2_code:  'PROYEK 02 — SIGAP',
    proj2_title: 'Sistem Informasi Pengaduan dan Aspirasi Fasilitas Kampus',
    proj2_desc:  'Mengembangkan sistem pengelolaan pengaduan fasilitas kampus menggunakan Laravel, PHP, HTML, CSS, dan MySQL. Sistem ini memiliki fitur autentikasi, pengelolaan pengaduan, unggah foto, pemantauan status, dan dashboard administrator.',
    proj2_role:  'Full Stack Developer',
    proj2_year:  '2026',

    proj3_code:  'PROYEK 03 — PG CREATIVE',
    proj3_title: 'Website E-Commerce Custom Printing & Merchandise',
    proj3_desc:  'Menganalisis kebutuhan pengguna dan bisnis serta merancang alur katalog produk dan pemesanan untuk website e-commerce produk custom printing dan merchandise.',
    proj3_role:  'Analis Data, UI/UX Designer',
    proj3_year:  '2026',

    proj4_code:  'PROYEK 04 — MARANTAU',
    proj4_title: 'Website Manajemen Administrasi Real-Time dan Pemantauan Magang Terpadu',
    proj4_desc:  'Menganalisis kebutuhan administrasi dan pemantauan kegiatan magang serta berkontribusi dalam perancangan alur pengguna dan tampilan antarmuka.',
    proj4_role:  'Analis Data, UI/UX Designer',
    proj4_year:  '2025',

    proj5_code:  'PROYEK 05 — UNILEARN',
    proj5_title: 'Sistem Akademik Kampus',
    proj5_desc:  'Merancang alur pengguna, struktur halaman, dan konsep antarmuka untuk sistem informasi akademik kampus.',
    proj5_role:  'UI/UX Designer',
    proj5_year:  '2025',

    proj_role_label: 'Peran',
    proj_year_label: 'Tahun',

    /* ── SKILLS ── */
    skills_label:   'Keahlian',
    skills_title:   'Kemampuan & <em>Keahlian</em>',
    skills_technical: 'Teknis',
    skills_design:    'Desain',
    skills_analysis:  'Analisis',
    skills_tools:     'Alat',

    /* ── EDUCATION ── */
    edu_label:   'Pendidikan & Sertifikasi',
    edu_title:   'Latar Belakang <em>Akademik</em>',
    edu_col_edu: 'Pendidikan',
    edu_col_cert: 'Sertifikasi',
    edu_school:  'Politeknik Negeri Padang',
    edu_prog:    'Program Studi Manajemen Informatika',
    edu_period:  'Semester 5 · Aktif',
    cert_name:   'AWS Academy Cloud Foundations',
    cert_org:    'Amazon Web Services',

    /* ── CONTACT ── */
    contact_label:   'Kontak',
    contact_heading: 'Mari Wujudkan Sesuatu yang <em>Bermakna.</em>',
    contact_desc:    'Terbuka untuk kesempatan, kolaborasi, maupun ide baru. Saya akan senang untuk berdiskusi dan mengenal lebih jauh.',
    contact_email_cta: 'leticiaarinbi@gmail.com',
    contact_lbl_email:    'Email',
    contact_lbl_linkedin: 'LinkedIn',
    contact_lbl_github:   'GitHub',
    contact_lbl_location: 'Lokasi',
    contact_val_location: 'Padang, Sumatera Barat, Indonesia',

    /* ── FOOTER ── */
    footer_copy: '© 2026 Leticia Arinbi. Seluruh hak cipta dilindungi.',
    footer_tagline: 'Dirancang & dibangun dengan penuh niat.',

    /* ── SCROLL ── */
    scroll_text: 'Gulir',
  }
};

/* ── State ── */
let currentLang = localStorage.getItem('portfolio_lang') || 'en';

/* ── Apply translations to DOM ── */
function applyTranslations(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang === 'id' ? 'id' : 'en';

  /* helper — safe inner HTML */
  const set = (sel, val) => {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = val;
  };
  const setAll = (sel, val) => {
    document.querySelectorAll(sel).forEach(el => el.innerHTML = val);
  };

  /* NAV */
  set('[data-key="nav_home"]',       t.nav_home);
  set('[data-key="nav_about"]',      t.nav_about);
  set('[data-key="nav_experience"]', t.nav_experience);
  set('[data-key="nav_projects"]',   t.nav_projects);
  set('[data-key="nav_skills"]',     t.nav_skills);
  set('[data-key="nav_contact"]',    t.nav_contact);

  /* Mobile nav mirrors */
  set('[data-key="mnav_home"]',       t.nav_home);
  set('[data-key="mnav_about"]',      t.nav_about);
  set('[data-key="mnav_experience"]', t.nav_experience);
  set('[data-key="mnav_projects"]',   t.nav_projects);
  set('[data-key="mnav_skills"]',     t.nav_skills);
  set('[data-key="mnav_contact"]',    t.nav_contact);

  /* HERO */
  set('[data-key="hero_eyebrow"]',        t.hero_eyebrow);
  set('[data-key="hero_headline"]',       t.hero_headline);
  set('[data-key="hero_desc"]',           t.hero_desc);
  set('[data-key="hero_btn_primary"]',    t.hero_btn_primary);
  set('[data-key="hero_btn_secondary"]',  t.hero_btn_secondary);
  set('[data-key="hero_location"]',       t.hero_location);

  /* Hero roles */
  const rolesEl = document.querySelector('[data-key="hero_roles"]');
  if (rolesEl) {
    rolesEl.innerHTML = t.hero_roles.map(r => `<span>${r}</span>`).join('');
  }

  /* ABOUT */
  set('[data-key="about_label"]',           t.about_label);
  set('[data-key="about_title"]',           t.about_title);
  set('[data-key="about_quote"]',           t.about_quote);
  set('[data-key="about_meta_edu_label"]',  t.about_meta_edu_label);
  set('[data-key="about_meta_edu_value"]',  t.about_meta_edu_value);
  set('[data-key="about_meta_prog_label"]', t.about_meta_prog_label);
  set('[data-key="about_meta_prog_value"]', t.about_meta_prog_value);
  set('[data-key="about_meta_loc_label"]',  t.about_meta_loc_label);
  set('[data-key="about_meta_loc_value"]',  t.about_meta_loc_value);
  set('[data-key="about_p1"]', t.about_p1);
  set('[data-key="about_p2"]', t.about_p2);
  set('[data-key="about_p3"]', t.about_p3);

  /* EXPERIENCE */
  set('[data-key="exp_label"]',  t.exp_label);
  set('[data-key="exp_title"]',  t.exp_title);
  set('[data-key="exp_org"]',    t.exp_org);
  set('[data-key="exp_role"]',   t.exp_role);
  set('[data-key="exp_period"]', t.exp_period);
  set('[data-key="exp_desc"]',   t.exp_desc);

  /* PROJECTS */
  set('[data-key="proj_label"]', t.proj_label);
  set('[data-key="proj_title"]', t.proj_title);

  for (let i = 1; i <= 5; i++) {
    set(`[data-key="proj${i}_code"]`,  t[`proj${i}_code`]);
    set(`[data-key="proj${i}_title"]`, t[`proj${i}_title`]);
    set(`[data-key="proj${i}_desc"]`,  t[`proj${i}_desc`]);
    set(`[data-key="proj${i}_role"]`,  t[`proj${i}_role`]);
    set(`[data-key="proj${i}_year"]`,  t[`proj${i}_year`]);
  }

  setAll('[data-key="proj_role_label"]', t.proj_role_label);
  setAll('[data-key="proj_year_label"]', t.proj_year_label);

  /* SKILLS */
  set('[data-key="skills_label"]',     t.skills_label);
  set('[data-key="skills_title"]',     t.skills_title);
  set('[data-key="skills_technical"]', t.skills_technical);
  set('[data-key="skills_design"]',    t.skills_design);
  set('[data-key="skills_analysis"]',  t.skills_analysis);
  set('[data-key="skills_tools"]',     t.skills_tools);

  /* EDUCATION */
  set('[data-key="edu_label"]',    t.edu_label);
  set('[data-key="edu_title"]',    t.edu_title);
  set('[data-key="edu_col_edu"]',  t.edu_col_edu);
  set('[data-key="edu_col_cert"]', t.edu_col_cert);
  set('[data-key="edu_school"]',   t.edu_school);
  set('[data-key="edu_prog"]',     t.edu_prog);
  set('[data-key="edu_period"]',   t.edu_period);
  set('[data-key="cert_name"]',    t.cert_name);
  set('[data-key="cert_org"]',     t.cert_org);

  /* CONTACT */
  set('[data-key="contact_label"]',     t.contact_label);
  set('[data-key="contact_heading"]',   t.contact_heading);
  set('[data-key="contact_desc"]',      t.contact_desc);
  set('[data-key="contact_email_cta"]', t.contact_email_cta);
  set('[data-key="contact_lbl_email"]',    t.contact_lbl_email);
  set('[data-key="contact_lbl_linkedin"]', t.contact_lbl_linkedin);
  set('[data-key="contact_lbl_github"]',   t.contact_lbl_github);
  set('[data-key="contact_lbl_location"]', t.contact_lbl_location);
  set('[data-key="contact_val_location"]', t.contact_val_location);

  /* FOOTER */
  set('[data-key="footer_copy"]',     t.footer_copy);
  set('[data-key="footer_tagline"]',  t.footer_tagline);

  /* Footer nav mirrors */
  set('[data-key="fnav_about"]',      t.nav_about);
  set('[data-key="fnav_projects"]',   t.nav_projects);
  set('[data-key="fnav_skills"]',     t.nav_skills);
  set('[data-key="fnav_contact"]',    t.nav_contact);

  /* SCROLL */
  set('[data-key="scroll_text"]', t.scroll_text);

  /* Update lang buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ── Language Switcher ── */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      localStorage.setItem('portfolio_lang', lang);
      applyTranslations(lang);
    });
  });
}

/* ── Navbar scroll effect ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const backTop = document.querySelector('.back-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 16);
    if (backTop) backTop.classList.toggle('visible', scrollY > 400);
  }, { passive: true });

  /* Back to top */
  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ── Active nav link on scroll ── */
function initActiveNavLinks() {
  const sections   = document.querySelectorAll('section[id]');
  const navLinks   = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── Mobile nav ── */
function initMobileNav() {
  const toggle   = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav-mobile');

  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Intersection Observer for fade-up ── */
function initFadeAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* ── Smooth scroll for anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ── Typed headline animation ── */
function initTyped() {
  const el = document.querySelector('.hero-name');
  if (!el) return;
  el.style.opacity = '1';
}

/* ── Project hover effect ── */
function initProjectHover() {
  document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.marginLeft  = '0';
    });
  });
}

/* ── Skill tag stagger on view ── */

/* ── Skill tag stagger on view ── */
function initSkillStagger() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const tags = entry.target.querySelectorAll('.skill-tag');

        tags.forEach((tag, i) => {
          tag.style.transitionDelay = `${i * 40}ms`;
          tag.classList.add('visible');

          // Tampilkan kembali skill
          tag.style.opacity = '1';
          tag.style.transform = 'translateY(0)';
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.skill-tags').forEach(group => {
    group.querySelectorAll('.skill-tag').forEach(tag => {
      tag.style.opacity = '0';
      tag.style.transform = 'translateY(10px)';
      tag.style.transition =
        'opacity 0.4s ease, transform 0.4s ease';
    });

    observer.observe(group);
  });
}


/* ── Add visible class immediately when in viewport at load ── */
function revealInitialElements() {
  document.querySelectorAll('.fade-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.classList.add('visible');
    }
  });
}

/* ── DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
  initLangSwitcher();
  initNavbar();
  initActiveNavLinks();
  initMobileNav();
  initFadeAnimations();
  initSmoothScroll();
  initTyped();
  initProjectHover();
  initSkillStagger();
  revealInitialElements();
});
