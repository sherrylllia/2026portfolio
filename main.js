// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── PROJECT DATA ──
const projects = {
  'graduation': {
    category: { en: 'Graduation Project', zh: '畢業專題', ko: '졸업 프로젝트' },
    title: { en: 'Pathways in Bloom', zh: '阡陌．盛放', ko: '졸업 프로젝트 제목' },
    desc: { en: 'Re-imagining traditional Taiwanese ironwork through tech-art to revitalize urban collective memories.', zh: '以科技藝術重新詮釋台灣傳統鐵窗花，在光影與互動間重塑城市歷史記憶。', ko: '기술 예술로 대만 전통 창살 무늬를 재해석하여 도시의 역사적 기억을 재구성하다.' },
    overview: {
      en: `
        <p>這個專案是為了解決...</p>
    
        <h5>Problem</h5>
        <p>使用者面臨的問題是...</p>
    
        <img src="project-01-research.jpg" alt="Research process">
    
        <h5>Process</h5>
        <p>我們透過訪談了 10 位使用者，發現...</p>
    
        <img src="project-01-wireframe.jpg" alt="Wireframe">
    
        <h5>Outcome</h5>
        <p>最終設計提升了 30% 的轉換率...</p>
      `,
      zh: `
        <p>這個專案是為了解決...</p>
    
        <h5>Problem</h5>
        <p>使用者面臨的問題是...</p>
    
        <img src="project-01-research.jpg" alt="Research process">
    
        <h5>Process</h5>
        <p>我們透過訪談了 10 位使用者，發現...</p>
    
        <img src="project-01-wireframe.jpg" alt="Wireframe">
    
        <h5>Outcome</h5>
        <p>最終設計提升了 30% 的轉換率...</p>
      `,
      
      ko: `
      <p>這個專案是為了解決...</p>
  
      <h5>Problem</h5>
      <p>使用者面臨的問題是...</p>
  
      <img src="project-01-research.jpg" alt="Research process">
  
      <h5>Process</h5>
      <p>我們透過訪談了 10 位使用者，發現...</p>
  
      <img src="project-01-wireframe.jpg" alt="Wireframe">
  
      <h5>Outcome</h5>
      <p>最終設計提升了 30% 的轉換率...</p>
    `,
    
    },
    role: { en: 'Project Manager (Finance & Logistics), UX Researcher, Storytelling Designer ', zh: '專案管理、總務、UX 研究員、故事牆設計', ko: '프로젝트 매니저 (총무), UX 리서처, 스토리텔링 디자이너' },
    tags: ['PM','GA','UX Research', 'UI Design', 'Figma'],
    link: '#',
    images: [],
  },
  'uiux-01': {
    category: { en: 'UI/UX Concept', zh: 'UI/UX 概念', ko: 'UI/UX 컨셉' },
    title: { en: 'Finance App Redesign', zh: '金融 App 重新設計', ko: '금융 앱 리디자인' },
    desc: { en: 'Redesigning the core experience of a financial app.', zh: '重新設計金融應用程式的核心體驗。', ko: '금융 앱의 핵심 경험을 재설계했습니다.' },
    overview: { en: 'Describe the project background, goals, and results here.', zh: '在這裡描述專案背景、目標與成果。', ko: '프로젝트 배경, 목표, 결과를 여기에 작성하세요.' },
    role: { en: 'UI/UX Designer', zh: 'UI/UX 設計師', ko: 'UI/UX 디자이너' },
    tags: ['Mobile', 'Design System'],
    link: '#',
    images: [],
  },
  'uiux-02': {
    category: { en: 'UI/UX Concept', zh: 'UI/UX 概念', ko: 'UI/UX 컨셉' },
    title: { en: 'Medical Booking UX', zh: '醫療預約系統 UX', ko: '의료 예약 시스템 UX' },
    desc: { en: 'Improving accessibility in a medical appointment system.', zh: '提升醫療預約系統的無障礙體驗。', ko: '의료 예약 시스템의 접근성을 개선했습니다.' },
    overview: { en: 'Describe the project background, goals, and results here.', zh: '在這裡描述專案背景、目標與成果。', ko: '프로젝트 배경, 목표, 결과를 여기에 작성하세요.' },
    role: { en: 'UX Researcher, UI Designer', zh: 'UX 研究員、UI 設計師', ko: 'UX 연구원, UI 디자이너' },
    tags: ['Healthcare', 'Accessibility'],
    link: '#',
    images: [],
  },
  'prog-01': {
    category: { en: 'Programming', zh: '程式開發', ko: '프로그래밍' },
    title: { en: 'SaaS Dashboard Design', zh: 'SaaS Dashboard 介面設計', ko: 'SaaS 대시보드 디자인' },
    desc: { en: 'A data-rich dashboard for a SaaS platform.', zh: '為 SaaS 平台設計的資料視覺化儀表板。', ko: 'SaaS 플랫폼을 위한 데이터 대시보드.' },
    overview: { en: 'Describe the project background, goals, and results here.', zh: '在這裡描述專案背景、目標與成果。', ko: '프로젝트 배경, 목표, 결과를 여기에 작성하세요.' },
    role: { en: 'UI Designer, Front-end Developer', zh: 'UI 設計師、前端開發', ko: 'UI 디자이너, 프론트엔드 개발' },
    tags: ['React', 'Data Viz'],
    link: '#',
    images: [],
  },
  'graphic-01': {
    category: { en: 'Graphic Design', zh: '平面設計', ko: '그래픽 디자인' },
    title: { en: 'E-commerce Visual Design', zh: '電商平台視覺設計', ko: 'E-커머스 비주얼 디자인' },
    desc: { en: 'Visual identity and UI design for an e-commerce platform.', zh: '電商平台的視覺識別與介面設計。', ko: 'E-커머스 플랫폼의 비주얼 아이덴티티와 UI 디자인.' },
    overview: { en: 'Describe the project background, goals, and results here.', zh: '在這裡描述專案背景、目標與成果。', ko: '프로젝트 배경, 목표, 결과를 여기에 작성하세요.' },
    role: { en: 'Graphic Designer', zh: '平面設計師', ko: '그래픽 디자이너' },
    tags: ['Branding', 'Visual'],
    link: '#',
    images: [],
  },
  'photo-01': {
    category: { en: 'Photography', zh: '攝影', ko: '사진' },
    title: { en: 'Photography', zh: '攝影作品', ko: '사진 작품' },
    desc: { en: 'A collection of my photography work.', zh: '我的攝影作品集。', ko: '사진 작품 모음.' },
    overview: { en: 'Describe your photography style here.', zh: '描述你的攝影風格與這系列作品的主題。', ko: '사진 스타일을 설명하세요.' },
    role: { en: 'Photographer', zh: '攝影師', ko: '사진작가' },
    tags: ['Photography', 'Portrait', 'Editing'],
    link: '#',
    images: [],
  },
};

