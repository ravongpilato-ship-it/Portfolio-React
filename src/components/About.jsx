import LightPillar from './LightPillar';
import React from 'react';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Tools', items: ['Vite', 'Git', 'VS Code', 'npm'] },
    { category: 'Specialties', items: ['Component Design', 'State Management', 'Responsive Design', 'Performance'] }
  ];

  return (
    <section
      id="about"
      className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <LightPillar
        topColor="#5227FF"
        bottomColor="#FF9FFC"
        intensity={1}
        rotationSpeed={0.3}
        glowAmount={0.002}
        pillarWidth={3}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={25}
        interactive={false}
        mixBlendMode="screen"
        quality="high"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Main Title Bigger */}
        <h2 className="text-6xl font-bold mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>

        {/* Quick Facts */}
        <div className="bg-white/30 dark:bg-slate-700/30 mb-12 p-8 rounded-lg backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Quick Facts
          </h3>
          <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
              React & JavaScript Enthusiast
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
              Full-Stack Web Development
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
              Responsive UI Design
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
              Performance Optimization
            </li>
          </ul>
        </div>

        {/* Skills Grid */}
        <div className="grid mt-10 md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-gray-50/30 dark:bg-slate-700/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-lg text-gray-600 dark:text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
