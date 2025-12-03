export default function Stats() {
    const stats = [
        { label: "Years Experience", value: "13+" },
        { label: "Projects Delivered", value: "50+" },
        { label: "Users Impacted", value: "100k+" },
        { label: "Cloud Platforms", value: "3" }
    ];

    return (
        <section className="py-12 bg-white dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</h3>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
