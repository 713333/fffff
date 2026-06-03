import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Code, BarChart2, FileText, Filter, ChevronDown, Search, ArrowLeft, Clock } from 'lucide-react';

const Practice = () => {
  const navigate = useNavigate();
  const [practices, setPractices] = useState<any[]>([]);
  const [filteredPractices, setFilteredPractices] = useState<any[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // 模拟练习数据
    setPractices([
      {
        id: '1-4',
        title: 'Python基础练习',
        description: '练习Python基本语法和数据类型',
        type: '编程练习',
        difficulty: '初级',
        course: 'Python数据分析基础',
        duration: 30,
        completed: false
      },
      {
        id: '2-3',
        title: 'NumPy练习',
        description: '练习NumPy数组操作和数值计算',
        type: '编程练习',
        difficulty: '初级',
        course: 'Python数据分析基础',
        duration: 35,
        completed: false
      },
      {
        id: '3-4',
        title: 'Pandas练习',
        description: '练习Pandas数据清洗和转换',
        type: '编程练习',
        difficulty: '中级',
        course: 'Python数据分析基础',
        duration: 40,
        completed: false
      },
      {
        id: '4-1',
        title: 'Matplotlib可视化练习',
        description: '使用Matplotlib创建各种数据可视化图表',
        type: '数据可视化',
        difficulty: '中级',
        course: 'Matplotlib数据可视化',
        duration: 45,
        completed: false
      },
      {
        id: '5-1',
        title: 'Seaborn高级可视化练习',
        description: '使用Seaborn创建更美观的可视化图表',
        type: '数据可视化',
        difficulty: '高级',
        course: 'Seaborn高级可视化',
        duration: 50,
        completed: false
      },
      {
        id: '6-1',
        title: '销售数据分析案例',
        description: '分析销售数据，识别趋势和机会',
        type: '案例分析',
        difficulty: '中级',
        course: 'Python数据分析基础',
        duration: 60,
        completed: false
      }
    ]);
  }, []);

  useEffect(() => {
    let result = [...practices];

    // 按类型筛选
    if (selectedType !== 'all') {
      result = result.filter(practice => practice.type === selectedType);
    }

    // 按难度筛选
    if (selectedDifficulty !== 'all') {
      result = result.filter(practice => practice.difficulty === selectedDifficulty);
    }

    // 按搜索词筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(practice => 
        practice.title.toLowerCase().includes(query) ||
        practice.description.toLowerCase().includes(query) ||
        practice.course.toLowerCase().includes(query)
      );
    }

    setFilteredPractices(result);
  }, [practices, selectedType, selectedDifficulty, searchQuery]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case '编程练习':
        return <Code className="h-5 w-5" />;
      case '数据可视化':
        return <BarChart2 className="h-5 w-5" />;
      case '案例分析':
        return <FileText className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '初级': return 'bg-green-100 text-green-700';
      case '中级': return 'bg-blue-100 text-blue-700';
      case '高级': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
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

      {/* 页面头部 */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 font-playfair">练习中心</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            通过实践练习巩固所学知识，提升编程技能
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative flex-1 w-full md:w-96">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索练习..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 text-lg"
          />
        </div>
        
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-3 bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 hover:bg-gray-50 hover:border-primary-300 transition-all font-medium shadow-sm"
          >
            <Filter className="h-5 w-5 text-gray-600" />
            <span>筛选条件</span>
            <ChevronDown className={`h-5 w-5 text-gray-600 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isFilterOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-6 z-20 animate-slide-up">
              <h3 className="font-bold text-lg mb-4 text-gray-800">练习类型</h3>
              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="type"
                    value="all"
                    checked={selectedType === 'all'}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-5 h-5 text-primary-600"
                  />
                  <span className="font-medium text-gray-700">全部</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="type"
                    value="编程练习"
                    checked={selectedType === '编程练习'}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-5 h-5 text-primary-600"
                  />
                  <span className="font-medium text-gray-700">编程练习</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="type"
                    value="数据可视化"
                    checked={selectedType === '数据可视化'}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-5 h-5 text-primary-600"
                  />
                  <span className="font-medium text-gray-700">数据可视化</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="type"
                    value="案例分析"
                    checked={selectedType === '案例分析'}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-5 h-5 text-primary-600"
                  />
                  <span className="font-medium text-gray-700">案例分析</span>
                </label>
              </div>
              
              <h3 className="font-bold text-lg mb-4 text-gray-800">难度</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="difficulty"
                    value="all"
                    checked={selectedDifficulty === 'all'}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-5 h-5 text-primary-600"
                  />
                  <span className="font-medium text-gray-700">全部</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="difficulty"
                    value="初级"
                    checked={selectedDifficulty === '初级'}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-5 h-5 text-primary-600"
                  />
                  <span className="font-medium text-gray-700">初级</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="difficulty"
                    value="中级"
                    checked={selectedDifficulty === '中级'}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-5 h-5 text-primary-600"
                  />
                  <span className="font-medium text-gray-700">中级</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="difficulty"
                    value="高级"
                    checked={selectedDifficulty === '高级'}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-5 h-5 text-primary-600"
                  />
                  <span className="font-medium text-gray-700">高级</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 练习列表 */}
      {filteredPractices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPractices.map((practice) => (
            <Link
              key={practice.id}
              to={`/practice/${practice.id}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center text-primary-600">
                    {getTypeIcon(practice.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                        {practice.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(practice.difficulty)}`}>
                        {practice.difficulty}
                      </span>
                    </div>
                  </div>
                  {practice.completed && (
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      已完成
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">
                  {practice.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {practice.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-gray-500 text-sm">{practice.course}</span>
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{practice.duration} 分钟</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-16 text-center border border-gray-100">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Code className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">暂无练习</h3>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            试试调整筛选条件或搜索其他练习
          </p>
          <button
            onClick={() => {
              setSelectedType('all');
              setSelectedDifficulty('all');
              setSearchQuery('');
            }}
            className="mt-8 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-8 py-3 rounded-xl font-medium transition-all shadow-lg shadow-primary-200"
          >
            重置筛选
          </button>
        </div>
      )}
    </div>
  );
};

export default Practice;
