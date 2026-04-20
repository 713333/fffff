import React, { useEffect } from 'react';
import { useStore } from '../hooks/useStore';
import { Trophy, Star, User, Award } from 'lucide-react';

const AchievementShowcase: React.FC = () => {
  const { achievements, userAchievements, fetchAchievements, isLoading } = useStore();

  useEffect(() => {
    fetchAchievements();
  }, [fetchAchievements]);

  // 模拟成就数据
  const mockAchievements = [
    {
      id: '1',
      name: 'Python入门',
      description: '完成Python基础课程',
      icon: '🐍',
      requirement: '完成Python基础入门课程'
    },
    {
      id: '2',
      name: '数据分析新手',
      description: '完成数据分析基础课程',
      icon: '📊',
      requirement: '完成数据分析与可视化课程'
    },
    {
      id: '3',
      name: '社区活跃者',
      description: '在社区发布10个讨论',
      icon: '💬',
      requirement: '发布10个讨论帖'
    },
    {
      id: '4',
      name: '项目达人',
      description: '分享3个项目',
      icon: '💻',
      requirement: '分享3个项目'
    }
  ];

  // 模拟排行榜数据
  const mockLeaderboard = [
    {
      id: '1',
      name: '张三',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait&image_size=square',
      points: 1250,
      rank: 1
    },
    {
      id: '2',
      name: '李四',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait%202&image_size=square',
      points: 980,
      rank: 2
    },
    {
      id: '3',
      name: '王五',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait%203&image_size=square',
      points: 820,
      rank: 3
    },
    {
      id: '4',
      name: '赵六',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait%204&image_size=square',
      points: 750,
      rank: 4
    },
    {
      id: '5',
      name: '钱七',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait%205&image_size=square',
      points: 680,
      rank: 5
    }
  ];

  const displayAchievements = achievements.length > 0 ? achievements : mockAchievements;

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">成就展示</h2>
            <p className="text-gray-600">解锁成就，展示你的学习成果</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Trophy className="mr-2 text-[#ed8936]" />
                热门成就
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg animate-pulse">
                    <div className="h-12 w-12 bg-gray-200 rounded-full mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="mr-2 text-[#ed8936]" />
                学习排行榜
              </h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg animate-pulse">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    </div>
                    <div className="w-16 h-4 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">成就展示</h2>
          <p className="text-gray-600">解锁成就，展示你的学习成果</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Trophy className="mr-2 text-[#ed8936]" />
              热门成就
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {displayAchievements.map((achievement) => (
                <div key={achievement.id} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h4 className="font-medium mb-1">{achievement.name}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Star className="mr-2 text-[#ed8936]" />
              学习排行榜
            </h3>
            <div className="space-y-4">
              {mockLeaderboard.map((user) => (
                <div key={user.id} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold ${
                    user.rank === 1 ? 'bg-yellow-400 text-white' :
                    user.rank === 2 ? 'bg-gray-300 text-gray-800' :
                    user.rank === 3 ? 'bg-orange-300 text-white' :
                    'bg-gray-200 text-gray-700'
                  }`}>
                    {user.rank}
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-gray-600">学习积分</div>
                  </div>
                  <div className="font-semibold text-[#2b6cb0]">{user.points}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementShowcase;
