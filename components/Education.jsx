export default function Education() {
    const education = [
        {
            school: "Sri Venkateswara College of Engineering and Technology",
            degree: "Master of Computer Applications (MCA), Computer Science",
            period: "2008 - 2011"
        },
        {
            school: "V.O.C. College, Tuticorin",
            degree: "Bachelor of Science - B.Sc. Physics",
            period: "2004 - 2007"
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Education</h2>
                <div className="max-w-4xl mx-auto grid gap-8">
                    {education.map((edu, index) => (
                        <div key={index} className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1 group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-blue-500/10"></div>

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{edu.school}</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 font-medium">{edu.degree}</p>
                                </div>
                                <div className="md:text-right">
                                    <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold tracking-wide">
                                        {edu.period}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
