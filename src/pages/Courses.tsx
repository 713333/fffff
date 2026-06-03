import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Book, Filter, ChevronDown, Search, Star, Clock, Users } from 'lucide-react';

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [courses, setCourses] = useState<any[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setCourses([
      {
        id: '1',
        title: 'Python数据分析基础',
        description: '从零开始学习Python数据分析，掌握NumPy、Pandas基础，适合初学者入门',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover%20with%20code%20snippets&image_size=landscape_16_9',
        difficulty: '初级',
        category: '基础入门',
        duration: 12,
        rating: 4.8,
        students: 1520,
        chapters: 24
      },
      {
        id: '2',
        title: 'Pandas数据处理',
        description: '深入学习Pandas库，掌握数据清洗、转换、合并等高级技巧',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Pandas%20data%20processing%20course%20cover%20with%20tables%20and%20charts&image_size=landscape_16_9',
        difficulty: '中级',
        category: '数据处理',
        duration: 16,
        rating: 4.9,
        students: 2100,
        chapters: 32
      },
      {
        id: '3',
        title: 'Matplotlib数据可视化',
        description: '学习使用Matplotlib创建专业的数据可视化图表，提升数据展示能力',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20with%20Matplotlib%20course%20cover%20colorful%20charts&image_size=landscape_16_9',
        difficulty: '中级',
        category: '数据可视化',
        duration: 14,
        rating: 4.7,
        students: 1890,
        chapters: 28
      },
      {
        id: '4',
        title: 'Seaborn高级可视化',
        description: '使用Seaborn创建更美观、更专业的数据可视化，掌握统计图表',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Seaborn%20data%20visualization%20course%20cover%20beautiful%20charts&image_size=landscape_16_9',
        difficulty: '高级',
        category: '数据可视化',
        duration: 18,
        rating: 4.9,
        students: 980,
        chapters: 36
      },
      {
        id: '5',
        title: 'NumPy科学计算',
        description: '掌握NumPy库的核心功能，用于高效的数值计算和数组操作',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=NumPy%20scientific%20computing%20course%20cover%20math%20formulas&image_size=landscape_16_9',
        difficulty: '中级',
        category: '数据处理',
        duration: 15,
        rating: 4.6,
        students: 1250,
        chapters: 30
      },
      {
        id: '6',
        title: 'Scikit-learn机器学习基础',
        description: '入门机器学习，使用Scikit-learn构建预测模型，掌握常用算法',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20with%20Scikit-learn%20course%20cover%20AI%20concepts&image_size=landscape_16_9',
        difficulty: '高级',
        category: '机器学习',
        duration: 20,
        rating: 4.8,
        students: 1680,
        chapters: 40
      },
      {
        id: '7',
        title: '数据库分析与SQL',
        description: '掌握SQL查询和数据库分析技能，玩转MySQL和PostgreSQL',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SQL%20database%20analysis%20course%20cover%20with%20database%20icons&image_size=landscape_16_9',
        difficulty: '高级',
        category: '数据库分析',
        duration: 20,
        rating: 4.9,
        students: 1750,
        chapters: 40
      },
      {
        id: '8',
        title: 'MySQL数据库实战',
        description: '从零掌握MySQL数据库管理，具备数据库设计、优化和维护能力',
        cover_image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MySQL%20database%20course%20cover%20with%20mysql%20logo&image_size=landscape_16_9',
        difficulty: '中级',
        category: '数据库分析',
        duration: 18,
        rating: 4.8,
        students: 1480,
        chapters: 36
      }
    ]);

    setCategories([
      { id: 'all', name: '全部课程', icon: '📚' },
      { id: '基础入门', name: '基础入门', icon: '🌱' },
      { id: '数据处理', name: '数据处理', icon: '🔧' },
      { id: '数据可视化', name: '数据可视化', icon: '📊' },
      { id: '数据库分析', name: '数据库分析', icon: '🗄️' },
      { id: '机器学习', name: '机器学习', icon: '🤖' }
    ]);
  }, []);

  useEffect(() => {
    let result = [...courses];

    if (selectedCategory !== 'all') {
      result = result.filter(course => course.category === selectedCategory);
    }

    if (selectedDifficulty !== 'all') {
      result = result.filter(course => course.difficulty === selectedDifficulty);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(course => 
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query)
      );
    }

    setFilteredCourses(result);
  }, [courses, selectedCategory, selectedDifficulty, searchQuery]);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '初级': return 'bg-green-100 text-green-800';
      case '中级': return 'bg-blue-100 text-blue-800';
      case '高级': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 via-primary-700 to-accent-600 text-white p-8 md:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 font-playfair">课程中心</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            探索完整的数据分析学习路径，从基础入门到高级应用，掌握Python数据分析核心技能
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative flex-1 w-full md:w-96">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索你感兴趣的课程..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 text-lg"
          />
        </div>
        
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-3 bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 hover:bg-gray-50 hover:border-primary-300 transition-all font-medium"
          >
            <Filter className="h-5 w-5 text-gray-600" />
            <span>筛选条件</span>
            <ChevronDown className={`h-5 w-5 text-gray-600 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isFilterOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-6 z-20 animate-scale-in">
              <h3 className="font-bold text-lg mb-4 text-gray-800">难度筛选</h3>
              <div className="space-y-3">
                {['全部', '初级', '中级', '高级'].map((diff) => (
                  <label 
                    key={diff} 
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <input
                      type="radio"
                      name="difficulty"
                      value={diff}
                      checked={selectedDifficulty === (diff === '全部' ? 'all' : diff)}
                      onChange={(e) => setSelectedDifficulty(e.target.value === '全部' ? 'all' : e.target.value)}
                      className="w-5 h-5 text-primary-600"
                    />
                    <span className="font-medium text-gray-700">{diff}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border border-gray-100">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <>
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-600">
              找到 <span className="font-bold text-gray-800">{filteredCourses.length}</span> 门课程
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.cover_image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {course.duration}小时
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${getDifficultyColor(course.difficulty)}`}>
                      {course.difficulty}
                    </span>
                    <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1.5 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-yellow-700">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary-700 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Users className="h-4 w-4" />
                      <span>{course.students} 人学习</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Book className="h-4 w-4" />
                      <span>{course.chapters} 章节</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-16 text-center border border-gray-100">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Book className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">暂无相关课程</h3>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            试试调整筛选条件或搜索其他关键词，发现更多优质课程
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedDifficulty('all');
              setSearchQuery('');
              searchParams.delete('category');
              setSearchParams(searchParams);
            }}
            className="mt-8 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-xl font-medium transition-all shadow-lg shadow-primary-200"
          >
            重置筛选
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;
