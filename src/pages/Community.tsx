import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store';
import { Plus, MessageSquare, Eye, Heart, Search, Filter, X, ArrowLeft } from 'lucide-react';

const Community = () => {
  const navigate = useNavigate();
  const { posts, setPosts, addPost, user } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [showModal, setShowModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    type: 'question' as const
  });
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  useEffect(() => {
    // 模拟社区帖子数据
    setPosts([
      {
        id: '1',
        user_id: 'u1',
        user_name: '张明',
        user_avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text-to-image?prompt=professional%20avatar%20portrait&image_size=square',
        title: '如何用Pandas处理大型CSV文件？',
        content: '我有一个1GB的CSV文件，用Pandas读取时总是内存溢出，请问有什么好的处理方法吗？',
        type: 'question',
        views: 234,
        likes: 45,
        created_at: '2026-06-01T10:30:00Z'
      },
      {
        id: '2',
        user_id: 'u2',
        user_name: '李华',
        user_avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text-to-image?prompt=professional%20woman%20avatar%20portrait&image_size=square',
        title: '分享：销售数据分析可视化项目',
        content: '最近完成了一个销售数据分析项目，使用了Matplotlib和Seaborn制作了漂亮的可视化图表，分享给大家参考！',
        type: 'project',
        views: 567,
        likes: 89,
        created_at: '2026-05-31T15:45:00Z'
      },
      {
        id: '3',
        user_id: 'u3',
        user_name: '王芳',
        user_avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text-to-image?prompt=professional%20man%20avatar%20portrait&image_size=square',
        title: 'Python数据分析就业前景讨论',
        content: '大家觉得现在Python数据分析的就业前景怎么样？需要掌握哪些技能才能找到好工作？',
        type: 'discussion',
        views: 890,
        likes: 123,
        created_at: '2026-05-30T09:20:00Z'
      }
    ]);
  }, [setPosts]);

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('请先登录');
      return;
    }
    
    const post = {
      id: Date.now().toString(),
      user_id: user.id,
      user_name: user.name,
      user_avatar: user.avatar_url,
      title: newPost.title,
      content: newPost.content,
      type: newPost.type,
      views: 0,
      likes: 0,
      created_at: new Date().toISOString()
    };
    
    addPost(post);
    setShowModal(false);
    setNewPost({ title: '', content: '', type: 'question' });
  };

  const handleLike = (postId: string) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || post.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'question': return <span className="bg-red-100 text-red-700">❓ 问题</span>;
      case 'project': return <span className="bg-green-100 text-green-700">💻 项目</span>;
      case 'discussion': return <span className="bg-blue-100 text-blue-700">💬 讨论</span>;
      default: return <span className="bg-gray-100 text-gray-700">📝 其他</span>;
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return '今天';
    if (days === 1) return '昨天';
    if (days < 7) return `${days}天前`;
    return date.toLocaleDateString('zh-CN');
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
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-4 font-playfair">社区交流</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              与同学、老师和行业专家交流分享，共同进步
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg"
          >
            <Plus className="h-5 w-5" />
            <span>发布帖子</span>
          </button>
        </div>
      </div>

      {/* 搜索和筛选 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="搜索帖子..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 text-lg"
            />
          </div>
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border-2 border-gray-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary-100 focus:border-primary-400 text-lg"
            >
              <option value="all">全部类型</option>
              <option value="question">问题</option>
              <option value="project">项目</option>
              <option value="discussion">讨论</option>
            </select>
          </div>
        </div>
      </div>

      {/* 帖子列表 */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 animate-slide-up"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                {post.user_name?.charAt(0) || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-bold text-lg text-gray-800">{post.user_name}</span>
                  <span className="text-gray-500 text-sm">{formatDate(post.created_at)}</span>
                  {getTypeIcon(post.type)}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-primary-600 cursor-pointer transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{post.content}</p>
                <div className="flex items-center gap-8 text-gray-500">
                  <span className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                    <Eye className="h-5 w-5" />
                    <span className="font-medium">{post.views}</span>
                  </span>
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-2 hover:text-red-500 transition-colors ${likedPosts.includes(post.id) ? 'text-red-500' : ''}`}
                  >
                    <Heart className={`h-5 w-5 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                    <span className="font-medium">{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                    <MessageSquare className="h-5 w-5" />
                    <span className="font-medium">评论</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 发布帖子模态框 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className="p-8 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-800">发布新帖子</h2>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <form onSubmit={handleSubmitPost} className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">帖子类型</label>
                <select
                  value={newPost.type}
                  onChange={(e) => setNewPost({ ...newPost, type: e.target.value as any })}
                  className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary-100 focus:border-primary-400 text-lg"
                >
                  <option value="question">❓ 问题求助</option>
                  <option value="project">💻 项目分享</option>
                  <option value="discussion">💬 话题讨论</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">标题</label>
                <input
                  type="text"
                  required
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary-100 focus:border-primary-400 text-lg"
                  placeholder="请输入帖子标题"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">内容</label>
                <textarea
                  required
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary-100 focus:border-primary-400 text-lg resize-vertical min-h-[200px]"
                  rows={8}
                  placeholder="请输入帖子内容..."
                />
              </div>
              <div className="flex justify-end gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-8 py-4 border-2 border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors font-semibold text-lg"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-2xl hover:from-primary-700 hover:to-accent-600 transition-all font-semibold text-lg shadow-lg"
                >
                  发布
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