// ── OVERLAY ──
const overlay = document.getElementById('projectOverlay');
const overlayBackdrop = document.getElementById('overlayBackdrop');
const overlayClose = document.getElementById('overlayClose');

function openOverlay(projectId) {
  const p = projects[projectId];
  if (!p) return;
  const lang = currentLang;

  document.getElementById('overlayCategory').textContent = p.category[lang] || p.category.en;
  document.getElementById('overlayTitle').textContent = p.title[lang] || p.title.en;
  document.getElementById('overlayDesc').textContent = p.desc[lang] || p.desc.en;
  document.getElementById('overlayOverview').innerHTML = p.overview[lang] || p.overview.en;
  document.getElementById('overlayRole').textContent = p.role[lang] || p.role.en;

  const overviewLabel = { en: 'Overview', zh: '專案概述', ko: '개요' };
  const roleLabel = { en: 'My Role', zh: '我的角色', ko: '내 역할' };
  const linkLabel = { en: 'View Full Project', zh: '查看完整專案', ko: '전체 프로젝트 보기' };
  document.getElementById('overlayOverviewLabel').textContent = overviewLabel[lang];
  document.getElementById('overlayRoleLabel').textContent = roleLabel[lang];
  document.getElementById('overlayLinkText').textContent = linkLabel[lang];

  const tagsEl = document.getElementById('overlayTags');
  tagsEl.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

  const imagesEl = document.getElementById('overlayImages');
  imagesEl.innerHTML = p.images.length
    ? p.images.map(src => `<img src="${src}" alt="">`).join('')
    : '';

  document.getElementById('overlayLink').href = p.link;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOverlay() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

overlayClose.addEventListener('click', closeOverlay);
overlayBackdrop.addEventListener('click', closeOverlay);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOverlay(); });

