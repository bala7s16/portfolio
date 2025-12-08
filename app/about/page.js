import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import RecentWork from "@/components/RecentWork";
import Services from "@/components/Services";

export default function About() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Premium Header */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 animate-gradient">
                        About Me
                    </h1>
                    <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        <p className="font-light text-2xl md:text-3xl text-gray-900 dark:text-white">
                            I’m a <span className="font-bold">Technology Leader</span>, <span className="font-bold">Project Manager</span>, and <span className="font-bold">Senior Mobile + Full Stack Developer</span>.
                        </p>
                        <p>
                            With a proven track record of delivering <span className="text-blue-600 font-semibold">enterprise-grade solutions</span> across global organizations, I bridge the gap between complex engineering and business value.
                        </p>
                        <p>
                            My expertise spans <span className="font-semibold text-purple-600">Mobile Engineering</span>, <span className="font-semibold text-teal-600">Full Stack Development</span>, and <span className="font-semibold text-orange-600">AI-driven automation</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sections with Alternating Backgrounds */}
            <div className="space-y-0">
                <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm">
                    <Services />
                </div>

                <div className="bg-gray-50 dark:bg-gray-900">
                    <Skills />
                </div>



                <div className="bg-gray-50 dark:bg-gray-900">
                    <Experience />
                </div>

                <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm">
                    <Education />
                </div>

                <div className="bg-gray-50 dark:bg-gray-900">
                    <Certifications />
                </div>
            </div>
        </div>
    );
}
