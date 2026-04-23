import React from 'react';
import { personalInfo, skills, experiences } from '../data/mockData';

const About = () => {
  return (
    <div className="space-y-12">
      {/* 个人简介 */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6">关于我</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#165DFF] shadow-xl">
            <img 
              src={personalInfo.avatar} 
              alt={personalInfo.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{personalInfo.name}</h3>
            <h4 className="text-xl text-[#165DFF] mb-4">{personalInfo.title}</h4>
            <p className="text-gray-700 mb-6">{personalInfo.bio}</p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-semibold">邮箱：</span>
                <a href={`mailto:${personalInfo.email}`} className="text-[#165DFF] hover:underline">{personalInfo.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">GitHub：</span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#165DFF] hover:underline">{personalInfo.github}</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">LinkedIn：</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#165DFF] hover:underline">{personalInfo.linkedin}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 教育和工作经历 */}
      <section>
        <h2 className="text-3xl font-bold mb-6">经历</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <p className="text-[#165DFF]">{experience.institution}</p>
                </div>
                <p className="text-gray-500 mt-2 md:mt-0">{experience.period}</p>
              </div>
              <p className="text-gray-700">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 技术栈 */}
      <section>
        <h2 className="text-3xl font-bold mb-6">技术栈</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-[#165DFF]">
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
    </div>
  );
};

export default About;