import React from 'react'

export default function Projects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            웹서버보안프로그래밍 01분반
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            GGWP
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  김승언
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  메인 리포지토리 관리, 레이아웃(헤더 메인 섹션, 푸터, 광고 배너
                  등)
                </p>
                <a
                  href="https://site-anvoanvo.vercel.app/"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  포트폴리오 보러가기
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  신준혁
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  랭킹, 즐겨찾기 기능 구현
                </p>
                <a
                  href="/"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  포트폴리오 보러가기
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  박서진
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  검색 기능 구현, 데이터베이스
                </p>
                <a
                  href="/"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  포트폴리오 보러가기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
