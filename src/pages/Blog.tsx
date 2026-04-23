import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">我的博客</h1>
        <p className="text-gray-600">这里是我的技术分享和学习笔记，记录了我在编程路上的点滴。</p>
      </div>

      {/* 博客文章列表 */}
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link 
            to={`/blog/${post.id}`} 
            key={post.id} 
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold hover:text-[#165DFF] transition-colors">{post.title}</h2>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-[#165DFF] rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;