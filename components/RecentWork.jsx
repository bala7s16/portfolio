export default function RecentWork({ limit }) {
    const works = [
        {
            title: "Internal Employee Super App",
            description: "Comprehensive app for tracking overdue payments, sales analytics, HRD modules, and reports. Features real-time Credit vs Target achievement tracking.",
            tags: ["Kotlin", "Swift", "KMP", "Analytics"]
        },
        {
            title: "E-Commerce Mobile App",
            description: "A high-performance mobile shopping experience built with Kotlin Multiplatform. Features seamless checkout, real-time inventory, and 99.9% uptime.",
            tags: ["Kotlin", "Swift", "KMP", "Mobile"]
        },
        {
            title: "Sales Automation Mobile Suite",
            description: "Field-operational suite for 1,000+ sales agents with GPS tracking and offline mode. 40% uplift in efficiency.",
            tags: ["Android", ".NET", "Offline-first", "CRM"]
        },
        {
            title: "Secure PDF Utility App",
            description: "Android app for password removal & intelligent scanning. AI/ML added for text extraction. Reduced manual processing by 60%.",
            tags: ["Android", "AI/ML", "Security", "Automation"]
        },
        {
            title: "Cross-Platform Business Engine",
            description: "Shared logic powering Android & iOS apps using Kotlin Multiplatform. Resulted in 35% faster feature releases.",
            tags: ["KMP", "Kotlin", "iOS", "Android"]
        },
        {
            title: "API Logging & Analytics Dashboard",
            description: "Real-time API monitoring and analytics dashboard built with React and Tailwind CSS. Features automated log parsing and anomaly detection.",
            tags: ["React", "Tailwind", "Dashboard", "Analytics"]
        }
    ];

    const displayedWorks = limit ? works.slice(0, limit) : works;

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {limit ? "Featured Work" : "Recent Highlights"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {displayedWorks.map((work, index) => (
                        <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-blue-500/10"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{work.title}</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{work.description}</p>
                                <div className="flex flex-wrap gap-3">
                                    {work.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full tracking-wide">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
