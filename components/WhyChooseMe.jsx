export default function WhyChooseMe() {
    const reasons = [
        {
            title: "Deep Expertise",
            description: "Across Mobile, Web, Cloud, and AI technologies."
        },
        {
            title: "End-to-End Ownership",
            description: "From architecture design to final deployment."
        },
        {
            title: "Proven Leadership",
            description: "Delivering enterprise & e-commerce systems."
        },
        {
            title: "Simplifying Complexity",
            description: "Turning complex problems into stable solutions."
        },
        {
            title: "Clean Code Standards",
            description: "Ensuring long-term maintainability and scalability."
        },
        {
            title: "Strong Communication",
            description: "Bridging the gap between business & engineering."
        }
    ];

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Teams Choose Me</h2>
                    <p className="text-lg text-gray-400">I build software that is functional, future-ready, and premium.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:bg-gray-800 transition-colors">
                            <div className="mt-1 text-green-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                                <p className="text-gray-400">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
