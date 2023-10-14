import React from 'react'
import Link from 'next/link'
import projects from '../app/projects/page'

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font bg-red-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl font-semibold">Portfolio</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-red-400">
              Home
            </Link>
            <Link href="./projects" className="mr-5 hover:text-red-400">
              Projects
            </Link>
            <Link
              href="https://open.kakao.com/o/sc9B1yMf"
              className="mr-5 hover:text-red-400"
            >
              Contact
            </Link>
          </nav>
          <button className="inline-flex items-center bg-red-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0">
            Button
          </button>
        </div>
      </header>
    </>
  )
}
