'use client'
import React from 'react'
import Animation from './animation'
import Link from 'next/link'
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
              안녕하세요!
            </h1>
            <p className="mb-8 leading-relaxed">
              현재 중부대학교 재학 중인 유혁준이라고 합니다. next.js, Tailwind
              CSS, MongoDB를 이용해 여러 프로젝트들을 진행해 봄으로써 실력을
              키워나가고 있습니다.
            </p>
            <div className="flex justify-center">
              <Link
                href="/projects"
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
