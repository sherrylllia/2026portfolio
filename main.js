// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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
    'about.headline': '關於我',
    'about.p1': 'Hi, I\'m <strong>Sherry</strong>, a UI/UX designer who loves solving problems. I believe great design is not just about visual aesthetics — it\'s about making users feel intuitive, seamless, and delightful.',
    'about.p2': 'During my internship at Hua Nan Bank as a UI Design intern, I was responsible for interface design and icon creation across multiple projects. I excel at finding the right balance between business goals and user needs.',
    'about.p3': 'Outside of work, I enjoy photography 📷 music 🎵 stargazing 🔭 and traveling 🧳.',
    'about.edu.label': 'Education',
    'about.edu.major': 'Department of Advertising',
    'about.edu.double': 'Double Major｜B.A. Program in Digital Content & Technology',
    'about.edu.minor': 'Minor｜Department of Korean Language & Literature',
    'about.stat1': 'Projects',
    'about.stat2': 'Years of internship',
    'projects.label': 'Selected Works',
    'projects.title': 'My Design Cases',
    'projects.featured.badge': 'Graduation Project',
    'skills.label': 'Expertise',
    'skills.title': 'What I Do',
    'contact.label': 'Contact me',
    'contact.cta': 'Have a great idea?<br>Let\'s <em>design it</em><br>together.',
    'contact.name': 'Name',
    'contact.name.ph': 'Your name',
    'contact.email.ph': 'your@email.com',
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
    'skills.label': 'Expertise',
    'skills.title': '我能做什麼',
    'contact.label': 'Contact me',
    'contact.cta': '有個好想法？<br>一起把它<br><em>設計出來</em>',
    'contact.name': '姓名',
    'contact.name.ph': '你的名字',
    'contact.email.ph': 'your@email.com',
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
    'about.p1': '안녕하세요, 저는 <strong>Sherry</strong>입니다. 문제 해결을 좋아하는 UI/UX 디자이너예요. 좋은 디자인은 시각적 아름다움을 넘어, 사용자가 직관적이고 유쾌하게 느낄 수 있도록 만드는 것이라고 믿습니다.',
    'about.p2': '화난은행 UI 디자인 인턴으로 여러 프로젝트의 인터페이스 디자인과 아이콘 제작을 담당했습니다. 비즈니스 목표와 사용자 요구 사이의 최적 균형점을 찾는 것을 잘합니다.',
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
    'skills.label': '전문성',
    'skills.title': '제가 하는 일',
    'contact.label': '연락하기',
    'contact.cta': '좋은 아이디어가 있나요?<br>함께 <em>디자인</em>해요.',
    'contact.name': '이름',
    'contact.name.ph': '이름을 입력하세요',
    'contact.email.ph': 'your@email.com',
    'contact.subject': '제목',
    'contact.subject.ph': '협업 제안, 채용 문의…',
    'contact.message': '메시지',
    'contact.message.ph': '아이디어를 알려주세요…',
    'contact.send': '메시지 보내기',
    'footer.left': '© 2025 Sherry Liang. All rights reserved.',
    'footer.right': '정성껏 디자인 · 꼼꼼하게 제작',
  }
};

// ── SPECIAL ELEMENTS (innerHTML, placeholders, etc.) ──
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

// ── DROPDOWN TOGGLE ──
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