// ── ATTACH OVERLAY TO PROJECT ITEMS ──
document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const id = item.getAttribute('data-project');
    if (id) openOverlay(id);
  });
});

// ── i18n TRANSLATIONS ──
const translations = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'UI/UX Designer — Based in Taipei',
    'hero.sub': 'Transforming complex problems into intuitive and beautiful user experiences.',
    'hero.status.label': 'Status',
    'hero.status.value': 'Open to opportunities',
    'hero.expertise.label': 'Expertise',
    'hero.exp.label': 'Experience',
    'hero.exp.value': '2+ years internship',
    'about.label': 'About me',
    'about.headline': 'About me',
    'about.p1': 'Hi, I\'m <strong>Sherry</strong>, a UI/UX designer who loves solving problems. I believe great design is not just about visual aesthetics — it\'s about making users feel intuitive, seamless, and delightful.',
    'about.p2': 'During my internship at Hua Nan Bank as a UI Design intern, I was responsible for interface design and icon creation across multiple projects. I excel at finding the right balance between business goals and user needs.',
    'about.p3': 'Outside of work, I enjoy photography 📷 music 🎵 stargazing 🔭 and traveling 🧳.',
    'about.edu.label': 'Education',
    'about.edu.major': 'Department of Advertising',
    'about.edu.double': 'Double Major｜Digital Content & Technology',
    'about.edu.minor': 'Minor｜Department of Korean Language & Literature',
    'about.stat1': 'Projects',
    'about.stat2': 'Years of internship',
    'projects.label': 'Selected Works',
    'projects.title': 'My Design Cases',
    'projects.featured.badge': 'Graduation Project',
    'projects.featured.title': 'Graduation Project: Pathways in Bloom',
    'projects.featured.desc': 'Resilient frames, warm memories. An interactive journey through Taiwan’s flourishing ironwork heritage.',
    'projects.uiux.01.title': 'Finance App Redesign',
    'projects.uiux.02.title': 'Medical Booking UX',
    'projects.prog.01.title': 'SaaS Dashboard Design',
    'projects.graphic.01.title': 'E-commerce Visual Design',
    'projects.photo.01.title': 'Photography',
    'skills.label': 'Expertise',
    'skills.title': 'What I Do',
    'skills.uxresearch': 'User interviews, usability testing, competitive analysis — turning real data into design decisions.',
    'skills.uidesign': 'Building refined visual languages, from component design to complete Design Systems.',
    'skills.interaction.title': 'Interaction Design',
    'skills.interaction': 'Crafting smooth user flows and micro-interactions that make every action meaningful.',
    'skills.a11y.title': 'Accessibility',
    'skills.a11y': 'Following WCAG standards to ensure products are friendly and accessible to all users.',
    'skills.collab.title': 'Cross-team Collaboration',
    'skills.collab': 'Working seamlessly with PMs, engineers, and marketing to ensure designs ship within technical constraints.',
    'skills.datadriven.title': 'Data-driven Design',
    'skills.datadriven': 'Using A/B testing and analytics to continuously optimize user experience and conversion rates.',
    'contact.label': 'Contact me',
    'contact.cta': 'Have a great idea?<br>Let\'s <em>design it</em><br>together.',
    'contact.name': 'Name',
    'contact.name.ph': 'Your name',
    'contact.subject': 'Subject',
    'contact.subject.ph': 'Collaboration, job opportunity…',
    'contact.message': 'Message',
    'contact.message.ph': 'Tell me your idea…',
    'contact.send': 'Send Message',
    'footer.left': '© 2025 Sherry Liang. All rights reserved.',
    'footer.right': 'Designed with intention · Built with care',
  },
  zh: {
    'nav.about': '關於',
    'nav.projects': '作品',
    'nav.skills': '技能',
    'nav.contact': '聯絡',
    'hero.eyebrow': 'UI/UX 設計師 — 在台北',
    'hero.sub': '專注於使用者體驗設計，將複雜的問題轉化為直覺且美麗的解決方案。',
    'hero.status.label': '現況',
    'hero.status.value': '接受合作邀約',
    'hero.expertise.label': '專長',
    'hero.exp.label': '年資',
    'hero.exp.value': '2+ 年實習經驗',
    'about.label': 'About me',
    'about.headline': '關於我',
    'about.p1': '嗨，我是 <strong>Sherry</strong>，一位熱愛解決問題的 UI/UX 設計師。我相信好的設計不只是視覺上的美感，更是能讓使用者在使用產品時感受到直覺、流暢與愉悅。',
    'about.p2': '過去的實習經驗中，我在華南銀行擔任 UI 設計實習生，負責過多個專案的介面設計與 icon 的建立。我擅長在商業目標與使用者需求之間找到最佳平衡點。',
    'about.p3': '工作以外，我喜歡攝影📷 音樂🎵 天文觀星🔭 旅遊🧳。',
    'about.edu.label': '學歷 Education',
    'about.edu.major': '廣告學系',
    'about.edu.double': '雙主修｜數位內容與科技學士學位學程',
    'about.edu.minor': '輔系｜韓國語文學系',
    'about.stat1': '完成專案',
    'about.stat2': '實習年資經驗',
    'projects.label': '精選作品',
    'projects.title': '我的設計案例',
    'projects.featured.badge': '畢業專題',
    'projects.featured.title': '畢業專題展覽：阡陌．盛放',
    'projects.featured.desc': '一句話簡短描述這個專案的核心內容。',
    'projects.uiux.01.title': '金融 App 重新設計',
    'projects.uiux.02.title': '醫療預約系統 UX',
    'projects.prog.01.title': 'SaaS Dashboard 介面設計',
    'projects.graphic.01.title': '電商平台視覺設計',
    'projects.photo.01.title': '攝影作品',
    'skills.label': 'Expertise',
    'skills.title': '我能做什麼',
    'skills.uxresearch': '使用者訪談、可用性測試、競品分析，將真實數據轉化為設計決策。',
    'skills.uidesign': '建立精緻一致的視覺語言，從元件設計到完整的 Design System。',
    'skills.interaction.title': '互動設計',
    'skills.interaction': '打造流暢的使用者流程與微互動，讓每個操作都有意義。',
    'skills.a11y.title': '無障礙設計',
    'skills.a11y': '遵循 WCAG 標準，確保產品對所有使用者都友善且可及。',
    'skills.collab.title': '跨部門協作',
    'skills.collab': '與 PM、工程師、行銷無縫協作，確保設計落地且符合技術限制。',
    'skills.datadriven.title': '數據驅動設計',
    'skills.datadriven': '透過 A/B Testing 與數據分析持續優化產品體驗與轉換率。',
    'contact.label': 'Contact me',
    'contact.cta': '有個好想法？<br>一起把它<br><em>設計出來</em>',
    'contact.name': '姓名',
    'contact.name.ph': '你的名字',
    'contact.subject': '主旨',
    'contact.subject.ph': '合作提案、工作機會…',
    'contact.message': '訊息',
    'contact.message.ph': '告訴我你的想法…',
    'contact.send': '送出訊息',
    'footer.left': '© 2025 Sherry Liang. 保留所有權利。',
    'footer.right': '用心設計 · 細心打造',
  },
  ko: {
    'nav.about': '소개',
    'nav.projects': '작업',
    'nav.skills': '스킬',
    'nav.contact': '연락',
    'hero.eyebrow': 'UI/UX 디자이너 — 타이페이',
    'hero.sub': '복잡한 문제를 직관적이고 아름다운 사용자 경험으로 전환합니다.',
    'hero.status.label': '상태',
    'hero.status.value': '협업 가능',
    'hero.expertise.label': '전문 분야',
    'hero.exp.label': '경력',
    'hero.exp.value': '인턴십 2년+',
    'about.label': 'About me',
    'about.headline': '소개',
    'about.p1': '안녕하세요, 저는 <strong>Sherry</strong>입니다. 문제 해결을 좋아하는 UI/UX 디자이너예요.',
    'about.p2': '화난은행 UI 디자인 인턴으로 여러 프로젝트의 인터페이스 디자인과 아이콘 제작을 담당했습니다.',
    'about.p3': '업무 외에는 사진 📷 음악 🎵 천문 관측 🔭 여행 🧳을 즐깁니다.',
    'about.edu.label': '학력 Education',
    'about.edu.major': '광고학과',
    'about.edu.double': '복수전공｜디지털 콘텐츠 & 테크놀로지 학사',
    'about.edu.minor': '부전공｜한국어문학과',
    'about.stat1': '완료 프로젝트',
    'about.stat2': '인턴십 경력',
    'projects.label': '선별 작업',
    'projects.title': '디자인 케이스',
    'projects.featured.badge': '졸업 프로젝트',
    'projects.featured.title': '졸업 프로젝트 제목',
    'projects.featured.desc': '프로젝트 핵심 내용 한 줄 설명.',
    'projects.uiux.01.title': '금융 앱 리디자인',
    'projects.uiux.02.title': '의료 예약 UX',
    'projects.prog.01.title': 'SaaS 대시보드 디자인',
    'projects.graphic.01.title': 'E-커머스 비주얼 디자인',
    'skills.label': '전문성',
    'skills.title': '제가 하는 일',
    'skills.uxresearch': '사용자 인터뷰, 사용성 테스트, 경쟁사 분석 — 실제 데이터를 디자인 결정으로 전환합니다.',
    'skills.uidesign': '컴포넌트 디자인부터 완성된 디자인 시스템까지 정교한 시각 언어를 구축합니다.',
    'skills.interaction.title': '인터랙션 디자인',
    'skills.interaction': '모든 행동에 의미를 부여하는 부드러운 사용자 흐름과 마이크로 인터랙션을 제작합니다.',
    'skills.a11y.title': '접근성',
    'skills.a11y': 'WCAG 기준을 따라 모든 사용자에게 친화적인 제품을 만듭니다.',
    'skills.collab.title': '크로스팀 협업',
    'skills.collab': 'PM, 엔지니어, 마케팅과 원활하게 협력하여 기술 제약 내에서 디자인을 구현합니다.',
    'skills.datadriven.title': '데이터 기반 디자인',
    'skills.datadriven': 'A/B 테스트와 분석을 통해 사용자 경험과 전환율을 지속적으로 최적화합니다.',
    'contact.label': '연락하기',
    'contact.cta': '좋은 아이디어가 있나요?<br>함께 <em>디자인</em>해요.',
    'contact.name': '이름',
    'contact.name.ph': '이름을 입력하세요',
    'contact.subject': '제목',
    'contact.subject.ph': '협업 제안, 채용 문의…',
    'contact.message': '메시지',
    'contact.message.ph': '아이디어를 알려주세요…',
    'contact.send': '메시지 보내기',
    'footer.left': '© 2025 Sherry Liang. All rights reserved.',
    'footer.right': '정성껏 디자인 · 꼼꼼하게 제작',
  }
};

const specialHandlers = {
  'about.p1': el => el.innerHTML = translations[currentLang]['about.p1'],
  'about.p2': el => el.innerHTML = translations[currentLang]['about.p2'],
  'about.p3': el => el.innerHTML = translations[currentLang]['about.p3'],
  'contact.cta': el => el.innerHTML = translations[currentLang]['contact.cta'],
};

let currentLang = 'en';

function applyTranslations(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (specialHandlers[key]) {
      specialHandlers[key](el);
    } else if (t[key]) {
      el.textContent = t[key];
    }
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key]) el.placeholder = t[key];
  });
  document.getElementById('currentLang').textContent = lang.toUpperCase();
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('lang', lang);
}

// ── DROPDOWN ──
const langToggle = document.getElementById('langToggle');
const langDropdown = document.getElementById('langDropdown');
langToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle('open');
});
document.addEventListener('click', () => langDropdown.classList.remove('open'));
document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => {
    applyTranslations(btn.dataset.lang);
    langDropdown.classList.remove('open');
  });
});

// ── INIT ──
const savedLang = localStorage.getItem('lang') || 'en';
applyTranslations(savedLang);