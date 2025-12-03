export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 py-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-4">
              Project Manager • Mobile Engineering Leader • Full Stack Architect
            </h2>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-2">
              Balamurugan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 animate-gradient">
                Subburaj
              </span>
            </h1>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
            <p className="text-2xl font-light text-gray-700 dark:text-gray-200 leading-relaxed">
              I build <span className="font-semibold text-gray-900 dark:text-white">high-performance digital products</span>—from mobile apps to cloud-native enterprise platforms.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              With 12+ years of expertise across <span className="text-blue-600 dark:text-blue-400">Mobile</span> (Android, iOS, KMP, Flutter), <span className="text-purple-600 dark:text-purple-400">Full Stack</span> (.NET, Java, Node.js) and <span className="text-teal-600 dark:text-teal-400">Modern Web</span> (Next.js, React), I deliver solutions that are scalable, secure, and engineered to perform.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              From E-Commerce systems to AI-powered automation, I turn complex challenges into polished, user-centric experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-4">
            <a href="/resume.pdf" className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Download Resume
            </a>
            <a href="/contact" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-1 transition-all duration-300">
              Contact Me
            </a>
          </div>

          <div className="flex justify-center lg:justify-start items-center gap-3 pt-2 text-gray-500 font-medium">
            <span className="text-xl">📧</span>
            <a href="mailto:bala.subburaj@outlook.com" className="hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600">bala.subburaj@outlook.com</a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end relative group">
          <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500">
              <img
                src="/profile.jpg"
                alt="Balamurugan Subburaj"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
