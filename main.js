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
      <h2>역할</h2>
      <p>프로젝트 매니저 (PM)</p>

      <h2>콘셉트</h2>
      <p>철제 창살 무늬(鐵窗花)는 대만의 거리 풍경 중 가장 평범하면서도 가장 단단한 풍경입니다. 차가운 금속이지만 수십 년간 따뜻한 일상을 지켜왔습니다. 창문 하나, 그림자 하나에도 삶의 흔적이 담겨 있습니다. 저희 팀은 이 전통 공예를 빛과 영상, 인터랙션을 통해 새롭게 해석하여, 관람객을 골목("阤陌") 속으로 초대해 도시의 기억이 조용히 다시 피어나는 순간을 목격하게 했습니다.</p>

      <h2>체험 포인트</h2>
      <p>창살 무늬 그리기 체험 — 관람객이 직접 자신만의 창살 패턴을 그리며, 단순한 관람에서 직접 만드는 경험으로 전환</p>
      <p>다이나믹 거리 풍경 벽 — 옛 골목의 분위기를 재현하는 프로젝션 기반의 반응형 벽</p>
      <p>반입체 프로젝션 하우스 — 실제 건물 구조에 프로젝션 매핑을 더해 실물과 디지털 이미지를 결합</p>

      <h2>진행 방식</h2>
      <p>전시는 정적 전시 구역에서 시간의 흐름을 따라가는 것으로 시작하며, 텍스트 내레이션과 NFC 사운드 인터랙션을 결합해 관람객이 각 시대 속 창살 무늬의 흔적을 살펴보도록 합니다. 이어서 창살 무늬 그리기와 거리 풍경 함께 만들기 등의 체험을 통해, 관람객을 단순한 관찰자에서 이 전통의 아름다움을 다시 피어나게 하는 참여자로 전환시킵니다.</p>

      <h2>성과</h2>
      <p>디지털 미디어를 통해 대만 전통 철제 창살 무늬의 미학을 새로운 세대를 위해 재해석하고자 했습니다 — 신구 시대 사이의 기억 단절을 잇고, 현대 디지털 기술과 전통 인문 감성을 융합하여, 창살 무늬의 아름다움이 시공간의 제약을 넘어 새로운 시대와 대중의 마음속에서 다시 피어나기를 바랍니다.</p>

      <h2>와이어프레임</h2>
      <img src="1-1.png" alt="Wireframe">
      <img src="1-2.png" alt="Wireframe">
      <img src="1-3.png" alt="Wireframe">

      <h2>현장 사진</h2>
      <img src="1-4.jpg" alt="Exhibition Photos">
      <img src="1-5.jpg" alt="Exhibition Photos">
      <img src="1-6.jpg" alt="Exhibition Photos">
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
    title: { en: 'Undiscovered Taipei — App Redesign', zh: '「現在玩台北」App Redesign', ko: '언디스커버드 타이베이 - 앱 리디자인' },
    desc: {
      en: 'A comprehensive travel guide app redesign that helps tourists discover, filter, and plan itineraries around Taipei on the go.',
      zh: '一款台北旅遊指南 App 的重新設計，幫助旅客隨時隨地探索景點、篩選條件並規劃行程。',
      ko: '타이베이를 여행하는 관광객이 명소를 탐색하고, 조건을 필터링하고, 여정을 계획할 수 있도록 돕는 종합 여행 가이드 앱 리디자인입니다.',
    },
    overview: {
      en: `
        <h2>Background</h2>
        <p>Undiscovered Taipei (現在玩台北) is a comprehensive travel guide app designed for tourists exploring Taipei. Our team conducted a redesign to address usability issues surfaced through testing, and to strengthen the app's visual identity and brand character.</p>

        <h2>Target Audience</h2>
        <p>Deep-exploration tourists — seek unique cultural and culinary experiences</p>
        <p>Efficiency-focused users — want fast, easy access to travel info</p>
        <p>Itinerary planners — value comprehensive and detailed travel information</p>

        <h2>Testing Results & Solutions</h2>
        <p><strong>Barrier 1:</strong> Users couldn't link the "Tourism" tab to the attractions page. <strong>Solution:</strong> Surfaced tourism features on the homepage and renamed the tab to "Sightseeing," then validated with A/B testing.</p>
        <p><strong>Barrier 2:</strong> Users assumed all filters had to be filled in before viewing results. <strong>Solution:</strong> Changed "expand options" to "view more" and added expand/collapse icons to reduce mental load.</p>
        <p><strong>Barrier 3:</strong> Users wanted a map of nearby attractions to plan itineraries more easily. <strong>Solution:</strong> Added a "Nearby Attractions Map" on the Select Locations page and an "Itinerary Map" on the Plan Itinerary page.</p>
        <p><strong>Barrier 4:</strong> Users feared losing their selected attractions when choosing food. <strong>Solution:</strong> Displayed the number of selected locations on the "Add to Itinerary" button to build user confidence.</p>

        <h2>Visual Design</h2>
        <p>Defined a primary and secondary color scheme, selected Taipei Sans TC as the typeface, and adopted an illustrated visual style throughout the app.</p>

        <h2>Brand Character</h2>
        <p>Created "Li Zhang Bo" (里長伯), a guide character embodying three traits: considerate & understanding, reliable & up-to-date, and friendly & emotionally connected — giving the app a warm, local voice.</p>

        <h2>Outcome</h2>
        <p>Delivered a redesigned information architecture, an improved prototype addressing four key usability barriers, and a cohesive visual identity across the Find & Filter Attractions, Collect Attractions, and Plan a Trip flows.</p>
      `,
      zh: `
        <h2>專案背景</h2>
        <p>「現在玩台北」是一款為來台旅客打造的綜合性旅遊指南 App。我們團隊針對測試中發現的可用性問題進行重新設計，並強化 App 的視覺識別與品牌角色。</p>

        <h2>目標受眾</h2>
        <p>深度探索型旅客：追求獨特的文化與美食體驗</p>
        <p>效率導向使用者：希望快速、輕鬆取得旅遊資訊</p>
        <p>行程規劃者：重視完整且詳細的旅遊資訊</p>

        <h2>測試結果與解法</h2>
        <p><strong>障礙一：</strong>使用者無法將「旅遊」分頁與景點頁面聯想在一起。<strong>解法：</strong>在首頁呈現旅遊功能，並將分頁改名為「觀光」，再透過 A/B 測試驗證。</p>
        <p><strong>障礙二：</strong>使用者誤以為所有篩選條件都必須填寫才能查看結果。<strong>解法：</strong>將「展開選項」改為「查看更多」，並加上展開/收合圖示以降低認知負擔。</p>
        <p><strong>障礙三：</strong>使用者希望能看到鄰近景點地圖，方便規劃行程。<strong>解法：</strong>在「選擇地點」頁面加上「鄰近景點地圖」、在「規劃行程」頁面加上「行程地圖」。</p>
        <p><strong>障礙四：</strong>使用者擔心在選擇美食時會遺失已選的景點。<strong>解法：</strong>在「加入行程」按鈕上顯示已選地點數量，增加使用者信心。</p>

        <h2>視覺設計</h2>
        <p>制定主色與輔色配色方案，選用台北黑體（Taipei Sans TC）作為字體，並採用插畫風格貫穿整體視覺。</p>

        <h2>品牌角色</h2>
        <p>設計「里長伯」作為 App 的引導角色，具備三項特質：體貼與理解、可靠與即時、親切與情感連結，賦予 App 溫暖且在地的語氣。</p>

        <h2>成果</h2>
        <p>完成重新規劃的資訊架構、針對四大可用性障礙優化的原型，以及貫穿「找景點與篩選」、「收藏景點」、「規劃行程」三大流程的一致視覺識別。</p>
      `,
      ko: `
        <h2>배경</h2>
        <p>언디스커버드 타이베이(現在玩台北)는 타이베이를 여행하는 관광객을 위한 종합 여행 가이드 앱입니다. 저희 팀은 테스트를 통해 발견된 사용성 문제를 해결하고, 앱의 비주얼 아이덴티티와 브랜드 캐릭터를 강화하기 위해 리디자인을 진행했습니다.</p>

        <h2>타겟 사용자</h2>
        <p>심층 탐방형 여행객 — 독특한 문화 및 미식 경험을 추구</p>
        <p>효율 중심 사용자 — 빠르고 쉬운 여행 정보 접근을 원함</p>
        <p>일정 계획자 — 포괄적이고 상세한 여행 정보를 중시</p>

        <h2>테스트 결과 및 해결책</h2>
        <p><strong>장벽 1:</strong> 사용자가 "관광" 탭과 명소 페이지를 연결하지 못함. <strong>해결책:</strong> 홈페이지에 관광 기능을 노출하고 탭 이름을 "구경하기"로 변경한 후 A/B 테스트로 검증.</p>
        <p><strong>장벽 2:</strong> 사용자가 결과를 보기 전에 모든 필터를 채워야 한다고 오해. <strong>해결책:</strong> "옵션 펼치기"를 "더 보기"로 변경하고 펼침/접힘 아이콘을 추가해 인지 부담을 줄임.</p>
        <p><strong>장벽 3:</strong> 사용자가 일정을 쉽게 계획할 수 있도록 주변 명소 지도를 원함. <strong>해결책:</strong> "장소 선택" 페이지에 "주변 명소 지도"를, "일정 계획" 페이지에 "일정 지도"를 추가.</p>
        <p><strong>장벽 4:</strong> 사용자가 음식을 고를 때 선택한 명소를 잃을까 봐 걱정. <strong>해결책:</strong> "일정에 추가" 버튼에 선택한 장소 수를 표시해 사용자 신뢰도를 높임.</p>

        <h2>비주얼 디자인</h2>
        <p>주 색상 및 보조 색상 팔레트를 정하고, 서체는 타이베이 산스 TC(Taipei Sans TC)를 선택했으며, 전체적으로 일러스트 스타일을 적용했습니다.</p>

        <h2>브랜드 캐릭터</h2>
        <p>앱의 안내 캐릭터인 "리장보"(里長伯)를 만들었으며, 배려심 있고 이해심 많음, 신뢰할 수 있고 최신 정보를 제공함, 친근하고 정서적으로 연결됨이라는 세 가지 특성을 담아 앱에 따뜻하고 지역색 있는 톤을 부여했습니다.</p>

        <h2>성과</h2>
        <p>재구성된 정보 구조, 네 가지 핵심 사용성 문제를 해결한 개선된 프로토타입, 그리고 명소 찾기 및 필터링, 명소 저장, 일정 계획이라는 세 가지 흐름 전반에 걸친 일관된 비주얼 아이덴티티를 완성했습니다.</p>
      `,
    },
    role: { en: 'UX Researcher, Wireframing, Information Architecture', zh: 'UX 研究員、線框圖繪製、資訊架構規劃', ko: 'UX 리서처, 와이어프레임, 정보 구조 설계' },
    tags: ['Travel', 'Usability Testing', 'Design System'],
    link: '#',
    images: [],
  },
  'uiux-03': {
    category: { en: 'UI/UX Concept', zh: 'UI/UX 概念', ko: 'UI/UX 컨셉' },
    title: { en: 'HomeMate — a rental & roommate-matching app design', zh: '「居然有你」租屋與找室友 App 服務設計', ko: 'HomeMate - 임대 및 룸메이트 매칭 앱 디자인' },
    desc: {
      en: 'A rental & roommate-matching app helping young renters find both their ideal home and the right roommate in one place.',
      zh: '一款租屋與找室友的服務型 App，幫助年輕租屋族一站解決找房與找室友的需求。',
      ko: '이상적인 집과 맞는 룸메이트를 한 곳에서 찾을 수 있도록 돕는 임대 및 룸메이트 매칭 앱입니다.',
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
    link: 'https://reurl.cc/46EmV3',
    images: ['3-1.png'],
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
  'adv-01': {
    category: { en: 'Advertising & PR', zh: '公關廣告', ko: '광고 및 PR' },
    title: { en: 'Beverage Brand Revival — Marketing Proposal', zh: '經典氣泡飲料品牌再造 — 行銷企劃提案', ko: '전통 탄산음료 브랜드 리뉴얼 - 마케팅 제안' },
    desc: {
      en: 'A marketing campaign proposal to rejuvenate a legacy Taiwanese soda brand and re-engage younger consumers.',
      zh: '一份行銷企劃提案，為經典台灣氣泡飲料品牌注入活力，重新吸引年輕消費者。',
      ko: '전통 대만 탄산음료 브랜드에 활력을 불어넣고 젊은 소비자를 다시 사로잡기 위한 마케팅 캠페인 제안입니다.',
    },
    overview: {
      en: `
        <h2>Background</h2>
        <p>The client is a well-known Taiwanese carbonated soft drink brand that first introduced American-style root beer to Taiwan and localized it into an iconic national drink. Rising in the 1950s alongside Taiwan's economic growth, the brand became deeply embedded in local culture — even inspiring urban legends about its supposed health benefits. In recent years, however, sales have plateaued as consumer preferences shift and Gen Z gravitates toward newer trends.</p>

        <h2>Challenge</h2>
        <p>How might we rejuvenate a legacy brand's image and re-capture the attention of younger consumers, without losing the nostalgic identity that built its reputation?</p>

        <h2>Approach</h2>
        <p>Proposed a NT$10 million marketing campaign running July–September 2025 (a two-month window), targeting consumers aged 20–29. The proposal outlined a set of integrated marketing activities designed to reposition the brand as relevant and appealing to a younger audience while preserving its nostalgic brand equity.</p>

        <h2>My Role</h2>
        <p>STP Analysis</p>
        <p>Visual Design</p>
        <p>Campaign Ideation</p>
      `,
      zh: `
        <h2>專案背景</h2>
        <p>本案客戶為台灣知名的碳酸飲料品牌,最初將美國流行的 Root Beer 引進台灣並進行在地化改良,興起於 1950 年代,伴隨台灣經濟發展成長,成為家喻戶曉的經典品牌,甚至衍生出許多獨特的都市傳說(如加鹽治感冒、中暑等)。然而近年來,隨著消費者口味轉變、Z 世代追求新潮流,品牌在碳酸飲料市場的銷售表現逐漸停滯。</p>

        <h2>面臨的課題</h2>
        <p>如何在保留品牌懷舊價值的同時,重新讓年輕世代對這個經典品牌產生興趣與好感?</p>

        <h2>企劃方向</h2>
        <p>提案運用 1000 萬預算,規劃 2025 年 7 至 9 月(為期兩個月)的整合行銷活動,鎖定 20～29 歲年輕族群為主要溝通對象,設計一系列行銷活動,提升品牌在年輕消費者心中的心佔率。</p>

        <h2>我的角色</h2>
        <p>STP 分析</p>
        <p>視覺設計</p>
        <p>活動發想</p>
      `,
      ko: `
        <h2>배경</h2>
        <p>클라이언트는 대만의 유명 탄산음료 브랜드로, 미국식 루트비어를 대만에 처음 들여와 현지화하여 국민 음료로 자리잡았습니다. 1950년대 대만 경제 성장과 함께 성장하며 지역 문화 깊숙이 자리잡았고, 건강 효능에 대한 도시전설까지 만들어낼 정도로 사랑받았습니다. 하지만 최근 몇 년간 소비자 취향 변화와 Z세대의 새로운 트렌드 추구로 인해 매출이 정체되고 있습니다.</p>

        <h2>과제</h2>
        <p>오랜 역사를 가진 브랜드의 향수 어린 정체성을 유지하면서, 어떻게 젊은 소비자들의 관심을 다시 이끌어낼 수 있을까?</p>

        <h2>진행 방식</h2>
        <p>2025년 7월부터 9월까지 두 달간, 1000만 대만달러 예산으로 20~29세 소비자를 타깃으로 한 마케팅 캠페인을 제안했습니다. 브랜드의 향수 자산을 유지하면서도 젊은 세대에게 매력적으로 다가갈 수 있도록 통합 마케팅 활동을 설계했습니다.</p>

        <h2>담당 업무</h2>
        <p>STP 분석</p>
        <p>비주얼 디자인</p>
        <p>캠페인 기획</p>
      `,
    },
    role: { en: 'STP Analysis, Visual Design, Campaign Ideation', zh: 'STP 分析、視覺設計、活動發想', ko: 'STP 분석, 비주얼 디자인, 캠페인 기획' },
    tags: ['Advertising', 'PR', 'Marketing Strategy'],
    link: '#',
    images: [],
  },
  'adv-02': {
    category: { en: 'Advertising & PR', zh: '公關廣告', ko: '광고 및 PR' },
    title: { en: '55688 — More Than Just a Cab, Your Everyday Lifesaver', zh: '55688 — 不只 CAB，更是生活救星', ko: '55688 - 단순한 택시가 아닌, 일상의 든든한 조력자' },
    desc: {
      en: 'An annual PR campaign proposal repositioning Taiwan\'s largest taxi platform as an all-in-one lifestyle app for Gen Z.',
      zh: '一份年度公關企劃提案，將台灣最大計程車平台重新定位為 Z 世代的全方位生活服務 App。',
      ko: '대만 최대 택시 플랫폼을 Z세대를 위한 올인원 라이프스타일 앱으로 재포지셔닝하는 연간 PR 캠페인 제안입니다.',
    },
    overview: {
      en: `
        <h2>Background</h2>
        <p>55688 is Taiwan's largest taxi platform with over 7.2 million registered members, built on two decades of trust as a traditional cab-hailing service. In recent years, the brand expanded into a lifestyle service platform — integrating diverse ride options, moving services, laundry, and more — under the positioning "Make your life easier." However, qualitative interviews revealed a communication gap: younger consumers still associate 55688 with traditional yellow cabs and are largely unaware of its broader lifestyle services.</p>

        <h2>Core Message</h2>
        <p>"More Than Just a Cab, Your Everyday Lifesaver" — reframing 55688 from a transportation tool into an all-in-one lifestyle companion for Gen Z.</p>

        <h2>Target Audience</h2>
        <p>Gen Z consumers aged 20–35 who value time autonomy and convenience, and rely on digital tools and apps to solve everyday tasks efficiently.</p>

        <h2>Strategy & Execution</h2>
        <p><strong>Phase 1 — "叫叫 CAB":</strong> Built brand awareness of 55688's diverse vehicle options through a "Taxi Encyclopedia" social campaign and an in-app stamp-collecting activity to drive engagement.</p>
        <p><strong>Phase 2 — "Call A Backup":</strong> Deepened service awareness through illustrator collaborations, a laziness-level personality quiz, and an offline "Lazy Confession Booth" pop-up activation to generate media buzz.</p>
        <p><strong>Phase 3 — "Chat And Book-it":</strong> Drove app downloads through a Chatbot-powered lifestyle assistant and KOL/community collaborations to sustain momentum from earlier phases.</p>

        <h2>My Role</h2>
        <p>Worked collaboratively with the full team on research, analysis, and campaign ideation from start to finish.</p>

        <h2>Expected Outcomes</h2>
        <p>Projected a 15%+ increase in ride orders, 5%+ growth in lifestyle service adoption, and stronger owned-media community engagement and media relationships.</p>
      `,
      zh: `
        <h2>專案背景</h2>
        <p>55688 深耕台灣市場二十餘年，擁有超過 720 萬會員，是台灣最具規模的計程車服務品牌。近年集團轉型為生活服務媒合平台，整合多元計程車、搬家、清潔等服務，主打「Make your life easier」的品牌定位。然而透過質性訪談發現，年輕世代對品牌的印象仍停留在傳統小黃計程車，普遍不知道 55688 APP 已整合多元生活服務。</p>

        <h2>核心訊息</h2>
        <p>「不只 CAB，更是生活救星」——將 55688 從單純的叫車工具，重新定位為 Z 世代日常生活的全方位好幫手。</p>

        <h2>目標受眾</h2>
        <p>20～35 歲的 Z 世代，重視生活品質與時間自主性，習慣透過數位工具與 APP 解決生活鎖事。</p>

        <h2>執行策略</h2>
        <p><strong>第一階段「叫叫 CAB」：</strong>透過「計程車圖鑑」社群宣傳與 APP 內集章活動，建立品牌擁有多元計程車的印象。</p>
        <p><strong>第二階段「Call A Backup」：</strong>透過插畫家合作、懶惰程度分級心理測驗，以及線下「懶惰告解亭」實體活動，強化品牌服務多樣性的認知並創造媒體議題。</p>
        <p><strong>第三階段「Chat And Book-it」：</strong>透過 Chatbot 智慧管家與 KOL、社團合作，推動 APP 下載並收攏前期操作的延續效應。</p>

        <h2>我的角色</h2>
        <p>與團隊成員一起從研究、分析到活動發想全程共同合作完成。</p>

        <h2>預期效益</h2>
        <p>預估叫車訂單量提升 15% 以上、生活服務使用率成長 5% 以上，並強化品牌自有社群經營與媒體關係。</p>
      `,
      ko: `
        <h2>배경</h2>
        <p>55688은 대만 최대 규모의 택시 플랫폼으로, 720만 명이 넘는 회원을 보유하고 있으며 20여 년간 전통적인 택시 호출 서비스로 신뢰를 쌓아왔습니다. 최근 몇 년간 브랜드는 다양한 차량 옵션, 이사, 세탁 등을 통합한 생활 서비스 플랫폼으로 확장하며 "Make your life easier"라는 포지셔닝을 내세웠습니다. 하지만 정성 조사 결과, 젊은 소비자들은 여전히 55688을 전통적인 노란 택시로 인식하고 있으며, 확장된 생활 서비스에 대해서는 거의 알지 못한다는 소통 격차가 드러났습니다.</p>

        <h2>핵심 메시지</h2>
        <p>"단순한 택시가 아닌, 일상의 든든한 조력자" — 55688을 이동 수단에서 Z세대를 위한 올인원 라이프스타일 파트너로 재포지셔닝합니다.</p>

        <h2>타겟 오디언스</h2>
        <p>시간의 자율성과 편리함을 중시하며, 디지털 도구와 앱으로 일상을 효율적으로 해결하는 20~35세 Z세대.</p>

        <h2>전략 및 실행</h2>
        <p><strong>1단계 "叫叫 CAB":</strong> "택시 도감" 소셜 캠페인과 앱 내 스탬프 수집 이벤트를 통해 55688의 다양한 차량 옵션에 대한 브랜드 인지도를 구축했습니다.</p>
        <p><strong>2단계 "Call A Backup":</strong> 일러스트레이터 협업, 게으름 정도 성격 테스트, 오프라인 "게으름 고백 부스" 팝업 활동을 통해 서비스 인지도를 심화하고 미디어 화제성을 만들었습니다.</p>
        <p><strong>3단계 "Chat And Book-it":</strong> 챗봇 기반 라이프스타일 어시스턴트와 KOL·커뮤니티 협업을 통해 앱 다운로드를 견인하고 이전 단계의 효과를 지속시켰습니다.</p>

        <h2>담당 업무</h2>
        <p>리서치, 분석, 캠페인 기획까지 팀 전체와 함께 처음부터 끝까지 협업했습니다.</p>

        <h2>기대 효과</h2>
        <p>탑승 주문량 15% 이상 증가, 생활 서비스 이용률 5% 이상 성장, 자체 소셜 커뮤니티 운영 및 미디어 관계 강화를 예상합니다.</p>
      `,
    },
    role: { en: 'Team Collaboration — Research, Analysis, Campaign Ideation', zh: '團隊共同合作 — 研究、分析、活動發想', ko: '팀 협업 - 리서치, 분석, 캠페인 기획' },
    tags: ['Advertising', 'PR', 'Marketing Strategy'],
    link: '#',
    images: [],
  },
  'adv-02': {
    category: { en: 'Advertising & PR', zh: '公關廣告', ko: '광고 및 PR' },
    title: { en: '55688 — More Than Just a Cab, Your Everyday Lifesaver', zh: '55688 — 不只 CAB，更是生活救星', ko: '55688 - 단순한 택시가 아닌, 일상의 든든한 조력자' },
    desc: {
      en: "An annual PR campaign proposal repositioning Taiwan's largest taxi platform as an all-in-one lifestyle companion for Gen Z.",
      zh: '一份年度公關企劃提案，將台灣最大計程車平台重新定位為 Z 世代的全方位生活好幫手。',
      ko: '대만 최대 택시 플랫폼을 Z세대를 위한 올인원 라이프스타일 파트너로 재포지셔닝하는 연간 PR 캠페인 제안입니다.',
    },
    overview: {
      en: `
        <h2>Background</h2>
        <p>55688 is Taiwan's largest taxi platform with over 7.2 million registered members, built on two decades of trust as a traditional cab-hailing service. In recent years, the brand expanded into a lifestyle service platform — integrating diverse ride options, moving services, laundry, and more — under the positioning "Make your life easier." However, qualitative interviews revealed a communication gap: younger consumers still associate 55688 with traditional yellow cabs and are largely unaware of its broader lifestyle services.</p>

        <h2>Core Message</h2>
        <p>"More Than Just a Cab, Your Everyday Lifesaver" — reframing 55688 from a transportation tool into an all-in-one lifestyle companion for Gen Z.</p>

        <h2>Target Audience</h2>
        <p>Gen Z consumers aged 20–35 who value time autonomy and convenience, and rely on digital tools and apps to solve everyday tasks efficiently.</p>

        <h2>Strategy & Execution</h2>
        <p><strong>Phase 1 — "叫叫 CAB":</strong> Built brand awareness of 55688's diverse vehicle options through a "Taxi Encyclopedia" social campaign and an in-app stamp-collecting activity to drive engagement.</p>
        <p><strong>Phase 2 — "Call A Backup":</strong> Deepened service awareness through illustrator collaborations, a laziness-level personality quiz, and an offline "Lazy Confession Booth" pop-up activation to generate media buzz.</p>
        <p><strong>Phase 3 — "Chat And Book-it":</strong> Drove app downloads through a Chatbot-powered lifestyle assistant and KOL/community collaborations to sustain momentum from earlier phases.</p>

        <h2>My Role</h2>
        <p>Collaborated with the full team on every stage of the proposal, from research and analysis to strategy and campaign ideation, through group brainstorming sessions.</p>

        <h2>Outcome</h2>
        <p>Projected a 15%+ increase in ride orders, 5%+ growth in lifestyle service adoption, and stronger owned-media community engagement and media relationships.</p>
      `,
      zh: `
        <h2>專案背景</h2>
        <p>55688 深耕台灣市場二十餘年，擁有超過 720 萬會員，是台灣最具規模的計程車服務品牌。近年集團轉型為生活服務媒合平台，整合多元計程車、搬家、清潔等服務，主打「Make your life easier」的品牌定位。然而透過質性訪談發現，年輕世代對品牌的印象仍停留在傳統小黃計程車，普遍不知道 55688 APP 已整合多元生活服務。</p>

        <h2>核心訊息</h2>
        <p>「不只 CAB，更是生活救星」——將 55688 從單純的叫車工具，重新定位為 Z 世代日常生活的全方位好幫手。</p>

        <h2>目標受眾</h2>
        <p>20～35 歲的 Z 世代，重視生活品質與時間自主性，習慣透過數位工具與 APP 解決生活鎖事。</p>

        <h2>執行策略</h2>
        <p><strong>第一階段「叫叫 CAB」：</strong>透過「計程車圖鑑」社群宣傳與 APP 內集章活動，建立品牌擁有多元計程車的印象。</p>
        <p><strong>第二階段「Call A Backup」：</strong>透過插畫家合作、懶惰程度分級心理測驗，以及線下「懶惰告解亭」實體活動，強化品牌服務多樣性的認知並創造媒體議題。</p>
        <p><strong>第三階段「Chat And Book-it」：</strong>透過 Chatbot 智慧管家與 KOL、社團合作，推動 APP 下載並收攏前期操作的延續效應。</p>

        <h2>我的角色</h2>
        <p>與團隊全程共同參與，從研究分析到策略發想、活動企劃，都是透過小組共同腦力激盪完成。</p>

        <h2>成果</h2>
        <p>預估叫車訂單量提升 15% 以上、生活服務使用率成長 5% 以上，並強化品牌自有社群經營與媒體關係。</p>
      `,
      ko: `
        <h2>배경</h2>
        <p>55688은 대만 최대 규모의 택시 플랫폼으로, 720만 명이 넘는 회원을 보유하고 있으며 20여 년간 전통적인 택시 호출 서비스로 신뢰를 쌓아왔습니다. 최근 몇 년간 브랜드는 다양한 차량 옵션, 이사, 세탁 등을 통합한 생활 서비스 플랫폼으로 확장하며 "Make your life easier"라는 포지셔닝을 내세웠습니다. 하지만 정성 조사 결과, 젊은 소비자들은 여전히 55688을 전통적인 노란 택시로 인식하고 있으며, 확장된 생활 서비스에 대해서는 거의 알지 못한다는 소통 격차가 드러났습니다.</p>

        <h2>핵심 메시지</h2>
        <p>"단순한 택시가 아닌, 일상의 든든한 조력자" — 55688을 이동 수단에서 Z세대를 위한 올인원 라이프스타일 파트너로 재포지셔닝합니다.</p>

        <h2>타겟 오디언스</h2>
        <p>시간의 자율성과 편리함을 중시하며, 디지털 도구와 앱으로 일상을 효율적으로 해결하는 20~35세 Z세대.</p>

        <h2>전략 및 실행</h2>
        <p><strong>1단계 "叫叫 CAB":</strong> "택시 도감" 소셜 캠페인과 앱 내 스탬프 수집 이벤트를 통해 55688의 다양한 차량 옵션에 대한 브랜드 인지도를 구축했습니다.</p>
        <p><strong>2단계 "Call A Backup":</strong> 일러스트레이터 협업, 게으름 정도 성격 테스트, 오프라인 "게으름 고백 부스" 팝업 활동을 통해 서비스 인지도를 심화하고 미디어 화제성을 만들었습니다.</p>
        <p><strong>3단계 "Chat And Book-it":</strong> 챗봇 기반 라이프스타일 어시스턴트와 KOL·커뮤니티 협업을 통해 앱 다운로드를 견인하고 이전 단계의 효과를 지속시켰습니다.</p>

        <h2>담당 업무</h2>
        <p>리서치부터 전략 수립, 캠페인 기획까지 전 과정을 팀 전체가 함께 브레인스토밍하며 진행했습니다.</p>

        <h2>성과</h2>
        <p>탑승 주문량 15% 이상 증가, 생활 서비스 이용률 5% 이상 성장, 자체 소셜 커뮤니티 운영 및 미디어 관계 강화를 예상합니다.</p>
      `,
    },
    role: { en: 'Collaborative — Research, Strategy & Campaign Ideation (Team Brainstorming)', zh: '團隊共同協作 — 研究分析、策略與活動發想（小組共同腦力激盪）', ko: '팀 협업 - 리서치, 전략 및 캠페인 기획 (팀 브레인스토밍)' },
    tags: ['Advertising', 'PR', 'Marketing Strategy'],
    link: '#',
    images: [],
  },
  'adv-02': {
    category: { en: 'Advertising & PR', zh: '公關廣告', ko: '광고 및 PR' },
    title: { en: '55688 — More Than Just a Cab, Your Everyday Lifesaver', zh: '55688 — 不只 CAB，更是生活救星', ko: '55688 - 단순한 택시가 아닌, 일상의 든든한 조력자' },
    desc: {
      en: 'An annual PR campaign proposal repositioning 55688 from a traditional taxi service into an all-in-one lifestyle platform for Gen Z.',
      zh: '一份年度公關企劃提案，將 55688 從傳統計程車服務重新定位為 Z 世代的全方位生活服務平台。',
      ko: '55688을 전통적인 택시 서비스에서 Z세대를 위한 올인원 라이프스타일 플랫폼으로 재포지셔닝하는 연간 PR 캠페인 제안입니다.',
    },
    overview: {
      en: `
        <h2>Background</h2>
        <p>55688 is Taiwan's largest taxi platform with over 7.2 million registered members, built on two decades of trust as a traditional cab-hailing service. In recent years, the brand expanded into a lifestyle service platform — integrating diverse ride options, moving services, laundry, and more — under the positioning "Make your life easier." However, qualitative interviews revealed a communication gap: younger consumers still associate 55688 with traditional yellow cabs and are largely unaware of its broader lifestyle services.</p>

        <h2>Core Message</h2>
        <p>"More Than Just a Cab, Your Everyday Lifesaver" — reframing 55688 from a transportation tool into an all-in-one lifestyle companion for Gen Z.</p>

        <h2>Target Audience</h2>
        <p>Gen Z consumers aged 20–35 who value time autonomy and convenience, and rely on digital tools and apps to solve everyday tasks efficiently.</p>

        <h2>Strategy & Execution</h2>
        <p>A six-month, NT$3.6 million integrated campaign across three phases:</p>
        <p><strong>Phase 1 — "叫叫 CAB":</strong> Built brand awareness of 55688's diverse vehicle options through a "Taxi Encyclopedia" social campaign and an in-app stamp-collecting activity to drive engagement.</p>
        <p><strong>Phase 2 — "Call A Backup":</strong> Deepened service awareness through illustrator collaborations, a laziness-level personality quiz, and an offline "Lazy Confession Booth" pop-up activation to generate media buzz.</p>
        <p><strong>Phase 3 — "Chat And Book-it":</strong> Drove app downloads through a Chatbot-powered lifestyle assistant and KOL/community collaborations to sustain momentum from earlier phases.</p>

        <h2>Outcome</h2>
        <p>Projected a 15%+ increase in ride orders, 5%+ growth in lifestyle service adoption, and stronger owned-media community engagement and media relationships.</p>
      `,
      zh: `
        <h2>專案背景</h2>
        <p>55688 深耕台灣市場二十餘年,擁有超過 720 萬會員,是台灣最具規模的計程車服務品牌。近年集團轉型為生活服務媒合平台,整合多元計程車、搬家、清潔等服務,主打「Make your life easier」的品牌定位。然而透過質性訪談發現,年輕世代對品牌的印象仍停留在傳統小黃計程車,普遍不知道 55688 APP 已整合多元生活服務。</p>

        <h2>核心訊息</h2>
        <p>「不只 CAB,更是生活救星」——將 55688 從單純的叫車工具,重新定位為 Z 世代日常生活的全方位好幫手。</p>

        <h2>目標受眾</h2>
        <p>20～35 歲的 Z 世代,重視生活品質與時間自主性,習慣透過數位工具與 APP 解決生活鎖事。</p>

        <h2>執行策略</h2>
        <p>規劃為期半年、預算新台幣 360 萬元的三階段整合行銷活動:</p>
        <p><strong>第一階段「叫叫 CAB」：</strong>透過「計程車圖鑑」社群宣傳與 APP 內集章活動,建立品牌擁有多元計程車的印象。</p>
        <p><strong>第二階段「Call A Backup」：</strong>透過插畫家合作、懶惰程度分級心理測驗,以及線下「懶惰告解亭」實體活動,強化品牌服務多樣性的認知並創造媒體議題。</p>
        <p><strong>第三階段「Chat And Book-it」：</strong>透過 Chatbot 智慧管家與 KOL、社團合作,推動 APP 下載並收攏前期操作的延續效應。</p>

        <h2>預期效益</h2>
        <p>預估叫車訂單量提升 15% 以上、生活服務使用率成長 5% 以上,並強化品牌自有社群經營與媒體關係。</p>
      `,
      ko: `
        <h2>배경</h2>
        <p>55688은 대만 최대 규모의 택시 플랫폼으로, 720만 명이 넘는 회원을 보유하고 있으며 20여 년간 전통적인 택시 호출 서비스로 신뢰를 쌓아왔습니다. 최근 몇 년간 브랜드는 다양한 차량 옵션, 이사, 세탁 등을 통합한 생활 서비스 플랫폼으로 확장하며 "Make your life easier"라는 포지셔닝을 내세웠습니다. 하지만 정성 조사 결과, 젊은 소비자들은 여전히 55688을 전통적인 노란 택시로 인식하고 있으며, 확장된 생활 서비스에 대해서는 거의 알지 못한다는 소통 격차가 드러났습니다.</p>

        <h2>핵심 메시지</h2>
        <p>"단순한 택시가 아닌, 일상의 든든한 조력자" — 55688을 이동 수단에서 Z세대를 위한 올인원 라이프스타일 파트너로 재포지셔닝합니다.</p>

        <h2>타겟 오디언스</h2>
        <p>시간의 자율성과 편리함을 중시하며, 디지털 도구와 앱으로 일상을 효율적으로 해결하는 20~35세 Z세대.</p>

        <h2>전략 및 실행</h2>
        <p>6개월간, 대만달러 360만 원 예산으로 진행되는 3단계 통합 캠페인:</p>
        <p><strong>1단계 "叫叫 CAB":</strong> "택시 도감" 소셜 캠페인과 앱 내 스탬프 수집 이벤트를 통해 55688의 다양한 차량 옵션에 대한 브랜드 인지도를 구축했습니다.</p>
        <p><strong>2단계 "Call A Backup":</strong> 일러스트레이터 협업, 게으름 정도 성격 테스트, 오프라인 "게으름 고백 부스" 팝업 활동을 통해 서비스 인지도를 심화하고 미디어 화제성을 만들었습니다.</p>
        <p><strong>3단계 "Chat And Book-it":</strong> 챗봇 기반 라이프스타일 어시스턴트와 KOL·커뮤니티 협업을 통해 앱 다운로드를 견인하고 이전 단계의 효과를 지속시켰습니다.</p>

        <h2>기대 효과</h2>
        <p>탑승 주문량 15% 이상 증가, 생활 서비스 이용률 5% 이상 성장, 자체 소셜 커뮤니티 운영 및 미디어 관계 강화를 예상합니다.</p>
      `,
    },
    role: { en: 'Collaborative team brainstorming — joint analysis and strategy development', zh: '全組共同發想 — 分析與企劃皆為團隊共同討論完成', ko: '팀 공동 브레인스토밍 - 분석 및 전략을 팀 전체가 함께 진행' },
    tags: ['Advertising', 'PR', 'Marketing Strategy'],
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
    'projects.uiux.02.title': 'Undiscovered Taipei — App Redesign',
    'projects.uiux.03.title': 'HomeMate — a rental & roommate-matching app design',
    'projects.prog.01.title': 'Taiwanese Famous Beverage Promotion Campaign',
    'projects.graphic.01.title': 'Cafe Logo Design',
    'projects.adv.01.title': 'Beverage Brand Revival — Marketing Proposal',
    'projects.adv.02.title': '55688 — More Than Just a Cab, Your Everyday Lifesaver',
    'projects.photo.01.title': 'Photography',
    'skills.label': 'Expertise',
    'skills.title': 'What I Do',
    'skills.uxresearch': 'User interviews, usability testing, competitive analysis — turning real data into design decisions.',
    'skills.uidesign': 'Building refined visual languages, from component design to complete Design Systems.',
    'skills.adcampaign.title': 'Advertising & Campaign Strategy',
    'skills.adcampaign': 'Planning integrated PR and marketing campaigns — from audience insight to core message and execution.',
    'skills.frontend.title': 'Front-End Development',
    'skills.frontend': 'Building interactive interfaces and small web apps with JavaScript, HTML, and CSS.',
    'skills.photography.title': 'Photography',
    'skills.photography': 'Capturing portraits and everyday moments with an eye for light, composition, and story.',
    'skills.curation.title': 'Exhibition Curation',
    'skills.curation': 'Planning and coordinating exhibitions — from concept and spatial design to on-site execution.',
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
    'projects.uiux.02.title': '「現在玩台北」App Redesign',
    'projects.uiux.03.title': '居然有你 — 租屋與室友匹配 app 設計',
    'projects.prog.01.title': '台灣知名飲料品牌行銷活動設計',
    'projects.graphic.01.title': '電商平台視覺設計',
    'projects.adv.01.title': '經典氣泡飲料品牌再造 — 行銷企劃提案',
    'projects.adv.02.title': '55688 — 不只 CAB，更是生活救星',
    'projects.photo.01.title': '攝影作品',
    'skills.label': 'Expertise',
    'skills.title': '我能做什麼',
    'skills.uxresearch': '使用者訪談、可用性測試、競品分析，將真實數據轉化為設計決策。',
    'skills.uidesign': '建立精緻一致的視覺語言，從元件設計到完整的 Design System。',
    'skills.adcampaign.title': '廣告企劃',
    'skills.adcampaign': '規劃整合行銷與公關企劃，從受眾洞察到核心訊息與執行方案。',
    'skills.frontend.title': '前端開發',
    'skills.frontend': '使用 JavaScript、HTML、CSS 打造互動介面與小型網頁應用。',
    'skills.photography.title': '攝影',
    'skills.photography': '以光線、構圖與敘事捕捉人像與日常時刻。',
    'skills.curation.title': '藝術策展',
    'skills.curation': '規劃並統籌展覽，從概念發想、空間設計到現場執行。',
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
    'projects.uiux.02.title': '언디스커버드 타이베이 - 앱 리디자인',
    'projects.uiux.03.title': 'HomeMate - 임대 및 룸메이트 매칭 앱 디자인',
    'projects.prog.01.title': 'SaaS 대시보드 디자인',
    'projects.graphic.01.title': 'E-커머스 비주얼 디자인',
    'projects.adv.01.title': '전통 탄산음료 브랜드 리뉴얼 - 마케팅 제안',
    'projects.adv.02.title': '55688 - 단순한 택시가 아닌, 일상의 든든한 조력자',
    'projects.photo.01.title': '사진 작품',
    'skills.label': '전문성',
    'skills.title': '제가 하는 일',
    'skills.uxresearch': '사용자 인터뷰, 사용성 테스트, 경쟁사 분석 — 실제 데이터를 디자인 결정으로 전환합니다.',
    'skills.uidesign': '컴포넌트 디자인부터 완성된 디자인 시스템까지 정교한 시각 언어를 구축합니다.',
    'skills.adcampaign.title': '광고 캠페인 전략',
    'skills.adcampaign': '오디언스 인사이트부터 핵심 메시지, 실행까지 통합 마케팅·PR 캠페인을 기획합니다.',
    'skills.frontend.title': '프론트엔드 개발',
    'skills.frontend': 'JavaScript, HTML, CSS로 인터랙티브한 인터페이스와 소형 웹 앱을 제작합니다.',
    'skills.photography.title': '사진',
    'skills.photography': '빛, 구도, 스토리를 담아 인물과 일상의 순간을 포착합니다.',
    'skills.curation.title': '전시 기획',
    'skills.curation': '콘셉트 기획부터 공간 디자인, 현장 실행까지 전시를 기획하고 총괄합니다.',
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