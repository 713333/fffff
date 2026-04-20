// 用户类型
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'industry_mentor';
  avatar_url?: string;
  bio?: string;
  created_at: string;
}

// 课程类型
export interface Course {
  id: string;
  title: string;
  description: string;
  cover_image?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

// 课程 enrollment 类型
export interface CourseEnrollment {
  id: string;
  user_id: string;
  course_id: string;
  progress: number;
  enrolled_at: string;
}

// 课程章节类型
export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  content: string;
  order_index: number;
  created_at: string;
}

// 练习类型
export interface Exercise {
  id: string;
  course_id: string;
  title: string;
  description: string;
  difficulty: string;
  solution_hint?: string;
  created_at: string;
}

// 提交类型
export interface Submission {
  id: string;
  user_id: string;
  exercise_id: string;
  code: string;
  result?: string;
  score?: number;
  submitted_at: string;
}

// 讨论类型
export interface Discussion {
  id: string;
  user_id: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  created_at: string;
  user?: User;
  replies_count?: number;
}

// 回复类型
export interface Reply {
  id: string;
  discussion_id: string;
  user_id: string;
  content: string;
  likes: number;
  created_at: string;
  user?: User;
}

// 项目类型
export interface Project {
  id: string;
  user_id: string;
  title: string;
  description: string;
  github_url?: string;
  demo_url?: string;
  tags: string[];
  likes: number;
  created_at: string;
  user?: User;
  comments_count?: number;
}

// 项目评论类型
export interface ProjectComment {
  id: string;
  project_id: string;
  user_id: string;
  content: string;
  created_at: string;
  user?: User;
}

// 问题类型
export interface Question {
  id: string;
  user_id: string;
  title: string;
  content: string;
  tags: string[];
  is_solved: boolean;
  created_at: string;
  user?: User;
  answers_count?: number;
}

// 回答类型
export interface Answer {
  id: string;
  question_id: string;
  user_id: string;
  content: string;
  is_accepted: boolean;
  likes: number;
  created_at: string;
  user?: User;
}

// 成就类型
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
}

// 用户成就类型
export interface UserAchievement {
  id: string;
  user_id: string;
  achievement_id: string;
  earned_at: string;
  achievement?: Achievement;
}
