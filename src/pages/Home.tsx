import React from 'react';
import Hero from '../components/Hero';
import CourseRecommendations from '../components/CourseRecommendations';
import CommunityActivity from '../components/CommunityActivity';
import AchievementShowcase from '../components/AchievementShowcase';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <CourseRecommendations />
      <CommunityActivity />
      <AchievementShowcase />
    </div>
  );
};

export default Home;
