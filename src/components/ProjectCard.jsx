import React from 'react'

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="p-4">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          {/* 아이콘이나 이미지를 여기에 추가할 수 있습니다 */}
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div>
          <h2 className="text-gray-900 text-lg title-font font-medium">
            {title}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">{description}</p>
          <a
            href={link}
            className="mt-3 text-indigo-500 inline-flex items-center"
          >
            보러가기
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
