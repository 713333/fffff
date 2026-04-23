import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Home, Code, User, FileText } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 导航栏 */}
      <header className="bg-[#165DFF] text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <Code className="h-6 w-6" />
            <span>{personalInfo.name}'s Portfolio</span>
          </Link>
          
          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-[#FF7D00] transition-colors flex items-center">
              <Home className="h-5 w-5" />
              <span className="ml-1">首页</span>
            </Link>
            <Link to="/projects" className="hover:text-[#FF7D00] transition-colors flex items-center">
              <Code className="h-5 w-5" />
              <span className="ml-1">项目</span>
            </Link>
            <Link to="/about" className="hover:text-[#FF7D00] transition-colors flex items-center">
              <User className="h-5 w-5" />
              <span className="ml-1">关于</span>
            </Link>
            <Link to="/blog" className="hover:text-[#FF7D00] transition-colors flex items-center">
              <FileText className="h-5 w-5" />
              <span className="ml-1">博客</span>
            </Link>
          </nav>
          
          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-700 px-4 py-3">
            <nav className="flex flex-col gap-3">
              <Link to="/" className="py-2 hover:text-[#FF7D00] transition-colors">首页</Link>
              <Link to="/projects" className="py-2 hover:text-[#FF7D00] transition-colors">项目</Link>
              <Link to="/about" className="py-2 hover:text-[#FF7D00] transition-colors">关于</Link>
              <Link to="/blog" className="py-2 hover:text-[#FF7D00] transition-colors">博客</Link>
            </nav>
          </div>
        )}
      </header>

      {/* 主内容区 */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{personalInfo.name}'s Portfolio</h3>
              <p className="text-gray-400">{personalInfo.bio}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">项目</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">关于</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">博客</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">联系我</h4>
              <ul className="space-y-2 text-gray-400">
                <li>邮箱：{personalInfo.email}</li>
                <li><a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2026 {personalInfo.name}. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
