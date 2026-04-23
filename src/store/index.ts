import { create } from 'zustand';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  role: 'student' | 'teacher' | 'professional';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  rating: number;
  students_count: number;
  created_at: string;
}

export interface Chapter {
  id: string;
  course_id: string;
  title: string;
  content: string;
  order: number;
  is_free: boolean;
}

export interface Exercise {
  id: string;
  course_id: string;
  title: string;
  description: string;
  difficulty: string;
  initial_code: string;
  test_cases: string;
  points: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  badge_url: string;
  category: string;
  points: number;
}

export interface Post {
  id: string;
  user_id: string;
  user_name?: string;
  user_avatar?: string;
  title: string;
  content: string;
  type: 'question' | 'project' | 'discussion';
  views: number;
  likes: number;
  created_at: string;
}

interface AppState {
  user: User | null;
  courses: Course[];
  exercises: Exercise[];
  achievements: Achievement[];
  posts: Post[];
  userAchievements: string[];
  loading: boolean;
  
  setUser: (user: User | null) => void;
  setCourses: (courses: Course[]) => void;
  setExercises: (exercises: Exercise[]) => void;
  setAchievements: (achievements: Achievement[]) => void;
  setPosts: (posts: Post[]) => void;
  setLoading: (loading: boolean) => void;
  addPost: (post: Post) => void;
  unlockAchievement: (achievementId: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  courses: [],
  exercises: [],
  achievements: [],
  posts: [],
  userAchievements: [],
  loading: false,
  
  setUser: (user) => set({ user }),
  setCourses: (courses) => set({ courses }),
  setExercises: (exercises) => set({ exercises }),
  setAchievements: (achievements) => set({ achievements }),
  setPosts: (posts) => set({ posts }),
  setLoading: (loading) => set({ loading }),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  unlockAchievement: (achievementId) => set((state) => ({
    userAchievements: [...state.userAchievements, achievementId]
  })),
}));
