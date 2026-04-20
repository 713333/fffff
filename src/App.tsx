import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            {/* 未来的路由 */}
            {/* <Route path="/courses" element={<Courses />} /> */}
            {/* <Route path="/courses/:id" element={<CourseDetail />} /> */}
            {/* <Route path="/community" element={<Community />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </main>
        <footer className="bg-[#1a365d] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Python学习社区</h3>
                <p className="text-gray-300 text-sm">专注于商务数据分析专业的学习平台，连接师生、学长学姐与行业从业者的专业社群。</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">快速链接</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="text-gray-300 hover:text-white transition-colors">首页</a></li>
                  <li><a href="/courses" className="text-gray-300 hover:text-white transition-colors">课程中心</a></li>
                  <li><a href="/community" className="text-gray-300 hover:text-white transition-colors">社区交流</a></li>
                  <li><a href="/profile" className="text-gray-300 hover:text-white transition-colors">个人中心</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">资源</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">学习资源</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">文档中心</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">常见问题</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">联系我们</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">联系方式</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-300">邮箱: contact@python-learning.com</li>
                  <li className="text-gray-300">电话: 123-456-7890</li>
                  <li className="text-gray-300">地址: 北京市海淀区中关村</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
              <p>© 2024 Python学习社区. 保留所有权利.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
