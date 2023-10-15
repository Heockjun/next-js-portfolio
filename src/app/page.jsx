'use client'
import React from 'react'
import Animation from './animation'
import Link from 'next/link'
import Projects from './projects/page'

export default function Body() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Animation />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              중부대학교 재학중인 유혁준입니다.
              <br className="hidden lg:inline-block" />
              안녕하세요!
            </h1>
            <p className="mb-8 leading-relaxed">
              현재 중부대학교 재학 중인 유혁준이라고 합니다. 이번에 next.js를
              사용하여 포트폴리오 웹사이트를 만들고 있습니다. 아직 포트폴리오
              적을 만한 것이 딱히 없어 프레임뿐이지만, 만들어 보았습니다.
              전체적으로는 깔끔하고 편안한 느낌을 고집했습니다. 로티
              애니메이션을 사용했고 헤더에는 홈, 그리고 저희 팀 프로젝트와
              조원들의 포트폴리오, 그리고 콘택트에는 오픈 카톡 방 링크를
              걸어놓았습니다. 푸터에는 인스타그램과 깃허브로 이동할 수 있도록
              만들어 놨습니다.
            </p>
            <div className="flex justify-center">
              <Link
                href="./projects"
                className="inline-flex text-white bg-red-200 border-0 py-2 px-6 focus:outline-none hover:bg-red-300 rounded text-lg"
              >
                보러가기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
