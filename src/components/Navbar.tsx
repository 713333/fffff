import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../hooks/useStore';
import { Menu, X, User, LogOut, BookOpen, Users, Trophy } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useStore();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="bg-[#1a365d] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <BookOpen className="mr-2" />
          <span>Python学习社区</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-[#ed8936] transition-colors">首页</Link>
          <Link to="/courses" className="hover:text-[#ed8936] transition-colors">课程中心</Link>
          <Link to="/community" className="hover:text-[#ed8936] transition-colors">社区交流</Link>
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="flex items-center hover:text-[#ed8936] transition-colors">
                <User className="mr-1" size={18} />
                <span>{user.name}</span>
              </Link>
              <button 
                onClick={handleLogout}
                className="flex items-center hover:text-[#ed8936] transition-colors"
              >
                <LogOut className="mr-1" size={18} />
                <span>退出</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/auth/login" className="px-4 py-2 bg-[#2b6cb0] rounded hover:bg-[#3182ce] transition-colors">登录</Link>
              <Link to="/auth/register" className="px-4 py-2 bg-[#ed8936] rounded hover:bg-[#f6ad55] transition-colors">注册</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2d3748] px-4 py-2">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="py-2 hover:text-[#ed8936] transition-colors">首页</Link>
            <Link to="/courses" className="py-2 hover:text-[#ed8936] transition-colors">课程中心</Link>
            <Link to="/community" className="py-2 hover:text-[#ed8936] transition-colors">社区交流</Link>
            {user ? (
              <>
                <Link to="/profile" className="py-2 hover:text-[#ed8936] transition-colors flex items-center">
                  <User className="mr-2" size={18} />
                  <span>{user.name}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="py-2 hover:text-[#ed8936] transition-colors flex items-center"
                >
                  <LogOut className="mr-2" size={18} />
                  <span>退出</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/auth/login" className="py-2 hover:text-[#ed8936] transition-colors">登录</Link>
                <Link to="/auth/register" className="py-2 hover:text-[#ed8936] transition-colors">注册</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
