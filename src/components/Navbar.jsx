export default function Navbar({ dark, setDark }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      dark 
        ? 'bg-slate-900 border-b border-slate-700' 
        : 'bg-white border-b border-gray-200'
    } shadow-lg`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className={`text-2xl font-bold ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
          RP
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <a href="#home" className={`transition-colors ${dark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>Home</a>
            <a href="#about" className={`transition-colors ${dark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>About</a>
            <a href="#projects" className={`transition-colors ${dark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>Projects</a>
            <a href="#contact" className={`transition-colors ${dark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>Contact</a>
          </div>
          
          <button 
            onClick={() => setDark(!dark)}
            className={`px-4 py-2 rounded-lg transition-all ${
              dark 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}
