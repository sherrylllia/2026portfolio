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
        <h2>Role </h2> 
        <p>Project Manager</p>
    
        <h2>Concept</h2>
        <p>Iron window grilles (鐵窗花) are one of Taiwan's most ordinary yet resilient urban features — cold metal that has quietly guarded warm domestic life for decades. Each window and its shadow carries a trace of everyday living. Our team reimagined this vernacular craft through light, projection, and interaction, inviting visitors into the alleys ("阤陌") to witness the city's memory quietly bloom again.</p>
    
        <h2>Experience Highlights</h2>
        <p>Window Grille Drawing Station — visitors sketch their own grille pattern, turning passive viewing into hands-on making</p>
        <p>Dynamic Streetscape Wall — a projected, responsive wall that reconstructs an old-town alley atmosphere</p>
        <p>Semi-3D Projection House — a physical house structure layered with projection mapping, blending built form and digital image</p>

        <h2>Approach</h2>
        <p>The exhibition begins with a static timeline tracing the grilles' history, layered with text narration and NFC-triggered audio, then moves into interactive stations where visitors draw grille patterns and co-build the streetscape — shifting them from observers to participants in reviving this traditional craft.</p>
        
        <h2>Outcome</h2>
        <p>Through digital media, the project sought to re-translate Taiwan's iron-grille aesthetic for a new generation — bridging the memory gap between old and new eras, and letting a fading craft bloom again in people's hearts.</p>

        <h2>Wireframe</h2>
        <img src="1-1.png" alt="Wireframe">
        <img src="1-2.png" alt="Wireframe">
        <img src="1-3.png" alt="Wireframe">

        <h2>Exhibition Photos</h2>
        <img src="1-4.jpg" alt="Exhibition Photos">
        <img src="1-5.jpg" alt="Exhibition Photos">
        <img src="1-6.jpg" alt="Exhibition Photos">
    
      `,
      zh: `
        <h2>Role </h2> 
        <p>專案負責人 PM</p>
    
        <h2>Concept</h2>
        <p>鐵窗花,是台灣街景裡最平凡卻最堅韌的風景。它們以冷冽之身,守護著幾十年來溫熱的人情與日常。一窗一影,都是生活的筆觸。我們團隊以鐵窗花為題,透過光影、投影與互動的手法重新詮釋這項傳統工藝,帶領觀眾走進阤陌之中,看見城市的記憶靜靜盛放。</p>
    
        <h2>體驗特色</h2>
        <p>窗花繪製體驗：觀者可在電腦上透過畫筆與鏡射等繪畫功能，隨心所欲打造對稱又具個人特色的窗花圖騰。</p>
        <p>動態街景牆：繪製好的窗花將投射在老屋窗框上，觀者將在道地的台灣街景上看到自己獨一無二的創作。</p>
        <p>半立體投影房屋：透過凸出的投影設計，觀者可近距離欣賞自己的窗花創作並拍照留念。</p>

        <h2>執行方式</h2>
        <p>展覽從靜態展區的時間軸出發,結合文字敘事與 NFC 聲音互動,帶領觀眾一窺鐵窗花在各個年代角落的足跡;接著透過繪製窗花、共築街景等互動體驗,讓觀眾從單純的參觀者,轉變為讓這份傳統之美重新綻放的參與者。</p>

        <h2>成果與期許</h2>
        <p>我們期待《阤陌・盛放》能透過數位媒介,將台灣傳統鐵窗花美學重新轉譯,承接起新舊時代的記憶斷層,並交融現代數位技術與傳統人文情懷,讓鐵窗花之美跨越時空的限制,再次於新時代與大眾的心底盛放。</p>

        <h2>Wireframe</h2>
        <img src="1-1.png" alt="Wireframe">
        <img src="1-2.png" alt="Wireframe">
        <img src="1-3.png" alt="Wireframe">

        <h2>現場照片</h2>
        <img src="1-4.jpg" alt="Exhibition Photos">
        <img src="1-5.jpg" alt="Exhibition Photos">
        <img src="1-6.jpg" alt="Exhibition Photos">
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
    link: 'https://nccudct17th.com/',
    images: [],
  },
  'uiux-01': {
    category: { en: 'Internship', zh: '實習經歷', ko: '인턴십' },
    title: { en: 'Hua Nan Bank — Banking Tutorial Website', zh: '華南銀行 行動銀行・網路銀行操作教學網站', ko: '화난은행 - 뱅킹 튜토리얼 웹사이트' },
    time: { en: 'July 2025 - August 2025', zh: '2025 年 7 月 - 2025 年 8 月', ko: '2025년 7월 - 2025년 8월' },
    desc: {
      en: 'A step-by-step tutorial website guiding customers through three core functions of Hua Nan Bank\'s mobile and online banking.',
      zh: '一個操作教學網站，帶領使用者逐步完成華南銀行行動銀行與網路銀行的三項核心功能。',
      ko: '화난은행 모바일 및 온라인 뱅킹의 핵심 기능 3가지를 안내하는 단계별 튜토리얼 웹사이트입니다.'
    },
    overview: {
      en: `
        <h2>Role</h2>
        <p>FinTech Department, UI Project Intern</p>

        <h2>Background</h2>
        <p>During my internship at Hua Nan Bank's FinTech department, I noticed customers frequently contacted support with basic how-to questions about mobile and online banking — account opening, loan applications, and digital account services. There was no self-serve resource walking them through these flows.</p>

        <h2>My Role</h2>
        <p>Mapped out the existing banking flows across the mobile app and online banking platform, identifying the steps where users commonly got stuck.</p>
        <p>Designed the step-by-step UI and page structure in Figma, breaking each flow into clear, numbered instructions.</p>
        <p>Built and deployed the interactive tutorial website using Weba.</p>

        <h2>Outcome</h2>
        <p>Delivered a self-serve tutorial site covering all three core banking functions, giving both new and existing customers a clear reference for completing common banking tasks without contacting customer service.</p>

        <h2>Link</h2>
        <a href="https://www.hncb.com.tw/wps/portal/HNCB/">https://www.hncb.com.tw/wps/portal/HNCB/</a>

        <h2>Wireframe</h2>
        <img src="2-1.png" alt="Wireframe">
        <img src="2-2.png" alt="Wireframe">


        `,
      zh: `
        <h2>角色</h2>
        <p>金融科技部 UI 專案實習人員</p>

        <h2>專案背景</h2>
        <p>在華南銀行金融科技部實習期間，我發現客戶經常因為不熟悉行動銀行與網路銀行的操作流程（線上開戶、貸款申請、數位帳戶服務等）而聯繫客服，但當時並沒有一個自助式的教學資源可以引導使用者。</p>

        <h2>我的角色</h2>
        <p>梳理行動銀行與網路銀行既有的操作流程，找出使用者最容易卡關的步驟。</p>
        <p>在 Figma 上規劃步驟式 UI 介面與頁面結構，將每個流程拆解成清楚、編號的操作說明。</p>
        <p>使用 Weba 建置並上線這個互動式教學網站。</p>

        <h2>成果</h2>
        <p>完成一個涵蓋三項核心銀行功能的自助教學網站，讓新舊客戶都能清楚參考、自行完成常見的銀行業務，不需另外聯繫客服。</p>

        <h2>Link</h2>
        <a href="https://www.hncb.com.tw/wps/portal/HNCB/">https://www.hncb.com.tw/wps/portal/HNCB/</a>

        <h2>Wireframe</h2>
        <img src="2-1.png" alt="Wireframe">
        <img src="2-2.png" alt="Wireframe">
      `,
      ko: `
        <h2>역할</h2>
        <p>금융 기술 부서, UI 프로젝트 인턴</p>

        <h2>배경</h2>
        <p>화난은행 금융 기술 부서에서 인턴십을 하는 동안, 고객들이 모바일 및 온라인 뱅킹의 기본적인 이용 방법(계좌 개설, 대출 신청, 디지털 계좌 서비스 등)에 대해 자주 고객센터에 문의한다는 점을 발견했습니다. 이를 스스로 해결할 수 있는 안내 자료가 없었습니다.</p>

        <h2>담당 업무</h2>
        <p>모바일 앱과 온라인 뱅킹의 기존 흐름을 정리하고, 사용자가 자주 막히는 단계를 파악했습니다.</p>
        <p>Figma에서 단계별 UI와 페이지 구조를 설계하여, 각 흐름을 명확하고 번호가 매겨진 안내로 나누었습니다.</p>
        <p>Weba를 사용해 인터랙티브 튜토리얼 웹사이트를 제작하고 배포했습니다.</p>

        <h2>성과</h2>
        <p>세 가지 핵심 뱅킹 기능을 모두 다루는 셀프 서비스 튜토리얼 사이트를 완성하여, 신규 및 기존 고객 모두가 고객센터 문의 없이 주요 은행 업무를 처리할 수 있도록 했습니다.</p>
      `,
    },
    role: { en: 'UI/UX Designer, Content Designer', zh: 'UI/UX 設計師、內容設計', ko: 'UI/UX 디자이너, 콘텐츠 디자이너' },
    tags: ['FinTech', 'Internship', 'Figma', 'Weba'],
    link: 'https://www.huana.com.tw/tw/index.html',
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
  'uiux-03': {
    category: { en: 'UI/UX Concept', zh: 'UI/UX 概念', ko: 'UI/UX 컨셉' },
    title: { en: 'HomeMate — a rental & roommate-matching app design', zh: '「居然有你」租屋與找室友 App 服務設計', ko: 'HomeMate - 임대 및 룸메이트 매칭 앱 디자인' },
    desc: {
      en: 'A rental & roommate-matching app helping young renters find both their ideal home and the right roommate in one place.',
      zh: '一款租屋與找室友的服務型 App，幫助年輕租屋族一站解決找房與找室友的需求。',
      ko: '이상적인 집과 맞는 룸메이트를 한 곳에서 찾을 수 있도록 돕는 임대 및 룸메이트 매칭 앱입니다.'
    },
    overview: {
      en: `
        <h2>Background</h2>
        <p>For young renters, co-living is often the balance between rent and quality of life. We designed this app to address the pain points of both finding a rental and finding a compatible roommate in one connected experience.</p>

        <h2>Design Focus</h2>
        <p><strong>Finding a Rental</strong></p>
        <p>Map-based property search</p>
        <p>Filtering by conditions</p>
        <p>Reviews and communication system</p>
        <p><strong>Finding a Roommate</strong></p>
        <p>Roommate-matching design</p>
        <p>Personality-test-based matching results</p>
        <p>Custom filtering by preferences</p>
        <p>Reviews and communication system</p>

        <h2>Tools</h2>
        <p>Figma</p>
      `,
      zh: `
        <h2>專案背景</h2>
        <p>「你的理想家與最佳室友，一站搞定！」我們發現對於年輕人來說，「合租」是租金與生活品質的平衡，所以嘗試設計出這類型的服務 App 來解決現有的問題。</p>

        <h2>設計重點</h2>
        <p><strong>一、找租屋</strong></p>
        <p>地圖找房功能設計</p>
        <p>條件篩選功能</p>
        <p>評價、交流系統</p>
        <p><strong>二、找室友</strong></p>
        <p>篩選室友方式設計</p>
        <p>透過心理測驗推送結果</p>
        <p>自行設定條件篩選</p>
        <p>評價、交流系統</p>

        <h2>使用工具</h2>
        <p>Figma</p>
      `,
      ko: `
        <h2>배경</h2>
        <p>젊은 세입자들에게 함께 사는 것은 임대료와 삶의 질 사이의 균형을 의미하는 경우가 많습니다. 저희는 집을 찾는 것과 맞는 룸메이트를 찾는 것을 하나의 경험으로 연결하여 이 앱을 디자인했습니다.</p>

        <h2>디자인 포인트</h2>
        <p><strong>집 찾기</strong></p>
        <p>지도 기반 매물 검색</p>
        <p>조건별 필터링</p>
        <p>리뷰 및 소통 시스템</p>
        <p><strong>룸메이트 찾기</strong></p>
        <p>룸메이트 매칭 디자인</p>
        <p>성격 테스트 기반 매칭 결과</p>
        <p>선호도별 맞춤 필터링</p>
        <p>리뷰 및 소통 시스템</p>

        <h2>도구</h2>
        <p>Figma</p>
      `,
    },
    role: { en: 'UI/UX Designer', zh: 'UI/UX 設計師', ko: 'UI/UX 디자이너' },
    tags: ['Rental', 'Roommate Matching', 'Design System'],
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
    'about.edu.minor': 'Minor｜Korean Language',
    'about.stat1': 'Projects',
    'about.stat2': 'Years of internship',
    'projects.label': 'Selected Works',
    'projects.title': 'My Design Cases',
    'projects.featured.badge': 'Graduation Project',
    'projects.featured.title': 'Graduation Project: Pathways in Bloom',
    'projects.featured.desc': 'Resilient frames, warm memories. An interactive journey through Taiwan’s flourishing ironwork heritage.',
    'projects.uiux.01.title': 'Finance App Redesign',
    'projects.uiux.02.title': 'Medical Booking UX',
    'projects.uiux.03.title': 'HomeMate — a rental & roommate-matching app design',
    'projects.prog.01.title': 'Taiwanese Famous Beverage Promotion Campaign',
    'projects.graphic.01.title': 'Cafe Logo Design',
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
    'projects.uiux.03.title': '居然有你 — 租屋與室友匹配 app 設計',
    'projects.prog.01.title': '台灣知名飲料品牌行銷活動設計',
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