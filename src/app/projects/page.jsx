import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const projects = [
  {
    title: 'GGWP',
    description: '팀 프로젝트로 함께한 롤 전적검색 사이트',
    link: 'https://ggwp-lol.vercel.app/',
  },
  {
    title: 'HCJ',
    description: 'HTML, CSS, JavaScript 복습을 위한 간단한 홈페이지',
    link: 'https://hcj1-xi.vercel.app/',
  },
  {
    title: 'Clerk',
    description: 'Clerk 인증을 이용한 홈페이지',
    link: 'https://clerk-blond.vercel.app/',
  },
  {
    title: 'DAPARA',
    description: '쇼핑몰 예제 프로젝트',
    link: 'https://dapara1-coral.vercel.app/',
  },
  {
    title: 'CRUD',
    description: 'MongoDB를 이용한 Create, Read, Update, Delete 홈페이지',
    link: 'https://crud-ebon-ten.vercel.app/signIn',
  },
  // 새로운 프로젝트 추가 예시
  {
    title: 'New Project',
    description: '추후 프로젝트 진행하면 추가하겠습니다.',
    link: 'https://example.com/',
  },
  {
    title: 'New Project',
    description: '추후 프로젝트 진행하면 추가하겠습니다.',
    link: 'https://example.com/',
  },
  {
    title: 'New Project',
    description: '추후 프로젝트 진행하면 추가하겠습니다.',
    link: 'https://example.com/',
  },
]

const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className=" text-indigo-500 tracking-widest font-medium title-font mb-4">
            웹서버보안프로그래밍 01분반
          </h1>
          <h2 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
            GGWP
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
