import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Play, Check, Book, Code, FileText, ArrowLeft, Star, Clock, Users, Heart } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set(['1']));

  useEffect(() => {
    const coursesData = [
      {
        id: '1',
        title: 'Python数据分析基础',
        description: '本课程将带你从零开始学习Python数据分析，掌握核心概念和基础库的使用。通过实际案例和动手练习，你将学会如何使用Python处理和分析数据，为商务决策提供支持。',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover%20modern%20design&image_size=landscape_16_9',
        difficulty: '初级',
        category: '基础入门',
        duration: 12,
        rating: 4.8,
        instructor: '张教授',
        instructor_bio: '数据分析专家，拥有10年教学经验，曾在多家企业担任数据分析师。',
        instructor_avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20teacher%20avatar%20portrait&image_size=square',
        start_date: '2026-01-15',
        students: 1520,
        chapters: [
          {
            id: '1',
            title: 'Python基础',
            description: '从Python最基础的知识开始，了解编程基本概念',
            lessons: [
              {
                id: '1-1',
                title: 'Python简介与环境搭建',
                type: 'video',
                duration: '45分钟',
                completed: true,
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=programming%20tutorial%20video%20thumbnail&image_size=landscape_16_9',
                content: '本课程将介绍Python编程语言的特点和应用场景，教你如何搭建Python开发环境...'
              },
              {
                id: '1-2',
                title: 'Python基本语法',
                type: 'video',
                duration: '60分钟',
                completed: false,
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20code%20syntax%20tutorial&image_size=landscape_16_9',
                content: '学习Python的基本语法，包括变量、数据类型、运算符、条件语句、循环语句等...'
              },
              {
                id: '1-3',
                title: 'Python数据类型',
                type: 'video',
                duration: '50分钟',
                completed: false,
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20types%20python%20tutorial&image_size=landscape_16_9',
                content: '深入了解Python的核心数据类型：列表、字典、元组、集合等...'
              },
              {
                id: '1-4',
                title: 'Python基础练习',
                type: 'exercise',
                duration: '30分钟',
                completed: false,
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coding%20exercise%20practice%20screen&image_size=landscape_16_9',
                content: '通过实际编程练习，巩固所学的Python基础知识...'
              }
            ]
          },
          {
            id: '2',
            title: 'NumPy库',
            description: '掌握科学计算的利器NumPy',
            lessons: [
              {
                id: '2-1',
                title: 'NumPy简介',
                type: 'video',
                duration: '40分钟',
                completed: false,
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=numpy%20library%20tutorial&image_size=landscape_16_9',
                content: '了解NumPy的特点和优势，学习如何创建和操作NumPy数组...'
              },
              {
                id: '2-2',
                title: 'NumPy数组操作',
                type: 'video',
                duration: '55分钟',
                completed: false,
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=array%20operations%20numpy&image_size=landscape_16_9',
                content: '学习NumPy数组的索引、切片、变形、合并等操作技巧...'
              },
              {
                id: '2-3',
                title: 'NumPy练习',
                type: 'exercise',
                duration: '35分钟',
                completed: false,
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=numpy%20coding%20exercise&image_size=landscape_16_9',
                content: '通过练习题目，熟练掌握NumPy的常用功能...'
              }
            ]
          },
          {
            id: '3',
            title: 'Pandas库',
            description: '数据分析必备工具Pandas详解',
            lessons: [
              {
                id: '3-1',
                title: 'Pandas简介',
                type: 'video',
                duration: '45分钟',
                completed: false,
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pandas%20library%20tutorial&image_size=landscape_16_9',
                content: '认识Pandas库，了解其在数据分析中的重要作用...'
              },
              {
                id: '3-2',
                title: 'Series和DataFrame',
                type: 'video',
                duration: '60分钟',
                completed: false,
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dataframe%20pandas%20tutorial&image_size=landscape_16_9',
                content: '掌握Pandas的核心数据结构：Series和DataFrame的基本操作...'
              },
              {
                id: '3-3',
                title: '数据清洗与转换',
                type: 'video',
                duration: '55分钟',
                completed: false,
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20cleaning%20pandas&image_size=landscape_16_9',
                content: '学习如何清洗和转换数据，处理缺失值、异常值等常见问题...'
              },
              {
                id: '3-4',
                title: 'Pandas练习',
                type: 'exercise',
                duration: '40分钟',
                completed: false,
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pandas%20coding%20practice&image_size=landscape_16_9',
                content: '通过实际项目练习，掌握Pandas的核心功能...'
              },
              {
                id: '3-5',
                title: '章节测评',
                type: 'assessment',
                duration: '60分钟',
                completed: false,
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=quiz%20assessment%20test&image_size=landscape_16_9',
                content: '测试你对Pandas知识的掌握程度...'
              }
            ]
          }
        ]
      },
      {
        id: '2',
        title: 'Pandas数据处理',
        description: '深入学习Pandas库，掌握数据清洗和转换技巧，成为数据处理专家。',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pandas%20data%20processing%20course%20cover&image_size=landscape_16_9',
        difficulty: '中级',
        category: '数据处理',
        duration: 16,
        rating: 4.9,
        instructor: '李老师',
        instructor_bio: '资深数据分析师，专注于数据处理与可视化方向。',
        instructor_avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20teacher%20avatar&image_size=square',
        start_date: '2026-02-01',
        students: 2100,
        chapters: [
          {
            id: '1',
            title: '数据导入导出',
            description: '学习各种格式数据的读写操作',
            lessons: [
              { id: '1-1', title: 'CSV文件处理', type: 'video', duration: '35分钟', completed: false },
              { id: '1-2', title: 'Excel文件处理', type: 'video', duration: '40分钟', completed: false }
            ]
          }
        ]
      },
      {
        id: '3',
        title: 'Matplotlib数据可视化',
        description: '学习使用Matplotlib创建专业的数据可视化图表。',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=matplotlib%20data%20visualization%20course%20cover&image_size=landscape_16_9',
        difficulty: '中级',
        category: '数据可视化',
        duration: 14,
        rating: 4.7,
        instructor: '王教授',
        instructor_bio: '可视化专家，曾设计多个大型数据展示项目。',
        instructor_avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20teacher%20avatar&image_size=square',
        start_date: '2026-01-20',
        students: 1890,
        chapters: [
          {
            id: '1',
            title: 'Matplotlib基础',
            description: '从简单图表开始学习',
            lessons: [
              { id: '1-1', title: '绘制第一张图表', type: 'video', duration: '30分钟', completed: false }
            ]
          }
        ]
      },
      {
        id: '4',
        title: '数据库分析与SQL',
        description: '掌握SQL查询和数据库分析技能，玩转MySQL和PostgreSQL，成为数据管理专家。',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SQL%20database%20analysis%20course%20cover%20with%20database%20icons&image_size=landscape_16_9',
        difficulty: '高级',
        category: '数据库分析',
        duration: 20,
        rating: 4.9,
        instructor: '陈教授',
        instructor_bio: '数据库专家，拥有15年数据库管理和分析经验，曾负责多个大型企业数据库项目。',
        instructor_avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20database%20teacher%20avatar&image_size=square',
        start_date: '2026-02-15',
        students: 1750,
        chapters: [
          {
            id: '1',
            title: 'SQL基础',
            description: '从零开始学习SQL语言',
            lessons: [
              { 
                id: '1-1', 
                title: 'SQL简介与环境搭建', 
                type: 'video', 
                duration: '45分钟', 
                completed: false,
                content: '了解什么是SQL，为什么要学习SQL，以及如何安装和配置数据库环境...'
              },
              { 
                id: '1-2', 
                title: 'SELECT查询基础', 
                type: 'video', 
                duration: '55分钟', 
                completed: false,
                content: '学习最基础的SQL查询语句，掌握SELECT、FROM、WHERE等关键字的用法...'
              },
              { 
                id: '1-3', 
                title: '条件筛选与排序', 
                type: 'video', 
                duration: '50分钟', 
                completed: false,
                content: '深入学习WHERE条件筛选和ORDER BY排序功能...'
              },
              { 
                id: '1-4', 
                title: 'SQL基础练习', 
                type: 'exercise', 
                duration: '35分钟', 
                completed: false,
                content: '通过实际题目巩固SQL基础知识...'
              }
            ]
          },
          {
            id: '2',
            title: '数据库设计',
            description: '学习如何设计规范的数据库',
            lessons: [
              { 
                id: '2-1', 
                title: '数据建模', 
                type: 'video', 
                duration: '60分钟', 
                completed: false,
                content: '学习数据库建模的基本原则，掌握ER图的绘制方法...'
              },
              { 
                id: '2-2', 
                title: '表设计与关系', 
                type: 'video', 
                duration: '55分钟', 
                completed: false,
                content: '了解数据库表设计的最佳实践，掌握一对多、多对多等关系的实现...'
              },
              { 
                id: '2-3', 
                title: '数据库设计练习', 
                type: 'exercise', 
                duration: '45分钟', 
                completed: false,
                content: '设计一个电商平台的数据库...'
              }
            ]
          },
          {
            id: '3',
            title: '高级查询',
            description: '掌握SQL高级查询技巧',
            lessons: [
              { 
                id: '3-1', 
                title: 'JOIN表连接', 
                type: 'video', 
                duration: '65分钟', 
                completed: false,
                content: '学习INNER JOIN、LEFT JOIN、RIGHT JOIN等表连接操作...'
              },
              { 
                id: '3-2', 
                title: '子查询与CTE', 
                type: 'video', 
                duration: '50分钟', 
                completed: false,
                content: '掌握子查询和公用表表达式的用法...'
              },
              { 
                id: '3-3', 
                title: '聚合函数', 
                type: 'video', 
                duration: '50分钟', 
                completed: false,
                content: '学习SUM、COUNT、AVG等聚合函数，掌握GROUP BY分组查询...'
              },
              { 
                id: '3-4', 
                title: '高级查询练习', 
                type: 'exercise', 
                duration: '55分钟', 
                completed: false,
                content: '通过实际项目练习高级查询技巧...'
              }
            ]
          },
          {
            id: '4',
            title: '数据库管理',
            description: '学习数据库维护和优化',
            lessons: [
              { 
                id: '4-1', 
                title: '索引与性能优化', 
                type: 'video', 
                duration: '55分钟', 
                completed: false,
                content: '了解数据库索引原理，学习如何优化查询性能...'
              },
              { 
                id: '4-2', 
                title: '数据备份与恢复', 
                type: 'video', 
                duration: '40分钟', 
                completed: false,
                content: '学习如何备份和恢复数据库...'
              },
              { 
                id: '4-3', 
                title: '综合项目实战', 
                type: 'exercise', 
                duration: '120分钟', 
                completed: false,
                content: '完成一个完整的数据分析项目，运用所学的全部SQL知识...'
              }
            ]
          }
        ]
      }
    ];
    
    const foundCourse = coursesData.find(c => c.id === id) || coursesData[0];
    setCourse(foundCourse);
  }, [id]);

  const toggleChapter = (chapterId: string) => {
    const newExpandedChapters = new Set(expandedChapters);
    if (newExpandedChapters.has(chapterId)) {
      newExpandedChapters.delete(chapterId);
    } else {
      newExpandedChapters.add(chapterId);
    }
    setExpandedChapters(newExpandedChapters);
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="h-4 w-4" />;
      case 'exercise':
        return <Code className="h-4 w-4" />;
      case 'assessment':
        return <FileText className="h-4 w-4" />;
      default:
        return <Book className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '初级': return 'bg-primary-100 text-primary-800';
      case '中级': return 'bg-primary-200 text-primary-800';
      case '高级': return 'bg-primary-300 text-primary-900';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (!course) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Book className="h-8 w-8 text-white" />
          </div>
          <p className="text-gray-600">课程加载中...</p>
        </div>
      </div>
    );
  }

  const progressPercent = Math.round(
    (course.chapters.reduce((acc: number, chapter: any) => acc + chapter.lessons.filter((l: any) => l.completed).length, 0) /
     course.chapters.reduce((acc: number, chapter: any) => acc + chapter.lessons.length, 0)) * 100
  );

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* 返回按钮 */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors group"
      >
        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-primary-50 transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </div>
        <span className="font-medium">返回</span>
      </button>

      {/* 课程头部 - 渐变色设计 */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 via-primary-700 to-accent-600 text-white shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative md:flex p-8 gap-8">
          <div className="md:w-2/5 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={course.cover_image} 
                alt={course.title} 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          <div className="md:w-3/5 pt-4 md:pt-0">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${getDifficultyColor(course.difficulty)} bg-opacity-90`}>
                {course.difficulty}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm">
                {course.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">{course.title}</h1>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">{course.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Clock className="h-5 w-5 text-primary-200 mb-2" />
                <p className="text-white/70 text-sm">总时长</p>
                <p className="font-semibold text-xl">{course.duration} 小时</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Book className="h-5 w-5 text-primary-200 mb-2" />
                <p className="text-white/70 text-sm">章节数</p>
                <p className="font-semibold text-xl">{course.chapters.length}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Users className="h-5 w-5 text-primary-200 mb-2" />
                <p className="text-white/70 text-sm">学员数</p>
                <p className="font-semibold text-xl">{course.students}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Star className="h-5 w-5 text-yellow-400 mb-2 fill-yellow-400" />
                <p className="text-white/70 text-sm">评分</p>
                <p className="font-semibold text-xl">{course.rating}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={`/learn/${course.id}`}
                className="flex-1 bg-white text-primary-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Play className="h-5 w-5 fill-current" />
                开始学习
              </Link>
              <button className="px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl font-medium transition-all border border-white/20">
                <Heart className="h-5 w-5 inline-block mr-2" />
                收藏
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* 学习进度 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Book className="h-4 w-4 text-white" />
              </span>
              学习进度
            </h2>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">总进度</span>
                <span className="font-bold text-primary-600">{progressPercent}%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* 课程大纲 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </span>
              课程大纲
            </h2>
            <div className="space-y-4">
              {course.chapters.map((chapter: any, index: number) => (
                <div key={chapter.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full flex justify-between items-center p-5 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">{chapter.title}</span>
                        {chapter.description && <p className="text-sm text-gray-500 mt-1">{chapter.description}</p>}
                      </div>
                    </div>
                    {expandedChapters.has(chapter.id) ? (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedChapters.has(chapter.id) && (
                    <div className="p-4 border-t border-gray-200">
                      <div className="space-y-3">
                        {chapter.lessons.map((lesson: any) => (
                          <Link 
                            key={lesson.id}
                            to={`/learn/${course.id}/${lesson.id}`}
                            className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-primary-50 rounded-xl transition-all group"
                          >
                            <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${lesson.completed ? 'bg-green-100 text-green-600' : 'bg-primary-100 text-primary-600'}`}>
                              {lesson.completed ? <Check className="h-5 w-5" /> : getLessonIcon(lesson.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start mb-1">
                                <span className={`font-medium ${lesson.completed ? 'text-gray-600' : 'text-gray-800'}`}>{lesson.title}</span>
                                <span className="text-sm text-gray-500 flex-shrink-0 ml-4">{lesson.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <span className={`px-2 py-0.5 rounded-full text-xs ${
                                  lesson.type === 'video' ? 'bg-primary-100 text-primary-700' :
                                  lesson.type === 'exercise' ? 'bg-primary-200 text-primary-800' :
                                  'bg-primary-300 text-primary-900'
                                }`}>
                                  {lesson.type === 'video' ? '视频' : lesson.type === 'exercise' ? '练习' : '测评'}
                                </span>
                              </div>
                            </div>
                            <div className="flex-shrink-0 text-primary-600 group-hover:text-primary-700">
                              <Play className="h-4 w-4" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 课程评价 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Star className="h-4 w-4 text-white fill-white" />
              </span>
              课程评价
            </h2>
            <div className="space-y-6">
              {[
                { name: '李同学', avatar: '李', rating: 5, content: '课程内容非常丰富，老师讲解清晰，练习也很有针对性，收获很大！', date: '2026-01-20' },
                { name: '王同学', avatar: '王', rating: 4, content: '作为零基础学员，这个课程非常适合我，循序渐进，容易理解。', date: '2026-01-18' }
              ].map((review, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-800">{review.name}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.content}</p>
                    <p className="text-sm text-gray-400 mt-2">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* 讲师信息 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-bold mb-4">讲师介绍</h3>
            <div className="flex items-center gap-4 mb-4">
              {course.instructor_avatar ? (
                <img 
                  src={course.instructor_avatar} 
                  alt={course.instructor}
                  className="w-16 h-16 rounded-xl object-cover"
                />
              ) : (
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                  {course.instructor.charAt(0)}
                </div>
              )}
              <div>
                <h4 className="font-bold text-gray-800">{course.instructor}</h4>
                <p className="text-sm text-gray-500">资深讲师</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{course.instructor_bio}</p>
          </div>

          {/* 热门推荐 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-bold mb-4">相关推荐</h3>
            <div className="space-y-4">
              <Link to="/courses/2" className="flex gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-gray-800">Pandas数据处理</h4>
                  <p className="text-sm text-gray-500">中级 · 16小时</p>
                </div>
              </Link>
              <Link to="/courses/3" className="flex gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-gray-800">Matplotlib可视化</h4>
                  <p className="text-sm text-gray-500">中级 · 14小时</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
