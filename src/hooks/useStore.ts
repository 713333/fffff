import { create } from 'zustand';
import { User, Course, Discussion, Project, Question, Achievement } from '../types';
import { supabase } from '../utils/supabase';

interface Store {
  // 用户状态
  user: User | null;
  isLoading: boolean;
  error: string | null;
  
  // 课程状态
  courses: Course[];
  currentCourse: Course | null;
  
  // 社区状态
  discussions: Discussion[];
  projects: Project[];
  questions: Question[];
  
  // 成就状态
  achievements: Achievement[];
  userAchievements: Achievement[];
  
  // 方法
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // 认证方法
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: string) => Promise<void>;
  logout: () => Promise<void>;
  
  // 课程方法
  fetchCourses: () => Promise<void>;
  fetchCourseById: (id: string) => Promise<void>;
  
  // 社区方法
  fetchDiscussions: () => Promise<void>;
  fetchProjects: () => Promise<void>;
  fetchQuestions: () => Promise<void>;
  
  // 成就方法
  fetchAchievements: () => Promise<void>;
  fetchUserAchievements: (userId: string) => Promise<void>;
}

export const useStore = create<Store>((set, get) => ({
  // 初始状态
  user: null,
  isLoading: false,
  error: null,
  courses: [],
  currentCourse: null,
  discussions: [],
  projects: [],
  questions: [],
  achievements: [],
  userAchievements: [],
  
  // 方法
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  
  // 认证方法
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      if (data.user) {
        // 获取用户详细信息
        const { data: userData } = await supabase
          .from('users')
          .select('*')
          .eq('id', data.user.id)
          .single();
        set({ user: userData });
      }
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  
  register: async (email, password, name, role) => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      if (data.user) {
        // 创建用户记录
        const { data: userData } = await supabase
          .from('users')
          .insert({
            id: data.user.id,
            email,
            name,
            role
          })
          .select()
          .single();
        set({ user: userData });
      }
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  
  logout: async () => {
    set({ isLoading: true });
    try {
      await supabase.auth.signOut();
      set({ user: null });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  
  // 课程方法
  fetchCourses: async () => {
    set({ isLoading: true });
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*');
      if (error) throw error;
      set({ courses: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  
  fetchCourseById: async (id) => {
    set({ isLoading: true });
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .single();
      if (error) throw error;
      set({ currentCourse: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  
  // 社区方法
  fetchDiscussions: async () => {
    set({ isLoading: true });
    try {
      const { data, error } = await supabase
        .from('discussions')
        .select('*, users(*)')
        .order('created_at', { ascending: false });
      if (error) throw error;
      set({ discussions: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  
  fetchProjects: async () => {
    set({ isLoading: true });
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*, users(*)')
        .order('created_at', { ascending: false });
      if (error) throw error;
      set({ projects: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  
  fetchQuestions: async () => {
    set({ isLoading: true });
    try {
      const { data, error } = await supabase
        .from('questions')
        .select('*, users(*)')
        .order('created_at', { ascending: false });
      if (error) throw error;
      set({ questions: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  
  // 成就方法
  fetchAchievements: async () => {
    set({ isLoading: true });
    try {
      const { data, error } = await supabase
        .from('achievements')
        .select('*');
      if (error) throw error;
      set({ achievements: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  
  fetchUserAchievements: async (userId) => {
    set({ isLoading: true });
    try {
      const { data, error } = await supabase
        .from('user_achievements')
        .select('*, achievements(*)')
        .eq('user_id', userId);
      if (error) throw error;
      set({ userAchievements: data.map(ua => ua.achievements) });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
