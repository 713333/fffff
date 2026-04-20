import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../hooks/useStore';
import { BookOpen, Star, Users } from 'lucide-react';

const CourseRecommendations: React.FC = () => {
  const { courses, fetchCourses, isLoading } = useStore();

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // 模拟课程数据
  const mockCourses = [
    {
      id: '1',
      title: 'Python基础入门',
      description: '从零基础开始学习Python编程，掌握基本语法和编程思维',
      cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20basics%20course%20cover&image_size=landscape_4_3',
      difficulty: 'beginner',
      category: '基础编程',
      created_by: '1',
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
      enrolled_count: 1200
    },
    {
      id: '2',
      title: '数据分析与可视化',
      description: '使用Python进行数据清洗、分析和可视化，掌握pandas、matplotlib等库',
      cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20and%20visualization%20course%20cover&image_size=landscape_4_3',
      difficulty: 'intermediate',
      category: '数据分析',
      created_by: '2',
      created_at: '2024-01-02',
      updated_at: '2024-01-02',
      enrolled_count: 850
    },
    {
      id: '3',
      title: '商务智能与决策支持',
      description: '将数据分析应用于商务决策，学习商业智能工具和方法',
      cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20intelligence%20and%20decision%20support%20course%20cover&image_size=landscape_4_3',
      difficulty: 'advanced',
      category: '商务分析',
      created_by: '3',
      created_at: '2024-01-03',
      updated_at: '2024-01-03',
      enrolled_count: 520
    }
  ];

  const displayCourses = courses.length > 0 ? courses : mockCourses;

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">推荐课程</h2>
            <p className="text-gray-600">选择适合你的Python学习路径</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                    <div className="h-8 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">推荐课程</h2>
          <p className="text-gray-600">选择适合你的Python学习路径</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.cover_image || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20course%20placeholder&image_size=landscape_4_3'} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                    course.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {course.difficulty === 'beginner' ? '初级' :
                     course.difficulty === 'intermediate' ? '中级' : '高级'}
                  </span>
                  <span className="text-sm text-gray-600">{course.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{course.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-600">
                    <Users size={16} className="mr-1" />
                    <span className="text-sm">{course.enrolled_count || 0} 人学习</span>
                  </div>
                  <Link 
                    to={`/courses/${course.id}`} 
                    className="px-4 py-2 bg-[#2b6cb0] text-white rounded hover:bg-[#3182ce] transition-colors"
                  >
                    查看详情
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link 
            to="/courses" 
            className="inline-flex items-center px-6 py-3 border border-[#2b6cb0] text-[#2b6cb0] rounded-lg hover:bg-[#2b6cb0] hover:text-white transition-colors"
          >
            查看全部课程
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseRecommendations;
