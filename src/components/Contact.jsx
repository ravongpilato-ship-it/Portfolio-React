import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
          Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Info</h3>
                <p className="text-gray-900 dark:text-white text-lg font-semibold">09922777219</p>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Email</p>
                <a href="mailto:ravongpilato@gmail.com" className="text-blue-600 dark:text-blue-400 text-lg font-semibold hover:underline">
                  ravongpilato@gmail.com
                </a>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Location</p>
                <p className="text-gray-900 dark:text-white text-lg font-semibold">
                 Sotero, Nuesa, Roxas, Isabela
                </p>
              </div>
              

            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-700 text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 Raven Paul R. Sison. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
