import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo, skills, projects } from '../data/mockData';

const Home = () => {
  // 获取前3个精选项目
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* 个人简介部分 */}
      <section className="bg-gradient-to-r from-[#165DFF] to-[#0088FF] text-white py-16 rounded-lg shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{personalInfo.name}</h1>
              <h2 className="text-xl md:text-2xl mb-6 text-blue-100">{personalInfo.title}</h2>
              <p className="text-lg mb-8 max-w-2xl">{personalInfo.bio}</p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7D00] transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7D00] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7D00] transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#FF7D00] transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技能展示部分 */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">技能栈</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-[#165DFF]">
                {/* 这里可以根据技能名称显示对应的图标 */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">{skill.name.charAt(0)}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#165DFF] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-500">{skill.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 精选项目部分 */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">精选项目</h2>
          <Link to="/projects" className="text-[#165DFF] hover:text-[#FF7D00] transition-colors flex items-center gap-1">
            查看全部
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
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
      </section>

      {/* 联系部分 */}
      <section className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">联系我</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center mb-8">如果您对我的项目感兴趣，或者有任何合作机会，欢迎随时联系我。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center gap-3 p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <Mail className="h-6 w-6 text-[#165DFF]" />
              <span>{personalInfo.email}</span>
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <Github className="h-6 w-6 text-[#165DFF]" />
              <span>GitHub</span>
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <Linkedin className="h-6 w-6 text-[#165DFF]" />
              <span>LinkedIn</span>
            </a>
            <a 
              href={personalInfo.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <Twitter className="h-6 w-6 text-[#165DFF]" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;