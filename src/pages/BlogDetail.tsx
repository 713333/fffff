import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">文章不存在</h1>
        <Link to="/blog" className="text-[#165DFF] hover:text-[#FF7D00] transition-colors flex items-center gap-1 justify-center">
          <ArrowLeft className="h-5 w-5" />
          返回博客列表
        </Link>
      </div>
    );
  }

  // 简单的Markdown渲染函数
  const renderMarkdown = (content: string) => {
    return content
      .replace(/^# (.*$)/gm, '<h1 className="text-3xl font-bold mb-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 className="text-2xl font-bold mb-4 mt-8">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 className="text-xl font-semibold mb-2 mt-6">$1</h3>')
      .replace(/`(.*?)`/g, '<code className="bg-gray-100 px-1 py-0.5 rounded">$1</code>')
      .replace(/```(.*?)```/gs, '<pre className="bg-gray-900 text-white rounded-md p-4 overflow-x-auto my-4"><code>$1</code></pre>')
      .replace(/\n/g, '<br />');
  };

  return (
    <div className="space-y-8">
      {/* 返回按钮 */}
      <Link to="/blog" className="text-[#165DFF] hover:text-[#FF7D00] transition-colors flex items-center gap-1 w-fit">
        <ArrowLeft className="h-5 w-5" />
        返回博客列表
      </Link>

      {/* 文章标题和信息 */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-6">发布于：{post.date}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-[#165DFF] rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 文章内容 */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
      </div>
    </div>
  );
};

export default BlogDetail;