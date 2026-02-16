import { useEffect, useState } from 'react';
import LightPillar from './LightPillar';
import ProfileCard from './ProfileCard';
import node from '../assets/img/raven.jpg';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/20"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div 
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20 blur-3xl animate-pulse-slow"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-500/20 blur-3xl animate-pulse-slow"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s',
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* LightPillar Background */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={180}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* Profile Card - Positioned absolutely */}
      <div 
        className={`absolute top-35 right-6 sm:right-8 lg:right-20 xl:right-32 z-20 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
        style={{ animationDelay: '0.4s' }}
      >
        <ProfileCard
          name=""
          title=""
          handle="ravencodes"
          status="Available for work"
          contactText="Let's Connect"
          avatarUrl={node}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          showIcon
          showBehindGlow={true}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          customInnerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 pt-16 pb-8 lg:pt-0">
        <div className="max-w-4xl">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2.5 px-5 py-2.5 mb-10 sm:mb-12 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-sm transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wide">
              Open to opportunities
            </span>
          </div>

          {/* Main Heading - Improved Typography */}
          <h1 
            className={`font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-bold mb-8 sm:mb-10 tracking-tight transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              animationDelay: '0.1s',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #312e81 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.03em',
            }}
          >
            Raven Paul
            <br />
            <span className="inline-block" style={{ letterSpacing: '-0.02em' }}>
              R. Sison
            </span>
          </h1>

          {/* Subtitle - Refined Spacing */}
          <div 
            className={`mb-10 sm:mb-12 space-y-3 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 tracking-tight leading-tight">
              React Developer
            </p>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-medium tracking-wide">
              UI/UX Enthusiast
            </p>
          </div>

          {/* Description - Better Line Height and Measure */}
          <p 
            className={`text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-12 sm:mb-14 leading-relaxed max-w-3xl font-light transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              animationDelay: '0.3s',
              lineHeight: '1.7',
              letterSpacing: '-0.01em',
            }}
          >
            Crafting beautiful and efficient web experiences with modern technologies. 
            Passionate about clean code and user-centered design that makes a difference.
          </p>

          {/* CTA Buttons - Enhanced Spacing */}
          <div 
            className={`flex flex-col sm:flex-row gap-5 mb-16 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#projects"
              className="group px-9 py-5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-2xl font-bold text-lg hover:bg-white dark:hover:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="tracking-wide">View My Work</span>
              <div className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="group px-9 py-5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-2xl font-bold text-lg hover:bg-white dark:hover:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="tracking-wide">Get In Touch</span>
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* Social Links - Better Visual Hierarchy */}
          <div 
            className={`flex flex-wrap items-center gap-7 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">
              Connect
            </span>
            <div className="flex gap-4">
              <SocialLink href="https://github.com" label="GitHub" icon="github" />
              <SocialLink href="https://linkedin.com" label="LinkedIn" icon="linkedin" />
              <SocialLink href="https://twitter.com" label="Twitter" icon="twitter" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ animationDelay: '0.6s' }}
      >
        <div className="flex flex-col items-center gap-3 animate-bounce-slow">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">
            Scroll
          </span>
          <svg 
            className="w-6 h-6 text-slate-400 dark:text-slate-500" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        /* Custom font display class for better rendering */
        .font-display {
          font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );
}

// Social Link Component
function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-3.5 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10 active:scale-95"
      aria-label={label}
    >
      <SocialIcon name={icon} />
      <span className="absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
        {label}
      </span>
    </a>
  );
}

// Social Icons
function SocialIcon({ name }) {
  const icons = {
    github: (
      <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  };

  return icons[name] || null;
}