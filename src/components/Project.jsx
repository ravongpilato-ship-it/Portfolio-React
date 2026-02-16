import project1 from '../assets/img/Pro1.jpg';
import project2 from '../assets/img/Pro2.jpg';
import project3 from '../assets/img/ui.jpg';
import project4 from '../assets/img/Pro1.jpg';

export default function Projects() {
  const projects = [
    {
      img: project1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio showcasing projects and skills with dark mode support.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      link: '#'
    },
    {
      img: project2,
      title: 'Redux.js',
      description: 'Full-featured todo application with local storage, filtering, and drag-and-drop functionality.',
      tech: ['React', 'Redux', 'Tailwind CSS'],
      link: '#'
    },
    {
      img: project3,
      title: 'Advanced UI',
      description: 'A modern, fully responsive developer portfolio built with a scalable component architecture, smooth animations, and seamless dark mode support.',
      tech: ['React', 'API Integration', 'Tailwind CSS'],
      link: '#'
    },
  ];

  return (
    <section id="projects" className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
            >
              <div className="h-40 bg-red-400 dark:from-blue-500 dark:to-blue-700">
                {project.img && (
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-semibold shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-all text-sm font-semibold shadow-lg"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
