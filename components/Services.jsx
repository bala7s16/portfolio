export default function Services() {
    const services = [
        {
            title: "Mobile Engineering",
            icon: "📱",
            description: "Building sophisticated mobile experiences.",
            items: ["Android (Kotlin/Java)", "iOS (Swift)", "Kotlin Multiplatform (KMP)", "Flutter", "Offline-first & High-security"]
        },
        {
            title: "Full Stack Engineering",
            icon: "🏗️",
            description: "Designing robust, scalable systems.",
            items: [".NET Core / .NET 6+", "Java (Spring Boot)", "Node.js / Express", "FastAPI", "MS SQL / MySQL", "GraphQL & REST API", "Microservices Architecture"]
        },
        {
            title: "Modern Web Applications",
            icon: "💻",
            description: "Crafting fast, SEO-optimized apps.",
            items: ["Next.js 14 / React 18", "TypeScript", "Tailwind CSS", "Server Actions / SSR", "Headless E-Commerce"]
        },
        {
            title: "Cloud Engineering & DevOps",
            icon: "☁️",
            description: "Delivering stable cloud architecture.",
            items: ["GCP (Cloud Run, Pub/Sub)", "Azure & AWS", "Jenkins & CI/CD", "Docker & Kubernetes", "Infrastructure as Code"]
        },
        {
            title: "E-Commerce Engineering",
            icon: "🛍️",
            description: "Handling high traffic & real-time insights.",
            items: ["Scalable Product Catalogs", "Checkout & Payments", "Inventory Automation", "Order Management", "High-performance Caching"]
        },
        {
            title: "AI-Powered Engineering",
            icon: "🤖",
            description: "Integrating intelligent features.",
            items: ["PDF Text Extraction", "OCR + ML Pipelines", "Recommendation Engines", "Chatbot + NLP", "Predictive Analytics"]
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 animate-gradient">What I Do</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Premium engineering services designed for enterprise growth and scalability.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="relative p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group overflow-hidden hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>

                            <div className="relative z-10">
                                <div className="text-5xl mb-6 bg-white dark:bg-gray-800 w-20 h-20 flex items-center justify-center rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 text-base font-medium leading-relaxed">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-500 dark:text-gray-400 font-medium">
                                            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 shadow-sm"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
