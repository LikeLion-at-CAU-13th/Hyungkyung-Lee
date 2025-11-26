export interface Project {
  id: number
  slug: string
  title: string
  description: string
  tech: string[]
  url: string
  github: string
  content?: ProjectContent
}

export interface ProjectContent {
  overview?: string
  features?: string[]
  techStack?: string
}

// dummy data
export const projects: Project[] = [
  {
    id: 1,
    slug: 'next-portfolio',
    title: 'Personal Portfolio',
    description: 'Next.js와 Tailwind로 만든 반응형 포트폴리오 웹사이트',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    url: '#',
    github: '#',
    content: {
      overview:
        'Next.js의 App Router와 Tailwind CSS를 활용해 반응형 UI와 페이지 전환 애니메이션을 구현한 개인 포트폴리오입니다.',
      features: [
        '프로젝트 상세 페이지 동적 라우팅',
      ],
      techStack:
        'Next.js를 사용한 동적 라우팅',
    },
  },
  {
    id: 2,
    slug: 'movie-finder',
    title: 'Movie Finder',
    description: 'API를 활용한 영화 검색 웹 애플리케이션',
    tech: ['TypeScript', 'Vite'],
    url: '#',
    github: '#',
    content: {
      overview:
        'API를 이용해 실시간 영화 데이터를 불러와 검색 기능을 구현',
      features: ['영화 검색 및 필터링', '상세 페이지 조회'],
      techStack: 'Vite 개발 서버 환경에서 API 연동 구현',
    },
  },
   {
    id: 3,
    slug: 'task-manager',
    title: 'Task Manager',
    description: 'React + Redux를 활용한 할일 관리 애플리케이션',
    tech: ['React', 'Redux Toolkit', 'CSS Modules'],
    url: '#',
    github: '#',
    content: {
      overview: '사용자가 할일을 추가, 삭제, 편집할 수 있는 웹 애플리케이션입니다.',
      features: ['할일 추가/삭제/편집', '완료된 항목 표시'],
      techStack: 'React와 Redux Toolkit으로 상태 관리',
    },
   },
  {
    id: 4,
    slug: 'quiz',
    title: 'Quiz App',
    description: 'JavaScript 기반 퀴즈 애플리케이션',
    tech: ['React', 'React Query'],
    url: '#',
    github: '#',
    content: {
      overview: '사용자가 실시간 퀴즈에 참여하는 웹 애플리케이션입니다.',
      features: ['실시간 점수 표시', '퀴즈 생성 및 편집'],
      techStack: 'React + React Query로 상태 관리',
    },
  },
]
