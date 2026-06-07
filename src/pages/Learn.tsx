import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Play, 
  Pause,
  Check, 
  Book, 
  Code, 
  FileText, 
  ChevronRight,
  ChevronLeft,
  Clock,
  Video,
  MessageSquare,
  CheckCircle2,
  List,
  X,
  Volume2,
  VolumeX,
  Maximize2
} from 'lucide-react';

const Learn = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);
  const [currentLesson, setCurrentLesson] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 示例视频源 - 在实际项目中可以替换为真实视频
  const getVideoSrc = (lessonId: string) => {
    // 这里可以使用不同的视频源，或者使用占位视频
    return 'https://www.w3schools.com/html/mov_bbb.mp4';
  };

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (videoRef.current) {
      videoRef.current.currentTime = (newProgress / 100) * videoRef.current.duration;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const coursesData = [
      {
        id: '1',
        title: 'Python数据分析基础',
        chapters: [
          {
            id: '1',
            title: 'Python基础',
            lessons: [
              {
                id: '1-1',
                title: 'Python简介与环境搭建',
                type: 'video',
                duration: '45分钟',
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20course%20data%20analysis%20thumbnail&image_size=landscape_16_9',
                content: `
                  <h2 class="text-2xl font-bold mb-4">欢迎学习Python数据分析基础</h2>
                  <p class="mb-4">本课程将带你从零开始学习Python数据分析，掌握核心概念和基础库的使用。</p>
                  <h3 class="text-xl font-semibold mb-3">为什么选择Python？</h3>
                  <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>简单易学的语法</li>
                    <li>丰富的数据分析库</li>
                    <li>强大的社区支持</li>
                    <li>广泛的应用场景</li>
                  </ul>
                  <h3 class="text-xl font-semibold mb-3">课程内容概览</h3>
                  <p class="mb-4">在本课程中，你将学习到：</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-xl">
                      <h4 class="font-semibold text-primary-700 mb-2">Python基础</h4>
                      <p class="text-sm text-gray-600">变量、数据类型、控制流</p>
                    </div>
                    <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-xl">
                      <h4 class="font-semibold text-primary-700 mb-2">NumPy库</h4>
                      <p class="text-sm text-gray-600">数组操作、科学计算</p>
                    </div>
                    <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-xl">
                      <h4 class="font-semibold text-primary-700 mb-2">Pandas库</h4>
                      <p class="text-sm text-gray-600">数据处理、清洗、分析</p>
                    </div>
                    <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-xl">
                      <h4 class="font-semibold text-primary-700 mb-2">数据可视化</h4>
                      <p class="text-sm text-gray-600">Matplotlib、Seaborn</p>
                    </div>
                  </div>
                `,
                videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
              },
              {
                id: '1-2',
                title: 'Python基本语法',
                type: 'video',
                duration: '60分钟',
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20code%20variables%20data%20types%20tutorial%20thumbnail&image_size=landscape_16_9',
                content: `
                  <h2 class="text-2xl font-bold mb-4">Python基本语法</h2>
                  <p class="mb-4">本节课我们将学习Python的基本语法，包括变量、数据类型、运算符等。</p>
                  <h3 class="text-xl font-semibold mb-3">变量和数据类型</h3>
                  <pre class="bg-gray-800 text-white p-4 rounded-lg mb-4 overflow-x-auto"><code># 数字类型
x = 10          # 整数
y = 3.14        # 浮点数
z = 1 + 2j      # 复数

# 字符串
name = "Python"
message = 'Hello World'

# 布尔值
is_true = True
is_false = False</code></pre>
                  <h3 class="text-xl font-semibold mb-3">运算符</h3>
                  <pre class="bg-gray-800 text-white p-4 rounded-lg mb-4 overflow-x-auto"><code># 算术运算符
a = 10 + 5      # 15
b = 10 - 5      # 5
c = 10 * 5      # 50
d = 10 / 5      # 2.0
e = 10 // 5     # 2 (整数除法)
f = 10 % 5      # 0 (取余)
g = 10 ** 2     # 100 (幂)</code></pre>
                `
              },
              {
                id: '1-3',
                title: 'Python数据类型',
                type: 'video',
                duration: '50分钟',
                preview: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20list%20dictionary%20tuple%20data%20types%20programming%20thumbnail&image_size=landscape_16_9',
                content: `
                  <h2 class="text-2xl font-bold mb-4">Python数据类型详解</h2>
                  <p class="mb-4">深入了解Python的核心数据类型：列表、字典、元组、集合等。</p>
                  <h3 class="text-xl font-semibold mb-3">列表 (List)</h3>
                  <pre class="bg-gray-800 text-white p-4 rounded-lg mb-4 overflow-x-auto"><code># 创建列表
fruits = ['apple', 'banana', 'cherry']
numbers = [1, 2, 3, 4, 5]
mixed = [1, 'hello', 3.14, True]

# 列表操作
fruits.append('orange')       # 添加元素
fruits.remove('banana')       # 删除元素
fruits[0] = 'grape'           # 修改元素
print(fruits[0])              # 访问第一个元素
print(fruits[-1])             # 访问最后一个元素</code></pre>
                `
              },
              {
                id: '1-4',
                title: 'Python基础练习',
                type: 'exercise',
                duration: '30分钟',
                content: `
                  <h2 class="text-2xl font-bold mb-4">Python基础练习</h2>
                  <p class="mb-4">通过实际编程练习，巩固所学的Python基础知识。</p>
                  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <h3 class="font-semibold text-yellow-800 mb-2">练习题目</h3>
                    <p class="text-yellow-700">编写一个函数，计算给定列表中所有偶数的和。</p>
                  </div>
                  <div class="bg-primary-50 border-l-4 border-primary-400 p-4 mb-4">
                    <h3 class="font-semibold text-primary-800 mb-2">提示</h3>
                    <ul class="list-disc pl-6 text-primary-700">
                      <li>使用 for 循环遍历列表</li>
                      <li>使用 % 运算符判断是否为偶数</li>
                      <li>累加符合条件的数字</li>
                    </ul>
                  </div>
                `
              }
            ]
          },
          {
            id: '2',
            title: 'NumPy库',
            lessons: [
              { id: '2-1', title: 'NumPy简介', type: 'video', duration: '40分钟' },
              { id: '2-2', title: 'NumPy数组操作', type: 'video', duration: '55分钟' },
              { id: '2-3', title: 'NumPy练习', type: 'exercise', duration: '35分钟' }
            ]
          },
          {
            id: '3',
            title: 'Pandas库',
            lessons: [
              { id: '3-1', title: 'Pandas简介', type: 'video', duration: '45分钟' },
              { id: '3-2', title: 'Series和DataFrame', type: 'video', duration: '60分钟' },
              { id: '3-3', title: '数据清洗与转换', type: 'video', duration: '55分钟' }
            ]
          }
        ]
      },
      {
        id: '4',
        title: '数据库分析与SQL',
        chapters: [
          {
            id: '1',
            title: 'SQL基础',
            lessons: [
              {
                id: '1-1',
                title: 'SQL简介与环境搭建',
                type: 'video',
                duration: '45分钟',
                content: `
                  <h2 class="text-2xl font-bold mb-4">欢迎学习数据库分析与SQL</h2>
                  <p class="mb-4">本课程将带你从零开始学习SQL，掌握数据库查询和分析的核心技能。</p>
                  <h3 class="text-xl font-semibold mb-3">什么是SQL？</h3>
                  <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>Structured Query Language（结构化查询语言）</li>
                    <li>用于管理和操作关系型数据库</li>
                    <li>数据分析的必备技能</li>
                    <li>广泛应用于各大企业</li>
                  </ul>
                  <h3 class="text-xl font-semibold mb-3">常见数据库</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-xl">
                      <h4 class="font-semibold text-primary-700 mb-2">MySQL</h4>
                      <p class="text-sm text-gray-600">开源数据库，应用广泛</p>
                    </div>
                    <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-xl">
                      <h4 class="font-semibold text-primary-700 mb-2">PostgreSQL</h4>
                      <p class="text-sm text-gray-600">功能强大，开源免费</p>
                    </div>
                    <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-xl">
                      <h4 class="font-semibold text-primary-700 mb-2">SQLite</h4>
                      <p class="text-sm text-gray-600">轻量级，适合学习</p>
                    </div>
                    <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-xl">
                      <h4 class="font-semibold text-primary-700 mb-2">Oracle</h4>
                      <p class="text-sm text-gray-600">企业级数据库</p>
                    </div>
                  </div>
                `
              },
              {
                id: '1-2',
                title: 'SELECT查询基础',
                type: 'video',
                duration: '55分钟',
                content: `
                  <h2 class="text-2xl font-bold mb-4">SELECT查询基础</h2>
                  <p class="mb-4">学习最基础的SQL查询语句，掌握SELECT、FROM、WHERE等关键字的用法。</p>
                  <h3 class="text-xl font-semibold mb-3">基本查询</h3>
                  <pre class="bg-gray-800 text-white p-4 rounded-lg mb-4 overflow-x-auto"><code>-- 查询所有列
SELECT * FROM users;

-- 查询指定列
SELECT name, email, age FROM users;

-- 列别名
SELECT name AS 姓名, email AS 邮箱 FROM users;

-- 去重查询
SELECT DISTINCT department FROM employees;</code></pre>
                  <h3 class="text-xl font-semibold mb-3">WHERE条件筛选</h3>
                  <pre class="bg-gray-800 text-white p-4 rounded-lg mb-4 overflow-x-auto"><code>-- 等于条件
SELECT * FROM users WHERE age = 25;

-- 范围条件
SELECT * FROM users WHERE age > 18 AND age < 30;

-- 模糊查询
SELECT * FROM users WHERE name LIKE '张%';</code></pre>
                `
              },
              {
                id: '1-3',
                title: '条件筛选与排序',
                type: 'video',
                duration: '50分钟',
                content: `
                  <h2 class="text-2xl font-bold mb-4">条件筛选与排序</h2>
                  <p class="mb-4">深入学习WHERE条件筛选和ORDER BY排序功能。</p>
                  <h3 class="text-xl font-semibold mb-3">排序</h3>
                  <pre class="bg-gray-800 text-white p-4 rounded-lg mb-4 overflow-x-auto"><code>-- 升序排序
SELECT * FROM users ORDER BY age ASC;

-- 降序排序
SELECT * FROM users ORDER BY age DESC;

-- 多列排序
SELECT * FROM users ORDER BY department ASC, age DESC;</code></pre>
                `
              },
              {
                id: '1-4',
                title: 'SQL基础练习',
                type: 'exercise',
                duration: '35分钟',
                content: `
                  <h2 class="text-2xl font-bold mb-4">SQL基础练习</h2>
                  <p class="mb-4">通过实际SQL练习，巩固所学的基础知识。</p>
                  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <h3 class="font-semibold text-yellow-800 mb-2">练习题目</h3>
                    <p class="text-yellow-700">查询年龄大于25岁且部门为'技术部'的所有员工，并按入职时间降序排列。</p>
                  </div>
                  <div class="bg-primary-50 border-l-4 border-primary-400 p-4 mb-4">
                    <h3 class="font-semibold text-primary-800 mb-2">提示</h3>
                    <ul class="list-disc pl-6 text-primary-700">
                      <li>使用 WHERE 子句筛选条件</li>
                      <li>使用 AND 连接多个条件</li>
                      <li>使用 ORDER BY 进行排序</li>
                    </ul>
                  </div>
                `
              }
            ]
          },
          {
            id: '2',
            title: '数据库设计',
            lessons: [
              { id: '2-1', title: '数据建模', type: 'video', duration: '60分钟' },
              { id: '2-2', title: '表设计与关系', type: 'video', duration: '55分钟' },
              { id: '2-3', title: '数据库设计练习', type: 'exercise', duration: '45分钟' }
            ]
          },
          {
            id: '3',
            title: '高级查询',
            lessons: [
              { id: '3-1', title: 'JOIN表连接', type: 'video', duration: '65分钟' },
              { id: '3-2', title: '子查询与CTE', type: 'video', duration: '50分钟' },
              { id: '3-3', title: '聚合函数', type: 'video', duration: '50分钟' },
              { id: '3-4', title: '高级查询练习', type: 'exercise', duration: '55分钟' }
            ]
          },
          {
            id: '4',
            title: '数据库管理',
            lessons: [
              { id: '4-1', title: '索引与性能优化', type: 'video', duration: '55分钟' },
              { id: '4-2', title: '数据备份与恢复', type: 'video', duration: '40分钟' },
              { id: '4-3', title: '综合项目实战', type: 'exercise', duration: '120分钟' }
            ]
          }
        ]
      }
    ];
    
    const foundCourse = coursesData.find(c => c.id === courseId) || coursesData[0];
    setCourse(foundCourse);
    
    // 查找当前课程
    let foundLesson = null;
    if (lessonId) {
      for (const chapter of foundCourse.chapters) {
        foundLesson = chapter.lessons.find((l: any) => l.id === lessonId);
        if (foundLesson) break;
      }
    }
    // 如果没有找到指定课程，取第一个
    if (!foundLesson && foundCourse.chapters.length > 0) {
      foundLesson = foundCourse.chapters[0].lessons[0];
    }
    setCurrentLesson(foundLesson);
  }, [courseId, lessonId]);

  // 当课程切换时重置播放器状态
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  }, [currentLesson]);

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="h-4 w-4" />;
      case 'exercise':
        return <Code className="h-4 w-4" />;
      case 'assessment':
        return <FileText className="h-4 w-4" />;
      default:
        return <Book className="h-4 w-4" />;
    }
  };

  const getLessonTypeText = (type: string) => {
    switch (type) {
      case 'video': return '视频';
      case 'exercise': return '练习';
      case 'assessment': return '测评';
      default: return '文档';
    }
  };

  const getLessonTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-primary-100 text-primary-700';
      case 'exercise': return 'bg-primary-200 text-primary-800';
      case 'assessment': return 'bg-primary-300 text-primary-900';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const markComplete = () => {
    if (currentLesson) {
      setCompletedLessons(prev => new Set([...prev, currentLesson.id]));
    }
  };

  const navigateToLesson = (lesson: any) => {
    navigate(`/learn/${courseId}/${lesson.id}`);
  };

  const getAllLessons = () => {
    if (!course) return [];
    const lessons: any[] = [];
    course.chapters.forEach((chapter: any) => {
      chapter.lessons.forEach((lesson: any) => {
        lessons.push({ ...lesson, chapterTitle: chapter.title });
      });
    });
    return lessons;
  };

  const getNextLesson = () => {
    const lessons = getAllLessons();
    const currentIndex = lessons.findIndex(l => l.id === currentLesson?.id);
    if (currentIndex !== -1 && currentIndex < lessons.length - 1) {
      return lessons[currentIndex + 1];
    }
    return null;
  };

  const getPrevLesson = () => {
    const lessons = getAllLessons();
    const currentIndex = lessons.findIndex(l => l.id === currentLesson?.id);
    if (currentIndex > 0) {
      return lessons[currentIndex - 1];
    }
    return null;
  };

  if (!course || !currentLesson) {
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
    (completedLessons.size / getAllLessons().length) * 100
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                </div>
                <span className="font-medium hidden sm:block">返回课程</span>
              </button>
              <div className="hidden md:block">
                <h1 className="text-lg font-bold text-gray-800">{course.title}</h1>
                <p className="text-sm text-gray-500">{currentLesson.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto">
        {/* 主内容区 */}
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:mr-80' : ''}`}>
          <div className="p-4 sm:p-6 lg:p-8">
            {/* 视频播放器区域 */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl mb-6 group">
              <div className="aspect-video relative bg-black">
                {/* 视频元素 */}
                <video
                  ref={videoRef}
                  src={currentLesson ? getVideoSrc(currentLesson.id) : ''}
                  className="w-full h-full object-contain"
                  poster={currentLesson?.preview || ''}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* 播放按钮覆盖层 */}
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                    onClick={handlePlay}
                  >
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all group-hover:scale-110">
                      <Play className="h-10 w-10 fill-current ml-1 text-white" />
                    </div>
                  </div>
                )}

                {/* 控制栏 */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity opacity-0 group-hover:opacity-100">
                  {/* 进度条 */}
                  <div className="mb-3">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progress}
                      onChange={handleSeek}
                      className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 ${progress}%, #6b7280 ${progress}%)`
                      }}
                    />
                  </div>

                  {/* 控制按钮 */}
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={handlePlay}
                        className="hover:text-primary-400 transition-colors"
                      >
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                      </button>

                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="hover:text-primary-400 transition-colors"
                      >
                        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                      </button>

                      <span className="text-sm">
                        {formatTime((progress / 100) * duration)} / {formatTime(duration)}
                      </span>
                    </div>

                    <button className="hover:text-primary-400 transition-colors">
                      <Maximize2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 课程信息 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getLessonTypeColor(currentLesson.type)} mb-2`}>
                    {getLessonIcon(currentLesson.type)}
                    {getLessonTypeText(currentLesson.type)}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">{currentLesson.title}</h2>
                  <p className="text-gray-500 mt-1 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {currentLesson.duration}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {!completedLessons.has(currentLesson.id) && (
                    <button
                      onClick={markComplete}
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5" />
                      标记完成
                    </button>
                  )}
                  {completedLessons.has(currentLesson.id) && (
                    <div className="flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-xl font-semibold">
                      <CheckCircle2 className="h-5 w-5" />
                      已完成
                    </div>
                  )}
                </div>
              </div>

              {/* 课程内容 */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: currentLesson.content || '<p>课程内容加载中...</p>' }}
                />
              </div>

              {/* 上下节课导航 */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => getPrevLesson() && navigateToLesson(getPrevLesson())}
                  disabled={!getPrevLesson()}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                    getPrevLesson() 
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                      : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="hidden sm:inline">上一课</span>
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">
                    进度 {completedLessons.size}/{getAllLessons().length}
                  </span>
                </div>
                <button
                  onClick={() => getNextLesson() && navigateToLesson(getNextLesson())}
                  disabled={!getNextLesson()}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                    getNextLesson() 
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white' 
                      : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <span className="hidden sm:inline">下一课</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* 讨论区 */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary-500" />
                课程讨论
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    李
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800">李同学</span>
                      <span className="text-sm text-gray-400">2026-01-25</span>
                    </div>
                    <p className="text-gray-600">这节课讲得很清楚，感谢老师！</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    王
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800">王同学</span>
                      <span className="text-sm text-gray-400">2026-01-24</span>
                    </div>
                    <p className="text-gray-600">请问有配套的练习资料吗？</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <textarea
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  rows={3}
                  placeholder="写下你的问题或评论..."
                />
                <div className="flex justify-end mt-3">
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    发表评论
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 侧边栏 - 课程目录 */}
        {sidebarOpen && (
          <div className="hidden lg:block fixed right-0 top-16 bottom-0 w-80 bg-white border-l border-gray-200 overflow-y-auto">
            <div className="p-6">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">学习进度</span>
                  <span className="font-bold text-primary-600">{progressPercent}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-4">课程目录</h3>
              <div className="space-y-3">
                {course.chapters.map((chapter: any, chapterIndex: number) => (
                  <div key={chapter.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                          {chapterIndex + 1}
                        </div>
                        <span className="font-semibold text-gray-800">{chapter.title}</span>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {chapter.lessons.map((lesson: any) => (
                        <button
                          key={lesson.id}
                          onClick={() => navigateToLesson(lesson)}
                          className={`w-full p-4 text-left flex items-center gap-3 transition-all ${
                            lesson.id === currentLesson.id
                              ? 'bg-primary-50 border-l-4 border-primary-500'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                            completedLessons.has(lesson.id)
                              ? 'bg-green-100 text-green-600'
                              : lesson.id === currentLesson.id
                              ? 'bg-primary-500 text-white'
                              : 'bg-gray-200 text-gray-500'
                          }`}>
                            {completedLessons.has(lesson.id) ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              getLessonIcon(lesson.type)
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`text-sm font-medium block truncate ${
                              lesson.id === currentLesson.id
                                ? 'text-primary-700'
                                : completedLessons.has(lesson.id)
                                ? 'text-gray-500'
                                : 'text-gray-700'
                            }`}>
                              {lesson.title}
                            </span>
                            <span className="text-xs text-gray-400">{lesson.duration}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
