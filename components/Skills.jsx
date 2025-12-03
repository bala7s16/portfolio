export default function Skills() {
    const skillCategories = [
        {
            category: "Mobile & Cross-Platform",
            skills: ["Kotlin", "Swift", "Flutter", "KMP", "Jetpack", "SwiftUI", "MVVM"]
        },
        {
            category: "Backend & Architecture",
            skills: [".NET Core", "Java/Spring Boot", "Node.js", "FastAPI", "Microservices", "Clean Architecture", "GraphQL"]
        },
        {
            category: "Web Development",
            skills: ["Next.js", "React", "TypeScript", "Tailwind", "Material UI", "Server Components"]
        },
        {
            category: "Cloud & DevOps",
            skills: ["GCP", "Azure", "AWS", "Jenkins", "Docker", "Kubernetes", "CI/CD", "ELK/Grafana"]
        },
        {
            category: "Databases",
            skills: ["PostgreSQL", "MS SQL", "MySQL", "SQL Server", "Cloud SQL", "MongoDB", "Redis", "Query Optimization"]
        },
        {
            category: "AI / Automation",
            skills: ["Python", "OCR", "NLP", "ML Pipelines", "AI Utilities"]
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Premium Skills Matrix</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 group-hover:text-blue-600 transition-colors">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="px-4 py-2 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
