import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Book, Code, BarChart2, Database, TrendingUp, Award, ArrowRight, Sparkles, Star } from 'lucide-react';

const Home = () => {
  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();
  }, []);

  useEffect(() => {
    setCourses([
      {
        id: '1',
        title: 'Python数据分析基础',
        description: '掌握Python数据分析的核心概念和基础库',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover%20with%20code%20snippets&image_size=landscape_16_9',
        difficulty: '初级',
        duration: 12,
        rating: 4.8,
        students: 1520
      },
      {
        id: '2',
        title: 'Pandas数据处理',
        description: '深入学习Pandas库，掌握数据清洗和转换技巧',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Pandas%20data%20processing%20course%20cover%20with%20tables%20and%20charts&image_size=landscape_16_9',
        difficulty: '中级',
        duration: 16,
        rating: 4.9,
        students: 2100
      },
      {
        id: '3',
        title: 'Matplotlib数据可视化',
        description: '学习使用Matplotlib创建专业的数据可视化图表',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20with%20Matplotlib%20course%20cover%20colorful%20charts&image_size=landscape_16_9',
        difficulty: '中级',
        duration: 14,
        rating: 4.7,
        students: 1890
      },
      {
        id: '4',
        title: '数据库分析与SQL',
        description: '掌握SQL查询和数据库分析技能，玩转MySQL和PostgreSQL',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SQL%20database%20analysis%20course%20cover%20with%20database%20icons&image_size=landscape_16_9',
        difficulty: '高级',
        duration: 20,
        rating: 4.9,
        students: 1750
      },
      {
        id: '8',
        title: 'MySQL数据库实战',
        description: '从零掌握MySQL数据库管理，具备数据库设计、优化和维护能力',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MySQL%20database%20course%20cover%20with%20mysql%20logo&image_size=landscape_16_9',
        difficulty: '中级',
        duration: 18,
        rating: 4.8,
        students: 1480
      }
    ]);

    setCategories([
      {
        id: '基础入门',
        name: '基础入门',
        icon: <Book className="h-8 w-8" />,
        description: 'Python基础和数据分析入门课程',
        color: 'from-primary-500 to-primary-700'
      },
      {
        id: '数据处理',
        name: '数据处理',
        icon: <Database className="h-8 w-8" />,
        description: 'Pandas、NumPy等数据处理库',
        color: 'from-primary-600 to-primary-800'
      },
      {
        id: '数据可视化',
        name: '数据可视化',
        icon: <BarChart2 className="h-8 w-8" />,
        description: 'Matplotlib、Seaborn等可视化工具',
        color: 'from-accent-500 to-accent-700'
      },
      {
        id: '数据库分析',
        name: '数据库分析',
        icon: <Database className="h-8 w-8" />,
        description: 'SQL、MySQL、PostgreSQL等数据库',
        color: 'from-primary-500 to-primary-700'
      },
      {
        id: '机器学习',
        name: '机器学习',
        icon: <TrendingUp className="h-8 w-8" />,
        description: 'Scikit-learn等机器学习库',
        color: 'from-primary-700 to-primary-900'
      }
    ]);

    setProgress(35);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '初级': return 'bg-green-100 text-green-800';
      case '中级': return 'bg-blue-100 text-blue-800';
      case '高级': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-16 animate-fade-in">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 via-primary-700 to-accent-600 text-white p-8 md:p-16 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative max-w-4xl z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>商务数据分析专业首选平台</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair leading-tight">
            用Python解锁
            <span className="block bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
              数据的无限可能
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            DataLearn为商务数据分析与应用专业学生提供完整的课程体系，从基础到进阶，助你成为数据分析专家。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/courses" 
              className="group bg-white text-primary-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              开始学习
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/practice" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all border border-white/20"
            >
              实战练习
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-playfair">为什么选择我们</h2>
          <p className="text-gray-600 text-lg">全方位的学习体验，让你高效掌握数据分析技能</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Book, title: '完整课程体系', desc: '从Python基础到高级数据分析，覆盖商务数据分析的全流程技能', color: 'bg-primary-100 text-primary-800' },
            { icon: Code, title: '互动式学习', desc: '在线代码编辑器，实时运行和反馈，提升实践能力', color: 'bg-primary-100 text-primary-800' },
            { icon: Award, title: '成就激励系统', desc: '通过徽章、排行榜等激励机制，保持学习动力', color: 'bg-primary-100 text-primary-800' }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className={`${feature.color} rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 font-playfair">课程分类</h2>
            <p className="text-gray-600">选择你感兴趣的学习方向</p>
          </div>
          <Link to="/courses" className="text-primary-600 hover:text-primary-800 font-medium flex items-center gap-1">
            查看全部课程
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/courses?category=${category.id}`}
              className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}></div>
              <div className="relative z-10 text-white">
                <div className="mb-4 p-3 bg-white/20 rounded-xl inline-block">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm mb-4">{category.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span>探索课程</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 font-playfair">热门课程</h2>
            <p className="text-gray-600">同学们都在学的优质课程</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {courses.map((course) => (
            <Link 
              key={course.id}
              to={`/courses/${course.id}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={course.cover_image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {course.duration} 小时
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary-700 transition-colors">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{course.students} 人学习</span>
                  <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-4 py-2 rounded-lg font-medium transition-all">
                    开始学习
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {user && (
        <section className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-3xl font-bold mb-8 font-playfair">你的学习进度</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative">
              <div className="w-48 h-48 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${(progress / 100) * 283}`}
                    strokeDashoffset="283"
                    className="transition-all duration-1000 ease-in-out"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">{progress}%</span>
                  <span className="text-sm text-gray-500">已完成</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <h3 className="text-xl font-semibold mb-6">最近学习</h3>
              <div className="space-y-6">
                {[
                  { title: 'Python数据分析基础', progress: 60, color: 'from-primary-500 to-primary-700' },
                  { title: 'Pandas数据处理', progress: 25, color: 'from-primary-600 to-primary-800' }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white`}>
                        <Book className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">{item.progress}% 完成</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
