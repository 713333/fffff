import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../hooks/useStore';
import { MessageSquare, Code, HelpCircle, User, Clock } from 'lucide-react';

const CommunityActivity: React.FC = () => {
  const { discussions, projects, questions, fetchDiscussions, fetchProjects, fetchQuestions, isLoading } = useStore();

  useEffect(() => {
    fetchDiscussions();
    fetchProjects();
    fetchQuestions();
  }, [fetchDiscussions, fetchProjects, fetchQuestions]);

  // 模拟社区数据
  const mockDiscussions = [
    {
      id: '1',
      user_id: '1',
      title: '如何提高Python代码的执行效率？',
      content: '在处理大量数据时，我的Python代码运行速度很慢，有什么优化方法吗？',
      category: '技术讨论',
      likes: 24,
      created_at: '2024-01-15T10:30:00Z',
      user: {
        id: '1',
        name: '张三',
        avatar_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait&image_size=square'
      },
      replies_count: 8
    },
    {
      id: '2',
      user_id: '2',
      title: '商务数据分析的职业发展路径',
      content: '作为一名商务数据分析专业的学生，毕业后有哪些职业选择？',
      category: '职业规划',
      likes: 18,
      created_at: '2024-01-14T14:20:00Z',
      user: {
        id: '2',
        name: '李四',
        avatar_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait%202&image_size=square'
      },
      replies_count: 12
    }
  ];

  const mockProjects = [
    {
      id: '1',
      user_id: '3',
      title: '电商销售数据分析系统',
      description: '使用Python和Streamlit开发的电商销售数据分析可视化系统',
      github_url: 'https://github.com/user/ecommerce-analytics',
      demo_url: 'https://ecommerce-analytics.streamlit.app',
      tags: ['Python', 'Streamlit', '数据分析', '可视化'],
      likes: 42,
      created_at: '2024-01-13T09:15:00Z',
      user: {
        id: '3',
        name: '王五',
        avatar_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait%203&image_size=square'
      },
      comments_count: 5
    }
  ];

  const mockQuestions = [
    {
      id: '1',
      user_id: '4',
      title: 'pandas中如何处理缺失值？',
      content: '在使用pandas处理数据时，遇到了大量缺失值，有什么好的处理方法吗？',
      tags: ['pandas', '数据处理', 'Python'],
      is_solved: false,
      created_at: '2024-01-16T11:45:00Z',
      user: {
        id: '4',
        name: '赵六',
        avatar_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait%204&image_size=square'
      },
      answers_count: 3
    }
  ];

  const displayDiscussions = discussions.length > 0 ? discussions : mockDiscussions;
  const displayProjects = projects.length > 0 ? projects : mockProjects;
  const displayQuestions = questions.length > 0 ? questions : mockQuestions;

  // 合并所有活动并按时间排序
  const allActivities = [
    ...displayDiscussions.map(item => ({ ...item, type: 'discussion' })),
    ...displayProjects.map(item => ({ ...item, type: 'project' })),
    ...displayQuestions.map(item => ({ ...item, type: 'question' }))
  ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 5);

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">社区动态</h2>
            <p className="text-gray-600">查看最新的讨论、项目和问题</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="mb-6 p-6 bg-gray-50 rounded-lg animate-pulse">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-3 bg-gray-200 rounded w-20"></div>
                      <div className="h-3 bg-gray-200 rounded w-32"></div>
                    </div>
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">社区动态</h2>
          <p className="text-gray-600">查看最新的讨论、项目和问题</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {allActivities.map((activity) => (
            <div key={activity.id} className="mb-6 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img 
                    src={activity.user?.avatar_url || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20placeholder&image_size=square'} 
                    alt={activity.user?.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="font-medium text-gray-800">{activity.user?.name}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activity.type === 'discussion' ? 'bg-blue-100 text-blue-800' :
                      activity.type === 'project' ? 'bg-green-100 text-green-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {activity.type === 'discussion' ? '讨论' :
                       activity.type === 'project' ? '项目' : '问题'}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={14} className="mr-1" />
                      <span>{new Date(activity.created_at).toLocaleString()}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {activity.type === 'discussion' && (
                      <Link to={`/community/discussions/${activity.id}`} className="hover:text-[#2b6cb0]">{activity.title}</Link>
                    )}
                    {activity.type === 'project' && (
                      <Link to={`/community/projects/${activity.id}`} className="hover:text-[#2b6cb0]">{activity.title}</Link>
                    )}
                    {activity.type === 'question' && (
                      <Link to={`/community/questions/${activity.id}`} className="hover:text-[#2b6cb0]">{activity.title}</Link>
                    )}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {activity.content || activity.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {activity.type === 'discussion' && (
                        <span className="flex items-center text-gray-500 text-sm">
                          <MessageSquare size={14} className="mr-1" />
                          <span>{activity.replies_count || 0} 回复</span>
                        </span>
                      )}
                      {activity.type === 'project' && (
                        <span className="flex items-center text-gray-500 text-sm">
                          <MessageSquare size={14} className="mr-1" />
                          <span>{activity.comments_count || 0} 评论</span>
                        </span>
                      )}
                      {activity.type === 'question' && (
                        <span className="flex items-center text-gray-500 text-sm">
                          <MessageSquare size={14} className="mr-1" />
                          <span>{activity.answers_count || 0} 回答</span>
                        </span>
                      )}
                      <span className="flex items-center text-gray-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{activity.likes || 0} 点赞</span>
                      </span>
                    </div>
                    {activity.type === 'project' && activity.tags && (
                      <div className="flex flex-wrap gap-2">
                        {activity.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-gray-200 rounded">{tag}</span>
                        ))}
                      </div>
                    )}
                    {activity.type === 'question' && activity.tags && (
                      <div className="flex flex-wrap gap-2">
                        {activity.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-gray-200 rounded">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link 
            to="/community" 
            className="inline-flex items-center px-6 py-3 border border-[#2b6cb0] text-[#2b6cb0] rounded-lg hover:bg-[#2b6cb0] hover:text-white transition-colors"
          >
            查看更多社区活动
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityActivity;
