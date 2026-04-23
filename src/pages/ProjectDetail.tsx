import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">项目不存在</h1>
        <Link to="/projects" className="text-[#165DFF] hover:text-[#FF7D00] transition-colors flex items-center gap-1 justify-center">
          <ArrowLeft className="h-5 w-5" />
          返回项目列表
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* 返回按钮 */}
      <Link to="/projects" className="text-[#165DFF] hover:text-[#FF7D00] transition-colors flex items-center gap-1 w-fit">
        <ArrowLeft className="h-5 w-5" />
        返回项目列表
      </Link>

      {/* 项目标题和标签 */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-[#165DFF] rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 项目图片 */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-80 object-cover"
        />
      </div>

      {/* 项目详情 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">项目介绍</h2>
        <p className="text-gray-700 mb-6">{project.details}</p>

        {/* 代码片段 */}
        {project.codeSnippets && project.codeSnippets.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">关键代码</h3>
            {project.codeSnippets.map((snippet, index) => (
              <div key={index} className="bg-gray-900 text-white rounded-md p-4 overflow-x-auto">
                <pre className="font-mono text-sm">{snippet}</pre>
              </div>
            ))}
          </div>
        )}

        {/* 项目链接 */}
        <div className="mt-8 flex gap-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              <Github className="h-5 w-5" />
              查看GitHub代码
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;