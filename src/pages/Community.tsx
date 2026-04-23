import { useState, useEffect } from 'react';
import { useAppStore } from '../store';
import { Plus, MessageSquare, Eye, Heart, Search, Filter, X } from 'lucide-react';

const Community = () => {
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
        user_avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20avatar%20portrait&image_size=square',
        title: '如何用Pandas处理大型CSV文件？',
        content: '我有一个1GB的CSV文件，用Pandas读取时总是内存溢出，请问有什么好的处理方法吗？',
        type: 'question',
        views: 234,
        likes: 45,
        created_at: '2026-04-20T10:30:00Z'
      },
      {
        id: '2',
        user_id: 'u2',
        user_name: '李华',
        user_avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20woman%20avatar%20portrait&image_size=square',
        title: '分享：销售数据分析可视化项目',
        content: '最近完成了一个销售数据分析项目，使用了Matplotlib和Seaborn制作了漂亮的可视化图表，分享给大家参考！',
        type: 'project',
        views: 567,
        likes: 89,
        created_at: '2026-04-19T15:45:00Z'
      },
      {
        id: '3',
        user_id: 'u3',
        user_name: '王芳',
        user_avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20man%20avatar%20portrait&image_size=square',
        title: 'Python数据分析就业前景讨论',
        content: '大家觉得现在Python数据分析的就业前景怎么样？需要掌握哪些技能才能找到好工作？',
        type: 'discussion',
        views: 890,
        likes: 123,
        created_at: '2026-04-18T09:20:00Z'
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
      case 'question': return <span className="bg-red-100 text-red-800">❓ 问题</span>;
      case 'project': return <span className="bg-green-100 text-green-800">💻 项目</span>;
      case 'discussion': return <span className="bg-blue-100 text-blue-800">💬 讨论</span>;
      default: return <span className="bg-gray-100 text-gray-800">📝 其他</span>;
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
      {/* 页面头部 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary-800 font-playfair">社区交流</h1>
          <p className="text-gray-600 mt-1">与同学、老师和行业专家交流分享</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary-800 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          <span>发布帖子</span>
        </button>
      </div>

      {/* 搜索和筛选 */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="搜索帖子..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow animate-scale-in"
          >
            <div className="flex items-start gap-4">
              <img
                src={post.user_avatar || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=default%20user%20avatar&image_size=square'}
                alt={post.user_name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-semibold text-gray-900">{post.user_name}</span>
                  <span className="text-gray-400 text-sm">{formatDate(post.created_at)}</span>
                  {getTypeIcon(post.type)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>
                <div className="flex items-center gap-6 text-gray-500">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.views}</span>
                  </span>
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-1 hover:text-red-500 transition-colors ${likedPosts.includes(post.id) ? 'text-red-500' : ''}`}
                  >
                    <Heart className={`h-4 w-4 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                    <span>{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary-600 transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>评论</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 发布帖子模态框 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">发布新帖子</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmitPost} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">帖子类型</label>
                <select
                  value={newPost.type}
                  onChange={(e) => setNewPost({ ...newPost, type: e.target.value as any })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="question">❓ 问题求助</option>
                  <option value="project">💻 项目分享</option>
                  <option value="discussion">💬 话题讨论</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">标题</label>
                <input
                  type="text"
                  required
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="请输入帖子标题"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">内容</label>
                <textarea
                  required
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  rows={8}
                  placeholder="请输入帖子内容..."
                />
              </div>
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
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
