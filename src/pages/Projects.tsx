import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/mockData';

const Projects = () => {
  // 提取所有唯一标签
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // 根据选中的标签筛选项目
  const filteredProjects = selectedTag === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">我的项目</h1>
        <p className="text-gray-600">这里是我开发的Python项目，涵盖了不同的技术栈和应用场景。</p>
      </div>

      {/* 标签筛选器 */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag('all')}
          className={`px-4 py-2 rounded-full transition-colors ${selectedTag === 'all' ? 'bg-[#165DFF] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          全部
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full transition-colors ${selectedTag === tag ? 'bg-[#165DFF] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 项目列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-[#165DFF] rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link 
                  to={project.link} 
                  className="flex-1 bg-[#165DFF] text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                >
                  查看详情
                </Link>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-[#165DFF] text-[#165DFF] rounded-md hover:bg-blue-50 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 无项目时的提示 */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 bg-gray-100 rounded-lg">
          <p className="text-gray-600">没有找到符合条件的项目</p>
        </div>
      )}
    </div>
  );
};

export default Projects;