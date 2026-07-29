# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-07-29
- Primary product surfaces: 단일 페이지 포트폴리오의 Hero, About, Resume, Projects, Blog
- Evidence reviewed: `index.html`, `css/visual-refresh.css`, `css/responsive-refactor.css`, `images/`, `oh-my-viola/README.md`, `oh-my-viola/docs/architecture.md`

## Brand
- Personality: 신뢰감 있는 플랫폼 엔지니어, 차분하고 명확한 기술 전달
- Trust signals: 구체적인 역할, 문제와 결과, 검증 가능한 기술 스택
- Avoid: 과장된 수식어, 상투적인 채용 CTA, 마케팅형 아키텍처 인포그래픽, 기밀 정보, 장식만을 위한 신규 UI 패턴

## Product goals
- Goals: 최근 플랫폼 엔지니어링 성과와 대표 프로젝트를 빠르게 이해시키기
- Non-goals: 프로젝트 전체 문서화, 내부 저장소나 운영 정보 공개
- Success signals: 첫 화면과 대표 프로젝트에서 역할이 명확하고 모바일에서도 읽기 쉬움

## Personas and jobs
- Primary personas: 채용 담당자, 엔지니어링 리더, 협업 파트너
- User jobs: 전문 분야, 최근 성과, 기술 깊이 확인
- Key contexts of use: 데스크톱 이력 검토와 모바일 링크 열람

## Information architecture
- Primary navigation: Home, About, Resume, Project, Blog
- Core routes/screens: `index.html` 단일 페이지
- Content hierarchy: 역할 요약 → 경력과 성과 → 대표 프로젝트 → 기록

## Design principles
- 기존 섹션, 카드, 색상 토큰을 재사용한다.
- 기술 나열보다 문제, 구현, 결과 순으로 보여준다.
- 대표 작업만 시각적 위계를 높이고 나머지는 현재 밀도를 유지한다.
- Tradeoffs: 정적 사이트의 단순성을 유지하기 위해 별도 컴포넌트 계층이나 빌드 도구를 추가하지 않는다.

## Visual language
- Color: Primary `#3e64ff`, slate 계열 본문, 흰색과 옅은 회색 배경
- Typography: Poppins, 굵은 제목과 편안한 본문 행간
- Spacing/layout rhythm: Tailwind의 4/6/8 단위와 넓은 섹션 여백
- Shape/radius/elevation: `rounded-xl` 이상, 얕은 기본 그림자와 제한적인 hover lift
- Motion: 180~500ms 전환, 정보 이해를 방해하지 않는 범위
- Imagery/iconography: 실제 프로젝트 이미지와 기존 아이콘 폰트 우선. 아키텍처는 흰 배경, 얇은 선, 점선 경계, 흐름 화살표를 사용한 기존 다이어그램 문법 유지

## Components
- Existing components to reuse: 섹션 헤더, 경력 카드, 기술 배지, 프로젝트 카드, CTA 링크
- New/changed components: Projects 상단의 단일 Featured Project 카드, Oh My Viola 경력 카드 내부 아키텍처 다이어그램
- Variants and states: 기본, hover, keyboard focus, 모바일 적층
- Token/component ownership: Tailwind 설정과 `css/visual-refresh.css`

## Accessibility
- Target standard: WCAG 2.1 AA 기본 원칙
- Keyboard/focus behavior: 링크와 버튼의 기존 focus-visible 동작 유지
- Contrast/readability: 본문은 slate-600 이상, 작은 텍스트에 저대비 색상 사용 금지
- Screen-reader semantics: 의미 있는 heading 순서와 이미지 대체 텍스트 제공
- Reduced motion and sensory considerations: 핵심 정보는 hover 없이도 노출

## Responsive behavior
- Supported breakpoints/devices: 모바일, 태블릿, 데스크톱
- Layout adaptations: 2열 Featured Project는 모바일에서 1열로 적층
- Touch/hover differences: 대표 프로젝트의 핵심 설명과 기술은 hover 없이 표시

## Interaction states
- Loading: 정적 콘텐츠로 별도 상태 없음
- Empty: 해당 없음
- Error: 외부 링크에 의존하지 않고 핵심 내용을 페이지에 직접 제공
- Success: 해당 없음
- Disabled: 해당 없음
- Offline/slow network: 텍스트 콘텐츠는 외부 서비스 없이 표시

## Content voice
- Tone: 담백하고 결과 중심의 한국어, 필요한 기술명만 영어 사용
- Terminology: Agent Runtime Platform, Kubernetes Platform, Provisioning 등 일관된 명칭 사용
- Microcopy rules: 추상적인 역량 표현과 감성적인 연락 유도 문구를 피하고, 담당 범위와 구현 결과를 한 문장에 연결

## Implementation constraints
- Framework/styling system: 정적 HTML, Tailwind CDN, 기존 CSS
- Design-token constraints: `primary`와 refresh CSS 변수 재사용
- Performance constraints: 신규 런타임·의존성 금지, 이미지 한 장만 추가
- Compatibility constraints: 현재 브라우저와 GitHub Pages 배포 방식 유지
- Test/screenshot expectations: HTML 구조 검사와 데스크톱·모바일 렌더 확인

## Open questions
- 없음
