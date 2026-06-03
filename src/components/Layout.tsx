import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAppStore } from '../store';
import { 
  Menu, 
  X, 
  LogOut, 
  Home, 
  Book, 
  Code, 
  FileText, 
  Trophy, 
  UserCircle, 
  Users,
  Sparkles
} from 'lucide-react';

const Layout = () => {
  const [user, setUser] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/');
  };

  const navItems = [
    { icon: Home, label: '首页', path: '/' },
    { icon: Book, label: '课程', path: '/courses' },
    { icon: Code, label: '练习', path: '/practice' },
    { icon: FileText, label: '测评', path: '/assessment' },
    { icon: Trophy, label: '成就', path: '/achievements' },
    { icon: Users, label: '社区', path: '/community' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-primary-800 via-primary-700 to-accent-600 text-white shadow-xl">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2 group">
            <div className="bg-white/20 p-2 rounded-xl group-hover:bg-white/30 transition-all">
              <Sparkles className="h-6 w-6" />
            </div>
            <span className="font-playfair tracking-wide">DataLearn</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-white/15 transition-all font-medium"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
            
            {user ? (
              <div className="relative group ml-4">
                <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/15 transition-all">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                    <UserCircle className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{user.email?.split('@')[0]}</span>
                </button>
                <div className="absolute right-0 mt-3 w-56 bg-white text-gray-800 rounded-2xl shadow-xl p-2 z-10 hidden group-hover:block animate-scale-in">
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <UserCircle className="h-5 w-5 text-gray-600" />
                    <span className="font-medium">个人中心</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">退出登录</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 ml-4">
                <Link
                  to="/login"
                  className="px-5 py-2.5 rounded-xl hover:bg-white/15 transition-colors font-medium"
                >
                  登录
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-primary-800 hover:bg-gray-100 px-6 py-2.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  注册
                </Link>
              </div>
            )}
          </nav>
          
          <button
            className="md:hidden text-white p-2 rounded-xl hover:bg-white/15 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-primary-900/95 backdrop-blur-lg px-4 py-6 border-t border-white/10">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-white/15 transition-all font-medium"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
              
              {user ? (
                <>
                  <div className="h-px bg-white/10 my-3" />
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-white/15 transition-all font-medium"
                  >
                    <UserCircle className="h-5 w-5" />
                    <span>个人中心</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-red-500/20 text-red-300 transition-all font-medium"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>退出登录</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="h-px bg-white/10 my-3" />
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-white/15 transition-all font-medium"
                  >
                    登录
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-white text-primary-800 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all text-center mt-2"
                  >
                    注册
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="text-2xl font-bold flex items-center gap-2 mb-4 font-playfair">
                <Sparkles className="h-6 w-6 text-accent-400" />
                <span>DataLearn</span>
              </Link>
              <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
                专为商务数据分析与应用专业打造的在线学习平台，从基础到高级，助你掌握Python数据分析核心技能，开启数据驱动的职业之路。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">快速链接</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">联系我们</h4>
              <ul className="space-y-3 text-gray-400">
                <li>📧 contact@datalearn.com</li>
                <li>📱 123-456-7890</li>
                <li>📍 北京市海淀区</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
            <p>© 2026 DataLearn. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
