export default function Experience() {
    const experiences = [
        {
            company: "Redington Limited",
            role: "Project Manager",
            period: "April 2024 - Present",
            description: "Managing end-to-end delivery of mobile and web applications, aligning technical execution with business goals. Leading cross-functional teams with Agile/Scrum methodology. Overseeing projects across Android, iOS, Flutter, React Native, KMP, and Full Stack. Driving cloud adoption and DevOps practices across AWS, GCP, Azure."
        },
        {
            company: "Redington Limited",
            role: "Project Team Lead",
            period: "October 2019 - April 2024",
            description: "Led a team of engineers, acting as both technical lead and delivery coordinator. Acted as a technical lead and architect, setting coding standards and design principles. Managed cloud deployments and optimized databases."
        },
        {
            company: "METAPLORE Solutions Pvt Ltd",
            role: "Tech Lead",
            period: "June 2017 - September 2019",
            description: "Served as a hands-on technical lead, building applications across Android, iOS, Flutter, React Native, .NET, Node.js, React.js. Responsible for end-to-end app lifecycle and cloud environments."
        },
        {
            company: "SAADHVI TECHNOLOGY",
            role: "Senior Software Engineer",
            period: "January 2016 - April 2017",
            description: "Contributed to MyWannado, an E-commerce platform. Integrated Indoor Atlas SDK for indoor navigation. Developed GeekSquad WiFi Analyzer and voice-enabled product search using Amazon Alexa."
        },
        {
            company: "EGB Systems & Solutions",
            role: "Software Engineer",
            period: "February 2015 - September 2015",
            description: "Key Projects: Epadasalai (Educational ERP), SafeGuard (Women’s Safety App), SafeGuard (Vehicle Tracking), SafeGuard (Marketing App). Delivered digital transformation and enterprise mobility solutions."
        },
        {
            company: "Mitosis Technologies Pvt. Ltd.",
            role: "Software Engineer",
            period: "March 2014 - February 2015",
            description: "Key Projects: ShopsBacker (Supermarket Portal), Didalio Wallet (Digital Payments Platform). Designed location-aware shopping apps and mobile wallet solutions."
        },
        {
            company: "BrainchildTechnologies",
            role: "Android Developer",
            period: "January 2012 - March 2014",
            description: "Key Projects: Dental Chair (Healthcare IoT), Cafe Coffee Day (Smart Retail IoT). Developed apps for smart dental equipment and coffee machine controllers using IoT integration."
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Professional Journey</h2>
                <div className="max-w-4xl mx-auto relative">
                    {/* Center Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-20"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10 shadow-lg"></div>

                                {/* Content Card */}
                                <div className="w-full md:w-5/12 pl-12 md:pl-0 md:pr-0">
                                    <div className={`p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1 group ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                                        <h4 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-4">{exp.company}</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
